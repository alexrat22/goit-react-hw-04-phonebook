import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
`;
export const AddButton = styled.button`
  width: 120px;
  padding: 5px 0;
  margin: 10px auto;
  border: transparent;
  border-radius: 8px;
  background-color: rgba(86, 141, 229, 1);
  color: #fff;

  :hover {
    background-color: green;
  }
`;

export const Input = styled.input`
  width: 300px;
  border: none;
  margin-right: auto;
  margin-left: auto;
  padding: 5px;
  border-radius: 8px;
`;
