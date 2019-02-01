import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [ProfileComponent, InfoComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  exports: [
  InfoComponent,
  ProfileComponent
  ]
})
export class SettingsModule { }
