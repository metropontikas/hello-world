import { StyledHeader } from "./Header.styled";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <StyledHeader> {children}</StyledHeader>;
};

export default Header;
