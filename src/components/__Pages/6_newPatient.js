import styled from "styled-components";

const NewPatient = () => {
  return (
    <StyledNewPatient>
      <h1>Add New Patient</h1>
    </StyledNewPatient>
  );
};

export default NewPatient;

const StyledNewPatient = styled.div`
  height: calc(100vh - 140px);
`;
