(this.webpackJsonpfinder=this.webpackJsonpfinder||[]).push([[0],{25:function(e,t,a){e.exports=a(77)},30:function(e,t,a){},31:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),l=(a(30),a(3)),u=a(4),i=a(6),s=a(5),m=(a(31),a(11)),d=a(8),g=a.n(d),h=(a(10),a(22),function(e){return"".concat(e,"key=").concat("17132651-8b19556890f65d96e0ac05a55")}),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;return h("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=").concat(a,"&"))},f=a(23),v=a.n(f),E=(a(71),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,className:"Loader"}))}),b=(a(72),function(e){var t=e.webformatURL,a=e.id,n=e.toggleModal,o=e.largeImageURL,c=e.addImgToModal;return r.a.createElement("li",{className:"ImageGalleryItem",onClick:n},r.a.createElement("img",{src:t,alt:"",onClick:c,className:"ImageGalleryItem-image",id:a,"data-value":o}))}),y=a(24),O=(a(73),function(e){var t=e.updateSearch,a=e.updateImages,o=Object(n.useState)(""),c=Object(y.a)(o,2),l=c[0],u=c[1];return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:a},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){var a=e.target.value;u(a),t(a)},name:"search",value:l})))}),S=(a(74),function(e){var t=e.loadMore;return r.a.createElement("div",null,r.a.createElement("button",{className:"Button",onClick:t},"Load more"))}),M=(a(75),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closeOnEsc=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleClickOverlay=function(t){"DIV"===t.target.nodeName&&e.props.toggleModal()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeOnEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeOnEsc)}},{key:"render",value:function(){var e=this.props.image;return r.a.createElement("div",{className:"Overlay",onClick:this.handleClickOverlay},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:e,alt:""})))}}]),a}(n.Component)),w=(a(76),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loader:!1,error:!1,currentPage:1,perPage:12,showModal:!1,image:"",search:""},e.updateSearch=function(t){e.setState({search:t})},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal}}))},e.addImgToModal=function(t){var a=t.target.dataset.value;e.setState({image:a})},e.updateImages=function(t){t.preventDefault(),e.setState({loader:!0});var a=e.state.search,n=p(a);g.a.get(n).then((function(t){return e.setState({images:t.data.hits,currentPage:2})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loader:!1})}))},e.loadMore=function(t){t.preventDefault();var a=e.state,n=a.currentPage,r=a.perPage,o=a.search,c=p(o,n,r);g.a.get(c).then((function(t){e.setState((function(e){return{images:[].concat(Object(m.a)(e.images),Object(m.a)(t.data.hits)),currentPage:e.currentPage+1}})),e.scrollPage()})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loader:!1})}))},e.scrollPage=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.loader,o=t.error,c=t.currentPage,l=t.perPage,u=t.showModal,i=t.image;return r.a.createElement(r.a.Fragment,null,u&&r.a.createElement(M,{toggleModal:this.toggleModal,image:i}),r.a.createElement(O,{currentPage:c,perPage:l,updateImages:this.updateImages,updateSearch:this.updateSearch}),n&&r.a.createElement(E,null),!n&&!o&&a.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"ImageGallery"},a.map((function(t){return r.a.createElement(b,Object.assign({},t,{key:t.id,toggleModal:e.toggleModal,addImgToModal:e.addImgToModal}))}))),r.a.createElement(S,{loadMore:this.loadMore})),o&&r.a.createElement("h1",null,"ERROR!!!"))}}]),a}(n.Component)),j=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.688899fe.chunk.js.map