import { useEffect, useState } from "react";

import { Wrapper } from "./Modals/Wrapper.styled";
import { Greeting, Name, Input, Par } from "./Greetings.styled";

// Kept this type because the workaround is
// "...Greetings = ({ nameList }: {nameList:string[]}): JSX.Element =>..."
// and seems harder to read
type GreetingsProps = {
  nameList: string[];
};

//Change Name text color according to input. Dependent on nameList elements
const handleNameColor = (nameInput: string): string => {
  switch (nameInput) {
    case "Mario":
      return "red";
    case "Luigi":
      return "green";
    case "Wario":
      return "purple";
    case "Toad":
      return "White";
    case "Yoshi":
      return "chartreuse";
    case "Daisy":
      return "yellow";
    case "Peach":
      return "pink";
    default:
      return "white";
  }
};

const Greetings = ({ nameList }: GreetingsProps): JSX.Element => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [filteredNameList, setFilteredNameList] = useState([""]);

  // Wrap the inputNameHandler in useEffect to avoid its rerendering on every cycle.
  useEffect(() => {
    // Create a function that receives the searchedTerm from the input element and checks
    // if it is included in any element of nameList array.
    // It then passes the matching elements to the filteredNameList.

    const inputNameHandler = (input: string): void => {
      // if input value is not blank, set filteredNameList with elements from nameList that contain the input value;

      input.length > 0
        ? setFilteredNameList(
            nameList.filter((name) =>
              name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
            )
          )
        : //if input is blank, set filteredNameList to blank to hide nameList array from rendering;

          setFilteredNameList([""]);
    };
    //set a time delay before checking the input value for cosmetic purposes

    setTimeout(() => {
      inputNameHandler(searchedTerm);
    }, 500);
  }, [nameList, searchedTerm]);

  return (
    <Wrapper marginTop={10}>
      <Greeting>Welcome Player 1</Greeting>
      <Par>Let's-a go!</Par>
      <Input
        type="text"
        placeholder="Pick a name"
        onChange={(e) => {
          //store input value
          setSearchedTerm(e.target.value);
        }}
      />
      {/* Output filtered names that match searchedTerm */}
      {filteredNameList.map((name) => {
        return (
          <Name color={handleNameColor(name)} key={name}>
            {name.length > 0 && name + "!!"}
          </Name>
        );
      })}
    </Wrapper>
  );
};

export default Greetings;
