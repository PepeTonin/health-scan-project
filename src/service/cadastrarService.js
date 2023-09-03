import { post } from "./default/conector";

export function cadastrarUsuario(data){
    return post("usuario/cadastrar-usuario", data);
}

export function validarCodigoEmail(data){
    return post("usuario/validar-codigo", data);
}