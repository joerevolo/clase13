function calcular(){
    let xn = parseInt(document.getElementById("txtNum").value);
    if (xn == 0){
        document.getElementById("txtRes").value='cero'
    }else{
        if (xn >0){
            document.getElementById("txtRes").value='positivo'
        }else{
            document.getElementById("txtRes").value='negativo'
        }
    }
}
function limpiar(){
    document.getElementById("txtNum").value='';
    document.getElementById("txtRes").value='';
    
}

