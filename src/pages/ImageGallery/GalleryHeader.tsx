import imageGalleryStyles from './ImageGallery.module.css';

export const GalleryHeader = () => {
  return (
    <header className={imageGalleryStyles.header}>
      <h2 className={imageGalleryStyles.heading}>
        Сделали более 3.000 заказов за 2 года
      </h2>
      <p className={imageGalleryStyles.subheading}>
        Посмотрите фото реальных заказов из нашего Instagram
      </p>
    </header>
  );
};
