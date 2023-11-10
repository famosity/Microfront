import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const MainContent = styled.main`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Divider = styled.hr`
  border: 1px solid #ccc;
  margin: 20px 0;
`;
//----------------------------------------------------------------
export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const NotFoundTitle = styled.h1`
  font-size: 48px;
  color: #ff3f3f;
  text-align: center;
  margin-bottom: 20px;
`;

export const NotFoundMessage = styled.p`
  font-size: 24px;
  color: #333;
  text-align: center;
`;