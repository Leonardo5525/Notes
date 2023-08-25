###  Statement If X Switch
Tentar não utilizar muito, caso seja extenso as condicionais quer dizer que não está escrevendo um código eficiente. 

- Ambos conseguem serem escritos em uma linha só mas para visualização e leitura fica pior dessa forma.

```js
if (  ){

} else if( ){

} else ( ) {

}

// ==================//

switch () {
    case "value":
    console.log();
    break;

    case "value":
    console.log();
    break;

    default:
    console.log();
}

```

<hr>

### For Loop
```js
const arr = ['chnwfinwi', 'iwneiwnfeine', 'mqowemdomdqw', 20, 20, 40, 50 ]

for (let i = 0; i < arr.length; i++){
    if(arr[i] === "number"){
        console.log(arr[i])    
    }

}

// Como distinguir ou verificar se um valor é uma string ou número em JS?
```

<hr>

### Functions

```js
function myFunction(parametro1, parametro2){
    console.log(parametro1);
    console.log(parametro2);
}
// Quando definido alguma variável para a função é chamado PARAMETRO o que está dentro da parenteses myFunction(...., ... )

myFunction(20,'some string');
// Quando vai ser definido um valor para variável é chamado de ARGUMENTO os valores adicionados na função dentro do parenteses myFunction(...., ... )
```

<br>

Os dois jeitos abaixo de criar função necessitam que elas sejam designadas a uma variável para funcionar:
```js
const anonymousFunction = function (parametro1, parametro2){
    console.log(parametro1);
    console.log(parametro2);
}
// Existe alguns jeitos de escrever função. A de CIMA é chamada de FUNÇÃO ANÔNIMA pois a função está definida em uma variável portanto não precisa nomear ela como a de baixo. 

const arrowFunction = (parametro1, parametro2) => {
    console.log(parametro1);
    console.log(parametro2);
}
// E essa de ARROW Function. Ela não requer um return para retornar o código.
```

<hr>

### Scopes
Isso irá dizer onde essas variáveis estão disponíveis no código para o uso, global ou local(bloco de código).

<hr>

### Return
Se colocar ou designar qualquer valor a uma variável após a função `return` não irá mudar ou acrescentar valor, após ele basicamente o código não "processa" mais nada.


<hr>

### Métodos
https://www.tutorialspoint.com/javascript/index.htm

Site utilizado na aula para mostrar informações e funcionalidades do JS, nesse caso falou sobre os métodos e como ler a documentação.

- Quando usar o método `split` irá alerar o tipo de dado variável para uma `array`.
