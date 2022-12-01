import { Wrapper, Greeting, Name } from "./Greetings.styled";

type GreetingsProps = {
  name: string;
};

const Greetings = ({ name }: GreetingsProps): JSX.Element => {
  return (
    <Wrapper>
      <Greeting>Hey, it's me!</Greeting>
      <Name>{name}!!</Name>
    </Wrapper>
  );
};

export default Greetings;
