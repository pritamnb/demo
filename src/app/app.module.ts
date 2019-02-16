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
import { Shared1Module } from '../app/shared1/shared1.module';
import { NgxEditorModule } from 'ngx-editor';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
// import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import { SimplemdeModule, SimplemdeConfig } from 'ngx-simplemde';
// import { HttpClient } from '@angular/common/http';
// import { SimplemdeModule, SIMPLEMDE_CONFIG } from 'ng2-simplemde';
// import { MarkdownCustomComponent } from './markdown-editor-custom-format.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

// rich text editor custom
// import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
// import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
// import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
// import { DialogModule } from '@syncfusion/ej2-angular-popups';
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
    // NgxEditorModule
    // SharedComponent,
    // PaginationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SettingsModule,
    Shared1Module,
    NgxEditorModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    DlDateTimePickerDateModule,
    FlatpickrModule.forRoot(),
    AngularMarkdownEditorModule,
    RichTextEditorAllModule,
    // CheckBoxModule,
    // NumericTextBoxModule,
    // DialogModule
    // SimplemdeModule.forRoot({
    //   // autosave: { enabled: true, uniqueId: 'MyUniqueID' }
    // })
    // SimplemdeModule.forRoot({
      // provide: SimplemdeConfig,
      // config options 1
      // useValue:
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
