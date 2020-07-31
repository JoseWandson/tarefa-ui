export class Item {
  id: number;
  descricao: string;
  telefone: string;
  concluido: boolean;
  tarefaId: number;
}

export class Tarefa {
  id: number;
  descricao: string;
  itens: Item[];
}
