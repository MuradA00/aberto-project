System.register(["./common.js"],(function(t){"use strict";var e,s,i,n,o,a,r,c,h;return{setters:[function(t){e=t.E,s=t.i,i=t.S,n=t.C,o=t.B,a=t.a,r=t.b,c=t.c,h=t.d}],execute:function(){const l=".bs.focustrap",d=`focusin${l}`,u=`keydown.tab${l}`,f="backward",_={autofocus:!0,trapElement:null},g={autofocus:"boolean",trapElement:"element"};class m extends n{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return _}static get DefaultType(){return g}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),e.off(document,l),e.on(document,d,(t=>this._handleFocusin(t))),e.on(document,u,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,e.off(document,l))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const s=i.focusableChildren(e);0===s.length?e.focus():this._lastTabNavDirection===f?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?f:"forward")}}const p=".bs.offcanvas",b=".data-api",v=`load${p}${b}`,w="show",k="showing",E="hiding",A=".offcanvas.show",y=`show${p}`,$=`shown${p}`,C=`hide${p}`,N=`hidePrevented${p}`,T=`hidden${p}`,D=`resize${p}`,S=`click${p}${b}`,I=`keydown.dismiss${p}`,L={backdrop:!0,keyboard:!0,scroll:!1},F={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class O extends o{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return L}static get DefaultType(){return F}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;if(e.trigger(this._element,y,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new a).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(k);this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(w),this._element.classList.remove(k),e.trigger(this._element,$,{relatedTarget:t})}),this._element,!0)}hide(){if(!this._isShown)return;if(e.trigger(this._element,C).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(E),this._backdrop.hide();this._queueCallback((()=>{this._element.classList.remove(w,E),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new a).reset(),e.trigger(this._element,T)}),this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new r({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():e.trigger(this._element,N)}:null})}_initializeFocusTrap(){return new m({trapElement:this._element})}_addEventListeners(){e.on(this._element,I,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():e.trigger(this._element,N))}))}static jQueryInterface(t){return this.each((function(){const e=O.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}t("default",O),e.on(document,S,'[data-bs-toggle="offcanvas"]',(function(t){const n=i.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),s(this))return;e.one(n,T,(()=>{c(this)&&this.focus()}));const o=i.findOne(A);o&&o!==n&&O.getInstance(o).hide();O.getOrCreateInstance(n).toggle(this)})),e.on(window,v,(()=>{for(const t of i.find(A))O.getOrCreateInstance(t).show()})),e.on(window,D,(()=>{for(const t of i.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&O.getOrCreateInstance(t).hide()})),((t,n="hide")=>{const o=`click.dismiss${t.EVENT_KEY}`,a=t.NAME;e.on(document,o,`[data-bs-dismiss="${a}"]`,(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),s(this))return;const o=i.getElementFromSelector(this)||this.closest(`.${a}`);t.getOrCreateInstance(o)[n]()}))})(O),h(O)}}}));