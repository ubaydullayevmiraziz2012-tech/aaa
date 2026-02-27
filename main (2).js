// ===== TECHZONE JS =====

// ===== TRANSLATIONS =====
const T = {
  uz: {
    // NAV
    nav_home: "Bosh sahifa",
    nav_catalog: "Katalog",
    nav_cart: "Savat",
    nav_about: "Biz haqimizda",
    nav_contact: "Aloqa",
    cart_btn: "🛒 Savat",
    login_btn: "Kirish",

    // HERO
    hero_badge: "Yangi kolleksiya — 2025",
    hero_h1a: "Eng Yaxshi",
    hero_h1b: "Elektronika",
    hero_h1c: "Do'koni",
    hero_desc: "O'zbekistonning eng katta onlayn elektronika do'koniga xush kelibsiz. 10 000+ mahsulot, tez yetkazib berish va kafolat bilan.",
    hero_shop: "Xarid qilish →",
    hero_catalog: "Katalog",
    stat1_label: "Mahsulot",
    stat2_label: "Mijozlar",
    stat3_label: "Reyting",
    hero_pname: "iPhone 15 Pro Max",
    hero_pprice: "16 990 000 so'm",
    ft1: "⭐ Top tanlov",
    ft2: "🔥 -20% chegirma",
    ft3: "✅ Kafolat 2 yil",

    // CATEGORIES
    cat_tag: "Kategoriyalar",
    cat_title: "Nima qidirayapsiz?",
    cat_desc: "Barcha turkumlarda keng assortiment mavjud",
    cat1: "Smartfonlar", cat2: "Noutbuklar", cat3: "Audio", cat4: "Televizorlar",
    cat5: "Soatlar", cat6: "O'yin qurilmalari", cat7: "Kameralar", cat8: "Aksessuarlar",

    // PRODUCTS
    prod_tag: "Mahsulotlar",
    prod_title: "Eng Ko'p Sotilgan",
    prod_desc: "Mijozlar tomonidan eng yuqori baholangan mahsulotlar",
    badge_hot: "🔥 Top",
    badge_new: "Yangi",
    add_btn: "+",

    // PROMO
    promo_label: "⚡ Maxsus taklif",
    promo_title_a: "Bugungi",
    promo_title_b: "Chegirma",
    promo_title_c: "Fursatini Qo'ldan Bermang!",
    promo_sub: "Barcha smartfonlarga 25% gacha chegirma. Faqat bugun!",
    cnt_soat: "Soat", cnt_daqiqa: "Daqiqa", cnt_soniya: "Soniya",
    promo_go: "Aksiyaga o'tish →",
    promo_disc: "−25% chegirma",

    // FEATURES
    f1_title: "Tez Yetkazib Berish", f1_desc: "Toshkent bo'ylab 2-4 soatda, viloyatlarga 1-3 kun ichida yetkazib beramiz.",
    f2_title: "Rasmiy Kafolat", f2_desc: "Barcha mahsulotlarga 1-2 yil rasmiy ishlab chiqaruvchi kafolati.",
    f3_title: "Bo'lib To'lash", f3_desc: "0% foiz bilan 6 oygacha bo'lib to'lash. Hujjat talab qilinmaydi.",
    f4_title: "14 Kun Qaytarish", f4_desc: "Mahsulot mos kelmasa, 14 kun ichida hech qanday savol bermay qaytaramiz.",

    // CATALOG
    catalog_title: "Katalog",
    filter_title: "Filtr",
    filter_cat: "Kategoriya",
    filter_brand: "Brend",
    filter_price: "Narx (so'm)",
    price_from: "Dan",
    price_to: "Gacha",
    sort_pop: "Mashhurlik bo'yicha",
    sort_cheap: "Arzondan qimmaTga",
    sort_exp: "QimmatTdan arzonGA",
    sort_new: "Yangi",
    all_cats: "Barchasi",
    all_brands: "Barchasi",

    // CART
    cart_title: "Mening Savatim",
    cart_empty_title: "Savat bo'sh",
    cart_empty_desc: "Hali hech narsa qo'shilmagan. Xaridni boshlang!",
    cart_shop: "Xarid qilish →",
    summary_title: "Buyurtma summasi",
    summary_items: "Mahsulotlar",
    summary_delivery: "Yetkazib berish",
    summary_free: "Bepul",
    summary_discount: "Chegirma",
    summary_total: "Jami",
    promo_label2: "Promo kod",
    promo_placeholder: "Kodni kiriting",
    apply_btn: "Qo'llash",
    checkout_btn: "Buyurtma berish →",

    // ABOUT
    about_title_a: "TechZone",
    about_title_b: "Haqida",
    about_desc: "2018-yildan buyon O'zbekistonda eng sifatli elektronika mahsulotlarini etkazib berib kelmoqdamiz.",
    as1: "Mahsulot", as2: "Mijozlar", as3: "Shaharlar", as4: "Yillik tajriba",
    ac1_title: "Bizning Missiyamiz",
    ac1_desc: "Har bir o'zbek oilasi uchun zamonaviy va sifatli elektronikani qulay narxda taqdim etish.",
    ac2_title: "Kafolat va Sifat",
    ac2_desc: "Barcha mahsulotlarimiz original va rasmiy distribyutor orqali keltiriladi. 100% sifat kafolati.",
    ac3_title: "Tez Yetkazib Berish",
    ac3_desc: "O'zbekiston bo'ylab 14 ta shaharda o'z yetkazib berish xizmatimiz mavjud. Toshkentda 2-4 soatda.",
    ac4_title: "Mijozlar Xizmati",
    ac4_desc: "24/7 qo'llab-quvvatlash xizmati. Har qanday savolingiz bo'lsa, biz doim yordamga tayyormiz.",
    team_title: "Bizning Jamoa",
    tm1_name: "Jasur Xoliqov", tm1_role: "CEO & Asoschisi", tm1_desc: "10 yillik IT va savdo tajribasi",
    tm2_name: "Nilufar Rashidova", tm2_role: "Marketing Director", tm2_desc: "Raqamli marketing mutaxassisi",
    tm3_name: "Sherzod Toshmatov", tm3_role: "Tech Lead", tm3_desc: "Full-stack dasturchi",

    // CONTACT
    contact_title_a: "Biz Bilan",
    contact_title_b: "Bog'laning",
    contact_desc: "Savol, taklif yoki shikoyatlaringiz bo'lsa, biz doim eshitishga tayyormiz.",
    ci1_label: "Telefon", ci1_val: "+998 71 200-00-00",
    ci2_label: "Email", ci2_val: "info@techzone.uz",
    ci3_label: "Manzil", ci3_val: "Toshkent, Chilonzor, 22-uy",
    ci4_label: "Ish vaqti", ci4_val: "Dush–Yak: 9:00–22:00",
    form_title: "Xabar Yuboring",
    form_name: "Ismingiz",
    form_phone: "Telefon raqam",
    form_subject: "Mavzu",
    form_msg: "Xabar",
    form_select_default: "Mavzuni tanlang",
    form_opt1: "Buyurtma haqida",
    form_opt2: "Kafolat",
    form_opt3: "Hamkorlik",
    form_opt4: "Boshqa",
    form_send: "Xabar Yuborish →",
    form_success: "✅ Xabaringiz yuborildi!",

    // COLOR PICKER
    color_title: "Rang o'zgartirish",

    // FOOTER
    footer_about: "O'zbekistonning ishonchli elektronika do'koni. Sifat, kafolat va qulay narxlar.",
    fc1_title: "Kompaniya", fc1_1: "Biz haqimizda", fc1_2: "Yangiliklar", fc1_3: "Karyera", fc1_4: "Hamkorlik",
    fc2_title: "Xizmatlar", fc2_1: "Buyurtma berish", fc2_2: "Bo'lib to'lash", fc2_3: "Kafolat", fc2_4: "Qaytarish",
    fc3_title: "Aloqa", fc3_1: "📞 +998 71 200-00-00", fc3_2: "✉️ info@techzone.uz", fc3_3: "📍 Toshkent, Chilonzor", fc3_4: "🕐 9:00 – 22:00",
    footer_bottom_left: "© 2025 TechZone. Barcha huquqlar himoyalangan.",
    footer_bottom_right: "Maxfiylik · Foydalanish shartlari",

    // TOAST
    toast_added: "✅ Savatga qo'shildi!",
    toast_removed: "❌ Savatdan o'chirildi",
    toast_color: "🎨 Rang o'zgartirildi",
    toast_sent: "✅ Xabar yuborildi!",
  },
  ru: {
    nav_home: "Главная",
    nav_catalog: "Каталог",
    nav_cart: "Корзина",
    nav_about: "О нас",
    nav_contact: "Контакты",
    cart_btn: "🛒 Корзина",
    login_btn: "Войти",

    hero_badge: "Новая коллекция — 2025",
    hero_h1a: "Лучший",
    hero_h1b: "Электроника",
    hero_h1c: "Магазин",
    hero_desc: "Добро пожаловать в крупнейший онлайн магазин электроники Узбекистана. 10 000+ товаров, быстрая доставка и гарантия.",
    hero_shop: "Купить →",
    hero_catalog: "Каталог",
    stat1_label: "Товаров",
    stat2_label: "Клиентов",
    stat3_label: "Рейтинг",
    hero_pname: "iPhone 15 Pro Max",
    hero_pprice: "16 990 000 сум",
    ft1: "⭐ Топ выбор",
    ft2: "🔥 -20% скидка",
    ft3: "✅ Гарантия 2 года",

    cat_tag: "Категории",
    cat_title: "Что вы ищете?",
    cat_desc: "Широкий ассортимент во всех категориях",
    cat1: "Смартфоны", cat2: "Ноутбуки", cat3: "Аудио", cat4: "Телевизоры",
    cat5: "Часы", cat6: "Игровые устройства", cat7: "Камеры", cat8: "Аксессуары",

    prod_tag: "Товары",
    prod_title: "Самые продаваемые",
    prod_desc: "Товары с самыми высокими оценками покупателей",
    badge_hot: "🔥 Хит",
    badge_new: "Новинка",
    add_btn: "+",

    promo_label: "⚡ Спецпредложение",
    promo_title_a: "Сегодняшняя",
    promo_title_b: "Скидка",
    promo_title_c: "Не упустите шанс!",
    promo_sub: "До 25% скидки на все смартфоны. Только сегодня!",
    cnt_soat: "Часы", cnt_daqiqa: "Минуты", cnt_soniya: "Секунды",
    promo_go: "К акции →",
    promo_disc: "−25% скидка",

    f1_title: "Быстрая доставка", f1_desc: "По Ташкенту за 2-4 часа, по регионам за 1-3 дня.",
    f2_title: "Официальная гарантия", f2_desc: "Гарантия производителя 1-2 года на все товары.",
    f3_title: "Рассрочка 0%", f3_desc: "Рассрочка до 6 месяцев под 0%. Без документов.",
    f4_title: "Возврат 14 дней", f4_desc: "Если товар не подошёл, вернём без вопросов в течение 14 дней.",

    catalog_title: "Каталог",
    filter_title: "Фильтры",
    filter_cat: "Категория",
    filter_brand: "Бренд",
    filter_price: "Цена (сум)",
    price_from: "От",
    price_to: "До",
    sort_pop: "По популярности",
    sort_cheap: "Сначала дешевле",
    sort_exp: "Сначала дороже",
    sort_new: "Новинки",
    all_cats: "Все",
    all_brands: "Все",

    cart_title: "Моя Корзина",
    cart_empty_title: "Корзина пуста",
    cart_empty_desc: "Ничего не добавлено. Начните покупки!",
    cart_shop: "Купить →",
    summary_title: "Сумма заказа",
    summary_items: "Товары",
    summary_delivery: "Доставка",
    summary_free: "Бесплатно",
    summary_discount: "Скидка",
    summary_total: "Итого",
    promo_label2: "Промо код",
    promo_placeholder: "Введите код",
    apply_btn: "Применить",
    checkout_btn: "Оформить заказ →",

    about_title_a: "TechZone",
    about_title_b: "О нас",
    about_desc: "С 2018 года поставляем качественную электронику в Узбекистан.",
    as1: "Товаров", as2: "Клиентов", as3: "Городов", as4: "Лет опыта",
    ac1_title: "Наша миссия",
    ac1_desc: "Предоставить каждой узбекской семье современную электронику по доступным ценам.",
    ac2_title: "Гарантия и качество",
    ac2_desc: "Все товары оригинальные и поставляются через официальных дистрибьюторов.",
    ac3_title: "Быстрая доставка",
    ac3_desc: "Собственная служба доставки в 14 городах Узбекистана.",
    ac4_title: "Служба поддержки",
    ac4_desc: "Поддержка 24/7. Всегда готовы помочь с любым вопросом.",
    team_title: "Наша команда",
    tm1_name: "Жасур Холиков", tm1_role: "CEO & Основатель", tm1_desc: "10 лет в IT и торговле",
    tm2_name: "Нилуфар Рашидова", tm2_role: "Директор по маркетингу", tm2_desc: "Эксперт в digital-маркетинге",
    tm3_name: "Шерзод Тошматов", tm3_role: "Tech Lead", tm3_desc: "Full-stack разработчик",

    contact_title_a: "Свяжитесь",
    contact_title_b: "С нами",
    contact_desc: "Если у вас есть вопросы, предложения или жалобы, мы всегда готовы выслушать.",
    ci1_label: "Телефон", ci1_val: "+998 71 200-00-00",
    ci2_label: "Email", ci2_val: "info@techzone.uz",
    ci3_label: "Адрес", ci3_val: "Ташкент, Чиланзар, дом 22",
    ci4_label: "Режим работы", ci4_val: "Пн–Вс: 9:00–22:00",
    form_title: "Отправить сообщение",
    form_name: "Ваше имя",
    form_phone: "Номер телефона",
    form_subject: "Тема",
    form_msg: "Сообщение",
    form_select_default: "Выберите тему",
    form_opt1: "О заказе",
    form_opt2: "Гарантия",
    form_opt3: "Сотрудничество",
    form_opt4: "Другое",
    form_send: "Отправить →",
    form_success: "✅ Сообщение отправлено!",

    color_title: "Изменить цвет",

    footer_about: "Надёжный магазин электроники в Узбекистане. Качество, гарантия и доступные цены.",
    fc1_title: "Компания", fc1_1: "О нас", fc1_2: "Новости", fc1_3: "Карьера", fc1_4: "Партнёрство",
    fc2_title: "Услуги", fc2_1: "Сделать заказ", fc2_2: "Рассрочка", fc2_3: "Гарантия", fc2_4: "Возврат",
    fc3_title: "Контакты", fc3_1: "📞 +998 71 200-00-00", fc3_2: "✉️ info@techzone.uz", fc3_3: "📍 Ташкент, Чиланзар", fc3_4: "🕐 9:00 – 22:00",
    footer_bottom_left: "© 2025 TechZone. Все права защищены.",
    footer_bottom_right: "Конфиденциальность · Условия использования",

    toast_added: "✅ Добавлено в корзину!",
    toast_removed: "❌ Удалено из корзины",
    toast_color: "🎨 Цвет изменён",
    toast_sent: "✅ Сообщение отправлено!",
  }
};

// PRODUCTS DATA
const products = [
  { id:1, brand:"Apple", emoji:"📱", nameUz:"iPhone 15 Pro Max 256GB", nameRu:"iPhone 15 Pro Max 256GB", price:16990000, oldPrice:18500000, rating:4.9, reviews:1200, badge:"hot", category:"smartfonlar" },
  { id:2, brand:"Samsung", emoji:"💻", nameUz:"Galaxy Book4 Pro 16\"", nameRu:"Galaxy Book4 Pro 16\"", price:12450000, oldPrice:14000000, rating:4.7, reviews:340, badge:"new", category:"noutbuklar" },
  { id:3, brand:"Sony", emoji:"🎧", nameUz:"WH-1000XM5 Simsiz Quloqchin", nameRu:"WH-1000XM5 Беспроводные наушники", price:2890000, oldPrice:4100000, rating:5.0, reviews:890, badge:"sale", category:"audio" },
  { id:4, brand:"Apple", emoji:"⌚", nameUz:"Watch Series 10 45mm GPS", nameRu:"Watch Series 10 45mm GPS", price:6790000, oldPrice:7500000, rating:4.8, reviews:567, badge:"new", category:"soatlar" },
  { id:5, brand:"Samsung", emoji:"📺", nameUz:"QLED 4K Smart TV 65\"", nameRu:"QLED 4K Smart TV 65\"", price:22990000, oldPrice:26000000, rating:4.6, reviews:228, badge:"hot", category:"televizorlar" },
  { id:6, brand:"Sony", emoji:"🎮", nameUz:"PlayStation 5 Slim + 2 Gamepad", nameRu:"PlayStation 5 Slim + 2 Геймпада", price:7890000, oldPrice:9200000, rating:5.0, reviews:1500, badge:"sale", category:"oyinlar" },
  { id:7, brand:"Xiaomi", emoji:"📱", nameUz:"14 Ultra 512GB Titanium", nameRu:"14 Ultra 512GB Titanium", price:9990000, oldPrice:11500000, rating:4.7, reviews:445, badge:"new", category:"smartfonlar" },
  { id:8, brand:"Apple", emoji:"💻", nameUz:"MacBook Pro M3 14\" 16GB", nameRu:"MacBook Pro M3 14\" 16GB", price:19990000, oldPrice:22000000, rating:4.9, reviews:786, badge:"hot", category:"noutbuklar" },
  { id:9, brand:"Bose", emoji:"🎧", nameUz:"QuietComfort Ultra", nameRu:"QuietComfort Ultra", price:3490000, oldPrice:4200000, rating:4.8, reviews:312, badge:"sale", category:"audio" },
];

// STATE
let state = {
  lang: "uz",
  theme: "blue",
  cart: [],
  currentPage: "home",
  filterCat: "all",
  filterBrand: "all",
};

// ===== RENDER ENGINE =====
function t(key) { return T[state.lang][key] || key; }

function render() {
  renderNav();
  renderHome();
  renderCatalog();
  renderCart();
  renderAbout();
  renderContact();
  renderFooter();
  updateCartCount();
}

function renderNav() {
  document.getElementById("logo-text").innerHTML = `Tech<span>${t("nav_catalog").startsWith("К") ? "Зона" : "Zone"}</span>`;
  document.querySelectorAll(".nav-link").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = t(key);
  });
  document.getElementById("cart-btn-text").textContent = t("cart_btn");
  document.getElementById("login-btn-text").textContent = t("login_btn");
  document.querySelectorAll(".mobile-link").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = t(key);
  });
}

function renderHome() {
  const el = (id, txt) => { const e = document.getElementById(id); if(e) e.textContent = txt; };
  const html = (id, txt) => { const e = document.getElementById(id); if(e) e.innerHTML = txt; };
  el("hero-badge-text", t("hero_badge"));
  html("hero-h1", `${t("hero_h1a")}<br><span class="c1">${t("hero_h1b")}</span><br><span class="c2">${t("hero_h1c")}</span>`);
  el("hero-desc", t("hero_desc"));
  document.getElementById("hero-shop-btn").textContent = t("hero_shop");
  document.getElementById("hero-catalog-btn").textContent = t("hero_catalog");
  el("stat1-label", t("stat1_label"));
  el("stat2-label", t("stat2_label"));
  el("stat3-label", t("stat3_label"));
  el("hero-pname", t("hero_pname"));
  el("hero-pprice", t("hero_pprice"));
  el("ft1", t("ft1")); el("ft2", t("ft2")); el("ft3", t("ft3"));

  el("cat-tag", t("cat_tag")); el("cat-title", t("cat_title")); el("cat-desc", t("cat_desc"));
  const catNames = ["cat1","cat2","cat3","cat4","cat5","cat6","cat7","cat8"];
  catNames.forEach(k => el(k, t(k)));

  el("prod-tag", t("prod_tag")); el("prod-title", t("prod_title")); el("prod-desc", t("prod_desc"));
  renderProductCards("products-home-grid", products.slice(0,6));

  el("promo-label", t("promo_label"));
  el("promo-ta", t("promo_title_a")); el("promo-tb", t("promo_title_b")); el("promo-tc", t("promo_title_c"));
  el("promo-sub", t("promo_sub"));
  el("cnt-soat-label", t("cnt_soat")); el("cnt-daqiqa-label", t("cnt_daqiqa")); el("cnt-soniya-label", t("cnt_soniya"));
  document.getElementById("promo-go-btn").textContent = t("promo_go");
  el("promo-disc", t("promo_disc"));

  el("f1-title", t("f1_title")); el("f1-desc", t("f1_desc"));
  el("f2-title", t("f2_title")); el("f2-desc", t("f2_desc"));
  el("f3-title", t("f3_title")); el("f3-desc", t("f3_desc"));
  el("f4-title", t("f4_title")); el("f4-desc", t("f4_desc"));
}

function renderProductCards(containerId, prods) {
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = prods.map(p => {
    const name = state.lang === "uz" ? p.nameUz : p.nameRu;
    const badgeText = p.badge === "hot" ? t("badge_hot") : p.badge === "new" ? t("badge_new") : `-${Math.round((1 - p.price/p.oldPrice)*100)}%`;
    const badgeClass = p.badge === "hot" ? "hot" : p.badge === "new" ? "new" : "sale";
    const inCart = state.cart.find(c => c.id === p.id);
    return `
      <div class="product-card" onclick="addToCart(${p.id})">
        <div class="product-img">
          ${p.emoji}
          <div class="p-badge ${badgeClass}">${badgeText}</div>
        </div>
        <div class="product-body">
          <div class="p-brand">${p.brand}</div>
          <div class="p-name">${name}</div>
          <div class="p-rating">
            <span class="stars">${"★".repeat(Math.floor(p.rating))}${p.rating%1 ? "½" : ""}</span>
            <span class="rcount">${p.rating} (${p.reviews.toLocaleString()})</span>
          </div>
          <div class="p-footer">
            <div>
              <span class="p-price">${p.price.toLocaleString()}</span>
              <span class="p-old">${p.oldPrice.toLocaleString()}</span>
            </div>
            <button class="btn-add" onclick="event.stopPropagation();addToCart(${p.id})" style="${inCart ? 'background:var(--accent2)' : ''}">${inCart ? "✓" : "+"}</button>
          </div>
        </div>
      </div>`;
  }).join("");
}

function renderCatalog() {
  const el = (id, txt) => { const e = document.getElementById(id); if(e) e.textContent = txt; };
  el("catalog-page-title", t("catalog_title"));
  el("filter-title", t("filter_title"));
  el("filter-cat-title", t("filter_cat"));
  el("filter-brand-title", t("filter_brand"));
  el("filter-price-title", t("filter_price"));
  document.getElementById("price-from-input").placeholder = t("price_from");
  document.getElementById("price-to-input").placeholder = t("price_to");

  const sortEl = document.getElementById("sort-select");
  if(sortEl) sortEl.innerHTML = `
    <option value="pop">${t("sort_pop")}</option>
    <option value="cheap">${t("sort_cheap")}</option>
    <option value="exp">${t("sort_exp")}</option>
    <option value="new">${t("sort_new")}</option>`;

  const catBtns = document.getElementById("filter-cat-btns");
  const cats = [
    { key:"all", uz:"Barchasi", ru:"Все" },
    { key:"smartfonlar", uz:"Smartfonlar", ru:"Смартфоны" },
    { key:"noutbuklar", uz:"Noutbuklar", ru:"Ноутбуки" },
    { key:"audio", uz:"Audio", ru:"Аудио" },
    { key:"televizorlar", uz:"Televizorlar", ru:"Телевизоры" },
    { key:"soatlar", uz:"Soatlar", ru:"Часы" },
    { key:"oyinlar", uz:"O'yin qurilmalari", ru:"Игровые" },
  ];
  if(catBtns) catBtns.innerHTML = cats.map(c =>
    `<button class="filter-btn${state.filterCat===c.key?' active':''}" onclick="setCatFilter('${c.key}')">${state.lang==="uz"?c.uz:c.ru}</button>`
  ).join("");

  const brandBtns = document.getElementById("filter-brand-btns");
  const brands = [
    { key:"all", uz:"Barchasi", ru:"Все" },
    { key:"Apple", uz:"Apple", ru:"Apple" },
    { key:"Samsung", uz:"Samsung", ru:"Samsung" },
    { key:"Sony", uz:"Sony", ru:"Sony" },
    { key:"Xiaomi", uz:"Xiaomi", ru:"Xiaomi" },
    { key:"Bose", uz:"Bose", ru:"Bose" },
  ];
  if(brandBtns) brandBtns.innerHTML = brands.map(b =>
    `<button class="filter-btn${state.filterBrand===b.key?' active':''}" onclick="setBrandFilter('${b.key}')">${state.lang==="uz"?b.uz:b.ru}</button>`
  ).join("");

  let filtered = products;
  if(state.filterCat !== "all") filtered = filtered.filter(p => p.category === state.filterCat);
  if(state.filterBrand !== "all") filtered = filtered.filter(p => p.brand === state.filterBrand);

  renderProductCards("catalog-grid", filtered);

  const countEl = document.getElementById("catalog-count");
  if(countEl) countEl.textContent = `${filtered.length} ${state.lang==="uz"?"ta mahsulot":"товаров"}`;
}

function setCatFilter(cat) { state.filterCat = cat; renderCatalog(); }
function setBrandFilter(brand) { state.filterBrand = brand; renderCatalog(); }

function renderCart() {
  const el = (id, txt) => { const e = document.getElementById(id); if(e) e.textContent = txt; };
  el("cart-page-title", t("cart_title"));

  const container = document.getElementById("cart-items-list");
  if(!container) return;

  if(state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <span class="big-emoji">🛒</span>
        <h3>${t("cart_empty_title")}</h3>
        <p>${t("cart_empty_desc")}</p>
        <button class="btn-big" onclick="goPage('catalog')">${t("cart_shop")}</button>
      </div>`;
    document.getElementById("cart-summary").style.opacity = "0.4";
  } else {
    document.getElementById("cart-summary").style.opacity = "1";
    container.innerHTML = state.cart.map(item => {
      const p = products.find(x => x.id === item.id);
      const name = state.lang === "uz" ? p.nameUz : p.nameRu;
      return `
        <div class="cart-item">
          <div class="cart-item-emoji">${p.emoji}</div>
          <div class="cart-item-info">
            <div class="cart-item-brand">${p.brand}</div>
            <div class="cart-item-name">${name}</div>
            <div class="qty-control">
              <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
            </div>
          </div>
          <div>
            <div class="cart-item-price">${(p.price * item.qty).toLocaleString()}</div>
            <button class="btn-remove" onclick="removeFromCart(${p.id})">🗑</button>
          </div>
        </div>`;
    }).join("");
  }

  // Summary
  el("summary-title", t("summary_title"));
  el("summary-items-label", t("summary_items"));
  el("summary-delivery-label", t("summary_delivery"));
  el("summary-delivery-val", t("summary_free"));
  el("summary-discount-label", t("summary_discount"));
  el("summary-total-label", t("summary_total"));
  el("promo-label-text", t("promo_label2"));
  document.getElementById("promo-input")?.setAttribute("placeholder", t("promo_placeholder"));
  el("apply-btn-text", t("apply_btn"));
  el("checkout-btn-text", t("checkout_btn"));

  const total = state.cart.reduce((s, item) => {
    const p = products.find(x => x.id === item.id);
    return s + p.price * item.qty;
  }, 0);
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  el("summary-items-count", `${count}`);
  el("summary-items-val", total.toLocaleString());
  el("summary-discount-val", "−0");
  el("summary-total-val", total.toLocaleString());
}

function renderAbout() {
  const el = (id, txt) => { const e = document.getElementById(id); if(e) e.textContent = txt; };
  const html = (id, txt) => { const e = document.getElementById(id); if(e) e.innerHTML = txt; };
  html("about-h1", `${t("about_title_a")} <span>${t("about_title_b")}</span>`);
  el("about-desc", t("about_desc"));
  el("as1-label", t("as1")); el("as2-label", t("as2")); el("as3-label", t("as3")); el("as4-label", t("as4"));
  el("ac1-title", t("ac1_title")); el("ac1-desc", t("ac1_desc"));
  el("ac2-title", t("ac2_title")); el("ac2-desc", t("ac2_desc"));
  el("ac3-title", t("ac3_title")); el("ac3-desc", t("ac3_desc"));
  el("ac4-title", t("ac4_title")); el("ac4-desc", t("ac4_desc"));
  el("team-title", t("team_title"));
  el("tm1-name", t("tm1_name")); el("tm1-role", t("tm1_role")); el("tm1-desc", t("tm1_desc"));
  el("tm2-name", t("tm2_name")); el("tm2-role", t("tm2_role")); el("tm2-desc", t("tm2_desc"));
  el("tm3-name", t("tm3_name")); el("tm3-role", t("tm3_role")); el("tm3-desc", t("tm3_desc"));
}

function renderContact() {
  const el = (id, txt) => { const e = document.getElementById(id); if(e) e.textContent = txt; };
  const html = (id, txt) => { const e = document.getElementById(id); if(e) e.innerHTML = txt; };
  html("contact-h2", `${t("contact_title_a")} <span>${t("contact_title_b")}</span>`);
  el("contact-p", t("contact_desc"));
  el("ci1-label", t("ci1_label")); el("ci1-val", t("ci1_val"));
  el("ci2-label", t("ci2_label")); el("ci2-val", t("ci2_val"));
  el("ci3-label", t("ci3_label")); el("ci3-val", t("ci3_val"));
  el("ci4-label", t("ci4_label")); el("ci4-val", t("ci4_val"));
  el("form-title", t("form_title"));
  el("form-name-label", t("form_name")); el("form-phone-label", t("form_phone"));
  el("form-subject-label", t("form_subject")); el("form-msg-label", t("form_msg"));
  const sel = document.getElementById("form-select");
  if(sel) sel.innerHTML = `
    <option value="">${t("form_select_default")}</option>
    <option>${t("form_opt1")}</option>
    <option>${t("form_opt2")}</option>
    <option>${t("form_opt3")}</option>
    <option>${t("form_opt4")}</option>`;
  el("form-send-btn-text", t("form_send"));
}

function renderFooter() {
  const el = (id, txt) => { const e = document.getElementById(id); if(e) e.textContent = txt; };
  el("footer-about-text", t("footer_about"));
  el("fc1-title", t("fc1_title")); el("fc1-1", t("fc1_1")); el("fc1-2", t("fc1_2")); el("fc1-3", t("fc1_3")); el("fc1-4", t("fc1_4"));
  el("fc2-title", t("fc2_title")); el("fc2-1", t("fc2_1")); el("fc2-2", t("fc2_2")); el("fc2-3", t("fc2_3")); el("fc2-4", t("fc2_4"));
  el("fc3-title", t("fc3_title")); el("fc3-1", t("fc3_1")); el("fc3-2", t("fc3_2")); el("fc3-3", t("fc3_3")); el("fc3-4", t("fc3_4"));
  el("footer-bottom-left", t("footer_bottom_left"));
  el("footer-bottom-right", t("footer_bottom_right"));
  el("color-panel-title", t("color_title"));
}

// ===== NAVIGATION =====
function goPage(page) {
  state.currentPage = page;
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  document.querySelectorAll(".nav-link, .mobile-link").forEach(a => {
    a.classList.toggle("active", a.getAttribute("data-page") === page);
  });
  closeMobileMenu();
  if(page === "cart") renderCart();
  if(page === "catalog") renderCatalog();
  window.scrollTo({ top:0, behavior:"smooth" });
}

// ===== LANG =====
function setLang(lang) {
  state.lang = lang;
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  render();
}

// ===== THEME =====
function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelectorAll(".swatch").forEach(s => {
    s.classList.toggle("active", s.getAttribute("data-theme") === theme);
  });
  showToast(t("toast_color"));
}

function toggleColorPanel() {
  document.getElementById("color-panel").classList.toggle("open");
}

// Close panel on outside click
document.addEventListener("click", function(e) {
  const picker = document.getElementById("color-picker-wrap");
  if(picker && !picker.contains(e.target)) {
    document.getElementById("color-panel").classList.remove("open");
  }
});

// ===== CART =====
function addToCart(id) {
  const existing = state.cart.find(c => c.id === id);
  if(existing) { existing.qty++; }
  else { state.cart.push({ id, qty:1 }); }
  updateCartCount();
  renderProductCards("products-home-grid", products.slice(0,6));
  if(state.currentPage === "catalog") renderCatalog();
  showToast(t("toast_added"));
}

function removeFromCart(id) {
  state.cart = state.cart.filter(c => c.id !== id);
  updateCartCount();
  renderCart();
  showToast(t("toast_removed"));
}

function changeQty(id, delta) {
  const item = state.cart.find(c => c.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) removeFromCart(id);
  else renderCart();
}

function updateCartCount() {
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById("cart-count-badge");
  if(el) {
    el.textContent = count;
    el.classList.toggle("visible", count > 0);
  }
  const btnText = document.getElementById("cart-btn-text");
  if(btnText) btnText.textContent = `🛒 ${t("cart_btn").replace("🛒 ","")} ${count > 0 ? "("+count+")" : ""}`;
}

// ===== TOAST =====
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.getElementById("mobile-menu").classList.toggle("open");
}
function closeMobileMenu() {
  document.getElementById("mobile-menu").classList.remove("open");
}

// ===== COUNTDOWN =====
let countdownSecs = 8*3600 + 34*60 + 12;
setInterval(() => {
  if(countdownSecs <= 0) return;
  countdownSecs--;
  const h = Math.floor(countdownSecs/3600);
  const m = Math.floor((countdownSecs%3600)/60);
  const s = countdownSecs%60;
  const pad = n => String(n).padStart(2,"0");
  const eh = document.getElementById("cnt-hours"); if(eh) eh.textContent = pad(h);
  const em = document.getElementById("cnt-mins"); if(em) em.textContent = pad(m);
  const es = document.getElementById("cnt-secs"); if(es) es.textContent = pad(s);
}, 1000);

// ===== CONTACT FORM =====
function submitForm(e) {
  e.preventDefault();
  showToast(t("toast_sent"));
  e.target.reset();
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.setAttribute("data-theme", state.theme);
  render();
  goPage("home");
});
