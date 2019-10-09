import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me/about-me.component';
import { WorkComponent } from './components/work/work/work.component';
import { ContactComponent } from './components/contact/contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/aboutMe', pathMatch: 'full' },
  { path: 'work', component: WorkComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports:[RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
