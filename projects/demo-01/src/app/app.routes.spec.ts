import { routes, menuOptions } from './app.routes';

describe('Routes', () => {
  it('should have a routes array', () => {
    expect(routes).toBeDefined();
    expect(Array.isArray(routes)).toBe(true);
    expect(routes.length).toBe(5);
    expect(routes[0].path).toBe('');

    expect(routes[0].redirectTo).toBe('home');
    expect(routes[0].pathMatch).toBe('full');
    expect(routes[1].path).toBe('home');
    expect(routes[1].loadComponent).toBeDefined();
    expect(routes[1].data).toBeDefined();
    expect(routes[2].path).toBe('products');
    expect(routes[2].loadComponent).toBeDefined();

    expect(menuOptions).toBeDefined();
    expect(Array.isArray(menuOptions)).toBe(true);
    expect(menuOptions.length).toBe(3);
  });
});
