import React from 'react';
import { ActorCard, ActorImage, ActorName, ActorRealName } from './styles';

const Actor = ({ actor, image, name, character}) => {
  console.log(image)
  return (
    <ActorCard>
      <ActorImage src={image} alt={actor.name} />
      <ActorName>{name}: {actor.name}</ActorName>
      <ActorRealName>{character}: {actor.personaje}</ActorRealName>
    </ActorCard>
  );
};

export default Actor;