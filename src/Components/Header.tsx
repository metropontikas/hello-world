import { StyledHeader } from "./Header.styled";

interface Props {
  children: React.ReactNode;
}

export const Header: React.FC<Props> = (props) => {
  return <StyledHeader> {props.children}</StyledHeader>;
};
