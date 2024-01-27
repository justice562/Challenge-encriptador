let textoUsuario = "";
let textoFinal;

function btnEncriptar(){
    textoUsuario = document.getElementById('textoUsuario').value;
    textoFinal = "";
    for(i=0; i<textoUsuario.length;i++){
        if(textoUsuario[i]=='a'){
            textoFinal=textoFinal+'ai'
        }
        else if(textoUsuario[i]=='e'){
            textoFinal=textoFinal+'enter'
        }
        else if(textoUsuario[i]=='i'){
            textoFinal=textoFinal+'imes'
        }
        else if(textoUsuario[i]=='o'){
            textoFinal=textoFinal+'ober'
        }
        else if(textoUsuario[i]=='u'){
            textoFinal=textoFinal+'ufat'
        }
        else{
            textoFinal=textoFinal+textoUsuario[i];
        }
        
    }

    document.getElementById('textoUsuario').value="";
    document.getElementById('textoRealizado').innerText=textoFinal;
    let elementosArea=document.getElementsByClassName('textoAreaDesencriptar')
    for(i=0;i<elementosArea.length;i++){
        elementosArea[i].classList.add('ocultar');
    }
}
function btnDesencriptar(){
    textoUsuario = document.getElementById('textoUsuario').value;
    textoFinal = "";
    for(i=0; i<textoUsuario.length;i++){
        if(textoUsuario[i]=='a'){
            textoFinal=textoFinal+'a'
            i+=1;
        }
        else if(textoUsuario[i]=='e'){
            textoFinal=textoFinal+'e'
            i+=4;
        }
        else if(textoUsuario[i]=='i'){
            textoFinal=textoFinal+'i'
            i+=3;
        }
        else if(textoUsuario[i]=='o'){
            textoFinal=textoFinal+'o'
            i+=3;
        }
        else if(textoUsuario[i]=='u'){
            textoFinal=textoFinal+'u'
            i+=3;
        }
        else{
            textoFinal=textoFinal+textoUsuario[i];
        }
        
    }
    document.getElementById('textoUsuario').value="";
    document.getElementById('textoRealizado').innerText=textoFinal;
    let elementosArea=document.getElementsByClassName('textoAreaDesencriptar')
    for(i=0;i<elementosArea.length;i++){
        elementosArea[i].classList.add('ocultar');
    }
}
function copiar(){
    navigator.clipboard.writeText(textoFinal);
}
