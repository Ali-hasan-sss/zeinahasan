import{G as g,r as c,y as w,c as r,a as s,z as u,t as i,b,w as x,T as C,o as d,p as k,e as S}from"./Cwcww4q5.js";import{u as T}from"./B5LD7AMv.js";import{_ as I}from"./DlAUqK2U.js";const B=a=>(k("data-v-b3e42fe2"),a=a(),S(),a),E={class:"container product"},N={key:0,class:"spinner-overlay"},V=B(()=>s("div",{class:"spinner"},null,-1)),$=[V],M={class:"text-center m-4 text-warning"},P=["src"],j={class:"dis w-5 text-light"},q={class:"price"},z={key:0,class:"floating-message"},A={__name:"[id]",setup(a){const p=g(),{id:_}=p.params,l=c(!0),o=c({}),n=c(!1);w(async()=>{const e=await(await fetch(`https://fakestoreapi.com/products/${_}`)).json();o.value=e,l.value=!1});const v=T(),f=t=>{v.addToCart({...t,quantity:1}),n.value=!0,setTimeout(()=>{n.value=!1},2e3)},m=t=>{t.style.opacity=0},h=(t,e)=>{t.offsetHeight,t.style.transition="opacity 1s",t.style.opacity=1,e()},y=(t,e)=>{t.style.transition="opacity 1s",t.style.opacity=0,setTimeout(e,1e3)};return(t,e)=>(d(),r("div",null,[s("div",E,[l.value?(d(),r("div",N,$)):u("",!0),s("h1",M,i(o.value.title),1),s("img",{src:o.value.image,alt:"Product Image"},null,8,P),s("p",j,i(o.value.description),1),s("p",q,"$"+i(o.value.price),1),s("button",{class:"btn btn-outline-warning w-5",onClick:e[0]||(e[0]=D=>f(o.value))}," Add to Cart "),b(C,{name:"fade",onBeforeEnter:m,onEnter:h,onLeave:y},{default:x(()=>[n.value?(d(),r("div",z," Product added to cart! ")):u("",!0)]),_:1})])]))}},R=I(A,[["__scopeId","data-v-b3e42fe2"]]);export{R as default};
