# README.md

## Instrucciones para ejecutar los tests

1. Instala las dependencias:
   ```sh
   npm install
   ```

2. Configura las variables de entorno en el archivo `.env` (puedes usar `.env.example` como referencia).

3. Ejecuta los tests con Playwright:
   ```sh
   npx playwright test
   ```

## Herramientas utilizadas

- [Playwright](https://playwright.dev/) para automatización de tests end-to-end.
- [dotenv](https://www.npmjs.com/package/dotenv) para manejo de variables de entorno.
- TypeScript para tipado estático y mejor mantenibilidad.

## Estructura del proyecto

```
.env
.env.example
.gitignore
package.json
playwright.config.ts
components/
fixtures/
pages/
tests/
```

- **components/**: Componentes reutilizables de la UI (ej. Navbar).
- **fixtures/**: Inicialización y tipado de fixtures para los tests.
- **pages/**: Implementación del patrón Page Object para cada página.
- **tests/**: Archivos de pruebas automatizadas.

## Técnicas aplicadas

- **Page Object Model (POM):** Cada página y componente tiene su propia clase y elementos definidos, facilitando la reutilización y el mantenimiento ([pages/Auth/LoginPage/LoginPage.ts](pages/Auth/LoginPage/LoginPage.ts), [components/NavbarComponent/NavbarComponent.ts](components/NavbarComponent/NavbarComponent.ts)).
- **Manejo de waits:** Se evita el uso de esperas fijas (`waits`) y se aprovechan las capacidades automáticas de sincronización de Playwright para mayor robustez.
- **Validaciones:** Se emplea `expect` de Playwright para verificar la visibilidad de elementos y URLs, asegurando que la UI se comporte como se espera ([tests/login.spec.ts](tests/login.spec.ts), [tests/orders.spec.ts](tests/orders.spec.ts)).