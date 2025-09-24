(function(){
  async function fetchIndex(){
    try {
      const res = await fetch(new URL('./index.json', document.baseURI));
      if(!res.ok) throw new Error('fetch index failed');
      return await res.json();
    } catch(e){ console.error(e); return []; }
  }
  function normalize(str){ return (str||'').toLowerCase(); }
  function match(item, q){
    const nq = normalize(q);
    return normalize(item.title).includes(nq) || normalize(item.summary).includes(nq);
  }
  function render(results){
    const list = document.getElementById('search-results');
    if(!list) return;
    list.innerHTML='';
    results.forEach(r=>{
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = r.permalink; a.textContent = r.title;
      const small = document.createElement('small'); small.textContent = ' ' + r.date;
      li.appendChild(a); li.appendChild(small);
      list.appendChild(li);
    });
  }
  async function main(){
    const input = document.getElementById('search-input');
    const list = document.getElementById('search-results');
    if(!input || !list) return;
    const data = await fetchIndex();
    input.addEventListener('input', ()=>{
      const q = input.value.trim();
      if(!q){ list.innerHTML=''; return; }
      const results = data.filter(it=>match(it,q)).slice(0,50);
      render(results);
    });
  }
  document.addEventListener('DOMContentLoaded', main);
})();
