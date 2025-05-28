import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    component.index = 8; // Set the index input for the component
    fixture.detectChanges();
    spyOn(component.makeClick, 'emit'); // Spy on the makeClick output
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render index received as input', () => {
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Counter Component 8');
  }); 

  it('should increment the counter', () => {
    //component.change(1);
    const buttons = fixture.nativeElement.querySelectorAll('button');
    const span = fixture.nativeElement.querySelector('span');
    buttons[0].click();
    expect(component.count).toBe(1);
    fixture.detectChanges();
    expect(span.textContent).toBe('1');
    expect(span.classList.contains('negative')).toBeFalse();
    expect(component.makeClick.emit).toHaveBeenCalledWith(1);
  });

  it('should be reset to 0', () => {
    component.change(1);
    expect(component.count).toBe(1);
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('button');
    const span = fixture.nativeElement.querySelector('span');
    (buttons[2] as HTMLButtonElement).dispatchEvent(new MouseEvent('click'));
    expect(component.count).toBe(0);
    fixture.detectChanges();
    expect(span.textContent).toBe('0');
    expect(component.makeClick.emit).toHaveBeenCalledWith(0);   

  });
});
