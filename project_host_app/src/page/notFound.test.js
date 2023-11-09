import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './notFound';

test('renders NotFound component correctly', () => {
  // Renderizar el componente NotFound
  const { getByText } = render(<NotFound />);

  // Verificar que el título y el mensaje se hayan renderizado correctamente
  const titleElement = getByText('404 - Not Found');
  const messageElement = getByText('Sorry, the page you are looking for does not exist.');

  expect(titleElement).toBeInTheDocument();
  expect(messageElement).toBeInTheDocument();
});
