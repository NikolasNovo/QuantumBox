(function(){
  const STORAGE_KEY = "quantumboxLang";
  const DEFAULT_LANG = "en";

  const translations = {
    en: {
      "common.select_language": "Select language",
      "common.language_selection": "Language selection",
      "common.toggle_navigation": "Toggle navigation",
      "nav.home": "Home",
      "nav.games": "Games",
      "nav.applications": "Applications",
      "nav.support": "Support",
      "nav.about": "About",
      "nav.roadmap": "Roadmap",

      "index.meta.title": "QuantumBox - Cozy Indie Games & Apps",
      "index.meta.description": "QuantumBox a project by Nikolas Novo - Beginner solo indie developer crafting cozy games and apps with heart. First release: Milky Way Star. Less noise, more soul.",
      "index.hero.welcome": "Welcome to",
      "index.hero.lead": "Beginner indie dev turning ideas into cozy apps & games! Less noise more heart, made for real people.",
      "index.hero.cta_game": "See the first game",
      "index.hero.cta_apps": "Explore applications",
      "index.hero.b1": "• Cozy vibes, small scope",
      "index.hero.b2": "• Built with curiosity patience and love for players",
      "index.hero.b3": "• Neon-cosmic palette with warm gold accents",
      "index.game.badge": "New Release",
      "index.game.lead": "A bite-size, starry arcade where simple taps guide a little star through the Milky Way. Easy to learn, soothing to play.",
      "index.game.cta_soon": "Coming soon on Google Play",
      "index.game.caption": "Milky Way Star - ingame screenshot",
      "index.upcoming.badge": "In Development",
      "index.upcoming.lead": "A cozy pixel-art action RPG set in a rainy medieval world. Wander forests, rivers and villages, meet gentle souls and hidden dangers, and slowly grow from a nameless wanderer into a true hero.",
      "index.upcoming.note": "Working title - Hero's Adventure. More information will appear as development goes on.",
      "index.support.title": "Support The Developer",
      "index.support.lead": "If you’d like to help me keep building useful apps, cozy worlds and tiny games, you can support QuantumBox with a small tip or crypto donation. Every bit of support goes into time, tools and coffee for future projects.",
      "index.about.title": "About Me",
      "index.about.p1": "Hi! I’m Nikolas Novo - the solo developer behind QuantumBox. I’m just starting my indie journey, learning in public, keeping scope small and focusing on warm feel-good experiences.",
      "index.about.p2": "I believe in cozy vibes, respectful design and games that brighten a day. If you’d like to follow along or collaborate drop me a line below.",
      "index.footer.tagline": "Indie spirit, cozy experiences built with heart curiosity and creativity.",
      "index.back_to_top": "Back to top",

      "apps.meta.title": "QuantumBox Applications - Practical Software by Nikolas Novo",
      "apps.meta.description": "QuantumBox applications: practical software products built by Nikolas Novo. Explore Pockex and upcoming productivity tools.",
      "apps.hero.eyebrow": "Applications by QuantumBox",
      "apps.hero.title": "Practical software with a cleaner, business-first approach.",
      "apps.hero.lead": "This page is focused on utility products and business tools. The current flagship application is Pockex - a focused workspace for exchange operations and cash register control.",
      "apps.hero.cta_demo": "Request Pockex demo",
      "apps.hero.cta_back": "Back to games page",
      "apps.pockex.badge": "In active development",
      "apps.pockex.desc": "Cash register and accounting for exchange operations: rates, trades, clients, and balances in one interface.",
      "apps.core.title": "Core capabilities",
      "apps.core.li1": "Rates and market tracking for daily exchange operations.",
      "apps.core.li2": "Buy/sell deals and cross-exchange flow in one workflow.",
      "apps.core.li3": "Cash register visibility and per-currency balance control.",
      "apps.core.li4": "Client records, notes, backups, and data transfer tools.",
      "apps.focus.title": "Current focus",
      "apps.focus.li1": "Private onboarding with early users.",
      "apps.focus.li2": "Flow polishing and performance improvements.",
      "apps.focus.li3": "Preparing public launch assets and release channels.",
      "apps.focus.cta_pilot": "Join pilot list",
      "apps.focus.cta_site": "Official Pockex website",
      "apps.focus.cta_contact": "Contact: info.pockex@gmail.com",
      "apps.roadmap.title": "Applications roadmap",
      "apps.roadmap.lead": "The applications line will stay focused on reliability and clear workflows first.",
      "apps.roadmap.now.title": "Now",
      "apps.roadmap.now.text": "Stabilize Pockex and expand pilot usage with real operator feedback.",
      "apps.roadmap.next.title": "Next",
      "apps.roadmap.next.text": "Public release preparation: onboarding docs, support flow, and legal pages.",
      "apps.roadmap.later.title": "Later",
      "apps.roadmap.later.text": "New utility apps for small teams where speed and clarity matter most.",
      "apps.cta.title": "Need a custom workflow?",
      "apps.cta.text": "Share your use case and I will evaluate if it fits the next product cycle.",
      "apps.cta.button": "Send an idea",
      "apps.footer.note": "QuantumBox. Games and applications by Nikolas Novo.",
      "apps.footer.support": "Support QuantumBox"
    },

    ru: {
      "common.select_language": "Выбор языка",
      "common.language_selection": "Список языков",
      "common.toggle_navigation": "Открыть меню",
      "nav.home": "Главная",
      "nav.games": "Игры",
      "nav.applications": "Приложения",
      "nav.support": "Поддержка",
      "nav.about": "Обо мне",
      "nav.roadmap": "План",

      "index.meta.title": "QuantumBox - Уютные инди-игры и приложения",
      "index.meta.description": "QuantumBox - проект Николаcа Ново. Начинающий solo indie-разработчик создает уютные игры и приложения с душой. Первый релиз: Milky Way Star.",
      "index.hero.welcome": "Добро пожаловать в",
      "index.hero.lead": "Начинающий инди-разработчик превращает идеи в уютные игры и приложения. Меньше шума, больше души.",
      "index.hero.cta_game": "Смотреть первую игру",
      "index.hero.cta_apps": "Посмотреть приложения",
      "index.hero.b1": "• Уютная атмосфера и компактный масштаб",
      "index.hero.b2": "• Сделано с любопытством, терпением и любовью к игрокам",
      "index.hero.b3": "• Неоново-космическая палитра с теплыми акцентами",
      "index.game.badge": "Новый релиз",
      "index.game.lead": "Небольшая звездная аркада, где простыми тапами вы ведете маленькую звезду по Млечному пути. Легко начать и приятно играть.",
      "index.game.cta_soon": "Скоро в Google Play",
      "index.game.caption": "Milky Way Star - скриншот из игры",
      "index.upcoming.badge": "В разработке",
      "index.upcoming.lead": "Уютная пиксельная action-RPG в дождливом средневековом мире. Исследуйте леса, реки и деревни, встречайте добрых персонажей и скрытые опасности.",
      "index.upcoming.note": "Рабочее название - Hero's Adventure. Больше информации появится по мере разработки.",
      "index.support.title": "Поддержать разработчика",
      "index.support.lead": "Если хочешь помочь мне дальше делать полезные приложения, уютные миры и маленькие игры, можешь поддержать QuantumBox донатом или криптой.",
      "index.about.title": "Обо мне",
      "index.about.p1": "Привет! Я Николаc Ново - solo-разработчик QuantumBox. Я только начинаю путь в инди, учусь в публичном формате и делаю акцент на теплые и приятные впечатления.",
      "index.about.p2": "Я верю в уют, уважительный дизайн и игры, которые делают день лучше. Если хочешь следить за проектом или сотрудничать - напиши мне.",
      "index.footer.tagline": "Инди-дух и уютные проекты, сделанные с душой, любопытством и креативом.",
      "index.back_to_top": "Наверх",

      "apps.meta.title": "QuantumBox Applications - Практичное ПО от Nikolas Novo",
      "apps.meta.description": "Приложения QuantumBox: практичные программные продукты от Nikolas Novo. Pockex и будущие утилиты.",
      "apps.hero.eyebrow": "Приложения QuantumBox",
      "apps.hero.title": "Практичное ПО в более строгом, бизнес-ориентированном стиле.",
      "apps.hero.lead": "Эта страница посвящена утилитам и рабочим инструментам. Сейчас флагманское приложение - Pockex для обменных операций и контроля кассы.",
      "apps.hero.cta_demo": "Запросить демо Pockex",
      "apps.hero.cta_back": "Назад к странице игр",
      "apps.pockex.badge": "Активная разработка",
      "apps.pockex.desc": "Касса и учет обменных операций: курсы, сделки, клиенты и остатки в одном интерфейсе.",
      "apps.core.title": "Ключевые возможности",
      "apps.core.li1": "Отслеживание курсов и рынка для ежедневной работы.",
      "apps.core.li2": "Покупка/продажа и кросс-обмен в едином процессе.",
      "apps.core.li3": "Видимость кассы и контроль баланса по валютам.",
      "apps.core.li4": "Клиенты, заметки, бэкапы и перенос данных.",
      "apps.focus.title": "Текущий фокус",
      "apps.focus.li1": "Закрытое подключение ранних пользователей.",
      "apps.focus.li2": "Полировка сценариев и производительности.",
      "apps.focus.li3": "Подготовка к публичному релизу.",
      "apps.focus.cta_pilot": "Вступить в pilot-лист",
      "apps.focus.cta_site": "Официальный сайт Pockex",
      "apps.focus.cta_contact": "Контакт: info.pockex@gmail.com",
      "apps.roadmap.title": "Roadmap приложений",
      "apps.roadmap.lead": "Линейка приложений будет в первую очередь про надежность и понятные рабочие процессы.",
      "apps.roadmap.now.title": "Сейчас",
      "apps.roadmap.now.text": "Стабилизировать Pockex и расширить пилот с реальной обратной связью операторов.",
      "apps.roadmap.next.title": "Далее",
      "apps.roadmap.next.text": "Подготовка к публичному релизу: онбординг, поддержка и юридические страницы.",
      "apps.roadmap.later.title": "Позже",
      "apps.roadmap.later.text": "Новые утилиты для небольших команд, где важны скорость и ясность.",
      "apps.cta.title": "Нужен кастомный workflow?",
      "apps.cta.text": "Опиши задачу, и я оценю, можно ли включить ее в следующий цикл продукта.",
      "apps.cta.button": "Предложить идею",
      "apps.footer.note": "QuantumBox. Игры и приложения от Nikolas Novo.",
      "apps.footer.support": "Поддержать QuantumBox"
    },

    de: {
      "common.select_language": "Sprache wählen",
      "common.language_selection": "Sprachauswahl",
      "common.toggle_navigation": "Navigation umschalten",
      "nav.home": "Start",
      "nav.games": "Spiele",
      "nav.applications": "Anwendungen",
      "nav.support": "Support",
      "nav.about": "Über mich",
      "nav.roadmap": "Roadmap",
      "index.meta.title": "QuantumBox - Gemütliche Indie-Spiele & Apps",
      "index.hero.welcome": "Willkommen bei",
      "index.hero.lead": "Ein Indie-Entwickler verwandelt Ideen in gemütliche Spiele und Apps.",
      "index.hero.cta_game": "Erstes Spiel ansehen",
      "index.hero.cta_apps": "Apps ansehen",
      "index.support.title": "Entwickler unterstützen",
      "index.about.title": "Über mich",
      "apps.meta.title": "QuantumBox Anwendungen",
      "apps.hero.eyebrow": "Anwendungen von QuantumBox",
      "apps.hero.title": "Praktische Software mit klarerem Business-Fokus.",
      "apps.hero.lead": "Diese Seite konzentriert sich auf Tools und Utility-Produkte. Das aktuelle Flaggschiff ist Pockex.",
      "apps.hero.cta_demo": "Pockex-Demo anfragen",
      "apps.hero.cta_back": "Zur Spiele-Seite",
      "apps.focus.cta_site": "Offizielle Pockex-Website",
      "apps.roadmap.title": "Anwendungs-Roadmap",
      "apps.footer.support": "QuantumBox unterstützen"
    },

    es: {
      "common.select_language": "Elegir idioma",
      "common.language_selection": "Selección de idioma",
      "common.toggle_navigation": "Cambiar navegación",
      "nav.home": "Inicio",
      "nav.games": "Juegos",
      "nav.applications": "Aplicaciones",
      "nav.support": "Soporte",
      "nav.about": "Sobre mí",
      "nav.roadmap": "Hoja de ruta",
      "index.meta.title": "QuantumBox - Juegos y apps indie acogedores",
      "index.hero.welcome": "Bienvenido a",
      "index.hero.lead": "Un desarrollador indie convierte ideas en juegos y apps acogedores.",
      "index.hero.cta_game": "Ver el primer juego",
      "index.hero.cta_apps": "Explorar aplicaciones",
      "index.support.title": "Apoya al desarrollador",
      "index.about.title": "Sobre mí",
      "apps.meta.title": "Aplicaciones QuantumBox",
      "apps.hero.eyebrow": "Aplicaciones de QuantumBox",
      "apps.hero.title": "Software práctico con estilo más profesional.",
      "apps.hero.lead": "Esta página está enfocada en herramientas y software útil. El producto principal actual es Pockex.",
      "apps.hero.cta_demo": "Solicitar demo de Pockex",
      "apps.hero.cta_back": "Volver a juegos",
      "apps.focus.cta_site": "Sitio oficial de Pockex",
      "apps.roadmap.title": "Roadmap de aplicaciones",
      "apps.footer.support": "Apoyar QuantumBox"
    },

    zh: {
      "common.select_language": "选择语言",
      "common.language_selection": "语言选择",
      "common.toggle_navigation": "切换导航",
      "nav.home": "首页",
      "nav.games": "游戏",
      "nav.applications": "应用",
      "nav.support": "支持",
      "nav.about": "关于",
      "nav.roadmap": "路线图",
      "index.meta.title": "QuantumBox - 温馨独立游戏与应用",
      "index.hero.welcome": "欢迎来到",
      "index.hero.lead": "独立开发者将创意打造成温馨的游戏与应用。",
      "index.hero.cta_game": "查看第一款游戏",
      "index.hero.cta_apps": "查看应用",
      "index.support.title": "支持开发者",
      "index.about.title": "关于我",
      "apps.meta.title": "QuantumBox 应用",
      "apps.hero.eyebrow": "QuantumBox 应用",
      "apps.hero.title": "更专业风格的实用软件。",
      "apps.hero.lead": "本页专注于实用工具和业务软件。目前旗舰应用是 Pockex。",
      "apps.hero.cta_demo": "申请 Pockex 演示",
      "apps.hero.cta_back": "返回游戏页",
      "apps.focus.cta_site": "Pockex 官方网站",
      "apps.roadmap.title": "应用路线图",
      "apps.footer.support": "支持 QuantumBox"
    },

    ja: {
      "common.select_language": "言語を選択",
      "common.language_selection": "言語選択",
      "common.toggle_navigation": "ナビゲーション切替",
      "nav.home": "ホーム",
      "nav.games": "ゲーム",
      "nav.applications": "アプリ",
      "nav.support": "サポート",
      "nav.about": "自己紹介",
      "nav.roadmap": "ロードマップ",
      "index.meta.title": "QuantumBox - 心地よいインディーゲームとアプリ",
      "index.hero.welcome": "ようこそ",
      "index.hero.lead": "インディー開発者がアイデアを心地よいゲームとアプリにします。",
      "index.hero.cta_game": "最初のゲームを見る",
      "index.hero.cta_apps": "アプリを見る",
      "index.support.title": "開発者を支援",
      "index.about.title": "自己紹介",
      "apps.meta.title": "QuantumBox アプリケーション",
      "apps.hero.eyebrow": "QuantumBox のアプリ",
      "apps.hero.title": "より実務的でプロ向けのソフトウェア。",
      "apps.hero.lead": "このページは実用ツール向けです。現在の主力アプリは Pockex です。",
      "apps.hero.cta_demo": "Pockex デモを依頼",
      "apps.hero.cta_back": "ゲームページへ戻る",
      "apps.focus.cta_site": "Pockex 公式サイト",
      "apps.roadmap.title": "アプリのロードマップ",
      "apps.footer.support": "QuantumBox を支援"
    },

    ko: {
      "common.select_language": "언어 선택",
      "common.language_selection": "언어 목록",
      "common.toggle_navigation": "내비게이션 토글",
      "nav.home": "홈",
      "nav.games": "게임",
      "nav.applications": "앱",
      "nav.support": "지원",
      "nav.about": "소개",
      "nav.roadmap": "로드맵",
      "index.meta.title": "QuantumBox - 아늑한 인디 게임과 앱",
      "index.hero.welcome": "환영합니다",
      "index.hero.lead": "인디 개발자가 아이디어를 아늑한 게임과 앱으로 만듭니다.",
      "index.hero.cta_game": "첫 게임 보기",
      "index.hero.cta_apps": "앱 보기",
      "index.support.title": "개발자 후원",
      "index.about.title": "소개",
      "apps.meta.title": "QuantumBox 애플리케이션",
      "apps.hero.eyebrow": "QuantumBox 애플리케이션",
      "apps.hero.title": "더 공식적이고 실용적인 소프트웨어.",
      "apps.hero.lead": "이 페이지는 유틸리티 제품에 집중합니다. 현재 대표 앱은 Pockex입니다.",
      "apps.hero.cta_demo": "Pockex 데모 요청",
      "apps.hero.cta_back": "게임 페이지로",
      "apps.focus.cta_site": "Pockex 공식 웹사이트",
      "apps.roadmap.title": "앱 로드맵",
      "apps.footer.support": "QuantumBox 지원"
    },

    hi: {
      "common.select_language": "भाषा चुनें",
      "common.language_selection": "भाषा सूची",
      "common.toggle_navigation": "नेविगेशन बदलें",
      "nav.home": "होम",
      "nav.games": "गेम्स",
      "nav.applications": "एप्लिकेशन",
      "nav.support": "सपोर्ट",
      "nav.about": "मेरे बारे में",
      "nav.roadmap": "रोडमैप",
      "index.meta.title": "QuantumBox - आरामदायक इंडी गेम्स और ऐप्स",
      "index.hero.welcome": "स्वागत है",
      "index.hero.lead": "एक इंडी डेवलपर आइडिया को आरामदायक गेम्स और ऐप्स में बदलता है।",
      "index.hero.cta_game": "पहला गेम देखें",
      "index.hero.cta_apps": "ऐप्स देखें",
      "index.support.title": "डेवलपर को सपोर्ट करें",
      "index.about.title": "मेरे बारे में",
      "apps.meta.title": "QuantumBox एप्लिकेशन",
      "apps.hero.eyebrow": "QuantumBox एप्लिकेशन",
      "apps.hero.title": "ज्यादा प्रोफेशनल और व्यावहारिक सॉफ्टवेयर।",
      "apps.hero.lead": "यह पेज यूटिलिटी प्रोडक्ट्स पर केंद्रित है। अभी प्रमुख ऐप Pockex है।",
      "apps.hero.cta_demo": "Pockex डेमो मांगें",
      "apps.hero.cta_back": "गेम्स पेज पर वापस",
      "apps.focus.cta_site": "Pockex आधिकारिक वेबसाइट",
      "apps.roadmap.title": "एप्लिकेशन रोडमैप",
      "apps.footer.support": "QuantumBox को सपोर्ट करें"
    },

    tr: {
      "common.select_language": "Dil seç",
      "common.language_selection": "Dil seçimi",
      "common.toggle_navigation": "Gezinmeyi aç/kapat",
      "nav.home": "Ana Sayfa",
      "nav.games": "Oyunlar",
      "nav.applications": "Uygulamalar",
      "nav.support": "Destek",
      "nav.about": "Hakkımda",
      "nav.roadmap": "Yol haritası",
      "index.meta.title": "QuantumBox - Samimi indie oyunlar ve uygulamalar",
      "index.hero.welcome": "Hoş geldiniz",
      "index.hero.lead": "Bir indie geliştirici fikirleri samimi oyunlara ve uygulamalara dönüştürüyor.",
      "index.hero.cta_game": "İlk oyunu gör",
      "index.hero.cta_apps": "Uygulamaları keşfet",
      "index.support.title": "Geliştiriciyi destekle",
      "index.about.title": "Hakkımda",
      "apps.meta.title": "QuantumBox Uygulamaları",
      "apps.hero.eyebrow": "QuantumBox Uygulamaları",
      "apps.hero.title": "Daha resmi ve iş odaklı pratik yazılım.",
      "apps.hero.lead": "Bu sayfa yardımcı araçlara odaklanır. Şu anki amiral gemisi uygulama Pockex'tir.",
      "apps.hero.cta_demo": "Pockex demosu iste",
      "apps.hero.cta_back": "Oyunlar sayfasına dön",
      "apps.focus.cta_site": "Resmi Pockex web sitesi",
      "apps.roadmap.title": "Uygulama yol haritası",
      "apps.footer.support": "QuantumBox'u destekle"
    }
  };

  const langSwitch = document.querySelector(".lang-switch");
  const langButton = document.querySelector(".lang-button");
  const langMenu = document.querySelector(".lang-menu");
  const langOptions = Array.from(document.querySelectorAll(".lang-option[data-lang]"));
  const langCurrent = document.querySelector("[data-lang-current]");
  const langCode = document.querySelector("[data-lang-code]");

  function t(lang, key){
    const dict = translations[lang] || translations[DEFAULT_LANG] || {};
    const fallback = translations[DEFAULT_LANG] || {};
    return dict[key] || fallback[key] || "";
  }

  function applyLanguage(lang){
    const normalized = translations[lang] ? lang : DEFAULT_LANG;

    document.querySelectorAll("[data-i18n]").forEach((el)=>{
      const key = el.getAttribute("data-i18n");
      const value = t(normalized, key);
      if(value){
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el)=>{
      const spec = (el.getAttribute("data-i18n-attr") || "").split(";");
      spec.forEach((part)=>{
        const rule = part.trim();
        if(!rule) return;
        const bits = rule.split(":");
        const attr = (bits[0] || "").trim();
        const key = (bits.slice(1).join(":") || "").trim();
        if(!attr || !key) return;
        const value = t(normalized, key);
        if(value){
          el.setAttribute(attr, value);
        }
      });
    });

    const titleEl = document.querySelector("title[data-i18n]");
    if(titleEl){
      document.title = titleEl.textContent;
    }

    if(langOptions.length){
      langOptions.forEach((option)=>{
        const active = option.getAttribute("data-lang") === normalized;
        option.setAttribute("aria-selected", String(active));
        if(active && langCurrent){
          langCurrent.textContent = option.textContent.trim();
        }
      });
    }

    if(langCode){
      langCode.textContent = normalized.toUpperCase();
    }

    document.documentElement.lang = normalized;
    localStorage.setItem(STORAGE_KEY, normalized);
  }

  if(langSwitch && langButton && langMenu){
    langButton.addEventListener("click", (event)=>{
      event.stopPropagation();
      const open = langSwitch.classList.toggle("is-open");
      langButton.setAttribute("aria-expanded", String(open));
    });

    langOptions.forEach((option)=>{
      option.addEventListener("click", ()=>{
        const code = option.getAttribute("data-lang") || DEFAULT_LANG;
        applyLanguage(code);
        langSwitch.classList.remove("is-open");
        langButton.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event)=>{
      if(!langSwitch.contains(event.target)){
        langSwitch.classList.remove("is-open");
        langButton.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (event)=>{
      if(event.key === "Escape"){
        langSwitch.classList.remove("is-open");
        langButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  const browserLang = (navigator.language || "en").toLowerCase().slice(0,2);
  const initial = saved && translations[saved] ? saved : (translations[browserLang] ? browserLang : DEFAULT_LANG);
  applyLanguage(initial);
})();
