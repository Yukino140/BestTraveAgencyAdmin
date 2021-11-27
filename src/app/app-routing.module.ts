import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from "./log-in/log-in.component";
import { EditComponent } from "./edit/edit.component";

import{ ConnectionGuard } from "./auth/connection.guard";
import { DisconnectionGuard } from "./disAuth/disconnection.guard";
import { DeleteRecordComponent } from './Gerer/delete-record/delete-record.component';
import { AddOfferComponent } from './Gerer/add-offer/add-offer.component';

const routes: Routes = [
  {path: "log_in", component: LogInComponent, canActivate: [DisconnectionGuard]},
  {path: "edit", component: EditComponent, canActivate: [ConnectionGuard]},
  {path: 'delete', component: DeleteRecordComponent},
  {path:'Add', component: AddOfferComponent},
  {path: "", component: EditComponent, canActivate: [ConnectionGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
