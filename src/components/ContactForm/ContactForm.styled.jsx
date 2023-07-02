import { styled } from 'styled-components';

export const FormContainer = styled.section`
  width: 350px;
  height: 100%;
  border: 2px solid black;
  border-radius: 4px;
  margin-top: 20px;
`;

export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 30px;
  padding-top: 20px;
`;

export const Input = styled.input`
  display: block;
  width: 200px;
  border-radius: 4px;
`;

export const BtnSubmit = styled.button`
  color: white;
  background-color: #0d00ff;
  padding: 4px 6px;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 30px;
  border-radius: 4px;
  border-color: transparent;
  &:hover {
    color: #0d00ff;
    background-color: white;
    border-color: #0d00ff;
  }
`;
export const InputLabel = styled.label`
  font-weight: 500;
`;
