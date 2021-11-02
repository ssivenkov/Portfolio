import React, { useState } from "react";
import s from "./ContactForm.module.scss"
import { Formik } from "formik";
import { Preloader } from "../../commonComponents/Preloader/Preloader";

export const ContactForm = () => {
    type errorsType = {
        errorText?: string
    }

    const minLength = 10;
    const [currentError, setCurrentError] = useState<string>("");
    const [preloader, setPreloader] = useState<boolean>(false);
    const [formHasBeenSubmitted, setFormHasBeenSubmitted] = useState<boolean>(false);
    const clearCurrentError = () => {
        setCurrentError("");
    }

    return <Formik
        initialValues={{email: "", text: ""}}
        validateOnChange={false}
        validateOnBlur={false}
        validate={values => {
            const errorObject: errorsType = {};
            if (!values.email && !values.text) {
                errorObject.errorText = "Can't send an empty form";
                setCurrentError(errorObject.errorText);
                console.log("Can't send an empty form");
            } else if (values.email === "") {
                errorObject.errorText = "Email required";
                setCurrentError(errorObject.errorText);
                console.log("Email required");
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errorObject.errorText = "Invalid email address";
                setCurrentError(errorObject.errorText);
                console.log("Invalid email address");
            } else if (!values.text || values.text.length === 0) {
                errorObject.errorText = "Message text required";
                setCurrentError(errorObject.errorText);
                console.log("Message text required");
            } else if (values.text.length < minLength) {
                errorObject.errorText = `Text must be at least ${minLength} characters`;
                setCurrentError(errorObject.errorText);
                console.log(`Text must be at least ${minLength} characters`);
            } else {
                console.log("Validation check!");
            }
            return errorObject;
        }}

        onSubmit={(values) => {
            setPreloader(true);
            const formData = Object.entries(values).reduce((acc, [k, v]) => (acc.append(k, v), acc), new FormData());
            fetch("https://formspree.io/f/xknkljjq", {
                method: "POST",
                headers: {"Accept": "application/json"},
                body: formData,
            }).then(res => res.json())
                .then(res => {
                    console.log("Form send successfully");
                    setFormHasBeenSubmitted(true);
                    setPreloader(false);
                })
                .catch(error => {
                    console.log("Error sending form data");
                })
        }
        }
    >
        {({
            values,
            handleChange,
            handleSubmit,
            isSubmitting,
        }) => {
            return <>
                {preloader && <div className={s.miscContainer}>
                    <Preloader/>
                </div>}

                {!formHasBeenSubmitted &&
                <div className={`${s.formContainer} ${preloader ? s.formContainerHidden : ""}`}>
                    <form onSubmit={handleSubmit}
                          className={s.formContainer}>
                        <div className={s.inputContainer}>
                            <input
                                id={"email"}
                                name={"email"}
                                onChange={handleChange}
                                onBlur={clearCurrentError}
                                onFocus={clearCurrentError}
                                value={values.email}
                                placeholder={"YOUR EMAIL"}
                                className={s.input}
                            />
                        </div>
                        <textarea
                            id={"text"}
                            name={"text"}
                            onChange={handleChange}
                            onBlur={clearCurrentError}
                            onFocus={clearCurrentError}
                            value={values.text}
                            placeholder={"YOUR MESSAGE"}
                            className={s.textarea}
                            rows={6}
                        />
                        <div>
                            <button type="submit" disabled={isSubmitting} className={s.sendButton}>
                                Send message
                            </button>

                            {currentError.length >= 1 &&
                            <div className={s.miscContainer}>
                                <span className={s.errorText}>{currentError}</span>
                            </div>
                            }
                        </div>
                    </form>
                </div>
                }

                {formHasBeenSubmitted &&
                <div className={s.miscContainer}>
                    <span className={s.formSubmittedText}>
                        Thank you, the form has been submitted, await a response
                    </span>
                </div>
                }
            </>
        }}
    </Formik>
}