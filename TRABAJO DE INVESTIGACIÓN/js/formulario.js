  function getData(){
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    
    if(nombre=='' ||  email=="" || mensaje==''){
      alert('Complete lo pedido ');
    }else if(validarEmail(email)){
    
    window.location.replace('enviar.html');   
    
    document.write('<!DOCTYPE html>');
    document.write('<html lang="en">');
    document.write('<head>');
    document.write('<meta charset="UTF-8">');
    document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
    document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    document.write('<link rel="stylesheet" href="css/imprimir.css">');
    document.write('<title>Imprimir</title>');
    document.write('</head>');
    document.write('<body>');
    document.write('<div class="carta">');
    document.write('<div class="cartaImg">');
    document.write('<img src="./img/perfil.jpg" alt="" height="150" width="150">');
    document.write('</div>');
    document.write('<p class="carta-titulo">Gracias por su inscripcion, le saluda William Vera</p>');
    document.write('<p class="frase"> '+nombre+' revise su correo => '+email+' para confirmar su registro, gracias por su comentario => '+mensaje+' </p>');
    document.write('<div class="carta-btn">');
    document.write('<a href="index.html">Aceptar </a>');
    document.write('</div>');
    document.write('</div>');
    document.write('</body>');
    document.write('</html>');
    
  }else{
    window.location.replace('index.html');  
    alert("El email es Incorrecto");
  }
  }


  function soloLetras(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();  
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";
    tecla_especial = false
  
    for(var i in especiales){
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }
  
    if(letras.indexOf(tecla)==-1 && !tecla_especial){
        return false;
    }
  }

  function validarEmail(email) 
  {
      var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email) ? true : false;
  }