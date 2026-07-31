(function () {
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var prevY = 0;

  function onScroll() {
    var y = window.scrollY;
    if (nav) {
      nav.classList.toggle('scrolled', y > 100);
      if (y > 200) {
        nav.style.transform = y > prevY ? 'translateY(-100%)' : 'translateY(0)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
    }
    prevY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('.nav-links a:not(.has-dropdown > a)').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
    navLinks.querySelectorAll('.has-dropdown > a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          link.parentElement.classList.toggle('open');
        }
      });
    });
  }

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  if (lightbox && lightboxImg && lightboxClose) {
    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
    document.querySelectorAll('.gallery-item, .gallery-open').forEach(function (item) {
      item.addEventListener('click', function () {
        var img = item.querySelector('img');
        if (img) {
          lightboxImg.src = img.getAttribute('data-full') || img.src;
          lightbox.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });
  }

  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button');
      var orig = btn.textContent;
      btn.textContent = 'Sent \u2713';
      btn.style.background = '#1A231C';
      setTimeout(function () {
        btn.textContent = orig;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }
})();
