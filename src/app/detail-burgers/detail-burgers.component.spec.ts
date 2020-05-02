import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBurgersComponent } from './detail-burgers.component';

describe('DetailBurgersComponent', () => {
  let component: DetailBurgersComponent;
  let fixture: ComponentFixture<DetailBurgersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBurgersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
