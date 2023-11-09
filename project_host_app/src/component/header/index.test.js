import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';
import { HostProvider } from '../context/index';

test('renders Header component correctly', () => {
  // Renderizar el componente Header dentro del contexto del HostProvider
  const { getByText } = render(
    <HostProvider>
      <Header />
    </HostProvider>
  );

  // Verificar que los elementos del encabezado se hayan renderizado correctamente
  const projectHostElement = getByText('Project Host');
  expect(projectHostElement).toBeInTheDocument();
});

