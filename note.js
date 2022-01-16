const fs = require('fs');

var sayilar = '1 2\n4 6\n7 8\n1 3';

fs.writeFile('soru2.txt',sayilar , function (err) {
    if (err) throw err;
    console.log('Sayı Değerleri Kaydedildi');
}); 

fs.readFile('soru2.txt', 'utf-8', function (err, data) {
if (err) throw err;
var dizi1 = sayilar.split('\n');
var dizi2 = [];
console.log(dizi1);
for(i in dizi1){
    dizi2.push(dizi1[i].split(''));
}
console.log(dizi2);

var sayiDizi = [];

for (var i = 0; i < dizi2.length; i++){
   for(var j=0; j < 2; j++)
        sayiDizi.push(parseInt(dizi2[i][j]));
}
console.log(sayiDizi);

var toplam = [];
for (var i = 0; i < sayiDizi.length; i+=2){
    toplam.push(sayiDizi[i] + sayiDizi[i+1]);
 }

 console.log(toplam);
 fs.writeFile('soru3.txt',toplam.toString() , function (err) {
    if (err) throw err;
    console.log('İşlem Tamamlandı.');
}); 
});

