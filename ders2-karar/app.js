//======KARAR YAPILARI======


//=========IF-ELSE=========


const s1=Number(prompt("birinci sayi"));
const islem=prompt("islemi giriniz");
const s2=+prompt("ikinci sayi");

if (islem=="+") {
    sonuc=s1+s2;
}else if (islem=="-") {
    sonuc=s1-s2;
}else if (islem=="*") {
    sonuc=s1*s2;
}else if (islem=="/") {
    sonuc=s1/s2;
}
console.log(sonuc);