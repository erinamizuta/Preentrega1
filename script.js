const usuario = "usuario123";
const contrasenia = "contraseña123";

function ingresoDatos(){

    let user = prompt("Ingrese usuario");
    let pass = prompt("Ingrese contraseña");

    if (validarDatos (user,pass)){
        iniciarCarrito();
    }else{
        alert("Usuario y/o contraseña incorrecta");
    }
    
}

function validarDatos(user,pass){
    if (user === usuario && pass === contrasenia){
        return true; 
    }else {
        return false;
    }
}

function iniciarCarrito(){
    let carrito = "";
    let finalizarCarrito = true;

    while (finalizarCarrito){
        let codigo = prompt ("Ingrese el código del producto seleccionado")
        let item = obtenerItem(codigo);
        
        if (item){
            console.log("Item agregado :"+ item) ;
            carrito += "\n"+ item;

        }else{
            if (cod === null){
                finalizarCarrito = false ;
            }else {
                alert("Ingrese un código válido");
            }

        }
    }

    if (carrito != ""){
        let resp = confirm ("Desea concretar la compra de :"+ carrito);
        if (resp){
            alert("Gracias por comprar en nuestra tienda online");
        }
    }
}

function obtenerItem(codigo){ 
    let item;
    switch(codigo){
        case "1" : 
                    item = "Sueter 'cardigan'";
        case "2" : 
                    item = "Buzo 'august'";
        case "3" : 
                    item = "Tote bag 'this is me trying'" ;
        case "4" : 
                    item = "Remera 'cardigan'" ;      
        case "5" : 
                    item = "Baby tee 'mirrorball'" ;
         default :
                    item = false;           

    }
   return item ;  
}