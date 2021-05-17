import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import API from './servicesApi/Images-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import SpinnerPage from './components/LoaderButton/LoaderButton';

class App extends Component {
    state = {
        url: '',
        alt: '',
        showModal: false,
        imgGallery: [],
        query: '',
        currentPage: 1,
        bigImg: '',
        bigImgTags: '',
        fetchLength: '',
        isLoading: false,
        error: null,
    };
    componentDidUpdate(_prevProps, prevState) {
        const { query } = this.state;
        if (prevState.query !== query) {
            console.log('fetching images...');
            this.fetchImg();
        }
    }
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };
    onChangeQuery = query => {
        this.setState({
            query,
            currentPage: 1,
            imgGallery: [],
            error: null,
        });
        console.log('query after changing input: ', {
            query,
        });
    };

    fetchImg = () => {
        const { currentPage, query } = this.state;
        const options = { query, currentPage };
        this.setState({ isLoading: true });
        API.fetchImg(options)
            .then(imgGallery => {
                this.setState(prevState => ({
                    imgGallery: [...prevState.imgGallery, ...imgGallery],
                    currentPage: prevState.currentPage + 1,
                }));
            })
            .catch(error => this.setState({ error }))
            .finally(() => {
                if (this.state.currentPage > 2) {
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth',
                    });
                }
                return this.setState({ isLoading: false });
            });
    };
    onImgClick = (img, imgTags) => {
        this.setState({ bigImg: img, bigImgTags: imgTags, showModal: true });
    };
    render() {
        const {
            imgGallery,
            isLoading,
            error,
            showModal,
            bigImg,
            bigImgTags,
            fetchLength,
        } = this.state;
        const shouldRenderLoadMoreButton =
            imgGallery.length > 0 && fetchLength === 12 && !isLoading;

        return (
            <div>
                {showModal && (
                    <Modal
                        onClose={this.toggleModal}
                        url={bigImg}
                        alt={bigImgTags}
                    />
                )}
                {error && <h1>Ой ошибка, всё пропало!!!</h1>}

                <SearchBar onSubmit={this.onChangeQuery} />

                {
                    <ImageGallery
                        img={imgGallery}
                        title={this.onChangeQuery}
                        onClick={this.onImgClick}
                    />
                }
                {isLoading && <SpinnerPage />}

                {shouldRenderLoadMoreButton && (
                    <button type="button" onClick={this.fetchImg}>
                        Загрузить ещё...
                    </button>
                )}
            </div>
        );
    }
}
console.log(SearchBar);
export default App;
