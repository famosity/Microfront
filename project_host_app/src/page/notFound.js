import React from 'react';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const NotFoundTitle = styled.h1`
  font-size: 48px;
  color: #ff3f3f;
  text-align: center;
  margin-bottom: 20px;
`;

const NotFoundMessage = styled.p`
  font-size: 24px;
  color: #333;
  text-align: center;
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>404 - Not Found</NotFoundTitle>
      <NotFoundMessage>Sorry, the page you are looking for does not exist.</NotFoundMessage>
    </NotFoundWrapper>
  );
};

export default NotFound;
