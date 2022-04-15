import styled from "styled-components";

export const SearchWrapper = styled.form`
  width: 400px;
  margin: 0 auto;
  padding: 10px;
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  margin: 12px 0 12px 0;
  font-weight: bold;
  color: #6b7280;
  font-family: "Montserrat", sans-serif;
`;

export const Input = styled.input`
  border-radius: 8px 0 0 8px;
  padding: 6px;
  border: 1px solid #e5e7eb;
  border-right: none;
  width: 80%;
  box-shadow: 3px 3px #e5e7eb;
`;

export const Button = styled.button`
  margin: 0;
  width: 15%;
  border: 1px solid #e5e7eb;
  border-left: none;
  border-radius: 0 8px 8px 0;
  padding: 6px;
  background-color: #0c4a6e;
  outline: none;
  cursor: pointer;
  color: white;
  box-shadow: 3px 3px #e5e7eb;
`;
