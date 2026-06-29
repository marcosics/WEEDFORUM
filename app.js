const STRAINS = [
  { id:'og-kush', name:'OG Kush', type:'hybrid', thc:'19-25%', cbd:'0.1%', flavor:'Pino, Tierra, Cítrico', effects:'Euforia, Relajación, Felicidad', emoji:'🌲', desc:'La OG Kush es una de las cepas más icónicas del mundo. Potente híbrido con aroma terroso y toques cítricos.' },
  { id:'blue-dream', name:'Blue Dream', type:'hybrid', thc:'17-24%', cbd:'0.1%', flavor:'Baya, Dulce, Hierbas', effects:'Creatividad, Euforia, Relajación', emoji:'💙', desc:'Híbrido clásico que combina la genética Blueberry con Haze.' },
  { id:'sour-diesel', name:'Sour Diesel', type:'sativa', thc:'20-25%', cbd:'0.1%', flavor:'Diesel, Cítrico, Picante', effects:'Energía, Euforia, Social', emoji:'⛽', desc:'Sativa legendaria con aroma distintivo a diésel.' },
  { id:'northern-lights', name:'Northern Lights', type:'indica', thc:'16-21%', cbd:'0.1%', flavor:'Pino, Tierra, Dulce', effects:'Relajación Profunda, Sueño, Calma', emoji:'🌌', desc:'Indica pura de culto. Relajación corporal intensa.' },
  { id:'white-widow', name:'White Widow', type:'hybrid', thc:'18-25%', cbd:'0.1%', flavor:'Tierra, Pino, Floral', effects:'Creatividad, Euforia, Relajación', emoji:'🕸️', desc:'Híbrido balanceado famoso por sus cogollos cubiertos de tricomas.' },
  { id:'girl-scout-cookies', name:'Girl Scout Cookies', type:'hybrid', thc:'19-28%', cbd:'0.1%', flavor:'Dulce, Menta, Tierra', effects:'Euforia, Relajación, Felicidad', emoji:'🍪', desc:'Híbrido potente con perfil de sabor dulce.' },
  { id:'pineapple-express', name:'Pineapple Express', type:'hybrid', thc:'18-25%', cbd:'0.1%', flavor:'Piña, Tropical, Dulce', effects:'Felicidad, Energía, Creatividad', emoji:'🍍', desc:'Híbrido tropical con aroma a piña fresca.' },
  { id:'granddaddy-purple', name:'Granddaddy Purple', type:'indica', thc:'17-23%', cbd:'0.1%', flavor:'Uva, Baya, Dulce', effects:'Relajación, Sueño, Calma', emoji:'🍇', desc:'Indica premium con cogollos morados.' },
  { id:'jack-herer', name:'Jack Herer', type:'sativa', thc:'18-24%', cbd:'0.1%', flavor:'Pino, Especias, Cítrico', effects:'Creatividad, Euforia, Enfoque', emoji:'🌲', desc:'Sativa en honor al activista. Efecto claro y creativo.' },
  { id:'green-crack', name:'Green Crack', type:'sativa', thc:'15-22%', cbd:'0.1%', flavor:'Cítrico, Mango, Dulce', effects:'Energía, Enfoque, Felicidad', emoji:'💚', desc:'Sativa energizante. Perfecta para empezar el día.' },
  { id:'purple-haze', name:'Purple Haze', type:'sativa', thc:'16-23%', cbd:'0.1%', flavor:'Baya, Dulce, Tierra', effects:'Euforia, Creatividad, Alegría', emoji:'🟣', desc:'Sativa clásica de los 70.' },
  { id:'ak-47', name:'AK-47', type:'hybrid', thc:'18-25%', cbd:'0.1%', flavor:'Tierra, Pino, Agrio', effects:'Euforia, Relajación, Felicidad', emoji:'🔥', desc:'Híbrido potente con efecto complejo.' },
  { id:'bruce-banner', name:'Bruce Banner', type:'hybrid', thc:'20-29%', cbd:'0.1%', flavor:'Dulce, Tierra, Diesel', effects:'Euforia Intensa, Creatividad, Felicidad', emoji:'💪', desc:'Híbrido extremadamente potente.' },
  { id:'gelato', name:'Gelato', type:'hybrid', thc:'20-25%', cbd:'0.1%', flavor:'Dulce, Crema, Frutal', effects:'Relajación, Euforia, Felicidad', emoji:'🍦', desc:'Híbrido dulce y cremoso.' },
  { id:'zkittlez', name:'Zkittlez', type:'hybrid', thc:'20-25%', cbd:'0.1%', flavor:'Fruta, Dulce, Tropical', effects:'Relajación, Felicidad, Calma', emoji:'🌈', desc:'Cepa con perfil de sabor afrutado único.' },
  { id:'wedding-cake', name:'Wedding Cake', type:'hybrid', thc:'20-27%', cbd:'0.1%', flavor:'Dulce, Vainilla, Tierra', effects:'Euforia, Relajación, Felicidad', emoji:'🎂', desc:'Híbrido dulce y potente.' },
  { id:'runtz', name:'Runtz', type:'hybrid', thc:'19-29%', cbd:'0.1%', flavor:'Dulce, Frutal, Cremoso', effects:'Euforia, Felicidad, Relajación', emoji:'🍬', desc:'Híbrido trendy con sabor a caramelo.' },
  { id:'lemon-haze', name:'Lemon Haze', type:'sativa', thc:'17-25%', cbd:'0.1%', flavor:'Limón, Cítrico, Dulce', effects:'Energía, Enfoque, Creatividad', emoji:'🍋', desc:'Sativa cítrica con aroma a limón.' },
  { id:'blue-cheese', name:'Blue Cheese', type:'indica', thc:'17-23%', cbd:'0.1%', flavor:'Queso, Baya, Dulce', effects:'Relajación, Sueño, Calma', emoji:'🧀', desc:'Indica con aroma único a queso azul.' },
  { id:'amnesia-haze', name:'Amnesia Haze', type:'sativa', thc:'20-25%', cbd:'0.1%', flavor:'Cítrico, Tierra, Especias', effects:'Euforia, Energía, Creatividad', emoji:'🌀', desc:'Sativa galardonada. Efecto cerebral potente.' },
  { id:'mango-haze', name:'Mango Haze', type:'sativa', thc:'18-22%', cbd:'0.1%', flavor:'Mango, Tropical, Dulce', effects:'Creatividad, Euforia, Energía', emoji:'🥭', desc:'Sativa tropical con sabor a mango.' },
  { id:'strawberry-cough', name:'Strawberry Cough', type:'sativa', thc:'17-23%', cbd:'0.1%', flavor:'Fresa, Dulce, Tierra', effects:'Euforia, Social, Energía', emoji:'🍓', desc:'Sativa con aroma a fresa fresca.' },
  { id:'bubba-kush', name:'Bubba Kush', type:'indica', thc:'15-22%', cbd:'0.1%', flavor:'Café, Chocolate, Tierra', effects:'Relajación, Sueño, Calma', emoji:'☕', desc:'Indica pesada con efectos sedantes.' },
  { id:'durban-poison', name:'Durban Poison', type:'sativa', thc:'16-22%', cbd:'0.1%', flavor:'Pino, Anís, Especias', effects:'Energía, Enfoque, Euforia', emoji:'☀️', desc:'Sativa pura africana. Efecto limpio.' },
  { id:'critical-mass', name:'Critical Mass', type:'indica', thc:'18-23%', cbd:'0.1%', flavor:'Tierra, Dulce, Floral', effects:'Relajación, Calma, Sedación', emoji:'📦', desc:'Indica de alto rendimiento.' }
];

const ADJ = ['Feliz','Verde','Azul','Dulce','Fresco','Fuerte','Suave','Rápido','Alto','Largo','Frío','Cálido','Claro','Nuevo','Joven','Libre','Activo','Raro','Simple','Sabio','Loco','Bueno','Mágico','Único','Solar','Ágil','Feroz','Noble','Justo','Tranquilo','Alegre','Brillante','Profundo','Salvaje','Amable','Fiel','Sutil','Rústico','Denso','Firme','Leal','Oscuro','Corto','Santo','Puro','Falso','Real','Doble','Leve','Fixed','Lento','Tonto','Listo','Franco','Grato','Digno','Iluso','Lúcido','Vasto','Yerto','Zonzo','Hábil','Erguido','Funesto','Glorioso','Huraño','Indócil','Jocoso','Lacónico','Magno'];
const NOUNS = ['Panda','Zorro','Lobo','Tigre','Águila','Tiburón','Gato','León','Oso','Koala','Lince','Búho','Halcón','Foca','Ciervo','Toro','Cabra','Rana','Loro','Pato','Cisne','Cuervo','Topo','Erizo','Ardilla','Nutria','Hurón','Tejón','Pantera','Jaguar','Delfín','Ballena','Pulpo','Mariposa','Abeja','Hormiga','Escarabajo','Luciérnaga','Pingüino','Gaviota','Camello','Suricata','Mapache','Canguro','Wombat','Armadillo','Ornitorrinco','Buitre','Guepardo','Hiena','Morsa','Narval','Ocelote','Puma','Yak','Zebra','Mofeta','Alce','Gamo','Lémur','Tarsio','Ualabí','Vicuña','Antílope','Bisonte','Cóndor','Dromedario','Flamenco','Gorila','Hipopótamo','Iguana','Jirafa','Kiwi','Loro','Manatí','Ñandú','Oso','Perezoso','Quetzal','Rinoceronte','Salamandra','Tapir','Urogallo','Víbora','Yaguareté'];

const App = {
  state: { currentUser:null, users:[], posts:[], notifications:[], nextId:1, theme:'dark', accent:'default' },

  init() {
    this.loadData();
    if (this.state.users.length===0) this.seedData();
    this.ensureAnonymousUser();
    this.cacheDom();
    this.applyTheme();
    this.applyAccent();
    this.bindEvents();
    if (this.state.currentUser) {
      this.updateBadge();
      this.showView('feed');
    } else {
      this.showView('feed');
    }
    this.populateStrainSelect();
  },

  ensureAnonymousUser() {
    if (!this.state.currentUser) {
      const anon = this.generateAnonymousUser();
      this.state.users.push(anon);
      this.state.currentUser = anon.id;
      this.saveData();
    }
  },

  generateAnonymousUser() {
    const adj = ADJ[Math.floor(Math.random()*ADJ.length)];
    const noun = NOUNS[Math.floor(Math.random()*NOUNS.length)];
    const num = Math.floor(Math.random()*900)+100;
    const username = adj+noun+num;
    return {
      id: this.state.nextId++, username, email:'', password:'',
      avatar: DEFAULT_AVATARS[Math.floor(Math.random()*DEFAULT_AVATARS.length)],
      cover: '', bio: 'Usuario anónimo 🌿', location: '', website: '',
      followers: [], following: [], joinDate: new Date().toISOString(), isAnonymous: true
    };
  },

  get DEFAULT_AVATARS() { return ['🌿','🍃','🔥','💚','🌲','🍀','☘️','🌱','🌸','🌈','⭐','💫','🍄','🌻','🍂']; },

  cacheDom() {
    this.el = {};
    const ids = ['app','toast','overlay','auth-modal','view-feed','view-explore','view-create','view-notifications',
      'view-profile','view-strains','view-strain-detail','view-post-detail','view-edit-profile','view-settings',
      'feed-content','explore-content','notif-content','profile-posts','strains-grid','strain-detail-content',
      'post-detail-content',
      'login-form','register-form','login-username','login-password','reg-username','reg-email','reg-password','reg-confirm',
      'show-register','show-login','post-content','post-strain','post-image','post-image-preview','post-image-img','post-image-remove',
      'btn-post','btn-comment','btn-logout','btn-edit-profile','btn-save-profile','btn-search-toggle','btn-theme-toggle',
      'btn-auth-modal','btn-reroll','explore-search','strains-search','comment-input','theme-toggle',
      'create-avatar','create-username',
      'profile-avatar','profile-cover','profile-name','profile-bio','profile-location','profile-joined',
      'profile-posts-count','profile-followers-count','profile-following-count','profile-dropdown-btn','profile-dropdown',
      'edit-bio','edit-location','edit-website','edit-avatar-input','edit-cover-input','edit-cover-preview','edit-cover-img',
      'edit-cover-remove','edit-current-avatar',
      'settings-username','settings-email','settings-joindate','settings-status-text','settings-secure-row','settings-reroll-row',
      'user-badge','badge-avatar','badge-name','header-title'];
    ids.forEach(id => { this.el[id] = document.getElementById(id); });
    this.el.navBtns = document.querySelectorAll('#bottom-nav button');
    this.el.tabs = document.querySelectorAll('.feed-tabs .tab');
    this.el.exploreTabs = document.querySelectorAll('.explore-tabs .tab');
    this.el.profileTabs = document.querySelectorAll('.profile-tabs .tab');
    this.el.typeTags = document.querySelectorAll('.type-tag');
    this.el.backBtns = document.querySelectorAll('.back-btn');
    this.el.strainFilters = document.querySelectorAll('.strain-filter');
    this.el.colorDots = document.querySelectorAll('.color-dot');
  },

  bindEvents() {
    this.el['login-form'].addEventListener('submit', e => { e.preventDefault(); this.login(); });
    this.el['register-form'].addEventListener('submit', e => { e.preventDefault(); this.register(); });
    this.el['show-register'].addEventListener('click', e => { e.preventDefault(); this.toggleAuth('register'); });
    this.el['show-login'].addEventListener('click', e => { e.preventDefault(); this.toggleAuth('login'); });
    this.el['auth-modal'].querySelector('.modal-close').addEventListener('click', () => this.closeAuthModal());

    this.el.navBtns.forEach(btn => {
      btn.addEventListener('click', () => this.showView(btn.dataset.view));
    });

    this.el.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.el.tabs.forEach(t=>t.classList.remove('active'));
        tab.classList.add('active');
        this.renderFeed(tab.dataset.feed);
      });
    });

    this.el.exploreTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.el.exploreTabs.forEach(t=>t.classList.remove('active'));
        tab.classList.add('active');
        this.renderExplore(tab.dataset.explore);
      });
    });

    this.el.profileTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.el.profileTabs.forEach(t=>t.classList.remove('active'));
        tab.classList.add('active');
        this.renderProfileTab(tab.dataset.ptab);
      });
    });

    this.el.typeTags.forEach(tag => {
      tag.addEventListener('click', () => {
        this.el.typeTags.forEach(t=>t.classList.remove('active'));
        tag.classList.add('active');
      });
    });

    this.el.strainFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        this.el.strainFilters.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        this.renderStrains(btn.dataset.filter);
      });
    });

    this.el['btn-post'].addEventListener('click', () => this.createPost());
    this.el['post-image'].addEventListener('change', e => this.handleImageUpload(e, 'post-image-img', 'post-image-preview'));
    this.el['post-image-remove'].addEventListener('click', () => this.clearImage('post-image','post-image-img','post-image-preview'));

    this.el['explore-search'].addEventListener('input', () => {
      const active = document.querySelector('.explore-tabs .tab.active');
      this.renderExplore(active ? active.dataset.explore : 'strains');
    });
    this.el['strains-search'].addEventListener('input', () => {
      const active = document.querySelector('.strain-filter.active');
      this.renderStrains(active ? active.dataset.filter : 'all');
    });
    this.el['btn-search-toggle'].addEventListener('click', () => this.showView('explore'));
    this.el['btn-theme-toggle'].addEventListener('click', () => this.toggleTheme());

    this.el['btn-logout'].addEventListener('click', () => this.logout());
    this.el['btn-edit-profile'].addEventListener('click', () => this.showView('edit-profile'));
    this.el['btn-save-profile'].addEventListener('click', () => this.saveProfile());

    this.el['btn-comment'].addEventListener('click', () => this.commentOnPost());

    this.el['theme-toggle'].addEventListener('change', e => {
      this.setTheme(e.target.checked ? 'dark' : 'light');
    });

    this.el.colorDots.forEach(dot => {
      dot.addEventListener('click', () => {
        this.el.colorDots.forEach(d=>d.classList.remove('active'));
        dot.classList.add('active');
        this.setAccent(dot.dataset.color);
      });
    });

    this.el['user-badge'].addEventListener('click', () => {
      const u = this.currentUser;
      if (u && u.isAnonymous) {
        this.openAuthModal();
      } else {
        this.showView('settings');
      }
    });

    this.el['btn-auth-modal'].addEventListener('click', () => this.openAuthModal());
    this.el['btn-reroll'].addEventListener('click', () => this.rerollUsername());

    this.el['profile-dropdown-btn'].addEventListener('click', e => {
      e.stopPropagation();
      this.el['profile-dropdown'].classList.toggle('hidden');
      this.el.overlay.classList.toggle('hidden');
    });

    this.el['profile-dropdown'].addEventListener('click', e => {
      const item = e.target.closest('.dropdown-item');
      if (!item) return;
      if (item.dataset.action==='share') {
        navigator.clipboard?.writeText(window.location.href);
        this.toast('Enlace copiado');
      } else if (item.dataset.action==='copy') {
        navigator.clipboard?.writeText(this.el['profile-name'].textContent);
        this.toast('Usuario copiado');
      } else if (item.dataset.action==='block') {
        this.toast('Función no disponible');
      }
      this.el['profile-dropdown'].classList.add('hidden');
      this.el.overlay.classList.add('hidden');
    });

    this.el.overlay.addEventListener('click', () => {
      this.el['profile-dropdown'].classList.add('hidden');
      this.el['auth-modal'].classList.add('hidden');
      this.el.overlay.classList.add('hidden');
    });

    this.el['edit-avatar-input'].addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => { this.el['edit-current-avatar'].innerHTML = `<img src="${ev.target.result}">`; };
      reader.readAsDataURL(file);
    });

    this.el['edit-cover-input'].addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        this.el['edit-cover-img'].src = ev.target.result;
        this.el['edit-cover-preview'].classList.remove('hidden');
      };
      reader.readAsDataURL(file);
    });

    this.el['edit-cover-remove'].addEventListener('click', () => {
      this.el['edit-cover-input'].value = '';
      this.el['edit-cover-preview'].classList.add('hidden');
      this.el['edit-cover-img'].src = '';
    });

    this.el.backBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const visible = document.querySelector('.view.active:not(.hidden)');
        if (!visible) return;
        if (visible.id==='view-strain-detail') this.showView('strains');
        else if (visible.id==='view-post-detail') this.showView('feed');
        else if (['view-edit-profile','view-settings'].includes(visible.id)) this.showView('profile');
      });
    });
  },

  // ----- AUTH MODAL -----
  openAuthModal() {
    this.el['auth-modal'].classList.remove('hidden');
    this.el.overlay.classList.remove('hidden');
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
  },

  closeAuthModal() {
    this.el['auth-modal'].classList.add('hidden');
    this.el.overlay.classList.add('hidden');
  },

  toggleAuth(mode) {
    document.getElementById('login-form').classList.toggle('hidden', mode!=='login');
    document.getElementById('register-form').classList.toggle('hidden', mode!=='register');
  },

  register() {
    const username = this.el['reg-username'].value.trim();
    const email = this.el['reg-email'].value.trim();
    const password = this.el['reg-password'].value;
    const confirm = this.el['reg-confirm'].value;
    if (!username||!email||!password||!confirm) return this.toast('Completa todos los campos');
    if (password!==confirm) return this.toast('Las contraseñas no coinciden');
    if (password.length<4) return this.toast('Mínimo 4 caracteres');
    if (this.state.users.find(u=>u.username===username && u.password)) return this.toast('El usuario ya existe');

    const existing = this.currentUser;
    if (existing) {
      const oldName = existing.username;
      existing.username = username;
      existing.email = email;
      existing.password = password;
      existing.isAnonymous = false;
      if (!existing.avatar) existing.avatar = this.DEFAULT_AVATARS[Math.floor(Math.random()*this.DEFAULT_AVATARS.length)];
      this.state.posts.forEach(p => { if (p.userId===existing.id && p.username===oldName) p.username = username; });
      this.saveData();
      this.toast('Cuenta creada con éxito');
      this.closeAuthModal();
      this.updateBadge();
      return;
    }

    const user = {
      id: this.state.nextId++, username, email, password,
      avatar: this.DEFAULT_AVATARS[Math.floor(Math.random()*this.DEFAULT_AVATARS.length)],
      cover: '', bio: '', location: '', website: '', followers: [], following: [],
      joinDate: new Date().toISOString(), isAnonymous: false
    };
    this.state.users.push(user);
    this.state.currentUser = user.id;
    this.saveData();
    this.toast('Cuenta creada con éxito');
    this.closeAuthModal();
    this.updateBadge();
  },

  login() {
    const username = this.el['login-username'].value.trim();
    const password = this.el['login-password'].value;
    const user = this.state.users.find(u=>u.username===username && u.password===password);
    if (!user) return this.toast('Usuario o contraseña incorrectos');
    this.state.currentUser = user.id;
    this.saveData();
    this.el['login-username'].value=''; this.el['login-password'].value='';
    this.toast('Bienvenido ' + user.username);
    this.closeAuthModal();
    this.updateBadge();
    this.showView('feed');
  },

  logout() {
    if (!confirm('¿Salir de tu cuenta? Volverás al modo anónimo.')) return;
    this.state.currentUser = null;
    this.saveData();
    this.ensureAnonymousUser();
    this.updateBadge();
    this.toast('Modo anónimo activado');
    this.showView('feed');
  },

  rerollUsername() {
    const u = this.currentUser;
    if (!u || !u.isAnonymous) return this.toast('Solo disponible en modo anónimo');
    const newName = this.generateAnonymousUser().username;
    u.username = newName;
    // Update posts
    this.state.posts.forEach(p => { if (p.userId===u.id) p.username = newName; });
    this.saveData();
    this.updateBadge();
    this.toast('Nuevo nombre: @'+newName);
  },

  get currentUser() {
    return this.state.users.find(u=>u.id===this.state.currentUser);
  },

  updateBadge() {
    const u = this.currentUser;
    if (!u) return;
    this.el['badge-avatar'].innerHTML = this.getAvatarHTML(u.avatar);
    this.el['badge-name'].textContent = '@'+u.username;
    // Settings
    if (u.isAnonymous) {
      this.el['settings-status-text'].textContent = '🎭 Modo anónimo · @'+u.username;
      this.el['settings-secure-row'].classList.add('hidden');
      this.el['settings-reroll-row'].classList.remove('hidden');
    } else {
      this.el['settings-status-text'].textContent = '🔐 Cuenta registrada · @'+u.username;
      this.el['settings-secure-row'].classList.remove('hidden');
      this.el['settings-reroll-row'].classList.add('hidden');
    }
  },

  // ----- THEME -----
  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.state.theme==='light'?'light':'dark');
    if (this.el['theme-toggle']) this.el['theme-toggle'].checked = this.state.theme==='dark';
  },
  applyAccent() {
    document.documentElement.setAttribute('data-accent', this.state.accent||'default');
    if (this.el.colorDots) {
      this.el.colorDots.forEach(d => d.classList.toggle('active', d.dataset.color===(this.state.accent||'default')));
    }
  },
  toggleTheme() {
    this.setTheme(this.state.theme==='dark'?'light':'dark');
  },
  setTheme(theme) {
    this.state.theme = theme;
    this.applyTheme();
    this.saveData();
    this.el['btn-theme-toggle'].textContent = theme==='dark'?'🌙':'☀️';
  },
  setAccent(color) {
    this.state.accent = color;
    this.applyAccent();
    this.saveData();
  },

  // ----- NAVIGATION -----
  showView(viewName) {
    if (viewName==='feed') {
      const activeTab = document.querySelector('.feed-tabs .tab.active');
      this.renderFeed(activeTab?activeTab.dataset.feed:'latest');
    }
    if (viewName==='profile') { this.renderProfile(); }
    if (viewName==='notifications') { this.renderNotifications(); }
    if (viewName==='strains') { this.renderStrains('all'); }
    if (viewName==='settings') { this.renderSettings(); }
    if (viewName==='explore') {
      const active = document.querySelector('.explore-tabs .tab.active');
      this.renderExplore(active?active.dataset.explore:'strains');
    }

    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById('view-'+viewName);
    if (target) { target.classList.add('active'); target.classList.remove('hidden'); }

    this.el.navBtns.forEach(b => {
      b.classList.toggle('active', b.dataset.view===viewName);
    });

    if (viewName==='create') this.setupCreateForm();
    if (viewName==='edit-profile') this.setupEditProfile();
  },

  // ----- POSTS -----
  setupCreateForm() {
    const u = this.currentUser;
    if (!u) return;
    this.el['create-username'].textContent = '@' + u.username;
    this.el['create-avatar'].innerHTML = this.getAvatarHTML(u.avatar);
    this.populateStrainSelect();
    this.el.typeTags.forEach(t=>t.classList.remove('active'));
    this.el['post-content'].value = '';
    this.el['post-strain'].value = '';
    this.clearImage('post-image','post-image-img','post-image-preview');
  },

  populateStrainSelect() {
    const sel = this.el['post-strain'];
    sel.innerHTML = '<option value="">Seleccionar cepa...</option>';
    STRAINS.forEach(s => {
      sel.innerHTML += `<option value="${s.id}">${s.emoji} ${s.name}</option>`;
    });
  },

  handleImageUpload(e, imgId, previewId) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      document.getElementById(imgId).src = ev.target.result;
      document.getElementById(previewId).classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  },

  clearImage(inputId, imgId, previewId) {
    const el = document.getElementById(inputId);
    if (el) el.value = '';
    document.getElementById(previewId).classList.add('hidden');
    const img = document.getElementById(imgId);
    if (img) img.src = '';
  },

  createPost() {
    const user = this.currentUser;
    if (!user) return;
    const content = this.el['post-content'].value.trim();
    if (!content) return this.toast('Escribe algo para publicar');
    const strainId = this.el['post-strain'].value;
    const activeType = document.querySelector('.type-tag.active');
    const type = activeType ? activeType.dataset.type : '';
    const image = this.el['post-image-img'].src || '';
    const strain = strainId ? STRAINS.find(s=>s.id===strainId) : null;
    const post = {
      id: this.state.nextId++, userId: user.id, username: user.username, userAvatar: user.avatar,
      content, strain: strain ? { id:strain.id, name:strain.name, emoji:strain.emoji, type:strain.type } : null,
      type, image, likes: [], comments: [], timestamp: Date.now()
    };
    this.state.posts.unshift(post);
    this.saveData();
    this.el['post-content'].value = '';
    this.el['post-strain'].value = '';
    this.el.typeTags.forEach(t=>t.classList.remove('active'));
    this.clearImage('post-image','post-image-img','post-image-preview');
    this.toast('Publicado con éxito');
    this.showView('feed');
  },

  likePost(postId) {
    const user = this.currentUser;
    const post = this.state.posts.find(p=>p.id===postId);
    if (!post||!user) return;
    const idx = post.likes.indexOf(user.id);
    if (idx>-1) { post.likes.splice(idx,1); }
    else {
      post.likes.push(user.id);
      if (post.userId!==user.id) this.addNotification(post.userId, 'like', user.username, postId);
    }
    this.saveData();
    const activeTab = document.querySelector('.feed-tabs .tab.active');
    if (activeTab) this.renderFeed(activeTab.dataset.feed);
  },

  commentOnPost() {
    const user = this.currentUser;
    if (!user) return;
    const text = this.el['comment-input'].value.trim();
    if (!text) return this.toast('Escribe un comentario');
    const postId = parseInt(this.el['comment-input'].dataset.postId);
    if (!postId) return;
    const post = this.state.posts.find(p=>p.id===postId);
    if (!post) return;
    post.comments.push({ userId:user.id, username:user.username, text, timestamp:Date.now() });
    this.el['comment-input'].value = '';
    if (post.userId!==user.id) this.addNotification(post.userId, 'comment', user.username, postId);
    this.saveData();
    this.renderPostDetail(postId);
  },

  deletePost(postId) {
    if (!confirm('¿Eliminar esta publicación?')) return;
    const idx = this.state.posts.findIndex(p=>p.id===postId);
    if (idx>-1) { this.state.posts.splice(idx,1); this.saveData(); }
    this.showView('feed');
  },

  getTimeAgo(ts) {
    const diff = Date.now()-ts;
    const mins = Math.floor(diff/60000);
    if (mins<1) return 'ahora';
    if (mins<60) return mins+'m';
    const hrs = Math.floor(mins/60);
    if (hrs<24) return hrs+'h';
    const days = Math.floor(hrs/24);
    if (days<7) return days+'d';
    if (days<30) return Math.floor(days/7)+'sem';
    return Math.floor(days/30)+'mes';
  },

  getAvatarHTML(avatar) {
    if (!avatar) return '👤';
    if (avatar.startsWith('data:')||avatar.startsWith('http')) return `<img src="${avatar}">`;
    return avatar;
  },

  addNotification(userId, type, fromUsername, postId) {
    this.state.notifications.push({ id:this.state.nextId++, userId, type, fromUsername, postId, read:false, timestamp:Date.now() });
    this.saveData();
  },

  // ----- RENDER: FEED -----
  renderFeed(filter) {
    const user = this.currentUser;
    const container = this.el['feed-content'];
    let posts = [...this.state.posts];
    if (filter==='following' && user) {
      posts = posts.filter(p => user.following.includes(p.userId) || p.userId===user.id);
    } else if (filter==='top') {
      posts.sort((a,b) => b.likes.length - a.likes.length);
    } else {
      posts.sort((a,b) => b.timestamp - a.timestamp);
    }
    if (posts.length===0) {
      container.innerHTML = `<div class="empty"><div class="big">🌿</div>${filter==='following'?'Sigue a otros usuarios para ver sus publicaciones':'No hay publicaciones aún. ¡Sé el primero en publicar!'}</div>`;
      return;
    }
    container.innerHTML = posts.map(p => this.renderPostHTML(p)).join('');
    this.bindPostEvents(container);
  },

  renderPostHTML(p) {
    const user = this.currentUser;
    const liked = user && p.likes.includes(user.id);
    const isOwner = user && p.userId===user.id;
    const typeClass = p.strain ? p.strain.type : p.type;
    return `<div class="post" data-post-id="${p.id}" style="--i:0">
      <div class="post-header" data-user-id="${p.userId}">
        <div class="avatar-sm">${this.getAvatarHTML(p.userAvatar)}</div>
        <div class="post-user-info">
          <div class="post-username">@${p.username}</div>
          <div class="post-time">${this.getTimeAgo(p.timestamp)}</div>
        </div>
      </div>
      ${p.strain ? `<span class="post-strain-tag ${typeClass}" data-strain-id="${p.strain.id}">${p.strain.emoji} ${p.strain.name}</span>` : ''}
      ${p.type && !p.strain ? `<span class="post-strain-tag ${p.type}">${p.type==='sativa'?'🌞':p.type==='indica'?'🌙':'⚡'} ${p.type}</span>` : ''}
      <div class="post-text">${this.linkify(p.content)}</div>
      ${p.image ? `<img class="post-image" src="${p.image}" alt="Post image">` : ''}
      <div class="post-actions">
        <button class="post-action ${liked?'liked':''}" data-action="like" data-id="${p.id}"><span class="icon">${liked?'❤️':'🤍'}</span><span class="count">${p.likes.length}</span></button>
        <button class="post-action" data-action="comment" data-id="${p.id}"><span class="icon">💬</span><span class="count">${p.comments.length}</span></button>
        ${isOwner ? `<button class="post-action" data-action="delete" data-id="${p.id}"><span class="icon">🗑️</span></button>` : ''}
      </div>
    </div>`;
  },

  bindPostEvents(container) {
    container.querySelectorAll('.post-action[data-action="like"]').forEach(el => {
      el.addEventListener('click', e => { e.stopPropagation(); this.likePost(parseInt(el.dataset.id)); });
    });
    container.querySelectorAll('.post-action[data-action="comment"]').forEach(el => {
      el.addEventListener('click', e => { e.stopPropagation(); this.showPostDetail(parseInt(el.dataset.id)); });
    });
    container.querySelectorAll('.post-action[data-action="delete"]').forEach(el => {
      el.addEventListener('click', e => { e.stopPropagation(); this.deletePost(parseInt(el.dataset.id)); });
    });
    container.querySelectorAll('.post').forEach(el => {
      el.addEventListener('click', e => {
        if (e.target.closest('.post-action')||e.target.closest('.post-strain-tag')) return;
        this.showPostDetail(parseInt(el.dataset.postId));
      });
    });
    container.querySelectorAll('.post-header').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        this.showUserProfile(parseInt(el.dataset.userId));
      });
    });
    container.querySelectorAll('.post-strain-tag').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        this.showStrainDetail(el.dataset.strainId);
      });
    });
  },

  linkify(text) {
    return text.replace(/@(\w+)/g, (m,u) => `<span style="color:var(--green);font-weight:600;cursor:pointer" data-mention="${u}">${m}</span>`)
               .replace(/https?:\/\/[^\s]+/g, '<a href="$&" target="_blank" style="color:var(--green)">$&</a>');
  },

  // ----- RENDER: EXPLORE -----
  renderExplore(type) {
    const query = this.el['explore-search'].value.trim().toLowerCase();
    const container = this.el['explore-content'];

    if (type==='users') {
      let users = this.state.users.filter(u => u.id!==(this.currentUser?this.currentUser.id:-1));
      if (query) users = users.filter(u => u.username.toLowerCase().includes(query));
      if (users.length===0) { container.innerHTML = '<div class="empty"><div class="big">👤</div>No se encontraron usuarios</div>'; return; }
      container.innerHTML = users.map(u => {
        const isFollowing = this.currentUser && this.currentUser.following.includes(u.id);
        return `<div class="user-card-mini" data-user-id="${u.id}">
          <div class="avatar-sm">${this.getAvatarHTML(u.avatar)}</div>
          <div class="user-card-mini-info">
            <div class="user-card-mini-name">@${u.username}</div>
            <div class="user-card-mini-bio">${u.bio||'Sin biografía'}</div>
          </div>
          <button class="follow-btn-sm ${isFollowing?'following':''}">${isFollowing?'Siguiendo':'Seguir'}</button>
        </div>`;
      }).join('');
      container.querySelectorAll('.user-card-mini').forEach(el => {
        el.addEventListener('click', e => { if (e.target.closest('.follow-btn-sm')) return; this.showUserProfile(parseInt(el.dataset.userId)); });
      });
      container.querySelectorAll('.follow-btn-sm').forEach(btn => {
        btn.addEventListener('click', e => { e.stopPropagation(); const card = btn.closest('.user-card-mini'); this.toggleFollow(parseInt(card.dataset.userId)); });
      });
    } else if (type==='posts') {
      let posts = [...this.state.posts];
      if (query) posts = posts.filter(p => p.content.toLowerCase().includes(query) || (p.strain&&p.strain.name.toLowerCase().includes(query)));
      posts.sort((a,b)=>b.timestamp-a.timestamp);
      if (posts.length===0) { container.innerHTML = '<div class="empty"><div class="big">📝</div>No se encontraron publicaciones</div>'; return; }
      container.innerHTML = posts.slice(0,30).map(p => this.renderPostHTML(p)).join('');
      this.bindPostEvents(container);
    } else {
      let strains = [...STRAINS];
      if (query) strains = strains.filter(s => s.name.toLowerCase().includes(query) || s.flavor.toLowerCase().includes(query));
      if (strains.length===0) { container.innerHTML = '<div class="empty"><div class="big">🌿</div>No se encontraron cepas</div>'; return; }
      container.innerHTML = `<div class="strain-grid">${strains.map(s => `<div class="strain-card" data-strain-id="${s.id}">
        <div class="strain-card-emoji">${s.emoji}</div>
        <div class="strain-card-name">${s.name}</div>
        <span class="strain-card-type ${s.type}">${s.type==='sativa'?'🌞 Sativa':s.type==='indica'?'🌙 Indica':'⚡ Híbrido'}</span>
        <div class="strain-card-thc">THC: ${s.thc}</div>
      </div>`).join('')}</div>`;
      container.querySelectorAll('.strain-card').forEach(el => { el.addEventListener('click', () => this.showStrainDetail(el.dataset.strainId)); });
    }
  },

  renderStrains(filter) {
    const query = this.el['strains-search'].value.trim().toLowerCase();
    const container = this.el['strains-grid'];
    let strains = [...STRAINS];
    if (filter!=='all') strains = strains.filter(s => s.type===filter);
    if (query) strains = strains.filter(s => s.name.toLowerCase().includes(query));
    if (strains.length===0) { container.innerHTML = '<div class="empty"><div class="big">🌿</div>No se encontraron cepas</div>'; return; }
    container.innerHTML = `<div class="strain-grid">${strains.map(s => `<div class="strain-card" data-strain-id="${s.id}">
      <div class="strain-card-emoji">${s.emoji}</div>
      <div class="strain-card-name">${s.name}</div>
      <span class="strain-card-type ${s.type}">${s.type==='sativa'?'🌞 Sativa':s.type==='indica'?'🌙 Indica':'⚡ Híbrido'}</span>
      <div class="strain-card-thc">THC: ${s.thc}</div>
    </div>`).join('')}</div>`;
    container.querySelectorAll('.strain-card').forEach(el => { el.addEventListener('click', () => this.showStrainDetail(el.dataset.strainId)); });
  },

  showStrainDetail(strainId) {
    const strain = STRAINS.find(s=>s.id===strainId);
    if (!strain) return;
    const container = this.el['strain-detail-content'];
    container.innerHTML = `<div class="strain-detail-header"><div class="strain-detail-emoji">${strain.emoji}</div><div><div class="strain-detail-name">${strain.name}</div><span class="strain-detail-type ${strain.type}">${strain.type==='sativa'?'🌞 Sativa':strain.type==='indica'?'🌙 Indica':'⚡ Híbrido'}</span></div></div>
      <div class="strain-detail-section"><p>${strain.desc}</p></div>
      <div class="strain-detail-stats"><div class="strain-stat"><div class="strain-stat-value">${strain.thc}</div><div class="strain-stat-label">THC</div></div><div class="strain-stat"><div class="strain-stat-value">${strain.cbd}</div><div class="strain-stat-label">CBD</div></div></div>
      <div class="strain-detail-section"><label>Sabor</label><p>${strain.flavor}</p></div>
      <div class="strain-detail-section"><label>Efectos</label><p>${strain.effects}</p></div>
      <div class="strain-detail-section"><label>Publicaciones con esta cepa</label><div id="strain-posts"></div></div>`;
    this.showView('strain-detail');
    const related = this.state.posts.filter(p => p.strain && p.strain.id===strainId).slice(0,10);
    const sp = document.getElementById('strain-posts');
    if (related.length===0) { sp.innerHTML = '<div class="empty" style="padding:1rem 0">No hay publicaciones con esta cepa aún</div>'; }
    else { sp.innerHTML = related.map(p => this.renderPostHTML(p)).join(''); this.bindPostEvents(sp); }
  },

  // ----- PROFILE -----
  renderProfile() {
    const u = this.currentUser;
    if (!u) return;
    this.renderProfileUser(u, true);
  },

  renderProfileUser(u, isOwner) {
    this.el['profile-cover'].style.backgroundImage = u.cover ? `url(${u.cover})` : 'linear-gradient(135deg, rgba(46,204,113,0.3), rgba(52,152,219,0.3))';
    this.el['profile-avatar'].innerHTML = this.getAvatarHTML(u.avatar);
    this.el['profile-name'].textContent = '@' + u.username;
    this.el['profile-bio'].textContent = u.bio || 'Sin biografía';
    this.el['profile-location'].textContent = u.location || 'Desconocido';
    this.el['profile-joined'].textContent = new Date(u.joinDate).toLocaleDateString('es-ES', { year:'numeric', month:'long' });
    const userPosts = this.state.posts.filter(p => p.userId===u.id);
    this.el['profile-posts-count'].textContent = userPosts.length;
    this.el['profile-followers-count'].textContent = u.followers.length;
    this.el['profile-following-count'].textContent = u.following.length;
    this._profileUserId = u.id;
    this.renderProfileTab('posts');
    const actions = this.el['profile-actions'];
    if (!isOwner) {
      const isFollowing = this.currentUser && this.currentUser.following.includes(u.id);
      actions.innerHTML = `<button class="auth-btn follow-btn ${isFollowing?'following':''}" data-follow-id="${u.id}" style="flex:1">${isFollowing?'✓ Siguiendo':'➕ Seguir'}</button><button class="auth-btn secondary" data-action="back">← Volver</button>`;
      actions.querySelector('.follow-btn').addEventListener('click', e => { this.toggleFollow(parseInt(e.target.dataset.followId)); });
      actions.querySelector('[data-action="back"]').addEventListener('click', () => this.showView('feed'));
      this.el['profile-dropdown-btn'].classList.remove('hidden');
    } else {
      actions.innerHTML = `<button class="auth-btn" id="btn-edit-profile" style="flex:1">✏️ Editar Perfil</button><button class="auth-btn secondary" id="btn-logout">🚪 Salir</button>`;
      document.getElementById('btn-edit-profile').addEventListener('click', () => this.showView('edit-profile'));
      document.getElementById('btn-logout').addEventListener('click', () => this.logout());
      this.el['profile-dropdown-btn'].classList.add('hidden');
    }
    this.showView('profile');
  },

  renderProfileTab(tab) {
    const uId = this._profileUserId;
    if (!uId) return;
    const container = this.el['profile-posts'];
    const user = this.state.users.find(u=>u.id===uId);
    if (!user) return;
    if (tab==='posts') {
      const posts = this.state.posts.filter(p => p.userId===uId).sort((a,b)=>b.timestamp-a.timestamp);
      if (posts.length===0) { container.innerHTML = '<div class="empty"><div class="big">📝</div>No hay publicaciones</div>'; }
      else { container.innerHTML = posts.map(p => this.renderPostHTML(p)).join(''); this.bindPostEvents(container); }
    } else if (tab==='likes') {
      const liked = this.state.posts.filter(p => p.likes.includes(uId)).sort((a,b)=>b.timestamp-a.timestamp);
      if (liked.length===0) { container.innerHTML = '<div class="empty"><div class="big">❤️</div>Sin likes aún</div>'; }
      else { container.innerHTML = liked.map(p => this.renderPostHTML(p)).join(''); this.bindPostEvents(container); }
    } else if (tab==='strains') {
      const usedIds = [...new Set(this.state.posts.filter(p => p.userId===uId && p.strain).map(p => p.strain.id))];
      const used = STRAINS.filter(s => usedIds.includes(s.id));
      if (used.length===0) { container.innerHTML = '<div class="empty"><div class="big">🌿</div>No ha usado cepas aún</div>'; }
      else { container.innerHTML = `<div class="strain-grid">${used.map(s => `<div class="strain-card" data-strain-id="${s.id}"><div class="strain-card-emoji">${s.emoji}</div><div class="strain-card-name">${s.name}</div><span class="strain-card-type ${s.type}">${s.type}</span></div>`).join('')}</div>`; container.querySelectorAll('.strain-card').forEach(el => { el.addEventListener('click', () => this.showStrainDetail(el.dataset.strainId)); }); }
    }
  },

  showUserProfile(userId) {
    const u = this.state.users.find(u=>u.id===userId);
    if (!u) return;
    this.renderProfileUser(u, this.currentUser&&this.currentUser.id===userId);
  },

  toggleFollow(targetUserId) {
    const user = this.currentUser;
    if (!user) return;
    const target = this.state.users.find(u=>u.id===targetUserId);
    if (!target||target.id===user.id) return;
    const idx = user.following.indexOf(targetUserId);
    if (idx>-1) { user.following.splice(idx,1); target.followers = target.followers.filter(id=>id!==user.id); }
    else { user.following.push(targetUserId); target.followers.push(user.id); }
    this.saveData();
    const activeExplore = document.querySelector('.explore-tabs .tab.active');
    if (activeExplore) { this.renderExplore(activeExplore.dataset.explore); return; }
    this.renderProfile();
  },

  showPostDetail(postId) {
    const post = this.state.posts.find(p=>p.id===postId);
    if (!post) return;
    const container = this.el['post-detail-content'];
    container.innerHTML = this.renderPostHTML(post);
    this.bindPostEvents(container);
    if (post.comments.length>0) {
      let html = '<div class="strain-detail-section"><label>Comentarios</label>';
      post.comments.forEach(c => { html += `<div class="comment"><div class="avatar-sm">${this.getAvatarHTML(this.state.users.find(u=>u.id===c.userId)?.avatar)}</div><div class="comment-body"><div class="comment-user">@${c.username}</div><div class="comment-text">${c.text}</div><div class="comment-time">${this.getTimeAgo(c.timestamp)}</div></div></div>`; });
      html += '</div>';
      container.innerHTML += html;
    }
    this.el['comment-input'].dataset.postId = postId;
    this.el['comment-input'].value = '';
    this.showView('post-detail');
  },

  renderNotifications() {
    const user = this.currentUser;
    if (!user) return;
    const notifs = this.state.notifications.filter(n => n.userId===user.id).sort((a,b)=>b.timestamp-a.timestamp);
    const container = this.el['notif-content'];
    if (notifs.length===0) { container.innerHTML = '<div class="empty"><div class="big">🔔</div>No hay notificaciones</div>'; return; }
    container.innerHTML = notifs.map(n => {
      const icon = n.type==='like'?'❤️':'💬';
      const text = n.type==='like' ? `A <strong>@${n.fromUsername}</strong> le gustó tu publicación` : `<strong>@${n.fromUsername}</strong> comentó tu publicación`;
      return `<div class="notif ${n.read?'':'unread'}" data-notif-id="${n.id}"><div class="notif-icon">${icon}</div><div class="notif-body">${text}<div class="notif-time">${this.getTimeAgo(n.timestamp)}</div></div>${n.read?'':'<div class="notif-dot"></div>'}</div>`;
    }).join('');
    container.querySelectorAll('.notif').forEach(el => {
      el.addEventListener('click', () => { const n = this.state.notifications.find(not=>not.id===parseInt(el.dataset.notifId)); if (n) { n.read = true; this.saveData(); } this.renderNotifications(); });
    });
  },

  renderSettings() {
    const u = this.currentUser;
    if (!u) return;
    this.updateBadge();
    if (this.el['settings-username']) this.el['settings-username'].textContent = '@'+u.username;
    if (this.el['settings-email']) this.el['settings-email'].textContent = u.email||'No registrado';
    if (this.el['settings-joindate']) this.el['settings-joindate'].textContent = new Date(u.joinDate).toLocaleDateString('es-ES', { year:'numeric', month:'long', day:'numeric' });
  },

  setupEditProfile() {
    const u = this.currentUser;
    if (!u) return;
    this.el['edit-current-avatar'].innerHTML = this.getAvatarHTML(u.avatar);
    this.el['edit-bio'].value = u.bio&&u.bio!=='Usuario anónimo 🌿' ? u.bio : '';
    this.el['edit-location'].value = u.location || '';
    this.el['edit-website'].value = u.website || '';
    if (u.cover) {
      this.el['edit-cover-img'].src = u.cover;
      this.el['edit-cover-preview'].classList.remove('hidden');
    } else {
      this.el['edit-cover-preview'].classList.add('hidden');
      this.el['edit-cover-img'].src = '';
    }
    this.el['edit-avatar-input'].value = '';
    this.el['edit-cover-input'].value = '';
  },

  saveProfile() {
    const user = this.currentUser;
    if (!user) return;
    const bio = this.el['edit-bio'].value.trim();
    const location = this.el['edit-location'].value.trim();
    const website = this.el['edit-website'].value.trim();
    const avatarImg = this.el['edit-current-avatar'].querySelector('img');
    if (avatarImg) user.avatar = avatarImg.src;
    const coverPreview = this.el['edit-cover-preview'];
    const coverImg = this.el['edit-cover-img'];
    if (coverPreview.classList.contains('hidden') && !coverImg.src && user.cover) {
      user.cover = '';
    } else if (coverImg.src) {
      user.cover = coverImg.src;
    }
    if (bio) user.bio = bio;
    if (location) user.location = location;
    if (website) user.website = website;
    if (user.isAnonymous) user.bio = bio || 'Usuario anónimo 🌿';
    this.state.posts.forEach(p => { if (p.userId===user.id) p.userAvatar = user.avatar; });
    this.saveData();
    this.updateBadge();
    this.toast('Perfil actualizado ✓');
    this.showView('profile');
  },

  toast(msg) {
    const el = this.el.toast;
    el.textContent = msg;
    el.classList.remove('hidden');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => el.classList.add('hidden'), 2500);
  },

  saveData() {
    try { localStorage.setItem('weedforum_data', JSON.stringify(this.state)); } catch(e) {}
  },

  loadData() {
    try { const raw = localStorage.getItem('weedforum_data'); if (raw) Object.assign(this.state, JSON.parse(raw)); } catch(e) {}
  },

  seedData() {
    this.state.users = [
      { id:1, username:'cannabis_expert', email:'expert@weed.com', password:'1234', avatar:'🌿', cover:'', bio:'Experto en cepas cannábicas 🧬', location:'Barcelona', website:'', followers:[2,4], following:[2,3], joinDate:'2024-01-15T10:00:00Z', isAnonymous:false },
      { id:2, username:'green_thumbs', email:'green@weed.com', password:'1234', avatar:'🍃', cover:'', bio:'Cultivador orgánico 🌱', location:'Madrid', website:'', followers:[1,3], following:[1,4], joinDate:'2024-03-20T10:00:00Z', isAnonymous:false },
      { id:3, username:'stoner_life', email:'stoner@weed.com', password:'1234', avatar:'🔥', cover:'', bio:'Vida cannábica 24/7 🌿', location:'Valencia', website:'', followers:[1,4], following:[1,2], joinDate:'2024-06-10T10:00:00Z', isAnonymous:false },
      { id:4, username:'weed_artist', email:'artist@weed.com', password:'1234', avatar:'🎨', cover:'', bio:'Arte y cannabis 🎨', location:'Bilbao', website:'', followers:[2,3], following:[1,3], joinDate:'2024-09-05T10:00:00Z', isAnonymous:false }
    ];
    this.state.nextId = 5;
    this.state.posts = [
      { id:1, userId:1, username:'cannabis_expert', userAvatar:'🌿', content:'Probando la OG Kush por primera vez. Increíble sabor a pino con un toque cítrico. Efecto muy equilibrado 🎯', strain:{id:'og-kush',name:'OG Kush',emoji:'🌲',type:'hybrid'}, type:'', image:'', likes:[2,3], comments:[{userId:2,username:'green_thumbs',text:'Una de mis favoritas!',timestamp:Date.now()-86400000}], timestamp:Date.now()-7200000 },
      { id:2, userId:2, username:'green_thumbs', userAvatar:'🍃', content:'Mi planta de Blue Dream ya tiene 3 semanas de floración. Se ve hermosa 💙', strain:{id:'blue-dream',name:'Blue Dream',emoji:'💙',type:'hybrid'}, type:'', image:'', likes:[1,3], comments:[], timestamp:Date.now()-14400000 },
      { id:3, userId:3, username:'stoner_life', userAvatar:'🔥', content:'¿Alguien ha probado la nueva variedad de Gelato? Dicen que es la mejor para el dolor crónico', strain:null, type:'hybrid', image:'', likes:[4], comments:[{userId:1,username:'cannabis_expert',text:'Sí, es excelente para el dolor!',timestamp:Date.now()-3600000}], timestamp:Date.now()-10800000 },
      { id:4, userId:4, username:'weed_artist', userAvatar:'🎨', content:'Noche de creatividad con Jack Herer. Perfecta para pintar y crear 🎨🌲', strain:{id:'jack-herer',name:'Jack Herer',emoji:'🌲',type:'sativa'}, type:'', image:'', likes:[1,2,3], comments:[], timestamp:Date.now()-5400000 },
      { id:5, userId:1, username:'cannabis_expert', userAvatar:'🌿', content:'TOP 3 cepas para dormir bien:\n1. Northern Lights 🌌\n2. Granddaddy Purple 🍇\n3. Bubba Kush ☕\n¿Cuál es tu favorita?', strain:null, type:'indica', image:'', likes:[2,3,4], comments:[{userId:3,username:'stoner_life',text:'Northern Lights sin duda!',timestamp:Date.now()-1800000}], timestamp:Date.now()-3600000 }
    ];
    this.state.notifications = [
      { id:1, userId:1, type:'like', fromUsername:'green_thumbs', postId:1, read:false, timestamp:Date.now()-8000000 },
      { id:2, userId:1, type:'comment', fromUsername:'stoner_life', postId:1, read:false, timestamp:Date.now()-5000000 },
      { id:3, userId:1, type:'like', fromUsername:'weed_artist', postId:5, read:true, timestamp:Date.now()-2000000 }
    ];
  }
};

const DEFAULT_AVATARS = ['🌿','🍃','🔥','💚','🌲','🍀','☘️','🌱','🌸','🌈','⭐','💫','🍄','🌻','🍂'];

document.addEventListener('DOMContentLoaded', () => App.init());
