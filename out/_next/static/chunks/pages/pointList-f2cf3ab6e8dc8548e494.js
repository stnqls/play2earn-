_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{"7SRD":function(e,t,n){"use strict";n.r(t);var o=n("vDqi"),c=n.n(o),r=n("YFqc"),a=n.n(r),i=n("q1tI"),s=n("0fKb"),l=n.n(s),u=n("ZGN8"),f=(n("jWhd"),n("nKUr"));t.default=function(){var e=Object(i.useState)([]),t=e[0],n=e[1],o=Object(i.useState)(1),r=o[0],s=o[1],d=Object(i.useState)(7),_=d[0];d[1];function p(){var e={authorization:window.sessionStorage.getItem("accessToken")};c()({method:"GET",url:"https://us-central1-play2earn-b23c6.cloudfunctions.net/api/point",headers:e}).then((function(e){200===e.status&&n(e.data)})).catch((function(e){401===e.response.status&&101===e.response.data.errCode&&Object(u.refreshToken)(p)}))}return Object(i.useEffect)((function(){p()}),[]),Object(f.jsxs)("div",{className:"pointList",children:[Object(f.jsxs)("div",{className:"pointList__content",children:[Object(f.jsxs)("div",{className:"pointList__content__title",children:["\ud3ec\uc778\ud2b8\ub0b4\uc5ed",Object(f.jsx)(a.a,{href:"/main",children:Object(f.jsx)("img",{src:"/images/icons/close-black.png",alt:"close",className:"pointList__content__close"})})]}),t&&t.length>0?Object(f.jsx)("ul",{className:"pointList__content__list",children:t.slice(_*(r-1),_*(r-1)+_).map((function(e,t){return Object(f.jsxs)("li",{className:"pointList__content__list__item",children:[Object(f.jsxs)("div",{className:"pointList__content__list__item__point",children:[e.addpoint," P"]}),Object(f.jsx)("div",{className:"pointList__content__list__item__text",children:(n=e.addpoint_code,0===n?"\uad11\uace0\uc2dc\uccad \ud3ec\uc778\ud2b8 \uc801\ub9bd":1===n?"\uad11\uace0(\ucd94\ucc9c\uc778) \ud3ec\uc778\ud2b8 \uc801\ub9bd":2===n?"\uad11\uace0(\ucd1d\ud310) \ud3ec\uc778\ud2b8 \uc801\ub9bd":3===n?"\ud68c\uc6d0\uac00\uc785 \ud3ec\uc778\ud2b8 \uc801\ub9bd":4===n?"\ud68c\uc6d0\uac00\uc785(\ucd94\ucc9c\uc778) \ud3ec\uc778\ud2b8 \uc801\ub9bd":5===n?"\ud68c\uc6d0\uac00\uc785(\ucd1d\ud310) \ud3ec\uc778\ud2b8 \uc801\ub9bd":void 0)}),Object(f.jsx)("div",{className:"pointList__content__list__item__date",children:e.created})]},"pointList-item-".concat(t));var n}))}):Object(f.jsx)("div",{className:"pointList__content__list__item--none",children:"\ud3ec\uc778\ud2b8 \ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),t&&t.length>0&&Object(f.jsx)(l.a,{totalItemsCount:t.length,activePage:r,onChange:function(e){s(e)},itemsCountPerPage:_,firstPageText:"",lastPageText:"",nextPageText:">",prevPageText:"<"})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cLWX:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pointList",function(){return n("7SRD")}])},cTJO:function(e,t,n){"use strict";var o=n("zoAU");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,r=(c=n("q1tI"))&&c.__esModule?c:{default:c},a=n("Sgtc"),i=n("nOHt"),s=n("vNVm");var l={};function u(e,t,n,o){if(e&&a.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var c=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,c=i.useRouter(),f=r.default.useMemo((function(){var t=a.resolveHref(c,e.href,!0),n=o(t,2),r=n[0],i=n[1];return{href:r,as:e.as?a.resolveHref(c,e.as):i||r}}),[c,e.href,e.as]),d=f.href,_=f.as,p=e.children,v=e.replace,h=e.shallow,b=e.scroll,m=e.locale;"string"===typeof p&&(p=r.default.createElement("a",null,p));var j=(t=r.default.Children.only(p))&&"object"===typeof t&&t.ref,g=s.useIntersection({rootMargin:"200px"}),L=o(g,2),O=L[0],x=L[1],y=r.default.useCallback((function(e){O(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,O]);r.default.useEffect((function(){var e=x&&n&&a.isLocalURL(d),t="undefined"!==typeof m?m:c&&c.locale,o=l[d+"%"+_+(t?"%"+t:"")];e&&!o&&u(c,d,_,{locale:t})}),[_,d,x,m,n,c]);var N={ref:y,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,c,r,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==i&&o.indexOf("#")>=0&&(i=!1),t[c?"replace":"push"](n,o,{shallow:r,locale:s,scroll:i}))}(e,c,d,_,v,h,b,m)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(c,d,_,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var w="undefined"!==typeof m?m:c&&c.locale,E=c&&c.isLocaleDomain&&a.getDomainLocale(_,w,c&&c.locales,c&&c.domainLocales);N.href=E||a.addBasePath(a.addLocale(_,w,c&&c.defaultLocale))}return r.default.cloneElement(t,N)};t.default=f},vNVm:function(e,t,n){"use strict";var o=n("zoAU");Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=c.useRef(),l=c.useState(!1),u=o(l,2),f=u[0],d=u[1],_=c.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var o=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:c,elements:o}),n}(n),c=o.id,r=o.observer,a=o.elements;return a.set(e,t),r.observe(e),function(){a.delete(e),r.unobserve(e),0===a.size&&(r.disconnect(),i.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return c.useEffect((function(){if(!a&&!f){var e=r.requestIdleCallback((function(){return d(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[f]),[_,f]};var c=n("q1tI"),r=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map}},[["cLWX",1,0,2,3,4,5]]]);