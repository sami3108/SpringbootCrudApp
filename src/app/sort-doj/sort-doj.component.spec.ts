import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDojComponent } from './sort-doj.component';

describe('SortDojComponent', () => {
  let component: SortDojComponent;
  let fixture: ComponentFixture<SortDojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortDojComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortDojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
