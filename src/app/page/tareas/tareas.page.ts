import { CompletadosPage } from './../../page/completados/completados.page';
import { Component } from '@angular/core';
import { TasksService } from './../../services/tasks.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage {

  public tasksModel: string[];
  public task: string;
  public complete: string[];

  constructor(private tasksService:TasksService,private router:Router) {
    this.tasksModel = this.tasksService.getTasks();  //esto es para mandar llamar e inicializar el servicio con lo que creamos como instancia 
    this.task = "Algo";
  }

  public addTask(){
    this.tasksService.addTask(this.task);
    this.tasksModel = this.tasksService.getTasks();
    console.log(this.tasksModel);
    this.task="";
  }

  public removeTask(pos:number){
    this.tasksService.removeTask(pos);
    this.tasksModel = this.tasksService.getTasks();
  }

  public goReceiver(pos:number){
    this.tasksService.sendObjectSource(this.tasksModel);
    this.tasksModel = this.tasksService.getTasks();
    this.tasksService.removeTask(pos);
    this.router.navigate(['tab-inicial/completados']);

  }

}

//Nuestro modelo era el arreglo de las fotos porque ahi guardabamos las imagenes 
//servicio es el proceso que se esta corriendo siempre 
//todos los servicios que yo cree haga lo que haga debe estar inicializado en el contructor como parametro. 

