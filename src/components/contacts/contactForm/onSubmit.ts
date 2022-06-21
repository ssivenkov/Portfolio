import styles from '@components/contacts/contactForm/ContactForm.module.scss';
import { OnSubmitParamsType } from '@components/contacts/contactForm/types';

export const onSubmit = (params: OnSubmitParamsType) => {
  const { values, setIsPreloaderVisible, setIsFormHasBeenSubmitted, setIsErrorSendForm } =
    params;

  setIsPreloaderVisible(true);

  const formData = Object.entries(values).reduce<FormData>((acc, [k, v]) => {
    acc.append(k, v);

    return acc;
  }, new FormData());

  fetch('https://formspree.io/f/xknkljjq', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  })
    .then((res) => res.json())
    .then(() => {
      setIsPreloaderVisible(false);
      const preloader = document.getElementById('preloader');

      if (preloader) {
        preloader.classList.add(styles.hidden);
        setIsFormHasBeenSubmitted(true);
      }
    })
    .catch(() => {
      setIsFormHasBeenSubmitted(true);
      setIsPreloaderVisible(false);
      const preloader = document.getElementById('preloader');

      if (preloader) {
        preloader.classList.add(styles.hidden);
        setIsErrorSendForm(true);
      }
    });
};
