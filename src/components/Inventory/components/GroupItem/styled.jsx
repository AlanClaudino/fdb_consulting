import styled from "styled-components";

export const CategoryText = styled.h3`
  min-width: 170px;
  color: inherit;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  text-align: start;
  font-weight: 600;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  border: none;
  &:hover {
    cursor: pointer;
    color: #db3a34;
  }
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  border: none;
  &:hover {
    cursor: pointer;
    color: #00cc66;
  }
`;

export const ExpandButton = styled.button`
  border: none;
  background-color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
    color: #4dd467;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 70px;
  flex-wrap: wrap;
`;

export const FormSection = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 6fr 1fr;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid rgba(13, 35, 41, 0.3);
`;

export const Input = styled("input")`
  color: #0d2329;
  min-width: 300px;
  font-size: 16px;
  padding: 5px 8px;
  font-family: "Lato", sans-serif;
  border: 2px solid rgba(13, 35, 41, 0.3);
  border-radius: 5px;
  width: 100%;
  &:focus {
    /* border: 2px solid #4dd467; */
    border: 2px solid rgba(13, 35, 41, 0.7);
  }
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: rgba(13, 35, 41, 0.75);
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
