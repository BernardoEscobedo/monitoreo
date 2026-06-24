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
  "Finca Marbella":          {lat:14.901,lng:-92.258,ciudad:"Tapachula, Chis"},
  "Finca La Ceiba":          {lat:15.022,lng:-92.384,ciudad:"Huehuetán, Chis"},
  "Finca Doña Nelly":        {lat:15.030,lng:-92.381,ciudad:"Huehuetán, Chis"},
  "Preenfriado Doña Nelly":  {lat:15.030,lng:-92.381,ciudad:"Huehuetán, Chis"},
  "Finca Fortaleza":         {lat:14.864,lng:-92.461,ciudad:"Mazatán, Chis"},
  "Preenfriado Fortaleza":   {lat:14.864,lng:-92.461,ciudad:"Mazatán, Chis"},
  "Finca Génesis":           {lat:17.547,lng:-92.952,ciudad:"Teapa, Tab"},
  "Finca Genesis":           {lat:17.547,lng:-92.952,ciudad:"Teapa, Tab"},
  "Finca Tembladera":        {lat:17.505,lng:-92.890,ciudad:"Huimanguillo, Tab"},
  "Finca Candelaria":        {lat:17.505,lng:-92.890,ciudad:"Huimanguillo, Tab"},
  "Finca Plantación":        {lat:14.920,lng:-92.300,ciudad:"Tapachula, Chis"},
  "Finca Lisboa":            {lat:14.945,lng:-92.310,ciudad:"Tapachula, Chis"},
  "Finca Mazatán":           {lat:14.864,lng:-92.461,ciudad:"Mazatán, Chis"},
  "Preenfriado La Rifrut":   {lat:19.119,lng:-103.870,ciudad:"Tecomán, Colima"},
  "Preenfriado Zarzamora":   {lat:19.090,lng:-103.920,ciudad:"Colima"},
  "Preenfriado Ochoa CEDIS": {lat:19.100,lng:-103.900,ciudad:"Colima"},
};
const DESTINOS_GEO = {
  "EXPORTACIÓN USA":    {lat:27.498,lng:-99.507, ciudad:"Nuevo Laredo · Frontera USA"},
  "EXPORTACIÓN Japón":  {lat:19.054,lng:-104.316,ciudad:"Manzanillo · Puerto Japón"},
  "WM VSA":             {lat:19.179,lng:-96.135, ciudad:"WM Veracruz"},
  "WM QRO":             {lat:20.588,lng:-100.388,ciudad:"WM Querétaro"},
  "WM GDL":             {lat:20.659,lng:-103.349,ciudad:"WM Guadalajara"},
  "WM MTY":             {lat:25.686,lng:-100.316,ciudad:"WM Monterrey"},
  "WM CLN":             {lat:18.916,lng:-103.877,ciudad:"WM Colima"},
  "WM SMO":             {lat:26.982,lng:-109.929,ciudad:"WM Los Mochis"},
  "WM CDMX (Chalco)":  {lat:19.261,lng:-98.904, ciudad:"WM Chalco · CDMX"},
  "WM QRO":             {lat:20.588,lng:-100.388,ciudad:"WM Querétaro"},
  "S-MART S-MTY":       {lat:25.686,lng:-100.316,ciudad:"S-Mart Monterrey"},
  "S-MART Cd Juárez":   {lat:31.690,lng:-106.424,ciudad:"S-Mart Cd. Juárez"},
  "CEDIS CEDA":         {lat:19.371,lng:-99.094, ciudad:"CEDA · CDMX"},
  "CEDA Zumpango":      {lat:19.793,lng:-99.099, ciudad:"CEDA Zumpango"},
  "Chihuahua":          {lat:28.636,lng:-106.089,ciudad:"Chihuahua"},
};
function matchOrigen(nm){
  if(!nm) return null;
  if(ORIGENES_GEO[nm]) return ORIGENES_GEO[nm];
  const up = nm.toUpperCase();
  for(const k in ORIGENES_GEO){
    if(up.includes(k.toUpperCase()) || k.toUpperCase().includes(up)) return ORIGENES_GEO[k];
  }
  // fallback por keywords
  if(/MARBELLA/i.test(nm))           return ORIGENES_GEO["Finca Marbella"];
  if(/CEIBA/i.test(nm))              return ORIGENES_GEO["Finca La Ceiba"];
  if(/NELLY/i.test(nm))              return ORIGENES_GEO["Preenfriado Doña Nelly"];
  if(/FORTALEZA/i.test(nm))          return ORIGENES_GEO["Preenfriado Fortaleza"];
  if(/GENESIS|GÉNESIS/i.test(nm))    return ORIGENES_GEO["Finca Génesis"];
  if(/TEMBLADERA/i.test(nm))         return ORIGENES_GEO["Finca Tembladera"];
  if(/CANDELARIA/i.test(nm))         return ORIGENES_GEO["Finca Candelaria"];
  if(/PLANTACI/i.test(nm))           return ORIGENES_GEO["Finca Plantación"];
  if(/LISBOA/i.test(nm))             return ORIGENES_GEO["Finca Lisboa"];
  if(/MAZAT[AÁ]N/i.test(nm))         return ORIGENES_GEO["Finca Mazatán"];
  if(/RIFRUT|LARIFRUT/i.test(nm))    return ORIGENES_GEO["Preenfriado La Rifrut"];
  if(/ZARZAMORA/i.test(nm))          return ORIGENES_GEO["Preenfriado Zarzamora"];
  if(/OCHOA/i.test(nm))              return ORIGENES_GEO["Preenfriado Ochoa CEDIS"];
  // Fincas Colima y Tabasco sin nombre específico → centroide de zona
  if(/colima/i.test(nm))             return {lat:19.100,lng:-103.900,ciudad:"Colima"};
  if(/tabasco/i.test(nm))            return {lat:17.547,lng:-92.952, ciudad:"Tabasco"};
  if(/chiapas/i.test(nm))            return {lat:14.901,lng:-92.258, ciudad:"Chiapas"};
  return null;
}
function matchDestino(nm){
  if(!nm) return null;
  if(DESTINOS_GEO[nm]) return DESTINOS_GEO[nm];
  for(const k in DESTINOS_GEO){
    if(nm.toUpperCase().includes(k.toUpperCase())) return DESTINOS_GEO[k];
  }
  if(/USA|EUA|EXPORT.*US|MC.*ALLEN|ALLEN/i.test(nm)) return DESTINOS_GEO["EXPORTACIÓN USA"];
  if(/JAPON|JAPÓN|KODAWARI|MAR$/i.test(nm)) return DESTINOS_GEO["EXPORTACIÓN Japón"];
  if(/QRO|QUER/i.test(nm)) return DESTINOS_GEO["WM QRO"];
  if(/VSA|VERAC/i.test(nm)) return DESTINOS_GEO["WM VSA"];
  if(/GDL|GUADAL/i.test(nm)) return DESTINOS_GEO["WM GDL"];
  if(/^WM\s*MTY|^WM\s*MONTERREY/i.test(nm)) return DESTINOS_GEO["WM MTY"];
  if(/S-MART.*MTY|SMART.*MTY/i.test(nm)) return DESTINOS_GEO["S-MART S-MTY"];
  if(/CLN|COLIMA/i.test(nm)) return DESTINOS_GEO["WM CLN"];
  if(/SMO|MOCHIS/i.test(nm)) return DESTINOS_GEO["WM SMO"];
  if(/JUAR|JUÁREZ/i.test(nm)) return DESTINOS_GEO["S-MART Cd Juárez"];
  if(/CEDA|CDMX|CEDIS|TULTITLAN|CHALCO|ZUMPANGO|SORIANA/i.test(nm)) return DESTINOS_GEO["CEDIS CEDA"];
  if(/CHIHUAHUA/i.test(nm)) return DESTINOS_GEO["Chihuahua"];
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

// ── MAPEO: columnas reales de monitoreo.xlsx → campos del dashboard ──────────
function excelTsFecha(val){
  // Convierte serial Excel o Timestamp JS → "DD/MM/YYYY"
  if(!val && val !== 0) return "";
  if(typeof val === 'number' && val > 30000){
    const dt = new Date((val - 25569) * 86400 * 1000);
    return `${String(dt.getDate()).padStart(2,'0')}/${String(dt.getMonth()+1).padStart(2,'0')}/${dt.getFullYear()}`;
  }
  if(val instanceof Date || (typeof val === 'object' && val.getFullYear)){
    const dt = val;
    return `${String(dt.getDate()).padStart(2,'0')}/${String(dt.getMonth()+1).padStart(2,'0')}/${dt.getFullYear()}`;
  }
  return String(val).trim();
}

function excelTsHora(val){
  // Convierte fracción de día, Date, o serial con hora → "HH:MM"
  if(!val && val !== 0) return "";
  if(typeof val === 'number'){
    const frac = val % 1;
    if(frac > 0){
      const totMin = Math.round(frac * 1440);
      return `${String(Math.floor(totMin/60)).padStart(2,'0')}:${String(totMin%60).padStart(2,'0')}`;
    }
    return "";
  }
  if(val instanceof Date || (typeof val === 'object' && val.getHours)){
    return `${String(val.getHours()).padStart(2,'0')}:${String(val.getMinutes()).padStart(2,'0')}`;
  }
  // time string "HH:MM:SS"
  const s = String(val).trim();
  if(/^\d{1,2}:\d{2}/.test(s)) return s.slice(0,5);
  return s;
}

// Código de preenfriado → nombre legible de almacén
const PREENFRIO_NM = {
  'CP_CHI_NELLY':    'Preenfriado Doña Nelly',
  'CP_CHI_FORTALEZA':'Preenfriado Fortaleza',
  'CP_LARIFRUT':     'Preenfriado La Rifrut',
  'CP_ZARZAMORA':    'Preenfriado Zarzamora',
  'CP_OCHOA_CEDIS':  'Preenfriado Ochoa CEDIS',
};

function resolveAlmacen(preenfrio, finca, zona){
  const p = String(preenfrio||"").trim().toUpperCase();
  const f = String(finca||"").trim();
  const z = String(zona||"").trim();
  if(PREENFRIO_NM[p]) return PREENFRIO_NM[p];
  // Derivar de FINCA (código + nombre)
  if(/MARBELLA/i.test(f))    return 'Finca Marbella';
  if(/CEIBA/i.test(f))       return 'Finca La Ceiba';
  if(/NELLY/i.test(f))       return 'Finca Doña Nelly';
  if(/FORTALEZA/i.test(f))   return 'Finca Fortaleza';
  if(/PLANTACI/i.test(f))    return 'Finca Plantación';
  if(/LISBOA/i.test(f))      return 'Finca Lisboa';
  if(/MAZATAN|MAZATÁN/i.test(f)) return 'Finca Mazatán';
  if(/GENESIS|GÉNESIS/i.test(f)) return 'Finca Génesis';
  if(/TEMBLADERA/i.test(f))  return 'Finca Tembladera';
  if(/CANDELARIA/i.test(f))  return 'Finca Candelaria';
  if(f) return `${z ? z+' · ' : ''}${f}`;
  return z || '—';
}

function resolveDestino(cedis, cliente){
  const c = String(cedis||"").trim();
  const cl = String(cliente||"").trim();
  if(/jap[oó]n?/i.test(c) || cl === 'Mar') return 'EXPORTACIÓN Japón';
  if(/mc\s*allen|allen/i.test(c))           return 'EXPORTACIÓN USA';
  if(/cd\s*ju[aá]rez|ju[aá]rez/i.test(c))  return 'S-MART Cd Juárez';
  if(/^S-MTY$/i.test(c))                    return 'S-MART S-MTY';
  if(/^VSA$/i.test(c))                      return 'WM VSA';
  if(/^MTY$/i.test(c))                      return 'WM MTY';
  if(/^GDL$/i.test(c))                      return 'WM GDL';
  if(/^CLN$/i.test(c))                      return 'WM CLN';
  if(/^SMO$/i.test(c))                      return 'WM SMO';
  if(/^QRO$/i.test(c))                      return 'WM QRO';
  if(/^CHALCO$/i.test(c))                   return 'WM CDMX (Chalco)';
  if(/^ZUMPANGO$/i.test(c))                 return 'CEDA Zumpango';
  if(/tultitl[aá]n|chalco|ceda|cdmx/i.test(c) || /CEDA/i.test(cl) || /soriana/i.test(cl)) return 'CEDIS CEDA';
  if(/chihuahua/i.test(c))                  return 'Chihuahua';
  if(/rechazo/i.test(c))                    return `RECHAZO (${cl})`;
  if(/local/i.test(c))                      return `LOCAL (${cl})`;
  return cl ? `${c} · ${cl}` : c;
}

// ── NOMBRE DEL EXCEL EN SHAREPOINT ───────────────────────────────────────────
// Debe estar en la MISMA carpeta que index.html dentro de la biblioteca.
// Si lo cambias de nombre, actualiza sólo esta línea:
const EXCEL_FILENAME = "monitoreo.xlsx";

// ── GETTER robusto por nombre de columna (case/trim insensible) ───────────────
function mkGetter(row){
  const norm = {};
  for(const k of Object.keys(row)) norm[k.toLowerCase().trim()] = row[k];
  return (...ks) => {
    for(const k of ks){
      const v = norm[k.toLowerCase().trim()];
      if(v !== undefined && v !== null && v !== "") return v;
    }
    return "";
  };
}

// ── PARSER COMPARTIDO: ArrayBuffer → DATA_RAW ────────────────────────────────
function parseExcelBuffer(buffer){
  const wb = XLSX.read(buffer, {type:'array', cellDates:true});
  const ws = wb.Sheets[wb.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json(ws, {defval:"", raw:false});

  const raw = json.map(row=>{
    const get = mkGetter(row);

    // FECHA y HORA: de "FECHA Y HORA DE SALIDA REAL"
    const tsReal = get("fecha y hora de salida real");
    const fecha  = excelTsFecha(tsReal);
    let hora = "";
    if(tsReal instanceof Date){
      hora = `${String(tsReal.getHours()).padStart(2,'0')}:${String(tsReal.getMinutes()).padStart(2,'0')}`;
    } else {
      hora = excelTsHora(get("hora cita","hora"));
    }

    const folio         = String(get("oc flete","oc_flete","folio","no. embarque","no embarque")||"").trim();
    const almacen       = resolveAlmacen(get("preenfrio","eco - bodega","eco-bodega"), get("finca"), get("zona"));
    const destino       = resolveDestino(get("cedis"), get("cliente"));
    const transportista = String(get("linea","transportista","operador")||"").trim();
    const esExp         = /export|usa|jap[oó]n|allen/i.test(destino);
    const unidad        = esExp ? "Full" : "53 Pies";
    const cajas         = 1;   // cada OC FLETE = 1 unidad en tránsito
    const calidad       = String(get("nivel de servicio")||"").trim() || "—";
    const producto      = String(get("observaciones","incidencia o comentarios","estatus")||"").trim() || "—";

    return { fecha, folio, almacen, destino, transportista, unidad, hora, cajas, calidad, producto };
  }).filter(r => r.folio && r.folio !== "NaN");

  // Deduplicar por folio
  const map = {};
  raw.forEach(r=>{ if(!map[r.folio]) map[r.folio] = {...r}; });
  return Object.values(map);
}

// ── CARGA AUTOMÁTICA DESDE SHAREPOINT (fetch por URL relativa) ───────────────
// Agrega ?t=... para evitar caché del navegador/SharePoint en cada refresh.
async function cargarExcelAuto(silencioso = false){
  try {
    const url = `${EXCEL_FILENAME}?t=${Date.now()}`;
    const resp = await fetch(url, {cache: "no-store"});
    if(!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const buffer = await resp.arrayBuffer();
    const parsed = parseExcelBuffer(new Uint8Array(buffer));
    if(parsed.length === 0) throw new Error("Sin registros válidos");
    DATA_RAW = parsed;
    render();
    const td = todayData();
    if(!silencioso){
      showToast(`● DATOS ACTUALIZADOS · ${DATA_RAW.length} UNIDADES · ${td.length} HOY`);
    }
    console.log(`[monitoreo] Excel cargado: ${DATA_RAW.length} registros, ${td.length} hoy`);
  } catch(err){
    console.warn('[monitoreo] No se pudo cargar el Excel automáticamente:', err.message);
    // Si falla el fetch (ej. abriendo file:// localmente), el DEMO sigue activo
    // y el usuario puede cargar manualmente con el botón de archivo.
  }
}

// ── CARGA MANUAL (botón de archivo — respaldo y uso local) ───────────────────
$('fileInp').addEventListener('change', e=>{
  const f = e.target.files[0]; if(!f) return;
  const reader = new FileReader();
  reader.onload = ev=>{
    try {
      const parsed = parseExcelBuffer(new Uint8Array(ev.target.result));
      if(parsed.length === 0) throw new Error("Sin registros válidos");
      DATA_RAW = parsed;
      render();
      const td = todayData();
      showToast(`✓ ${DATA_RAW.length} UNIDADES CARGADAS · ${td.length} HOY`);
    } catch(err){
      console.error('[monitoreo] Error leyendo Excel manual:', err);
      showToast('✗ ERROR AL LEER EL ARCHIVO — VERIFICA QUE SEA .XLSX VÁLIDO');
    }
  };
  reader.readAsArrayBuffer(f);
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

// Auto-refresh visual cada 15 s (KPIs, ticker, tabla)
setInterval(()=>{
  renderKpis(); renderTimeline(); renderTicker(); renderFids();
  if(leafMap) leafMap.invalidateSize();
  showToast('● TABLERO ACTUALIZADO · ' + new Date().toLocaleTimeString('es-MX'));
}, 15000);

// Re-carga el Excel desde SharePoint cada 5 minutos para reflejar cambios
const REFRESH_EXCEL_MS = 5 * 60 * 1000; // 5 min — ajusta si lo necesitas más frecuente
setInterval(()=>{ cargarExcelAuto(true); }, REFRESH_EXCEL_MS);

window.addEventListener('resize', ()=>{ if(leafMap) leafMap.invalidateSize(); });

// ARRANQUE: intenta cargar el Excel automáticamente; si falla, usa el DEMO
setTimeout(async ()=>{
  document.getElementById('boot').classList.add('hide');
  setTimeout(()=>document.getElementById('boot').remove(), 500);
  await cargarExcelAuto(false);   // carga el Excel de SharePoint
  // Si cargarExcelAuto() falla silenciosamente, render() con DEMO ya está activo
  if(DATA_RAW === DEMO.slice() || DATA_RAW.length === 0){
    DATA_RAW = DEMO.slice();
    render();
  }
}, 1600);