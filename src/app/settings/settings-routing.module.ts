import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './info/info.component';
// import { profile } from '';
const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'info', component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
