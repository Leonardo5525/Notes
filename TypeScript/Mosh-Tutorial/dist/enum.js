// ENUMS (conteúdo NOVO) permite que o desenvolvedor nomeie constantes. Sendo mais fácil nomear a intenção ou os tipos de casos.
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var mySize = Size.Medium;
