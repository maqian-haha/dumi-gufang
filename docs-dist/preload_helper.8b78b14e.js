!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"demo1","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.7e3c967d.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.149192e8.async.js",65],["189.e8c51481.chunk.css",189],["189.3ccf6008.async.js",189],["docs__access-guide__index.md.1580f120.async.js",225],["docs__product-and-servies__access-mode-iframe.md.bb6e4f81.async.js",428],["nm__dumi__theme-default__layouts__DocLayout__index.ec4f7442.async.js",519],["docs__product-and-servies__access-mode-api.md.60edfbd8.async.js",561],["docs__product-and-servies__access-mode-checkout.md.564ba082.async.js",567],["docs__appendix-resources__index.md.d0573f20.async.js",673],["docs__product-and-servies__access-mode-plugin.md.77b82635.async.js",723],["docs__product-and-servies__payment-type-alipay.md.039029f4.async.js",767],["docs__product-and-servies__index.md.7003b067.async.js",818],["docs__product-and-servies__payment-type-cards.md.b4ec4a9b.async.js",852],["docs__product-and-servies__payment-type-wechatpay.md.c1630d8b.async.js",920],["dumi__tmp-production__dumi__theme__ContextWrapper.1f798f25.async.js",923],["docs__api-doc__index.md.f93fd527.async.js",927],["docs__index.md.4e696054.async.js",935]],"r":{"/*":[2,3,4,5,8,17],"/":[19,4,5,8,17],"/product-and-servies":[14,4,5,8,17],"/appendix-resources":[11,4,5,8,17],"/access-guide":[6,4,5,8,17],"/api-doc":[18,4,5,8,17],"/~demos/:id":[0,1,17],"/product-and-servies/payment-type-wechatpay":[16,4,5,8,17],"/product-and-servies/access-mode-checkout":[10,4,5,8,17],"/product-and-servies/payment-type-alipay":[13,4,5,8,17],"/product-and-servies/access-mode-iframe":[7,4,5,8,17],"/product-and-servies/access-mode-plugin":[12,4,5,8,17],"/product-and-servies/payment-type-cards":[15,4,5,8,17],"/product-and-servies/access-mode-api":[9,4,5,8,17]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();