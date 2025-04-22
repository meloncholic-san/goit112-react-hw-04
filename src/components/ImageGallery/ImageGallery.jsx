import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

export default function ImageGallery({ galleryItems, updatePage, onImageClick }) {
    return (
        <>
            <ul className={styles.gallery}>
                {galleryItems.map((item, index) => (
                    <li key={index} className={styles.galleryItem}>
                        <ImageCard imageItem={item} onClick={onImageClick} />
                    </li>
                ))}
            </ul>
            {galleryItems.length > 0 && ( <LoadMoreBtn onClick={updatePage}/>
            )}
        </>
    );
}
