$(document).ready(function () {
    let cena = 0;
    let nabidka = 0;
    $('#spocitej').click(function () {
        cena = 0;
        if ($('#horske').prop('checked'))
            cena += parseInt($('#horske').val()) * parseInt($('#hr_kusy').val());
        // console.log("ok");
        if ($('#detske').prop('checked'))
            cena += parseInt($('#detske').val()) * parseInt($('#dt_kusy').val());

        if ($('#silnicni').prop('checked'))
            cena += parseInt($('#silnicni').val()) * parseInt($('#sl_kusy').val());

        if ($('#gravel').prop('checked'))
            cena += parseInt($('#gravel').val()) * parseInt($('#gr_kusy').val());

        let delka;
        delka = parseInt($('#doba').val());
        cena = cena * delka;

        let nosic;
        nosic = $("input[name='nosic1']:checked").val();
        cena += cena * nosic;
        $('#suma').val(cena);
    });
    $('#overit').click(function () {
        nabidka = parseInt($('#overNabidku').val());
        if (nabidka >= cena)
            $('#isOK').val("Vse v poradku");
        else
            $('#isOK').val("Cena je prilis nizka");

    });
    
});



























