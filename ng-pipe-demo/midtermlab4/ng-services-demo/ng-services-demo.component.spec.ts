import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgServicesDemoComponent } from './ng-services-demo.component';

describe('NgServicesDemoComponent', () => {
  let component: NgServicesDemoComponent;
  let fixture: ComponentFixture<NgServicesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgServicesDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgServicesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
