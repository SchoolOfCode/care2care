import styled from "styled-components";
import Title from "../StyledComponent/StyledTitle";

const NewPatient = () => {
  return (
    <StyledNewPatient>
      <Title text="Add New Patient" />
    </StyledNewPatient>
  );
};

export default NewPatient;

const StyledNewPatient = styled.div``;
