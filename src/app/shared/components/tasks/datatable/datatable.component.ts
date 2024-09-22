import { Component, OnInit } from '@angular/core';
import {TaskService } from '../../../../core/services/api/tasks.service';
import { TaskModel } from '../../../../core/services/api/model/task.model';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html'
})
export class DatatableComponent implements OnInit{
  taskList!: TaskModel[];

  constructor(private service: TaskService){

  }
  ngOnInit(): void {
    try{

      this.loadTaskList()
    } catch(e){
      console.log(e)
    }
  }

  loadTaskList(){
    this.service.getAll().subscribe(((tasks)=>{
      this.taskList = tasks;
    }))
  }
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
