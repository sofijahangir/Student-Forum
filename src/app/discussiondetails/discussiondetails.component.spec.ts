import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussiondetailsComponent } from './discussiondetails.component';

describe('DiscussiondetailsComponent', () => {
  let component: DiscussiondetailsComponent;
  let fixture: ComponentFixture<DiscussiondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussiondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
