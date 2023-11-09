import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MicroFrontSelector from './index';
import { HostContext } from '../context/index';

// Mock del contexto
jest.mock('../context/index', () => ({
  HostContext: {
    Consumer: ({ children }) => children({ setSelectedMicroFront: jest.fn() }),
  },
}));

test('renders MicroFrontSelector component correctly', () => {
  // Renderizar el componente MicroFrontSelector
  const { getByText } = render(<MicroFrontSelector movieOne="Movie 1" movieTwo="Movie 2" />);

  // Verificar que los botones se hayan renderizado correctamente
  const buttonMovieOne = getByText('Movie 1');
  const buttonMovieTwo = getByText('Movie 2');

  expect(buttonMovieOne).toBeInTheDocument();
  expect(buttonMovieTwo).toBeInTheDocument();
});

test('calls setSelectedMicroFront with correct values on button click', () => {
  // Renderizar el componente MicroFrontSelector
  const setSelectedMicroFrontMock = jest.fn();
  const { getByText } = render(
    <HostContext.Provider value={{ setSelectedMicroFront: setSelectedMicroFrontMock }}>
      <MicroFrontSelector movieOne="Movie 1" movieTwo="Movie 2" />
    </HostContext.Provider>
  );

  // Simular clic en el primer botón
  const buttonMovieOne = getByText('Movie 1');
  fireEvent.click(buttonMovieOne);

  // Verificar que setSelectedMicroFront se llamó con el valor correcto
  expect(setSelectedMicroFrontMock).toHaveBeenCalledWith(1);

  // Simular clic en el segundo botón
  const buttonMovieTwo = getByText('Movie 2');
  fireEvent.click(buttonMovieTwo);

  // Verificar que setSelectedMicroFront se llamó con el valor correcto
  expect(setSelectedMicroFrontMock).toHaveBeenCalledWith(2);
});
