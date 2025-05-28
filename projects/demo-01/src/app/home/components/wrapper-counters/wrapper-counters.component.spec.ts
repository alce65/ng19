import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WrapperCountersComponent } from './wrapper-counters.component';
//import { DebugElement } from '@angular/core';

describe('WrapperCountersComponent', () => {
  let component: WrapperCountersComponent;
  let fixture: ComponentFixture<WrapperCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperCountersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WrapperCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with zero clicks and total', () => {
    expect(component.clicks).toBe(0);
    expect(component.total).toEqual([0, 0]);
  });

  // Test de implementación de la función calc
  it('should increment clicks and update total on addClick', () => {
    component.addClick(5, 0);
    expect(component.clicks).toBe(1);
    expect(component.total[0]).toBe(5);

    component.addClick(10, 1);
    expect(component.clicks).toBe(2);
    expect(component.total[1]).toBe(10);
  });

  // it('should increment clicks and update total on event received', () => {
  //   const debugElement = fixture.debugElement;
  //   const counters = debugElement.nativeElement.querySelectorAll(
  //     'ine-counter',
  //   ) as DebugElement[];
  //   // counters[0].triggerEventHandler('makeClick', { value: 5, index: 0 });
  //   // expect(component.clicks).toBe(1);
  //   // expect(component.total[0]).toBe(5);
  // });
});
