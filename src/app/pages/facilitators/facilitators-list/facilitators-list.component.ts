import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FacilitatorsViewModel } from '../../model/facilitators.model';
import { FacilitatorsService } from '../../service/facilitators.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-facilitators-list',
  templateUrl: './facilitators-list.component.html',
  styleUrls: ['./facilitators-list.component.scss']
})
export class FacilitatorsListComponent implements OnInit, OnDestroy {
  searchText: string = '';
  routeData = {isViewPageShown: false, facilitatorsDetails: new FacilitatorsViewModel()}

  facilitatorsViewModelList: FacilitatorsViewModel[] = []
  destroyed$ =  new Subject<boolean>();

  modalRef?: BsModalRef;
  message?: string;

  constructor(
    private facilitatorsService: FacilitatorsService,
    private cd: ChangeDetectorRef,
    private modalService: BsModalService,
    private toast: ToastrService

  ) { }

  ngOnInit(): void {
    this.getAllFacilitators();
  }

  getAllFacilitators() {
    this.facilitatorsService.getAllFacilitatorsData()
    .pipe(takeUntil(this.destroyed$))
    .subscribe(result => {
      this.loadingDataSucess(result, 'getAllData');
    }, error => {
      this.loadingDataFailed(error);
    })
  }

  addFacilitators() {
    this.back();
    this.routeData.facilitatorsDetails = new FacilitatorsViewModel();
  }

  editFacilitators(data: FacilitatorsViewModel) {
    this.routeData.facilitatorsDetails = data;
    this.back()
  }

  searchEmit(event) {
    this.searchText = event;
  }

  deleteFacilitators(template, data: FacilitatorsViewModel) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    
  }

  back() {
    this.routeData.isViewPageShown = !this.routeData.isViewPageShown;
  }

 
  confirm(): void {
    this.modalRef?.hide();
    this.toast.success('Deleted Successfully!');
  }
 
  decline(): void {
    this.modalRef?.hide();
  }
  

  loadingDataSucess(result: any, mgs: string) {
    if(mgs === 'getAllData') {
      this.facilitatorsViewModelList = result.body;
      this.cd.detectChanges();
    }
  }

  loadingDataFailed(error: HttpErrorResponse) {
    this.toast.error(error.message);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(false);
    this.destroyed$.unsubscribe();
    this.destroyed$.complete();
  }

}
