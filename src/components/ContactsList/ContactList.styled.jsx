import styled from '@emotion/styled';

export const ContactList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
  text-align: center;
  padding-left: 0;
  flex-wrap: wrap;
`;

export const ContactItem = styled.li`
  width: 200px;
  padding-bottom: 15px;
  border: 3px solid rgba(86, 141, 229, 1);
  border-radius: 8px;
  background-color: rgb(222, 233, 250);
`;

export const RemoveButton = styled.button`
  width: 80px;
  padding: 5px 0;
  border: transparent;
  border-radius: 8px;
  background-color: rgba(86, 141, 229, 1);
  color: #fff;

  :hover {
    background-color: red;
  }
`;
