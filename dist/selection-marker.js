var SelectionMarker=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);t.default=i.MarkSelection},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={initialText:"I am a sample text, you can highlight me!",startIdx:0,endIdx:1,markerClass:"marker",tokenClass:"token",beginClass:"begin",endClass:"end",selectedClass:"selected",draggedClass:"dragged"},r=function(){function e(e,t){this.el=e,this.config=t,this.config=Object.assign({},i,this.config),this.createTokens(),this.initContainer(),this.initDragEvents()}return e.prototype.initContainer=function(){this.el.style.display="flex",this.el.style.userSelect="none",this.begin=this.createMarker(!0,2*this.config.startIdx),this.end=this.createMarker(!1,2*this.config.endIdx),this.el.appendChild(this.begin.node),this.el.appendChild(this.end.node)},e.prototype.createTokens=function(){var e=this;this.el.innerHTML=this.config.initialText.split(" ").map(function(t,n){var i=2*n+1,r=n>=e.config.startIdx&&n<e.config.endIdx?e.config.selectedClass:"";return'<div class="'+e.config.tokenClass+" "+r+'" data-order='+i+' style="order:'+i+'">'+t+"</div>"}).join("")},e.prototype.initDragEvents=function(){var e=this;this.el.addEventListener("dragstart",function(t){var n=t.target;n.classList.contains(e.config.markerClass)&&(e.dragged=n.id===e.config.beginClass?e.begin:e.end,setTimeout(function(){return n.classList.add(e.config.draggedClass)}))}),this.el.addEventListener("dragenter",function(t){var n=t.target;if(e.dragged&&e.isToken(n)){var i=Number.parseInt(n.dataset.order);e.dragged===e.begin&&i+1<=e.end.order?e.updateSelection(e.dragged,i-1,n):e.dragged===e.end&&i-1>=e.begin.order&&e.updateSelection(e.dragged,i+1,n)}}),this.el.addEventListener("dragend",function(t){t.target.classList.remove(e.config.draggedClass),e.dragged=null})},e.prototype.isToken=function(e){return e.classList.contains(this.config.tokenClass)},e.prototype.updateSelection=function(e,t,n){var i=this;e.node.style.order=""+t,e.order=t;var r=this.begin.order/2,s=this.end.order/2,a="";Array.from(this.el.children).forEach(function(e,t){t>=r&&t<s?(e.classList.add(i.config.selectedClass),a+=" "+e.textContent):e.classList.remove(i.config.selectedClass)}),this.config.onMarked(a,r,s-1)},e.prototype.createMarker=function(e,t){void 0===e&&(e=!1);var n=document.createElement("div"),i=e?this.config.beginClass:this.config.endClass;return n.innerHTML='<div draggable=true class="'+this.config.markerClass+" "+i+'" id='+i+' style="order:'+t+'"></div>',{node:n.firstElementChild,order:t,isBegin:e}},e}();t.MarkSelection=r}]);