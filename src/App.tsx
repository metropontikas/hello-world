import Header from "./Components/Header";
import Greetings from "./Components/Greetings";
import Message from "./Components/Message";

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
    <Header>
      <Greetings nameList={nameList} />
      <Message />
    </Header>
  );
}

export default App;
