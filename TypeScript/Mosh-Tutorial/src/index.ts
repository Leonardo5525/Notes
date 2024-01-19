// typescript consegue designar ou compreender o valor das vairáveis de acordo com os valores designados a elas.
let sales = 123456789;
let course ='Typescript';
let is_published = true;


let level;
// essa variável será de um tipo any, o que poderá ser designado um valor depois (sring, number ...) isso NÃO É INDICADO pois acaba anulando a função/ benefício de usar TS. Então por best pratice é indicado usar o mínimo possível a variável tipo ANY.

function render (document){
    console.log(document);
    
}
// Está dando o valor de forma implícita, até podemos definir o valor "document: any" ou arrumar na tsconfig = "noImplicityAny: false", mas ambos não são indicados a não ser que saiba o que está fazendo.

let numero: number [] = [1, 2, '3'];
// o uso da espeficação que o TS traz como benefício, auxilia a captação de possíveis futuros erros.
// Caso esteja tudo certo, nem precisa descrever o tipo da variável. O compilador consegue reconhecer o valor pelo compilador.

let numbers: number[] = [];
numbers[0] = 1;
numbers[1] = '1';
// quando se utiliza uma array vazia deve sempre predefinir o valor, pois pode causar problemas posteriormente, o qual poderia ser percebido antes

numbers.forEach(n => n.)
// como nosso editor sabe o valor de "n" ele nos permite auto complementação de todos os métodos de acordo com cada tipo de variável, o que não possuímos no JS

// 1, 'Mosh' COMO DEVE SER = let user: [number, string] = [1, 'Mosh'];
let user: [number, string, boolean, number] = [1, 'Mosh', true, 5];
user.push(1)
// O uso método push é algo que pode danificar nosso código visto que não conseguimos predefinir o valor deles. DEVEMOS manter somente o máximo de 2 VARÍAVEIS por TUPLES para que evite confusão ou complicação na leitura.

