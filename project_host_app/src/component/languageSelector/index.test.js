import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LanguageSelector from './index';

test('renders LanguageSelector component correctly', () => {
  // Renderizar el componente LanguageSelector
  const { getByText, getByLabelText } = render(<LanguageSelector />);

  // Verificar que los elementos del selector de idioma se hayan renderizado correctamente
  const languageLabelElement = getByLabelText('Language:');
  const englishOptionElement = getByText('English');
  const spanishOptionElement = getByText('Spanish');

  expect(languageLabelElement).toBeInTheDocument();
  expect(englishOptionElement).toBeInTheDocument();
  expect(spanishOptionElement).toBeInTheDocument();
});

test('calls handleLanguageChange on option change', () => {
  // Crear una función de simulación
  const handleLanguageChangeMock = jest.fn();

  // Renderizar el componente LanguageSelector con la función de simulación
  const { getByText } = render(<LanguageSelector handleLanguageChange={handleLanguageChangeMock} />);

  // Simular cambio de opción a "English"
  const englishOptionElement = getByText('English');
  fireEvent.change(englishOptionElement, { target: { value: 'English' } });

  // Verificar que la función de simulación se haya llamado con el valor correcto
  expect(handleLanguageChangeMock).toHaveBeenCalledWith('English');

  // Simular cambio de opción a "Spanish"
  const spanishOptionElement = getByText('Spanish');
  fireEvent.change(spanishOptionElement, { target: { value: 'Spanish' } });

  // Verificar que la función de simulación se haya llamado con el valor correcto
  expect(handleLanguageChangeMock).toHaveBeenCalledWith('Spanish');
});
