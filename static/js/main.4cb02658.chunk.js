(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Modal:"Modal_Modal__2WBTT",ModalBackdrop:"Modal_ModalBackdrop__3Mdxi"}},21:function(e,t,a){e.exports={ImageGallery:"ImafeGAllery_ImageGallery__14Jp6",ImageGalleryItem:"ImafeGAllery_ImageGalleryItem__Hy1pG"}},22:function(e,t,a){e.exports={ImageGalleryItemimage:"ImageGalleryitem_ImageGalleryItemimage__18Mtr"}},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),l=(a(32),a(33),a(11)),i=a(4),s=a(5),u=a(7),h=a(6),m=a(8),g=a.n(m),d=a(1),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleChange=function(t){e.setState({imageName:t.currentTarget.value}),console.log("imageName after changing input: ",{imageName:t.currentTarget.value})},e.loadGallery=function(t){t.preventDefault(),e.props.onSubmit(e.state.imageName),e.setState({imageName:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:g.a.Searchbar,children:Object(d.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.loadGallery,children:[Object(d.jsx)("button",{type:"submit",className:g.a.SearchFormbutton,children:Object(d.jsx)("span",{className:g.a.SearchFormbuttonlabel,children:"Search"})}),Object(d.jsx)("input",{className:g.a.SearchForminput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.imageName,onChange:this.handleChange})]})})}}]),a}(n.Component),j=a(20),p=a.n(j),f=function(e){var t=e.query,a=void 0===t?" ":t,n=e.currentPage,r=void 0===n?1:n;return p.a.get("".concat("http://pixabay.com/api/?","=").concat(a,"&page=").concat(r,"&key=").concat("20764916-f72ac860731c159c811384133","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},y=a(21),v=a.n(y),O=a(22),S=a.n(O),_=function(e){var t=e.url,a=e.alt,n=e.onClick;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("img",{src:t,alt:a,className:S.a.ImageGalleryItemimage,onClick:n})})},x=function(e){var t=e.img,a=e.onClick;return Object(d.jsx)("ul",{className:v.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(d.jsx)("li",{children:Object(d.jsx)(_,{url:n,alt:o,onClick:function(){return a(r,o)}})},t)}))})},I=a(10),C=a.n(I),k=document.querySelector("#modal-root"),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleCloseModal=function(t){"Escape"!==t.code&&t.currentTarget!==t.target||e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleCloseModal),window.removeEventListener("click",this.handleCloseModal)}},{key:"render",value:function(){var e=this.props,t=e.url,a=e.alt;return Object(o.createPortal)(Object(d.jsx)("div",{className:C.a.ModalBackdrop,onClick:this.handleCloseModal,children:Object(d.jsx)("div",{className:C.a.Modal,children:Object(d.jsx)("img",{src:t,alt:a})})}),k)}}]),a}(n.Component),w=a(24),G=function(){return Object(d.jsx)(w.a,{grow:!0,children:Object(d.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={url:"",alt:"",showModal:!1,imgGallery:[],query:"",currentPage:1,bigImg:"",bigImgTags:"",fetchLength:"",isLoading:!1,error:null},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onChangeQuery=function(t){e.setState({query:t,currentPage:1,imgGallery:[],error:null}),console.log("query after changing input: ",{query:t})},e.fetchImg=function(){var t=e.state,a=t.currentPage,n={query:t.query,currentPage:a};e.setState({isLoading:!0}),f(n).then((function(t){e.setState((function(e){return{imgGallery:[].concat(Object(l.a)(e.imgGallery),Object(l.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.state.currentPage>2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.setState({isLoading:!1})}))},e.onImgClick=function(t,a){e.setState({bigImg:t,bigImgTags:a,showModal:!0})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state.query;t.query!==a&&(console.log("fetching images..."),this.fetchImg())}},{key:"render",value:function(){var e=this.state,t=e.imgGallery,a=e.isLoading,n=e.error,r=e.showModal,o=e.bigImg,c=e.bigImgTags,l=e.fetchLength,i=t.length>0&&12===l&&!a;return Object(d.jsxs)("div",{children:[r&&Object(d.jsx)(M,{onClose:this.toggleModal,url:o,alt:c}),n&&Object(d.jsx)("h1",{children:"\u041e\u0439 \u043e\u0448\u0438\u0431\u043a\u0430, \u0432\u0441\u0451 \u043f\u0440\u043e\u043f\u0430\u043b\u043e!!!"}),Object(d.jsx)(b,{onSubmit:this.onChangeQuery}),Object(d.jsx)(x,{img:t,title:this.onChangeQuery,onClick:this.onImgClick}),a&&Object(d.jsx)(G,{}),i&&Object(d.jsx)("button",{type:"button",onClick:this.fetchImg,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0451..."})]})}}]),a}(n.Component);console.log(b);var F=N;c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__19WMJ",SearchForm:"SearchBar_SearchForm__1k1JW",SearchFormbutton:"SearchBar_SearchFormbutton__1LccH",SearchFormbuttonlabel:"SearchBar_SearchFormbuttonlabel__2vAiG",SearchForminput:"SearchBar_SearchForminput__2rUnq"}}},[[53,1,2]]]);
//# sourceMappingURL=main.4cb02658.chunk.js.map