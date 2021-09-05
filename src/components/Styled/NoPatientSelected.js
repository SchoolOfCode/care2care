import styled from "styled-components";

const NoPatientSelected = () => {
  return (
    <StyledNoPatient>
      <p>No Patient Selected</p>
    </StyledNoPatient>
  );
};

export default NoPatientSelected;

const StyledNoPatient = styled.div`
  text-align: center;
`;
