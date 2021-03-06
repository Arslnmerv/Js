//================================================================================================
//KONSOL
// console.log("Hello javascript");
// alert("Dikkat!");
// console.warn("bu bir uyaridir");
// console.error("bu bir hatadir");
// prompt("adinizi giriniz");




//======================degisken tanimlama========================
//=========VAR========
// Ancak, modern JS var keywordunun kullanımı azaldı.
// Çünkü, var global değişken gibi düşünülebilir.
// Günümüzde programcılar global değişken gerekmedikçe VAR tercih etmemektedir.


var isim="merve";
console.log(typeof isim);
isim=3.14;
console.log(typeof isim);

//===================CONST=========================
// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keywordleridir.
//  CONST: Sadece başlangıçta değer atanabilir.
// Sonradan değeri değiştirilemez (non-primitiveler hariç).mümkünse const,
// yoksa let, o da mümkün değilse var kullanılmalı. çünkü js de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.

const piSayisi=3.14;
//piSayisi=3;

const isim1="Osman";
console.log(typeof isim1);
//const number; 
//number=4; hatali yazim bir kere hiclik atadik degismez

//=====================LET===========================
let fiyat;
fiyat=10;
console.log(typeof fiyat);
fiyat="Erdem";
console.log(fiyat);


//string tanimlamak icin 3 farkli karakter kullanilanilabilir.

let name1="Alaattin";
let name2='Faruk';
let name3=`Oguzhan`;
console.log(name3);

//===========ARITMETIK OPERATORLER==================

const kola=5;
const cips=6;
const ekmek=2;
console.log(kola+cips+ekmek);
console.log("toplam fiyat" ,kola+cips+ekmek);

const ad="can";
const soyad="canan";
console.log(ad+soyad);

const s1=7;
let s2="7";
console.log(s1+s2);//77

console.log("benim adim" + " " +ad +" " + "benim yasim" +" " + s1);
//! Template literal===================================
console.log(`benim adım ${ad} benim yasım ${s1}`);
//us alma**
const taban=2;
const us=3;
console.log(taban**us);//2*2*2=8
//mod alma%
const sayi=123;
const birler=sayi%10;
console.log(birler);

const s3=5;
const s4="5";
console.log(s3==s4);
console.log(s3===s4);


//todo TIP DEGISIMLERI==================================

const para="100";
console.log(para+15);//10015
console.log(Number(para)+15);//115

const sayi5=56;
console.log(String(sayi5)+sayi5);//5656
console.log(typeof sayi5);



