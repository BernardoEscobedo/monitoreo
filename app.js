
const HOY_DEMO = new Date();
const fHoy = `${String(HOY_DEMO.getDate()).padStart(2,'0')}/${String(HOY_DEMO.getMonth()+1).padStart(2,'0')}/${HOY_DEMO.getFullYear()}`;

const DEMO = [
  {fecha:fHoy, folio:"79079", almacen:"Preenfriado Doña Nelly", destino:"WM VSA", transportista:"SOLIS", unidad:"53 Pies", hora:"21:30", cajas:672, calidad:"Premium", producto:"Chanitos Premium — Tarima Chep"},
  {fecha:fHoy, folio:"77050", almacen:"Preenfriado Doña Nelly", destino:"EXPORTACIÓN USA", transportista:"AUTO EXPRESS SEGOVIA", unidad:"Full", hora:"18:00", cajas:960, calidad:"Premium", producto:"Chanitos Premium EUA — Tarima Americana"},
  {fecha:fHoy, folio:"57717", almacen:"Preenfriado Doña Nelly", destino:"EXPORTACIÓN USA", transportista:"AUTO EXPRESS SEGOVIA", unidad:"Full", hora:"17:30", cajas:960, calidad:"Premium", producto:"Chanitos Premium EUA — Tarima Americana"},
  {fecha:fHoy, folio:"81414", almacen:"Preenfriado Doña Nelly", destino:"S-MART S-MTY", transportista:"DELTA", unidad:"Full", hora:"15:30", cajas:960, calidad:"Premium", producto:"Chanitos Premium — Tarima Americana Reforzada"},
  {fecha:fHoy, folio:"29682", almacen:"Preenfriado Doña Nelly", destino:"S-MART S-MTY", transportista:"DELTA", unidad:"Full", hora:"16:30", cajas:960, calidad:"Premium", producto:"Chanitos Premium — Tarima Americana Reforzada"},
  {fecha:fHoy, folio:"17172", almacen:"Preenfriado Doña Nelly", destino:"CEDIS CEDA", transportista:"ALICIA PADILLA", unidad:"53 Pies", hora:"15:00", cajas:292, calidad:"Premium", producto:"Chanitos Premium — Granel"},
  {fecha:fHoy, folio:"66282", almacen:"Preenfriado Doña Nelly", destino:"EXPORTACIÓN USA", transportista:"EXPRESS CAVAZOS", unidad:"53 Pies", hora:"18:09", cajas:960, calidad:"Premium", producto:"Chanitos Premium — Tarima Americana Reforzada"},
  {fecha:fHoy, folio:"58191", almacen:"Finca La Ceiba", destino:"WM VSA", transportista:"VICTOR MORGAN", unidad:"48 Pies", hora:"19:37", cajas:1565, calidad:"Premium", producto:"Chanitos Premium EUA — Tarima Americana"},
  {fecha:fHoy, folio:"44482", almacen:"Preenfriado Fortaleza", destino:"WM QRO", transportista:"TRANSPORTE SANCHEZ", unidad:"53 Pies", hora:"09:00", cajas:1152, calidad:"Premium", producto:"Chanitos Premium — Tarima Chep"},
  {fecha:fHoy, folio:"37032", almacen:"Finca Fortaleza", destino:"EXPORTACIÓN USA", transportista:"INTERNO", unidad:"No Aplica", hora:"17:36", cajas:1501, calidad:"Premium", producto:"Chanitos Premium — Tarima Chep"},
  {fecha:fHoy, folio:"36887", almacen:"Finca Marbella", destino:"WM VSA", transportista:"HERMANO HERNANDEZ", unidad:"53 Pies", hora:"19:53", cajas:1104, calidad:"Premium", producto:"Chanitos Premium — Tarima Chep"},
  {fecha:fHoy, folio:"95201", almacen:"Finca Marbella", destino:"CEDIS CEDA", transportista:"ALICIA PADILLA", unidad:"48 Pies", hora:"18:21", cajas:361, calidad:"Segundas", producto:"Chanitos Cha Cha Cha 2da"},
  {fecha:fHoy, folio:"72508", almacen:"Finca La Ceiba", destino:"EXPORTACIÓN USA", transportista:"INTERNO", unidad:"40 Pies", hora:"22:38", cajas:1610, calidad:"Premium", producto:"Chanitos Premium EUA"},
  {fecha:fHoy, folio:"85976", almacen:"Finca Marbella", destino:"EXPORTACIÓN Japón", transportista:"GUVA", unidad:"48 Pies", hora:"17:36", cajas:1080, calidad:"Premium", producto:"Chanitos Cha Cha Cha 22XU Kodawari"},
];

// COORDENADAS GEO
const ORIGENES_GEO = {
  "Finca Marbella":{lat:14.901,lng:-92.258,ciudad:"Tapachula, Chis"},
  "Finca La Ceiba":{lat:15.022,lng:-92.384,ciudad:"Huehuetán, Chis"},
  "Finca Doña Nelly":{lat:15.022,lng:-92.384,ciudad:"Huehuetán, Chis"},
  "Preenfriado Doña Nelly":{lat:15.022,lng:-92.384,ciudad:"Huehuetán, Chis"},
  "Finca Fortaleza":{lat:14.864,lng:-92.461,ciudad:"Mazatán, Chis"},
  "Preenfriado Fortaleza":{lat:14.864,lng:-92.461,ciudad:"Mazatán, Chis"},
  "Finca Génesis":{lat:17.547,lng:-92.952,ciudad:"Teapa, Tab"},
  "Finca Genesis":{lat:17.547,lng:-92.952,ciudad:"Teapa, Tab"}
};
const DESTINOS_GEO = {
  "EXPORTACIÓN USA":{lat:27.498,lng:-99.507,ciudad:"Nuevo Laredo · Frontera USA"},
  "EXPORTACIÓN Japón":{lat:19.054,lng:-104.316,ciudad:"Manzanillo · Puerto Japón"},
  "WM VSA":{lat:19.179,lng:-96.135,ciudad:"WM Veracruz"},
  "WM QRO":{lat:20.588,lng:-100.388,ciudad:"WM Querétaro"},
  "S-MART S-MTY":{lat:25.686,lng:-100.316,ciudad:"S-Mart Monterrey"},
  "S-MART Cd Juárez":{lat:31.690,lng:-106.424,ciudad:"S-Mart Cd. Juárez"},
  "CEDIS CEDA":{lat:19.371,lng:-99.094,ciudad:"CEDA · CDMX"}
};
function matchOrigen(nm){
  if(!nm) return null;
  if(ORIGENES_GEO[nm]) return ORIGENES_GEO[nm];
  const up = nm.toUpperCase();
  for(const k in ORIGENES_GEO){
    if(up.includes(k.toUpperCase()) || k.toUpperCase().includes(up)) return ORIGENES_GEO[k];
  }
  // fallback por keywords
  if(/MARBELLA/i.test(nm)) return ORIGENES_GEO["Finca Marbella"];
  if(/CEIBA/i.test(nm)) return ORIGENES_GEO["Finca La Ceiba"];
  if(/NELLY/i.test(nm)) return ORIGENES_GEO["Preenfriado Doña Nelly"];
  if(/FORTALEZA/i.test(nm)) return ORIGENES_GEO["Finca Fortaleza"];
  if(/GENESIS|GÉNESIS/i.test(nm)) return ORIGENES_GEO["Finca Génesis"];
  return null;
}
function matchDestino(nm){
  if(!nm) return null;
  if(DESTINOS_GEO[nm]) return DESTINOS_GEO[nm];
  for(const k in DESTINOS_GEO){
    if(nm.toUpperCase().includes(k.toUpperCase().split(' ')[0])) return DESTINOS_GEO[k];
  }
  if(/USA|EUA|EXPORT.*US/i.test(nm)) return DESTINOS_GEO["EXPORTACIÓN USA"];
  if(/JAPON|JAPÓN|KODAWARI/i.test(nm)) return DESTINOS_GEO["EXPORTACIÓN Japón"];
  if(/QRO|QUER/i.test(nm)) return DESTINOS_GEO["WM QRO"];
  if(/VSA|VERAC/i.test(nm)) return DESTINOS_GEO["WM VSA"];
  if(/MTY|MONTERREY/i.test(nm)) return DESTINOS_GEO["S-MART S-MTY"];
  if(/JUAR/i.test(nm)) return DESTINOS_GEO["S-MART Cd Juárez"];
  if(/CEDA|CDMX|CEDIS/i.test(nm)) return DESTINOS_GEO["CEDIS CEDA"];
  return null;
}

let DATA_RAW = DEMO.slice();
let donutChart, barChart;
let leafMap = null;
let mapLayers = [];

const $ = id => document.getElementById(id);
const isExport = d => /export|usa|japon|japón|kodawari/i.test(d||"");
const fmt = n => (n||0).toLocaleString('es-MX');
const trunc = (s,n=28) => (s && s.length>n) ? s.slice(0,n-3)+"..." : (s||"");

function isToday(fechaStr){
  if(!fechaStr) return true;
  const s = String(fechaStr).trim();
  let d,m,y;
  if(s.includes('/')){ [d,m,y] = s.split('/').map(x=>parseInt(x)); }
  else if(s.includes('-')){ [y,m,d] = s.split('-').map(x=>parseInt(x)); }
  else {
    const num = parseFloat(s);
    if(!isNaN(num) && num > 30000){
      const dt = new Date((num - 25569) * 86400 * 1000);
      const t = new Date();
      return dt.getFullYear()===t.getFullYear() && dt.getMonth()===t.getMonth() && dt.getDate()===t.getDate();
    }
    return true;
  }
  const t = new Date();
  return d===t.getDate() && m===(t.getMonth()+1) && y===t.getFullYear();
}

function hh2min(hora){
  if(!hora) return 0;
  const parts = String(hora).split(":").map(Number);
  return (parts[0]||0)*60 + (parts[1]||0);
}
function statusOf(){ return {c:"done", t:"DESPACHADO"}; }

const ICO_AVION = '<svg class="tipoico" viewBox="0 0 24 24" fill="none" stroke="#00FF85" stroke-width="2"><path d="M2 16l20-7-9 13-2-7-9-2z"/></svg>';
const ICO_CAMION = '<svg class="tipoico" viewBox="0 0 24 24" fill="none" stroke="#FFB800" stroke-width="2"><rect x="1" y="7" width="13" height="10"/><path d="M14 10h5l3 3v4h-8z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>';

function tickClock(){
  const d = new Date(), pad = n => String(n).padStart(2,'0');
  $('clk').textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  const dow = ["DOM","LUN","MAR","MIE","JUE","VIE","SAB"][d.getDay()];
  const mo  = ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"][d.getMonth()];
  $('cdt').textContent = `${dow} ${pad(d.getDate())} ${mo} ${d.getFullYear()}`;
  const end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59);
  const diff = Math.max(0, Math.floor((end - d)/1000));
  const hh = pad(Math.floor(diff/3600));
  const mm = pad(Math.floor((diff%3600)/60));
  const ss = pad(diff%60);
  $('cdown').textContent = `CIERRE DE OPERACIONES EN ${hh}:${mm}:${ss}`;
  const sec = d.getHours()*3600 + d.getMinutes()*60 + d.getSeconds();
  $('dayProg').style.width = (sec/86400*100).toFixed(2)+'%';
}
setInterval(tickClock,1000); tickClock();

function animNum(el, to){
  const from = parseInt(String(el.textContent).replace(/[^\d]/g,''))||0;
  const dur = 700, start = performance.now();
  function step(t){
    const p = Math.min((t-start)/dur, 1);
    const v = Math.floor(from + (to-from)*(1-Math.pow(1-p,3)));
    el.textContent = fmt(v);
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function drawSpark(id, data, color){
  const c = document.getElementById(id); if(!c) return;
  const ctx = c.getContext('2d');
  const w = c.width = c.offsetWidth*2, h = c.height = c.offsetHeight*2;
  ctx.clearRect(0,0,w,h);
  const mn = Math.min(...data), mx = Math.max(...data), rng = mx-mn||1;
  ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.shadowBlur = 8; ctx.shadowColor = color;
  ctx.beginPath();
  data.forEach((v,i)=>{
    const x = i/(data.length-1)*w;
    const y = h - ((v-mn)/rng)*h*.9 - h*.05;
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.stroke();
}
function rndSpark(){ return Array.from({length:12},()=>Math.random()*100); }

function todayData(){
  return DATA_RAW.filter(r => isToday(r.fecha)).sort((a,b) => hh2min(b.hora) - hh2min(a.hora));
}

function renderFids(){
  const all = todayData();
  const rows = all.slice(0,10);
  $('totRows').textContent = all.length;
  $('shownRows').textContent = rows.length;
  const body = $('fidsBody');
  if(rows.length === 0){
    body.innerHTML = `<tr><td colspan="9"><div class="empty"><div class="ic">✈</div><div>SIN DESPACHOS REGISTRADOS HOY</div><div style="font-size:11px;opacity:.6">CARGA UN EXCEL O ESPERA REGISTROS</div></div></td></tr>`;
    return;
  }
  const sortedByCjs = [...rows].sort((a,b)=>(b.cajas||0)-(a.cajas||0));
  const top3 = new Set(sortedByCjs.slice(0,3).map(r=>r.folio));
  body.innerHTML = rows.map(r=>{
    const st = statusOf();
    const exp = isExport(r.destino);
    const ico = exp ? ICO_AVION : ICO_CAMION;
    return `<tr class="${top3.has(r.folio)?'top3':''}">
      <td class="col-folio folio">${r.folio||'—'}</td>
      <td class="col-hora hr">${r.hora||'--:--'}</td>
      <td class="col-origen">${r.almacen||'—'}</td>
      <td class="col-destino dest">${ico}${r.destino||'—'}</td>
      <td class="col-trans">${(r.transportista||'—').toUpperCase()}</td>
      <td class="col-unidad">${r.unidad||'—'}</td>
      <td class="col-cajas cjs">${fmt(r.cajas)}</td>
      <td class="col-cal">${r.calidad||'—'}</td>
      <td class="col-est"><span class="badge done"><span class="ld"></span>${st.t}</span></td>
    </tr>`;
  }).join('');
}

function renderTimeline(){
  const rows = todayData();
  const t = $('tltrack');
  const now = new Date();
  const nowPct = ((now.getHours()*60+now.getMinutes())/1440)*100;
  let html = `<div class="mark-now" style="left:${nowPct}%"></div>`;
  rows.forEach(r=>{
    const m = hh2min(r.hora);
    html += `<div class="ev ${isExport(r.destino)?'exp':''}" style="left:${(m/1440)*100}%" title="${r.hora} ${r.destino}"></div>`;
  });
  t.innerHTML = html;
}

function renderKpis(){
  const rows = todayData();
  const totEmb = new Set(rows.map(r=>r.folio)).size;
  const totCjs = rows.reduce((s,r)=>s+(+r.cajas||0),0);
  const exp = rows.filter(r=>isExport(r.destino)).reduce((s,r)=>s+(+r.cajas||0),0);
  const nac = totCjs - exp;
  const alm = new Set(rows.map(r=>r.almacen)).size;
  const dst = new Set(rows.map(r=>r.destino)).size;
  animNum($('k1'), totEmb); animNum($('k2'), totCjs);
  animNum($('k3'), exp); animNum($('k4'), nac);
  animNum($('k5'), alm); animNum($('k6'), dst);
  $('livecnt').textContent = `EN VIVO · ${totEmb} DESPACHOS HOY`;
  drawSpark('s1', rndSpark(), '#FFB800');
  drawSpark('s2', rndSpark(), '#00E5FF');
  drawSpark('s3', rndSpark(), '#00FF85');
  drawSpark('s4', rndSpark(), '#FFB800');
  drawSpark('s5', rndSpark(), '#00E5FF');
  drawSpark('s6', rndSpark(), '#FF2D2D');
}

function renderDestList(){
  const rows = todayData();
  const agg = {};
  rows.forEach(r=>{ agg[r.destino] = (agg[r.destino]||0) + (+r.cajas||0); });
  const arr = Object.entries(agg).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const mx = Math.max(...arr.map(a=>a[1]),1);
  $('destList').innerHTML = arr.length ? arr.map(([k,v])=>`
    <div class="destrow">
      <div class="nm"><span>${k}</span><span>${fmt(v)}</span></div>
      <div class="barx"><i style="width:${(v/mx*100).toFixed(1)}%"></i></div>
    </div>`).join('') : '<div class="empty" style="font-size:11px">SIN DATOS</div>';
}

function renderDonut(){
  const rows = todayData();
  const agg = {};
  rows.forEach(r=>{
    const k = (r.producto && r.producto.trim()) ? r.producto : (r.calidad||"Sin clasificar");
    agg[k] = (agg[k]||0) + (+r.cajas||0);
  });
  const entries = Object.entries(agg).sort((a,b)=>b[1]-a[1]);
  const lbls = entries.map(e=>trunc(e[0],28));
  const vals = entries.map(e=>e[1]);
  const cols = ['#FFB800','#00FF85','#00E5FF','#FF2D2D','#b388ff','#ffd24a','#ff6b6b','#4ecdc4','#f7b731','#5f27cd','#48dbfb','#1dd1a1'];
  if(donutChart) donutChart.destroy();
  donutChart = new Chart(document.getElementById('donutQ'),{
    type:'doughnut',
    data:{labels:lbls, datasets:[{data:vals, backgroundColor:cols, borderColor:'#000', borderWidth:2}]},
    options:{maintainAspectRatio:false,
      plugins:{legend:{position:'bottom', labels:{color:'#cfd1d6', font:{family:'Inter', size:10, weight:'500'}, boxWidth:10, padding:8}},
        tooltip:{backgroundColor:'#0d0e10', borderColor:'#FFB800', borderWidth:1, titleFont:{family:'Inter'}, bodyFont:{family:'Inter'}}},
      cutout:'62%'}
  });
}

function renderBar(){
  const rows = todayData();
  const agg = {};
  rows.forEach(r=>{ agg[r.almacen] = (agg[r.almacen]||0) + (+r.cajas||0); });
  const arr = Object.entries(agg).sort((a,b)=>b[1]-a[1]);
  if(barChart) barChart.destroy();
  barChart = new Chart(document.getElementById('barW'),{
    type:'bar',
    data:{labels:arr.map(a=>a[0].replace('Preenfriado','PE').replace('Finca','F.')),
      datasets:[{data:arr.map(a=>a[1]), backgroundColor:'rgba(255,184,0,.55)', borderColor:'#FFB800', borderWidth:1, borderRadius:3}]},
    options:{indexAxis:'y', maintainAspectRatio:false,
      plugins:{legend:{display:false}, tooltip:{backgroundColor:'#0d0e10',borderColor:'#FFB800',borderWidth:1,titleFont:{family:'Inter'}, bodyFont:{family:'Inter'}}},
      scales:{x:{ticks:{color:'#8a8f99',font:{family:'Inter',size:10}}, grid:{color:'#1a1c20'}},
        y:{ticks:{color:'#cfd1d6',font:{family:'Inter',size:11,weight:'500'}}, grid:{display:false}}}}
  });
}

function renderTicker(){
  const rows = todayData();
  const aggD = {};
  rows.forEach(r=>{ aggD[r.destino] = (aggD[r.destino]||0) + (+r.cajas||0); });
  const totCjs = rows.reduce((s,r)=>s+(+r.cajas||0),0);
  const exp = rows.filter(r=>isExport(r.destino)).reduce((s,r)=>s+(+r.cajas||0),0);
  const pctExp = totCjs ? (exp/totCjs*100).toFixed(1) : 0;
  const aggP = {};
  rows.forEach(r=>{
    const k = r.producto || r.calidad || "S/C";
    aggP[k] = (aggP[k]||0) + (+r.cajas||0);
  });
  const topProd = Object.entries(aggP).sort((a,b)=>b[1]-a[1])[0];
  let parts = [
    `<span class="up">▲ EXPORTACIÓN ${pctExp}% DEL MIX</span>`,
    `<span class="up">▲ TOTAL DEL DÍA ${fmt(totCjs)} CAJAS</span>`,
    `<span class="nu">◉ ${new Set(rows.map(r=>r.folio)).size} DESPACHOS REGISTRADOS</span>`];
  if(topProd) parts.push(`<span class="nu">★ PRODUCTO TOP: ${trunc(topProd[0],30)} (${fmt(topProd[1])} cjs)</span>`);
  Object.entries(aggD).sort((a,b)=>b[1]-a[1]).slice(0,6).forEach(([k,v])=>{
    const sign = Math.random()>.5?'up':'dn';
    const arr = sign==='up'?'▲ ALZA':'▼ BAJA';
    parts.push(`<span class="${sign}">${arr} ${k} ${fmt(v)} CJS</span>`);
  });
  parts.push(`<span class="nu">◉ SISTEMA OPERANDO · ${new Date().toLocaleTimeString('es-MX')}</span>`);
  const txt = parts.join(' · ') + ' · ';
  $('tickTxt').innerHTML = txt + txt;
}

/* =========== MAPA =========== */
function initMap(){
  if(leafMap) return;
  leafMap = L.map('mapMx', {zoomControl:true, attributionControl:false, preferCanvas:false}).setView([22.5,-99],5);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{
    maxZoom:18, minZoom:3
  }).addTo(leafMap);
}

function renderMap(){
  initMap();
  // limpiar
  mapLayers.forEach(l => leafMap.removeLayer(l));
  mapLayers = [];

  const rows = todayData();

  // Agrupar cajas por origen y destino
  const orig = {}; const dest = {};
  const flows = {};

  rows.forEach(r=>{
    const o = matchOrigen(r.almacen);
    const d = matchDestino(r.destino);
    if(o){
      const key = r.almacen;
      if(!orig[key]) orig[key] = {nm:r.almacen, geo:o, cajas:0};
      orig[key].cajas += (+r.cajas||0);
    }
    if(d){
      const key = r.destino;
      if(!dest[key]) dest[key] = {nm:r.destino, geo:d, cajas:0, exp:isExport(r.destino)};
      dest[key].cajas += (+r.cajas||0);
    }
    if(o && d){
      const fkey = r.almacen + '→' + r.destino;
      if(!flows[fkey]) flows[fkey] = {o:o, d:d, cajas:0, exp:isExport(r.destino), origen:r.almacen, dest:r.destino};
      flows[fkey].cajas += (+r.cajas||0);
    }
  });

  // FLOWS (líneas)
  const maxCajas = Math.max(...Object.values(flows).map(f=>f.cajas), 1);
  Object.values(flows).forEach(f=>{
    const color = f.exp ? '#00FF85' : '#00E5FF';
    const op = 0.45 + 0.45 * (f.cajas/maxCajas);
    const line = L.polyline([[f.o.lat,f.o.lng],[f.d.lat,f.d.lng]], {
      color:color, weight:2.2, opacity:op, dashArray:'8,6', className:'flow-line'
    }).addTo(leafMap);
    line.bindPopup(`<b>${f.origen}</b> → <b>${f.dest}</b><br>${fmt(f.cajas)} cajas`);
    mapLayers.push(line);
  });

  // ORÍGENES (amber)
  Object.values(orig).forEach(o=>{
    const icon = L.divIcon({
      className:'',
      html:`<div class="pulse-amber"></div><div class="mk-lbl">${o.nm}</div>`,
      iconSize:[12,12], iconAnchor:[6,6]
    });
    const m = L.marker([o.geo.lat,o.geo.lng],{icon}).addTo(leafMap);
    m.bindPopup(`<b>${o.nm}</b><br>${o.geo.ciudad}<br><b style="color:#FFB800">${fmt(o.cajas)} cajas hoy</b>`);
    mapLayers.push(m);
  });

  // DESTINOS (green/cyan)
  Object.values(dest).forEach(d=>{
    const cls = d.exp ? 'pulse-green' : 'pulse-cyan';
    const icon = L.divIcon({
      className:'',
      html:`<div class="${cls}"></div><div class="mk-lbl">${d.geo.ciudad}</div>`,
      iconSize:[12,12], iconAnchor:[6,6]
    });
    const m = L.marker([d.geo.lat,d.geo.lng],{icon}).addTo(leafMap);
    m.bindPopup(`<b>${d.nm}</b><br>${d.geo.ciudad}<br><b style="color:#00FF85">${fmt(d.cajas)} cajas</b>`);
    mapLayers.push(m);
  });
}

function render(){
  renderFids(); renderKpis(); renderTimeline();
  renderDestList(); renderDonut(); renderBar(); renderTicker();
  setTimeout(()=>renderMap(), 100);
}

$('fileInp').addEventListener('change', e=>{
  const f = e.target.files[0]; if(!f) return;
  const r = new FileReader();
  r.onload = ev=>{
    const wb = XLSX.read(ev.target.result, {type:'array', cellDates:false});
    const ws = wb.Sheets[wb.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(ws, {defval:"", raw:true});
    const raw = json.map(row=>{
      const get = (...ks)=>{
        for(const k of ks){
          for(const key of Object.keys(row)){
            if(key.toLowerCase().trim() === k.toLowerCase()) return row[key];
          }
        }
        return "";
      };
      let fecha = get("Fecha");
      if(typeof fecha === 'number' && fecha > 30000){
        const dt = new Date((fecha - 25569) * 86400 * 1000);
        fecha = `${String(dt.getDate()).padStart(2,'0')}/${String(dt.getMonth()+1).padStart(2,'0')}/${dt.getFullYear()}`;
      }
      let hora = get("Hora Despacho","Hora");
      if(typeof hora === 'number' && hora < 2){
        const totMin = Math.round(hora*1440);
        hora = `${String(Math.floor(totMin/60)).padStart(2,'0')}:${String(totMin%60).padStart(2,'0')}`;
      }
      return {
        fecha: String(fecha||"").trim(),
        folio: String(get("No. Embarque","No Embarque","Folio")||"").trim(),
        almacen: String(get("Almacen","Almacén")||"").trim(),
        destino: String(get("Destino")||"").trim(),
        transportista: String(get("Transportista")||"").trim(),
        unidad: String(get("Tipo Unidad","Tipo de Unidad")||"").trim(),
        hora: String(hora||"").trim(),
        cajas: +(get("Cajas Producto","Total Cajas","Cajas")||0),
        calidad: String(get("Calidad")||"").trim(),
        producto: String(get("Producto")||"").trim()
      };
    }).filter(r=>r.folio);
    const map = {};
    raw.forEach(r=>{
      if(!map[r.folio]){ map[r.folio] = {...r}; }
      else { map[r.folio].cajas += r.cajas; }
    });
    DATA_RAW = Object.values(map);
    const td = todayData();
    render();
    showToast(`✓ ${DATA_RAW.length} REGISTROS · ${td.length} DESPACHOS DE HOY`);
  };
  r.readAsArrayBuffer(f);
});

function showToast(msg){
  const t = $('toast'); t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2500);
}
function toggleFs(){
  if(!document.fullscreenElement) document.documentElement.requestFullscreen();
  else document.exitFullscreen();
  setTimeout(()=>{ if(leafMap) leafMap.invalidateSize(); }, 400);
}

setInterval(()=>{
  const tds = document.querySelectorAll('#fidsBody td.folio, #fidsBody td.hr, #fidsBody td.cjs');
  if(!tds.length) return;
  const t = tds[Math.floor(Math.random()*tds.length)];
  t.classList.remove('flap'); void t.offsetWidth; t.classList.add('flap');
}, 1800);

setInterval(()=>{
  renderKpis(); renderTimeline(); renderTicker(); renderFids();
  if(leafMap) leafMap.invalidateSize();
  showToast('● TABLERO ACTUALIZADO · ' + new Date().toLocaleTimeString('es-MX'));
}, 15000);

window.addEventListener('resize', ()=>{ if(leafMap) leafMap.invalidateSize(); });

setTimeout(()=>{
  document.getElementById('boot').classList.add('hide');
  setTimeout(()=>document.getElementById('boot').remove(), 500);
  render();
}, 1600);
