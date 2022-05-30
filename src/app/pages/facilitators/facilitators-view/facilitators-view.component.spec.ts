import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitatorsViewComponent } from './facilitators-view.component';

describe('FacilitatorsViewComponent', () => {
  let component: FacilitatorsViewComponent;
  let fixture: ComponentFixture<FacilitatorsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilitatorsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitatorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
