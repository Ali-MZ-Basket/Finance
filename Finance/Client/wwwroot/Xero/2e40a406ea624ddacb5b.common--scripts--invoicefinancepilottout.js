!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/assets/",t(t.s=296)}({296:function(e,t){Ext.onReady(function(){function e(){u.hide(),l=!0,Ext.Ajax.request({url:"/Ajax/InvoiceFinancePilot/DismissInvoiceFinancePilotTout",method:"POST",timeout:1e3,scope:this}),d.removeEventListener("click",e),window.removeEventListener("resize",t),XERO.bus.removeListener("gettingstarted:hidden",t),XERO.bus.removeListener("gettingstarted:show",t),u=null}function t(){l||u.show(v)}function n(){o("Offer Clicked","Invoice finance pilot link was CLICKED")}function i(){o("Offer Dismissed","Invoice finance pilot tout was DISMISSED")}function o(e,t){if(window.ga){var n={hitType:"event",eventCategory:"Invoice Finance Pilot",eventAction:e,eventLabel:t};window.ga("send",n)}}var r=Ext.get("FinancePilot");if(r){o("Offer Shown","Invoice finance pilot tout was SHOWN");var a=document.createElement("div");a.setAttribute("id","x-invoicefinance-tip-container"),a.innerHTML="<h1>Need to unlock cash?</h1><p>Borrow money against these unpaid invoices and you could access funds within 48 hours.</p><div></div>";var c=document.createElement("div"),s=document.createElement("a");s.setAttribute("id","x-invoicefinance-tip-setup"),s.innerHTML="Get a quote",s.setAttribute("href","https://www.xero.com/waddle-invoice-finance/data-sharing"),s.setAttribute("target","_blank"),c.setAttribute("class","x-invoicefinance-buttonwrapper"),c.appendChild(s);var d=document.createElement("span");d.setAttribute("id","x-invoicefinance-dismiss"),a.appendChild(d),a.appendChild(c);var u=new XERO.tip.PointerTip({target:r,closable:!1,cls:"x-pointer-tip x-invoicefinance-tip",pointerHeight:-175,title:"",width:300,shadow:"side",contentEl:a});u.setColor("white");var l=!1;s.addEventListener("click",n),d.addEventListener("click",e),d.addEventListener("click",i);var v=16,f=Date.now(),p=setInterval(function(){t(),Date.now()-f>3e3&&clearInterval(p)},300);XERO.bus.addListener("gettingstarted:hidden",t),XERO.bus.addListener("gettingstarted:show",t),window.addEventListener("resize",t)}})}});