const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("response-c");
const d = document.getElementById("d");
const next = document.getElementById("next").addEventListener("click", ()=> window.location.href = "Templates/question1.html");

const questions = [
  {
    question1: "1.El reglamento del aprendiz se adopta como parte del acuerdo",
    a: "009",
    b: "Entre el subdirector y los instructores",
    c: "007",
    d: "Entre la comunidad educativa",
    response: "response-c"
  },
  {
    question2: "2. De acuerdo el reglamento son derechos del aprendiz Sena.",
    a: "Presentar los instrumentos de evaluación cuando se sienta preparado.",
    b: "Tener conocimiento de los resultados obtenidos en las evaluaciones dentro d ellos 8 días hábiles siguientes.",
    c: "Recibir formación únicamente en la parte técnica.",
    d: "Certificarse únicamente por contrato de aprendizaje o pasantía.",
    response: "response-b"
  },
];


a.addEventListener("click", () => {
  setTimeout(() => {
  a.style.backgroundColor = "#ff0000";
  c.style.backgroundColor = "#09d409";  
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Wrong!',    
  })
  }, 2000);
});

b.addEventListener("click", () => {
  setTimeout(() => {
  b.style.backgroundColor = "#ff0000";  
  c.style.backgroundColor = "#09d409";  
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Wrong!',    
  })
  }, 2000);
});

c.addEventListener("click", () => {
  setTimeout(() => {
  c.style.backgroundColor = "#09d409";
  Swal.fire('Correct!')
}, 5000);  
});

d.addEventListener("click", () => {
  setTimeout(() => {
  d.style.backgroundColor = "#ff0000";  
  c.style.backgroundColor = "#09d409";  
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Wrong!',    
  })
  }, 2000);
});

d.addEventListener("click", () => {
  setTimeout(() => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Wrong!',    
  })
  }, 2000);
});




