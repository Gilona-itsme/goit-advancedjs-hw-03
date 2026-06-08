import{a as p,S as m,i}from"./assets/vendor-BezXTN6Z.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const o={form:document.querySelector(".form"),input:document.querySelector(".query-input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},d="48667143-848a2c1e8cdbe8787de8ea23b",g="https://pixabay.com/api/",y=n=>p.get(g,{params:{key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data),f=new m(".gallery a",{captionsData:"alt",captionDelay:250}),h=n=>{const s=n.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:l,comments:c,downloads:u})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${r}" alt="${e}" loading="lazy" />
        </a>
        
        <ul class="statistics">
          <li class="stat-element">
            <span class="stat-name">Likes</span>
            <span class="stat-value">${t}</span>
          </li>
          <li class="stat-element">
            <span class="stat-name">Views</span>
            <span class="stat-value">${l}</span>
          </li>
          <li class="stat-element">
            <span class="stat-name">Comments</span>
            <span class="stat-value">${c}</span>
          </li>
          <li class="stat-element">
            <span class="stat-name">Downloads</span>
            <span class="stat-value">${u}</span>
          </li>
        </ul>
      </li>
    `).join("");o.gallery.insertAdjacentHTML("beforeend",s),f.refresh()},L=()=>{o.gallery.innerHTML=""},b=()=>{o.loader.classList.add("is-visible")},v=()=>{o.loader.classList.remove("is-visible")},S=n=>{n.preventDefault();const s=o.input.value.trim();if(!s){i.warning({title:"Caution",message:"Please enter a search query!",position:"topRight"});return}L(),b(),y(s).then(r=>{const a=r.hits;if(!a||a.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(a),o.form.reset()}).catch(r=>{console.error(r),i.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{v()})};o.form.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
