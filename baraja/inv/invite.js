const PACKAGE = "es.mafn.michat";
const GAMES = {"mus":"Mus","tute":"Tute","chinchon":"Chinchón","brisca":"Brisca","escoba":"Escoba","truco":"Truco","guinote":"Guiñote","cinquillo":"Cinquillo","pocha":"Pocha","julepe":"Julepe","remigio":"Remigio","cuatrola":"Cuatrola"};
const T = {"es":{"app":"Baraja Española","ogTitle":"Partida de {g} en Baraja Española","ogDesc":"Te invitan a una mesa de {g}. Toca para sentarte.","titleNick":"{n} te invita a una partida de {g}","title":"Te invitan a una partida de {g}","need":"Para sentarte en la mesa necesitas la app {app}: gratis, para Android.","install":"Instalar desde Google Play","after":"Al abrirla por primera vez elige tu nick y te llevará directamente a la mesa. Date prisa: la mesa espera, pero no para siempre.","have":"Ya tengo la app: abrir la mesa","android":"La app solo está disponible para Android.","homeTitle":"Baraja Española","homeText":"Mus, tute, chinchón, brisca, escoba, truco, guiñote, cinquillo, pocha, julepe, remigio y cuatrola con la baraja española, con amigos o contra robots.","homeBtn":"Descargar en Google Play"},"it":{"app":"Carte Spagnole","ogTitle":"Partita di {g} su Carte Spagnole","ogDesc":"Sei invitato a un tavolo di {g}. Tocca per sederti.","titleNick":"{n} ti invita a una partita di {g}","title":"Sei invitato a una partita di {g}","need":"Per sederti al tavolo ti serve l'app {app}: gratuita, per Android.","install":"Installa da Google Play","after":"Alla prima apertura scegli il tuo nick e ti porterà direttamente al tavolo. Fai presto: il tavolo aspetta, ma non per sempre.","have":"Ho già l'app: apri il tavolo","android":"L'app è disponibile solo per Android.","homeTitle":"Carte Spagnole","homeText":"Mus, Tute, Chinchón, Brisca, Escoba, Truco, Guiñote, Cinquillo, Pocha, Julepe, Remigio e Cuatrola con il mazzo spagnolo, con amici o contro i robot.","homeBtn":"Scarica su Google Play"},"pt":{"app":"Baralho Espanhol","ogTitle":"Partida de {g} no Baralho Espanhol","ogDesc":"Convidam-te para uma mesa de {g}. Toca para te sentares.","titleNick":"{n} convida-te para uma partida de {g}","title":"Convidam-te para uma partida de {g}","need":"Para te sentares à mesa precisas da app {app}: grátis, para Android.","install":"Instalar a partir do Google Play","after":"Ao abri-la pela primeira vez escolhe o teu nick e ela leva-te diretamente à mesa. Despacha-te: a mesa espera, mas não para sempre.","have":"Já tenho a app: abrir a mesa","android":"A app só está disponível para Android.","homeTitle":"Baralho Espanhol","homeText":"Mus, Tute, Chinchón, Brisca, Escoba, Truco, Guiñote, Cinquillo, Pocha, Julepe, Remigio e Cuatrola com o baralho espanhol, com amigos ou contra robôs.","homeBtn":"Transferir no Google Play"},"en":{"app":"Spanish Deck","ogTitle":"A game of {g} on Spanish Deck","ogDesc":"You are invited to a {g} table. Tap to take a seat.","titleNick":"{n} invites you to a game of {g}","title":"You are invited to a game of {g}","need":"To sit at the table you need the {app} app: free, for Android.","install":"Install from Google Play","after":"When you open it for the first time, pick your nick and it will take you straight to the table. Be quick: the table waits, but not for ever.","have":"I already have the app: open the table","android":"The app is only available for Android.","homeTitle":"Spanish Deck","homeText":"Mus, Tute, Chinchón, Brisca, Escoba, Truco, Guiñote, Cinquillo, Pocha, Julepe, Remigio and Cuatrola with the Spanish deck, with friends or against robots.","homeBtn":"Get it on Google Play"},"fr":{"app":"Cartes Espagnoles","ogTitle":"Partie de {g} sur Cartes Espagnoles","ogDesc":"Tu es invité à une table de {g}. Touche pour t'asseoir.","titleNick":"{n} t'invite à une partie de {g}","title":"Tu es invité à une partie de {g}","need":"Pour t'asseoir à la table, il te faut l'appli {app} : gratuite, pour Android.","install":"Installer depuis Google Play","after":"À la première ouverture, choisis ton pseudo et elle t'emmènera directement à la table. Fais vite : la table attend, mais pas éternellement.","have":"J'ai déjà l'appli : ouvrir la table","android":"L'appli n'est disponible que pour Android.","homeTitle":"Cartes Espagnoles","homeText":"Mus, Tute, Chinchón, Brisca, Escoba, Truco, Guiñote, Cinquillo, Pocha, Julepe, Remigio et Cuatrola avec le jeu espagnol, entre amis ou contre des robots.","homeBtn":"Disponible sur Google Play"},"de":{"app":"Spanische Karten","ogTitle":"Eine Partie {g} in Spanische Karten","ogDesc":"Du bist an einen {g}-Tisch eingeladen. Tippe, um Platz zu nehmen.","titleNick":"{n} lädt dich zu einer Partie {g} ein","title":"Du bist zu einer Partie {g} eingeladen","need":"Um dich an den Tisch zu setzen, brauchst du die App {app}: kostenlos, für Android.","install":"Bei Google Play installieren","after":"Beim ersten Öffnen wählst du deinen Nick, dann bringt sie dich direkt an den Tisch. Beeil dich: Der Tisch wartet, aber nicht ewig.","have":"Ich habe die App schon: Tisch öffnen","android":"Die App gibt es nur für Android.","homeTitle":"Spanische Karten","homeText":"Mus, Tute, Chinchón, Brisca, Escoba, Truco, Guiñote, Cinquillo, Pocha, Julepe, Remigio und Cuatrola mit dem spanischen Deck, mit Freunden oder gegen Roboter.","homeBtn":"Jetzt bei Google Play"},"ro":{"app":"Cărți Spaniole","ogTitle":"O partidă de {g} în Cărți Spaniole","ogDesc":"Ești invitat la o masă de {g}. Atinge ca să te așezi.","titleNick":"{n} te invită la o partidă de {g}","title":"Ești invitat la o partidă de {g}","need":"Ca să te așezi la masă ai nevoie de aplicația {app}: gratuită, pentru Android.","install":"Instalează din Google Play","after":"La prima deschidere alege-ți nickul și te duce direct la masă. Grăbește-te: masa așteaptă, dar nu la nesfârșit.","have":"Am deja aplicația: deschide masa","android":"Aplicația este disponibilă doar pentru Android.","homeTitle":"Cărți Spaniole","homeText":"Mus, Tute, Chinchón, Brisca, Escoba, Truco, Guiñote, Cinquillo, Pocha, Julepe, Remigio și Cuatrola cu pachetul spaniol, cu prietenii sau împotriva roboților.","homeBtn":"Descarcă din Google Play"}};
// Página de invitación (lo añade web/build.mjs detrás de PACKAGE, GAMES y T).
// Elige el idioma del navegador si la app lo tiene (si no, el del enlace), pone el nick de quien invita,
// el enlace de Google Play con la mesa en el referrer y, en Android, "Ya tengo la app".
(function () {
  var card = document.querySelector('.card');
  if (!card) return;
  var game = card.getAttribute('data-game');
  var lang = card.getAttribute('data-lang');
  var langs = navigator.languages || [navigator.language || ''];
  for (var i = 0; i < langs.length; i++) {
    var l = String(langs[i]).slice(0, 2).toLowerCase();
    if (T[l]) { lang = l; break; }
  }
  var t = T[lang];
  document.documentElement.lang = lang;
  var q = new URLSearchParams(location.search);
  var mesa = q.get('mesa');
  if (mesa && !/^[A-Za-z0-9_-]{1,64}$/.test(mesa)) mesa = null;
  var nick = (q.get('de') || '').slice(0, 20);
  if (!/^[A-Za-z0-9_]{3,20}$/.test(nick)) nick = '';
  function fill(s, v) {
    return s.replace(/\{(\w+)\}/g, function (_, k) { return v[k] || ''; });
  }
  function set(id, text) {
    var e = document.getElementById(id);
    if (e) { e.textContent = text; e.hidden = !text; }
  }
  var play = 'https://play.google.com/store/apps/details?id=' + PACKAGE;
  if (game) {
    var g = GAMES[game];
    set('title', fill(nick ? t.titleNick : t.title, { g: g, n: nick }));
    document.title = document.getElementById('title').textContent;
    set('need', fill(t.need, { app: t.app }));
    set('install', t.install);
    set('after', t.after);
    if (mesa) play += '&referrer=' + encodeURIComponent('mesa=' + mesa);
  } else {
    set('title', t.homeTitle);
    set('need', t.homeText);
    set('install', t.homeBtn);
  }
  document.getElementById('install').href = play;
  var android = /Android/i.test(navigator.userAgent);
  if (!android) set('android', t.android);
  // Por si Android no abrió la app directamente (enlace sin verificar, o abierto dentro de otra app): un intent
  // que la abre si está instalada y, si no, va a Google Play.
  if (android && game && mesa) {
    var have = document.getElementById('have');
    have.textContent = t.have;
    have.hidden = false;
    have.href = 'intent://' + location.host + location.pathname + location.search
      + '#Intent;scheme=https;package=' + PACKAGE
      + ';S.browser_fallback_url=' + encodeURIComponent(play) + ';end';
  }
})();
