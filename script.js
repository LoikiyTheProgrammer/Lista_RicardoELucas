document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                alert("Adicionado à playlist");
            } else {
                alert("Retirado da playlist");
            }
        });
    });
});

function abrir(){
    alert("Aperte nas imagens para ver os videos e nas caixas para adicionar a playlist");
}