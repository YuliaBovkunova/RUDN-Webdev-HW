import galleryImageItemStyles from './GalleryImageItem.module.css';

type GalleryImageItemProps = {
  imagePath: string;
};

export const GalleryImageItem = ({ imagePath }: GalleryImageItemProps) => {
  return (
    <figure className={galleryImageItemStyles.item}>
      <img src={imagePath} alt="Фото заказа" />
    </figure>
  );
};
