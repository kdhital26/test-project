import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FacilitatorsViewModel } from '../../model/facilitators.model';

@Component({
  selector: 'app-facilitators-view',
  templateUrl: './facilitators-view.component.html',
  styleUrls: ['./facilitators-view.component.scss']
})
export class FacilitatorsViewComponent implements OnInit {
  @Input() routeData = {isViewPageShown: false, facilitatorsDetails: new FacilitatorsViewModel()}
  @Output() emitBack = new EventEmitter<any>();

  citites = ['New Delhi', 'Banglore', 'Mumbai'];
  states = ['New Delhi State', 'Banglore State', 'Mumbai State'];
  btnType = 'Add'

  constructor(
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.routeData.facilitatorsDetails.id ? this.btnType = 'Update' : this.btnType = 'Add';
    
  }

  reset() {
    this.routeData.facilitatorsDetails = new FacilitatorsViewModel();
  }

  saveFacilitator() {
    if(this.routeData.facilitatorsDetails.id) {
      this.toast.success('Saved Successfully');
    } else {
      this.toast.success('Update Successfully')
    }
    this.backToListingPage();
  }

  backToListingPage() {
    this.emitBack.emit();
  }

}
