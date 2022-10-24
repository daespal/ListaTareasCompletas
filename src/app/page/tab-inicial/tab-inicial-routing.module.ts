import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TabInicialPage,
    children: [
      {
        path: 'completados',
        loadChildren: () => import('./../../page/completados/completados.module').then( m => m.CompletadosPageModule)
      },
      {
        path: 'tareas',
        loadChildren: () => import('./../../page/tareas/tareas.module').then( m => m.TareasPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
