/************NESNELER***************** */


//diziler sirali bellek bolgeleridir. Dolayisiyla dizilere erisim index ile olur.
// Eger diziler karisiksa (nesne) indexle erisim guclugu ortaya cikar bu yuzden =>........

//!OBJECT (nesne)

//nesnelerde key-value (property-value) yapisi kullanilir
//nesnelerde aradigimiz veriye erismek icin key adini kullanmamiz gerekir

const insan={
    ad:"Kenan",
    soyad:"Kul",
    yas:30,
    meslek:"developer",
    diller:["Java","Js","Sql","Html"]
}

console.log(insan);

//1) dot notasyonu
console.log(insan.ad);
console.log(insan.diller);
//2) koseli parantez ile
console.log(insan["ad"]);
console.log(insan["diller"]);

console.log(`Adim:${insan.ad} ve yasim: ${insan.yas}`);
 
prompt("insan nesnesinden kimi gormek istersin - ad, soyad, yas..-")
console.log(insan bilgi);


//objeye key.valuelar ekleme

insan.konum="Turkiye";
insan.email="insan@hotmail.com";
insan["dogumTarihi"]=1991;

console.log(insan);

//*******NESNE************** */

const kisi={
    ad:"Merve",
    soyad:"Arslan",
    dogumTarihi:1990,
    meslek:"tester",
    tool:"selenium",
    ehliyet:true,
    yasHesapla:function(){//bugunun yilini al=> Date().getFullYear()
return new Date().getFullYear()-this.dogumTarihi;
        
    },
    ozet:function(){
      return `${this.ad} ${this.soyad} ${this.yasHesapla()}yasindadir`      
    }

}
console.log(kisi);
console.log(kisi.yasHesapla());
console.log(kisi.ozet());



