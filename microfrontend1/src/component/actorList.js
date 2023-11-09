import React from 'react';
import Actor from './actor';
import {ActorListContainer, StyledH1} from './styles';
import Actores from '../data/actors.json';
import English from '../data/en.json';
import Spanish from '../data/es.json';

//img
import Image1 from '../data/images/Alan-Rickman.jpg'
import Image2 from '../data/images/Daniel-Radcliffe.jpg'
import Image3 from '../data/images/Emma-Watson.jpg'
import Image4 from '../data/images/Michael-Gambon.jpg'
import Image5 from '../data/images/Ralph-Fiennes.jpg'
import Image6 from '../data/images/Richard-Harris.jpg'
import Image7 from '../data/images/Rupert-Grint.jpg'

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

const ActorList = ({language}) => {
  const languageSelect=(language==="English")?English:Spanish;
  return (
    <div>
      <StyledH1>{languageSelect.title}</StyledH1>
      <ActorListContainer>
        {Actores.map((actor,index) => (
          <Actor key={actor.idActor} actor={actor} image={images[index]} name={languageSelect.name} character={languageSelect.character}/>
        ))}
      </ActorListContainer>
    </div>
  );
};

export default ActorList;
