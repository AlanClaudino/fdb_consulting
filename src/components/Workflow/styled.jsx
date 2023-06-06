import styled from 'styled-components';

export const WorflowContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export const DarkButton = styled('button')`
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

export const TableContainer = styled.section`
  border-radius: 5px;
  border: 1px solid #0d2329;
`;

export const TableTitle = styled.section`
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #0d2329;
  color: #f4f4f4;
  font-weight: bolder;
`;

export const TableData = styled('section')`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-top: 1px solid #0d2329;
`;

export const InnerSection = styled.div`
  flex: 1 1 0px;
  display: flex;
  align-items: center;
  gap: 15px;
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
