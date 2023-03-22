import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngulartutorialComponent } from './angulartutorial/angulartutorial.component';
import { DatabindingComponent } from './angulartutorial/databinding/databinding.component';
import { FolderandstructureComponent } from './angulartutorial/folderandstructure/folderandstructure.component';
import { IntroductionComponent } from './angulartutorial/introduction/introduction.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './userdetail/login/login.component';
import { RegistrationComponent } from './userdetail/registration/registration.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'service', component: ServiceComponent },
  {
    path: 'angulartutorial', component: AngulartutorialComponent,
    children: [
      // {
      // path:  '',
      // component:  IntroductionComponent
      // },
      {
        path: 'introduction',
        component: IntroductionComponent
      },
      {
        path: 'angularfolderstructure',
        component: FolderandstructureComponent
      },
      {
        path: 'databinding',
        component: DatabindingComponent
      }
    ]
  },
  {
    path: 'userdetails', component: UserdetailComponent,
    children: [
      // {
      // path:  '',
      // component:  LoginComponent
      // },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      }
 
    ]
  },
  { path: 'pageNotFound', component: PagenotfoundComponent },
  { path: 'something', redirectTo: 'pageNotFound' },
  { path: '**', component: PagenotfoundComponent },
  
  { path: 'details/:id/:name', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
