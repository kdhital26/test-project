import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'facilitator', loadChildren: () => import('../app/pages/facilitators/facilitators.module').then(m => m.FacilitatorsRoutingModule) },
  { path: '', redirectTo: 'facilitator', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
