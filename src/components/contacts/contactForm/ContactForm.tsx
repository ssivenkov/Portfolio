import React, {useEffect, useState} from 'react';

import {Formik} from 'formik';

import {Preloader} from '../../common/Preloader/Preloader';

import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  type errorsType = {
    errorText?: string;
  };

  const minLength = 10;
  const [currentError, setCurrentError] = useState<string>('');
  const [preloader, setPreloader] = useState<boolean>(false);
  const [formHasBeenSubmitted, setFormHasBeenSubmitted] = useState<boolean>(false);
  const [errorSendForm, setErrorSendForm] = useState<boolean>(false);

  const clearCurrentError = () => {
    setCurrentError('');
  };

  useEffect(() => {
    const preloader = document.getElementById('preloader');

    if (preloader) {
      preloader.classList.remove(styles.hidden);
    }
  }, [preloader]);

  return (
    <Formik
      initialValues={{email: '', text: ''}}
      onSubmit={(values) => {
        setPreloader(true);
        const formData = Object.entries(values).reduce<FormData>((acc, [k, v]) => {
          acc.append(k, v);

          return acc;
        }, new FormData());

        fetch('https://formspree.io/f/xknkljjq', {
          method: 'POST',
          headers: {Accept: 'application/json'},
          body: formData,
        })
          .then((res) => res.json())
          .then(() => {
            setPreloader(false);
            const preloader = document.getElementById('preloader');

            if (preloader) {
              preloader.classList.add(styles.hidden);
              setFormHasBeenSubmitted(true);
            }
          })
          .catch(() => {
            setFormHasBeenSubmitted(true);
            setPreloader(false);
            const preloader = document.getElementById('preloader');

            if (preloader) {
              preloader.classList.add(styles.hidden);
              setErrorSendForm(true);
            }
          });
      }}
      validate={(values) => {
        const errorObject: errorsType = {};

        if (!values.email && !values.text) {
          errorObject.errorText = "Can't send an empty form";
          setCurrentError(errorObject.errorText);
        } else if (values.email === '') {
          errorObject.errorText = 'Email required';
          setCurrentError(errorObject.errorText);
        } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errorObject.errorText = 'Invalid email address';
          setCurrentError(errorObject.errorText);
        } else if (!values.text || values.text.length === 0) {
          errorObject.errorText = 'Message text required';
          setCurrentError(errorObject.errorText);
        } else if (values.text.length < minLength) {
          errorObject.errorText = `Text must be at least ${minLength} characters`;
          setCurrentError(errorObject.errorText);
        }

        return errorObject;
      }}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({values, handleChange, handleSubmit, isSubmitting}) => {
        return (
          <>
            <div className={`${styles.miscContainer} ${styles.hidden}`} id='preloader'>
              <Preloader />
            </div>

            {!formHasBeenSubmitted && (
              <div
                className={`${styles.wrapperContainer} ${preloader ? styles.hidden : ''}`}
              >
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                  <div className={styles.inputContainer}>
                    <input
                      className={styles.input}
                      id='email'
                      name='email'
                      onBlur={clearCurrentError}
                      onChange={handleChange}
                      onFocus={clearCurrentError}
                      placeholder='YOUR EMAIL'
                      value={values.email}
                    />
                  </div>
                  <textarea
                    className={styles.textarea}
                    id='text'
                    name='text'
                    onBlur={clearCurrentError}
                    onChange={handleChange}
                    onFocus={clearCurrentError}
                    placeholder='YOUR MESSAGE'
                    rows={6}
                    value={values.text}
                  />
                  <div>
                    <button
                      className={styles.sendButton}
                      disabled={isSubmitting}
                      type='submit'
                    >
                      Send message
                    </button>

                    {currentError.length >= 1 && (
                      <div className={styles.errorContainer}>
                        <span className={styles.errorText}>{currentError}</span>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            )}

            {formHasBeenSubmitted && !errorSendForm && (
              <div className={styles.miscContainer}>
                <span className={styles.formSubmittedText}>
                  Thank you, the form has been submitted, await a response
                </span>
              </div>
            )}

            {errorSendForm && (
              <div className={styles.miscContainer}>
                <span className={styles.formSubmittedText}>
                  Sorry, error internet connection. Please reload this page and try again
                </span>
              </div>
            )}
          </>
        );
      }}
    </Formik>
  );
};
