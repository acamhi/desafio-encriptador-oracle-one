/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
--------------------------------------------------------------------------------------------------------------

función recibe textarea(string) y con un bucle la recorre hasta llega a la ultima letra.

*/

<script>
var buscarA = "a", buscarE = "e", buscarI = "i", buscarO = "o", buscarU = "u";
var remplazarA = "ai", remplazarE = "enter", remplazarI = "imes", remplazarO = "ober", remplazarU = "ufat";

var input = document.querySelector("textarea");
var button = document.querySelector(".btn");
button.onclick = encriptar;


function encriptar(input){
    texto.replaceAll(buscarA, remplazarA);
}

</script>