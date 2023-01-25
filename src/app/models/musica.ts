export interface Musica {
    id: number;
    titulo: string;
    auto: string;
    file: string;
    capa: string;
    ano: number;
}

export interface Fita {
    id: number;
    nome: number;
    musicas: Musica[]
}

export interface Volume {
    id: number;
    titulo: number;
    fitas: Fita[]
}