


// la funcion iniciar  y ya  la linea  5 crea un objeto  DianCoreEvolocuionImg
var nuedian=new DianCoreEvolocuionImg();
var canvaslocal=document.getElementById("can");
function iniciar() {

  
nuedian.upload(canvaslocal,document.getElementById("finput"));
setTimeout(()=>{
 
  urllocal =canvaslocal.toDataURL('image/png');
},1000);
}
var urllocal="";



function btf1(){
  nuedian.btf1();


  
}
function btf2(){
  nuedian.btf2();

  
}




document.onkeydown=(e)=>{
if(e.key=="a"){

 
 exampel();

 
 
}




}

function irapro(){
  exampel();
}


async function exampel(){
  document.getElementById("iddivp").style.display="block";

  document.getElementById("idimg1").src=urllocal;
 nuedian.gettextoConCanvas(canvaslocal, (result)=>{

  
    document.getElementById("idpes").innerHTML=result.text;
    console.log("finnnn");
    console.clear();
  },(rp)=>{

    
document.getElementById("idpes").innerHTML=rp;
  },(error)=>{
    document.getElementById("idpes").innerHTML=error;
    console.log(error);});


  console.log("finnnn");

}
function  cambisivalores() { 

  var x = document.getElementById("vol").value;
  cambiossi(x);
 }


 












 


 alert("cuando presione aclarar, estar pendiente  que no borren las letras");