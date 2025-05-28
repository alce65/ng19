import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingComponent } from './greeting.component';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should greet the user', () => {
    //component.user = 'Juan';
    const compiled = fixture.nativeElement as HTMLElement;
    const inputElement = compiled.querySelector('input') as HTMLInputElement;
    inputElement.value = 'Juan';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(compiled.querySelector('p')?.textContent).toContain('Hola Juan!');
  });

  it('should delete the user', () => {
    component.user = 'Juan';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const buttonElement = compiled.querySelector('button') as HTMLButtonElement;
    buttonElement.click();
    fixture.detectChanges();
    expect(compiled.querySelector('p')?.textContent).toContain('Hola amigo!');
  });
});
