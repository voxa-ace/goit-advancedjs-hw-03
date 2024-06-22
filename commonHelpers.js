(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="live_nQdU30L5Pi3CRefNOxMdqR2hpDOu0bh6jtMVDgUqk1CW9D0NDZmBsQIS8vpnxulw",E=async()=>{const r=await fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":g}});if(!r.ok)throw new Error("Error fetching breeds");return await r.json()},C=async r=>{const o=await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${r}`,{headers:{"x-api-key":g}});if(!o.ok)throw new Error("Error fetching cat by breed");return await o.json()};document.addEventListener("DOMContentLoaded",async()=>{const r=document.getElementById("breed-select"),o=document.querySelector(".loader"),a=document.querySelector(".error"),i=document.querySelector(".cat-info"),e=document.getElementById("cat-image"),t=document.getElementById("cat-name"),s=document.getElementById("cat-description"),u=document.getElementById("cat-temperament"),f=()=>{o.classList.add("show"),r.style.display="none"},h=()=>{o.classList.remove("show")},m=c=>{a.textContent=c,a.classList.add("show"),iziToast.error({title:"Error",message:c})},p=()=>{a.classList.remove("show")},y=()=>{i.style.display="none",e.src="",t.textContent="",s.textContent="",u.textContent=""},b=async()=>{f(),p();try{(await E()).forEach(d=>{const n=document.createElement("option");n.value=d.id,n.textContent=d.name,r.appendChild(n)}),new SlimSelect({select:"#breed-select"}),r.style.display="block"}catch{m("Failed to fetch breeds")}finally{h()}},w=async c=>{const d=c.target.value;if(d){f(),p();try{const n=await C(d);if(n.length===0)y(),m("No cat data found for this breed.");else{const l=n[0];e.src=l.url,t.textContent=l.breeds[0].name,s.textContent=l.breeds[0].description,u.textContent=l.breeds[0].temperament,i.style.display="block"}}catch{y(),m("Failed to fetch cat information")}finally{r.style.display="block",h()}}};r.addEventListener("change",w),await b()});
//# sourceMappingURL=commonHelpers.js.map