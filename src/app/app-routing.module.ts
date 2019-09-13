import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me/about-me.component';


const routes: Routes = [
  { path: '', redirectTo: '/aboutMe', pathMatch: 'full' },
  { path: 'aboutMe', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
