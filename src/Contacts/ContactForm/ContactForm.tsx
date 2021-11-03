import React, { useEffect, useState } from "react";
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
    const [errorSendForm, setErrorSendForm] = useState<boolean>(false);

    const clearCurrentError = () => {
        setCurrentError("");
    }

    useEffect(() => {
        if (preloader) {
            document.getElementById("preloader")!.classList.remove(s.hidden);
            // selected to work with id because ref works slower
        }
    }, [preloader]);

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
                    setPreloader(false);
                    document.getElementById("preloader")!.classList.add(s.hidden);
                    setFormHasBeenSubmitted(true);
                    console.log("Form send successfully");
                })
                .catch(error => {
                    setFormHasBeenSubmitted(true);
                    setPreloader(false);
                    document.getElementById("preloader")!.classList.add(s.hidden);
                    setErrorSendForm(true);
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
                <div id={"preloader"} className={`${s.miscContainer} ${s.hidden}`}>
                    <Preloader/>
                </div>

                {!formHasBeenSubmitted &&
                <div className={`${s.wrapperContainer} ${preloader ? s.hidden : ""}`}>
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
                            <div className={s.errorContainer}>
                                <span className={s.errorText}>{currentError}</span>
                            </div>
                            }
                        </div>
                    </form>
                </div>
                }

                {formHasBeenSubmitted && !errorSendForm &&
                <div className={s.miscContainer}>
                    <span className={s.formSubmittedText}>
                        Thank you, the form has been submitted, await a response
                    </span>
                </div>
                }

                {errorSendForm &&
                <div className={s.miscContainer}>
                    <span className={s.formSubmittedText}>
                        Sorry, error internet connection. Please reload this page and try again
                    </span>
                </div>
                }
            </>
        }}
    </Formik>
}