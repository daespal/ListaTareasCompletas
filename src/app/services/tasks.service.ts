import { Injectable } from '@angular/core';
//import { threadId } from 'worker_threads';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private objectSource = new BehaviorSubject<string>(" ");
  $getObjectSource = this.objectSource.asObservable();
  private tasks: string[] = []; //encapsulandolo porque es privado
  private complete: string[]=[];

  constructor() {
    this.tasks.push("Tarea 1");
    this.tasks.push("Tarea 2");
    this.tasks.push("Tarea 3");
    this.tasks.push("Tarea 4");
    
  }

  public getTasks(): string[] {
    return this.tasks;   //esto es para regresar el taks que declaramos al principio 
  }

  public addTask(task:string){
    this.tasks.push(task);
  }

  public removeTask(pos:number){
    this.tasks.splice(pos,1);  //splice para borrar donde yo quiera. 
  }

  public getComplete(): string[] {
    return this.complete;   //esto es para regresar el taks que declaramos al principio 
  }

  public addTaskComplete(comp:string){
    this.complete.push(comp);
  }

  public removeTaskComplete(pos:number){
    this.complete.splice(pos,1);  //splice para borrar donde yo quiera. 
  }

  sendObjectSource(task:string){
    this.objectSource.next(task);
  }
}

//esta carpeta con los archivos se creo desde consola con "ionic g service services/tasks"
