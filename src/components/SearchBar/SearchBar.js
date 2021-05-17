import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

class Searchbar extends Component {
    state = {
        imgGallery: [],
        searchQuery: '',
    };

    handleChange = event => {
        this.setState({ searchQuery: event.currentTarget.value });
        console.log('imageName after changing input: ', {
            searchQuery: event.currentTarget.value,
        });
    };

    loadGallery = event => {
        event.preventDefault(); //чтобы не перегружать страницу при Сабмите формы

        this.props.onSubmit(this.state.searchQuery); //

        this.setState({ searchQuery: '' }); //обновляем строку приновом запросе
    };

    render() {
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.loadGallery}>
                    <button type="submit" className={styles.SearchFormbutton}>
                        <span className={styles.SearchFormbuttonlabel}>
                            Search
                        </span>
                    </button>

                    <input
                        className={styles.SearchForminput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchQuery}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
