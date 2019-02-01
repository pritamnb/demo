import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ConversationsComponent } from './pages/conversations/conversations.component';
import { UielementsComponent } from './pages/uielements/uielements.component';
import { TablesComponent } from './pages/tables/tables.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { RouterModule, Routes } from '@angular/router';
import { SettingsModule } from './settings/settings.module';
// import { ListComponent } from './pages/list/list.component' ;

// Angular Material
// import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PagesComponent,
    HomeComponent,
    CalendarComponent,
    TasksComponent,
    ConversationsComponent,
    UielementsComponent,
    TablesComponent,
    TeamsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
