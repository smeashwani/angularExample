import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServiceComponent } from './service/service.component';
import { AngulartutorialComponent } from './angulartutorial/angulartutorial.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { IntroductionComponent } from './angulartutorial/introduction/introduction.component';
import { FolderandstructureComponent } from './angulartutorial/folderandstructure/folderandstructure.component';
import { DatabindingComponent } from './angulartutorial/databinding/databinding.component';
import { LoginComponent } from './userdetail/login/login.component';
import { RegistrationComponent } from './userdetail/registration/registration.component';
import { DetailsComponent } from './details/details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ServiceComponent,
    AngulartutorialComponent,
    UserdetailComponent,
    IntroductionComponent,
    FolderandstructureComponent,
    DatabindingComponent,
    LoginComponent,
    RegistrationComponent,
    DetailsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
