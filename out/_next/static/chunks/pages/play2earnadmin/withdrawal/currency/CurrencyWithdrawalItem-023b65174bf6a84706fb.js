_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{"1lSc":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/play2earnadmin/withdrawal/currency/CurrencyWithdrawalItem",function(){return n("F9V3")}])},"20a2":function(e,t,n){e.exports=n("nOHt")},F9V3:function(e,t,n){"use strict";n.r(t);var a=n("vDqi"),s=n.n(a),r=n("20a2"),c=n.n(r),o=n("q1tI"),i=n("ZGN8"),d=n("nKUr");t.default=function(e){var t=Object(o.useState)(!1),n=t[0],a=t[1],r=e.status;switch(r){case 101:r="\uc2e0\uccad\uc911";break;case 102:r="\uc2b9\uc778 \uc644\ub8cc";break;case 109:r="\uc2b9\uc778 \uac70\uc808"}function l(){var t={authorization:window.sessionStorage.getItem("accessToken")};s()({method:"PATCH",url:"https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/withdrawal",headers:t,data:{seq:e.seq,email:e.email,status:"102",type:"krw",amount:e.point}}).then((function(e){200===e.status&&window.confirm("\uc2b9\uc778\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(alert("\uc2b9\uc778\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),setTimeout((function(){c.a.reload()}),200))})).catch((function(e){401===e.response.status?101===e.response.data.errCode&&Object(i.refreshToken)(l):alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}))}function u(){var t={authorization:window.sessionStorage.getItem("accessToken")};s()({method:"PATCH",url:"https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/withdrawal",headers:t,data:{seq:e.seq,email:e.email,status:"109",type:"krw"}}).then((function(e){200===e.status&&window.confirm("\uac70\uc808\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(alert("\uac70\uc808\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),setTimeout((function(){c.a.reload()}),200))})).catch((function(e){401===e.response.status?101===e.response.data.errCode&&Object(i.refreshToken)(u):alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}))}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("tr",{onClick:function(){a(!n)},className:"admin-currency-withdrawal-table__tbody__tr",children:[Object(d.jsx)("td",{children:e.seq}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.point}),Object(d.jsx)("td",{children:r}),Object(d.jsx)("td",{children:e.created})]}),Object(d.jsxs)("tr",{className:n?"admin-currency-withdrawal-table__tbody__detail":"admin-currency-withdrawal-table__tbody__detail--none",children:[Object(d.jsxs)("td",{colSpan:4,children:["\uc774\ub984 : ",e.name,Object(d.jsx)("br",{}),"\uc740\ud589 : ",e.address," ",Object(d.jsx)("br",{}),"\uae08\uc561 : \u20a9",e.point]}),101===e.status?Object(d.jsxs)("td",{colSpan:1,className:"admin-currency-withdrawal-table__tbody__detail__btns",children:[Object(d.jsx)("button",{className:"admin-currency-withdrawal-table__tbody__detail__btns__approval",onClick:function(){l()},children:"\uc2b9\uc778"}),Object(d.jsx)("button",{className:"admin-currency-withdrawal-table__tbody__detail__btns__deny",onClick:function(){u()},children:"\uac70\uc808"})]}):Object(d.jsx)("td",{colSpan:1,className:"admin-currency-withdrawal-table__tbody__detail__btns"})]})]})}},ZGN8:function(e,t,n){var a=n("vDqi");e.exports={refreshToken:function(e){a({method:"POST",url:"https://securetoken.googleapis.com/v1/token?key=AIzaSyDtBaXgQohMjufjL2GWSPEhwLeeIBLBke4",data:{grant_type:"refresh_token",refresh_token:window.sessionStorage.getItem("refresh")}}).then((function(t){window.sessionStorage.setItem("accessToken",t.data.access_token),window.sessionStorage.setItem("token",t.data.id_token),window.sessionStorage.setItem("refresh",t.data.refresh_token),e()})).catch((function(e){alert("\uc11c\ubc84 \uc778\uc99d \uc911 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.")}))}}}},[["1lSc",1,0,2,3]]]);