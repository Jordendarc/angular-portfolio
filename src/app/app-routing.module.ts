import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me/about-me.component';
import { WorkComponent } from './components/work/work/work.component';


const routes: Routes = [
  { path: '', redirectTo: '/aboutMe', pathMatch: 'full' },
  { path: 'work', component: WorkComponent },
  { path: 'aboutMe', component: AboutMeComponent }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
