import{_ as T}from"./NavBar.a80c8e7d.js";import{u as V,_ as U,a as I,b as J,c as G,d as X,e as K}from"./icono-cocheras.72921bc2.js";import{_ as P}from"./nuxt-link.dcaa35ca.js";import{f as M,k as j,q as R,o as n,c as r,s as Q,x as q,a as e,b as f,w as S,d as F,t as o,r as W,y as Y,n as Z,h as t,F as $,z as L,A as ee,m as B,B as E,i as b,l as te,p as se,e as ae,_ as oe}from"./entry.555a4d09.js";import{_ as le}from"./Footer.df9dde90.js";import{S as A,P as ie,A as de,N as ne,E as re}from"./pagination.min.d3e8616a.js";import"./logo.2c5b288b.js";const ce=["aria-valuemax","aria-valuenow"],me=M({__name:"NuxtRating",props:{ratingCount:{default:5},ratingSize:{default:"32px"},activeColor:{default:"#ffc700"},inactiveColor:{default:"#ddd"},ratingValue:{default:3.7},ratingContent:{default:"★"},readOnly:{type:Boolean,default:!0}},emits:["ratingSelected","ratingHovered"],setup(v,{emit:d}){const l=v,u=j(l.ratingValue),_=j(0),x=R(()=>Array(l.ratingCount).fill(l.ratingContent).join("")),g=R(()=>({"--active-color":l.activeColor,"--cursor-type":l.readOnly?"default":"pointer","--inactive-color":l.inactiveColor,"--rating-value":_.value?_.value:u.value,"--rating-count":l.ratingCount,"--rating-content":`"${x.value}"`,"--rating-size":l.ratingSize})),s=c=>{l.readOnly||(d("ratingHovered",h(c)),_.value=h(c))},y=()=>{l.readOnly||(_.value=u.value)},k=c=>{l.readOnly||(d("ratingSelected",h(c)),u.value=h(c))};function h(c){const i=document.querySelector(".average-rating");if(!i)return 0;const p=window.getComputedStyle(i,"::before"),C=parseFloat(p.getPropertyValue("width").replace(/[^\d.-]/g,""));return Math.ceil(c.offsetX/C*l.ratingCount)}return(c,i)=>(n(),r("div",{role:"slider","aria-valuemin":0,"aria-valuemax":l.ratingCount,"aria-valuenow":u.value,style:Q(g.value),class:"average-rating",onMousemove:s,onMouseleave:y,onClick:k},null,44,ce))}});const ue=""+new URL("ejemplo-1.bcadd703.png",import.meta.url).href,pe={class:""},fe={class:"relative group"},ve=e("div",{class:"overflow-hidden aspect-w-1 aspect-h-1 rounded-3xl"},[e("img",{class:"object-cover w-full h-full transition-all duration-300 group-hover:scale-110 rounded-3xl",src:ue,alt:""})],-1),_e={class:"flex items-start justify-between mt-4 space-x-4"},xe={class:"text-xs font-bold text-gray-900 sm:text-sm md:text-base"},he=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),ge=e("div",{class:"flex items-center mt-2.5 space-x-px"},null,-1),we={class:"text-left"},be={class:"text-xs text-gray-800 sm:text-sm md:text-base"},ye=M({__name:"PropiedadCarousel",props:{item:{}},setup(v){return q().public,(d,l)=>{const u=P;return n(),r("div",pe,[e("div",fe,[ve,e("div",_e,[e("div",null,[e("h3",xe,[f(u,{to:"/huesped/propiedades/"+d.item.slag},{default:S(()=>[F(o(d.item.titulo)+" ",1),he]),_:1},8,["to"])]),ge])]),e("div",we,[e("p",be,o(d.item.calle)+" N°"+o(d.item.altura)+" "+o(d.item.entre)+" "+o(d.item.calle1)+" y "+o(d.item.calle2)+", "+o(d.item.barrio),1)])])])}}}),a=v=>(se("data-v-7655affd"),v=v(),ae(),v),ke={class:"overflow-hidden"},Ce={class:"py-32 2xl:pb-44 bg-white"},je={class:""},Se={class:"sm:flex sm:flex-wrap mb-10 2xl:mb-24"},Me={class:"sm:pr-3 mb-10 sm:mb-0 sm:w-1/2 md:w-3/12"},Ne={class:"sm:w-1/2 md:w-9/12 px-2"},Ve={key:0},Re=b('<div data-v-7655affd><div class="w-full h-24 border-2 rounded-md mx-auto mt-20" data-v-7655affd><div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5" data-v-7655affd><div class="w-12 bg-gray-300 h-12 rounded-full" data-v-7655affd></div><div class="flex flex-col space-y-3" data-v-7655affd><div class="w-36 bg-gray-300 h-6 rounded-md" data-v-7655affd></div><div class="w-24 bg-gray-300 h-6 rounded-md" data-v-7655affd></div></div></div></div></div>',1),$e=[Re],Le={key:1},Be={class:"flex py-3 md:px-6 px-2 items-center justify-between"},Ee={class:"w-auto"},Ae={class:"mr-6 items-center hover:text-gray-900 text-black lg:block ml-2 text-2xl font-bold"},Pe={class:"flex"},qe={href:"",class:"ml-2 items-center text-lg"},Fe=a(()=>e("a",{class:"inline-flex items-center hover:text-gray-900 text-black",href:"#"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[e("path",{"fill-rule":"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z","clip-rule":"evenodd"})]),e("span",{class:"hidden lg:block ml-2 text-sm"},"4.8")],-1)),ze=a(()=>e("span",{class:"hidden lg:block ml-2 text-sm"},"- 22 Reviews",-1)),De=b('<div class="md:w-1/4 w-2/3" data-v-7655affd><div class="flex items-center space-x-2" data-v-7655affd><a class="inline-flex items-center hover:text-gray-900 text-black" href="#" data-v-7655affd><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-7655affd><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" data-v-7655affd></path></svg><span class="hidden lg:block ml-2 text-sm" data-v-7655affd>Compartir</span></a><a class="inline-flex items-center hover:text-gray-900 text-black" href="#" data-v-7655affd><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-7655affd><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" data-v-7655affd></path></svg><span class="hidden lg:block ml-2 text-sm" data-v-7655affd>Guardar</span></a></div></div>',1),Oe={class:"px-2 py-4"},He={class:"grid md:grid-cols-5 md:px-6 px-2 grid-cols-2 gap-4"},Te=["src"],Ue={class:"md:flex px-2"},Ie={class:"md:w-8/12 px-6 mt-2"},Je={class:"mb-4 2xl:mb-8 max-w-xl"},Ge={class:"flex items-center md:justify-start md:w-4/12 text-sm text-gray-800 mb-1"},Xe=a(()=>e("img",{class:"w-4",src:I,alt:""},null,-1)),Ke={class:"text-gray-800 ml-2"},Qe={class:"flex items-center md:justify-start md:w-4/12 text-sm text-gray-800 mb-1"},We=a(()=>e("img",{class:"w-4",src:J,alt:""},null,-1)),Ye={class:"text-gray-800 ml-2"},Ze={class:"flex items-center md:justify-start md:w-4/12 text-sm text-gray-800 mb-1"},et=a(()=>e("img",{class:"w-4",src:G,alt:""},null,-1)),tt={class:"text-gray-800 ml-2"},st={class:"flex items-center md:justify-start md:w-4/12 text-sm text-gray-800 mb-1"},at=a(()=>e("img",{class:"w-4",src:X,alt:""},null,-1)),ot={class:"text-gray-800 ml-2"},lt={class:"flex items-center md:justify-start md:w-4/12 text-sm text-gray-800"},it=a(()=>e("img",{class:"w-4",src:K,alt:""},null,-1)),dt={class:"text-gray-800 ml-2"},nt={class:"max-w-lg mt-8"},rt=["innerHTML"],ct={class:"md:w-4/12 flex flex-col md:space-y-20 space-y-10 mx-auto mt-2 text-center items-center justify-center border border-[#DC9040] rounded-2xl py-2"},mt={class:"md:flex"},ut={class:"flex flex-col text-left"},pt=a(()=>e("p",{class:"md:text-xs text-sm"},"Valor por noche",-1)),ft={class:"font-bold md:text-xl text-2xl"},vt=a(()=>e("a",{class:"inline-flex items-end hover:text-gray-900 text-black",href:"#"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[e("path",{"fill-rule":"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z","clip-rule":"evenodd"})]),e("span",{class:"hidden lg:block ml-2 text-sm"},"4.8")],-1)),_t=a(()=>e("span",{class:"hidden lg:block ml-2 text-sm"},"· 22 Reviews",-1)),xt=["href"],ht={class:"m-4"},gt=a(()=>e("hr",{class:"bg-[#DC9040] h-px my-8 border-0"},null,-1)),wt={class:"mx-auto text-center"},bt=a(()=>e("h3",{class:"text-2xl font-bold"}," Acerca de este lugar",-1)),yt={key:0,class:"text-sm max-w-md text-center text-justify mx-auto"},kt=b('<div data-v-7655affd><div class="w-full h-24 border-2 rounded-md mx-auto mt-20" data-v-7655affd><div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5" data-v-7655affd><div class="w-12 bg-gray-300 h-12 rounded-full" data-v-7655affd></div><div class="flex flex-col space-y-3" data-v-7655affd><div class="w-36 bg-gray-300 h-6 rounded-md" data-v-7655affd></div><div class="w-24 bg-gray-300 h-6 rounded-md" data-v-7655affd></div></div></div></div></div>',1),Ct=[kt],jt=["innerHTML"],St=b('<hr class="bg-[#DC9040] h-px my-8 border-0" data-v-7655affd><div class="px-4" id="reviews" data-v-7655affd><div class="pb-8" data-v-7655affd><h3 class="text-2xl font-bold inline-flex" data-v-7655affd> Reviews</h3><a class="inline-flex items-end hover:text-gray-900 text-black" href="#" data-v-7655affd><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" data-v-7655affd><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" data-v-7655affd></path></svg><span class="hidden lg:block ml-2 text-sm" data-v-7655affd>4.8</span></a><a class="inline-flex items-end hover:text-gray-900 text-green-300" href="#" data-v-7655affd><span class="hidden lg:block ml-2 text-sm" data-v-7655affd>· 22 Reviews</span></a></div><div data-v-7655affd><div class="grid md:grid-cols-2 grid-cols-1 gap-6" data-v-7655affd><div data-v-7655affd><h4 class="text-lg font-bold inline-flex" data-v-7655affd> Alana Chantal</h4> <p class="inline-flex text-base" data-v-7655affd>- Enero 2023</p><p data-v-7655affd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolore, autem in, totam possimus error aspernatur laborum a ab eum saepe dolorum, rerum sapiente quod assumenda fuga qui sint cupiditate?</p></div><div data-v-7655affd><h4 class="text-lg font-bold inline-flex" data-v-7655affd> Alana Chantal</h4> <p class="inline-flex text-base" data-v-7655affd>- Enero 2023</p><p data-v-7655affd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolore, autem in, totam possimus error aspernatur laborum a ab eum saepe dolorum, rerum sapiente quod assumenda fuga qui sint cupiditate?</p></div><div data-v-7655affd><h4 class="text-lg font-bold inline-flex" data-v-7655affd> Alana Chantal</h4> <p class="inline-flex text-base" data-v-7655affd>- Enero 2023</p><p data-v-7655affd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolore, autem in, totam possimus error aspernatur laborum a ab eum saepe dolorum, rerum sapiente quod assumenda fuga qui sint cupiditate?</p></div><div data-v-7655affd><h4 class="text-lg font-bold inline-flex" data-v-7655affd> Alana Chantal</h4> <p class="inline-flex text-base" data-v-7655affd>- Enero 2023</p><p data-v-7655affd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolore, autem in, totam possimus error aspernatur laborum a ab eum saepe dolorum, rerum sapiente quod assumenda fuga qui sint cupiditate?</p></div></div><a href="#" class="mx-auto text-center inline-flex" data-v-7655affd>Ver más reviews <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-7655affd><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" data-v-7655affd></path></svg></a></div></div><hr class="bg-[#DC9040] h-px my-8 border-0" data-v-7655affd>',3),Mt={class:"mx-auto text-center my-4"},Nt=a(()=>e("h3",{class:"text-2xl font-bold"}," Dejá tu review",-1)),Vt={class:"max-w-md text-center text-justify mx-auto"},Rt={class:"mb-4"},$t=a(()=>e("label",{for:"name",class:"block text-gray-700 font-bold mb-2"},"Nombre",-1)),Lt={class:"mb-4"},Bt=a(()=>e("label",{for:"rating",class:"block text-gray-700 font-bold mb-2"},"Calificación",-1)),Et={class:"mb-4"},At=a(()=>e("label",{for:"review",class:"block text-gray-700 font-bold mb-2"},"Comentario",-1)),Pt=a(()=>e("div",null,[e("button",{type:"submit",class:"px-4 py-2 bg-black text-white rounded-md"},"Enviar")],-1)),qt=a(()=>e("div",null,[e("h3",{class:"text-2xl font-bold"}," Propiedades similares")],-1)),Ft={class:"py-12 bg-white sm:py-16 lg:py-20",id:"productos"},zt={class:"px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"},Dt={key:0,class:"mt-8"},Ot={key:1,class:"swiper swiper-product mt-8"},Ht={class:"swiper-wrapper"},Tt=a(()=>e("div",{id:"js-prev1",class:"swiper-button-next"},null,-1)),Ut=a(()=>e("div",{id:"js-next1",class:"swiper-button-prev"},null,-1)),It=a(()=>e("div",{class:"swiper-pagination"},null,-1)),Jt=M({__name:"[id]",setup(v){const{backendUrl:d,imageUrl:l}=q().public,u=W({activeView:"propiedad-detalle"}),_=Y(),x=j({bedrooms:[],balcony:!1,parking:!1}),{pending:g,data:s}=V("item",()=>$fetch(d+"/getPropiedad.php",{params:{id:_.params.id}}),{transform:i=>JSON.parse(i)});s.value&&(x.value.bedrooms.push(s.value.dormitorios),s.value.cochera==="Si"&&(x.value.parking=!0),s.value.balcony==="Si"&&(x.value.balcony=!0));const{pending2:y,data:k}=V("propSimilares",()=>$fetch(d+"/getPropiedades.php",{params:{id:_.params.id}}),{transform:i=>JSON.parse(i)});A.use([ie,de,ne,re]);const h={slidesPerView:4,loop:!0,autoplay:{delay:3e3},spaceBetween:30,pagination:{el:".swiper-pagination-product",clickable:!0},navigation:{nextEl:"#js-prev1",prevEl:"#js-next1"},breakpoints:{320:{slidesPerView:2,spaceBetween:20},480:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:4,spaceBetween:30}}};Z(()=>{engine=new A(".swiper-product",h)});function c(i){x.value=i}return(i,p)=>{const C=T,z=U,N=P,D=me,O=ye,H=le;return n(),r("div",ke,[f(C,{activeMenu:t(u).activeView,class:"relative"},null,8,["activeMenu"]),e("section",null,[e("div",Ce,[e("div",je,[e("div",Se,[e("div",Me,[f(z,{onFiltersUpdated:c,selectedFilters:t(x)},null,8,["selectedFilters"])]),e("div",Ne,[t(g)?(n(),r("div",Ve,$e)):(n(),r("div",Le,[e("div",Be,[e("div",Ee,[e("h1",Ae,o(t(s).titulo),1),e("div",Pe,[e("a",qe,o(t(s).calle)+" N°"+o(t(s).altura)+" "+o(t(s).entre)+" "+o(t(s).calle1)+" y "+o(t(s).calle2)+", "+o(t(s).barrio),1),Fe,f(N,{to:{path:"#",hash:"#reviews"},class:"cursor-pointer inline-flex items-center hover:text-gray-900 text-green-300"},{default:S(()=>[ze]),_:1})])]),De]),e("div",Oe,[e("div",He,[(n(!0),r($,null,L(t(s).fotos,(m,w)=>(n(),r("div",{key:w,class:te(w===0?"col-span-2 row-span-2 ":"")},[e("img",{src:t(l)+"/"+t(s).id_propiedad+"/"+m.foto,class:"w-full drop-shadow-2xl rounded-xl",alt:""},null,8,Te)],2))),128))])]),e("div",Ue,[e("div",Ie,[e("div",Je,[e("p",Ge,[Xe,e("span",Ke,o(t(s).sup_construida)+" m2.",1)]),e("p",Qe,[We,e("span",Ye,o(t(s).ambientes)+" ambientes",1)]),e("p",Ze,[et,e("span",tt,o(t(s).banios)+" baños",1)]),e("p",st,[at,e("span",ot,o(t(s).dormitorios)+" dormitorios",1)]),e("p",lt,[it,e("span",dt,[F("Cochera "),e("b",null,o(t(s).cochera),1)])])]),e("div",nt,[e("div",{class:"text-sm text-gray-800",innerHTML:t(s).descripcion},null,8,rt)])]),e("div",ct,[e("div",mt,[e("div",ut,[pt,e("p",ft,"$"+o(t(s).precio),1)]),vt,f(N,{to:{path:"#",hash:"#reviews"},class:"inline-flex items-end hover:text-gray-900 text-green-300"},{default:S(()=>[_t]),_:1})]),e("a",{class:"px-4 py-4 mb-2 text-left font-bold text-xl text-white uppercase rounded-lg bg-[#DC9040]",href:"https://api.whatsapp.com/send?phone=5492213998263&text=Hola, quiero consultar por la propiedad "+t(s).titulo,target:"blank"},"RESERVAR",8,xt)])])]))])]),e("div",ht,[gt,e("div",wt,[bt,t(g)?(n(),r("div",yt,Ct)):(n(),r("div",{key:1,class:"text-sm max-w-md text-center text-justify mx-auto",innerHTML:t(s).descripcion},null,8,jt))]),St,e("div",Mt,[Nt,e("div",Vt,[e("form",{onSubmit:p[2]||(p[2]=ee((...m)=>i.submitReview&&i.submitReview(...m),["prevent"]))},[e("div",Rt,[$t,B(e("input",{"onUpdate:modelValue":p[0]||(p[0]=m=>i.name=m),type:"text",id:"name",name:"name",class:"w-full px-3 py-2 border border-gray-300 rounded-md"},null,512),[[E,i.name]])]),e("div",Lt,[Bt,f(D,{"read-only":!1,ratingValue:1.2,activeColor:"#000"})]),e("div",Et,[At,B(e("textarea",{"onUpdate:modelValue":p[1]||(p[1]=m=>i.review=m),id:"review",name:"review",rows:"4",class:"w-full px-3 py-2 border border-gray-300 rounded-md"},null,512),[[E,i.review]])]),Pt],32)])]),qt,e("section",Ft,[e("div",zt,[t(y)?(n(),r("div",Dt," Cargando... ")):(n(),r("div",Ot,[e("div",Ht,[(n(!0),r($,null,L(t(k),(m,w)=>(n(),r("div",{class:"swiper-slide",key:w},[f(O,{item:m},null,8,["item"])]))),128))]),Tt,Ut,It]))])])])])])]),f(H)])}}});const es=oe(Jt,[["__scopeId","data-v-7655affd"]]);export{es as default};
