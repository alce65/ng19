import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperCountersComponent } from './wrapper-counters.component';

describe('WrapperCountersComponent', () => {
  let component: WrapperCountersComponent;
  let fixture: ComponentFixture<WrapperCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperCountersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
