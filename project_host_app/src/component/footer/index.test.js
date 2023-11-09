import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

test('renders Footer component correctly', () => {
  // Renderizar el componente Footer
  const { getByText } = render(<Footer />);

  // Verificar que el texto de derechos de autor se haya renderizado correctamente
  const copyrightText = getByText('Derechos de autor © 2023 Project Host');
  expect(copyrightText).toBeInTheDocument();
});
