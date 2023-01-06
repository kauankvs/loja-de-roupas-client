import { EstoqueInterface } from "./estoque-interface";

export interface ProdutoInterface {
    produtoId: number,
    imagem: string,
    descricao?: string,
    marca: string,
    preco: number,
    tipo: string,
    estoque?: EstoqueInterface[],
}
