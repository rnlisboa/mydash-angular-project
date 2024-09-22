import { Component } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html'
})
export class DatatableComponent {
  tarefas = [
    {
      nome: 'Adjust concentrates to behaviour and standards',
      prioridade: 'Alta',
      projeto: 'Gateway of Pacific',
      status: 'Concluído',
      responsavel: 'Miles, Esther',
      deadline: 'Wed 11 Aug'
    },
    {
      nome: 'Initiation/Planning Activities Completed',
      prioridade: 'Med',
      projeto: 'Renoir Hotel Fire',
      status: 'Concluído',
      responsavel: 'Miles, Esther',
      deadline: 'Wed 11 Aug'
    },
    {
      nome: 'Requirements Analysis Completed',
      prioridade: 'Baixa',
      projeto: 'Grand Hyatt Union Square',
      status: 'Concluído',
      responsavel: 'Miles, Esther',
      deadline: 'Wed 11 Aug'
    },
    {
      nome: 'Security Planning',
      prioridade: 'Alta',
      projeto: '801 Brannan',
      status: 'Concluído',
      responsavel: 'Miles, Esther',
      deadline: 'Wed 11 Aug'
    }
  ];
}
