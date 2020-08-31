import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../app/core/core.module';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
