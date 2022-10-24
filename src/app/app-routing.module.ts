import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'tab-inicial',
    pathMatch: 'full'
  },
  {
    path: 'completados',
    loadChildren: () => import('./page/completados/completados.module').then( m => m.CompletadosPageModule)
  },
  {
    path: 'tareas',
    loadChildren: () => import('./page/tareas/tareas.module').then( m => m.TareasPageModule)
  },
  {
    path: 'tab-inicial',
    loadChildren: () => import('./page/tab-inicial/tab-inicial.module').then( m => m.TabInicialPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
