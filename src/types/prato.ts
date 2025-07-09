type PratoType = {
    usuario?: string,
    id: number,
    nome: string,
    categoria: string,
    preparo?: string,
    ingredientes?: { id: number, nome: string }[],
};

export type { PratoType };