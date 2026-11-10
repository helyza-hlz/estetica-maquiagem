
// Seleciona o botão do menu pelo ID
const botaoMenu = document.querySelector("#btn-menu");

// Seleciona o menu pela classe
const menu = document.querySelector(".nav");

// Verifica se os elementos existem
if (botaoMenu && menu) {

    // Quando o botão for clicado
    botaoMenu.addEventListener("click", function () {

        // Adiciona ou remove a classe "ativo"
        menu.classList.toggle("ativo");

    });

}
