(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{111:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},117:function(e,a,t){"use strict";t.r(a);var n=t(0),A=t.n(n),c=t(24),i=t.n(c),r=(t(62),t(4)),l=(t(63),t(10)),m=t(5),s=t(30),o=t.n(s),p=t(31),d=t.n(p);t(64);var g=function(e){var a=e.basket,t=e.user,n=e.handleAuthentication;return A.a.createElement("div",{className:"header"},A.a.createElement(l.b,{to:"/"},A.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"Logo"})),A.a.createElement("div",{className:"header__search"},A.a.createElement("input",{className:"header__searchInput",type:"text"}),A.a.createElement(o.a,{className:"header__searchIcon"})),A.a.createElement("div",{className:"header__nav"},A.a.createElement(l.b,{to:t?"":"/login"},A.a.createElement("div",{className:"header__option",onClick:n},A.a.createElement("span",{className:"header__optionLineOne"},"Hello ",t?null===t||void 0===t?void 0:t.email:"Guest"),A.a.createElement("span",{className:"header__optionLineTwo"},t?"Sign Out":"Sign In"))),A.a.createElement(l.b,{to:"/orders"},A.a.createElement("div",{className:"header__option"},A.a.createElement("span",{className:"header__optionLineOne"},"Returns"),A.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),A.a.createElement("div",{className:"header__option"},A.a.createElement("span",{className:"header__optionLineOne"},"Your"),A.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),A.a.createElement(l.b,{to:"/checkout"},A.a.createElement("div",{className:"header__optionBasket"},A.a.createElement(d.a,null),A.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===a||void 0===a?void 0:a.length)))))},u=Object(n.createContext)(),b=function(e){var a=e.reducer,t=e.initialState,c=e.children;return A.a.createElement(u.Provider,{value:Object(n.useReducer)(a,t)},c)},E=function(){return Object(n.useContext)(u)},h=t(40),v=t.n(h),f=(v.a.initializeApp({apiKey:"AIzaSyCowIngadTbbwiKrudfZna6mpVOZTgFIDI",authDomain:"clone-c402a.firebaseapp.com",databaseURL:"https://clone-c402a.firebaseio.com",projectId:"clone-c402a",storageBucket:"clone-c402a.appspot.com",messagingSenderId:"104283783228",appId:"1:104283783228:web:169580f5a4f94e3a254339",measurementId:"G-TJQLC3TLSX"}).firestore(),v.a.auth());var N=function(){var e=E(),a=Object(r.a)(e,1)[0],t=a.basket,n=a.user;return A.a.createElement(g,{user:n,basket:t,handleAuthentication:function(){n&&f.signOut()}})};t(80),t(81);var k=function(e){var a=e.id,t=e.title,n=e.image,c=e.price,i=e.rating,r=e.addToBasket;return A.a.createElement("div",{className:"product"},A.a.createElement("img",{src:n,alt:t}),A.a.createElement("div",{className:"product__info"},A.a.createElement("p",null,t),A.a.createElement("p",{className:"product__price"},A.a.createElement("small",null,"Rs."),A.a.createElement("strong",null,c)),A.a.createElement("div",{className:"product__rating"},Array(i).fill().map((function(e,a){return A.a.createElement("span",{key:a,role:"img","aria-label":"start"},"\u2b50")})))),A.a.createElement("button",{onClick:function(){return r({id:a,title:t,image:n,price:c,rating:i})}},"Add to Basket"))};var w=function(e){var a=E(),t=Object(r.a)(a,2)[1];return A.a.createElement(k,Object.assign({addToBasket:function(e){var a=e.id,n=e.title,A=e.image,c=e.price,i=e.rating;t({type:"ADD_TO_BASKET",item:{id:a,title:n,image:A,price:c,rating:i}})}},e))},S=(t(82),t(11));var T=function(e){return e.basket,e.user,e.handleAuthentication,A.a.createElement("div",null,A.a.createElement(S.a,null,A.a.createElement(S.a.Item,null,A.a.createElement("img",{className:"d-block w-100",style:{height:"50vh"},src:t(83)})),A.a.createElement(S.a.Item,null,A.a.createElement("img",{className:"d-block w-100",style:{height:"50vh"},src:t(84)})),A.a.createElement(S.a.Item,null,A.a.createElement("img",{className:"d-block w-100",style:{height:"50vh"},src:t(85)})),A.a.createElement(S.a.Item,null,A.a.createElement("img",{className:"d-block w-100",style:{height:"50vh"},src:t(86)})),A.a.createElement(S.a.Item,null,A.a.createElement("img",{className:"d-block w-100",style:{height:"50vh"},src:t(87)}))))};var L=function(){var e=E(),a=Object(r.a)(e,1)[0],t=a.basket,n=a.user;return A.a.createElement(T,{user:n,basket:t,handleAuthentication:function(){n&&f.signOut()}})};var O=function(){return A.a.createElement("div",{className:"home"},A.a.createElement("div",{className:"home__container"},A.a.createElement(L,null),A.a.createElement("br",null),A.a.createElement("h4",null,"Up to 40% off | Sale starts tomorrow"),A.a.createElement("div",{className:"home__row"},A.a.createElement(w,{id:"12321341",title:"Apple Iphone 12",price:124500,rating:5,image:"http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"}),A.a.createElement(w,{id:"49538094",title:"Redmi Note 10 PRO",price:45e3,rating:4,image:"https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/x/i/xiaomi_mi_note_10_pro-.png"}),A.a.createElement(w,{id:"49538094",title:"Nokia 3310 Orange",price:3500,rating:4,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-9pP0F921gBWkjCwR6wo1YEOb7ZZ7wp_4g&usqp=CAU"}),A.a.createElement(w,{id:"49538094",title:"One Plus 9R",price:44e3,rating:4,image:"data:image/jpeg;base64,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"})),A.a.createElement("br",null),A.a.createElement("h4",null,"Today\u2019s Deals"),A.a.createElement("div",{className:"home__row"},A.a.createElement(w,{id:"4903850",title:"Apple iWatch 6 Series",price:3e4,rating:3,image:"https://www.searchpng.com/wp-content/uploads/2019/01/Apple-Watch-Apple-Watch-Iwatch-PNG-Image.png"}),A.a.createElement(w,{id:"23445930",title:"Apple Airpods air",price:19999,rating:5,image:"https://www.freepnglogos.com/uploads/airpods-png/airpods-apple-news-articles-stories-trends-for-today-14.png"}),A.a.createElement(w,{id:"3254354345",title:"New Apple iPad Pro  (4th Generation)",price:68e3,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})),A.a.createElement("br",null),A.a.createElement("h4",null,"Deal of the day"),A.a.createElement("div",{className:"home__row"},A.a.createElement(w,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:109498,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})),A.a.createElement("br",null),A.a.createElement("h4",null,"Up to 60% off | Home essentials from Indian startup"),A.a.createElement("div",{className:"home__row"},A.a.createElement(w,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:4500,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),A.a.createElement(w,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:5999,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),A.a.createElement(w,{id:"3254354345",title:"One Plus 8T",price:43e3,rating:4,image:"https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-lunar.png"})),A.a.createElement("br",null),A.a.createElement("h4",null,"Up to 50% off | Nutritional supplements"),A.a.createElement(S.a,{className:"carosuel"},A.a.createElement(S.a.Item,{className:"carosuelitem"},A.a.createElement("div",{className:"home__row"},A.a.createElement(w,{id:"12321341",title:"Apple Iphone 12",price:124500,rating:5,image:"http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}))),A.a.createElement(S.a.Item,{className:"carosuelitem"},A.a.createElement("div",{className:"home__row"},A.a.createElement(w,{id:"12321341",title:"Apple Iphone 12",price:124500,rating:5,image:"http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}))),A.a.createElement(S.a.Item,{className:"carosuelitem"},A.a.createElement("div",{className:"home__row"},A.a.createElement(w,{id:"12321341",title:"Apple Iphone 12",price:124500,rating:5,image:"http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"})))),A.a.createElement("br",null),A.a.createElement("h4",null,"Best Bag and watch of the day"),A.a.createElement("div",{className:"home__row"},A.a.createElement(w,{id:"12321341",title:"WildCraft Bags",price:2500,rating:5,image:"https://purepng.com/public/uploads/large/purepng.com-wildcraft-school-bagbagbackpackswildcraftschool-bag-1421526272693mtmqy.png"}),A.a.createElement(w,{id:"49538094",title:"Adidas Shoes",price:8500,rating:4,image:"https://lh3.googleusercontent.com/proxy/ZJ8bnflE0snR4GxTy4AJl7jC_ZcoJxmflN8o_VOXZZuer9Y1-1JdxHBmP7Q0LAMVW3LfTFDXbfyGKLDgpKJ7bgQmi1lHLLmi2wUjG97i-fxkWq6OltOr8XTFv9kDrNjYrWe0dWH91l6jJIw"})),A.a.createElement("br",null),A.a.createElement("h4",null,"Fruits and Vegetables"),A.a.createElement(S.a,{className:"carosuel"},A.a.createElement(S.a.Item,{className:"carosuelitem"},A.a.createElement("div",{className:"home__row"},A.a.createElement(w,{id:"12321341",title:"Apple Iphone 12",price:124500,rating:5,image:"http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}))),A.a.createElement(S.a.Item,{className:"carosuelitem"},A.a.createElement("div",{className:"home__row"},A.a.createElement(w,{id:"12321341",title:"Apple Iphone 12",price:124500,rating:5,image:"http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}))),A.a.createElement(S.a.Item,{className:"carosuelitem"},A.a.createElement("div",{className:"home__row"},A.a.createElement(w,{id:"12321341",title:"Apple Iphone 12",price:124500,rating:5,image:"http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"}),A.a.createElement(w,{id:"49538094",title:"Apple Macbook Air",price:123900,rating:4,image:"http://assets.stickpng.com/images/580b57fbd9996e24bc43bfd0.png"})))),A.a.createElement("br",null),A.a.createElement("h4",null,"From your search history"),A.a.createElement("div",{className:"home__row"},A.a.createElement(w,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:800,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),A.a.createElement(w,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:5e3,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})),A.a.createElement("br",null),A.a.createElement("h4",null,"Product of the day"),A.a.createElement("div",{className:"home__row"},A.a.createElement(w,{id:"90829332",title:"Apple iMac Pro",price:1098980,rating:4,image:"https://help.apple.com/assets/5E9759AA680CE290321CE8C3/5E989A9A680CE217771C78AD/en_US/fbac8523b0d81e806024f9d46cb3b976.png"}))))};var x=function(){return A.a.createElement(O,null)},y=(t(88),t(89),t(23),t(42)),U=t(18),K=function(e,a){switch(a.type){case"ADD_TO_BASKET":return Object(U.a)(Object(U.a)({},e),{},{basket:[].concat(Object(y.a)(e.basket),[a.item])});case"EMPTY_BASKET":return Object(U.a)(Object(U.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(y.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object(U.a)(Object(U.a)({},e),{},{basket:n});case"SET_USER":return Object(U.a)(Object(U.a)({},e),{},{user:a.user});default:return e}};t(91);t(92);t(26),t(41),t(94),t(22);var X=t(53);t.n(X).a.create({baseURL:"https://us-central1-clone-c402a.cloudfunctions.net/api"});var R=t(54);t(111),t(55),t(113);var j=t(37),P=t.n(j);t(114);var M=function(e){return e.basket,e.user,e.handleAuthentication,A.a.createElement("div",{className:"navbar"},A.a.createElement("p",{className:"header__line"},A.a.createElement(P.a,null)),A.a.createElement("div",{className:"navbar__option"},A.a.createElement("span",null,"Best Sellers")),A.a.createElement("div",{className:"navbar__option"},A.a.createElement("span",null,"Mobiles")),A.a.createElement("div",{className:"navbar__option"},A.a.createElement("span",null,"Fashion")),A.a.createElement("div",{className:"navbar__option"},A.a.createElement("span",null,"New Releases")),A.a.createElement("div",{className:"navbar__option"},A.a.createElement("span",null,"Today's Deals")),A.a.createElement("div",{className:"navbar__option"},A.a.createElement("span",null,"Prime")),A.a.createElement("div",{className:"navbar__option"},A.a.createElement("span",null,"Electronics")),A.a.createElement("div",{className:"navbar__option"},A.a.createElement("span",null,"Customer Service")),A.a.createElement("div",{className:"navbar__option"},A.a.createElement("span",null,"Amazon Pay")),A.a.createElement("div",{className:"navbar__option"},A.a.createElement("span",null,"Home and Kitchen")))};var V=function(){var e=E(),a=Object(r.a)(e,1)[0],t=a.basket,n=a.user;return A.a.createElement(M,{user:n,basket:t,handleAuthentication:function(){n&&f.signOut()}})};Object(R.a)("pk_test_51HPvWXB0PN97cXmW39XsQx7Jbyzo74twpmMdw2A0kcvjT0MButdkqmYvkOKfm8YpmXKcfRK7mqxiT9PuvSf3gOUX00KVnQ252B");var z=function(){var e=E(),a=Object(r.a)(e,2)[1];return Object(n.useEffect)((function(){f.onAuthStateChanged((function(e){a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),A.a.createElement(l.a,null,A.a.createElement("div",{className:"app"},A.a.createElement(m.c,null,A.a.createElement(m.a,{path:"/"},A.a.createElement(N,null),A.a.createElement(V,null),A.a.createElement(x,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(115);i.a.render(A.a.createElement(A.a.StrictMode,null,A.a.createElement(b,{initialState:{basket:[],user:null},reducer:K},A.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,a,t){e.exports=t(117)},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){e.exports=t.p+"static/media/image1.830fd7b0.jpg"},84:function(e,a,t){e.exports=t.p+"static/media/image2.f8bf81d6.jpg"},85:function(e,a,t){e.exports=t.p+"static/media/image3.d14813df.jpg"},86:function(e,a,t){e.exports=t.p+"static/media/image4.5efe111f.jpg"},87:function(e,a,t){e.exports=t.p+"static/media/image5.90bc4e62.jpg"},88:function(e,a,t){},89:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},94:function(e,a,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.cb63e588.chunk.js.map