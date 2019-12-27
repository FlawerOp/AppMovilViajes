import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'conductores',
    loadChildren: () => import('./pages/conductores/conductores.module').then( m => m.ConductoresPageModule)
  },
  {
    path: 'contacto-rapido',
    loadChildren: () => import('./pages/contacto-rapido/contacto-rapido.module').then( m => m.ContactoRapidoPageModule)
  },
  {
    path: 'descripcion/:titulo/:url/:duracion/:descripcion/:incluye/:no_incluye/:recomendaciones',
    loadChildren: () => import('./pages/descripcion/descripcion.module').then( m => m.DescripcionPageModule)
  },
  {
    path: 'guias',
    loadChildren: () => import('./pages/guias/guias.module').then( m => m.GuiasPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'semana',
    loadChildren: () => import('./pages/semana/semana.module').then( m => m.SemanaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
