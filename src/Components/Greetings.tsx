import { useEffect, useState } from "react";

import { Wrapper, Greeting, Name, Input } from "./Greetings.styled";

type GreetingsProps = {
  nameList: string[];
};

const Greetings = ({ nameList }: GreetingsProps): JSX.Element => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [filteredNameList, setFilteredNameList] = useState([""]);

  useEffect(() => {
    const inputNameHandler: (input: string) => void = (input) => {
      //if input value is not blank, set filteredNameList with elements from nameList that contain the input value;
      input.length > 0
        ? setFilteredNameList(
            nameList.filter((name) =>
              name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
            )
          )
        : //if input is blank, set filteredNameList to blank to hide nameList array from rendering;
          setFilteredNameList([""]);
    };

    //set a time delay before checking the input value
    setTimeout(() => {
      inputNameHandler(searchedTerm);
    }, 500);
  }, [nameList, searchedTerm]);

  return (
    <Wrapper>
      <Greeting>Hey, it's me!</Greeting>
      <Input
        type="text"
        placeholder="Who?"
        onChange={(e) => {
          //store input value
          setSearchedTerm(e.target.value);
        }}
      ></Input>
      {filteredNameList.map((name) => {
        return (
          <Name name={name} key={name}>
            {name.length > 0 && name + "!!"}
          </Name>
        );
      })}
    </Wrapper>
  );
};

export default Greetings;
