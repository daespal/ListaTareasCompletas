import { Component, OnInit } from '@angular/core';
import { TasksService } from './../../services/tasks.service';

@Component({
  selector: 'app-completados',
  templateUrl: './completados.page.html',
  styleUrls: ['./completados.page.scss'],
})
export class CompletadosPage implements OnInit {

  user:any;
  public tasksModel: string[];
  public task: string;
  
  constructor(private tasksService:TasksService) {
    this.tasksModel = this.tasksService.getComplete();  //esto es para mandar llamar e inicializar el servicio con lo que creamos como instancia 
    //this.user=[[]];
  }
    ngOnInit() {
      this.tasksService.$getObjectSource.subscribe(task=>{
        console.log(task)
        this.user=task;
      }).unsubscribe();

      
    }
}
