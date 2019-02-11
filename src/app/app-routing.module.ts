import { HeaderComponent } from './header/header.component';
import { UielementsComponent } from './pages/uielements/uielements.component';
import { ConversationsComponent } from './pages/conversations/conversations.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './pages/tables/tables.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './settings/info/info.component';
import { ProfileComponent } from './settings/profile/profile.component';
// import { shared1 } from './shared1/'
// import { CalendarComponent } from '';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'tasks', component: TasksComponent },
  { path: 'conversations', component: ConversationsComponent},
  { path: 'uielements', component: UielementsComponent},
  { path: 'tables', component: TablesComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'settings', children: [
    { path: 'info', component: InfoComponent},
    { path: 'profile', component: ProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
