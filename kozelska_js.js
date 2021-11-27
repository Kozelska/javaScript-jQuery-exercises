function celkem() {
    let cena = 0;
    let nosic_kolo = 0;
    
    if (document.querySelector('#horske').checked){
        cena+=parseInt(document.querySelector('#horske').value)* parseInt(document.querySelector('#hr_kusy').value)
    }
    if (document.querySelector('#detske').checked){
        cena+=parseInt(document.querySelector('#detske').value)* parseInt(document.querySelector('#dt_kusy').value)
    }
    if (document.querySelector('#silnicni').checked){
        cena+=parseInt(document.querySelector('#silnicni').value)* parseInt(document.querySelector('#sl_kusy').value)
    }
    if (document.querySelector('#gravel').checked){
        cena+=parseInt(document.querySelector('#gravel').value)* parseInt(document.querySelector('#gr_kusy').value)
    }
    let doba = 0;
    doba = parseInt(document.querySelector('#doba').value);
    cena = cena * doba;

    nosic_kolo=parseInt(document.cyklonosic.nosic.value);
    cena+=(nosic_kolo/100)*cena;

    document.querySelector('#vypocet_celkem').value=cena;
    
}
function rozdil(){
    let vypocet=0;
    let cena = parseInt(document.querySelector('#vypocet_celkem').value);
    let odhad = parseInt(document.querySelector('#odhad').value);
    vypocet = cena - odhad;
    document.querySelector('#vypocet_rozdilu').value=vypocet;
}