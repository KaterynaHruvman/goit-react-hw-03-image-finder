import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleCloseModal);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseModal);
        window.removeEventListener('click', this.handleCloseModal);
    }

    handleCloseModal = event => {
        if (event.code === 'Escape' || event.currentTarget === event.target) {
            this.props.onClose();
        }
    };
    render() {
        const { url, alt } = this.props;

        return createPortal(
            <div
                className={styles.ModalBackdrop}
                onClick={this.handleCloseModal}
            >
                <div className={styles.Modal}>
                    <img src={url} alt={alt} />
                </div>
            </div>,
            modalRoot,
        );
    }
}

Modal.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
