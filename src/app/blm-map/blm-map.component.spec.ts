import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlmMapComponent } from './blm-map.component';

describe('BlmMapComponent', () => {
  let component: BlmMapComponent;
  let fixture: ComponentFixture<BlmMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlmMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlmMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
