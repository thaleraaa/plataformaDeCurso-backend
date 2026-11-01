export interface Payload {
    sub: string;
    role: 'ALUNO' | 'PROFESSOR' | 'ADMINISTRADOR';
}