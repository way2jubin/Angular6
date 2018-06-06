import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { ListComponent } from '../search/list/list.component';
import { BookComponent } from '../book/book.component';
import { ConfirmcancelComponent } from '../search/list/confirmcancel/confirmcancel.component';
import { IbankingComponent } from '../book/ibanking/ibanking.component';
import { CreditcardComponent } from '../book/creditcard/creditcard.component';
import { CodComponent } from '../book/cod/cod.component';
import { FormsModule } from '@angular/forms';
import { RouteguardService } from '../routeguard.service';
import { GstpipePipe } from '../gstpipe.pipe';
import { NgProgressModule } from 'ngx-progressbar';
import { NotificationCenterModule } from 'ngx-notification-center';
import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';
import { LoginComponent } from '../login/login.component';

const childroutes = [
  { path: 'list', component: ListComponent, canActivate: [RouteguardService] },
  { path: 'book', component: BookComponent, canActivate: [RouteguardService] }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(childroutes),
    NgProgressModule,
    NotificationCenterModule,
    CustomMaterialsModule
  ],
  declarations: [
    ListComponent,
    BookComponent,
    ConfirmcancelComponent,
    IbankingComponent,
    CreditcardComponent,
    CodComponent,
    GstpipePipe,
  ],
  entryComponents: [ConfirmcancelComponent]
})
export class ChildroutesModule { }
