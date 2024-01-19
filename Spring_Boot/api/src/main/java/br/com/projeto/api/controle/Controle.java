// Essa clase servirá para manipular rotas
package br.com.projeto.api.controle;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
// Isso é uma Anotation, que serve para ensinar um framework a colocar uma ação diferente a uma classe, método ou atributo.
public class Controle {

    @GetMapping("")    
    public String mensagem(){
        return "Hello World!";
    }
}
