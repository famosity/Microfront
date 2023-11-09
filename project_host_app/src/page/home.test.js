import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Home from './Home';
import { HostProvider } from '../component/context/index';

// Mock del módulo "context/index"
jest.mock('../component/context/index', () => ({
  HostContext: {
    Consumer: ({ children }) => children({ language: 'English' }),
  },
}));

test('renders Home component correctly with English language', async () => {
  // Renderizar el componente Home dentro del contexto del HostProvider
  const { getByText } = render(
    <HostProvider>
      <Home />
    </HostProvider>
  );

  // Verificar que los elementos del componente Home se hayan renderizado correctamente
  const titleElement = getByText('Title in English'); // Ajusta esto según tus datos
  const buttonElement = getByText('Movie One'); // Ajusta esto según tus datos

  expect(titleElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();

  // Esperar a que el componente Loading se oculte
  await waitFor(() => {
    const loadingElement = getByText('Aca aparecera el Microfrontend', { exact: false });
    expect(loadingElement).toBeInTheDocument();
  });
});

// Agrega pruebas similares para verificar el renderizado con el idioma en español
test('renders Home component correctly with Spanish language', async () => {
  // Mock del módulo "context/index" para el idioma en español
  jest.mock('../component/context/index', () => ({
    HostContext: {
      Consumer: ({ children }) => children({ language: 'Spanish' }),
    },
  }));

  // Renderizar el componente Home dentro del contexto del HostProvider
  const { getByText } = render(
    <HostProvider>
      <Home />
    </HostProvider>
  );

  // Verificar que los elementos del componente Home se hayan renderizado correctamente
  const titleElement = getByText('Title in Spanish'); // Ajusta esto según tus datos
  const buttonElement = getByText('Movie Two'); // Ajusta esto según tus datos

  expect(titleElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();

  // Esperar a que el componente Loading se oculte
  await waitFor(() => {
    const loadingElement = getByText('Aca aparecera el Microfrontend', { exact: false });
    expect(loadingElement).toBeInTheDocument();
  });
});
