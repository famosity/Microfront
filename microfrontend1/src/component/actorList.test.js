import React from 'react';
import { render } from '@testing-library/react';
import ActorList from './ActorList';

// Mock data
const Actores = [
  { idActor: 1, name: 'Actor 1', personaje: 'Personaje 1' },
  { idActor: 2, name: 'Actor 2', personaje: 'Personaje 2' },
  // ... más datos de prueba según sea necesario
];

const English = {
  title: 'Actors List',
  name: 'Name',
  character: 'Character',
};

const Spanish = {
  title: 'Lista de Actores',
  name: 'Nombre',
  character: 'Personaje',
};

test('renders ActorList component correctly', () => {
  // Renderizar el componente ActorList con datos de prueba
  const { getByText, getAllByTestId } = render(<ActorList language="English" />);

  // Verificar que el título se haya renderizado correctamente
  const titleElement = getByText(English.title);
  expect(titleElement).toBeInTheDocument();

  // Verificar que la cantidad correcta de actores se haya renderizado
  const actorElements = getAllByTestId('actor-card');
  expect(actorElements.length).toBe(Actores.length);

  // Verificar que el primer actor se haya renderizado correctamente
  const firstActor = Actores[0];
  const firstActorElement = getByText(`${English.name}: ${firstActor.name}`);
  const firstCharacterElement = getByText(`${English.character}: ${firstActor.personaje}`);
  expect(firstActorElement).toBeInTheDocument();
  expect(firstCharacterElement).toBeInTheDocument();
});
