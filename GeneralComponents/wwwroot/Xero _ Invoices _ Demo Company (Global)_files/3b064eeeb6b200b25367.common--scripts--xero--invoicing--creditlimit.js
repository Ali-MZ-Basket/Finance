!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/assets/",e(e.s=544)}({544:function(t,e){Ext.define("XERO.invoicing.creditlimits.CreditBannerManager",function(){return{statics:{show:function(){var t=Ext.query("table.standard td.attachment, table.expenseClaimSummary td.attachment, table#chartOfAccounts td.attachment, table#contactList td.attachment");if(t&&t.length>0){var e=Ext.Array.map(t,function(t){return Ext.fly(t).getAttribute("data-id")});Ext.Ajax.request({url:"/CreditLimit/GetCreditLimitsByInvoices",method:"POST",params:{invoiceIds:e},success:function(t){function e(t){return t.CreditHold}var n=JSON.parse(t.responseText);if(n&&n.filter(e).length>0){var i=['<div class="tip-content" style="float:none; padding: 12px 16px;">','<p style="font-weight: bold; margin-bottom:0; margin-top:0;">Credit limits now block repeat invoices</p>','<p style="margin-bottom:0;">Repeat invoices won\'t be automatically approved or sent when the contact has a credit limit block.</p>','<span class="close-tip" id="closeBannerBtn"></span>',"</div>"].join(""),o=document.createElement("div");o.innerHTML=i,o.className="x-paymentservices-tip x-paymentservices-activation",o.style="width: 906px;margin: 0 auto 15px;float: none;position: relative;padding: 10px;border-width: 2px;border-style: solid;box-shadow: 1px 1px 3px #ddd;border-radius: 5px;";Ext.select("div.bridge-lower").first().dom.insertAdjacentElement("afterbegin",o);Ext.fly("closeBannerBtn").on("click",function(){o.parentNode.removeChild(o)})}}})}}}}}),Ext.define("XERO.invoicing.creditlimits.CreditMonitoringManager",function(){var t={},e={},n=function(n){return"The following contacts are over their credit limit: "+n.map(function(n){var i=e[n];return t.invoiceRows[i.activeInvoices[0]].contactName}).join(", ")},i=function(n){var i=e[n].activeInvoices,o=i.reduce(function(e,n){return t.invoiceRows[n].isSelected&&"creditNote"===t.invoiceRows[n].type?e-t.invoiceRows[n].invoiceAmount:t.invoiceRows[n].isSelected?e+t.invoiceRows[n].invoiceAmount:e},0),c=e[n].creditLimitAmount,r=e[n].amountDue,a=o+r-c;return t.invoiceRows[i[0]].contactName+" is "+Decimal.TWO(a).toFormatted(!0)+" over their credit limit of "+Decimal.TWO(c).toFormatted(!0)+"."},o=function(t){return t?t.split("|").map(function(t){return t.trim()}).filter(function(t){return!t.includes("credit limit")}).join(" | "):""},c=function(){var t=Ext.query(".action-bar .count");return t&&t.length>0?t.shift():void 0},r=function(){var t=c(),e=o(t.innerText),r=e,a=w(!0);1===a.length?r+=" | "+i(a[0]):a.length>1&&(r+=" | "+n(a)),t.innerText=r},a=function(e){var n=Ext.query(".action-bar .js-actionButton a span",!1),i=n.find(function(t){return"Approve"===t.innerText}),o=i.parentElement,c=o.parentElement,r=Object.values(t).filter(function(t){return t.isSelected});e?n&&n.length>0&&c.classList.add("disabled"):!e&&r.length&&n&&n.length>0&&c.classList.remove("disabled")},s=function(){var t=Ext.query(".action-bar .js-actionButton a span",!1),e=t.find(function(t){return"Approve"===t.innerText});return Boolean(e)},l=function(){s()&&(a(E()),r())},u=function(t){var e=t.parentElement.parentElement.cells,n=e[e.length-1];return x(n)},d=function(e){var n=0;return t.selectedInvoices.forEach(function(i){var o=t.invoiceRows[i];o.contactID===e&&"creditNote"===o.type?n-=o.invoiceAmount:o.contactID===e&&(n+=o.invoiceAmount)}),n},v=function(t,n){var i=e[t],o=d(t);return n?i.amountDue>i.creditLimitAmount:o+i.amountDue>i.creditLimitAmount},f=function(e){var n=e.target,i=u(n),o=t.invoiceRows[i];if(!0===n.checked){if(o.isSelected=!0,t.selectedInvoices.push(i),o.contactID){var c=v(o.contactID);p(i,c)}}else if(o.isSelected=!1,b(i),o.contactID){var c=v(o.contactID,!0);p(i,c)}l()},m=function(e){!0===e.target.checked?(Object.values(t.invoiceRows).forEach(function(t){return t.isSelected=!0}),Object.keys(t.invoiceRows).forEach(function(e){t.selectedInvoices.push(e)})):(Object.values(t.invoiceRows).forEach(function(t){return t.isSelected=!1}),t.selectedInvoices=[]),Object.keys(t.invoiceRows).forEach(function(e){var n=t.invoiceRows[e];if(n.contactID){var i=v(n.contactID);p(e,i)}}),l()},p=function(e,n){var i=n?"invoices-credit-limit-icon is-over":"invoices-credit-limit-icon",o=t.invoiceRows[e.toLowerCase()];if(o){var c=Ext.fly(o.rowCreditLimitIconCell),r=c.query("i");r.length>0&&r.forEach(function(t){t.remove()});var a=c.createChild({tag:"i",cls:i,html:""});a.addListener("mouseover",function(t){var e=a.getX()-152,n=a.getY()-52,i=a.dom.classList.contains("is-over"),o=i?"This invoice puts the customer over the credit limit":"This customer has a credit limit",c=new XERO.tip.PointerTip({anchorToTarget:!0,target:a,title:o,width:174});c.addClass("credit-limits-tooltip"),c.showAt([e,n])}),a.addListener("mouseout",function(){var t=Ext.query(".x-pointer-tip.credit-limits-tooltip");t&&t.forEach(function(t){t.remove()})})}},h=function(t){var e=Ext.query("table.standard tbody"),n={},i={};if(e&&e.length>0)for(var o=e.shift(),c=0;c<o.rows.length;c++)Object.assign(i,g(o.rows[c],c,t));return n.invoiceRows=i,n.selectedInvoices=[],n},x=function(t){return t.dataset.id.substr(3)},g=function(t,e,n){var i=void 0,o=void 0,c=void 0,r=void 0,a=void 0,s=void 0,l=function(t){return Boolean(t.querySelector("em.icons.credit-draft"))},u=function(t){var e=t.innerText.toString(),n=e.replace(/,|\(|\)/g,"");return o=parseFloat(n)?parseFloat(n):parseFloat("0")},d={};return"draft"===n?(i=t.cells[0],s=l(t.cells[3])?"creditNote":"",o=u(t.cells[7]),c=t.cells[t.cells.length-1],r=x(c),a=t.cells[4].innerText):"submitted"===n?(i=t.cells[0],s=l(t.cells[3])?"creditNote":"",o=u(t.cells[7]),c=t.cells[t.cells.length-1],r=x(c),a=t.cells[4].innerText):"repeating"===n&&(i=t.cells[0],o=u(t.cells[3]),c=t.cells[t.cells.length-1],r=x(c),a=t.cells[1].innerText),d[r]={contactID:"",contactName:a||"",invoiceAmount:o||0,isSelected:!1,rowCreditLimitIconCell:c||"",rowIndex:e||void 0,rowSelectCheckboxCell:i||"",type:s||""},d},b=function(e){var n=t.selectedInvoices.indexOf(e);n>-1&&t.selectedInvoices.splice(n,1)},w=function(n){var i=t.selectedInvoices,o=[];if(i.length){var c=[];i.forEach(function(i){var r=t.invoiceRows[i],a=r.contactID;if(a&&!c.includes(a)){(n?v(a):e[a].hasHold&&v(a))&&o.push(a),c.push(a)}})}return o},E=function(){return w().length>0},y=function(){var t=Ext.query(".action-bar .js-actionButton a span",!1);if(0!==t.length){var e=t.find(function(t){return"Approve"===t.innerText});e&&e.addEventListener("click",function(t){E()&&t.stopPropagation()})}},I=function(){var t=Ext.query("table.standard thead input[type='checkbox']");t&&t.length>0&&t.forEach(function(t){Ext.fly(t).addListener("change",m)})},C=function(){var t=Ext.query("table.standard tbody tr > td input[type='checkbox']");t&&t.length>0&&t.forEach(function(t){Ext.fly(t).addListener("change",f)})},R=function(){if(e){Object.keys(e).forEach(function(t){var n=e[t],i=n.amountDue>n.creditLimitAmount;n.activeInvoices.forEach(function(t){p(t,i)})})}},A=function(){var e=Object.keys(t.invoiceRows);L(e,D)},D=function(n){n&&(n.forEach(function(n){var i=e[n.ContactID]&&e[n.ContactID].activeInvoices,o=i?e[n.ContactID].activeInvoices:[];o.push(n.InvoiceID),e[n.ContactID]={hasHold:n.CreditHold,creditLimitAmount:n.CreditLimitAmount,amountDue:n.AmountDue,activeInvoices:o};var c=t.invoiceRows[n.InvoiceID];c&&(c.contactID=n.ContactID,c.invoiceAmount=n.InvoiceAmountDueBase||c.invoiceAmount)}),R())},L=function(t,e){Ext.Ajax.request({url:"/CreditLimit/GetCreditLimitsByInvoices",method:"POST",params:{invoiceIds:t},success:function(t){"function"==typeof e&&e(JSON.parse(t.responseText))},failure:function(){}})};return{statics:{init:function(e){t=h(e),"repeating"===e?(A(),XERO.invoicing.creditlimits.CreditBannerManager.show()):"draft"!==e&&"submitted"!==e||(y(),I(),C(),A())},refreshCreditBlockActions:function(t){new Ext.util.DelayedTask(function(){y(),l()}).delay(t)}}}}),Ext.onReady(function(){Ext.defer(function(){var t="",e=window.location.pathname;if("/AccountsReceivable/SearchRepeating.aspx"===e)t="repeating";else if("/AccountsReceivable/Search.aspx"===e){var n=new URLSearchParams(window.location.search),i=n.get("invoiceStatus");i&&(t=i.substr(14).toLocaleLowerCase())}t&&XERO.invoicing.creditlimits.CreditMonitoringManager.init(t)},50)})}});