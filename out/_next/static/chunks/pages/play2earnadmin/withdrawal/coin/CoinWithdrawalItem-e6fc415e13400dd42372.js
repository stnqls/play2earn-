_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{"20a2":function(t,e,a){t.exports=a("nOHt")},ZGN8:function(t,e,a){var n=a("vDqi");t.exports={refreshToken:function(t){n({method:"POST",url:"https://securetoken.googleapis.com/v1/token?key=AIzaSyDtBaXgQohMjufjL2GWSPEhwLeeIBLBke4",data:{grant_type:"refresh_token",refresh_token:window.sessionStorage.getItem("refresh")}}).then((function(e){window.sessionStorage.setItem("accessToken",e.data.access_token),window.sessionStorage.setItem("token",e.data.id_token),window.sessionStorage.setItem("refresh",e.data.refresh_token),t()})).catch((function(t){alert("\uc11c\ubc84 \uc778\uc99d \uc911 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.")}))}}},vYuX:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),s=a.n(n),o=a("ZGN8"),i=a("vDqi"),r=a.n(i),c=a("20a2"),d=a.n(c),l=a("nKUr");e.default=function(t){var e=Object(n.useState)(!1),a=e[0],i=e[1],c=Object(n.useState)(""),u=c[0],_=c[1],h=Object(n.useState)(""),b=h[0],j=h[1],w=t.status;switch(w){case 101:w="\uc2e0\uccad\uc911";break;case 102:w="\uc2b9\uc778\uc644\ub8cc";break;case 109:w="\uc2b9\uc778\uac70\uc808"}function m(){if(""===u)return alert("\ucf54\uc778\uac1c\uc218\ub97c \uc785\ub825\ud558\uc138\uc694");var e={authorization:window.sessionStorage.getItem("accessToken")};r()({method:"PATCH",url:"https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/withdrawal",headers:e,data:{seq:t.seq,email:t.email,status:"102",type:"trx",amount:u,txid:b}}).then((function(t){200===t.status&&window.confirm("\uc2b9\uc778\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(alert("\uc2b9\uc778\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),setTimeout((function(){d.a.reload()}),200))})).catch((function(t){401===t.response.status?101===t.response.data.errCode&&Object(o.refreshToken)(m):400===t.response.status&&601===t.response.data.errCode&&alert("\uc785\ub825\uac12\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694")}))}function p(){var e={authorization:window.sessionStorage.getItem("accessToken")};r()({method:"PATCH",url:"https://us-central1-play2earn-b23c6.cloudfunctions.net/api/admin/withdrawal",headers:e,data:{seq:t.seq,email:t.email,status:"109",type:"trx"}}).then((function(t){200===t.status&&window.confirm("\uac70\uc808\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(alert("\uac70\uc808\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),setTimeout((function(){d.a.reload()}),200))})).catch((function(t){401===t.response.status?101===t.response.data.errCode&&Object(o.refreshToken)(p):(console.log(t),alert("\ub2e4\uc2dc\uc2dc\ub3c4\ud574\uc8fc\uc138\uc694"))}))}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("tr",{onClick:function(){i(!a)},className:"admin-coin-withdrawal-table__tbody__tr",children:[Object(l.jsx)("td",{children:t.seq}),Object(l.jsx)("td",{children:t.email}),Object(l.jsx)("td",{children:t.point}),Object(l.jsx)("td",{children:w}),Object(l.jsx)("td",{children:t.created})]}),Object(l.jsx)("tr",{className:a?"admin-coin-withdrawal-table__tbody__detail":"admin-coin-withdrawal-table__tbody__detail--none",children:101===t.status?Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsxs)("td",{colSpan:4,children:["\uc9c0\uac11\uc8fc\uc18c : ",t.address,Object(l.jsx)("br",{}),"\uae08\uc561 : ",t.amount," ",Object(l.jsx)("br",{}),"TX ID :",Object(l.jsx)("input",{type:"text",className:"admin-coin-withdrawal-table__txid",placeholder:"TX ID\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",onChange:function(t){j(t.target.value)}})]}),Object(l.jsxs)("td",{colSpan:1,className:"admin-coin-withdrawal-table__tbody__detail__btns",children:[Object(l.jsx)("input",{type:"number",className:"admin-coin-withdrawal-table__tbody__detail__btns__input",onChange:function(t){_(t.target.value)},placeholder:"\uc804\uc1a1\ud55c \ucf54\uc778\uc758 \uac1c\uc218\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(l.jsx)("button",{className:"admin-coin-withdrawal-table__tbody__detail__btns__approval",onClick:function(){m()},children:"\uc2b9\uc778"}),Object(l.jsx)("button",{className:"admin-coin-withdrawal-table__tbody__detail__btns__deny",onClick:function(){p()},children:"\uac70\uc808"})]})]}):Object(l.jsxs)("td",{colSpan:5,children:["\uc9c0\uac11\uc8fc\uc18c : ",t.address,Object(l.jsx)("br",{}),"\uae08\uc561 : ",t.amount," ",Object(l.jsx)("br",{}),"TX ID :",Object(l.jsx)("a",{href:"https://tronscan.org/#/transaction/".concat(t.txid),target:"_blank",children:t.txid})]})})]})}},x7jk:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/play2earnadmin/withdrawal/coin/CoinWithdrawalItem",function(){return a("vYuX")}])}},[["x7jk",1,0,2,3]]]);