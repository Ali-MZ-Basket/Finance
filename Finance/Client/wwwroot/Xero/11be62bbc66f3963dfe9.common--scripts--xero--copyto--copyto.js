!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/assets/",t(t.s=524)}({524:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(525),i=(n.n(o),n(71)),c=(n.n(i),n(526)),r=(n.n(c),n(72)),a=(n.n(r),n(527)),s=(n.n(a),n(528)),u=(n.n(s),n(93)),l=(n.n(u),n(529));n.n(l)},525:function(e,t){Ext.onReady(function(){function e(e){function t(e){var t=0;return XERO.constants.CopyToUIText.documentOrderMap.forEach(function(n){e.name===XERO.util.InvoiceTypeMapper.getCodeName(n.code)&&(t=n.order)}),t}return e.sort(function(e,n){return t(e)-t(n)})}function t(t,n){var o=t.map(function(e){e.isCisInvoice=t.hasCisInvoice;var o=XERO.util.CopyToActionUIText.getCopyToActionText(e,n.length>1),i=e;return i.name=o.name,i.description=o.description,i.requiresContact=!0,i.inventoryDefaultsDescription=o.inventoryDefaultsDescription,i}),i=XERO.constants.CopyToUIText;return{heading:t.hasCisInvoice?i.cisSourceHeadingText:n.length>1?i.multipleSourceHeadingText:i.singleSourceHeadingText,documents:e(o),defaultContact:r()}}function n(e){if(e.length>0){var n=o(e),i=t(n,e);XERO.CopyToAdapter.init(i,d)}}function o(e){var t=p.getFullySupportedActionsFor(e,"SERVER_ACTION_COPY_TO");return"False"===XERO.data.CisEnabled?t:(i(XERO.invoices,e)?(t=c(t),t.hasCisInvoice=!0):t.hasCisInvoice=!1,t)}function i(e,t){for(var n=Object.keys(e),o=Object.values(e),i=!1,c=0;c<t.length;c++){for(var r=0;r<n.length;r++)if(t[c]===n[r]&&"1"===o[r].isCisInvoice){i=!0;break}if(i)break}return i}function c(e){return e=[].concat(e.filter(function(e){return"INVOICETYPE/ACCREC"===e.targetDocType}))}function r(){if(u())return{id:window.Invoice.ContactID?window.Invoice.ContactID:null,name:window.Invoice.ContactName?a(window.Invoice.ContactName):null}}function a(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}function s(e){return e.reduce(function(e,t){for(var n=0;n<Object.keys(XERO.invoices).length;n++)if(t===Object.keys(XERO.invoices)[n]){var o=Object.values(XERO.invoices)[n].invoiceTypeCode;if("INVOICETYPE/ACCRECCREDIT"!==o&&"INVOICETYPE/ARPREPAYMENT"!==o)return e.concat([t])}return e},[])}function u(){return void 0!==window.Invoice}function l(){return void 0!==window.Invoice&&void 0!==window.Invoice.invoiceData}var d={showModal:function(){XERO.analytics.Analytics.track("Copy to",{Action:"Modal opened"},"xx")},hideModal:function(){XERO.analytics.Analytics.track("Copy to",{Action:"Modal closed"},"xx")},createCopy:function(e){var t=u()?l()?"edit":"document":"list";XERO.analytics.Analytics.track("Copy to",{Action:"Copy created - "+t+" view",MultipleDocumentsSelected:document.querySelectorAll(".js-documentSelect:checked").length>1,"Invoice Type Code":e.targetDocType,HasInventoryDefaultCheck:!!e.useInventoryDefaults,HasContact:!!e.targetContactId},"xx")}},p=new XERO.util.ServerActions(XERO.serverActions.all,XERO.invoices);u()?function(){XERO.CopyToAdapter.initFrameLoader(XERO.bus,XERO.url.copyToModalUrl);var e=document.querySelectorAll(".js-copyToInit");[].forEach.call(e,function(e){e.addEventListener("click",function(){n([Invoice.InvoiceID])})})}():function(){var e=document.querySelectorAll(".js-documentSelect"),t=document.querySelectorAll(".js-copyToInit");[].forEach.call(t,function(e){e.addEventListener("click",function(){e.classList.contains("disabled")||(document.getElementById("copyTo")||XERO.CopyToAdapter.initFrameLoader(XERO.bus,XERO.url.copyToModalUrl),n(s(XERO.widget.Tables.getItems(this).map(function(e){return e.value}))))})});var o=!1;[].forEach.call(e,function(e){e.addEventListener("click",function(){e.checked&&!o&&(XERO.CopyToAdapter.initFrameLoader(XERO.bus,XERO.url.copyToModalUrl),o=!0)})})}()})},526:function(e,t){!function(){"use strict";window.XERO=XERO||{},window.XERO.constants=XERO.constants||{},window.XERO.constants.CopyToUIText={singleSourceText:"Create it for:",multipleSourceText:"Merge all contents into one for:",cisSingleSourceText:"Merge all contents into one invoice for:",singleSourceHeadingText:"Copy to a new...",multipleSourceHeadingText:"Copy & merge into a new...",cisSourceHeadingText:"Copy & merge into a new invoice",inventoryDefaultsPrimaryText:"Use item details if set",inventoryDefaultsSecondaryText:"(purchase price, description, etc)",documentOrderMap:[{code:"INVOICETYPE/ACCREC",order:0},{code:"INVOICETYPE/SALESQUOTE",order:1},{code:"INVOICETYPE/PURCHASEORDER",order:2},{code:"INVOICETYPE/ACCPAY",order:3}],documentNameMap:[{code:"INVOICETYPE/ACCREC",name:"Invoice"}]}}()},527:function(e,t){XERO=XERO||{},XERO.CopyToAdapter=function(){"use strict";var e;return{url:null,frame:null,initialState:null,events:{},initFrameLoader:function(e,t){this.url=t,XERO.util.FrameLoader.init(e);var n=function(){};e.fireEvent("frameloader:load",{id:"copyTo",url:t,style:{"z-index":15,position:"fixed"}},this.onFirstFrameLoad.bind(this),n)},init:function(e,t){this.initialState=e,this.events=t||this.events,this.sendInitialState(),this.showFrame()},onFirstFrameLoad:function(e){this.setFrame(e),this.initPostMesssage()},setFrame:function(e){this.frame=e},runActionWhenFrameIsAvailable:function(e){function t(){n.frame?e():window.setTimeout(function(){t()},10)}var n=this;t()},initPostMesssage:function(){window.addEventListener("message",this.receivePostMessage.bind(this),!1)},sendPostMessage:function(e,t){var n=this;if(!e)return!1;var o={event:e,data:t};return this.runActionWhenFrameIsAvailable(function(){n.frame.contentWindow.postMessage(o,n.url)}),!0},receivePostMessage:function(e){if(e){var t=e.data;if(t&&t.event)switch(t.event){case"copyto:requestinitialstate":this.sendInitialState();break;case"copyto:requestcontactsearch":this.doContactSearch(t.data);break;case"copyto:requestshowmodal":this.showFrame();break;case"copyto:requesthidemodal":this.hideFrame();break;case"copyto:requestcreate":this.createCopyTo(t.data)}}},sendInitialState:function(){this.initialState&&this.sendPostMessage("copyto:initialstate",this.initialState)},showFrame:function(){var e=this;e.sendPostMessage("copyto:showmodal"),this.runActionWhenFrameIsAvailable(function(){e.frame.style.display="block"}),this.fireEventCallback("showModal")},hideFrame:function(){XERO.widget&&XERO.widget.Buttons&&"function"==typeof XERO.widget.Buttons.enable&&XERO.widget.Buttons.enable(),this.frame.style.display="none",this.fireEventCallback("hideModal")},doContactSearch:function(t){function n(t,n){e===t&&o.sendContactData.call(o,n)}var o=this;e=Ext.id(),function(e){Ext.Ajax.request({url:"/lookup/contacts?invoiceType=INVOICETYPE/ACCREC&limit=25&search="+t,success:function(t){n(e,Ext.decode(t.responseText))},failure:function(t){n(e,[])}})}(e)},sendContactData:function(e){this.sendPostMessage("copyto:contacts",e)},createCopyTo:function(e){XERO.serverActions.navigateTo(e),this.fireEventCallback("createCopy",e)},invokeCopyTo:function(e){XERO.serverActions.invoke(e,this.createCopyToSuccess,this.createCopyToError)},createCopyToError:function(e){},createCopyToResult:function(e){},fireEventCallback:function(e,t){var n=this.events[e];n&&"function"==typeof n&&n.call(null,t)}}}()},528:function(e,t){!function(){"use strict";XERO=XERO||{},XERO.util=XERO.util||{},XERO.util.CopyToActionUIText={getCopyToActionText:function(e,t){var n=XERO.constants.CopyToUIText,o=e.isCisInvoice?null:this.getMappedDocumentName(e.targetDocType);return{description:e.isCisInvoice?n.cisSingleSourceText:t?n.multipleSourceText:n.singleSourceText,name:o,inventoryDefaultsDescription:e.hasInventoryDefaultsOption?{primary:n.inventoryDefaultsPrimaryText,secondary:n.inventoryDefaultsSecondaryText}:null}},getMappedDocumentName:function(e){var t=XERO.util.InvoiceTypeMapper.getCodeName(e);return XERO.constants.CopyToUIText.documentNameMap.forEach(function(n){e===n.code&&(t=n.name)}),t}}}()},529:function(e,t){XERO=XERO||{},XERO.util=XERO.util||{},XERO.util.ServerActions=function(e,t){this.actions=e,this.invoices=t},XERO.util.ServerActions.prototype.getFullySupportedActionsFor=function(e,t){var n=[].concat(this.actions.filter(function(e){return e.type==t}));return n.forEach(function(t){t.sourceDocumentIds=this.invoiceIdsForAction(e,t.id)},this),n.filter(function(t){return t.sourceDocumentIds.length===e.length})},XERO.util.ServerActions.prototype.invoiceIdsForAction=function(e,t){var n=[];return e.forEach(function(e){this.invoiceHasAction(e,t)&&n.push(e)},this),n},XERO.util.ServerActions.prototype.invoiceHasAction=function(e,t){return this.invoices.hasOwnProperty(e)&&this.invoices[e].serverActions.some(function(e){return e===t})}},71:function(e,t){!function(){"use strict";window.XERO=XERO||{},window.XERO.constants=XERO.constants||{},window.XERO.constants.InvoiceTypes=[{code:"INVOICETYPE/ACCPAY",name:"Bill",type:"payable"},{code:"INVOICETYPE/ACCPAYCREDIT",name:"Bill Credit Note",type:"payable"},{code:"INVOICETYPE/APPREPAYMENT",name:"Bill Prepayment",type:"payable"},{code:"INVOICETYPE/PURCHASEORDER",name:"Purchase Order",type:"payable"},{code:"INVOICETYPE/CASHPAID",name:"Spend Money",type:"payable"},{code:"INVOICETYPE/EXPCLAIM",name:"Expense Claim",type:"payable"},{code:"INVOICETYPE/RECEIPT",name:"Receipt",type:"payable"},{code:"INVOICETYPE/ACCREC",name:"Sales Invoice",type:"receivable"},{code:"INVOICETYPE/ACCRECCREDIT",name:"Sales Credit Note",type:"receivable"},{code:"INVOICETYPE/ARPREPAYMENT",name:"Sales Prepayment",type:"receivable"},{code:"INVOICETYPE/SALESQUOTE",name:"Quote",type:"receivable"},{code:"INVOICETYPE/CASHREC",name:"Receive Money",type:"receivable"}]}()},72:function(e,t){!function(){"use strict";window.XERO=XERO||{},window.XERO.util=XERO.util||{},window.XERO.util.InvoiceTypeMapper={getByCode:function(e,t){for(var n,o=0,i=t.length;o<i;o++)if(n=t[o],n.code===e)return n},getByType:function(e,t){return t.filter(function(t){return t.type===e})},getCodeName:function(e){var t=this.getByCode(e,XERO.constants.InvoiceTypes);return t?t.name:"Unknown"}}}()},93:function(e,t){XERO=XERO||{},XERO.serverActions=XERO.serverActions||function(){return{all:[],navigateTo:function(e){var t=document.createElement("form");t.setAttribute("method","post"),t.setAttribute("action",e.navigateUrl);var n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name","serverAction"),n.setAttribute("value",JSON.stringify(e)),t.appendChild(n);var o=document.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name","__RequestVerificationToken"),o.setAttribute("value",document.querySelector("input[name='__RequestVerificationToken']").value),t.appendChild(o),document.body.appendChild(t),t.submit()},invoke:function(e,t,n){var o=new XMLHttpRequest;o.open("POST",e.invokeUrl),o.setRequestHeader("Content-Type","application/json"),o.onreadystatechange=function(){4==o.readyState&&("function"==typeof t&&"application/json"==this.getResponseHeader("Content-Type")?t(JSON.parse(this.responseText)):"function"==typeof n&&n(this))},o.send(JSON.stringify(jsondata))}}}()}});