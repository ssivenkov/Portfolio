import React, { useCallback, useState } from 'react';

import GetItOnGooglePlay from 'assets/images/other/Google_Play.webp';
import ImageViewer from 'react-simple-image-viewer';

import styles from './Project.module.scss';
import { ProjectPropsType } from './types';

export const Project = (props: ProjectPropsType) => {
  const { title, description, stack, imageLink, projectLink, googlePlayLink } = props;

  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);

  const openImageViewer = useCallback(() => {
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <div className={styles.generalContainer}>
      {isViewerOpen && (
        <div className={styles.imageViewerContainer}>
          <ImageViewer
            backgroundStyle={{ backgroundColor: 'var(--background)' }}
            closeOnClickOutside={true}
            currentIndex={0}
            onClose={closeImageViewer}
            src={[imageLink]}
          />
        </div>
      )}
      <div
        onClick={openImageViewer}
        onKeyDown={openImageViewer}
        role='button'
        tabIndex={0}
      >
        <img alt={`${title} project`} className={styles.image} src={imageLink} />
      </div>
      <div className={styles.descriptionContainer}>
        <h5 className={styles.title}>{title}</h5>
        <span className={styles.descriptionText}>{description}</span>
        <span className={styles.descriptionText}>{`Stack: ${stack}`}</span>
      </div>
      <div className={styles.buttonsContainer}>
        {googlePlayLink && (
          <a
            className={styles.googlePlayButton}
            href={googlePlayLink}
            rel='noreferrer'
            target='_blank'
          >
            <img
              alt='Google Play link'
              className={styles.googlePlayImage}
              src={GetItOnGooglePlay}
            />
          </a>
        )}
        <a
          className={styles.viewButton}
          href={projectLink}
          rel='noreferrer'
          target='_blank'
        >
          View project
        </a>
      </div>
    </div>
  );
};
