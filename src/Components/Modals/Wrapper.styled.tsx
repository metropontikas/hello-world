import styled from "styled-components";

// Add marginTop prop for component easier re-usability
interface WrapperProps {
  marginTop: number;
}

export const Wrapper = styled.div`
  margin-top: ${(props: WrapperProps) => props.marginTop}rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 1rem;
`;
