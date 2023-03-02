const signo=document.getElementById("signo")
const suma=document.getElementById("suma")
const resta=document.getElementById("resta")
const multiplicacion=document.getElementById("multipli")
const dividir=document.getElementById("dividir")
const borrar=document.getElementById("borrar")
const mostrar=document.getElementById("mostrar")
const operacion=document.getElementById("resultado")


let operador=0;
let result=0;
let ingresar='';
let total=0;
let numero1='';
let array=[]
let contador=0;


for(a=1;a<=4;a++){
    document.getElementById('operador_'+a).addEventListener('click',(signos)=>operadores
    (signos.target))
}
function operadores(tecla){
    
    mostrar.innerHTML=''
    operador=tecla.innerText
    numero1=ingresar
    ingresar=0;
    console.log(numero1)
    console.log(ingresar)
}

borrar.addEventListener("click",borramos);
function borramos(){
    mostrar.innerHTML=''
    ingresar='';
    numero1='';
    contador=0;
}

for(i=0;i<=9;i++){
    document.getElementById('numero_'+i).addEventListener('click',(evento)=>mostrare
    (evento.target))
}
function mostrare(tecla){
    mostrar.innerHTML+=tecla.innerText
    ingresar+=parseInt(tecla.innerText)
}
function mostrare2(tecla){
    mostrar.innerHTML+=tecla
    ingresar+=parseInt(tecla)
}
addEventListener('keypress',evento=>{
    if(!isNaN(evento.key)){
        mostrare2(evento.key)
    }
})

resultado.addEventListener('click',resuelve)
function resuelve(){
    contador++;
    
    if(operador==='+'){
        result=parseInt(numero1)+parseInt(ingresar)
    }else if(operador==='-'){
        result=numero1-ingresar
    }else if(operador==='*'){
        result=numero1*ingresar
    }else if(operador==='/'){
        result=numero1/ingresar
    }
    mostrar.innerHTML=''
    mostrar.innerHTML=result
    numero1=result
    
    
}

addEventListener('keydown',operaciones=>{
   
    if(operaciones.key==='+'){
        contador++;
        if(contador>1){
            ingresar=numero1
        }
        operador='+'
        mostrar.innerHTML=''
        numero1=ingresar
        ingresar=0;
        console.log(ingresar)
        console.log(numero1)
    }else if(operaciones.key==='-'){
        contador++;
        if(contador>1){
            ingresar=numero1
        }
        operador='-'
        mostrar.innerHTML=''
        numero1=ingresar
        ingresar=0;
    }else if(operaciones.key==='*'){
        contador++;
        if(contador>1){
            ingresar=numero1
        }
        operador='*'
        mostrar.innerHTML=''
        numero1=ingresar
        ingresar=0;
    }else if(operaciones.key==='/'){
        contador++;
        if(contador>1){
            ingresar=numero1
        }
        operador='/'
        mostrar.innerHTML=''
        numero1=ingresar
        ingresar=0;
    }
})



addEventListener('keydown',enter=>{
    if(enter.key==='Enter'){
        resuelve()
    }
})

addEventListener('keydown',deletear=>{
    if(deletear.code==='Backspace'){
        array=Array.from(ingresar)
        array.pop()
        ingresar=array.join('')
        mostrar.innerHTML=ingresar
        console.log(array)
    }
})

addEventListener('keydown',deleteando=>{
    if(deleteando.code=='Space'){
        mostrar.innerHTML=''
        ingresar='';
        numero1='';
        contador=0;
    }
})