import PropTypes from 'prop-types';

import styles from './ImageGalleryitem.module.css';

const ImageGalleryItem = ({ url, alt, onClick }) => {
    return (
        <>
            {/* <li className={styles.ImageGalleryItem}> */}
            <img
                src={url}
                alt={alt}
                className={styles.ImageGalleryItemimage}
                onClick={onClick}
            />
            {/* </li> */}
        </>
    );
};

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
