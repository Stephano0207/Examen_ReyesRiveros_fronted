import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'reclutamiento-create',
    loadChildren: () => import('./pages/reclutamiento/reclutamiento-create/reclutamiento-create.module').then( m => m.ReclutamientoCreatePageModule)
  },
  {
    path: 'reclutamiento-edit',
    loadChildren: () => import('./pages/reclutamiento/reclutamiento-edit/reclutamiento-edit.module').then( m => m.ReclutamientoEditPageModule)
  },
  {
    path: 'reclutamiento-inicio',
    loadChildren: () => import('./pages/reclutamiento/reclutamiento-inicio/reclutamiento-inicio.module').then( m => m.ReclutamientoInicioPageModule)
  },
  {
    path: 'gastos-inicio',
    loadChildren: () => import('./pages/gastos/gastos-inicio/gastos-inicio.module').then( m => m.GastosInicioPageModule)
  },
  {
    path: 'gastos-edit',
    loadChildren: () => import('./pages/gastos/gastos-edit/gastos-edit.module').then( m => m.GastosEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
