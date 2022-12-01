import styled from "styled-components";

interface StyledProps {
  name: string;
}
export const Wrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  margin: 1rem auto;
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

const handleNameColor: (nameInput: string) => string | undefined = (
  nameInput: string
) => {
  switch (nameInput) {
    case "Mario":
      return (nameInput = "red");
    case "Luigi":
      return (nameInput = "green");
    case "Wario":
      return (nameInput = "purple");
    case "Toad":
      return (nameInput = "White");
    case "Yoshi":
      return (nameInput = "chartreuse");
    case "Daisy":
      return (nameInput = "yellow");
    case "Peach":
      return (nameInput = "pink");
  }
};

export const Name = styled.h2`
  color: ${(props: StyledProps) => handleNameColor(props.name)};
  padding: 1rem 0;
`;
