$(document).ready(function () {
    $("#finalizarCompra").click(function () {
        $("#fold_p").fadeOut(function () {
            $("#fold_p").text(($("#fold_p").text() == 'Fold it') ? 'Expand it' : 'Fold it').fadeIn();
        })
    })
});
