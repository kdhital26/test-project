import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitatorsListComponent } from './facilitators-list.component';

describe('FacilitatorsListComponent', () => {
  let component: FacilitatorsListComponent;
  let fixture: ComponentFixture<FacilitatorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilitatorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitatorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
