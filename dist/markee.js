var Markee=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={initialText:"I am a sample text, you can highlight me!",startIdx:0,endIdx:1,markerClass:"marker",tokenClass:"token",beginClass:"begin",endClass:"end",selectedClass:"selected",draggedClass:"dragged",hideDragGhost:!1},i=function(){function e(e,t){this.el=e,this.config=t,this.config=Object.assign({},r,this.config),this.createTokens(),this.initContainer(),this.initDragEvents(),this.initClickEvents(),this.updateSelectedChildren()}return e.prototype.initContainer=function(){this.el.style.display="flex",this.el.style.userSelect="none",this.begin=this.createMarker(!0,2*this.config.startIdx),this.end=this.createMarker(!1,2*this.config.endIdx),this.el.appendChild(this.begin.node),this.el.appendChild(this.end.node)},e.prototype.createTokens=function(){var e=this;this.el.innerHTML=this.config.initialText.split(" ").map(function(t,n){var r=2*n+1,i=n>=e.config.startIdx&&n<e.config.endIdx?e.config.selectedClass:"";return'<div class="'+e.config.tokenClass+" "+i+'" data-order='+r+' style="order:'+r+'">'+t+"</div>"}).join("")},e.prototype.initDragEvents=function(){var e=this;this.el.addEventListener("dragstart",function(t){var n=t.target;n.classList.contains(e.config.markerClass)&&(e.dragged=n.id===e.config.beginClass?e.begin:e.end,e.config.hideDragGhost&&(n.style.opacity="0",t.dataTransfer.setDragImage(n,0,0)),t.dataTransfer.setData("Text","random"),t.dataTransfer.setData("text/plain",n.id),setTimeout(function(){n.style.opacity="1",n.classList.add(e.config.draggedClass)}))}),this.el.addEventListener("dragenter",function(t){var n=t.target;if(e.dragged&&e.isToken(n)){var r=Number.parseInt(n.dataset.order);e.dragged===e.begin&&r+1<=e.end.order?e.updateSelection(e.dragged,r-1,n):e.dragged===e.end&&r-1>=e.begin.order&&e.updateSelection(e.dragged,r+1,n)}}),this.el.addEventListener("dragend",function(t){t.target.classList.remove(e.config.draggedClass),e.dragged=null})},e.prototype.initClickEvents=function(){var e=this;this.el.addEventListener("click",function(t){var n=t.target;if(e.isToken(n)){var r=Number.parseInt(n.dataset.order);e.begin.order=r-1,e.begin.node.style.order=""+e.begin.order,e.end.order=r+1,e.end.node.style.order=""+e.end.order,e.updateSelectedChildren()}})},e.prototype.isToken=function(e){return e.classList.contains(this.config.tokenClass)},e.prototype.updateSelection=function(e,t,n){e.node.style.order=""+t,e.order=t,this.updateSelectedChildren()},e.prototype.updateSelectedChildren=function(){var e=this,t="",n=this.begin.order/2,r=this.end.order/2;Array.from(this.el.children).forEach(function(i,s){s>=n&&s<r?(i.classList.add(e.config.selectedClass),t+=" "+i.textContent):i.classList.remove(e.config.selectedClass)}),this.config.onMarked(t,n,r-1,this.begin.node,this.end.node)},e.prototype.createMarker=function(e,t){void 0===e&&(e=!1);var n=document.createElement("div"),r=e?this.config.beginClass:this.config.endClass;return n.innerHTML='<div draggable=true class="'+this.config.markerClass+" "+r+'" id='+r+' style="order:'+t+'"></div>',{node:n.firstElementChild,order:t,isBegin:e}},e}();t.Markee=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=r.Markee;var i=n(0);t.Markee=i.Markee}]);