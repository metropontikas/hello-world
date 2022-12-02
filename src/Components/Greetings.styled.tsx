import styled from "styled-components";

interface NameProps {
  color: string;
}
export const Par = styled.p`
  margin-top: 2rem;
`;

export const Input = styled.input`
  width: 50%;
  padding: 0.5rem;
  text-align: center;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  &:focus {
    border: #049cd8 3px solid;
    outline: 2px solid #00f0;
  }
`;

export const Greeting = styled.h1``;

export const Name = styled.h2`
  color: ${(props: NameProps) => props.color};
  padding: 1rem 0;
`;
