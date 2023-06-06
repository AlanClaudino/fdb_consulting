import styled from "styled-components";

export const WorflowContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export const DarkButton = styled("button")`
  background-color: #0d2329;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  padding: 12px;
  border: none;
  &:hover {
    background-color: #4dd467;
    cursor: pointer;
  }
`;

export const Section = styled("section")`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  border-radius: 5px;
`;

export const InnerSection = styled.div`
  flex-grow: 1;
`;
