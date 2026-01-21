import { GalleryImageItem } from '../GalleryImageItem/GalleryImageItem';
import galleryImagesStyles from './GalleryImages.module.css';
import { getGalleryImagePaths } from './galleryImagePaths';

export const GalleryImages = () => {
  const imagePaths = getGalleryImagePaths();

  return (
    <div className={galleryImagesStyles.grid}>
      {imagePaths.map((imagePath, index) => (
        <GalleryImageItem key={index} imagePath={imagePath} />
      ))}
    </div>
  );
};
