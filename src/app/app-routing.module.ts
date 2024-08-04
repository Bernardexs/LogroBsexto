import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';
import { logoutGuard } from './guards/logout.guard';

const routes: Routes = [
  {
    path: 'home',canActivate:[loginGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'principal',canActivate:[logoutGuard],
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'register',canActivate:[loginGuard],
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'temporada/:id',canActivate:[logoutGuard],
    loadChildren: () => import('./temporada/temporada.module').then( m => m.TemporadaPageModule)
  },
  {
    path: 'episodios/:id',canActivate:[logoutGuard],
    loadChildren: () => import('./episodios/episodios.module').then( m => m.EpisodiosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
