import React from 'react';
import Actor from './actor';
import {ActorListContainer, StyledH1} from './styles';
import Actores from '../data/actors.json';
import English from '../data/en.json';
import Espanish from '../data/es.json';

//images
import Image1 from '../data/images/Elijah-Wood.jpg';
import Image2 from '../data/images/Sean-Astin.jpg';
import Image3 from '../data/images/Viggo-Mortensen.jpg';
import Image4 from '../data/images/Orlando-Bloom.jpg';
import Image5 from '../data/images/John-Rhys-Davies.jpg';
import Image6 from '../data/images/Ian-McKellen.jpg';
import Image7 from '../data/images/Sean-Bean.jpeg';
import Image8 from '../data/images/Dominic-Monaghan.jpg';
import Image9 from '../data/images/Billy-Boyd.jpg';
import Image10 from '../data/images/Liv-Tyler.jpg';

const images=[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10]

const MovieList = ({language}) => {

  const languageSelect=(language==="English")?English:Espanish;

  return (
    <div>
      <StyledH1>{languageSelect.title}</StyledH1>
      <ActorListContainer>
        {Actores.map((actor,index) => (
          <Actor key={actor.idActor} actor={actor} image={images[index]} name={languageSelect.name} character={languageSelect.character} />
        ))}
      </ActorListContainer>
    </div>
  );
};

export default MovieList;
