import React from 'react';
import { render } from '@testing-library/react';
import Loading from './index';
import { HostProvider } from '../context/index';

test('renders Loading component correctly when selectedMicroFront is truthy', () => {
  // Renderizar el componente Loading dentro del contexto del HostProvider
  const { getByTestId } = render(
    <HostProvider>
      <Loading />
    </HostProvider>
  );

  // Verificar que el componente Spinner se haya renderizado correctamente
  const spinnerElement = getByTestId('spinner');
  expect(spinnerElement).toBeInTheDocument();
});

test('renders Loading component correctly when selectedMicroFront is falsy', () => {
  // Renderizar el componente Loading dentro del contexto del HostProvider con selectedMicroFront como null
  const { getByText } = render(
    <HostProvider>
      <Loading />
    </HostProvider>
  );

  // Verificar que el componente Message se haya renderizado correctamente
  const messageElement = getByText('Aca aparecera el Microfrontend');
  expect(messageElement).toBeInTheDocument();
});
