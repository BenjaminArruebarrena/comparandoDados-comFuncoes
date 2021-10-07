/*=================================
Insertar un arreglo en otro
===================================*/

//Declaro las variables que voy a pedir desde el promt
var nome;
var idade;
var corFavorita;

//Declaro la variable donde voy a guardar los arreglos que crearé con los prompt
const ficha = [];

//Creo una estructura de control para ingresar los datos
class Pessoa {
   constructor(nome, idade, corFavorita) {
        this.nome = nome;
        this.idade = idade;
        this.corFavorita = corFavorita;
    }

    oMaisVelho(Pessoa) {
       if (this.idade > Pessoa.idade){
           console.log(`${this.nome} e mais velho que ${Pessoa.nome}`)
        }else {
           console.log(`${Pessoa.nome} e maior que ${this.nome}`)
        }
    }

    corFavoritaIgual(Pessoa) {
        if (this.corFavorita === Pessoa.corFavorita) {
            console.log(`${this.nome} tem o mesmo cor favorito que ${Pessoa.nome}`)
        } else {
            console.log(`o cor favorito da ${this.nome} é diferente a o cor favorita de ${Pessoa.nome}`)
        }

    }
}
do {
  //Pido ingresar los datos
  nome=prompt('Nome: ','');
  idade = prompt('Idade: ','');
  corFavorita=prompt('Cor favorita: ','');

  //Creo un arreglo para guardar los datos ingresados
 var dados = new Pessoa (nome,idade,corFavorita);

  //Agrego el arreglo creado (datos) a arreglo ficha al final
  ficha.push(dados);

  //Asigno a una variable la respuesta Si (S) o No(n)
  var x = prompt('Cargar otro (S,N): ','');

  //Mientras la respuesta sea S (mayúscula) ó s (minúscula) continuar 
} while ( (x == 'S')||(x == 's'))

//Imprimo todo el array
console.log(ficha);

 
//Mediante el protoipo length obtengo el tamaño del arreglo
//Indico que mientras i sea menor a al tamaño del arreglo ficha imprima la fila e incremente en uno a i para leer cada fila
for (i=0;i<ficha.length;i++){ 
    console.log(ficha[i].nome)
    //Indico que mientra j sea menor que la longitud de las filas del arrelo ficha imprima los elementos de esa fila y al finalizar incremente en uno para leer cada elemento 
    for (j=0; j < ficha[i].length;j++){ 
        console.log( ficha[i][j]) 
    } 
 
} 
console.log("A pessoa mais velha é: ");
    var maior = Math.max(dados.idade);
    var nomeMaior;
    for(var i = 0; i < ficha.length; i++){
       if(ficha[i].idade == maior){
           nomeMaior = ficha[i].nome;
           }
         }
 console.log(nomeMaior);


