import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XbackstageComponent } from './xbackstage.component';

describe('XbackstageComponent', () => {
  let component: XbackstageComponent;
  let fixture: ComponentFixture<XbackstageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XbackstageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XbackstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
