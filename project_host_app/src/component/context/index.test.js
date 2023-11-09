import React from 'react';
import { render, act } from '@testing-library/react';
import { HostProvider, HostContext } from './index';

test('renders HostProvider and HostContext correctly', () => {
  let contextValue;

  render(
    <HostProvider>
      <HostContext.Consumer>
        {(value) => {
          contextValue = value;
          return null;
        }}
      </HostContext.Consumer>
    </HostProvider>
  );

  // Verificar que el contexto se haya creado correctamente
  expect(contextValue).not.toBeUndefined();
  expect(contextValue.language).toBe('spanish'); // Ajusta esto según el valor inicial en tu componente
  expect(typeof contextValue.changeLanguage).toBe('function');
  expect(contextValue.selectedMicroFront).toBe(null); // Ajusta esto según el valor inicial en tu componente
  expect(typeof contextValue.setSelectedMicroFront).toBe('function');
});

test('changes language and selectedMicroFront in HostProvider', () => {
  let contextValue;

  render(
    <HostProvider>
      <HostContext.Consumer>
        {(value) => {
          contextValue = value;
          return null;
        }}
      </HostContext.Consumer>
    </HostProvider>
  );

  // Realizar cambios en el contexto utilizando las funciones proporcionadas por el proveedor
  act(() => {
    contextValue.changeLanguage('english');
    contextValue.setSelectedMicroFront(1);
  });

  // Verificar que los cambios se hayan realizado correctamente
  expect(contextValue.language).toBe('english');
  expect(contextValue.selectedMicroFront).toBe(1);
});
