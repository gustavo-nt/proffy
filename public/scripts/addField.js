// Procurar o botão e fazer ação ao clicar nele
document.querySelector("#add-time").addEventListener('click', cloneField);

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    // Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input');
    // Para cada campo, limpar os mesmos
    fields.forEach(function(field) {
        // Pegar o Field do momento
        field.value = " ";
    });
    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}