import React, {useEffect, useState} from 'react';

import {Formik} from 'formik';

import {Preloader} from '../../commonComponents/Preloader/Preloader';

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
      validateOnChange={false}
      validateOnBlur={false}
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
      onSubmit={(values) => {
        setPreloader(true);
        const formData = Object.entries(values).reduce<FormData>((acc, [k, v]) => {
          acc.append(k, v);

          return acc;
        }, new FormData());

        // console.log('formData -', formData);
        // console.log('entries -', Object.entries(values));
        //
        // //const qwer = Object.entries(values);
        //
        // const sss = new FormData();
        // sss.append('Name', 'Zalupa');
        // console.log('### sss', sss);
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
    >
      {({values, handleChange, handleSubmit, isSubmitting}) => {
        return (
          <>
            <div id={'preloader'} className={`${styles.miscContainer} ${styles.hidden}`}>
              <Preloader />
            </div>

            {!formHasBeenSubmitted && (
              <div
                className={`${styles.wrapperContainer} ${preloader ? styles.hidden : ''}`}
              >
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                  <div className={styles.inputContainer}>
                    <input
                      id={'email'}
                      name={'email'}
                      onChange={handleChange}
                      onBlur={clearCurrentError}
                      onFocus={clearCurrentError}
                      value={values.email}
                      placeholder={'YOUR EMAIL'}
                      className={styles.input}
                    />
                  </div>
                  <textarea
                    id={'text'}
                    name={'text'}
                    onChange={handleChange}
                    onBlur={clearCurrentError}
                    onFocus={clearCurrentError}
                    value={values.text}
                    placeholder={'YOUR MESSAGE'}
                    className={styles.textarea}
                    rows={6}
                  />
                  <div>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className={styles.sendButton}
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
