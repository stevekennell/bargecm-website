/*! jQuery UI - v1.9.1 - 2012-11-20
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.effect.js
* Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:u.widgetEventPrefix||t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():new i(o,this)}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n){var r,i=this;n?(t=r=e(t),this.bindings=this.bindings.add(t)):(n=t,t=this.element,r=this.widget()),e.each(n,function(n,s){function o(){if(i.options.disabled===!0||e(this).hasClass("ui-state-disabled"))return;return(typeof s=="string"?i[s]:s).apply(i,arguments)}typeof s!="string"&&(o.guid=s.guid=s.guid||o.guid||e.guid++);var u=n.match(/^(\w+)\s*(.*)$/),a=u[1]+i.eventNamespace,f=u[2];f?r.delegate(f,a,o):t.bind(a,o)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.9.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(n=e.ui.ddmanager.drop(this,t)),this.dropped&&(n=this.dropped,this.dropped=!1);var r=this.element[0],i=!1;while(r&&(r=r.parentNode))r==document&&(i=!0);if(!i&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!n||this.options.revert=="valid"&&n||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)){var s=this;e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()})}else this._trigger("stop",t)!==!1&&this._clear();return!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").andSelf().each(function(){this==t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo=="parent"?this.element[0].parentNode:n.appendTo),r[0]!=this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[t.containment=="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t.containment=="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(t.containment=="document"?0:e(window).scrollLeft())+e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(t.containment=="document"?0:e(window).scrollTop())+(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)&&t.containment.constructor!=Array){var n=e(t.containment),r=n[0];if(!r)return;var i=n.offset(),s=e(r).css("overflow")!="hidden";this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(s?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(s?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else t.containment.constructor==Array&&(this.containment=t.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName),s=t.pageX,o=t.pageY;if(this.originalPosition){var u;if(this.containment){if(this.relative_container){var a=this.relative_container.offset();u=[this.containment[0]+a.left,this.containment[1]+a.top,this.containment[2]+a.left,this.containment[3]+a.top]}else u=this.containment;t.pageX-this.offset.click.left<u[0]&&(s=u[0]+this.offset.click.left),t.pageY-this.offset.click.top<u[1]&&(o=u[1]+this.offset.click.top),t.pageX-this.offset.click.left>u[2]&&(s=u[2]+this.offset.click.left),t.pageY-this.offset.click.top>u[3]&&(o=u[3]+this.offset.click.top)}if(n.grid){var f=n.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY;o=u?f-this.offset.click.top<u[1]||f-this.offset.click.top>u[3]?f-this.offset.click.top<u[1]?f+n.grid[1]:f-n.grid[1]:f:f;var l=n.grid[0]?this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX;s=u?l-this.offset.click.left<u[0]||l-this.offset.click.left>u[2]?l-this.offset.click.left<u[0]?l+n.grid[0]:l-n.grid[0]:l:l}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(e){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("draggable"),i=this,s=function(t){var n=this.offset.click.top,r=this.offset.click.left,i=this.positionAbs.top,s=this.positionAbs.left,o=t.height,u=t.width,a=t.top,f=t.left;return e.ui.isOver(i+n,s+r,a,f,o,u)};e.each(r.sortables,function(s){var o=!1,u=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!=u&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(u.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,n){var r=e("body"),i=e(this).data("draggable").options;r.css("cursor")&&(i._cursor=r.css("cursor")),r.css("cursor",i.cursor)},stop:function(t,n){var r=e(this).data("draggable").options;r._cursor&&e("body").css("cursor",r._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(t,n){var r=e(this).data("draggable");r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"&&(r.overflowOffset=r.scrollParent.offset())},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=!1;if(r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"){if(!i.axis||i.axis!="x")r.overflowOffset.top+r.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop-i.scrollSpeed);if(!i.axis||i.axis!="y")r.overflowOffset.left+r.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft-i.scrollSpeed)}else{if(!i.axis||i.axis!="x")t.pageY-e(document).scrollTop()<i.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<i.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed));if(!i.axis||i.axis!="y")t.pageX-e(document).scrollLeft()<i.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed))}s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,n){var r=e(this).data("draggable"),i=r.options;r.snapElements=[],e(i.snap.constructor!=String?i.snap.items||":data(draggable)":i.snap).each(function(){var t=e(this),n=t.offset();this!=r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})})},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=i.snapTolerance,o=n.offset.left,u=o+r.helperProportions.width,a=n.offset.top,f=a+r.helperProportions.height;for(var l=r.snapElements.length-1;l>=0;l--){var c=r.snapElements[l].left,h=c+r.snapElements[l].width,p=r.snapElements[l].top,d=p+r.snapElements[l].height;if(!(c-s<o&&o<h+s&&p-s<a&&a<d+s||c-s<o&&o<h+s&&p-s<f&&f<d+s||c-s<u&&u<h+s&&p-s<a&&a<d+s||c-s<u&&u<h+s&&p-s<f&&f<d+s)){r.snapElements[l].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=!1;continue}if(i.snapMode!="inner"){var v=Math.abs(p-f)<=s,m=Math.abs(d-a)<=s,g=Math.abs(c-u)<=s,y=Math.abs(h-o)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p-r.helperProportions.height,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c-r.helperProportions.width}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h}).left-r.margins.left)}var b=v||m||g||y;if(i.snapMode!="outer"){var v=Math.abs(p-a)<=s,m=Math.abs(d-f)<=s,g=Math.abs(c-o)<=s,y=Math.abs(h-u)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d-r.helperProportions.height,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h-r.helperProportions.width}).left-r.margins.left)}!r.snapElements[l].snapping&&(v||m||g||y||b)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=v||m||g||y||b}}}),e.ui.plugin.add("draggable","stack",{start:function(t,n){var r=e(this).data("draggable").options,i=e.makeArray(e(r.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!i.length)return;var s=parseInt(i[0].style.zIndex)||0;e(i).each(function(e){this.style.zIndex=s+e}),this[0].style.zIndex=s+i.length}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);jQuery.effects||function(e,t){var n=e.uiBackCompat!==!1,r="ui-effects-";e.effects={effect:{}},function(t,n){function p(e,t,n){var r=a[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function d(e){var n=o(),r=n._rgba=[];return e=e.toLowerCase(),h(s,function(t,i){var s,o=i.re.exec(e),a=o&&i.parse(o),f=i.space||"rgba";if(a)return s=n[f](a),n[u[f].cache]=s[u[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&t.extend(r,c.transparent),n):c[e]}function v(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),i=/^([\-+])=\s*(\d+\.?\d*)/,s=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],o=t.Color=function(e,n,r,i){return new t.Color.fn.parse(e,n,r,i)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},a={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},f=o.support={},l=t("<p>")[0],c,h=t.each;l.style.cssText="background-color:rgba(1,1,1,.5)",f.rgba=l.style.backgroundColor.indexOf("rgba")>-1,h(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),o.fn=t.extend(o.prototype,{parse:function(r,i,s,a){if(r===n)return this._rgba=[null,null,null,null],this;if(r.jquery||r.nodeType)r=t(r).css(i),i=n;var f=this,l=t.type(r),v=this._rgba=[];i!==n&&(r=[r,i,s,a],l="array");if(l==="string")return this.parse(d(r)||c._default);if(l==="array")return h(u.rgba.props,function(e,t){v[t.idx]=p(r[t.idx],t)}),this;if(l==="object")return r instanceof o?h(u,function(e,t){r[t.cache]&&(f[t.cache]=r[t.cache].slice())}):h(u,function(t,n){var i=n.cache;h(n.props,function(e,t){if(!f[i]&&n.to){if(e==="alpha"||r[e]==null)return;f[i]=n.to(f._rgba)}f[i][t.idx]=p(r[e],t,!0)}),f[i]&&e.inArray(null,f[i].slice(0,3))<0&&(f[i][3]=1,n.from&&(f._rgba=n.from(f[i])))}),this},is:function(e){var t=o(e),n=!0,r=this;return h(u,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],h(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return h(u,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=o(e),r=n._space(),i=u[r],s=this.alpha()===0?o("transparent"):this,f=s[i.cache]||i.to(s._rgba),l=f.slice();return n=n[i.cache],h(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],u=a[r.type]||{};if(o===null)return;s===null?l[i]=o:(u.mod&&(o-s>u.mod/2?s+=u.mod:s-o>u.mod/2&&(s-=u.mod)),l[i]=p((o-s)*t+s,r))}),this[r](l)},blend:function(e){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=o(e)._rgba;return o(t.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var e="rgba(",n=t.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),e="rgb("),e+n.join()+")"},toHslaString:function(){var e="hsla(",n=t.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),e="hsl("),e+n.join()+")"},toHexString:function(e){var n=this._rgba.slice(),r=n.pop();return e&&n.push(~~(r*255)),"#"+t.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),o.fn.parse.prototype=o.fn,u.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,f===0||f===1?c=f:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},u.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(v(o,s,t+1/3)*255),Math.round(v(o,s,t)*255),Math.round(v(o,s,t-1/3)*255),i]},h(u,function(e,r){var s=r.props,u=r.cache,a=r.to,f=r.from;o.fn[e]=function(e){a&&!this[u]&&(this[u]=a(this._rgba));if(e===n)return this[u].slice();var r,i=t.type(e),l=i==="array"||i==="object"?e:arguments,c=this[u].slice();return h(s,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=c[t.idx]),c[t.idx]=p(n,t)}),f?(r=o(f(c)),r[u]=c,r):o(c)},h(s,function(n,r){if(o.fn[n])return;o.fn[n]=function(s){var o=t.type(s),u=n==="alpha"?this._hsla?"hsla":"rgba":e,a=this[u](),f=a[r.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=t.type(s)),s==null&&r.empty?this:(o==="string"&&(l=i.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[r.idx]=s,this[u](a)))}})}),h(r,function(e,n){t.cssHooks[n]={set:function(e,r){var i,s,u="";if(t.type(r)!=="string"||(i=d(r))){r=o(i||r);if(!f.rgba&&r._rgba[3]!==1){s=n==="backgroundColor"?e.parentNode:e;while((u===""||u==="transparent")&&s&&s.style)try{u=t.css(s,"backgroundColor"),s=s.parentNode}catch(a){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{e.style[n]=r}catch(l){}}},t.fx.step[n]=function(e){e.colorInit||(e.start=o(e.elem,n),e.end=o(e.end),e.colorInit=!0),t.cssHooks[n].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return h(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},c=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var t=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,n={},r,i;if(t&&t.length&&t[0]&&t[t[0]]){i=t.length;while(i--)r=t[i],typeof t[r]=="string"&&(n[e.camelCase(r)]=t[r])}else for(r in t)typeof t[r]=="string"&&(n[r]=t[r]);return n}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").andSelf():r;f=f.map(function(){var t=e(this);return{el:t,start:i.call(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i.call(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=jQuery.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function i(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function s(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]?n&&e.effects[t]?!1:!0:!1}e.extend(e.effects,{version:"1.9.1",save:function(e,t){for(var n=0;n<t.length;n++)t[n]!==null&&e.data(r+t[n],e[0].style[t[n]])},restore:function(e,n){var i,s;for(s=0;s<n.length;s++)n[s]!==null&&(i=e.data(r+n[s]),i===t&&(i=""),e.css(n[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function a(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,s=t.mode;(r.is(":hidden")?s==="hide":s==="show")?u():o.call(r[0],t,u)}var t=i.apply(this,arguments),r=t.mode,s=t.queue,o=e.effects.effect[t.effect],u=!o&&n&&e.effects[t.effect];return e.fx.off||!o&&!u?r?this[r](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):o?s===!1?this.each(a):this.queue(s||"fx",a):u.call(this,{options:t,duration:t.duration,callback:t.complete,mode:t.mode})},_show:e.fn.show,show:function(e){if(s(e))return this._show.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(s(e))return this._hide.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(s(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);

/* 
== malihu jquery custom scrollbars plugin == 
version: 2.3.2 
author: malihu (http://manos.malihu.gr) 
plugin home: http://manos.malihu.gr/jquery-custom-content-scroller 
*/
(function($){
	var methods={
		init:function(options){
			var defaults={ 
				set_width:false, /*optional element width: boolean, pixels, percentage*/
				set_height:false, /*optional element height: boolean, pixels, percentage*/
				horizontalScroll:false, /*scroll horizontally: boolean*/
				scrollInertia:550, /*scrolling inertia: integer (milliseconds)*/
				scrollEasing:"easeOutCirc", /*scrolling easing: string*/
				mouseWheel:"pixels", /*mousewheel support and velocity: boolean, "auto", integer, "pixels"*/
				mouseWheelPixels:60, /*mousewheel pixels amount: integer*/
				autoDraggerLength:true, /*auto-adjust scrollbar dragger length: boolean*/
				scrollButtons:{ /*scroll buttons*/
					enable:false, /*scroll buttons support: boolean*/
					scrollType:"continuous", /*scroll buttons scrolling type: "continuous", "pixels"*/
					scrollSpeed:20, /*scroll buttons continuous scrolling speed: integer*/
					scrollAmount:40 /*scroll buttons pixels scroll amount: integer (pixels)*/
				},
				advanced:{
					updateOnBrowserResize:true, /*update scrollbars on browser resize (for layouts based on percentages): boolean*/
					updateOnContentResize:false, /*auto-update scrollbars on content resize (for dynamic content): boolean*/
					autoExpandHorizontalScroll:false, /*auto-expand width for horizontal scrolling: boolean*/
					autoScrollOnFocus:true /*auto-scroll on focused elements: boolean*/
				},
				callbacks:{
					onScrollStart:function(){}, /*user custom callback function on scroll start event*/
					onScroll:function(){}, /*user custom callback function on scroll event*/
					onTotalScroll:function(){}, /*user custom callback function on scroll end reached event*/
					onTotalScrollBack:function(){}, /*user custom callback function on scroll begin reached event*/
					onTotalScrollOffset:0, /*scroll end reached offset: integer (pixels)*/
					whileScrolling:false, /*user custom callback function on scrolling event*/
					whileScrollingInterval:30 /*interval for calling whileScrolling callback: integer (milliseconds)*/
				}
			},
			options=$.extend(true,defaults,options);
			/*check for touch device*/
			$(document).data("mCS-is-touch-device",false);
			if(is_touch_device()){
				$(document).data("mCS-is-touch-device",true); 
			}
			function is_touch_device(){
				return !!("ontouchstart" in window) ? 1 : 0;
			}
			return this.each(function(){
				var $this=$(this);
				/*set element width/height, create markup for custom scrollbars, add classes*/
				if(options.set_width){
					$this.css("width",options.set_width);
				}
				if(options.set_height){
					$this.css("height",options.set_height);
				}
				if(!$(document).data("mCustomScrollbar-index")){
					$(document).data("mCustomScrollbar-index","1");
				}else{
					var mCustomScrollbarIndex=parseInt($(document).data("mCustomScrollbar-index"));
					$(document).data("mCustomScrollbar-index",mCustomScrollbarIndex+1);
				}
				$this.wrapInner("<div class='mCustomScrollBox' id='mCSB_"+$(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+$(document).data("mCustomScrollbar-index"));
				var mCustomScrollBox=$this.children(".mCustomScrollBox");
				if(options.horizontalScroll){
					mCustomScrollBox.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
					var mCSB_h_wrapper=mCustomScrollBox.children(".mCSB_h_wrapper");
					mCSB_h_wrapper.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({"width":mCSB_h_wrapper.children().outerWidth(),"position":"relative"}).unwrap();
				}else{
					mCustomScrollBox.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />");
				}
				var mCSB_container=mCustomScrollBox.children(".mCSB_container");
				if($(document).data("mCS-is-touch-device")){
					mCSB_container.addClass("mCS_touch");
				}
				mCSB_container.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer' style='position:relative;'><div class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
				var mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),
					mCSB_draggerContainer=mCSB_scrollTools.children(".mCSB_draggerContainer"),
					mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger");
				if(options.horizontalScroll){
					mCSB_dragger.data("minDraggerWidth",mCSB_dragger.width());
				}else{
					mCSB_dragger.data("minDraggerHeight",mCSB_dragger.height());
				}
				if(options.scrollButtons.enable){
					if(options.horizontalScroll){
						mCSB_scrollTools.prepend("<a class='mCSB_buttonLeft' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonRight' style='display:block; position:relative;'></a>");
					}else{
						mCSB_scrollTools.prepend("<a class='mCSB_buttonUp' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonDown' style='display:block; position:relative;'></a>");
					}
				}
				/*mCustomScrollBox scrollTop and scrollLeft is always 0 to prevent browser focus scrolling*/
				mCustomScrollBox.bind("scroll",function(){
					if(!$this.is(".mCS_disabled")){ /*native focus scrolling for disabled scrollbars*/
						mCustomScrollBox.scrollTop(0).scrollLeft(0);
					}
				});
				/*store options, global vars/states, intervals and update element*/
				$this.data({
					/*init state*/
					"mCS_Init":true,
					/*option parameters*/
					"horizontalScroll":options.horizontalScroll,
					"scrollInertia":options.scrollInertia,
					"scrollEasing":options.scrollEasing,
					"mouseWheel":options.mouseWheel,
					"mouseWheelPixels":options.mouseWheelPixels,
					"autoDraggerLength":options.autoDraggerLength,
					"scrollButtons_enable":options.scrollButtons.enable,
					"scrollButtons_scrollType":options.scrollButtons.scrollType,
					"scrollButtons_scrollSpeed":options.scrollButtons.scrollSpeed,
					"scrollButtons_scrollAmount":options.scrollButtons.scrollAmount,
					"autoExpandHorizontalScroll":options.advanced.autoExpandHorizontalScroll,
					"autoScrollOnFocus":options.advanced.autoScrollOnFocus,
					"onScrollStart_Callback":options.callbacks.onScrollStart,
					"onScroll_Callback":options.callbacks.onScroll,
					"onTotalScroll_Callback":options.callbacks.onTotalScroll,
					"onTotalScrollBack_Callback":options.callbacks.onTotalScrollBack,
					"onTotalScroll_Offset":options.callbacks.onTotalScrollOffset,
					"whileScrolling_Callback":options.callbacks.whileScrolling,
					"whileScrolling_Interval":options.callbacks.whileScrollingInterval,
					/*events binding state*/
					"bindEvent_scrollbar_click":false,
					"bindEvent_mousewheel":false,
					"bindEvent_focusin":false,
					"bindEvent_buttonsContinuous_y":false,
					"bindEvent_buttonsContinuous_x":false,
					"bindEvent_buttonsPixels_y":false,
					"bindEvent_buttonsPixels_x":false,
					"bindEvent_scrollbar_touch":false,
					"bindEvent_content_touch":false,
					/*buttons intervals*/
					"mCSB_buttonScrollRight":false,
					"mCSB_buttonScrollLeft":false,
					"mCSB_buttonScrollDown":false,
					"mCSB_buttonScrollUp":false,
					/*callback intervals*/
					"whileScrolling":false
				}).mCustomScrollbar("update");
				/*detect max-width*/
				if(options.horizontalScroll){
					if($this.css("max-width")!=="none"){
						if(!options.advanced.updateOnContentResize){ /*needs updateOnContentResize*/
							options.advanced.updateOnContentResize=true;
						}
						$this.data({"mCS_maxWidth":parseInt($this.css("max-width")),"mCS_maxWidth_Interval":setInterval(function(){
							if(mCSB_container.outerWidth()>$this.data("mCS_maxWidth")){
								clearInterval($this.data("mCS_maxWidth_Interval"));
								$this.mCustomScrollbar("update");
							}
						},150)});
					}
				}else{
					/*detect max-height*/
					if($this.css("max-height")!=="none"){
						$this.data({"mCS_maxHeight":parseInt($this.css("max-height")),"mCS_maxHeight_Interval":setInterval(function(){
							mCustomScrollBox.css("max-height",$this.data("mCS_maxHeight"));
							if(mCSB_container.outerHeight()>$this.data("mCS_maxHeight")){
								clearInterval($this.data("mCS_maxHeight_Interval"));
								$this.mCustomScrollbar("update");
							}
						},150)});
					}
				}
				/*window resize fn (for layouts based on percentages)*/
				if(options.advanced.updateOnBrowserResize){
					var mCSB_resizeTimeout;
					$(window).resize(function(){
						if(mCSB_resizeTimeout){
							clearTimeout(mCSB_resizeTimeout);
						}
						mCSB_resizeTimeout=setTimeout(function(){
							if(!$this.is(".mCS_disabled") && !$this.is(".mCS_destroyed")){
								$this.mCustomScrollbar("update");
							}
						},150);
					});
				}
				/*content resize fn (for dynamically generated content)*/
				if(options.advanced.updateOnContentResize){
					var mCSB_onContentResize;
					if(options.horizontalScroll){
						var mCSB_containerOldSize=mCSB_container.outerWidth();
					}else{
						var mCSB_containerOldSize=mCSB_container.outerHeight();
					}
					mCSB_onContentResize=setInterval(function(){
						if(options.horizontalScroll){
							if(options.advanced.autoExpandHorizontalScroll){
								mCSB_container.css({"position":"absolute","width":"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({"width":mCSB_container.outerWidth(),"position":"relative"}).unwrap();
							}
							var mCSB_containerNewSize=mCSB_container.outerWidth();
						}else{
							var mCSB_containerNewSize=mCSB_container.outerHeight();
						}
						if(mCSB_containerNewSize!=mCSB_containerOldSize){
							$this.mCustomScrollbar("update");
							mCSB_containerOldSize=mCSB_containerNewSize;
						}
					},300);
				}
			});
		},
		update:function(){
			var $this=$(this),
				mCustomScrollBox=$this.children(".mCustomScrollBox"),
				mCSB_container=mCustomScrollBox.children(".mCSB_container");
			mCSB_container.removeClass("mCS_no_scrollbar");
			$this.removeClass("mCS_disabled mCS_destroyed");
			mCustomScrollBox.scrollTop(0).scrollLeft(0); /*reset scrollTop/scrollLeft to prevent browser focus scrolling*/
			var mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),
				mCSB_draggerContainer=mCSB_scrollTools.children(".mCSB_draggerContainer"),
				mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger");
			if($this.data("horizontalScroll")){
				var mCSB_buttonLeft=mCSB_scrollTools.children(".mCSB_buttonLeft"),
					mCSB_buttonRight=mCSB_scrollTools.children(".mCSB_buttonRight"),
					mCustomScrollBoxW=mCustomScrollBox.width();
				if($this.data("autoExpandHorizontalScroll")){
					mCSB_container.css({"position":"absolute","width":"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({"width":mCSB_container.outerWidth(),"position":"relative"}).unwrap();
				}
				var mCSB_containerW=mCSB_container.outerWidth();
			}else{
				var mCSB_buttonUp=mCSB_scrollTools.children(".mCSB_buttonUp"),
					mCSB_buttonDown=mCSB_scrollTools.children(".mCSB_buttonDown"),
					mCustomScrollBoxH=mCustomScrollBox.height(),
					mCSB_containerH=mCSB_container.outerHeight();
			}
			if(mCSB_containerH>mCustomScrollBoxH && !$this.data("horizontalScroll")){ /*content needs vertical scrolling*/
				mCSB_scrollTools.css("display","block");
				var mCSB_draggerContainerH=mCSB_draggerContainer.height();
				/*auto adjust scrollbar dragger length analogous to content*/
				if($this.data("autoDraggerLength")){
					var draggerH=Math.round(mCustomScrollBoxH/mCSB_containerH*mCSB_draggerContainerH),
						minDraggerH=mCSB_dragger.data("minDraggerHeight");
					if(draggerH<=minDraggerH){ /*min dragger height*/
						mCSB_dragger.css({"height":minDraggerH});
					}else if(draggerH>=mCSB_draggerContainerH-10){ /*max dragger height*/
						var mCSB_draggerContainerMaxH=mCSB_draggerContainerH-10;
						mCSB_dragger.css({"height":mCSB_draggerContainerMaxH});
					}else{
						mCSB_dragger.css({"height":draggerH});
					}
					mCSB_dragger.children(".mCSB_dragger_bar").css({"line-height":mCSB_dragger.height()+"px"});
				}
				var mCSB_draggerH=mCSB_dragger.height(),
				/*calculate and store scroll amount, add scrolling*/
					scrollAmount=(mCSB_containerH-mCustomScrollBoxH)/(mCSB_draggerContainerH-mCSB_draggerH);
				$this.data("scrollAmount",scrollAmount).mCustomScrollbar("scrolling",mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight);
				/*scroll*/
				var mCSB_containerP=Math.abs(Math.round(mCSB_container.position().top));
				$this.mCustomScrollbar("scrollTo",mCSB_containerP,{callback:false});
			}else if(mCSB_containerW>mCustomScrollBoxW && $this.data("horizontalScroll")){ /*content needs horizontal scrolling*/
				mCSB_scrollTools.css("display","block");
				var mCSB_draggerContainerW=mCSB_draggerContainer.width();
				/*auto adjust scrollbar dragger length analogous to content*/
				if($this.data("autoDraggerLength")){
					var draggerW=Math.round(mCustomScrollBoxW/mCSB_containerW*mCSB_draggerContainerW),
						minDraggerW=mCSB_dragger.data("minDraggerWidth");
					if(draggerW<=minDraggerW){ /*min dragger height*/
						mCSB_dragger.css({"width":minDraggerW});
					}else if(draggerW>=mCSB_draggerContainerW-10){ /*max dragger height*/
						var mCSB_draggerContainerMaxW=mCSB_draggerContainerW-10;
						mCSB_dragger.css({"width":mCSB_draggerContainerMaxW});
					}else{
						mCSB_dragger.css({"width":draggerW});
					}
				}
				var mCSB_draggerW=mCSB_dragger.width(),
				/*calculate and store scroll amount, add scrolling*/
					scrollAmount=(mCSB_containerW-mCustomScrollBoxW)/(mCSB_draggerContainerW-mCSB_draggerW);
				$this.data("scrollAmount",scrollAmount).mCustomScrollbar("scrolling",mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight);
				/*scroll*/
				var mCSB_containerP=Math.abs(Math.round(mCSB_container.position().left));
				$this.mCustomScrollbar("scrollTo",mCSB_containerP,{callback:false});
			}else{ /*content does not need scrolling*/
				/*unbind events, reset content position, hide scrollbars, remove classes*/
				mCustomScrollBox.unbind("mousewheel focusin");
				if($this.data("horizontalScroll")){
					mCSB_dragger.add(mCSB_container).css("left",0);
				}else{
					mCSB_dragger.add(mCSB_container).css("top",0);
				}
				mCSB_scrollTools.css("display","none");
				mCSB_container.addClass("mCS_no_scrollbar");
				$this.data({"bindEvent_mousewheel":false,"bindEvent_focusin":false});
			}
		},
		scrolling:function(mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight){
			var $this=$(this);
			/*while scrolling callback*/
			$this.mCustomScrollbar("callbacks","whileScrolling"); 
			/*drag scrolling*/
			if(!mCSB_dragger.hasClass("ui-draggable")){ /*apply drag function once*/
				if($this.data("horizontalScroll")){
					var draggableAxis="x";
				}else{
					var draggableAxis="y";
				}
				mCSB_dragger.draggable({ 
					axis:draggableAxis,
					containment:"parent",
					drag:function(event,ui){
						$this.mCustomScrollbar("scroll");
						mCSB_dragger.addClass("mCSB_dragger_onDrag");
					},
					stop:function(event,ui){
						mCSB_dragger.removeClass("mCSB_dragger_onDrag");	
					}
				});
			}
			if(!$this.data("bindEvent_scrollbar_click")){ /*bind once*/
				mCSB_draggerContainer.bind("click",function(e){
					if($this.data("horizontalScroll")){
						var mouseCoord=(e.pageX-mCSB_draggerContainer.offset().left);
						if(mouseCoord<mCSB_dragger.position().left || mouseCoord>(mCSB_dragger.position().left+mCSB_dragger.width())){
							var scrollToPos=mouseCoord;
							if(scrollToPos>=mCSB_draggerContainer.width()-mCSB_dragger.width()){ /*max dragger position is bottom*/
								scrollToPos=mCSB_draggerContainer.width()-mCSB_dragger.width();
							}
							mCSB_dragger.css("left",scrollToPos);
							$this.mCustomScrollbar("scroll");
						}
					}else{
						var mouseCoord=(e.pageY-mCSB_draggerContainer.offset().top);
						if(mouseCoord<mCSB_dragger.position().top || mouseCoord>(mCSB_dragger.position().top+mCSB_dragger.height())){
							var scrollToPos=mouseCoord;
							if(scrollToPos>=mCSB_draggerContainer.height()-mCSB_dragger.height()){ /*max dragger position is bottom*/
								scrollToPos=mCSB_draggerContainer.height()-mCSB_dragger.height();
							}
							mCSB_dragger.css("top",scrollToPos);
							$this.mCustomScrollbar("scroll");
						}
					}
				});
				$this.data({"bindEvent_scrollbar_click":true});
			}
			/*mousewheel scrolling*/
			if($this.data("mouseWheel")){
				var mousewheelVel=$this.data("mouseWheel");
				if($this.data("mouseWheel")==="auto"){
					mousewheelVel=8; /*default mousewheel velocity*/
					/*check for safari browser on mac osx to lower mousewheel velocity*/
					var os=navigator.userAgent;
					if(os.indexOf("Mac")!=-1 && os.indexOf("Safari")!=-1 && os.indexOf("AppleWebKit")!=-1 && os.indexOf("Chrome")==-1){ 
						mousewheelVel=1;
					}
				}
				if(!$this.data("bindEvent_mousewheel")){ /*bind once*/
					mCustomScrollBox.bind("mousewheel",function(event,delta){
						event.preventDefault();
						var vel=Math.abs(delta*mousewheelVel);
						if($this.data("horizontalScroll")){
							if($this.data("mouseWheel")==="pixels"){
								if(delta<0){
									delta=-1;
								}else{
									delta=1;
								}
								var scrollTo=Math.abs(Math.round(mCSB_container.position().left))-(delta*$this.data("mouseWheelPixels"));
								$this.mCustomScrollbar("scrollTo",scrollTo);
							}else{
								var posX=mCSB_dragger.position().left-(delta*vel);
								mCSB_dragger.css("left",posX);
								if(mCSB_dragger.position().left<0){
									mCSB_dragger.css("left",0);
								}
								var mCSB_draggerContainerW=mCSB_draggerContainer.width(),
									mCSB_draggerW=mCSB_dragger.width();
								if(mCSB_dragger.position().left>mCSB_draggerContainerW-mCSB_draggerW){
									mCSB_dragger.css("left",mCSB_draggerContainerW-mCSB_draggerW);
								}
								$this.mCustomScrollbar("scroll");
							}
						}else{
							if($this.data("mouseWheel")==="pixels"){
								if(delta<0){
									delta=-1;
								}else{
									delta=1;
								}
								var scrollTo=Math.abs(Math.round(mCSB_container.position().top))-(delta*$this.data("mouseWheelPixels"));
								$this.mCustomScrollbar("scrollTo",scrollTo);
							}else{
								var posY=mCSB_dragger.position().top-(delta*vel);
								mCSB_dragger.css("top",posY);
								if(mCSB_dragger.position().top<0){
									mCSB_dragger.css("top",0);
								}
								var mCSB_draggerContainerH=mCSB_draggerContainer.height(),
									mCSB_draggerH=mCSB_dragger.height();
								if(mCSB_dragger.position().top>mCSB_draggerContainerH-mCSB_draggerH){
									mCSB_dragger.css("top",mCSB_draggerContainerH-mCSB_draggerH);
								}
								$this.mCustomScrollbar("scroll");
							}
						}
					});
					$this.data({"bindEvent_mousewheel":true});
				}
			}
			/*buttons scrolling*/
			if($this.data("scrollButtons_enable")){
				if($this.data("scrollButtons_scrollType")==="pixels"){ /*scroll by pixels*/
					var pixelsScrollTo;
					if($.browser.msie && parseInt($.browser.version)<9){ /*stupid ie8*/
						$this.data("scrollInertia",0);
					}
					if($this.data("horizontalScroll")){
						mCSB_buttonRight.add(mCSB_buttonLeft).unbind("mousedown touchstart onmsgesturestart mouseup mouseout touchend onmsgestureend",mCSB_buttonRight_stop,mCSB_buttonLeft_stop);
						$this.data({"bindEvent_buttonsContinuous_x":false});
						if(!$this.data("bindEvent_buttonsPixels_x")){ /*bind once*/
							/*scroll right*/
							mCSB_buttonRight.bind("click",function(e){
								e.preventDefault();
								if(!mCSB_container.is(":animated")){
									pixelsScrollTo=Math.abs(mCSB_container.position().left)+$this.data("scrollButtons_scrollAmount");
									$this.mCustomScrollbar("scrollTo",pixelsScrollTo);
								}
							});
							/*scroll left*/
							mCSB_buttonLeft.bind("click",function(e){
								e.preventDefault();
								if(!mCSB_container.is(":animated")){
									pixelsScrollTo=Math.abs(mCSB_container.position().left)-$this.data("scrollButtons_scrollAmount");
									if(mCSB_container.position().left>=-$this.data("scrollButtons_scrollAmount")){
										pixelsScrollTo="left";
									}
									$this.mCustomScrollbar("scrollTo",pixelsScrollTo);
								}
							});
							$this.data({"bindEvent_buttonsPixels_x":true});
						}
					}else{
						mCSB_buttonDown.add(mCSB_buttonUp).unbind("mousedown touchstart onmsgesturestart mouseup mouseout touchend onmsgestureend",mCSB_buttonRight_stop,mCSB_buttonLeft_stop);
						$this.data({"bindEvent_buttonsContinuous_y":false});
						if(!$this.data("bindEvent_buttonsPixels_y")){ /*bind once*/
							/*scroll down*/
							mCSB_buttonDown.bind("click",function(e){
								e.preventDefault();
								if(!mCSB_container.is(":animated")){
									pixelsScrollTo=Math.abs(mCSB_container.position().top)+$this.data("scrollButtons_scrollAmount");
									$this.mCustomScrollbar("scrollTo",pixelsScrollTo);
								}
							});
							/*scroll up*/
							mCSB_buttonUp.bind("click",function(e){
								e.preventDefault();
								if(!mCSB_container.is(":animated")){
									pixelsScrollTo=Math.abs(mCSB_container.position().top)-$this.data("scrollButtons_scrollAmount");
									if(mCSB_container.position().top>=-$this.data("scrollButtons_scrollAmount")){
										pixelsScrollTo="top";
									}
									$this.mCustomScrollbar("scrollTo",pixelsScrollTo);
								}
							});
							$this.data({"bindEvent_buttonsPixels_y":true});
						}
					}
				}else{ /*continuous scrolling*/
					if($this.data("horizontalScroll")){
						mCSB_buttonRight.add(mCSB_buttonLeft).unbind("click");
						$this.data({"bindEvent_buttonsPixels_x":false});
						if(!$this.data("bindEvent_buttonsContinuous_x")){ /*bind once*/
							/*scroll right*/
							mCSB_buttonRight.bind("mousedown touchstart onmsgesturestart",function(e){
								e.preventDefault();
								e.stopPropagation();
								$this.data({"mCSB_buttonScrollRight":setInterval(function(){
									var scrollTo=Math.round((Math.abs(Math.round(mCSB_container.position().left))+$this.data("scrollButtons_scrollSpeed"))/$this.data("scrollAmount"));
									$this.mCustomScrollbar("scrollTo",scrollTo,{moveDragger:true});
								},30)});
							});
							var mCSB_buttonRight_stop=function(e){
								e.preventDefault();
								e.stopPropagation();
								clearInterval($this.data("mCSB_buttonScrollRight"));
							}
							mCSB_buttonRight.bind("mouseup touchend onmsgestureend mouseout",mCSB_buttonRight_stop);
							/*scroll left*/
							mCSB_buttonLeft.bind("mousedown touchstart onmsgesturestart",function(e){
								e.preventDefault();
								e.stopPropagation();
								$this.data({"mCSB_buttonScrollLeft":setInterval(function(){
									var scrollTo=Math.round((Math.abs(Math.round(mCSB_container.position().left))-$this.data("scrollButtons_scrollSpeed"))/$this.data("scrollAmount"));
									$this.mCustomScrollbar("scrollTo",scrollTo,{moveDragger:true});
								},30)});
							});	
							var mCSB_buttonLeft_stop=function(e){
								e.preventDefault();
								e.stopPropagation();
								clearInterval($this.data("mCSB_buttonScrollLeft"));
							}
							mCSB_buttonLeft.bind("mouseup touchend onmsgestureend mouseout",mCSB_buttonLeft_stop);
							$this.data({"bindEvent_buttonsContinuous_x":true});
						}
					}else{
						mCSB_buttonDown.add(mCSB_buttonUp).unbind("click");
						$this.data({"bindEvent_buttonsPixels_y":false});
						if(!$this.data("bindEvent_buttonsContinuous_y")){ /*bind once*/
							/*scroll down*/
							mCSB_buttonDown.bind("mousedown touchstart onmsgesturestart",function(e){
								e.preventDefault();
								e.stopPropagation();
								$this.data({"mCSB_buttonScrollDown":setInterval(function(){
									var scrollTo=Math.round((Math.abs(Math.round(mCSB_container.position().top))+$this.data("scrollButtons_scrollSpeed"))/$this.data("scrollAmount"));
									$this.mCustomScrollbar("scrollTo",scrollTo,{moveDragger:true});
								},30)});
							});
							var mCSB_buttonDown_stop=function(e){
								e.preventDefault();
								e.stopPropagation();
								clearInterval($this.data("mCSB_buttonScrollDown"));
							}
							mCSB_buttonDown.bind("mouseup touchend onmsgestureend mouseout",mCSB_buttonDown_stop);
							/*scroll up*/
							mCSB_buttonUp.bind("mousedown touchstart onmsgesturestart",function(e){
								e.preventDefault();
								e.stopPropagation();
								$this.data({"mCSB_buttonScrollUp":setInterval(function(){
									var scrollTo=Math.round((Math.abs(Math.round(mCSB_container.position().top))-$this.data("scrollButtons_scrollSpeed"))/$this.data("scrollAmount"));
									$this.mCustomScrollbar("scrollTo",scrollTo,{moveDragger:true});
								},30)});
							});	
							var mCSB_buttonUp_stop=function(e){
								e.preventDefault();
								e.stopPropagation();
								clearInterval($this.data("mCSB_buttonScrollUp"));
							}
							mCSB_buttonUp.bind("mouseup touchend onmsgestureend mouseout",mCSB_buttonUp_stop);
							$this.data({"bindEvent_buttonsContinuous_y":true});
						}
					}
				}
			}
			/*scrolling on element focus (e.g. via TAB key)*/
			if($this.data("autoScrollOnFocus")){
				if(!$this.data("bindEvent_focusin")){ /*bind once*/
					mCustomScrollBox.bind("focusin",function(){
						mCustomScrollBox.scrollTop(0).scrollLeft(0);
						var focusedElem=$(document.activeElement);
						if(focusedElem.is("input,textarea,select,button,a[tabindex],area,object")){
							if($this.data("horizontalScroll")){
								var mCSB_containerX=mCSB_container.position().left,
									focusedElemX=focusedElem.position().left,
									mCustomScrollBoxW=mCustomScrollBox.width(),
									focusedElemW=focusedElem.outerWidth();
								if(mCSB_containerX+focusedElemX>=0 && mCSB_containerX+focusedElemX<=mCustomScrollBoxW-focusedElemW){
									/*just focus...*/
								}else{ /*scroll, then focus*/
									var moveDragger=focusedElemX/$this.data("scrollAmount");
									if(moveDragger>=mCSB_draggerContainer.width()-mCSB_dragger.width()){ /*max dragger position is bottom*/
										moveDragger=mCSB_draggerContainer.width()-mCSB_dragger.width();
									}
									mCSB_dragger.css("left",moveDragger);
									$this.mCustomScrollbar("scroll");
								}
							}else{
								var mCSB_containerY=mCSB_container.position().top,
									focusedElemY=focusedElem.position().top,
									mCustomScrollBoxH=mCustomScrollBox.height(),
									focusedElemH=focusedElem.outerHeight();
								if(mCSB_containerY+focusedElemY>=0 && mCSB_containerY+focusedElemY<=mCustomScrollBoxH-focusedElemH){
									/*just focus...*/
								}else{ /*scroll, then focus*/
									var moveDragger=focusedElemY/$this.data("scrollAmount");
									if(moveDragger>=mCSB_draggerContainer.height()-mCSB_dragger.height()){ /*max dragger position is bottom*/
										moveDragger=mCSB_draggerContainer.height()-mCSB_dragger.height();
									}
									mCSB_dragger.css("top",moveDragger);
									$this.mCustomScrollbar("scroll");
								}
							}
						}
					});
					$this.data({"bindEvent_focusin":true});
				}
			}
			/*touch events*/
			if($(document).data("mCS-is-touch-device")){
				/*scrollbar touch-drag*/
				if(!$this.data("bindEvent_scrollbar_touch")){ /*bind once*/
					var mCSB_draggerTouchY,
						mCSB_draggerTouchX;
					mCSB_dragger.bind("touchstart onmsgesturestart",function(e){
						e.preventDefault();
						e.stopPropagation();
						var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
							elem=$(this),
							elemOffset=elem.offset(),
							x=touch.pageX-elemOffset.left,
							y=touch.pageY-elemOffset.top;
						if(x<elem.width() && x>0 && y<elem.height() && y>0){
							mCSB_draggerTouchY=y;
							mCSB_draggerTouchX=x;
						}
					});
					mCSB_dragger.bind("touchmove onmsgesturechange",function(e){
						e.preventDefault();
						e.stopPropagation();
						var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
							elem=$(this),
							elemOffset=elem.offset(),
							x=touch.pageX-elemOffset.left,
							y=touch.pageY-elemOffset.top;
						if($this.data("horizontalScroll")){
							$this.mCustomScrollbar("scrollTo",(mCSB_dragger.position().left-(mCSB_draggerTouchX))+x,{moveDragger:true});
						}else{
							$this.mCustomScrollbar("scrollTo",(mCSB_dragger.position().top-(mCSB_draggerTouchY))+y,{moveDragger:true});
						}
					});
					$this.data({"bindEvent_scrollbar_touch":true});
				}
				/*content touch-drag*/
				if(!$this.data("bindEvent_content_touch")){ /*bind once*/
					var touch,
						elem,
						elemOffset,
						x,
						y,
						mCSB_containerTouchY,
						mCSB_containerTouchX;
					mCSB_container.bind("touchstart onmsgesturestart",function(e){
						touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
						elem=$(this);
						elemOffset=elem.offset();
						x=touch.pageX-elemOffset.left;
						y=touch.pageY-elemOffset.top;
						mCSB_containerTouchY=y;
						mCSB_containerTouchX=x;
					});
					mCSB_container.bind("touchmove onmsgesturechange",function(e){
						e.preventDefault();
						e.stopPropagation();
						touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
						elem=$(this).parent();
						elemOffset=elem.offset();
						x=touch.pageX-elemOffset.left;
						y=touch.pageY-elemOffset.top;
						if($this.data("horizontalScroll")){
							$this.mCustomScrollbar("scrollTo",mCSB_containerTouchX-x);
						}else{
							$this.mCustomScrollbar("scrollTo",mCSB_containerTouchY-y);
						}
					});
					$this.data({"bindEvent_content_touch":true});
				}
			}
		},
		scroll:function(bypassCallbacks){
			var $this=$(this),
				mCSB_dragger=$this.find(".mCSB_dragger"),
				mCSB_container=$this.find(".mCSB_container"),
				mCustomScrollBox=$this.find(".mCustomScrollBox");
			if($this.data("horizontalScroll")){
				var draggerX=mCSB_dragger.position().left,
					targX=-draggerX*$this.data("scrollAmount"),
					thisX=mCSB_container.position().left,
					posX=Math.round(thisX-targX);
			}else{
				var draggerY=mCSB_dragger.position().top,
					targY=-draggerY*$this.data("scrollAmount"),
					thisY=mCSB_container.position().top,
					posY=Math.round(thisY-targY);
			}
			if($.browser.webkit){ /*fix webkit zoom and jquery animate*/
				var screenCssPixelRatio=(window.outerWidth-8)/window.innerWidth,
					isZoomed=(screenCssPixelRatio<.98 || screenCssPixelRatio>1.02);
			}
			if($this.data("scrollInertia")===0 || isZoomed){
				if(!bypassCallbacks){
					$this.mCustomScrollbar("callbacks","onScrollStart"); /*user custom callback functions*/
				}
				if($this.data("horizontalScroll")){
					mCSB_container.css("left",targX);
				}else{
					mCSB_container.css("top",targY);
				}
				if(!bypassCallbacks){
					/*user custom callback functions*/
					if($this.data("whileScrolling")){
						$this.data("whileScrolling_Callback").call();
					}
					$this.mCustomScrollbar("callbacks","onScroll");  
				}
				$this.data({"mCS_Init":false});
			}else{
				if(!bypassCallbacks){
					$this.mCustomScrollbar("callbacks","onScrollStart"); /*user custom callback functions*/
				}
				if($this.data("horizontalScroll")){
					mCSB_container.stop().animate({left:"-="+posX},$this.data("scrollInertia"),$this.data("scrollEasing"),function(){
						if(!bypassCallbacks){
							$this.mCustomScrollbar("callbacks","onScroll"); /*user custom callback functions*/
						}
						$this.data({"mCS_Init":false});
					});
				}else{
					mCSB_container.stop().animate({top:"-="+posY},$this.data("scrollInertia"),$this.data("scrollEasing"),function(){
						if(!bypassCallbacks){
							$this.mCustomScrollbar("callbacks","onScroll"); /*user custom callback functions*/
						}
						$this.data({"mCS_Init":false});
					});
				}
			}
		},
		scrollTo:function(scrollTo,options){
			var defaults={
				moveDragger:false,
				callback:true
			},
				options=$.extend(defaults,options),
				$this=$(this),
				scrollToPos,
				mCustomScrollBox=$this.find(".mCustomScrollBox"),
				mCSB_container=mCustomScrollBox.children(".mCSB_container"),
				mCSB_draggerContainer=$this.find(".mCSB_draggerContainer"),
				mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger"),
				targetPos;
			if(scrollTo || scrollTo===0){
				if(typeof(scrollTo)==="number"){ /*if integer, scroll by number of pixels*/
					if(options.moveDragger){ /*scroll dragger*/
						scrollToPos=scrollTo;
					}else{ /*scroll content by default*/
						targetPos=scrollTo;
						scrollToPos=Math.round(targetPos/$this.data("scrollAmount"));
					}
				}else if(typeof(scrollTo)==="string"){ /*if string, scroll by element position*/
					var target;
					if(scrollTo==="top"){ /*scroll to top*/
						target=0;
					}else if(scrollTo==="bottom" && !$this.data("horizontalScroll")){ /*scroll to bottom*/
						target=mCSB_container.outerHeight()-mCustomScrollBox.height();
					}else if(scrollTo==="left"){ /*scroll to left*/
						target=0;
					}else if(scrollTo==="right" && $this.data("horizontalScroll")){ /*scroll to right*/
						target=mCSB_container.outerWidth()-mCustomScrollBox.width();
					}else if(scrollTo==="first"){ /*scroll to first element position*/
						target=$this.find(".mCSB_container").find(":first");
					}else if(scrollTo==="last"){ /*scroll to last element position*/
						target=$this.find(".mCSB_container").find(":last");
					}else{ /*scroll to element position*/
						target=$this.find(scrollTo);
					}
					if(target.length===1){ /*if such unique element exists, scroll to it*/
						if($this.data("horizontalScroll")){
							targetPos=target.position().left;
						}else{
							targetPos=target.position().top;
						}
						scrollToPos=Math.ceil(targetPos/$this.data("scrollAmount"));
					}else{
						scrollToPos=target;
					}
				}
				/*scroll to*/
				if(scrollToPos<0){
					scrollToPos=0;
				}
				if($this.data("horizontalScroll")){
					if(scrollToPos>=mCSB_draggerContainer.width()-mCSB_dragger.width()){ /*max dragger position is bottom*/
						scrollToPos=mCSB_draggerContainer.width()-mCSB_dragger.width();
					}
					mCSB_dragger.css("left",scrollToPos);
				}else{
					if(scrollToPos>=mCSB_draggerContainer.height()-mCSB_dragger.height()){ /*max dragger position is bottom*/
						scrollToPos=mCSB_draggerContainer.height()-mCSB_dragger.height();
					}
					mCSB_dragger.css("top",scrollToPos);
				}
				if(options.callback){
					$this.mCustomScrollbar("scroll",false);
				}else{
					$this.mCustomScrollbar("scroll",true);
				}
			}
		},
		callbacks:function(callback){
			var $this=$(this),
				mCustomScrollBox=$this.find(".mCustomScrollBox"),
				mCSB_container=$this.find(".mCSB_container");
			switch(callback){
				/*start scrolling callback*/
				case "onScrollStart":
					if(!mCSB_container.is(":animated")){
						$this.data("onScrollStart_Callback").call();
					}
					break;
				/*end scrolling callback*/
				case "onScroll":
					if($this.data("horizontalScroll")){
						var mCSB_containerX=Math.round(mCSB_container.position().left);
						if(mCSB_containerX<0 && mCSB_containerX<=mCustomScrollBox.width()-mCSB_container.outerWidth()+$this.data("onTotalScroll_Offset")){
							$this.data("onTotalScroll_Callback").call();
						}else if(mCSB_containerX>=-$this.data("onTotalScroll_Offset")){
							$this.data("onTotalScrollBack_Callback").call();
						}else{
							$this.data("onScroll_Callback").call();
						}
					}else{
						var mCSB_containerY=Math.round(mCSB_container.position().top);
						if(mCSB_containerY<0 && mCSB_containerY<=mCustomScrollBox.height()-mCSB_container.outerHeight()+$this.data("onTotalScroll_Offset")){
							$this.data("onTotalScroll_Callback").call();
						}else if(mCSB_containerY>=-$this.data("onTotalScroll_Offset")){
							$this.data("onTotalScrollBack_Callback").call();
						}else{
							$this.data("onScroll_Callback").call();
						}
					}
					break;
				/*while scrolling callback*/
				case "whileScrolling":
					if($this.data("whileScrolling_Callback") && !$this.data("whileScrolling")){
						$this.data({"whileScrolling":setInterval(function(){
							if(mCSB_container.is(":animated") && !$this.data("mCS_Init")){
								$this.data("whileScrolling_Callback").call();
							}
						},$this.data("whileScrolling_Interval"))});
					}
					break;
			}
		},
		disable:function(resetScroll){
			var $this=$(this),
				mCustomScrollBox=$this.children(".mCustomScrollBox"),
				mCSB_container=mCustomScrollBox.children(".mCSB_container"),
				mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),
				mCSB_dragger=mCSB_scrollTools.find(".mCSB_dragger");
			mCustomScrollBox.unbind("mousewheel focusin");
			if(resetScroll){
				if($this.data("horizontalScroll")){
					mCSB_dragger.add(mCSB_container).css("left",0);
				}else{
					mCSB_dragger.add(mCSB_container).css("top",0);
				}
			}
			mCSB_scrollTools.css("display","none");
			mCSB_container.addClass("mCS_no_scrollbar");
			$this.data({"bindEvent_mousewheel":false,"bindEvent_focusin":false}).addClass("mCS_disabled");
		},
		destroy:function(){
			var $this=$(this),
				content=$this.find(".mCSB_container").html();
			$this.find(".mCustomScrollBox").remove();
			$this.html(content).removeClass("mCustomScrollbar _mCS_"+$(document).data("mCustomScrollbar-index")).addClass("mCS_destroyed");
		}
	}
	$.fn.mCustomScrollbar=function(method){
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
})(jQuery); 
/*iOS 6 bug fix 
  iOS 6 suffers from a bug that kills timers that are created while a page is scrolling. 
  The following fixes that problem by recreating timers after scrolling finishes (with interval correction).*/
var iOSVersion=iOSVersion();
if(iOSVersion>=6){
	(function(h){var a={};var d={};var e=h.setTimeout;var f=h.setInterval;var i=h.clearTimeout;var c=h.clearInterval;if(!h.addEventListener){return false}function j(q,n,l){var p,k=l[0],m=(q===f);function o(){if(k){k.apply(h,arguments);if(!m){delete n[p];k=null}}}l[0]=o;p=q.apply(h,l);n[p]={args:l,created:Date.now(),cb:k,id:p};return p}function b(q,o,k,r,t){var l=k[r];if(!l){return}var m=(q===f);o(l.id);if(!m){var n=l.args[1];var p=Date.now()-l.created;if(p<0){p=0}n-=p;if(n<0){n=0}l.args[1]=n}function s(){if(l.cb){l.cb.apply(h,arguments);if(!m){delete k[r];l.cb=null}}}l.args[0]=s;l.created=Date.now();l.id=q.apply(h,l.args)}h.setTimeout=function(){return j(e,a,arguments)};h.setInterval=function(){return j(f,d,arguments)};h.clearTimeout=function(l){var k=a[l];if(k){delete a[l];i(k.id)}};h.clearInterval=function(l){var k=d[l];if(k){delete d[l];c(k.id)}};var g=h;while(g.location!=g.parent.location){g=g.parent}g.addEventListener("scroll",function(){var k;for(k in a){b(e,i,a,k)}for(k in d){b(f,c,d,k)}})}(window));
}
function iOSVersion(){
	var agent=window.navigator.userAgent,
		start=agent.indexOf('OS ');
	if((agent.indexOf('iPhone')>-1 || agent.indexOf('iPad')>-1) && start>-1){
		return window.Number(agent.substr(start+3,3).replace('_','.'));
	}
	return 0;
}

// VERSION: 2.2 LAST UPDATE: 13.03.2012
/* 
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * 
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://code.google.com/p/jqueryrotate/ 
 */
(function(j){for(var d,k=document.getElementsByTagName("head")[0].style,h=["transformProperty","WebkitTransform","OTransform","msTransform","MozTransform"],g=0;g<h.length;g++)void 0!==k[h[g]]&&(d=h[g]);var i="v"=="\v";jQuery.fn.extend({rotate:function(a){if(!(0===this.length||"undefined"==typeof a)){"number"==typeof a&&(a={angle:a});for(var b=[],c=0,f=this.length;c<f;c++){var e=this.get(c);if(!e.Wilq32||!e.Wilq32.PhotoEffect){var d=j.extend(!0,{},a),e=(new Wilq32.PhotoEffect(e,d))._rootObj;
b.push(j(e))}else e.Wilq32.PhotoEffect._handleRotation(a)}return b}},getRotateAngle:function(){for(var a=[],b=0,c=this.length;b<c;b++){var f=this.get(b);f.Wilq32&&f.Wilq32.PhotoEffect&&(a[b]=f.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,b=this.length;a<b;a++){var c=this.get(a);c.Wilq32&&c.Wilq32.PhotoEffect&&clearTimeout(c.Wilq32.PhotoEffect._timer)}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return d?function(a,b){a.Wilq32={PhotoEffect:this};this._img=this._rootObj=
this._eventObj=a;this._handleRotation(b)}:function(a,b){this._img=a;this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._rootObj,a);if(a.complete)this._Loader(b);else{var c=this;jQuery(this._img).bind("load",function(){c._Loader(b)})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};"number"!==typeof this._angle&&(this._angle=0);"number"===
typeof a.angle&&(this._angle=a.angle);this._parameters.animateTo="number"===typeof a.animateTo?a.animateTo:this._angle;this._parameters.step=a.step||this._parameters.step||null;this._parameters.easing=a.easing||this._parameters.easing||function(a,c,f,e,d){return-e*((c=c/d-1)*c*c*c-1)+f};this._parameters.duration=a.duration||this._parameters.duration||1E3;this._parameters.callback=a.callback||this._parameters.callback||function(){};a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_handleRotation:function(a){this._setupParameters(a);
this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var b=this._parameters.bind,c;for(c in b)b.hasOwnProperty(c)&&jQuery(this._eventObj).unbind(c,b[c])}this._parameters.bind=a;for(c in a)a.hasOwnProperty(c)&&jQuery(this._eventObj).bind(c,a[c])}},_Loader:function(){return i?function(a){var b=this._img.width,c=this._img.height;this._img.parentNode.removeChild(this._img);this._vimage=this.createVMLNode("image");
this._vimage.src=this._img.src;this._vimage.style.height=c+"px";this._vimage.style.width=b+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._container=this.createVMLNode("group");this._container.style.width=b;this._container.style.height=c;this._container.style.position="absolute";this._container.setAttribute("coordsize",b-1+","+(c-1));this._container.appendChild(this._vimage);this._rootObj.appendChild(this._container);this._rootObj.style.position=
"relative";this._rootObj.style.width=b+"px";this._rootObj.style.height=c+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._eventObj=this._rootObj;this._handleRotation(a)}:function(a){this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._width=this._img.width;this._height=this._img.height;this._widthHalf=this._width/2;this._heightHalf=this._height/2;var b=Math.sqrt(this._height*
this._height+this._width*this._width);this._widthAdd=b-this._width;this._heightAdd=b-this._height;this._widthAddHalf=this._widthAdd/2;this._heightAddHalf=this._heightAdd/2;this._img.parentNode.removeChild(this._img);this._aspectW=(parseInt(this._img.style.width,10)||this._width)/this._img.width;this._aspectH=(parseInt(this._img.style.height,10)||this._height)/this._img.height;this._canvas=document.createElement("canvas");this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";
this._canvas.style.left=-this._widthAddHalf+"px";this._canvas.style.top=-this._heightAddHalf+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas);this._rootObj.style.width=this._width+"px";this._rootObj.style.height=this._height+"px";this._eventObj=this._canvas;this._cnv=this._canvas.getContext("2d");this._handleRotation(a)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},
_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif)clearTimeout(this._timer);else{(this._canvas||this._vimage||this._img)&&this._rotate(~~(10*this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration))/10);this._parameters.step&&this._parameters.step(this._angle);var c=this;this._timer=setTimeout(function(){c._animate.call(c)},10)}this._parameters.callback&&
b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/180;return i?function(a){this._angle=a;this._container.style.rotation=a%360+"deg"}:d?function(a){this._angle=a;this._img.style[d]="rotate("+a%360+"deg)"}:function(b){this._angle=b;b=b%360*a;this._canvas.width=this._width+this._widthAdd;this._canvas.height=this._height+this._heightAdd;this._cnv.translate(this._widthAddHalf,this._heightAddHalf);this._cnv.translate(this._widthHalf,
this._heightHalf);this._cnv.rotate(b);this._cnv.translate(-this._widthHalf,-this._heightHalf);this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};i&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+
a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())})(jQuery);

window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

var url_site = 'http://www.bargecm.co.uk/';
var url_base = 'http://www.bargecm.co.uk/';

$(document).ready(function(){

	if(!Modernizr.input.placeholder){

		$('[placeholder]').focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		  }
		}).blur(function() {
		  var input = $(this);
		  if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		  }
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  $(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			  input.val('');
			}
		  })
		});

	}
});


/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);


/* PopBox */
(function(){$.fn.popbox=function(a){var b=$.extend({selector:this.selector,open:".open",box:".box",arrow:".arrow",arrow_border:".arrow-border",close:".close"},a),c={open:function(a){a.preventDefault();var d=$(this),e=$(this).parent().find(b.box);e.find(b.arrow).css({left:e.width()/2-10}),e.find(b.arrow_border).css({left:e.width()/2-10}),e.css("display")=="block"?c.close():e.css({display:"block",top:10,left:d.parent().width()/2-e.width()/2})},close:function(){$(b.box).fadeOut("fast")}};return $(document).bind("keyup",function(a){a.keyCode==27&&c.close()}),$(document).bind("click",function(a){$(a.target).closest(b.selector).length||c.close()}),this.each(function(){$(this).css({width:$(b.box).width()}),$(b.open,this).bind("click",c.open),$(b.open,this).parent().find(b.close).bind("click",function(a){a.preventDefault(),c.close()})})}}).call(this);



/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery)


/* Author: 

*/

var old = false;
var lastScroll = 0;
var resize_first = true;
var docHeight = 0;
var wh = 0;
var scrollanim = false;
var scrollToAnim = false;
var navArrowAnim = false;


var iOS = false;

function setNavArrow(hover, animate) {
	/*
	if(navArrowAnim) return;
	var $s = $('#main-navigation #nav-container .nav-arrow-js');
	if(hover) {
		var $a = $('#main-navigation a.hover').first();
	} else {
		var $a = $('#main-navigation a.selected').first();
	}
	
	var selpos = $a.position();
	var parpos = $a.parent().parent().position();
	var awidth = $a.parent().innerWidth();
	var swidth = $s.width();
	var offset = (selpos.left + parpos.left) + Math.ceil((awidth - swidth) / 2);
	if(animate) {
		$s.stop();
		$s.animate({"bottom":$s.css("bottom"),"left":offset+"px"}, 250);
	} else {
		$s.css({"bottom":$s.css("bottom"), "left":offset+"px"});
	}
	*/
}

function showhideNavArrow(callback, midpoint) {
	var $$ = $('#main-navigation #nav-container .nav-arrow-js');
	if($$.hasClass('hide-nav')) {
		$$.removeClass('hide-nav');
		$$.animate({"bottom":"-3px"}, 500, function(){
			if(midpoint != undefined) midpoint();
			$$.css({"z-index":"3"});
			$$.find('.nav-arrow-js-down').animate({"height":"26px"}, 500);
			$$.find('.nav-arrow-js-up').animate({"width":"70px","height":"24px","left":"0px"}, 500, callback);
		});
	} else {
		$$.addClass('hide-nav');
		$$.find('.nav-arrow-js-down').animate({"height":"55px"}, 500);
		$$.find('.nav-arrow-js-up').animate({"width":"0px","height":"0px","left":"39px"}, 500, function(){
			$$.css({"z-index":"1"});
			if(midpoint != undefined) midpoint();
			$$.animate({"bottom":"27px"}, 500, callback);
		});
	}
}


$(document).ready(function() {

	$('.popbox').popbox();

	// animate online/interactive drop
	$('#header .sectors').css({"bottom":"120px","cursor":"default"});
	setTimeout(function() {
		$('#header .sectors').animate({"bottom":"-23px"}, 1000, "easeOutBounce");
	}, 200);
	
	$('#header .sectors').click(function(e){
		e.preventDefault();
	});
	
	//header
	$('#main-navigation a span').remove();
	$('#main-navigation #nav-container').append('<div class="nav-arrow-js"><div class="nav-arrow-js-down"><div class="nav-arrow-js-up"></div></div></div>');
	$('#main-navigation').not('.open').css({"top":"34px"});
	setNavArrow();
	$('#main-navigation:not(.open) .nav-arrow').css({"bottom":"0px"});
	$('#main-navigation #nav-container .nav-arrow-js').css({"pointer-events":"none"});
	//footer
	$('#footer').not('.open').css({"height":"0px"});
	
	//$('.nav-arrow-js').
	
	var autoHideMenu = setTimeout(function(){
		$('header a#nav-tab').click();
	}, 4000);
	
	var autoHideFooter = setTimeout(function(){
		$('footer a.footer-tab').click();
	}, 4000);
	
	$('#main-navigation ul').mouseenter(function(){
		clearTimeout(autoHideMenu);
	}).mouseleave(function() {
		setNavArrow(false, true);
	});
	
	$('#footer').mouseenter(function(){
		clearTimeout(autoHideFooter);
	});
	
	$('#main-navigation li a.nav-item').mouseenter(function(){
		$(this).addClass('hover');
		setNavArrow(true, true);
	}).mouseleave(function() {
		$(this).removeClass('hover');
	});
	$('#main-navigation li a.nav-item').click(function(event){
		event.preventDefault();
		
		$('#main-navigation li a.nav-item').removeClass('selected');
		if(!$(this).hasClass('selected')) {
			var page = $($(this).attr('href')+"-page");
			scrollToAnim = true;
			scrollTo(page, function() {
				scrollToAnim = false;
			});
		}
		$(this).addClass('selected');
		setNavArrow(false, true);
	});
	
	$('header a#nav-tab').click(function(event){
		event.preventDefault();
		clearTimeout(autoHideMenu);
		var speed = 500;
		if($('#main-navigation').hasClass('open')) {
			$('#main-navigation').removeClass('open');
			navArrowAnim = true;
			showhideNavArrow(function(){
				navArrowAnim = false;
			}, function(){
				$('#main-navigation').animate({"top":"34px"}, speed);
			});
		} else {
			$('#main-navigation').addClass('open');
			navArrowAnim = true;
			showhideNavArrow(function(){
				navArrowAnim = false;
			});
			$('#main-navigation').animate({"top":"105px"}, speed);
		}
	});
	
	$('footer a.footer-tab').click(function(event){
		event.preventDefault();
		clearTimeout(autoHideFooter);
		var speed = 500;
		if($('#footer').hasClass('open')) {
			$('#footer').removeClass('open');
			$('#footer').animate({"height":"0px"}, speed);
		} else {
			$('#footer').addClass('open');
			$('#footer').animate({"height":"70px"}, speed);
		}
	});

	/**
	 *
	 * Parallax
	 * 
	 */

		old = ($('html').hasClass('ie7') || $('html').hasClass('ie6'));

		$('.nav-holder .container a').click(function(){
			var target = $(this).attr('href');
			scrollTo(target);
			
			return false;
		});

		
	
		$(window).resize($.throttle(20,scrollHandler));
	


		$('.parallax-page').each(function(){
			var section = $(this);
			section.data('h',section.height());
		});

		if(old){
			//IE 6 and 7 tweaks
			
		} else {

			if(iOS){
				$('body,html').css('height','100%');
				$('body,html').css('overflow','hidden');
				$("#container").mCustomScrollbar({
					//mouseWheelPixels: 200,
					mouseWheel:'auto',
					scrollInertia:550, 
					//horizontalScroll:true, 
					scrollButtons:{
						enable:true
					},
					advanced:{
						//updateOnBrowserResize:true, 
						//updateOnContentResize:true, 
						autoExpandHorizontalScroll:true, 
						autoScrollOnFocus:true 
						},
					callbacks: {
						
						whileScrolling:function(){
							
							updateScroll()
						},
						whileScrollingInterval:20

					}

				});
			} else {
				$(window).scroll($.throttle(20,updateScroll));
				$('html, body').bind("mousewheel", function(objEvent, intDelta){
					updateScroll('wheel',intDelta);
					return false;
				});
			}

		}

		/* Form posting for Contact Page */
		$('#contact-page form').submit(function(){
			$('ajaxLoader').show();
			var f = $(this);
			$.post($(this).attr('action'), $(this).serialize())
			.done(function(data) { alert(data); $('.close',f).click(); f.get(0).reset();})
			.fail(function(data) { alert(data.responseText); })
			.always(function() { $('.ajaxLoader').fadeOut(); });

			return false;
		});

		/* Place holder text for the Contact Page */
		$('.placeholder').each(function(){
			var p = $('label', this);
			$('input,textarea', this).focus(function(){
				if($(this).val() == '') {
					p.hide();
				}
			});
			$('input,textarea', this).blur(function(){
				if($(this).val() == '') {
					p.fadeIn('fast');
				}
			});
		});

	// trigger resize to set initial properties
	$(window).trigger('resize');

});

function scrollTo(target, callback){
	if (target) {
		if(iOS){
			$('#site').mCustomScrollbar("scrollTo",target,{moveDragger:true});
		} else {
			var pos = $(target).offset().top-105;// - (($(window).height()/2)-($(target).height()/2));
			//$('html,body').stop();
			$('html,body').animate({'scrollTop': pos},{duration:800,easing: 'easeOutQuad',complete:callback});
		}
	} else {
		if(iOS){
			$('#site').mCustomScrollbar("scrollTo","top",{moveDragger:true});
		} else {
			//$('html,body').stop();
			$('html,body').animate({'scrollTop': 0},{duration:800,easing: 'easeOutQuad',complete:callback});
		}
		
	}
}


function scrollHandler(){
	var s = $(window).scrollTop();
	wh = $(window).height()-105;
	
	var b = $('body').height();
	$('.parallax-page').each(function(){
		var section = $(this);
		var h = section.data('h');
		if(h < wh) {
			var diff = (wh-h)/2;
			section.css({'padding-top': diff,'padding-bottom': diff});
			
		} else {
			section.css({'padding-top': 0,'padding-bottom': 0});
		}
	});
	if(!old) {

		updateScroll('start');
		if(resize_first){
			resize_first = false;
			setTimeout(function(){
				var hash = window.location.hash;
				if(hash == '#enable') scrollTo('#enable');
			},200)
		}
	}
	docHeight = $(document).height();
	//console.log($('body').height()-b,s);
	//var d = s-(b-$('body').height());
	//$('html,body').scrollTop(d);//.animate({'scrollTop': current.offset().top},200);

}


function updateScroll(e,delta){

	//console.log(scrollanim);
	var tween = (e == 'wheel');
	var s = $(window).scrollTop();
	var passing = false;

	if(tween) {
		var multiplyer = (delta*(0-100));
		lastScroll = (scrollanim) ? lastScroll+multiplyer : s+multiplyer;
	} else if(!scrollanim) {
		lastScroll = s;
	}

	$('.parallax-page').each(function(){
		var section = $(this);
		var h = section.height();
		
		var offset = section.sectionOffset(true,wh,s);
		if(!scrollToAnim && (offset[0] < 0.55 && offset[0] > -0.35)) {
			if(!$('.'+$(this).attr('id')).hasClass('selected')) {
				$('#main-navigation li a').not('.social').removeClass('selected');
				$('.'+$(this).attr('id')).addClass('selected');
				setNavArrow(false, true);
			}
		}
		
		if(offset[0] < 1.3 && offset[0] > -1.3) {
			section.trigger('updated',[offset[0], offset[1]]);
		}

		if(lastScroll < 0 ) {
			lastScroll = 0;
		} else if(lastScroll > docHeight - wh) {
			lastScroll = docHeight - wh;
		} else if(tween) {
			
			//if(passing) lastScroll = passing;
			$('html,body').stop().animate({'scrollTop': lastScroll},{duration: 500, easing: 'easeOutQuad', complete: function(){
				scrollanim = false;
			}});
			scrollanim = true;
			
		}
	});
}

jQuery.fn.itemOffset = function(percent,wh,st){
	if(!wh) wh = $(window).height();
	if(!st) st = $(window).scrollTop();
	var parent = $(this).parents('.-parallax-page');

	var centerPoint = $(this).offset().top-(wh/2)+($(this).outerHeight()/2)
	var centerOffset = centerPoint-st
	//var from_top = $(this).offset().top-(parent.height()/2)
	if(percent) return centerOffset/(wh/2);
	else return centerOffset;
}

jQuery.fn.sectionOffset = function(percent,wh,st){
	if(!wh) wh = $(window).height();
	if(!st) st = $(window).scrollTop();
	var centerPoint = $(this).offset().top + (($(this).outerHeight() - 105)/2);
	var centerOffset = centerPoint - (wh/2)-st;

	return [centerOffset/wh, centerOffset];
	
}

jQuery.fn.animateOffset = function(percent,startleft,endleft,starttop,endtop) {
	//console.log(percent)
	if(percent > 0){
		var diffleft = endleft - startleft;
		var difftop = endtop - starttop;
		percent = 0-percent;
		var percentLeft = (startleft-(diffleft*percent));
		var percentTop = (starttop-(difftop*percent));
		$(this).css({
			'left' : percentLeft,
			'top' : percentTop
		});	
	} else {
		$(this).css({
			'left' : startleft,
			'top' : starttop
		});			
	}
}
















jQuery.fn.inlineGallery = function(width,next,prev,tag,pager){
	if(!tag) tag = 'img';

	$(this).css('overflow','hidden');

	var container = $('div:first',this);
	container.data('position',0);
	
	container.css({	'position' 	: 'absolute',
					'left'		: '0px',
					'z-index'	: '0'
					});

	container.data('total',$(tag,this).length);
	container.data('resetting',false);

	var count = 0;
	$(tag,this).each(function(){
		$(this).css({
						'display' : 'inline',
						'position':'absolute',
						'left' : (count*width)+'px'
		});
		if($(this).hasClass('selected')) {
			container.data('position',count);
			container.css('left','-'+(count*width)+'px')
		}
		count++;
	});
	//console.log('run')

	$(next).click(function(){
		var position = container.data('position');
		position++;
		if(position >= container.data('total')) position = 0;
		container.data('position',position);
		
		var target = $(tag+':eq('+position+')',container);
		if($('input',target).length > 0 && $('img',target).attr('src') == ''){
			var src = $('input',target).val();
			$('img',target).hide().attr('src',src).load(function(){
				$(this).fadeIn();
			});
		}
		container.stop(true);
		container.animate({'left':'-'+position*width});

		//console.log(position,container.data('total'),width)
		
		$(pager).each(function(){ $(this).removeClass('selected') });
		$(pager+':eq('+position+')').addClass('selected');
		return false;
	});
	$(prev).click(function(){
		
		var position = container.data('position');
		if(container.data('resetting') == true) return false;
		position--;
		if(position < 0) position = container.data('total')-1;
		container.data('position',position);

		var target = $(tag+':eq('+position+')',container);
		if($('input',target).length > 0 && $('img',target).attr('src') == ''){
			var src = $('input',target).val();
			$('img',target).hide().attr('src',src).load(function(){
				$(this).fadeIn();
			});
		}

		container.stop(true);

		container.animate({'left':'-'+position*width});
		$(pager).each(function(){ $(this).removeClass('selected') });
		$(pager+':eq('+position+')').addClass('selected');
		return false;
	});
	$(pager).click(function(){
		$(pager).each(function(){ $(this).removeClass('selected') });
		$(this).addClass('selected');

		var position = container.data('position');
		if(container.data('resetting') == true) return false;
		position = 	$(this).html()-1;
		if(position >= container.data('total')) position = 0;
		container.data('position',position);
		
		var target = $(tag+':eq('+position+')',container);
		if($('input',target).length > 0 && $('img',target).attr('src') == ''){
			var src = $('input',target).val();
			$('img',target).hide().attr('src',src).load(function(){
				$(this).fadeIn();
			});
		}
		container.stop(true);
		container.animate({'left':'-'+position*width});

		return false;
	});
}







$(document).ready(function(){

	$('#home-page').on('updated',function(e,offsetPercent,offset){
		//console.log(offsetPercent,offset)
	});
	
	$('#home-page .video-container').css({"top":"-616px"});
	$('#home-page .blur').css({"height":"0px"});
	//video
	$('#home-page-video-container').fadeTo(0,0);
//	$('#home-page-video-container').hide();


	setTimeout(function() {
		$('#home-page .video-container').animate({
			"top":"4px"
		}, {
			duration:1000,
			easing: "linear",
			step: function(now){
				var blur = $('#home-page .blur');
				var opened = blur.hasClass('opened');
				if(now > -493 && !opened) {
					blur.addClass('opened');
					blur.animate({"height":"497px"}, 800, "linear");
				}
			},
			complete: function(){
				$("#home-page-video").mediaelementplayer({
					'width' : 896, 
					'height' : 504,
					'features' : false,
					'alwaysShowControls' : true,
					'autoRewind' : true,
					'plugins': ['flash','silverlight'],
					'success' : function(mp){
						//mp.load();
						function loadloop(){
							$('#home-page .loader .progress').animate({'left': '200'},{
								duration:1500,
								complete: function(){
									$(this).animate({'left': '0'},{
										duration:1500,
										complete: function(){
											loadloop();
										},
										step: function(){
											$(this).css('background-position', (0-($(this).position().left))+'px bottom');
										}
									});
								},
								step: function(){
									$(this).css('background-position', (0-($(this).position().left))+'px bottom');
								}
							});
						}
						loadloop();

						mp.addEventListener('canplay',function(event){
							$('#home-page .loader .progress').stop(true).css({
								'left': '0%',
								'background-position': '0px bottom',
								'width': '100%'
							});
							if($('html').hasClass('csstransforms')) {
								$('#flippyBox').css({"transition":".5s ease-out","transform":"rotateX(-90deg)"});
								setTimeout(function(){
									//console.log('flipped')
									$('#flippyBox').html($('#flippyFrame2').html());
									$('#flippyBox').css({"transition":".5s ease-out","transform":"rotateX(0deg)"});
								}, 500);
							} else {
								$('#flippyBox').fadeTo(500, 0, function() {
									$('#flippyBox').html($('#flippyFrame2').html());
									$('#flippyBox').fadeTo(500, 1);
								});
							}
							$('#home-page-video-container').show();	
						});
						mp.addEventListener('play',function(event){
							$('#home-page-video-container').stop().fadeTo(400,1);
						});
						mp.addEventListener('ended',function(event){

							$('#home-page-video-container').stop().fadeTo(1000,0);
							$('#flippyBox h1').html("Play&nbsp;Our&nbsp;Video<br/><span>Again</span>");
						});

						

						$('#home-page-video-container').hide();
					}

				});
			}
		});
	}, 1000);

});

$(document).ready(function(){
	$('#contact-page').on('updated',function(e,offsetPercent,offset){
		$('#contact-page .paper').animateOffset(offsetPercent-0.3,185,-1000,200,200);
		$('#contact-page .magnify').animateOffset(offsetPercent,-115,-500,810,1100);
	});
	$('#contact-form .bg').fadeTo(0,0.3);


	

	function loadMap() {
	  var script = document.createElement("script");
	  script.type = "text/javascript";
	  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCaZ_OEI-GQPlmzf7N-dki0S6mh44toxGQ&sensor=true&callback=initialize";
	  document.body.appendChild(script);
	}

	loadMap();
});

function initialize() {
	var myLatlng = new google.maps.LatLng(53.794701,-1.538408);
  	var mapOptions = {
    	zoom: 15,
    	center: myLatlng,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
  	}
	var marker = new google.maps.Marker({
	    position: myLatlng,
	    title: "Barge Creative Media",
	    icon: 'public/img/contact/marker.png',
	});

  var map = new google.maps.Map(document.getElementById("google-map-map"), mapOptions);
  marker.setMap(map);
}

