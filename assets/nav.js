document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var nav = btn.closest('nav');
      var open = nav.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      var nav = link.closest('nav');
      nav.classList.remove('nav-open');
      var btn = nav.querySelector('.nav-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  });
});
