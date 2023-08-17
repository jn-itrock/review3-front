import { styled } from "styled-components";

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  @media (min-width: 320px) {
    padding: 0px 15px;
  }

  @media (min-width: 768px) {
    padding: 0px 106px;
  }

  @media (min-width: 1024px) {
    padding: 0px 206px;
  }
`;
