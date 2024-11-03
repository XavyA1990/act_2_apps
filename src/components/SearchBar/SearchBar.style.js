import styled from "styled-components";

export const SearchBarStyled = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  font-family: "Roboto", sans-serif;
  &:focus {
    outline: none;
    border-color: #000;
  }
`;

export const SearchBarLabel = styled.label`
  font-family: "Roboto", sans-serif;
  display: block;
  font-size: 16px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
