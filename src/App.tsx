import Header from "./Components/Header";
import Greetings from "./Components/Greetings";
import Message from "./Components/Message";

function App(): JSX.Element {
  return (
    <Header>
      <Greetings name="Mario" />
      <Message />
    </Header>
  );
}

export default App;
