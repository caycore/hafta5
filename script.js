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

function test(...params) {
    var sonuc = 0;
    params.forEach(item => {
        sonuc += item;
    });
    return sonuc;
}
var newResult = test(10, 20, 30, 40, 50, 60);
alert(newResult);
newResult = test(50, 60);
console.log(test(50, 100, 250));
alert(newResult);
