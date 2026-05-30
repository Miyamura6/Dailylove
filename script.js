const frases = [

  "La vida no se trata de encontrarte a ti mismo, sino de crearte a ti mismo.",
  "Quien domina a los demás es fuerte; quien se domina a sí mismo es poderoso.",
  "No vemos las cosas como son, las vemos como somos.",
  "La felicidad depende más de tu actitud que de tus circunstancias.",
  "Cada día es una nueva oportunidad para comenzar.",
  "La calma es el verdadero poder.",
  "El tiempo es el recurso más valioso que poseemos.",
  "La sabiduría comienza cuando aceptamos que no lo sabemos todo.",
  "Las respuestas más importantes suelen estar dentro de nosotros.",
  "La vida cobra sentido cuando aprendemos a disfrutar el camino.",
  "Nunca es tarde para convertirte en quien quieres ser.",
  "Pequeños pasos cada día construyen grandes resultados.",
  "El éxito comienza cuando decides intentarlo.",
  "Hoy puede ser el día que cambie tu historia.",
  "Los sueños funcionan cuando tú trabajas por ellos.",
  "No te rindas; cada esfuerzo cuenta.",
  "Tu único límite es aquel que decides aceptar.",
  "Confía en el proceso, incluso cuando no entiendas el camino.",
  "Eres más fuerte de lo que imaginas.",
  "Cada amanecer trae una nueva oportunidad.",
  "Amarte es encontrar un hogar en tu sonrisa.",
  "Contigo aprendí que los pequeños momentos son los más valiosos.",
  "Tu presencia convierte cualquier día en algo especial.",
  "Eres mi pensamiento favorito al despertar.",
  "Amar es elegir a la misma persona cada día.",
  "Tus abrazos son mi lugar seguro.",
  "Mi felicidad tiene mucho que ver contigo.",
  "A tu lado la vida tiene un brillo diferente.",
  "Eres la casualidad más bonita de mi vida.",
  "Contigo, incluso el silencio se siente perfecto.",
  "No te rindas, por favor no cedas.",
  "La perfección es una pulida colección de errores.",
  "Cuando creíamos tener todas las respuestas, cambiaron todas las preguntas.",
  "Cinco minutos bastan para soñar toda una vida.",
  "Defender la alegría también es una forma de valentía.",
"Cada desafío es una oportunidad disfrazada.",
"Lo imposible solo tarda un poco más.",
"El valor de tu vida lo defines tú.",
"No cuentes los días, haz que los días cuenten.",
"Todo gran logro comienza con una decisión.",
"La disciplina vence a la motivación cuando esta desaparece.",
"Las tormentas también ayudan a crecer a las flores.",
"La constancia transforma los sueños en realidad.",
"El miedo disminuye cuando avanzas.",
"Tu futuro se construye hoy.",
"Las mejores historias comienzan con un paso valiente.",
"Cada error trae una enseñanza.",
"No necesitas ser perfecto para avanzar.",
"La confianza se construye con pequeñas victorias.",
"Lo que haces hoy importa.",
"Tu actitud puede cambiar tu destino.",
"Siempre hay algo nuevo que aprender.",
"La paciencia también es una forma de fuerza.",
"Los cambios comienzan desde dentro.",
"La esperanza es una decisión diaria.",
"El crecimiento ocurre fuera de la comodidad.",
"No temas empezar de nuevo.",
"Cada amanecer es una página en blanco.",
"La perseverancia abre puertas cerradas.",
"La gratitud transforma lo que tienes en suficiente.",
"Las metas grandes se alcanzan con acciones pequeñas.",
"El fracaso es parte del aprendizaje.",
"Cada día puedes ser una mejor versión de ti.",
"La vida recompensa a quienes insisten.",
"Todo progreso merece celebrarse.",
"Respira, confía y sigue.",
"La determinación supera al talento cuando el talento no trabaja.",
"No dejes que una mala hora arruine tu día.",
"Las oportunidades favorecen a quienes se preparan.",
"Tu energía atrae resultados.",
"Las dudas se vencen actuando.",
"Los límites suelen estar en la mente.",
"Crecer también significa soltar.",
"El esfuerzo siempre deja huellas.",
"La actitud correcta cambia todo.",
"El presente es donde ocurre la vida.",
"La serenidad es una forma de sabiduría.",
"Aprender a esperar también es avanzar.",
"Cada experiencia tiene algo que enseñar.",
"La verdad suele encontrarse en la simplicidad.",
"Quien escucha aprende dos veces.",
"Las preguntas correctas son tan valiosas como las respuestas.",
"La mente abierta encuentra más caminos.",
"El silencio también comunica.",
"Comprender es más poderoso que juzgar.",
"La libertad comienza en los pensamientos.",
"La experiencia es una gran maestra.",
"Todo cambia, y eso también es parte de la vida.",
"El equilibrio vale más que la perfección.",
"Las decisiones pequeñas construyen destinos grandes.",
"La sabiduría se cultiva día a día.",
"Las raíces profundas soportan las tormentas.",
"El conocimiento tiene valor cuando se aplica.",
"Cada persona ve el mundo de forma distinta.",
"La reflexión ilumina el camino.",
"Tu sonrisa puede alegrar un día entero.",
"La bondad nunca pasa de moda.",
"Lo sencillo suele ser lo más valioso.",
"Dar sin esperar también es riqueza.",
"Las palabras tienen poder.",
"La empatía acerca corazones.",
"Compartir multiplica la felicidad.",
"Un gesto amable puede cambiar una historia.",
"Escuchar es una forma de amor.",
"La generosidad deja huellas duraderas.",
"Tu presencia hace la diferencia.",
"Siempre hay motivos para agradecer.",
"La alegría también se aprende.",
"Cada persona tiene algo especial.",
"Las buenas acciones regresan de alguna forma.",
"La felicidad se construye en momentos pequeños.",
"El optimismo es una elección.",
"Las conexiones humanas dan sentido a la vida.",
"Lo auténtico siempre destaca.",
"El respeto abre caminos.",
"Eres capaz de más de lo que imaginas.",
"La fuerza aparece cuando más la necesitas.",
"Todo esfuerzo suma.",
"El coraje es avanzar a pesar del miedo.",
"No subestimes el poder de empezar.",
"Los sueños necesitan acción.",
"Cada meta alcanzada comenzó siendo una idea.",
"La confianza crece con cada intento.",
"Tu historia aún se está escribiendo.",
"Los obstáculos no definen tu destino.",
"Hay belleza en seguir intentándolo.",
"El éxito es la suma de esfuerzos constantes.",
"Los grandes cambios empiezan con pequeños hábitos.",
"No compitas con otros, compite contigo mismo.",
"La mejora continua es una victoria diaria.",
"Las oportunidades nacen de la preparación.",
"Creer en ti es el primer paso.",
"La práctica construye excelencia.",
"La paciencia acelera más de lo que parece.",
"Cada avance importa.",
"Tu felicidad también merece prioridad.",
"Descansar es parte del progreso.",
"Cuida tu mente como cuidas tus sueños.",
"La tranquilidad tiene un valor inmenso.",
"Tu bienestar importa.",
"La paz interior es una conquista diaria.",
"Escúchate con la misma atención que escuchas a otros.",
"Está bien avanzar a tu ritmo.",
"El equilibrio fortalece.",
"La calma permite ver con claridad.",
"Tu amor hace que mis días sean mejores.",
"Cada momento contigo tiene algo especial.",
"Tu felicidad también me hace feliz.",
"Contigo los días tienen más color.",
"Tu mirada ilumina mis pensamientos.",
"Eres una de las mejores cosas que me han pasado.",
"Tu cariño es un regalo diario.",
"Pensarte siempre me saca una sonrisa.",
"Tu compañía vale más de lo que imaginas.",
"Hay paz en estar contigo.",
"Tu forma de ser es única.",
"Cada recuerdo contigo tiene un lugar especial.",
"Tu sonrisa merece ser eterna.",
"El amor se encuentra en los detalles.",
"Estar contigo hace más bonito cualquier lugar.",
"Tu presencia convierte lo cotidiano en especial.",
"Eres una razón para sonreír más.",
"Las mejores historias se escriben con cariño.",
"Contigo aprendí a valorar los momentos simples.",
"Tu voz tiene algo que calma el alma.",
"El amor también se demuestra escuchando.",
"Los abrazos guardan cosas que las palabras no pueden decir.",
"Hay personas que hacen sentir hogar.",
"Tu esencia es lo que más admiro.",
"El cariño sincero nunca pasa desapercibido.",
"Las conexiones verdaderas resisten la distancia.",
"Tu felicidad siempre será importante.",
"Amar es cuidar incluso en los días difíciles.",
"Hay belleza en compartir el camino.",
"Los mejores recuerdos suelen ser los más simples.",
"Tu existencia hace este mundo un poco mejor.",
"Las personas especiales dejan huellas invisibles.",
"El amor crece cuando se cultiva.",
"Cada día contigo es una nueva oportunidad para agradecer.",
"Hay magia en los pequeños gestos.",
"El cariño se demuestra con acciones.",
"Tu compañía vale oro.",
"Las palabras sinceras tienen un gran poder.",
"Los detalles construyen grandes historias.",
"Querer también es respetar.",
"Las estrellas brillan incluso en la oscuridad.",
"Siempre hay una razón para seguir adelante.",
"Cada día trae algo nuevo.",
"Las metas alcanzadas empiezan como sueños.",
"La valentía se practica.",
"El tiempo revela lo importante.",
"Todo aprendizaje deja una huella.",
"Las buenas decisiones nacen de la reflexión.",
"La humildad engrandece.",
"La curiosidad mantiene viva la mente.",
"El cambio es señal de crecimiento.",
"Los caminos difíciles también llevan a lugares hermosos.",
"Cada experiencia suma.",
"La vida recompensa la perseverancia.",
"El entusiasmo es contagioso.",
"Las ideas cambian realidades.",
"Aprender nunca pasa de moda.",
"Los sueños son mapas del futuro.",
"La confianza abre puertas.",
"Todo gran viaje comienza con un primer paso.",
"Tu historia merece ser vivida plenamente.",
"El presente es un regalo.",
"Las oportunidades aparecen donde hay esfuerzo.",
"Las metas claras facilitan el camino.",
"La paciencia transforma procesos largos en logros.",
"El optimismo ilumina incluso los días grises.",
"Cada persona tiene un potencial inmenso.",
"La autenticidad siempre encuentra su lugar.",
"Lo mejor aún puede estar por venir.",
"Cada día es una nueva oportunidad para brillar."
];

/* ELEMENTOS */

const fraseTexto = document.getElementById("frase");
const fechaTexto = document.getElementById("fechaHoy");
const contador = document.getElementById("contador");
const favBtn = document.getElementById("favBtn");
const favoritosContainer = document.getElementById("favoritosContainer");
const cantidadFavs = document.getElementById("cantidadFavs");
const diasUso = document.getElementById("diasUso");
const notaInput = document.getElementById("notaInput");
const guardarNota = document.getElementById("guardarNota");
const notasGuardadas = document.getElementById("notasGuardadas");
const shareBtn = document.getElementById("shareBtn");
const fontSelector = document.getElementById("fontSelector");
const bgUpload = document.getElementById("bgUpload");
const rosasBg = document.querySelector(".rosas-bg");
const historialContainer = document.getElementById("historialContainer");
const configBtn = document.getElementById("configBtn");
const configPanel = document.getElementById("configPanel");
const themeToggle = document.getElementById("themeToggle");

let fraseActual = "";

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

let historial = JSON.parse(localStorage.getItem("historial")) || [];

let notas = JSON.parse(localStorage.getItem("notas")) || [];

/* FECHA */

function obtenerFecha() {
  const hoy = new Date();

  return hoy.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long"
  });
}

/* FRASE */

function fraseDelDia() {
  const dias = Math.floor(Date.now() / (1000 * 60 * 60 * 24));

  return frases[dias % frases.length];
}

/* CARGAR */

function cargarFrase() {

  fraseActual = fraseDelDia();

  fraseTexto.textContent = fraseActual;

  fechaTexto.textContent = obtenerFecha();

  if (!historial.includes(fraseActual)) {

    historial.unshift(fraseActual);

    historial = historial.slice(0, 30);

    localStorage.setItem(
      "historial",
      JSON.stringify(historial)
    );
  }

  mostrarHistorial();

  actualizarFavIcon();
}

/* FAVORITOS */

function guardarFavoritos() {

  localStorage.setItem(
    "favoritos",
    JSON.stringify(favoritos)
  );
}

function actualizarFavIcon() {

  const existe = favoritos.includes(fraseActual);

  favBtn.innerHTML = existe
    ? '<i class="fa-solid fa-heart"></i>'
    : '<i class="fa-regular fa-heart"></i>';

  cantidadFavs.textContent = favoritos.length;
}

favBtn.addEventListener("click", () => {

  if (favoritos.includes(fraseActual)) {

    favoritos = favoritos.filter(
      f => f !== fraseActual
    );

  } else {

    favoritos.push(fraseActual);
  }

  guardarFavoritos();

  actualizarFavIcon();

  mostrarFavoritos();

  mostrarLogros();
});

function mostrarFavoritos() {

  favoritosContainer.innerHTML = "";

  if (favoritos.length === 0) {

    favoritosContainer.innerHTML = `
      <div class="fav-item">
        No tienes favoritas todavía 💙
      </div>
    `;

    return;
  }

  const fragment = document.createDocumentFragment();

  favoritos.forEach(f => {

    const div = document.createElement("div");

    div.className = "fav-item";

    div.textContent = f;

    fragment.appendChild(div);
  });

  favoritosContainer.appendChild(fragment);
}

/* HISTORIAL */

function mostrarHistorial() {

  historialContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();

  historial.forEach(frase => {

    const div = document.createElement("div");

    div.className = "fav-item";

    div.textContent = frase;

    fragment.appendChild(div);
  });

  historialContainer.appendChild(fragment);
}

/* CONTADOR */

function actualizarContador() {

  const ahora = new Date();

  const manana = new Date();

  manana.setHours(24, 0, 0, 0);

  const diff = manana - ahora;

  const horas = Math.floor(diff / (1000 * 60 * 60));

  const minutos = Math.floor(
    (diff % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const segundos = Math.floor(
    (diff % (1000 * 60)) / 1000
  );

contador.textContent =
  `Nueva frase en ${String(horas).padStart(2,"0")}:${String(minutos).padStart(2,"0")}:${String(segundos).padStart(2,"0")}`;
}

actualizarContador();

setInterval(actualizarContador, 1000);

/* NOTAS */

function guardarNotas() {

  localStorage.setItem(
    "notas",
    JSON.stringify(notas)
  );
}

guardarNota.addEventListener("click", () => {

  const texto = notaInput.value.trim();

  if (!texto) return;

  notas.unshift({
    texto,
    fecha: new Date().toLocaleDateString("es-ES")
  });

  guardarNotas();

  notaInput.value = "";

  mostrarNotas();
});

function mostrarNotas() {

  notasGuardadas.innerHTML = "";

  const fragment = document.createDocumentFragment();

  notas.forEach((nota, index) => {

    const div = document.createElement("div");

    div.className = "note-item";

    div.innerHTML = `
      <div class="note-top">
        <h4>${nota.fecha}</h4>

        <button class="delete-note" data-index="${index}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>

      <p>${nota.texto}</p>
    `;

    fragment.appendChild(div);
  });

  notasGuardadas.appendChild(fragment);
}

notasGuardadas.addEventListener("click", (e) => {

  const btn = e.target.closest(".delete-note");

  if (!btn) return;

  const index = btn.dataset.index;

  notas.splice(index, 1);

  guardarNotas();

  mostrarNotas();
});

/* SHARE */

shareBtn.addEventListener("click", async () => {

  try {

    const canvas = await html2canvas(
      document.getElementById("shareCard"),
      {
        backgroundColor: null,
        scale: 2
      }
    );

    const blob = await new Promise(resolve =>
      canvas.toBlob(resolve)
    );

    const file = new File(
      [blob],
      "daily-love.png",
      {
        type: "image/png"
      }
    );

    if (
      navigator.canShare &&
      navigator.canShare({ files: [file] })
    ) {

      await navigator.share({
        files: [file],
        title: "Daily Love",
        text: fraseActual
      });

    } else {

      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);

      link.download = "daily-love.png";

      link.click();
    }

  } catch (error) {

    console.error(error);
  }
});

/* CONFIG */

configBtn.addEventListener("click", (e) => {

  e.stopPropagation();

  configPanel.classList.toggle("active");
});

document.addEventListener("click", () => {

  configPanel.classList.remove("active");
});

/* TEMA */

themeToggle.addEventListener("change", () => {

  if (themeToggle.checked) {

    document.body.classList.remove("dark");

    document.body.classList.add("light");

  } else {

    document.body.classList.remove("light");

    document.body.classList.add("dark");
  }
});

/* FONT */

fontSelector.addEventListener("change", () => {

  document.body.style.fontFamily =
    fontSelector.value;

  localStorage.setItem(
    "font",
    fontSelector.value
  );
});

const savedFont = localStorage.getItem("font");

if (savedFont) {

  document.body.style.fontFamily = savedFont;

  fontSelector.value = savedFont;
}

/* BACKGROUND */

bgUpload.addEventListener("change", (e) => {

  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(event){

    const imageUrl = event.target.result;

    rosasBg.style.backgroundImage =
      `url(${imageUrl})`;

    localStorage.setItem(
      "customBackground",
      imageUrl
    );
  };

  reader.readAsDataURL(file);
});

/* CARGAR FONDO GUARDADO */

const savedBackground =
  localStorage.getItem("customBackground");

if(savedBackground){

  rosasBg.style.backgroundImage =
    `url(${savedBackground})`;
}

/* NAVIGATION */

const navItems =
  document.querySelectorAll(".nav-item");

const screens =
  document.querySelectorAll(".screen");

navItems.forEach(btn => {

  btn.addEventListener("click", () => {

    navItems.forEach(b =>
      b.classList.remove("active")
    );

    btn.classList.add("active");

    screens.forEach(s =>
      s.classList.remove("active")
    );

    document
      .getElementById(btn.dataset.screen)
      .classList.add("active");
  });
});

/* STREAK */

function actualizarStreak() {

  const today = new Date().toDateString();

  const lastVisit =
    localStorage.getItem("lastVisit");

  let streak =
    parseInt(localStorage.getItem("streak")) || 0;

  if (lastVisit !== today) {

    streak++;

    localStorage.setItem("streak", streak);

    localStorage.setItem("lastVisit", today);
  }

  document.getElementById(
    "streakCount"
  ).textContent = streak;
}

actualizarStreak();

/* LOGROS */

function mostrarLogros() {

  const list =
    document.getElementById("achievementsList");

  const favs = favoritos.length;

  const streak =
    parseInt(localStorage.getItem("streak")) || 0;

  const notasCount = notas.length;

  const historialCount = historial.length;

  let logros = [];

  if (favs >= 3)
    logros.push("❤️ Primera favorita");

  if (favs >= 5)
    logros.push("🌹 Romanticismo desbloqueado");

  if (favs >= 10)
    logros.push("🌸 Coleccionista");

  if (favs >= 15)
    logros.push("💘 Corazón lleno");

  if (favs >= 25)
    logros.push("💞 Amante de frases");

  if (favs >= 30)
    logros.push("👑 Reina del amor");

  if (streak >= 3)
    logros.push("🔥 2 días seguidos");

  if (streak >= 5)
    logros.push("🔥 3 días seguidos");

  if (streak >= 10)
    logros.push("⚡ Constancia romántica");

  if (streak >= 15)
    logros.push("🌟 Una semana contigo");

  if (streak >= 20)
    logros.push("💎 14 días de amor");

  if (streak >= 30)
    logros.push("🏆 Leyenda romántica");

  if (notasCount >= 1)
    logros.push("📝 Primera nota");

  if (notasCount >= 5)
    logros.push("📔 Diario desbloqueado");

  if (notasCount >= 10)
    logros.push("✍️ Escritor sentimental");

  if (notasCount >= 20)
    logros.push("📚 Biblioteca emocional");

  if (historialCount >= 5)
    logros.push("🕰️ explorador del tiempo");

  if (historialCount >= 10)
    logros.push("🌙 Memorias guardadas");

  if (historialCount >= 20)
    logros.push("🌌 Archivo infinito");

  if (diasUso.textContent >= 7)
    logros.push("📅 7 días usando la app");

  if (diasUso.textContent >= 30)
    logros.push("🎖️ Usuario fiel");

  if (diasUso.textContent >= 100)
    logros.push("💫 Daily Love Master");

  list.innerHTML = "";

  if(logros.length === 0){

    list.innerHTML = `
      <div class="fav-item">
        Aún no tienes logros 💙
      </div>
    `;

    return;
  }

  logros.forEach(l => {

    const div = document.createElement("div");

    div.className = "fav-item";

    div.textContent = l;

    list.appendChild(div);
  });
}

/* DIAS DE USO */

let uso =
  parseInt(localStorage.getItem("diasUso")) || 1;

diasUso.textContent = uso;

/* NOTIFICACIONES */

if (
  "Notification" in window &&
  Notification.permission !== "denied"
) {

  Notification.requestPermission();
}

/* SPLASH */

window.addEventListener("load", () => {

  const splash =
    document.getElementById("splash");

  setTimeout(() => {

    splash.style.opacity = "0";

    document.body.classList.remove("loading");

    document.body.classList.add("loaded");

    setTimeout(() => {

      splash.remove();

    }, 800);

  }, 2500);
});

/* INICIAR */

cargarFrase();

mostrarFavoritos();

mostrarNotas();

mostrarLogros();

/* SERVICE WORKER */

if ("serviceWorker" in navigator) {

  window.addEventListener("load", () => {

    navigator.serviceWorker
      .register("./sw.js")
      .then(() => {
        console.log("Service Worker registrado");
      })
      .catch(err => {
        console.log("Error SW:", err);
      });

  });

}
