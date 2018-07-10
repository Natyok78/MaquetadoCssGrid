
class Notas{

  static subir(){

    console.log('Hola,Martes con frio en BsAs');

    
    
  document.querySelector("#panelMsgContenido").innerHTML
    += document.querySelector("#nota_titulo").value;
    //limpiar el campo despues de escribir
    document.querySelector("#nota_titulo").value ="";
    
    
    //    alert("Huy,acá de detiene el Programa Cliente y puedo Verificar Variables y Valores");  
            

    console.log('[OK] Hola,Martes con frio en BsAs');

  }
  //boton para limpiar el formulario
  // panelMsgContenido para escribir y limpiar
  static limpiar(){
     document.querySelector("#panelMsgContenido").innerHTML ="";
  }
  
}