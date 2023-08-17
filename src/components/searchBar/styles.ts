import { styled } from "styled-components";

export const ContainerWrapper = styled.div`
  border: 1px solid #08fb06;
  border-radius: 40px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  gap: 20px;
  height: 54px;

  input {
    padding: 16px 22px 16px 39px;
    background-color: transparent;
  }

  img {
    width: 32px;
    padding-right: 18px;
  }

  @media (min-width: 320px) {
    width: 85%;
    margin: auto;
  }

  @media (min-width: 768px) {
    width: 76%;
  }

  @media (min-width: 1024px) {
    width: 82%;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
`;
