var sayi1 = document.getElementById("sayi1");
var sayi2 = document.getElementById("sayi2");
var sonuc = document.getElementById("sonuc");

function hesapla(type) {
    var sonucText = "";

    if(5 !== "5") {
        sonucText = Number(sayi1.value) + Number(sayi2.value);
    }
    
    if(type == "-") {
        sonucText = Number(sayi1.value) - Number(sayi2.value);
    }
}

function test(ilksayi, ikincisayi, ucuncusayi, dorduncusayi) {
    var sonuc = 0;

    if(ilksayi) {
        sonuc += ilksayi;
    }

    if(ikincisayi) {
        sonuc += ikincisayi;
    }

    if(ucuncusayi) {
        sonuc += ucuncusayi;
    }

    if(dorduncusayi) {
        sonuc += dorduncusayi;
    }

    alert(sonuc);
}

test(0, 3, 1);
