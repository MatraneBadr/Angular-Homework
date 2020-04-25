import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBurgersComponent } from './list-burgers.component';

describe('ListBurgersComponent', () => {
  let component: ListBurgersComponent;
  let fixture: ComponentFixture<ListBurgersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBurgersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
