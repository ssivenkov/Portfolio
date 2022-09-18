import React, { useCallback, useState } from 'react';

import ImageViewer from 'react-simple-image-viewer';

import styles from './Project.module.scss';
import { ProjectPropsType } from './types';

export const Project = (props: ProjectPropsType) => {
  const { title, description, technologies, imageLink, projectLink } = props;

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
            closeOnClickOutside
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
        <span className={styles.descriptionText}>{`Technologies: ${technologies}`}</span>
      </div>
      <a
        className={styles.buttonTitle}
        href={projectLink}
        rel='noreferrer'
        target='_blank'
      >
        View project
      </a>
    </div>
  );
};
