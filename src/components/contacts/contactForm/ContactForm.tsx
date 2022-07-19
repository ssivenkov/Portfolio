import React, { useEffect, useState } from 'react';

import { Preloader } from 'components/common/preloader/Preloader';
import { onSubmit } from 'components/contacts/contactForm/onSubmit';
import { validation } from 'components/contacts/contactForm/validation';
import { Formik } from 'formik';

import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const [currentError, setCurrentError] = useState<string>('');
  const [isPreloaderVisible, setIsPreloaderVisible] = useState<boolean>(false);
  const [isFormHasBeenSubmitted, setIsFormHasBeenSubmitted] = useState<boolean>(false);
  const [isErrorSendForm, setIsErrorSendForm] = useState<boolean>(false);
  const minLength = 10;

  const clearCurrentError = () => {
    setCurrentError('');
  };

  useEffect(() => {
    const preloader = document.getElementById('preloader');

    if (preloader && isPreloaderVisible) {
      preloader.classList.remove(styles.hidden);
    }
  }, [isPreloaderVisible]);

  return (
    <Formik
      initialValues={{ email: '', text: '' }}
      onSubmit={(values) =>
        onSubmit({
          values,
          setIsPreloaderVisible,
          setIsFormHasBeenSubmitted,
          setIsErrorSendForm,
        })
      }
      validate={(values) => validation({ values, setCurrentError, minLength })}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => {
        return (
          <>
            <div className={`${styles.miscContainer} ${styles.hidden}`} id='preloader'>
              <Preloader />
            </div>

            {!isFormHasBeenSubmitted && (
              <div
                className={`${styles.wrapperContainer} ${
                  isPreloaderVisible ? styles.hidden : ''
                }`}
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

            {isFormHasBeenSubmitted && !isErrorSendForm && (
              <div className={styles.miscContainer}>
                <span className={styles.formSubmittedText}>
                  Thank you, the form has been submitted, await a response
                </span>
              </div>
            )}

            {isErrorSendForm && (
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
