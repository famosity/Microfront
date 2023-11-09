import styled from 'styled-components';

export const ActorListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 16px; 
`;

export const ActorCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: calc(25% - 16px);
  text-align: center;
  margin: 10px;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: scale(1.05); /* Escala de zoom al poner el mouse sobre la tarjeta */
    background-color: #f9f9f9;
`;

export const ActorImage = styled.img`
  max-width: 100%;
`;

export const ActorName = styled.h3`
  margin: 10px 0 0;
`;

export const ActorRealName = styled.p`
  color: #666;
`;

export const StyledH1 = styled.h1`
  font-size: 3rem; /* Tamaño grande de fuente */
  text-align: center; /* Texto centrado */
  color: #007BFF; /* Color de texto */
  /* Agrega estilos adicionales según tus preferencias, como fuente, margen, etc. */
`;
