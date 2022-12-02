import Greetings from "./Components/Greetings";
import Message from "./Components/Message";

import { Wrapper } from "./Components/Modals/Wrapper.styled";

const nameList: string[] = [
  "Mario",
  "Luigi",
  "Wario",
  "Yoshi",
  "Toad",
  "Daisy",
  "Peach",
];

function App(): JSX.Element {
  return (
    <Wrapper marginTop={0}>
      <Greetings nameList={nameList} />
      <Message />
    </Wrapper>
  );
}

export default App;
