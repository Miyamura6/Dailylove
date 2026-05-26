const frases=[

"Tu sonrisa hace que mi mundo sea más bonito",

"Si existiera un lenguaje para mi corazón solo diría tu nombre",

"Amarte es mi coincidencia favorita",

"Cada día contigo es mi recuerdo favorito del mañana",

"Eres el lugar donde mi calma aprende a quedarse",

"Tu voz es el sonido que mi alma reconoce",

"El universo fue generoso cuando te puso en mi camino",

"Si mis pensamientos fueran estrellas todos apuntarían a ti",

"Contigo la vida tiene más sentido",

"Tu mirada convierte segundos en eternidad",

"En cada latido encuentro una razón para quererte"

];

/* ELEMENTOS */

const fraseTexto=
document.getElementById("frase");

const fechaTexto=
document.getElementById("fechaHoy");

const contador=
document.getElementById("contador");

const favBtn=
document.getElementById("favBtn");

const favoritosContainer=
document.getElementById("favoritosContainer");

const cantidadFavs=
document.getElementById("cantidadFavs");

const diasUso=
document.getElementById("diasUso");

const notaInput=
document.getElementById("notaInput");

const guardarNota=
document.getElementById("guardarNota");

const notasGuardadas=
document.getElementById("notasGuardadas");

const shareBtn=
document.getElementById("shareBtn");

const fontSelector=
document.getElementById("fontSelector");

const bgUpload=
document.getElementById("bgUpload");

const rosasBg=
document.querySelector(".rosas-bg");

let fraseActual="";

/* FECHA */

function obtenerFecha(){

const hoy=new Date();

return hoy.getDate()+" de "+
hoy.toLocaleString(
"es-ES",
{month:"long"}
);

}

/* FRASE DEL DIA */

function fraseDelDia(){

const dias=Math.floor(
Date.now()/
(1000*60*60*24)
);

return frases[dias%frases.length];

}

/* CARGAR FRASE */

function cargarFrase(){

fraseActual=
fraseDelDia();

fraseTexto.textContent=
fraseActual;

fechaTexto.textContent=
obtenerFecha();

actualizarFavIcon();

}

/* FAVORITOS */

function obtenerFavs(){

return JSON.parse(
localStorage.getItem("favoritos")
)||[];

}

function guardarFavs(favs){

localStorage.setItem(
"favoritos",
JSON.stringify(favs)
);

}

favBtn.addEventListener("click",()=>{

let favs=
obtenerFavs();

if(favs.includes(fraseActual)){

favs=favs.filter(
f=>f!==fraseActual
);

}else{

favs.push(fraseActual);

}

guardarFavs(favs);

mostrarFavoritos();

actualizarFavIcon();

mostrarLogros();

});

function actualizarFavIcon(){

const favs=
obtenerFavs();

favBtn.innerHTML=
favs.includes(fraseActual)
?
'<i class="fa-solid fa-heart"></i>'
:
'<i class="fa-regular fa-heart"></i>';

cantidadFavs.textContent=
favs.length;

}

function mostrarFavoritos(){

const favs=
obtenerFavs();

favoritosContainer.innerHTML="";

if(favs.length===0){

favoritosContainer.innerHTML=
`
<div class="fav-item">
No tienes favoritas todavía 💙
</div>
`;

return;

}

favs.forEach(f=>{

const div=
document.createElement("div");

div.className=
"fav-item";

div.textContent=f;

favoritosContainer.appendChild(div);

});

}

/* CONTADOR */

function actualizarContador(){

const ahora=
new Date();

let manana=
new Date();

manana.setHours(24,0,0,0);

const diff=
manana-ahora;

const horas=Math.floor(
diff/(1000*60*60)
);

const minutos=Math.floor(
(diff%(1000*60*60))
/(1000*60)
);

const segundos=Math.floor(
(diff%(1000*60))/1000
);

contador.textContent=
"Nueva frase en "+
horas.toString().padStart(2,"0")+":"+
minutos.toString().padStart(2,"0")+":"+
segundos.toString().padStart(2,"0");

}

setInterval(
actualizarContador,
1000
);

/* CONFIG */

const configBtn=
document.getElementById("configBtn");

const configPanel=
document.getElementById("configPanel");

configBtn.addEventListener("click",()=>{

configPanel.classList.toggle(
"active"
);

});

/* TEMA */

const themeToggle=
document.getElementById("themeToggle");

themeToggle.addEventListener("change",()=>{

if(themeToggle.checked){

document.body.classList.remove(
"dark"
);

document.body.classList.add(
"light"
);

}else{

document.body.classList.remove(
"light"
);

document.body.classList.add(
"dark"
);

}

});

/* TIPOGRAFIA */

fontSelector.addEventListener("change",()=>{

document.body.style.fontFamily=
fontSelector.value;

localStorage.setItem(
"fontFamily",
fontSelector.value
);

});

const savedFont=
localStorage.getItem(
"fontFamily"
);

if(savedFont){

document.body.style.fontFamily=
savedFont;

fontSelector.value=
savedFont;

}

/* FONDO PERSONALIZADO */

bgUpload.addEventListener(
"change",
(e)=>{

const file=
e.target.files[0];

if(!file) return;

const reader=
new FileReader();

reader.onload=function(event){

const image=
event.target.result;

rosasBg.style.backgroundImage=
`url(${image})`;

localStorage.setItem(
"customBg",
image
);

};

reader.readAsDataURL(file);

}
);

const savedBg=
localStorage.getItem(
"customBg"
);

if(savedBg){

rosasBg.style.backgroundImage=
`url(${savedBg})`;

}

/* SHARE */

shareBtn.addEventListener(
"click",
async()=>{

if(navigator.share){

await navigator.share({

title:"Daily Love",

text:fraseActual

});

}else{

alert(
"Tu navegador no soporta compartir"
);

}

}
);

/* NOTAS */

function obtenerNotas(){

return JSON.parse(
localStorage.getItem("notas")
)||[];

}

function guardarNotas(notas){

localStorage.setItem(
"notas",
JSON.stringify(notas)
);

}

guardarNota.addEventListener(
"click",
()=>{

const texto=
notaInput.value.trim();

if(texto==="") return;

const notas=
obtenerNotas();

notas.unshift({

texto:texto,

fecha:new Date()
.toLocaleString()

});

guardarNotas(notas);

notaInput.value="";

mostrarNotas();

}
);

/* ELIMINAR NOTA */

function eliminarNota(index){

let notas=
obtenerNotas();

notas.splice(index,1);

guardarNotas(notas);

mostrarNotas();

}

/* MOSTRAR NOTAS */

function mostrarNotas(){

const notas=
obtenerNotas();

notasGuardadas.innerHTML="";

if(notas.length===0){

notasGuardadas.innerHTML=
`
<div class="note-item">
<p>No tienes notas todavía 🌸</p>
</div>
`;

return;

}

notas.forEach((nota,index)=>{

const div=
document.createElement("div");

div.className=
"note-item";

div.innerHTML=
`
<div class="note-top">

<h4>${nota.fecha}</h4>

<button
class="delete-note"
onclick="eliminarNota(${index})">

<i class="fa-solid fa-trash"></i>

</button>

</div>

<p>${nota.texto}</p>
`;

notasGuardadas.appendChild(div);

});

}

mostrarNotas();

/* STREAK */

function actualizarStreak(){

const today=
new Date().toDateString();

const lastVisit=
localStorage.getItem(
"lastVisit"
);

let streak=
parseInt(
localStorage.getItem(
"streak"
)
)||0;

if(lastVisit!==today){

streak++;

localStorage.setItem(
"streak",
streak
);

localStorage.setItem(
"lastVisit",
today
);

}

document.getElementById(
"streakCount"
).textContent=
streak;

}

actualizarStreak();

/* LOGROS */

function mostrarLogros(){

const list=
document.getElementById(
"achievementsList"
);

const favs=
obtenerFavs().length;

const streak=
parseInt(
localStorage.getItem(
"streak"
)
)||0;

let logros=[];

if(favs>=1){

logros.push(
"❤️ Primera frase favorita"
);

}

if(favs>=5){

logros.push(
"🌸 Coleccionista de frases"
);

}

if(streak>=3){

logros.push(
"🔥 3 días seguidos"
);

}

if(streak>=7){

logros.push(
"🏆 Usuario constante"
);

}

list.innerHTML="";

if(logros.length===0){

list.innerHTML=
`
<div class="fav-item">
Aún no tienes logros desbloqueados
</div>
`;

return;

}

logros.forEach(l=>{

const div=
document.createElement("div");

div.className=
"fav-item";

div.textContent=l;

list.appendChild(div);

});

}

mostrarLogros();

/* ESTADISTICAS */

let uso=
localStorage.getItem(
"diasUso"
);

if(!uso){

localStorage.setItem(
"diasUso",
1
);

uso=1;

}

diasUso.textContent=
uso;

/* PANTALLAS */

const navItems=
document.querySelectorAll(
".nav-item"
);

const screens=
document.querySelectorAll(
".screen"
);

navItems.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

configPanel.classList.remove(
"active"
);

navItems.forEach(
b=>b.classList.remove(
"active"
)
);

btn.classList.add(
"active"
);

const target=
btn.dataset.screen;

screens.forEach(
s=>s.classList.remove(
"active"
)
);

document
.getElementById(target)
.classList.add(
"active"
);

}
);

});

/* NAVBAR */

const navbar=
document.getElementById(
"navbar"
);

const hideNav=
document.getElementById(
"hideNav"
);

const showNav=
document.getElementById(
"showNav"
);

hideNav.addEventListener(
"click",
()=>{

navbar.classList.add(
"hidden"
);

showNav.style.display=
"block";

}
);

showNav.addEventListener(
"click",
()=>{

navbar.classList.remove(
"hidden"
);

showNav.style.display=
"none";

}
);

/* PETALOS */

const canvas=
document.getElementById(
"petalos"
);

const ctx=
canvas.getContext("2d");

canvas.width=
window.innerWidth;

canvas.height=
window.innerHeight;

let petalos=[];

class Petalo{

constructor(){

this.x=
Math.random()*canvas.width;

this.y=
Math.random()*canvas.height;

this.size=
Math.random()*5+3;

this.speedY=
Math.random()*1+0.6;

this.oscilacion=
Math.random()*Math.PI*2;

}

update(){

this.y+=this.speedY;

this.oscilacion+=0.02;

this.x+=
Math.sin(this.oscilacion)*0.6;

if(this.y>canvas.height){

this.y=-10;

this.x=
Math.random()*canvas.width;

}

}

draw(){

ctx.fillStyle=
"rgba(173,216,255,0.8)";

ctx.beginPath();

ctx.ellipse(

this.x,
this.y,

this.size,
this.size*0.6,

0,
0,
Math.PI*2

);

ctx.fill();

}

}

for(let i=0;i<40;i++){

petalos.push(
new Petalo()
);

}

function animar(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

petalos.forEach(p=>{

p.update();

p.draw();

});

requestAnimationFrame(
animar
);

}

animar();

/* NOTIFICACIONES */

if("Notification" in window){

Notification
.requestPermission()
.then(permission=>{

if(permission==="granted"){

setTimeout(()=>{

new Notification(
"🌸 Daily Love",
{
body:fraseDelDia()
}
);

},5000);

}

});

}

/* SPLASH */

window.addEventListener(
"load",
()=>{

setTimeout(()=>{

document.getElementById(
"splash"
).style.display="none";

},4500);

}
);

/* FONDOS DINAMICOS */

const fondos=[

"https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1400&auto=format&fit=crop",

"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",

"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"

];

let fondoActual=0;

setInterval(()=>{

if(localStorage.getItem(
"customBg"
)) return;

fondoActual++;

if(fondoActual>=fondos.length){

fondoActual=0;

}

rosasBg.style.backgroundImage=
`url(${fondos[fondoActual]})`;

},15000);

/* INICIAR */

cargarFrase();

mostrarFavoritos();

actualizarContador();