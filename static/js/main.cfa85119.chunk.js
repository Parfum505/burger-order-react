(this["webpackJsonpburger-order-react"]=this["webpackJsonpburger-order-react"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),c=(n(81),n(5)),l=n(6),s=n(8),u=n(7),d=function(e){return e.children},m=n(54),p=n.n(m),_=n(32),h=n.n(_),E=n(55),f=n.n(E),g=n(56),b=n.n(g),v=function(){return r.a.createElement("div",{className:b.a.Logo},r.a.createElement("img",{src:f.a,alt:"logo"}))},C=n(57),y=n.n(C),O=n(33),I=n.n(O),N=n(22),j=function(e){return r.a.createElement("li",{className:I.a.NavItem},r.a.createElement(N.b,{to:e.link,exact:!0,activeClassName:I.a.active},e.children))},S=function(){return r.a.createElement("ul",{className:y.a.NavItems},r.a.createElement(j,{link:"/"},"Burger Builder"),r.a.createElement(j,{link:"/orders"},"Orders"))},R=n(59),k=n.n(R),B=function(e){return r.a.createElement("div",{className:k.a.MobileMenuBtn,onClick:e.clicked},r.a.createElement("div",null,"\xa0"),r.a.createElement("div",null,"\xa0"),r.a.createElement("div",null,"\xa0"))},T=r.a.memo((function(e){return r.a.createElement("header",{className:h.a.Toolbar},r.a.createElement(B,{clicked:e.openMenu}),r.a.createElement("div",{className:h.a.Logo},r.a.createElement(v,null)),r.a.createElement("nav",null,r.a.createElement(S,null)))})),M=n(29),x=n.n(M),D=n(27),L=n(36),H=n.n(L),P=function(e){var t=[H.a.Backdrop];if(e.addClass){var n,a=Object(D.a)(e.addClass);try{for(a.s();!(n=a.n()).done;){var o=n.value;t.push(H.a[o])}}catch(i){a.e(i)}finally{a.f()}}return e.show?r.a.createElement("div",{className:t.join(" "),onClick:e.clicked}):null},w=r.a.memo((function(e){return r.a.createElement(d,null,r.a.createElement(P,{addClass:["hideDesktop"],show:e.show,clicked:e.closeMenu}),r.a.createElement("div",{className:[x.a.SideMenu,e.show?x.a.Open:null].join(" ")},r.a.createElement("div",{className:x.a.Logo},r.a.createElement(v,null)),r.a.createElement("nav",null,r.a.createElement(S,null))))})),A=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showMobileMenu:!1},e.closeMobileMenuHandler=function(){e.setState({showMobileMenu:!1})},e.openMobileMenuHandler=function(){e.setState({showMobileMenu:!0})},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(T,{openMenu:this.openMobileMenuHandler}),r.a.createElement(w,{show:this.state.showMobileMenu,closeMenu:this.closeMobileMenuHandler}),r.a.createElement("main",{className:p.a.Content},this.props.children))}}]),n}(a.Component),F=n(11),U=n(73),z=n(14),G=n.n(z),V=function(e){var t=null;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:G.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:G.a.BreadTop},r.a.createElement("div",{className:G.a.Seeds1}),r.a.createElement("div",{className:G.a.Seeds2}));break;case"meat":t=r.a.createElement("div",{className:G.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:G.a.Cheese});break;case"bacon":t=r.a.createElement("div",{className:G.a.Bacon});break;case"salad":t=r.a.createElement("div",{className:G.a.Salad});break;default:t=null}return t},q=n(61),Y=n.n(q),W=function(e){var t=e.ingredients,n=Object.keys(t).map((function(e){return Object(U.a)(Array(t[e])).map((function(t,n){return r.a.createElement(V,{key:e+n,type:e})}))})).reduce((function(e,t){return e.concat(t)}),[]);return n.length||(n=r.a.createElement("p",null,"Please add some ingredients!")),r.a.createElement("div",{className:Y.a.Burger},r.a.createElement(V,{type:"bread-top"}),n,r.a.createElement(V,{type:"bread-bottom"}))},J=n(38),Z=n.n(J),$=n(25),X=n.n($),Q=function(e){return r.a.createElement("div",{className:X.a.BuildControl},r.a.createElement("div",{className:X.a.Label},e.label),r.a.createElement("button",{className:X.a.Less,onClick:e.remove,disabled:e.disabled},"Less"),r.a.createElement("button",{className:X.a.More,onClick:e.add},"More"))},K=function(e){var t=Object.keys(e.ingredients).map((function(e){return{label:e.charAt(0).toUpperCase()+e.slice(1),type:e}}));return r.a.createElement("div",{className:Z.a.BuildControls},r.a.createElement("p",null,"Current price: ",r.a.createElement("strong",null,e.totalPrice.toFixed(2)),"\xa0$"),t.map((function(t){return r.a.createElement(Q,{key:"ctrl-".concat(t.label),label:t.label,add:function(){return e.addIngredients(t.type)},remove:function(){return e.removeIngredients(t.type)},disabled:e.ingredients[t.type]<=0})})),r.a.createElement("button",{className:Z.a.OrderButton,disabled:!e.purchasable,onClick:e.buy},"ORDER NOW"))},ee=n(30),te=n.n(ee),ne=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){var e=[te.a.Modal];if(this.props.show&&e.push(te.a.Active),this.props.addedClasses){var t,n=Object(D.a)(this.props.addedClasses);try{for(n.s();!(t=n.n()).done;){var a=t.value;e.push(te.a[a])}}catch(o){n.e(o)}finally{n.f()}}return r.a.createElement(d,null,r.a.createElement(P,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:e.join(" ")},this.props.children))}}]),n}(a.Component),ae=n(39),re=n.n(ae),oe=function(e){return r.a.createElement("button",{disabled:e.disabled,className:[re.a.Button,re.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ie=function(e){var t=Object.entries(e.ingredients).map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},e[0]),":\xa0",e[1])}));return r.a.createElement(d,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price: ",e.totalPrice.toFixed(2),"\xa0$")),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(oe,{btnType:"Danger",clicked:e.buyCancel},"CANCEL"),r.a.createElement(oe,{btnType:"Success",clicked:e.buyContinue},"CONTINUE"))},ce=n(62),le=n.n(ce).a.create({baseURL:"https://burger-order-react.firebaseio.com/"}),se=n(63),ue=n.n(se),de=function(){return r.a.createElement("div",{className:ue.a.Loader},"Loading...")},me=function(e,t){return function(n){Object(s.a)(o,n);var a=Object(u.a)(o);function o(){var e;Object(c.a)(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null},e.modalClose=function(){e.setState({error:null})},e}return Object(l.a)(o,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t}),(function(t){e.setState({error:t})})),this.respInterceptor=t.interceptors.response.use((function(t){return e.setState({error:null}),t}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.respInterceptor)}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(ne,{show:this.state.error,modalClosed:this.modalClose},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(a.Component)},pe=n(2),_e=n(28),he=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={buying:!1},e.buyCancelHandler=function(){e.setState({buying:!1})},e.buyContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e.buyHandler=function(){e.setState({buying:!0})},e.updatePurchaseState=function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)>0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initIngredientsHandler()}},{key:"render",value:function(){var e=null,t=this.props.error?r.a.createElement("p",{style:{textAlign:"center",marginTop:90,color:"red",fontWeight:"bold"}},"Ingredients can't be loaded."):r.a.createElement(de,null);return this.props.ingredients&&(t=r.a.createElement(d,null,r.a.createElement(W,{ingredients:this.props.ingredients}),r.a.createElement(K,{addIngredients:this.props.addIngredientHandler,removeIngredients:this.props.removeIngredientHandler,ingredients:this.props.ingredients,totalPrice:this.props.totalPrice,purchasable:this.updatePurchaseState(this.props.ingredients),buy:this.buyHandler})),e=r.a.createElement(ie,{ingredients:this.props.ingredients,buyCancel:this.buyCancelHandler,buyContinue:this.buyContinueHandler,totalPrice:this.props.totalPrice})),r.a.createElement(d,null,r.a.createElement(ne,{addedClasses:[],show:this.state.buying,modalClosed:this.buyCancelHandler},e),t)}}]),n}(a.Component),Ee=Object(F.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error}}),(function(e){return{addIngredientHandler:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},removeIngredientHandler:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},initIngredientsHandler:function(){return e((function(e){le.get("https://burger-order-react.firebaseio.com/ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(){return e({type:"FETCH_INGREDIENTS_ERROR"})}))}))},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})}}}))(me(he,le)),fe=n(64),ge=n.n(fe),be=function(e){return r.a.createElement("div",{className:ge.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",null,r.a.createElement(W,{ingredients:e.ingredients})),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price: ",e.totalPrice.toFixed(2),"\xa0$")),r.a.createElement(oe,{btnType:"Danger",clicked:e.checkoutCancel},"CANCEL"),e.activeContactInfo?null:r.a.createElement(oe,{btnType:"Success",clicked:e.checkoutContinue},"CONTINUE"))},ve=n(17),Ce=n(65),ye=n.n(Ce),Oe=n(26),Ie=n.n(Oe),Ne=function(e){var t=null,n=[Ie.a.InputElement];switch(e.touched&&e.invalid&&n.push(Ie.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayVal)})));break;default:t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:Ie.a.Input},r.a.createElement("label",{className:Ie.a.Label,htmlFor:""},e.label),t)},je=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementType:"input",elementConfig:{name:"name",type:"text",placeholder:"Your name"},value:"",validation:{required:!0,minLength:2,valid:!1},touched:!1},street:{elementType:"input",elementConfig:{name:"street",type:"text",placeholder:"Your street/app"},value:"",validation:{required:!0,valid:!1},touched:!1},zipCode:{elementType:"input",elementConfig:{name:"zipCode",type:"text",placeholder:"Your zip code"},value:"",validation:{required:!0,minLength:5,maxLength:5,valid:!1},touched:!1},city:{elementType:"input",elementConfig:{name:"city",type:"text",placeholder:"Your city"},value:"",validation:{required:!0,valid:!1},touched:!1},email:{elementType:"input",elementConfig:{name:"email",type:"email",placeholder:"Your email"},value:"",validation:{required:!0,isEmail:!0,valid:!1},touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayVal:"Fastest"},{value:"cheapest",displayVal:"Cheapest"}]},value:"",validation:{valid:!0}}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ingredients,price:e.props.totalPrice,orderData:n};e.props.onOrderBurger(r)},e.inputChangedHandler=function(t,n){var a=Object(pe.a)({},e.state.orderForm),r=Object(pe.a)({},a[n]);r.value=t.target.value,r.touched=!0,r.validation.valid=e.checkValidation(r.value,r.validation),a[n]=r;var o=!0;for(var i in a)a[i].validation&&(o=a[i].validation.valid&&o);e.setState({orderForm:a,formIsValid:o})},e}return Object(l.a)(n,[{key:"checkValidation",value:function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=Object.entries(this.state.orderForm),n=r.a.createElement("form",{action:"",onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(Ne,{key:t[0],elementType:t[1].elementType,elementConfig:t[1].elementConfig,value:t[1].value,changed:function(n){return e.inputChangedHandler(n,t[0])},invalid:!t[1].validation.valid,touched:t[1].touched})})),r.a.createElement(oe,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(n=r.a.createElement(de,null)),r.a.createElement("div",{className:ye.a.ContactInfo},r.a.createElement("h4",null,"Enter your Contact Info"),n)}}]),n}(a.Component),Se=Object(F.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,loading:e.order.loading}}),(function(e){return{onOrderBurger:function(t){return e((n=t,function(e){e({type:"PURCHASE_BURGER_START"}),le.post("/orders.json",n).then((function(t){e(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(t.data.name,n))})).catch((function(t){e(function(e){return{type:"PURCHASE_BURGER_ERROR",error:e}}(t))}))}));var n}}}))(me(je,le)),Re=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={activeContactInfo:!1},e.checkoutCancelHandler=function(){e.setState({activeContactInfo:!1}),e.props.history.goBack()},e.checkoutContinueHandler=function(){e.setState({activeContactInfo:!0}),e.props.history.replace("/checkout/contact-info")},e}return Object(l.a)(n,[{key:"render",value:function(){var e=r.a.createElement(ve.a,{to:"/"});if(this.props.ingredients){var t=this.props.purchased?r.a.createElement(ve.a,{to:"/"}):null;e=r.a.createElement(r.a.Fragment,null,t,r.a.createElement(be,{ingredients:this.props.ingredients,checkoutCancel:this.checkoutCancelHandler,checkoutContinue:this.checkoutContinueHandler,totalPrice:this.props.totalPrice,activeContactInfo:this.state.activeContactInfo}),r.a.createElement(ve.b,{path:this.props.match.path+"/contact-info",component:Se}))}return e}}]),n}(a.Component),ke=Object(F.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,purchased:e.order.purchased}}))(Re),Be=n(66),Te=n(40),Me=n.n(Te);function xe(){var e=Object(Be.a)(["\n  &.fade-enter {\n    opacity: 0;\n  }\n\n  &.fade-enter-active {\n    opacity: 1;\n  }\n\n  &.fade-exit {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  &.fade-exit-active {\n    opacity: 0;\n    transform: translateX(1000px);\n  }\n"]);return xe=function(){return e},e}var De=n(67).a.li(xe()),Le=Object(F.b)(null,(function(e){return{onFetchDeleteOrders:function(t){return e(function(e){return function(t){le.delete("/orders/"+e+".json").then((function(n){console.log(n),t(function(e){return{type:"DELETE_ORDER",orderId:e}}(e))})).catch((function(e){t(function(e){return{type:"DELETE_ORDER_ERROR",error:e}}(e))}))}}(t))}}}))((function(e){var t=Object(a.useState)(!1),n=Object(_e.a)(t,2),o=n[0],i=n[1];return r.a.createElement(De,{className:Me.a.Order,key:e.order.id},r.a.createElement("div",null,"Ingredients:\xa0",Object.entries(e.order.ingredients).map((function(e,t){return r.a.createElement("div",{className:Me.a.Ingredient,key:t},"".concat(e[0]," (").concat(e[1],")"))}))),r.a.createElement("p",null,r.a.createElement("span",null,"Price: ",r.a.createElement("strong",null,e.order.price.toFixed(2),"\xa0$")),r.a.createElement(oe,{btnType:"Danger",clicked:function(){i(!0),e.onFetchDeleteOrders(e.order.id)},disabled:o},"Delete")))})),He=n(41),Pe=n.n(He),we=n(74),Ae=n(72),Fe=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders()}},{key:"render",value:function(){var e=null;return this.props.loading&&(e=r.a.createElement(de,null)),this.props.orders&&this.props.orders.length&&(e=r.a.createElement(we.a,{component:"ul",className:Pe.a.List},this.props.orders.map((function(e){return r.a.createElement(Ae.a,{key:e.id,classNames:"fade",timeout:300},r.a.createElement(Le,{order:e}))})))),r.a.createElement("div",{className:Pe.a.Orders},e)}}]),n}(a.Component),Ue=Object(F.b)((function(e){return{orders:e.order.orders,loading:e.order.loading}}),(function(e){return{onFetchOrders:function(){return e((function(e){e({type:"FETCH_ORDERS_START"}),le.get("/orders.json").then((function(t){for(var n=[],a=0,r=Object.entries(t.data);a<r.length;a++){var o=Object(_e.a)(r[a],2),i=o[0],c=o[1];n.push(Object(pe.a)({},c,{id:i}))}e({type:"FETCH_ORDERS_SUCCESS",orders:n})})).catch((function(t){e(function(e){return{type:"FETCH_ORDERS_ERROR",error:e}}(t))}))}))}}}))(me(Fe,le)),ze=n(19),Ge=n(24),Ve={ingredients:null,totalPrice:4,error:!1},qe={salad:.5,bacon:.7,meat:1.3,cheese:.4},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":var n=1*(e.totalPrice+qe[t.ingredientName]).toFixed(2);return Object(pe.a)({},e,{ingredients:Object(pe.a)({},e.ingredients,Object(Ge.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:n});case"REMOVE_INGREDIENT":var a=e.ingredients[t.ingredientName]-1,r=(a=a<0?0:a)>0?1*(e.totalPrice-qe[t.ingredientName]).toFixed(2):e.totalPrice;return Object(pe.a)({},e,{ingredients:Object(pe.a)({},e.ingredients,Object(Ge.a)({},t.ingredientName,a)),totalPrice:r});case"SET_INGREDIENTS":return Object(pe.a)({},e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1});case"FETCH_INGREDIENTS_ERROR":return Object(pe.a)({},e,{error:!0});default:return e}},We={orders:[],loading:!1,purchased:!1},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return Object(pe.a)({},e,{purchased:!1});case"PURCHASE_BURGER_SUCCESS":return Object(pe.a)({},e,{orders:e.orders.concat(Object(pe.a)({},t.orderData,{id:t.orderId})),loading:!1,purchased:!0});case"PURCHASE_BURGER_ERROR":return Object(pe.a)({},e,{loading:!1});case"PURCHASE_BURGER_START":case"FETCH_ORDERS_START":return Object(pe.a)({},e,{loading:!0});case"FETCH_ORDERS_SUCCESS":return Object(pe.a)({},e,{orders:t.orders,loading:!1});case"FETCH_ORDERS_ERROR":return Object(pe.a)({},e,{loading:!1});case"DELETE_ORDER":var n=e.orders.filter((function(e){return e.id!==t.orderId}));return Object(pe.a)({},e,{orders:n});case"DELETE_ORDER_ERROR":default:return e}},Ze=n(71),$e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ze.d,Xe=Object(ze.c)({burgerBuilder:Ye,order:Je}),Qe=Object(ze.e)(Xe,$e(Object(ze.a)(Ze.a)));var Ke=function(){return r.a.createElement(F.a,{store:Qe},r.a.createElement(N.a,{basename:"/burger-order-react"},r.a.createElement(A,null,r.a.createElement(ve.d,null,r.a.createElement(ve.b,{path:"/checkout",component:ke}),r.a.createElement(ve.b,{path:"/orders",component:Ue}),r.a.createElement(ve.b,{path:"/",exact:!0,component:Ee})))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ke,null)),document.getElementById("root"))},14:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__HuxZP",BreadTop:"BurgerIngredient__BreadTop__10-cT",Seeds1:"BurgerIngredient__Seeds1__3xHtz",Seeds2:"BurgerIngredient__Seeds2__1cUso",Meat:"BurgerIngredient__Meat__13nAN",Cheese:"BurgerIngredient__Cheese__1FxeY",Salad:"BurgerIngredient__Salad__1iTJE",Bacon:"BurgerIngredient__Bacon__3vrAI"}},25:function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl__1jYc3",Label:"BuildControl__Label__33Z-p",Less:"BuildControl__Less__377MJ",More:"BuildControl__More__28-hQ"}},26:function(e,t,n){e.exports={Input:"Input__Input__s67N0",Label:"Input__Label___n-1m",InputElement:"Input__InputElement__2-aFx",Invalid:"Input__Invalid__1sl1p"}},29:function(e,t,n){e.exports={SideMenu:"SideMenu__SideMenu__3UWTy",Open:"SideMenu__Open__1SgcR",Logo:"SideMenu__Logo__2xnje"}},30:function(e,t,n){e.exports={Modal:"Modal__Modal__32_-a",Loading:"Modal__Loading__2_sU3",Active:"Modal__Active__1AINr"}},32:function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar__2JJW-",Logo:"Toolbar__Logo__1efBD"}},33:function(e,t,n){e.exports={NavItem:"NavItem__NavItem__r-b9L",active:"NavItem__active__2ZZNc"}},36:function(e,t,n){e.exports={Backdrop:"Backdrop__Backdrop__efy1y",hideDesktop:"Backdrop__hideDesktop__1llls"}},38:function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls__3_01f",OrderButton:"BuildControls__OrderButton__myBwT",enable:"BuildControls__enable__3jYIq"}},39:function(e,t,n){e.exports={Button:"Button__Button__QI7b2",Success:"Button__Success__2dHUt",Danger:"Button__Danger__2xnhN"}},40:function(e,t,n){e.exports={Order:"Order__Order__4yi4Z",Ingredient:"Order__Ingredient__5aDVA"}},41:function(e,t,n){e.exports={Orders:"Orders__Orders__30Bmr",List:"Orders__List__3VSNx"}},54:function(e,t,n){e.exports={Content:"Layout__Content__3pLYC"}},55:function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},56:function(e,t,n){e.exports={Logo:"Logo__Logo__2k2jA"}},57:function(e,t,n){e.exports={NavItems:"NavItems__NavItems__3fZSa"}},59:function(e,t,n){e.exports={MobileMenuBtn:"MobileMenuBtn__MobileMenuBtn__2PzFr"}},61:function(e,t,n){e.exports={Burger:"Burger__Burger__3K4F-"}},63:function(e,t,n){e.exports={Loader:"Spinner__Loader__1DDwY",load6:"Spinner__load6__3S2CE",round:"Spinner__round__2qdnM"}},64:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary__1xBm4"}},65:function(e,t,n){e.exports={ContactInfo:"ContactInfo__ContactInfo__1dgSV"}},76:function(e,t,n){e.exports=n(103)},81:function(e,t,n){}},[[76,1,2]]]);
//# sourceMappingURL=main.cfa85119.chunk.js.map