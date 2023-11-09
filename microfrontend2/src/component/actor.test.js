import React from 'react';
import { render } from '@testing-library/react';
import Actor from './Actor';
import MovieImage from '../data/images/Billy-Boyd.jpg'

// Mock data
const actor = {
  idActor: 1,
  name: 'Elijah Wood',
  personaje: 'Frodo Bolsón',
};

const image = MovieImage; 

test('renders Actor component correctly', () => {
  // Renderizar el componente Actor con datos de prueba
  const { getByAltText, getByText } = render(
    <Actor actor={actor} image={image} name="Name" character="Character" />
  );

  // Verificar que la imagen se haya renderizado correctamente
  const actorImage = getByAltText(actor.name);
  expect(actorImage.src).toBe(image);

  // Verificar que el nombre del actor y el personaje se hayan renderizado correctamente
  const actorName = getByText(`Name: ${actor.name}`);
  const actorCharacter = getByText(`Character: ${actor.personaje}`);

  expect(actorName).toBeInTheDocument();
  expect(actorCharacter).toBeInTheDocument();
});
