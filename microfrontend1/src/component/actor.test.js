import React from 'react';
import { render } from '@testing-library/react';
import Actor from './Actor';
import HarryImag from '../data/images/Daniel-Radcliffe.jpg'


// Mock data
const actor = {
  name: 'Daniel Radcliffe',
  personaje: 'Harry Potter',
};

const image = HarryImag;

test('renders Actor component correctly', () => {
  // Renderizar el componente Actor con datos de prueba
  const { getByAltText, getByText } = render(
    <Actor actor={actor} image={image} name="Nombre" character="Personaje" />
  );

  // Verificar que la imagen se haya renderizado correctamente
  const actorImage = getByAltText(actor.name);
  expect(actorImage.src).toBe(image);

  // Verificar que el nombre del actor y el personaje se hayan renderizado correctamente
  const actorName = getByText(`Nombre: ${actor.name}`);
  const actorCharacter = getByText(`Personaje: ${actor.personaje}`);

  expect(actorName).toBeInTheDocument();
  expect(actorCharacter).toBeInTheDocument();
});
