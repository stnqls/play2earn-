_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{J623:function(e,t,n){"use strict";n.r(t);var r=n("vDqi"),a=n.n(r),o=n("YFqc"),c=n.n(o),i=n("q1tI"),s=n("ZGN8"),l=n("P8mQ"),u=(n("PIFO"),n("nKUr"));t.default=function(){var e=Object(i.useState)(""),t=e[0],n=e[1],r=Object(i.useState)(""),o=r[0],d=r[1],f=Object(i.useState)(""),h=f[0],p=f[1],_=Object(i.useState)(""),w=_[0],m=_[1],v=Object(i.useState)(""),b=v[0],j=v[1];function g(){var e=o.replace(/,/g,"");if(t.length<34)alert("\uc8fc\uc18c\ub97c \ub2e4\uc2dc \ud655\uc778\ud574\uc8fc\uc138\uc694");else if(e<1e5)alert("100,000\uc774\uc0c1\ubd80\ud130 \uac00\ub2a5\ud569\ub2c8\ub2e4.");else if(Number(e)>Number(h))alert("\ubcf4\uc720\ud3ec\uc778\ud2b8\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694");else{var r={authorization:window.sessionStorage.getItem("accessToken")};a()({method:"POST",url:"https://us-central1-play2earn-b23c6.cloudfunctions.net/api/withdrawal",headers:r,data:{type:"trx",point:e,address:t}}).then((function(){alert("\ucd9c\uae08\uc2e0\uccad\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),p(h-e),n(""),d(""),j("")})).catch((function(e){101===e.response.data.errCode?Object(s.refreshToken)(g):alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}))}}return Object(i.useEffect)((function(){var e=window.sessionStorage.getItem("point");p(e),function(){var e={authorization:window.sessionStorage.getItem("accessToken")};a()({method:"GET",url:"https://us-central1-play2earn-b23c6.cloudfunctions.net/api/withdrawal/trx_price",headers:e}).then((function(e){200===e.status&&m(e.data.trx_price)})).catch((function(e){alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),console.log(e)}))}()}),[]),Object(u.jsx)("div",{className:"withdraw",children:Object(u.jsxs)("div",{className:"withdraw__contents",children:[Object(u.jsxs)("div",{className:"withdraw__contents__title",children:["\ucf54\uc778\ucd9c\uae08",Object(u.jsx)(c.a,{href:"/main",children:Object(u.jsx)("img",{src:"/images/icons/close-black.png",alt:"close",className:"withdraw__close"})})]}),Object(u.jsx)("div",{className:"withdraw__contents__form",children:Object(u.jsxs)("div",{className:"coin-withdraw-form",children:[Object(u.jsxs)("div",{className:"coin-withdraw-form__point",children:["\ubcf4\uc720\ud55c \ud3ec\uc778\ud2b8 : ",Object(u.jsxs)("span",{children:[Object(l.addComma)(h),"P"]})]}),Object(u.jsxs)("div",{className:"coin-withdraw-form__input",children:[Object(u.jsx)("div",{className:"coin-withdraw-form__input__title",children:"\uc785\uae08\uacc4\uc88c"}),Object(u.jsx)("input",{className:"coin-withdraw-form__bank",placeholder:"\uc9c0\uac11\uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",value:t,onChange:function(e){n(e.target.value)}})]}),Object(u.jsxs)("div",{className:"coin-withdraw-form__output",children:[Object(u.jsxs)("div",{className:"coin-withdraw-form__output__info",children:["*\uc2e4\uc2dc\uac04\ubcc0\ub3d9\uc73c\ub85c \ucd9c\uae08\uc2dc \uac00\uaca9\uacfc \ucc28\uc774\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",Object(u.jsx)("br",{}),"*\ucd5c\uc18c \ucd9c\uae08 \uac00\ub2a5 \uae08\uc561\uc740 100,000krw \uc785\ub2c8\ub2e4."]}),Object(u.jsx)("div",{className:"coin-withdraw-form__output__title",children:"\ucd9c\uae08\uae08\uc561"}),Object(u.jsxs)("div",{className:"coin-withdraw-form__output__trans",children:["1 TRX = ",w," POINT"]}),Object(u.jsx)("input",{type:"text",className:"coin-withdraw-form__output__money",value:o,onChange:function(e){!function(e,t){e=e.replace(/,/g,"");var n=(e=Number(e))/(t=Number(t));n.toFixed(2),j(Number(n))}(e.target.value,w),d(function(e){return(e=String(e)).replace(/(\d)(?=(?:\d{3})+(?!\d))/g,"$1,")}(function(e){return(e=String(e)).replace(/[^\d]+/g,"")}(e.target.value)))}}),Object(u.jsxs)("div",{className:"coin-withdraw-form__output__expected-money",children:["\uc608\uc0c1 : ",b," TRX"]})]})]})}),Object(u.jsx)("button",{type:"button",className:"withdraw__contents__btn",onClick:function(){window.confirm(t+" \uc9c0\uac11\uc8fc\uc18c\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.")&&g()},children:"\ucf54\uc778 \ucd9c\uae08\ud558\uae30"})]})})}},JS6W:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/CoinWithdraw",function(){return n("J623")}])},P8mQ:function(e,t){e.exports={addComma:function(e){if(e)return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},YFqc:function(e,t,n){e.exports=n("cTJO")},ZGN8:function(e,t,n){var r=n("vDqi");e.exports={refreshToken:function(e){r({method:"POST",url:"https://securetoken.googleapis.com/v1/token?key=AIzaSyDtBaXgQohMjufjL2GWSPEhwLeeIBLBke4",data:{grant_type:"refresh_token",refresh_token:window.sessionStorage.getItem("refresh")}}).then((function(t){window.sessionStorage.setItem("accessToken",t.data.access_token),window.sessionStorage.setItem("token",t.data.id_token),window.sessionStorage.setItem("refresh",t.data.refresh_token),e()})).catch((function(e){alert("\uc11c\ubc84 \uc778\uc99d \uc911 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.")}))}}},cTJO:function(e,t,n){"use strict";var r=n("zoAU");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n("q1tI"))&&a.__esModule?a:{default:a},c=n("Sgtc"),i=n("nOHt"),s=n("vNVm");var l={};function u(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,a=i.useRouter(),d=o.default.useMemo((function(){var t=c.resolveHref(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?c.resolveHref(a,e.as):i||o}}),[a,e.href,e.as]),f=d.href,h=d.as,p=e.children,_=e.replace,w=e.shallow,m=e.scroll,v=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var b=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,j=s.useIntersection({rootMargin:"200px"}),g=r(j,2),O=g[0],N=g[1],x=o.default.useCallback((function(e){O(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,O]);o.default.useEffect((function(){var e=N&&n&&c.isLocalURL(f),t="undefined"!==typeof v?v:a&&a.locale,r=l[f+"%"+h+(t?"%"+t:"")];e&&!r&&u(a,f,h,{locale:t})}),[h,f,N,v,n,a]);var y={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:i}))}(e,a,f,h,_,w,m,v)},onMouseEnter:function(e){c.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof v?v:a&&a.locale,S=a&&a.isLocaleDomain&&c.getDomainLocale(h,k,a&&a.locales,a&&a.domainLocales);y.href=S||c.addBasePath(c.addLocale(h,k,a&&a.defaultLocale))}return o.default.cloneElement(t,y)};t.default=d},vNVm:function(e,t,n){"use strict";var r=n("zoAU");Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=a.useRef(),l=a.useState(!1),u=r(l,2),d=u[0],f=u[1],h=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return a.useEffect((function(){if(!c&&!d){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[h,d]};var a=n("q1tI"),o=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["JS6W",1,0,2,3,5]]]);