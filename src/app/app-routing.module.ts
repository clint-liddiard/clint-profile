import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { ObjectiveComponent } from './objective/objective.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'bio', component: BioComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'objective', component: ObjectiveComponent },
  // Add more routes if needed
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route to Home
  { path: '**', redirectTo: '/home' }, // Redirect to Home for any unknown route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
