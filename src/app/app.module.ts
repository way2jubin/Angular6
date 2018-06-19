import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgProgressModule } from 'ngx-progressbar';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationCenterModule, NotificationCenter } from "ngx-notification-center";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './search/search.component';
import { RouteguardService } from './routeguard.service';
import { DatamanageService } from './datamanage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomMaterialsModule } from './custom-materials/custom-materials.module';
import { GetComponent } from './http/get/get.component';
import { PostComponent } from './http/post/post.component';
import { HttpClientModule} from '@angular/common/http';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { CustomobservableComponent } from './customobservable/customobservable.component';
import { CustomAlertComponent } from './custom-alert/custom-alert.component'
import { CustomAlertSService } from './custom-alert-s.service';
import { LifecycleComponent } from './lifecycle/lifecycle.component';



const myroutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'search', component: SearchComponent, canActivate: [RouteguardService] },
  { path: 'search/result', loadChildren: 'src/app/childroutes/childroutes.module#ChildroutesModule' },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteguardService] },
  { path: 'http/get',component:GetComponent, canActivate: [RouteguardService]},
  { path: 'http/post',component:PostComponent, canActivate: [RouteguardService]},
  { path: 'form/template',component:TemplateComponent, canActivate: [RouteguardService]},
  { path: 'form/reactive',component:ReactiveComponent, canActivate: [RouteguardService]},
  { path: 'observable',component:CustomobservableComponent, canActivate: [RouteguardService]},
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    GetComponent,
    PostComponent,
    TemplateComponent,
    ReactiveComponent,
    CustomobservableComponent,
    CustomAlertComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myroutes),
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RouteguardService, DatamanageService,CustomAlertSService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
