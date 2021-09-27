//ara butonuna tiklandiginda calan telefon ciksin, zil calsin

let resim=document.querySelector(".resim");//resime ulastim
let ring=document.querySelector(".ses");//audiyoya ulastim

//ara butonuna ulastim
document.querySelector(".on").onclick=function(){
resim.src="./img/img.gif";//resim degistirdim
ring.play();//sesi calistirdim

}

//baglat butonuna basinca gif gelsin ses kesilsin

//baglat butonunu cagirdik
document.querySelector(".off").onclick=function(){
resim.src="./img/telbağla.gif"
ring.pause();//sesi durdurdum
}
//konus butonuna basinca yeni gif gelsin

document.querySelector(".speak").onclick=function(){
resim.src="./img/telfırlat.gif";
}

//ekle butonuna basildiginda yeni bir li ekle 

const liste= document.querySelector(".liste");
document.querySelector(".ekle").onclick=function(){

   const satir= document.querySelector(".dil");


   liste.innerHTML=liste.innerHTML+ `<li>${satir.value}</li>`;
satir.value="";
}
//sil butonuna tiklandiginda li elemani silinsin

document.querySelector(".sil").onclick=function(){
    liste.removeChild(liste.lastChild);
}

const paragraf=document.querySelector(".forH1");
paragraf.innerHTML = `<h1>${"Programlama Dilleri"}</h1>`;

//Klavyeden bir tusa basildiginda buyusun kuculsun
document.querySelector(".textbox").onkeyup=function(){
    const checkbox=document.querySelector(".checkbox");
    const textbox=document.querySelector(".textbox");

    if(checkbox.checked){
textbox.value=texrbox.value.toUpperCase();
    }else{
        textbox.value=textbox.value.toLowerCase();
    }
}
//2. ve uzun yol addEventListener() yolu

// resim.addEventListener("mouseout",function(){
//     resim.src="./img/aslan2.jpeg";
// })

//enter 13  delete46
//onkeydown=klavyedeki tusa basip elinizi cektiginizde

document.querySelector(".dil").onkeydown = function (klavye) {
    if(klavye.keyCode==13) {

        document.querySelector(".ekle").onclick();
    }if(klavye.keyCode==46){
        document.querySelector(".sil").onclick();
    }
}









//mouse resmin ustune geldiginde aslan kukresin

resim.onmouseover=function(){
    resim.src="./img/aslan2.jpeg";
}

//mouse resmin ustunden cekildiginde

resim.onmouseout=function(){
    resim.src="./img/aslan1.jpeg"
}