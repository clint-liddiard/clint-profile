import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { ObjectiveComponent } from './objective/objective.component';
import { PdfDisplayComponent } from './pdf-display/pdf-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ResumeComponent,
    BioComponent,
    ProjectsComponent,
    ObjectiveComponent,
    PdfDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
