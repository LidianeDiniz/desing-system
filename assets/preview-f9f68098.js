var c=Object.defineProperty;var n=(t,e)=>c(t,"name",{value:e,configurable:!0});import{k as l,h as m,S as u,o as k}from"./iframe-2f0038ef.js";import{m as L}from"./make-decorator-bdf1c4e0.js";var h="links",f=l.document,p=l.HTMLElement,E=n(function(e){return m.getChannel().emit(k,e)},"navigate"),d=n(function(e){var a=e.target;if(a instanceof p){var v=a,o=v.dataset,i=o.sbKind,s=o.sbStory;(i||s)&&(e.preventDefault(),E({kind:i,story:s}))}},"linksListener"),r=!1,g=n(function(){r||(r=!0,f.addEventListener("click",d))},"on"),S=n(function(){r&&(r=!1,f.removeEventListener("click",d))},"off"),T=L({name:"withLinks",parameterName:h,wrapper:n(function(e,a){return g(),m.getChannel().once(u,S),e(a)},"wrapper")});module&&module.hot&&module.hot.decline&&module.hot.decline();var b=[T];export{b as decorators};
//# sourceMappingURL=preview-f9f68098.js.map
