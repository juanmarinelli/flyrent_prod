import{_ as _e}from"./NavBar.43514a76.js";import{a as ye,b as be,c as xe,d as we,e as ke,f as Ce,_ as Se}from"./icono-cocheras.5892b969.js";import{_ as ne}from"./nuxt-link.aed0c2c0.js";import{f as I,q as le,o as b,c as P,a as n,b as _,w as O,h as C,t as f,d as F,y as E,z as N,A as H,m as Oe,v as $e,F as U,B as ae,k as m,C as L,D as T,g as G,j as B,E as Z,p as R,e as z,G as S,H as j,I as q,J as de,K as ce,r as Te,x as te,i as Ie,_ as Pe}from"./entry.298a1788.js";import{_ as qe}from"./Footer.1ff1936d.js";import"./logo.51b6c6c9.js";const Ee={class:"w-full mt-20 mb-4 border border-[#DC9040] rounded-3xl"},je={class:"md:flex md:p-2 p-3 bg-white rounded-3xl"},Le={class:"mb-1 2xl:mb-0 md:w-3/12 w-full 2xl:pr-6"},Me=["src"],Ne={class:"md:w-7/12 mt-2 ml-2"},Be={class:"mb-4 2xl:mb-8 max-w-xl"},Re={class:"2xl:pr-3 mb-1 2xl:mb-0 2xl:w-8/12"},ze={class:"mb-1 text-base leading-8 font-heading font-bold"},Ae={class:"text-xs text-darkBlueGray-400 hover:underline"},Ve={class:"flex items-center md:justify-start md:w-4/12 text-xs text-gray-800 mb-1"},De=n("img",{class:"w-4",src:ye,alt:""},null,-1),Fe={class:"text-gray-800 ml-2"},Ue={class:"flex items-center md:justify-start md:w-4/12 text-xs text-gray-800 mb-1"},Ke=n("img",{class:"w-4",src:be,alt:""},null,-1),He={class:"text-gray-800 ml-2"},Ge={class:"flex items-center md:justify-start md:w-4/12 text-xs text-gray-800 mb-1"},Ze=n("img",{class:"w-4",src:xe,alt:""},null,-1),Je={class:"text-gray-800 ml-2"},We={class:"flex items-center md:justify-start md:w-4/12 text-xs text-gray-800 mb-1"},Xe=n("img",{class:"w-4",src:we,alt:""},null,-1),Ye={class:"text-gray-800 ml-2"},Qe={class:"flex items-center md:justify-start md:w-4/12 text-xs text-gray-800"},et=n("img",{class:"w-4",src:ke,alt:""},null,-1),tt={class:"text-gray-800 ml-2"},ot={class:"max-w-md"},it=["innerHTML"],st={class:"md:w-2/12 mt-2 text-center items-center justify-center mx-auto md:border-l md:border-t-0 border-t border-[#DC9040]"},rt=n("p",{class:"font-bold md:text-xs text-base mt-4"},"Valor por noche",-1),nt={class:"font-bold md:text-md text-lg md:mb-28 mb-4"},lt=["href"],at=n("p",{class:"mt-4 font-semibold text-xs hover:underline"},"Ver propiedad",-1),dt=I({__name:"Propiedad",props:{item:{}},setup(i){const e=i,{imageUrl:t}=le().public;return(o,s)=>{const a=ne;return b(),P("div",Ee,[n("div",je,[n("div",Le,[_(a,{to:"/huesped/propiedades/"+e.item.slag},{default:O(()=>[n("img",{class:"md:w-56 md:mt-4 drop-shadow-2xl rounded-3xl",src:C(t)+"/"+o.item.id_propiedad+"/"+o.item.img_prin,alt:""},null,8,Me)]),_:1},8,["to"])]),n("div",Ne,[n("div",Be,[n("div",Re,[_(a,{to:"/huesped/propiedades/"+e.item.slag},{default:O(()=>[n("p",ze,f(e.item.titulo),1)]),_:1},8,["to"]),n("p",Ae,f(e.item.calle)+" N°"+f(e.item.altura)+" "+f(e.item.entre)+" "+f(e.item.calle1)+" y "+f(e.item.calle2)+", "+f(e.item.barrio),1)]),n("p",Ve,[De,n("span",Fe,f(e.item.sup_construida)+" m2.",1)]),n("p",Ue,[Ke,n("span",He,f(e.item.ambientes)+" ambientes",1)]),n("p",Ge,[Ze,n("span",Je,f(e.item.banios)+" baños",1)]),n("p",We,[Xe,n("span",Ye,f(e.item.dormitorios)+" dormitorios",1)]),n("p",Qe,[et,n("span",tt,[F("Cochera "),n("b",null,f(e.item.cochera),1)])])]),n("div",ot,[n("div",{class:"text-xs text-gray-800 font-base",innerHTML:e.item.descripcion},null,8,it)])]),n("div",st,[rt,n("p",nt,"$"+f(e.item.precio),1),n("a",{href:"https://api.whatsapp.com/send?phone=5492213998263&text=Hola, quiero consultar por la propiedad "+e.item.titulo,target:"blank",class:"px-2 py-2 font-bold text-sm text-white uppercase rounded-lg bg-[#DC9040] mb-1"},"RESERVAR",8,lt),_(a,{to:"/huesped/propiedades/"+e.item.slag},{default:O(()=>[at]),_:1},8,["to"])])])])}}});let A=Symbol("map"),V=Symbol("api"),ue=Symbol("marker"),ct=Symbol("markerCluster"),M=Symbol("CustomMarker"),pe=Symbol("mapTilesLoaded"),me="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");var ut=function i(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o;if(Array.isArray(e)){var s=e.length;if(s!=t.length)return!1;for(o=s;o--!==0;)if(!i(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var a=Object.keys(e);if(s=a.length,s!==Object.keys(t).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[o]))return!1;for(o=s;o--!==0;)if(s=a[o],!i(e[s],t[s]))return!1;return!0}return e!==e&&t!==t};class ${constructor({apiKey:e,channel:t,client:o,id:s="__googleMapsScriptId",libraries:a=[],language:u,region:p,version:v,mapIds:h,nonce:r,retries:l=3,url:c="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.loading=this.done=!1,this.errors=[],this.version=v,this.apiKey=e,this.channel=t,this.client=o,this.id=s||"__googleMapsScriptId",this.libraries=a,this.language=u,this.region=p,this.mapIds=h,this.nonce=r,this.retries=l,this.url=c,$.instance){if(!ut(this.options,$.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify($.instance.options)}`);return $.instance}$.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),e}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(o=>{o?t(o.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}}reset(){this.deleteScript(),this.loading=this.done=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){this.errors.push(e),this.errors.length<=this.retries?(e=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)):(this.onerrorEvent=e,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){this.resetIfRetryingFailed(),this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}function pt(i){return class extends i.OverlayView{constructor(e){super();let{element:t,...o}=e;this.element=t,this.opts=o,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof i.LatLng?this.opts.position:new i.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;let e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||.01<Number(e.style.opacity))}onAdd(){if(this.element){var e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}}draw(){if(this.element){var e=this.getProjection().fromLatLngToDivPixel(this.getPosition());if(e){this.element.style.position="absolute";let o=this.element.offsetHeight;var t=this.element.offsetWidth;switch(this.opts.anchorPoint){case"TOP_CENTER":t=e.x-t/2,e=e.y;break;case"BOTTOM_CENTER":t=e.x-t/2,e=e.y-o;break;case"LEFT_CENTER":t=e.x,e=e.y-o/2;break;case"RIGHT_CENTER":t=e.x-t,e=e.y-o/2;break;case"TOP_LEFT":t=e.x,e=e.y;break;case"TOP_RIGHT":t=e.x-t,e=e.y;break;case"BOTTOM_LEFT":t=e.x,e=e.y-o;break;case"BOTTOM_RIGHT":t=e.x-t,e=e.y-o;break;default:t=e.x-t/2,e=e.y-o/2}this.element.style.left=t+"px",this.element.style.top=e+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}}onRemove(){this.element&&this.element.remove()}setOptions(e){this.opts=e,this.draw()}}}let oe,ie="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var J=I({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:ie,setup(i,{emit:e}){let t=m(),o=m(!1),s=m(),a=m(),u=m(!1);L(A,s),L(V,a),L(pe,u);let p=()=>{const r={...i};Object.keys(r).forEach(c=>{r[c]===void 0&&delete r[c]});var l=c=>{var d;return c?{position:(d=a.value)===null||d===void 0?void 0:d.ControlPosition[c]}:{}};return l={scaleControlOptions:i.scaleControlStyle?{style:i.scaleControlStyle}:{},panControlOptions:l(i.panControlPosition),zoomControlOptions:l(i.zoomControlPosition),rotateControlOptions:l(i.rotateControlPosition),streetViewControlOptions:l(i.streetViewControlPosition),fullscreenControlOptions:l(i.fullscreenControlPosition),disableDefaultUI:i.disableDefaultUi},{...r,...l}},v=T([a,s],([r,l])=>{r&&l&&(r.event.addListenerOnce(l,"tilesloaded",()=>{u.value=!0}),setTimeout(v,0))},{immediate:!0}),h=r=>{a.value=q(r.maps),s.value=q(new r.maps.Map(t.value,p())),r=pt(a.value),a.value[M]=r,ie.forEach(l=>{var c;(c=s.value)===null||c===void 0||c.addListener(l,d=>e(l,d))}),o.value=!0,r=Object.keys(i).filter(l=>!"apiPromise apiKey version libraries region language center zoom".split(" ").includes(l)).map(l=>de(i,l)),T([()=>i.center,()=>i.zoom,...r],([l,c],[d,g])=>{var y,x,w;const{center:Q,zoom:ee,...k}=p();(y=s.value)===null||y===void 0||y.setOptions(k),c!==void 0&&c!==g&&((x=s.value)===null||x===void 0||x.setZoom(c)),c=!d||l.lng!==d.lng||l.lat!==d.lat,l&&c&&((w=s.value)===null||w===void 0||w.panTo(l))})};return G(()=>{if(i.apiPromise&&i.apiPromise instanceof Promise)i.apiPromise.then(h);else{try{const{apiKey:r,region:l,version:c,language:d,libraries:g}=i;oe=new $({apiKey:r,region:l,version:c,language:d,libraries:g})}catch(r){console.error(r)}oe.load().then(h)}}),B(()=>{var r;u.value=!1,s.value&&((r=a.value)===null||r===void 0||r.event.clearInstanceListeners(s.value))}),{mapRef:t,ready:o,map:s,api:a,mapTilesLoaded:u}}});function W(i,e){if(e===void 0&&(e={}),e=e.insertAt,i&&typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",e==="top"&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=i:o.appendChild(document.createTextNode(i))}}W(`
.mapdiv[data-v-177d06e3] {
  width: 100%;
  height: 100%;
}
`);let mt=Z();R("data-v-177d06e3");let ht={ref:"mapRef",class:"mapdiv"};z();let vt=mt(i=>(b(),E("div",null,[_("div",ht,null,512),N(i.$slots,"default",{ready:i.ready,map:i.map,api:i.api,mapTilesLoaded:i.mapTilesLoaded},void 0,!0)])));J.render=vt;J.__scopeId="data-v-177d06e3";var he=function i(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var o;if(Array.isArray(e)){var s=e.length;if(s!=t.length)return!1;for(o=s;o--!==0;)if(!i(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var a=Object.keys(e);if(s=a.length,s!==Object.keys(t).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[o]))return!1;for(o=s;o--!==0;)if(s=a[o],!i(e[s],t[s]))return!1;return!0}return e!==e&&t!==t};let ve=(i,e,t,o)=>{const s=m(),a=S(A,m()),u=S(V,m()),p=S(ct,m()),v=j(()=>!!(p.value&&u.value&&(s.value instanceof u.value.Marker||s.value instanceof u.value[M])));return T([a,t],(h,[r,l])=>{var c,d,g;h=!he(t.value,l)||a.value!==r,a.value&&u.value&&h&&(s.value?(s.value.setOptions(t.value),v.value&&((c=p.value)===null||c===void 0||c.removeMarker(s.value),(d=p.value)===null||d===void 0||d.addMarker(s.value))):(s.value=i==="Marker"?q(new u.value[i](t.value)):i===M?q(new u.value[i](t.value)):q(new u.value[i]({...t.value,map:a.value})),v.value?(g=p.value)===null||g===void 0||g.addMarker(s.value):s.value.setMap(a.value),e.forEach(y=>{var x;(x=s.value)===null||x===void 0||x.addListener(y,w=>o(y,w))})))},{immediate:!0}),B(()=>{var h,r;s.value&&((h=u.value)===null||h===void 0||h.event.clearInstanceListeners(s.value),v.value?(r=p.value)===null||r===void 0||r.removeMarker(s.value):s.value.setMap(null))}),s},se="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");var gt=I({name:"Marker",props:{options:{type:Object,required:!0}},emits:se,setup(i,{emit:e,expose:t,slots:o}){return i=de(i,"options"),e=ve("Marker",se,i,e),L(ue,e),t({marker:e}),()=>{var s;return(s=o.default)===null||s===void 0?void 0:s.call(o)}}});me.concat(["bounds_changed"]);me.concat(["center_changed","radius_changed"]);var ft=I({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(i,{emit:e}){let t=m(null),o=S(A,m()),s=S(V,m()),a=S(pe,m(!1)),u=m(!1),p=T([a,s,t],([r,l,c])=>{l&&r&&c&&(v(i.position),u.value=!0,e("content:loaded"),setTimeout(p,0))},{immediate:!0}),v=r=>{o.value&&s.value&&t.value&&o.value.controls[s.value.ControlPosition[r]].push(t.value)},h=r=>{if(o.value&&s.value){let l=null;r=s.value.ControlPosition[r],o.value.controls[r].forEach((c,d)=>{c===t.value&&(l=d)}),l!==null&&o.value.controls[r].removeAt(l)}};return B(()=>h(i.position)),T(()=>i.position,(r,l)=>{h(l),v(r)}),T(()=>i.index,r=>{r&&t.value&&(t.value.index=i.index)}),{controlRef:t,showContent:u}}});let _t={ref:"controlRef"};ft.render=function(i){return b(),E(U,null,[H(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `),Oe(_("div",_t,[N(i.$slots,"default")],512),[[$e,i.showContent]])],2112)};let re="closeclick content_changed domready position_changed visible zindex_changed".split(" ");var X=I({inheritAttrs:!1,props:{options:{type:Object,default:()=>({})}},emits:re,setup(i,{slots:e,emit:t}){let o=m(),s=m(),a=S(A,m()),u=S(V,m()),p=S(ue,m()),v,h=j(()=>{var r;return(r=e.default)===null||r===void 0?void 0:r.call(e).some(l=>l.type!==ce)});return G(()=>{T([a,()=>i.options],([,r],[l,c])=>{l=!he(r,c)||a.value!==l,a.value&&u.value&&l&&(o.value?(o.value.setOptions({...r,content:h.value?s.value:r.content}),p.value||o.value.open({map:a.value})):(o.value=q(new u.value.InfoWindow({...r,content:h.value?s.value:r.content})),p.value?v=p.value.addListener("click",()=>{o.value&&o.value.open({map:a.value,anchor:p.value})}):o.value.open({map:a.value}),re.forEach(d=>{var g;(g=o.value)===null||g===void 0||g.addListener(d,y=>t(d,y))})))},{immediate:!0})}),B(()=>{var r;v&&v.remove(),o.value&&((r=u.value)===null||r===void 0||r.event.clearInstanceListeners(o.value),o.value.close())}),{infoWindow:o,infoWindowRef:s,hasSlotContent:h}}});W(`
.info-window-wrapper[data-v-5b373d6e] {
  display: none;
}
.mapdiv .info-window-wrapper[data-v-5b373d6e] {
  display: inline-block;
}
`);let yt=Z();R("data-v-5b373d6e");let bt={key:0,class:"info-window-wrapper"};z();let xt=yt(i=>i.hasSlotContent?(b(),E("div",bt,[_("div",ae({ref:"infoWindowRef"},i.$attrs),[N(i.$slots,"default",{},void 0,!0)],16)])):H("v-if",!0));X.render=xt;X.__scopeId="data-v-5b373d6e";var K,Y=K||(K={});Y.CLUSTERING_BEGIN="clusteringbegin";Y.CLUSTERING_END="clusteringend";Y.CLUSTER_CLICK="click";Object.values(K);var ge=I({inheritAttrs:!1,props:{options:{type:Object,required:!0}},setup(i,{slots:e,emit:t}){let o=m(),s=m(),a=j(()=>{var p;return(p=e.default)===null||p===void 0?void 0:p.call(e).some(v=>v.type!==ce)}),u=j(()=>({...i.options,element:o.value}));return G(()=>{s=ve(M,[],u,t)}),{customMarkerRef:o,customMarker:s,hasSlotContent:a}}});W(`
.custom-marker-wrapper[data-v-b9d5ec8a] {
  display: none;
}
.mapdiv .custom-marker-wrapper[data-v-b9d5ec8a] {
  display: inline-block;
}
`);let wt=Z();R("data-v-b9d5ec8a");let kt={key:0,class:"custom-marker-wrapper"};z();let Ct=wt(i=>i.hasSlotContent?(b(),E("div",kt,[_("div",ae({ref:"customMarkerRef",style:{cursor:i.$attrs.onClick?"pointer":void 0}},i.$attrs),[N(i.$slots,"default",{},void 0,!0)],16)])):H("v-if",!0));ge.render=Ct;ge.__scopeId="data-v-b9d5ec8a";const fe=i=>(R("data-v-ece4ba88"),i=i(),z(),i),St={class:"overflow-hidden"},Ot={class:"pb-24 2xl:pb-44 bg-white"},$t={class:""},Tt=fe(()=>n("div",{class:"pb-9 pt-9 text-center bg-[url('/bg-nuestrasprop.jpg')] bg-cover bg-no-repeat h-full"},[n("div",{class:"relative"},[n("h2",{class:"mb-5 md:mb-0 text-4xl 2xl:text-6xl leading-normal text-white font-extrabold font-heading font-medium text-center"},"NUESTRAS PROPIEDADES")])],-1)),It={class:"sm:flex sm:flex-wrap mb-10 2xl:mb-24 2xl:px-8"},Pt={class:"sm:pr-3 mb-10 sm:mb-0 sm:w-1/2 md:w-3/12"},qt={class:"sm:w-1/2 md:w-9/12 w-full px-2"},Et={class:"my-4 py-2"},jt={key:0},Lt=Ie('<div class="w-full h-24 border-2 rounded-md mx-auto mt-20" data-v-ece4ba88><div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5" data-v-ece4ba88><div class="w-12 bg-gray-300 h-12 rounded-full" data-v-ece4ba88></div><div class="flex flex-col space-y-3" data-v-ece4ba88><div class="w-36 bg-gray-300 h-6 rounded-md" data-v-ece4ba88></div><div class="w-24 bg-gray-300 h-6 rounded-md" data-v-ece4ba88></div></div></div></div>',1),Mt=[Lt],Nt={key:1,class:"md:px-1 px-4"},Bt={id:"mapa"},Rt={id:"contet"},zt=fe(()=>n("div",{id:"siteNotice"},null,-1)),At={id:"firstHeading",class:"font-bold text-lg"},Vt={id:"bodyContent"},Dt={class:"py-1"},Ft=["innerHTML"],Ut=I({__name:"index",setup(i){const{backendUrl:e,imageUrl:t}=le().public,o=Te({activeView:"propiedades"}),{pending:s,data:a}=Ce("propiedades",()=>$fetch(e+"/getPropiedades.php"),{transform:d=>JSON.parse(d)}),u=m({bedrooms:[],balcony:!1,parking:!1}),p=j(()=>{if(a.value!=null)return a.value.filter(d=>!(u.value.bedrooms.length>0&&!u.value.bedrooms.includes(parseInt(d.dormitorios))||u.value.balcony&&d.balcon!="Si"||u.value.parking&&d.cochera!="Si"))});function v(d){u.value=d}function h(d){const g=/[\r\n%#()<>?\[\\\]^`{|}]/g;return d=d.replace(/'/g,'"').replace(/>\s+</g,"><").replace(/\s{2,}/g," "),"data:image/svg+xml;utf-8,"+d.replace(g,encodeURIComponent)}const r=d=>`
<svg xmlns="http://www.w3.org/2000/svg" width="71" height="45" viewBox="0 0 71 45" fill="none">
  <rect width="71" height="37" rx="10" fill="#ffffff"/>
  <path d="M35 45L27 37H43L35 45Z" fill="#ffffff"/>
  <text x="50%" y="24"
        text-anchor="middle" fill="#000"
        font-size="14px" font-family="sans-serif" font-weight="bold">
       $${d}
  </text>
</svg>`,l=m({lat:-34.9205012,lng:-57.9943701});function c(d){var g=d.location.split(",");const y=r(d.precio),x=h(y);return console.log(g),{position:{lat:parseFloat(g[0]),lng:parseFloat(g[1])},label:{},title:d.titulo,icon:{url:x,scaledSize:{width:71,height:45}}}}return(d,g)=>{const y=_e,x=Se,w=ne,Q=dt,ee=qe;return b(),P("div",St,[_(y,{activeMenu:C(o).activeView},null,8,["activeMenu"]),n("section",null,[n("div",Ot,[n("div",$t,[Tt,n("div",It,[n("div",Pt,[_(x,{onFiltersUpdated:v})]),n("div",qt,[n("div",Et,[_(w,{to:{path:"/huesped/propiedades",hash:"#mapa"},class:"px-2 py-2 text-sm text-white rounded-lg bg-[#DC9040] float-right mr-4 cursor-pointer"},{default:O(()=>[F("Ver mapa")]),_:1})]),C(s)?(b(),P("div",jt,Mt)):(b(),P("div",Nt,[(b(!0),P(U,null,te(C(p),(k,D)=>(b(),E(Q,{key:D,item:k},null,8,["item"]))),128))]))])])])]),n("div",Bt,[_(C(J),{"api-key":"AIzaSyBtfizVroMnm-Z1yjkG88zvsLyUs7ITvPA",style:{width:"100%",height:"500px"},center:C(l),zoom:15},{default:O(()=>[(b(!0),P(U,null,te(C(p),(k,D)=>(b(),E(C(gt),{key:D,options:c(k)},{default:O(()=>[_(C(X),null,{default:O(()=>[n("div",Rt,[zt,n("h1",At,f(k.titulo),1),n("div",Vt,[n("p",Dt,"$"+f(k.precio),1),n("div",{class:"py-2",innerHTML:k.descripcion},null,8,Ft),_(w,{to:"/huesped/propiedades/"+k.slag,class:"inline-flex px-2 py-1 text-xs text-white rounded-lg bg-[#DC9040] float-left mr-4 cursor-pointer"},{default:O(()=>[F("Ver Propiedad")]),_:2},1032,["to"])])])]),_:2},1024)]),_:2},1032,["options"]))),128))]),_:1},8,["center"])])]),_(ee)])}}});const Xt=Pe(Ut,[["__scopeId","data-v-ece4ba88"]]);export{Xt as default};
