(function(){
  const body = document.body;
  if(!body) return;

  const header = document.querySelector('header.nav');
  const navInner = document.querySelector('.nav-inner');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = Array.from(document.querySelectorAll('.navlinks a'));
  const toTop = document.getElementById('toTop');

  const smoothOffset = Number(body.dataset.smoothOffset || 8);
  const shrinkThreshold = Number(body.dataset.shrinkThreshold || 0);
  const topThreshold = Number(body.dataset.topThreshold || 500);

  function setMenu(open){
    body.classList.toggle('nav-open', open);
    if(navToggle){ navToggle.setAttribute('aria-expanded', String(open)); }
  }

  function goTo(hash){
    const el = document.querySelector(hash);
    if(!el) return;
    const headerOffset = header ? header.offsetHeight : 0;
    const rect = el.getBoundingClientRect();
    const top = window.scrollY + rect.top - (headerOffset + smoothOffset);
    window.scrollTo({ top, behavior:'smooth' });
  }

  if(navToggle){
    navToggle.addEventListener('click', ()=>setMenu(!body.classList.contains('nav-open')));
    document.addEventListener('click', (event)=>{
      if(!body.classList.contains('nav-open')) return;
      if(navInner && navInner.contains(event.target)) return;
      setMenu(false);
    });
    window.addEventListener('resize', ()=>{
      if(window.innerWidth > 900){ setMenu(false); }
    });
  }

  navLinks.forEach((link)=>{
    link.addEventListener('click', (event)=>{
      const href = link.getAttribute('href') || '';
      if(href.startsWith('#') && href.length > 1){
        event.preventDefault();
        goTo(href);
      }
      setMenu(false);
    });
  });

  const sectionSelectors = (body.dataset.spySections || '')
    .split(',')
    .map((value)=>value.trim())
    .filter(Boolean);

  if(sectionSelectors.length && header){
    const sections = sectionSelectors.map((selector)=>document.querySelector(selector)).filter(Boolean);
    if(sections.length){
      const inPageLinks = navLinks.filter((link)=>{
        const href = link.getAttribute('href') || '';
        return href.startsWith('#') && href.length > 1;
      });

      const spy = ()=>{
        const y = window.scrollY + header.offsetHeight + 20;
        let current = sections[0] ? '#' + sections[0].id : '';
        for(const section of sections){
          if(y >= section.offsetTop){
            current = '#' + section.id;
          }
        }
        inPageLinks.forEach((link)=>{
          link.classList.toggle('is-active', link.getAttribute('href') === current);
        });
      };
      window.addEventListener('scroll', spy, { passive:true });
      spy();
    }
  }

  if(shrinkThreshold > 0 || toTop){
    const onScroll = ()=>{
      if(shrinkThreshold > 0){
        body.classList.toggle('shrink', window.scrollY > shrinkThreshold);
      }
      if(toTop){
        toTop.classList.toggle('show', window.scrollY > topThreshold);
      }
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
  }

  if(body.dataset.enableHashOffset === 'true' && location.hash && location.hash.length > 1){
    setTimeout(()=>goTo(location.hash), 50);
  }

  const revealItems = Array.from(document.querySelectorAll('.reveal'));
  if(revealItems.length){
    if('IntersectionObserver' in window){
      const io = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14 });
      revealItems.forEach((item)=>io.observe(item));
    } else {
      revealItems.forEach((item)=>item.classList.add('visible'));
    }
  }

  const year = String(new Date().getFullYear());
  document.querySelectorAll('#y, #year, [data-year]').forEach((node)=>{
    node.textContent = year;
  });
})();
