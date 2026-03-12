// ─── COMPONENT DATA ───────────────────────────────────────────
const CATS = {
  cpu:{label:'Processor',icon:'🔲',color:'#00f0ff',rgb:'0,240,255',slot:0},
  bat:{label:'Battery',  icon:'🔋',color:'#39ff6e',rgb:'57,255,110',slot:1},
  cam:{label:'Camera',   icon:'📷',color:'#c77dff',rgb:'199,125,255',slot:2},
  dsp:{label:'Display',  icon:'🖥',color:'#ffb830',rgb:'255,184,48',slot:3},
  spk:{label:'Speaker',  icon:'🔊',color:'#ff6bae',rgb:'255,107,174',slot:4},
  chg:{label:'Charging', icon:'⚡',color:'#64dfdf',rgb:'100,223,223',slot:5},
};

const COMPONENTS = {
  cpu:[
    {id:'sd8g3', name:'Snapdragon 8 Gen 3', spec:'4nm · 3.3GHz · Adreno 750',    power:8,   tier:'flagship', tag:'8W',   tagCls:'tag-r', vis:'cpu', brand:'QC'},
    {id:'sd8g2', name:'Snapdragon 8 Gen 2', spec:'4nm · 3.2GHz · Adreno 740',    power:7,   tier:'flagship', tag:'7W',   tagCls:'tag-r', vis:'cpu', brand:'QC'},
    {id:'a17p',  name:'Apple A17 Pro',       spec:'3nm · 3.78GHz · 6-core GPU',   power:6,   tier:'flagship', tag:'6W',   tagCls:'tag-r', vis:'cpu', brand:'AP'},
    {id:'d9300', name:'Dimensity 9300',      spec:'4nm · 3.25GHz · Immortalis G720',power:7.5,tier:'flagship', tag:'7.5W', tagCls:'tag-r', vis:'cpu', brand:'MT'},
    {id:'d9200', name:'Dimensity 9200+',     spec:'4nm · 3.05GHz · Immortalis G715',power:6.5,tier:'flagship', tag:'6.5W', tagCls:'tag-a', vis:'cpu', brand:'MT'},
    {id:'d8200', name:'Dimensity 8200',      spec:'5nm · 3.1GHz · Mali-G610',     power:5.5, tier:'mid',      tag:'5.5W', tagCls:'tag-a', vis:'cpu', brand:'MT'},
    {id:'hg99',  name:'Helio G99',           spec:'6nm · 2.2GHz · Mali-G57 MC2',  power:4,   tier:'mid',      tag:'4W',   tagCls:'tag-g', vis:'cpu', brand:'HG'},
    {id:'hg96',  name:'Helio G96',           spec:'12nm · 2.05GHz · Mali-G57',    power:3.5, tier:'mid',      tag:'3.5W', tagCls:'tag-g', vis:'cpu', brand:'HG'},
    {id:'hg90t', name:'Helio G90T',          spec:'12nm · 2.05GHz · Mali-G76',    power:3.2, tier:'mid',      tag:'3.2W', tagCls:'tag-g', vis:'cpu', brand:'HG'},
    {id:'sd695', name:'Snapdragon 695 5G',   spec:'6nm · 2.2GHz · Adreno 619',    power:4,   tier:'mid',      tag:'4W',   tagCls:'tag-g', vis:'cpu', brand:'QC'},
    {id:'sd680', name:'Snapdragon 680',      spec:'6nm · 2.4GHz · Adreno 610',    power:3,   tier:'budget',   tag:'3W',   tagCls:'tag-g', vis:'cpu', brand:'QC'},
    {id:'ex2400',name:'Exynos 2400',         spec:'4nm · 3.2GHz · Xclipse 940',   power:7,   tier:'flagship', tag:'7W',   tagCls:'tag-r', vis:'cpu', brand:'SS'},
    {id:'k9000s',name:'Kirin 9000S',         spec:'7nm · 2.62GHz · Maleoon 910',  power:6,   tier:'flagship', tag:'6W',   tagCls:'tag-r', vis:'cpu', brand:'HW'},
    {id:'uniso', name:'Unisoc T618',         spec:'12nm · 2.0GHz · Mali-G52',     power:2.5, tier:'budget',   tag:'2.5W', tagCls:'tag-g', vis:'cpu', brand:'US'},
  ],
  bat:[
    {id:'b6000sc',name:'6000mAh Silicon-Carbon',spec:'4.48V · 100W + 50W wireless', power:0, cap:6000, volt:4.48, tag:'6K',  tagCls:'tag-g'},
    {id:'b5500',  name:'5500mAh Li-Po',          spec:'4.45V · 120W + 50W wireless', power:0, cap:5500, volt:4.45, tag:'5.5K',tagCls:'tag-g'},
    {id:'b5000',  name:'5000mAh Li-Po',          spec:'4.45V · 65W + 15W wireless',  power:0, cap:5000, volt:4.45, tag:'5K',  tagCls:'tag-g'},
    {id:'b4800',  name:'4800mAh Li-Ion',         spec:'4.40V · 45W + 10W wireless',  power:0, cap:4800, volt:4.40, tag:'4.8K',tagCls:'tag-a'},
    {id:'b4500',  name:'4500mAh Li-Ion',         spec:'4.35V · 33W wired only',      power:0, cap:4500, volt:4.35, tag:'4.5K',tagCls:'tag-a'},
    {id:'b4000',  name:'4000mAh Li-Ion',         spec:'4.35V · 25W wired only',      power:0, cap:4000, volt:4.35, tag:'4K',  tagCls:'tag-a'},
    {id:'b3500',  name:'3500mAh Li-Ion',         spec:'4.20V · 18W wired only',      power:0, cap:3500, volt:4.20, tag:'3.5K',tagCls:'tag-r'},
  ],
  cam:[
    {id:'c200p', name:'200MP Periscope Quad', spec:'10x optical · f/2.8 · OIS · Laser AF',  power:3.0, tag:'3W',   tagCls:'tag-r'},
    {id:'c200s', name:'200MP ISOCELL HP9',    spec:'8x optical · f/1.7 · OIS · 8K video',   power:2.8, tag:'2.8W', tagCls:'tag-r'},
    {id:'c108',  name:'108MP Triple Rear',    spec:'5x optical · f/1.9 · OIS · 4K60fps',    power:2.2, tag:'2.2W', tagCls:'tag-a'},
    {id:'c64p',  name:'64MP Pro Dual',        spec:'4x optical · f/1.8 · OIS · 4K30fps',    power:1.8, tag:'1.8W', tagCls:'tag-a'},
    {id:'c50u',  name:'50MP Ultra Pro',       spec:'4x optical · f/1.75 · OIS · 4K30fps',   power:2.0, tag:'2W',   tagCls:'tag-a'},
    {id:'c48',   name:'48MP Standard Dual',   spec:'3x optical · f/2.2 · EIS · 1080p',      power:1.5, tag:'1.5W', tagCls:'tag-g'},
    {id:'c32',   name:'32MP Wide Single',     spec:'2x digital · f/2.4 · 1080p30',          power:1.2, tag:'1.2W', tagCls:'tag-g'},
    {id:'c13',   name:'13MP Basic',           spec:'Fixed focus · f/2.2 · 1080p',           power:0.8, tag:'0.8W', tagCls:'tag-g'},
  ],
  dsp:[
    {id:'d4k',   name:'6.8" LTPO AMOLED 4K', spec:'1–144Hz · 2800 nits · 1440×3200',power:4.2, tag:'4.2W',tagCls:'tag-r'},
    {id:'d2k',   name:'6.7" AMOLED 2K',      spec:'120Hz · 2000 nits · 1440×3088',  power:3.0, tag:'3W',  tagCls:'tag-a'},
    {id:'dfhd',  name:'6.6" OLED FHD+',      spec:'120Hz · 1600 nits · 1080×2400',  power:2.5, tag:'2.5W',tagCls:'tag-a'},
    {id:'dlcd',  name:'6.5" IPS LCD FHD+',   spec:'90Hz · 700 nits · 1080×2340',    power:1.8, tag:'1.8W',tagCls:'tag-g'},
    {id:'dhd',   name:'6.4" IPS LCD HD+',    spec:'60Hz · 500 nits · 720×1600',     power:1.2, tag:'1.2W',tagCls:'tag-g'},
    {id:'dmin',  name:'5.8" AMOLED FHD',     spec:'60Hz · 800 nits · 1080×2340',    power:2.0, tag:'2W',  tagCls:'tag-a'},
  ],
  spk:[
    {id:'sqd',  name:'Quad Speaker Dolby Atmos',  spec:'Hi-Res · 24-bit · Harman Kardon',power:2.5, tag:'2.5W',tagCls:'tag-a'},
    {id:'sshi', name:'Dual Stereo Hi-Fi B&O',     spec:'Dolby · B&O tuning · Hi-Res Audio',power:2.0, tag:'2W', tagCls:'tag-a'},
    {id:'sdts', name:'Dual Stereo DTS:X',         spec:'DTS:X Ultra · 16-bit · Stereo',   power:1.5, tag:'1.5W',tagCls:'tag-g'},
    {id:'sste', name:'Dual Stereo Standard',      spec:'Stereo speakers · AAC codec',      power:1.0, tag:'1W', tagCls:'tag-g'},
    {id:'smono',name:'Single Loud Speaker',       spec:'Bottom-firing mono · Basic',        power:0.8, tag:'0.8W',tagCls:'tag-g'},
  ],
  chg:[
    {id:'g240', name:'HyperCharge 240W',   spec:'Wired + 50W wireless · USB-C 3.2', power:0, tag:'240W', tagCls:'tag-c'},
    {id:'g120', name:'MagSafe 120W',       spec:'Wired + 30W wireless · USB-C 3.1', power:0, tag:'120W', tagCls:'tag-c'},
    {id:'g67',  name:'TurboCharge 67W',    spec:'Wired only · USB-C 2.0 · PD 3.0', power:0, tag:'67W',  tagCls:'tag-a'},
    {id:'g45',  name:'SuperCharge 45W',    spec:'Wired only · USB-C · PD 3.0',     power:0, tag:'45W',  tagCls:'tag-a'},
    {id:'g33',  name:'QuickCharge 33W',    spec:'Wired · QC 4+ · USB-C',           power:0, tag:'33W',  tagCls:'tag-g'},
    {id:'g18',  name:'Standard 18W',       spec:'Wired · USB-C 2.0 · PD 2.0',     power:0, tag:'18W',  tagCls:'tag-g'},
    {id:'g10',  name:'Basic 10W',          spec:'Wired · Micro-USB · 5V/2A',       power:0, tag:'10W',  tagCls:'tag-g'},
  ],
};

// State
const SEL = {cpu:null, bat:null, cam:null, dsp:null, chg:null, spk:null};
let currentCat = 'cpu';
let logEntries = [];

// Tag color classes
const TAG_CSS = {
  'tag-r':'background:var(--red2);color:var(--red);',
  'tag-a':'background:var(--amber2);color:var(--amber);',
  'tag-g':'background:var(--green2);color:var(--green);',
  'tag-c':'background:var(--cyan2);color:var(--cyan);',
  'tag-p':'background:var(--purple2);color:var(--purple);',
};

// ─── RENDER COMPONENT VISUAL ─────────────────────────────────
function renderVis(cat, item) {
  if (cat === 'cpu') {
    const pins = [];
    // generate pins on 4 sides
    for(let i=0;i<5;i++){
      pins.push(`<div class="cpu-pin" style="left:${4+i*8}px;top:1px;width:4px;height:2px;"></div>`);
      pins.push(`<div class="cpu-pin" style="left:${4+i*8}px;bottom:1px;width:4px;height:2px;"></div>`);
      pins.push(`<div class="cpu-pin" style="top:${4+i*8}px;left:1px;width:2px;height:4px;"></div>`);
      pins.push(`<div class="cpu-pin" style="top:${4+i*8}px;right:1px;width:2px;height:4px;"></div>`);
    }
    return `<div class="comp-vis vis-cpu">
      <div class="cpu-pins">${pins.join('')}</div>
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:5;">
        <span style="font-family:'Share Tech Mono',monospace;font-size:0.55rem;font-weight:700;color:rgba(100,160,255,0.8);letter-spacing:-0.02em;">${item.brand||'CPU'}</span>
      </div>
    </div>`;
  }
  if (cat === 'bat') {
    const capPct = Math.round((item.cap||4000)/6000*100);
    const fills = [100, Math.min(100,capPct+15), Math.min(100,capPct), Math.max(20,capPct-20)];
    return `<div class="comp-vis vis-bat">
      ${fills.map((w,i)=>`<div class="bat-cell" style="width:${32+i*2}px;">
        <div style="position:absolute;left:0;top:0;bottom:0;width:${w}%;background:rgba(57,255,110,${0.2+i*0.08});border-radius:1px;"></div>
      </div>`).join('')}
      <div style="font-family:'Share Tech Mono',monospace;font-size:0.45rem;color:rgba(57,255,110,0.5);margin-top:1px;">${item.cap||'?'}mAh</div>
    </div>`;
  }
  if (cat === 'cam') {
    const isBig = item.id.startsWith('c200') || item.id === 'c108';
    return `<div class="comp-vis vis-cam">
      <div class="cam-ring" style="width:${isBig?30:24}px;height:${isBig?30:24}px;">
        <div class="cam-iris" style="width:${isBig?20:16}px;height:${isBig?20:16}px;">
          <div class="cam-shine"></div>
        </div>
      </div>
      ${isBig ? `<div style="display:flex;gap:3px;">
        <div class="cam-ring" style="width:14px;height:14px;"><div class="cam-iris" style="width:8px;height:8px;"></div></div>
        <div class="cam-ring" style="width:12px;height:12px;"><div class="cam-iris" style="width:7px;height:7px;"></div></div>
      </div>` : ''}
    </div>`;
  }
  if (cat === 'dsp') {
    return `<div class="comp-vis vis-dsp">
      <div class="dsp-screen">
        <div class="dsp-pixel-grid"></div>
        <div class="dsp-notch"></div>
        <div style="position:absolute;inset:8px 6px 4px;display:flex;flex-direction:column;gap:2px;">
          ${[70,55,40,55,30].map(w=>`<div style="height:2px;width:${w}%;background:rgba(0,240,255,0.15);border-radius:1px;"></div>`).join('')}
        </div>
      </div>
    </div>`;
  }
  if (cat === 'spk') {
    const bars = item.id==='sqd' ? [6,10,14,10,6,10,14,10,6] : [6,10,14,10,6];
    return `<div class="comp-vis vis-spk">
      ${bars.map((h,i)=>`<div class="spk-bar" style="height:${h}px;opacity:${0.4+i*0.06};"></div>`).join('')}
    </div>`;
  }
  if (cat === 'chg') {
    const watts = parseInt(item.tag)||18;
    const isWireless = watts >= 67;
    return `<div class="comp-vis vis-chg">
      <div class="chg-coil" style="border-color:rgba(100,223,223,${isWireless?0.5:0.2});">
        ${isWireless?`<div style="position:absolute;inset:-4px;border-radius:50%;border:1px solid rgba(100,223,223,0.1);"></div>`:''}
        <span class="chg-bolt">⚡</span>
      </div>
    </div>`;
  }
  return `<div class="comp-vis" style="background:var(--card);display:flex;align-items:center;justify-content:center;font-size:20px;">${CATS[cat].icon}</div>`;
}

// ─── RENDER LIST ─────────────────────────────────────────────
function renderList(cat) {
  const list = document.getElementById('comp-list');
  const items = COMPONENTS[cat] || [];
  list.innerHTML = items.map(item => {
    const isSel = SEL[cat] === item.id;
    const catColor = CATS[cat].color;
    const tagStyle = TAG_CSS[item.tagCls] || TAG_CSS['tag-g'];
    return `<div class="comp-item${isSel?' selected':''}"
      data-cat="${cat}" data-id="${item.id}"
      style="--sel-c:${catColor};"
      onclick="addComponent(this,'${cat}','${item.id}')">
      <div class="comp-sel-bar"></div>
      <div class="comp-inner">
        ${renderVis(cat, item)}
        <div class="comp-info">
          <div class="comp-name">${item.name}</div>
          <div class="comp-spec">${item.spec}</div>
        </div>
        <div class="comp-right">
          <span class="comp-tag" style="${tagStyle}">${item.tag}</span>
          ${item.power>0?`<span class="comp-watt">${item.power}W draw</span>`:''}
        </div>
      </div>
    </div>`;
  }).join('');
}

// ─── SWITCH TAB ──────────────────────────────────────────────
function switchTab(el, cat) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  currentCat = cat;
  renderList(cat);
}

// ─── PHONE SLOTS ─────────────────────────────────────────────
const SLOT_ORDER = ['cpu','bat','cam','dsp','spk','chg'];
const SLOT_ICONS = {cpu:'🔲',bat:'🔋',cam:'📷',dsp:'🖥',spk:'🔊',chg:'⚡'};
const SLOT_LABELS = {cpu:'PROCESSOR',bat:'BATTERY',cam:'CAMERA MODULE',dsp:'DISPLAY',spk:'AUDIO SYSTEM',chg:'CHARGING'};

function renderPhoneSlots() {
  const container = document.getElementById('phone-slots');
  container.innerHTML = SLOT_ORDER.map(cat => {
    const id = SEL[cat];
    const cat_data = CATS[cat];
    const comp = id ? COMPONENTS[cat].find(c=>c.id===id) : null;
    return `<div class="phone-slot${comp?' filled':''} slot-${cat}"
      id="slot-${cat}"
      style="${comp?`--slot-color:${cat_data.color};--slot-rgb:${cat_data.rgb};`:''}">
      ${comp
        ? `<div class="slot-dot" style="background:${cat_data.color};box-shadow:0 0 6px ${cat_data.color};"></div>
           <div style="flex:1;min-width:0;">
             <div class="slot-name" style="color:${cat_data.color};">${comp.name}</div>
             <div class="slot-sub">${SLOT_LABELS[cat]}</div>
           </div>
           ${comp.power?`<span style="font-family:'Share Tech Mono',monospace;font-size:0.45rem;color:rgba(255,255,255,0.25);">${comp.power}W</span>`:''}`
        : `<div class="slot-icon" style="opacity:0.3;">${SLOT_ICONS[cat]}</div>
           <span class="slot-label">${SLOT_LABELS[cat]}</span>`}
    </div>`;
  }).join('');
}

// ─── ADD COMPONENT (with animation) ──────────────────────────
function addComponent(cardEl, cat, id) {
  // Deselect same cat in list
  document.querySelectorAll(`.comp-item[data-cat="${cat}"]`).forEach(c => c.classList.remove('selected'));
  cardEl.classList.add('selected');

  SEL[cat] = id;

  // Get positions for animation
  const cardRect = cardEl.getBoundingClientRect();
  const slotEl   = document.getElementById('slot-'+cat);
  const slotRect  = slotEl ? slotEl.getBoundingClientRect() : null;

  // Create flying component
  if (slotRect) {
    flyComponent(cardEl, cardRect, slotRect, cat, id);
  } else {
    finishAdd(cat, id);
  }
}

function flyComponent(cardEl, fromRect, toRect, cat, id) {
  const catData = CATS[cat];
  const comp = COMPONENTS[cat].find(c=>c.id===id);
  if (!comp) return;

  // Clone the visual to fly
  const flyer = document.createElement('div');
  flyer.className = 'flying-comp';
  flyer.style.cssText = `
    width:${fromRect.width}px;height:${fromRect.height}px;
    left:${fromRect.left}px;top:${fromRect.top}px;
    background:var(--card);border:2px solid ${catData.color};
    box-shadow:0 0 30px ${catData.color}60, 0 8px 32px rgba(0,0,0,0.8);
    overflow:hidden;
  `;
  flyer.innerHTML = `<div style="display:flex;align-items:center;gap:8px;padding:8px 10px 8px 12px;">
    ${renderVis(cat, comp)}
    <div style="min-width:0;">
      <div style="font-size:0.78rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px;">${comp.name}</div>
      <div style="font-size:0.6rem;color:var(--muted);font-family:'Share Tech Mono',monospace;">${catData.label}</div>
    </div>
  </div>`;
  document.body.appendChild(flyer);

  // Animate with requestAnimationFrame
  const startX = fromRect.left;
  const startY = fromRect.top;
  const startW = fromRect.width;
  const startH = fromRect.height;
  const endX = toRect.left;
  const endY = toRect.top;
  const endW = toRect.width;
  const endH = toRect.height;
  const dur = 480;
  const start = performance.now();

  function easeOutBack(t){const c1=1.70158,c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);}
  function easeInOut(t){return t<0.5?2*t*t:(4-2*t)*t-1;}

  function step(now) {
    const t = Math.min(1, (now - start) / dur);
    const ease = t < 0.7 ? easeInOut(t/0.7) : 1;

    // arc motion
    const arcY = -120 * Math.sin(Math.PI * Math.min(t*1.4, 1));
    const cx = startX + (endX - startX) * ease;
    const cy = startY + (endY - startY) * ease + arcY * (1 - ease);
    const cw = startW + (endW - startW) * ease;
    const ch = startH + (endH - startH) * ease;
    const scale = 1 + 0.1 * Math.sin(Math.PI * t);

    flyer.style.left = cx + 'px';
    flyer.style.top  = cy + 'px';
    flyer.style.width = cw + 'px';
    flyer.style.height = ch + 'px';
    flyer.style.transform = `scale(${scale})`;
    flyer.style.opacity = t > 0.85 ? 1 - (t - 0.85) / 0.15 : 1;

    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      document.body.removeChild(flyer);
      // Sparks at destination
      spawnSparks(toRect.left + toRect.width/2, toRect.top + toRect.height/2, catData.color);
      // Slot ripple + fill
      finishAdd(cat, id);
    }
  }
  requestAnimationFrame(step);
}

function spawnSparks(cx, cy, color) {
  for (let i = 0; i < 10; i++) {
    const spark = document.createElement('div');
    spark.className = 'spark';
    const angle = (i / 10) * Math.PI * 2;
    const dist = 20 + Math.random() * 40;
    spark.style.cssText = `
      left:${cx}px;top:${cy}px;
      background:${color};
      box-shadow:0 0 4px ${color};
      --sx:${Math.cos(angle)*dist}px;
      --sy:${Math.sin(angle)*dist}px;
      animation-delay:${Math.random()*0.1}s;
    `;
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 800);
  }
}

function finishAdd(cat, id) {
  renderPhoneSlots();

  // Animate the slot
  const slotEl = document.getElementById('slot-'+cat);
  if (slotEl) {
    slotEl.classList.add('slot-filling');
    slotEl.classList.add('slot-ripple');
    setTimeout(() => {
      slotEl.classList.remove('slot-filling');
      slotEl.classList.remove('slot-ripple');
    }, 600);
  }

  addLog(cat, id);
  updateStats();
  updatePhoneGlow();
}

// ─── LOG ─────────────────────────────────────────────────────
function addLog(cat, id) {
  const comp = COMPONENTS[cat].find(c=>c.id===id);
  if (!comp) return;
  const catData = CATS[cat];
  const now = new Date();
  const ts = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;

  const entry = `<div class="log-entry">
    <span class="log-time">${ts}</span>
    <span class="log-icon">${catData.icon}</span>
    <div class="log-text">
      <strong style="color:${catData.color}">${comp.name}</strong>
      <div class="log-sub">${catData.label} · ${comp.tag} ${comp.power?`· ${comp.power}W draw`:''}</div>
    </div>
  </div>`;

  const log = document.getElementById('build-log');
  // Remove placeholder
  const placeholder = log.querySelector('div[style]');
  if (placeholder) placeholder.remove();

  log.insertAdjacentHTML('afterbegin', entry);
}

// ─── STATS ───────────────────────────────────────────────────
function updateStats() {
  const ids = Object.values(SEL).filter(Boolean);
  const count = ids.length;

  // Power
  let pow = 0;
  ids.forEach(id => {
    for (const cat in COMPONENTS) {
      const c = COMPONENTS[cat].find(x=>x.id===id);
      if (c) pow += c.power || 0;
    }
  });

  // Battery
  let batHrs = null;
  if (SEL.bat) {
    const b = COMPONENTS.bat.find(x=>x.id===SEL.bat);
    if (b && pow > 0) batHrs = (b.cap / 1000) * 3.7 / pow;
  }

  const powCol = pow > 18 ? 'var(--red)' : pow > 13 ? 'var(--amber)' : 'var(--cyan)';
  const batCol = !batHrs ? 'var(--muted)' : batHrs > 12 ? 'var(--green)' : batHrs > 6 ? 'var(--amber)' : 'var(--red)';

  const thermal = pow > 18 ? '🔴 CRITICAL' : pow > 14 ? '🟠 HIGH' : pow > 9 ? '🟡 MODERATE' : pow > 0 ? '🟢 LOW' : '—';
  const thermCol = pow > 18 ? 'var(--red)' : pow > 14 ? 'var(--red)' : pow > 9 ? 'var(--amber)' : 'var(--green)';

  // Profile
  let profile = 'Balanced';
  if (SEL.cpu && ['sd8g3','d9300','ex2400'].includes(SEL.cpu)) profile = 'Processor-Centric';
  if (SEL.cam && ['c200p','c200s'].includes(SEL.cam)) profile = 'Camera-Centric';
  if (SEL.bat && ['b6000sc','b5500'].includes(SEL.bat) && pow < 13) profile = 'Battery-Centric';
  if (SEL.dsp && SEL.dsp === 'd4k' && profile === 'Balanced') profile = 'Display-Centric';

  document.getElementById('st-pow').textContent = pow.toFixed(1)+'W';
  document.getElementById('st-pow').style.color = powCol;
  document.getElementById('st-bat').textContent = batHrs ? batHrs.toFixed(1)+'h' : '—';
  document.getElementById('st-bat').style.color = batCol;
  document.getElementById('st-therm').textContent = thermal;
  document.getElementById('st-therm').style.color = thermCol;
  document.getElementById('st-prof').textContent = profile;
  document.getElementById('st-prof').style.color = profile === 'Balanced' ? 'var(--muted)' : 'var(--cyan)';

  // Header
  document.getElementById('h-power').textContent = pow.toFixed(1)+'W';
  document.getElementById('h-power').style.color = powCol;
  document.getElementById('h-bat').textContent = batHrs ? batHrs.toFixed(1)+'h' : '—';
  document.getElementById('h-slots').textContent = `${count}/6`;
  document.getElementById('h-slots').style.color = count===6?'var(--green)':'var(--amber)';

  // Power fill in phone
  const pct = Math.min(100, pow / 25 * 100);
  const pf = document.getElementById('power-fill');
  pf.style.width = pct+'%';
  pf.style.background = pow > 18 ? 'var(--red)' : pow > 13 ? 'var(--amber)' : 'var(--green)';

  // Compat
  updateCompat(count, pow, batHrs);
}

function updateCompat(count, pow, batHrs) {
  const banner = document.getElementById('compat-banner');
  const center = document.getElementById('compat-center');

  if (count < 6) {
    banner.style.background='rgba(255,255,255,0.02)';banner.style.color='var(--muted)';
    banner.innerHTML='<span>⬜</span><span>Awaiting components...</span>';
    center.style.borderColor='var(--border)';center.style.background='var(--card)';center.style.color='var(--muted)';
    center.innerHTML='<span>⬜</span><span>Select all 6 components to validate</span>';
    return;
  }

  let icon,msg,bg,col;
  const volt = SEL.bat ? (COMPONENTS.bat.find(x=>x.id===SEL.bat)?.volt||0) : 0;
  if (!volt || volt < 4.35) {
    icon='⚠️';msg='WARNING — Battery voltage incompatible!';bg='var(--amber2)';col='var(--amber)';
  } else if (pow > 22) {
    icon='🔴';msg='INCOMPATIBLE — Thermal overload detected';bg='var(--red2)';col='var(--red)';
  } else if (pow > 16) {
    icon='🟡';msg='VALID — High thermal load, monitor temps';bg='var(--amber2)';col='var(--amber)';
  } else {
    icon='🟢';msg='COMPATIBLE — Optimal configuration!';bg='var(--green2)';col='var(--green)';
  }

  banner.style.background=bg;banner.style.color=col;
  banner.innerHTML=`<span>${icon}</span><span>${msg}</span>`;
  center.style.borderColor=col;center.style.background=bg;center.style.color=col;
  center.innerHTML=`<span>${icon}</span><span>${msg}</span>`;
}

function updatePhoneGlow() {
  const count = Object.values(SEL).filter(Boolean).length;
  document.getElementById('phone-chassis').classList.toggle('complete', count===6);
}

// ─── RESET ───────────────────────────────────────────────────
function resetAll() {
  Object.keys(SEL).forEach(k=>SEL[k]=null);
  document.querySelectorAll('.comp-item').forEach(c=>c.classList.remove('selected'));
  renderPhoneSlots();
  updateStats();
  updatePhoneGlow();
  document.getElementById('build-log').innerHTML='<div style="color:var(--muted);font-size:0.72rem;padding:8px;text-align:center;">Assembly log will appear here...</div>';
  showToast('⟳ Build reset');
}

// ─── SAVE / EXPORT ───────────────────────────────────────────
function saveConfig() {
  const count = Object.values(SEL).filter(Boolean).length;
  if (count < 6) { showToast('⚠ Select all 6 components first'); return; }
  showToast('✅ Configuration saved!');
  addLog('cpu', SEL.cpu); // re-confirm log
}

function exportReport() {
  const lines = Object.entries(SEL).map(([cat,id])=>{
    if (!id) return `  ${CATS[cat]?.label||cat}: —`;
    const comp = COMPONENTS[cat]?.find(c=>c.id===id);
    return `  ${(CATS[cat]?.label||cat).padEnd(14)} ${comp?.name||id} (${comp?.tag||''})`;
  });
  const pow = document.getElementById('st-pow').textContent;
  const bat = document.getElementById('st-bat').textContent;
  const prof = document.getElementById('st-prof').textContent;
  const txt = `SAMS Assembly Report\n${'═'.repeat(44)}\n\n${lines.join('\n')}\n\n${'─'.repeat(44)}\nPower Draw:   ${pow}\nBattery Life: ${bat}\nProfile:      ${prof}\nGenerated:    ${new Date().toLocaleString()}\nSAMS v3.0 · Node.js + Express + MySQL\n`;
  const a = Object.assign(document.createElement('a'),{href:URL.createObjectURL(new Blob([txt],{type:'text/plain'})),download:'SAMS_Build.txt'});
  a.click();
  showToast('📄 Report exported!');
}

// ─── TOAST ───────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(()=>t.classList.remove('show'), 2500);
}


// ─── FEEDBACK SYSTEM ─────────────────────────────────────────
let fbRating = 0;
let fbCat = '';
let fbMood = '';
let fbBuildAttached = true;
const fbSubmissions = [];

const STAR_LABELS = ['','😬 Poor','😕 Fair','😐 Okay','😊 Good','🤩 Excellent!'];

function openFeedback() {
  const overlay = document.getElementById('fb-overlay');
  overlay.style.display = 'flex';
  // Reset form
  document.getElementById('fb-step1').style.display = 'block';
  document.getElementById('fb-step2').style.display = 'none';
  document.getElementById('fb-msg').value = '';
  document.getElementById('fb-name').value = '';
  document.getElementById('fb-email').value = '';
  document.getElementById('char-count').textContent = '0 / 500';
  fbRating = 0; fbCat = ''; fbMood = '';
  document.querySelectorAll('.star').forEach(s => s.classList.remove('active','hover'));
  document.querySelectorAll('.fb-cat').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.fb-mood').forEach(m => m.classList.remove('selected'));
  document.getElementById('star-label').textContent = '';
  updateBuildPreview();
  // char counter
  document.getElementById('fb-msg').addEventListener('input', function() {
    const len = Math.min(500, this.value.length);
    this.value = this.value.slice(0, 500);
    document.getElementById('char-count').textContent = `${len} / 500`;
    document.getElementById('char-count').style.color = len > 400 ? 'var(--amber)' : 'var(--muted)';
  });
}

function closeFeedback(e) {
  if (e && e.target !== document.getElementById('fb-overlay')) return;
  document.getElementById('fb-overlay').style.display = 'none';
}

function rateStar(val) {
  fbRating = val;
  document.querySelectorAll('.star').forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.v) <= val);
    s.classList.remove('hover');
  });
  document.getElementById('star-label').textContent = STAR_LABELS[val] || '';
}

function hoverStar(val) {
  document.querySelectorAll('.star').forEach(s => {
    const v = parseInt(s.dataset.v);
    s.classList.toggle('hover', v <= val && v > fbRating);
    s.classList.toggle('active', v <= fbRating);
  });
}

function unhoverStar() {
  document.querySelectorAll('.star').forEach(s => {
    s.classList.remove('hover');
    s.classList.toggle('active', parseInt(s.dataset.v) <= fbRating);
  });
}

function selectCat(el) {
  document.querySelectorAll('.fb-cat').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  fbCat = el.dataset.c;
}

function selectMood(el) {
  document.querySelectorAll('.fb-mood').forEach(m => m.classList.remove('selected'));
  el.classList.add('selected');
  fbMood = el.dataset.m;
}

function toggleBuildInfo() {
  fbBuildAttached = !fbBuildAttached;
  const knob = document.getElementById('build-toggle-knob');
  const track = document.getElementById('build-toggle');
  const preview = document.getElementById('build-preview');
  knob.style.left = fbBuildAttached ? '14px' : '2px';
  track.style.background = fbBuildAttached ? 'var(--purple)' : 'var(--border2)';
  preview.style.display = fbBuildAttached ? 'block' : 'none';
  if (fbBuildAttached) updateBuildPreview();
}

function updateBuildPreview() {
  const content = document.getElementById('build-preview-content');
  const lines = Object.entries(SEL).map(([cat,id]) => {
    const comp = id ? COMPONENTS[cat]?.find(c=>c.id===id) : null;
    return `${(CATS[cat]?.label||cat).padEnd(12)} ${comp ? comp.name : '—'}`;
  });
  content.textContent = lines.join('\n');
}

function submitFeedback() {
  const msg = document.getElementById('fb-msg').value.trim();
  if (!msg) {
    document.getElementById('fb-msg').style.borderColor = 'var(--red)';
    document.getElementById('fb-msg').placeholder = '⚠ Message is required!';
    setTimeout(() => {
      document.getElementById('fb-msg').style.borderColor = 'var(--border2)';
      document.getElementById('fb-msg').placeholder = 'Tell us what you think...';
    }, 2000);
    return;
  }

  const entry = {
    id: fbSubmissions.length + 1,
    rating: fbRating,
    category: fbCat || 'General',
    mood: fbMood,
    message: msg,
    name: document.getElementById('fb-name').value.trim() || 'Anonymous',
    email: document.getElementById('fb-email').value.trim(),
    build: fbBuildAttached ? {...SEL} : null,
    time: new Date().toLocaleString(),
  };
  fbSubmissions.push(entry);

  // Show thank you
  document.getElementById('fb-step1').style.display = 'none';
  document.getElementById('fb-step2').style.display = 'block';

  const thanksIcons = ['🎉','🙌','💜','🚀','⭐'];
  document.getElementById('fb-thanks-icon').textContent = fbRating >= 4 ? '🎉' : fbRating >= 3 ? '🙏' : '💜';

  const thanksMsg = fbRating >= 4
    ? 'Amazing! Your kind words motivate us to build even better tools.'
    : fbRating >= 3
    ? 'Thanks! We\'ll use your input to improve the experience.'
    : 'Thank you for being honest. We\'ll work on addressing your concerns.';
  document.getElementById('fb-thanks-msg').textContent = thanksMsg;

  // Summary box
  const stars = fbRating > 0 ? '★'.repeat(fbRating) + '☆'.repeat(5-fbRating) : '—';
  document.getElementById('fb-summary-box').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:6px;font-size:0.72rem;font-family:'Share Tech Mono',monospace;">
      <div style="display:flex;justify-content:space-between;">
        <span style="color:var(--muted);">RATING</span>
        <span style="color:var(--amber);letter-spacing:0.05em;">${stars}</span>
      </div>
      ${fbCat ? `<div style="display:flex;justify-content:space-between;"><span style="color:var(--muted);">CATEGORY</span><span>${fbCat}</span></div>` : ''}
      ${fbMood ? `<div style="display:flex;justify-content:space-between;"><span style="color:var(--muted);">MOOD</span><span>${fbMood}</span></div>` : ''}
      <div style="border-top:1px solid var(--border);padding-top:6px;color:rgba(212,219,232,0.5);line-height:1.5;">"${msg.slice(0,100)}${msg.length>100?'…':''}"</div>
    </div>`;

  // Add to build log
  const log = document.getElementById('build-log');
  const placeholder = log.querySelector('[style*="text-align:center"]');
  if (placeholder) placeholder.remove();
  const now = new Date();
  const ts = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
  log.insertAdjacentHTML('afterbegin', `<div class="log-entry">
    <span class="log-time">${ts}</span>
    <span class="log-icon">💬</span>
    <div class="log-text">
      <strong style="color:var(--purple)">Feedback submitted</strong>
      <div class="log-sub">${fbCat || 'General'} · ${fbRating > 0 ? fbRating+'/5 stars' : 'No rating'}</div>
    </div>
  </div>`);

  showToast('💬 Feedback submitted — thank you!');
}

// ─── MOBILE FLOATING PHONE WIDGET ────────────────────────────
const CATS_ORDER = ['cpu','bat','cam','dsp','spk','chg'];

function isMobile(){ return window.innerWidth <= 768; }

/* Render mini phone slots */
function renderFloatingSlots(){
  if(!isMobile()) return;
  const fp = document.getElementById('fp-slots');
  if(!fp) return;
  fp.innerHTML = CATS_ORDER.map(cat => {
    const id = SEL[cat];
    const item = id ? COMPONENTS[cat]?.find(c=>c.id===id) : null;
    const catInfo = CATS[cat];
    if(!item) return `<div class="fp-slot">
      <div class="fp-slot-dot" style="background:rgba(255,255,255,0.08)"></div>
      <span class="fp-slot-name" style="color:rgba(255,255,255,0.15)">${catInfo.label}</span>
    </div>`;
    return `<div class="fp-slot filled" style="--fsc:${catInfo.color};--fsr:${catInfo.rgb}">
      <div class="fp-slot-dot" style="background:${catInfo.color};box-shadow:0 0 4px ${catInfo.color}"></div>
      <span class="fp-slot-name" style="color:${catInfo.color}">${item.name}</span>
    </div>`;
  }).join('');

  /* Update power fill */
  const filled = CATS_ORDER.filter(c=>SEL[c]).length;
  const wrap = document.getElementById('fp-phone-wrap');
  const chassis = document.getElementById('fp-chassis');
  if(wrap){ wrap.classList.toggle('has-comp', filled > 0); wrap.classList.toggle('complete', filled === 6); }
  if(chassis){ chassis.classList.toggle('complete', filled === 6); }
}

/* Sync pill stats */
function syncPillStats(){
  if(!isMobile()) return;
  const pow = document.getElementById('st-pow')?.textContent || '0.0W';
  const bat = document.getElementById('st-bat')?.textContent || '—';
  const slots = document.getElementById('h-slots')?.textContent || '0/6';
  const elp = document.getElementById('fp-pow'); if(elp) elp.textContent = pow;
  const elb = document.getElementById('fp-bat'); if(elb) elb.textContent = bat;
  const elc = document.getElementById('fp-slots-count'); if(elc) elc.textContent = slots;
  const pwFill = document.getElementById('fp-pwfill');
  const mainFill = document.getElementById('power-fill');
  if(pwFill && mainFill){ pwFill.style.width = mainFill.style.width; pwFill.style.background = mainFill.style.background; }
}

/* Sync drawer stats + log */
function syncDrawer(){
  if(!isMobile()) return;
  const ids = ['pow','bat','therm','prof'];
  const srcIds = ['st-pow','st-bat','st-therm','st-prof'];
  ids.forEach((id,i)=>{
    const src = document.getElementById(srcIds[i]);
    const dst = document.getElementById('drw-'+id);
    if(src && dst){ dst.textContent = src.textContent; dst.style.color = src.style.color; }
  });
  /* Compat */
  const srcCb = document.getElementById('compat-banner');
  const dstCb = document.getElementById('drw-compat');
  if(srcCb && dstCb){
    dstCb.innerHTML = srcCb.innerHTML;
    dstCb.style.background = srcCb.style.background;
    dstCb.style.color = srcCb.style.color;
  }
  /* Log */
  const srcLog = document.getElementById('build-log');
  const dstLog = document.getElementById('drw-log');
  if(srcLog && dstLog){ dstLog.innerHTML = srcLog.innerHTML; }
}

/* Drawer open/close */
function openDrawer(){
  if(!isMobile()) return;
  syncDrawer();
  document.getElementById('fp-drawer').classList.add('open');
  document.getElementById('fp-drawer-overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeDrawer(){
  document.getElementById('fp-drawer')?.classList.remove('open');
  document.getElementById('fp-drawer-overlay')?.classList.remove('show');
  document.body.style.overflow = '';
}

/* Hook into updateStats so floating widget auto-syncs */
const _origUpdateStats = updateStats;
updateStats = function(){
  _origUpdateStats();
  renderFloatingSlots();
  syncPillStats();
};

/* Hook into renderPhoneSlots so mini phone updates too */
const _origRenderPhoneSlots = renderPhoneSlots;
renderPhoneSlots = function(){
  _origRenderPhoneSlots();
  renderFloatingSlots();
};

/* Show/hide floating phone based on viewport — JS controls inline styles
   so they override the CSS !important defaults cleanly */
function initResponsive(){
  const isMob = isMobile();

  /* Floating phone + drawer: only visible on mobile */
  const fp  = document.getElementById('floating-phone');
  const drw = document.getElementById('fp-drawer');
  const ov  = document.getElementById('fp-drawer-overlay');
  if(fp)  fp.style.setProperty('display', isMob ? 'flex' : 'none', 'important');
  if(drw) drw.style.setProperty('display', isMob ? 'block' : 'none', 'important');

  if(isMob){
    renderFloatingSlots();
    syncPillStats();
  } else {
    /* Desktop: close drawer, restore any body overflow lock */
    if(drw) drw.classList.remove('open');
    if(ov)  ov.classList.remove('show');
    document.body.style.overflow = '';

    /* Ensure center + right panels are visible (undoes mobile display:none) */
    const center = document.querySelector('.center');
    const right  = document.querySelector('.right');
    if(center) center.style.removeProperty('display');
    if(right)  right.style.removeProperty('display');
  }
}

window.addEventListener('resize', initResponsive);

function tick(){
  const d=new Date();
  const el=document.getElementById('s-clock');
  if(el) el.textContent=`${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`;
}
tick(); setInterval(tick,30000);


// ─── INIT ────────────────────────────────────────────────────
renderList('cpu');
renderPhoneSlots();
updateStats();
initResponsive();
