import React from 'react';
import {NotFoundWrapper, NotFoundTitle, NotFoundMessage} from './style'

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>404 - Not Found</NotFoundTitle>
      <NotFoundMessage>Sorry, the page you are looking for does not exist.</NotFoundMessage>
    </NotFoundWrapper>
  );
};

export default NotFound;
