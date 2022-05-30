import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from '../common/search/search.component';
import { FacilitatorsListComponent } from './facilitators-list/facilitators-list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FacilitatorsViewComponent } from './facilitators-view/facilitators-view.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { SearchPipe } from '../common/pipes/search-pipe.pipe';
import { BsModalService } from 'ngx-bootstrap/modal';

const routes: Routes = [
  { path: '', component: FacilitatorsListComponent },  
];

@NgModule({
    declarations: [
      FacilitatorsListComponent,
      SearchComponent,
      FacilitatorsViewComponent,
      SearchPipe
    ],
  imports: [
      CommonModule,
      RouterModule.forChild(routes),      
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      BsDropdownModule.forRoot(),
      ToastrModule.forRoot({
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }),
      
],
  exports: [RouterModule],
  providers: [ToastrService, BsModalService],  

})
export class FacilitatorsRoutingModule { }