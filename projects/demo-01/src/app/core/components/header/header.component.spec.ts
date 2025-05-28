import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.title = 'Test ng19'; // Establecemos el título para la prueba
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test de implementación
  // Accedemos a la instancia de la clase
  // y comprobamos que el título sea el esperado
  it(`should have the 'demo-01' title`, () => {
    expect(component.title).toEqual('Test ng19');
  });

  // Test de renderizado o comportamiento
  // Accedemos al elemento del DOM
  // y comprobamos que el título se muestre correctamente

  it('should render title', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('Test');
  });
});
