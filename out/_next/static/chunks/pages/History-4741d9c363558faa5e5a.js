_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"C3q+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/History",function(){return n("wQDX")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var c=n("zoAU");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,a=(s=n("q1tI"))&&s.__esModule?s:{default:s},r=n("Sgtc"),i=n("nOHt"),o=n("vNVm");var l={};function u(e,t,n,c){if(e&&r.isLocalURL(t)){e.prefetch(t,n,c).catch((function(e){0}));var s=c&&"undefined"!==typeof c.locale?c.locale:e&&e.locale;l[t+"%"+n+(s?"%"+s:"")]=!0}}var _=function(e){var t,n=!1!==e.prefetch,s=i.useRouter(),_=a.default.useMemo((function(){var t=r.resolveHref(s,e.href,!0),n=c(t,2),a=n[0],i=n[1];return{href:a,as:e.as?r.resolveHref(s,e.as):i||a}}),[s,e.href,e.as]),d=_.href,f=_.as,h=e.children,j=e.replace,m=e.shallow,b=e.scroll,v=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var p=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,y=o.useIntersection({rootMargin:"200px"}),O=c(y,2),x=O[0],g=O[1],N=a.default.useCallback((function(e){x(e),p&&("function"===typeof p?p(e):"object"===typeof p&&(p.current=e))}),[p,x]);a.default.useEffect((function(){var e=g&&n&&r.isLocalURL(d),t="undefined"!==typeof v?v:s&&s.locale,c=l[d+"%"+f+(t?"%"+t:"")];e&&!c&&u(s,d,f,{locale:t})}),[f,d,g,v,n,s]);var w={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,c,s,a,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&r.isLocalURL(n))&&(e.preventDefault(),null==i&&c.indexOf("#")>=0&&(i=!1),t[s?"replace":"push"](n,c,{shallow:a,locale:o,scroll:i}))}(e,s,d,f,j,m,b,v)},onMouseEnter:function(e){r.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(s,d,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof v?v:s&&s.locale,P=s&&s.isLocaleDomain&&r.getDomainLocale(f,k,s&&s.locales,s&&s.domainLocales);w.href=P||r.addBasePath(r.addLocale(f,k,s&&s.defaultLocale))}return a.default.cloneElement(t,w)};t.default=_},vNVm:function(e,t,n){"use strict";var c=n("zoAU");Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!r,o=s.useRef(),l=s.useState(!1),u=c(l,2),_=u[0],d=u[1],f=s.useCallback((function(e){o.current&&(o.current(),o.current=void 0),n||_||e&&e.tagName&&(o.current=function(e,t,n){var c=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var c=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=c.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:s,elements:c}),n}(n),s=c.id,a=c.observer,r=c.elements;return r.set(e,t),a.observe(e),function(){r.delete(e),a.unobserve(e),0===r.size&&(a.disconnect(),i.delete(s))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,_]);return s.useEffect((function(){if(!r&&!_){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[_]),[f,_]};var s=n("q1tI"),a=n("0G5g"),r="undefined"!==typeof IntersectionObserver;var i=new Map},wQDX:function(e,t,n){"use strict";n.r(t);var c=n("q1tI"),s=n.n(c),a=n("YFqc"),r=n.n(a),i=n("vDqi"),o=n.n(i),l=n("ZGN8"),u=n("0fKb"),_=n.n(u),d=(n("FFgM"),n("nKUr")),f=function(e){var t=Object(c.useState)(""),n=t[0],a=t[1],r=Object(c.useState)(1),i=r[0],o=r[1],l=Object(c.useState)(5),u=l[0];l[1];function f(e){switch(e){case 101:return"\uc2e0\uccad\uc911";case 102:return"\uc644\ub8cc";case 109:return"\uac70\uc808"}}return Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsx)("ul",{className:"coin-history__list",children:e.data&&e.data.length>0?e.data.slice(u*(i-1),u*(i-1)+u).map((function(e,t){return Object(d.jsxs)("li",{className:"coin-history__list__item",children:[Object(d.jsxs)("div",{className:"coin-history__list__item__money",children:[e.amount,Object(d.jsx)("span",{children:" TRX"}),"(",e.point,"P)"]}),Object(d.jsx)("div",{className:"coin-history__list__item__status",children:f(e.status)}),Object(d.jsx)("div",{className:"coin-history__list__item__bank",children:e.address}),Object(d.jsx)("div",{className:"coin-history__list__item__transId",children:Object(d.jsx)("a",{href:"https://tronscan.org/#/transaction/".concat(n),target:"_blank",onClick:function(){a(e.txid)},children:e.txid})}),Object(d.jsx)("div",{className:"coin-history__list__item__date",children:e.created})]},"coin-history-".concat(t))})):Object(d.jsx)("li",{className:"coin-history__list__item--none",children:"\ucd9c\uae08\ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})}),e.data&&e.data.length>0&&Object(d.jsx)(_.a,{totalItemsCount:e.data.length,activePage:i,onChange:function(e){o(e)},itemsCountPerPage:u,firstPageText:"",lastPageText:"",nextPageText:">",prevPageText:"<"})]})},h=(n("jfEi"),function(e){var t=Object(c.useState)(1),n=t[0],a=t[1],r=Object(c.useState)(5)[0];function i(e){switch(e){case 101:return"\uc2e0\uccad\uc911";case 102:return"\uc644\ub8cc";case 109:return"\uac70\uc808"}}return Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsx)("ul",{className:"currency-history__list",children:e.data&&e.data.length>0?e.data.slice(r*(n-1),r*(n-1)+r).map((function(e,t){return Object(d.jsxs)("li",{className:"currency-history__list__item",children:[Object(d.jsxs)("div",{className:"currency-history__list__item__money",children:[Object(d.jsx)("span",{children:" \u20a9"}),e.point]}),Object(d.jsx)("div",{className:"currency-history__list__item__status",children:i(e.status)}),Object(d.jsx)("div",{className:"currency-history__list__item__bank",children:e.address}),Object(d.jsx)("div",{className:"currency-history__list__item__date",children:e.created})]},"currency-history-".concat(t))})):Object(d.jsx)("li",{className:"currency-history__list__item--none",children:"\ucd9c\uae08\ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})}),e.data&&e.data.length>0&&Object(d.jsx)(_.a,{totalItemsCount:e.data.length,activePage:n,onChange:function(e){a(e)},itemsCountPerPage:r,firstPageText:"",lastPageText:"",nextPageText:">",prevPageText:"<"})]})});n("ByOg"),t.default=function(){var e=Object(c.useState)(0),t=e[0],n=e[1],s=Object(c.useState)("krw"),a=s[0],i=s[1],u=Object(c.useState)([]),_=u[0],j=u[1],m=Object(c.useState)([]),b=m[0],v=m[1];function p(){var e={authorization:window.sessionStorage.getItem("accessToken")};o()({method:"GET",url:"https://us-central1-play2earn-b23c6.cloudfunctions.net/api/withdrawal?type=".concat(a),headers:e}).then((function(e){200===e.status&&("krw"===a?j(e.data):"trx"===a&&v(e.data))})).catch((function(e){401===e.response.status&&101===e.response.data.errCode&&Object(l.refreshToken)(p)}))}return Object(c.useEffect)((function(){p()}),[a]),Object(d.jsx)("div",{className:"history",children:Object(d.jsxs)("div",{className:"history__content",children:[Object(d.jsxs)("div",{className:"history__content__title",children:["\ucd9c\uae08\ub0b4\uc5ed",Object(d.jsx)(r.a,{href:"/main",children:Object(d.jsx)("img",{src:"/images/icons/close-black.png",alt:"close",className:"history__content__close"})})]}),Object(d.jsxs)("ul",{className:"history__content__menu",children:[Object(d.jsx)("li",{className:0===t?"history__content__menu__list--click":"history__content__menu__list",onClick:function(){n(0),i("krw")},children:"\uc6d0\ud654"}),Object(d.jsx)("li",{className:1===t?"history__content__menu__list--click":"history__content__menu__list",onClick:function(){n(1),i("trx")},children:"\ucf54\uc778"})]}),Object(d.jsxs)("div",{className:"history__content__body",children:[0===t&&Object(d.jsx)(h,{data:_}),1===t&&Object(d.jsx)(f,{data:b})]})]})})}}},[["C3q+",1,0,2,3,4,5]]]);