// abre uma mensagem de boas vindas ao abrir qualquer aba do site
 window.addEventListener("load", () => {
     alert("Bem-vindo ao site de Raças de Cachorros!");
 });

// modo escuro
document.getElementById('dark-mode-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// seleciona o formulario para pegar os dados
document.querySelector("form").addEventListener("submit", function(event) {

// código para barrar o formulario de mandar automaticamente e nao aparecer nada no console
event.preventDefault();

// pegar o que o usuario digitou
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

// mostrar no console
console.log("Nome:", name);
console.log("E-mail:", email);
console.log("Mensagem:", message);

// um alert so pro usuario saber que a mensagem realmente foi enviada
alert("Mensagem enviada com sucesso!");
});
