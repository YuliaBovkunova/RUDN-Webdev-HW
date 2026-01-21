import { GalleryHeader } from './GalleryHeader';
import { GalleryImages } from '../../components/GalleryImages/GalleryImages';
import imageGalleryStyles from './ImageGallery.module.css';

export const ImageGallery = () => {
  return (
    <section className={imageGalleryStyles.gallery}>
      <GalleryHeader />
      <GalleryImages />
    </section>
  );
};
