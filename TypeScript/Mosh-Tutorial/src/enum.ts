// ENUMS (conteúdo NOVO) permite que o desenvolvedor nomeie constantes. Sendo mais fácil nomear a intenção ou os tipos de casos.
// Nesse caso o editor possui uma função que consegue preencher automaticamente sendo por default 0, 1, 2 ..., ou se quiser pode escolher de onde começa;
enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Medium

// Caso queira utilizar sting terá que dar o valor cada um pois o editor não consegue preencher automaticamente.
// E caso defina essa ENUM como uma constante será compilado um código mais otimizado/ suscinto.
// const enum Size {Small = 1, Medium, Large};
// let mySize: Size = Size.Medium