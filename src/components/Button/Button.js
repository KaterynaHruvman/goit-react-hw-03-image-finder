import styles from './Button.module.css';

const Button = ({ onClick }) => {
    return (
        <button type="button" className={styles.Button} onClick={onClick}>
            Загрузить еще...
        </button>
    );
};

export default Button;
