import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsecourseComponent } from './browsecourse.component';

describe('BrowsecourseComponent', () => {
  let component: BrowsecourseComponent;
  let fixture: ComponentFixture<BrowsecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
