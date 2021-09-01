import styled from "styled-components";
import React, { useContext, useEffect, useRef, useState } from "react";
import usePaparse from "../__Hooks/usePaparse";
import { UserContext } from "../../App";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQk2shcRCfjZcMqWRoT8BXaIymooGq2pcd_heGDVrzQYnT0RL6hxHAq8M6FF9kZm5mILBmjg1qPQJc6/pub?output=csv";

const SearchPatient = (props) => {
  const focusRef = useRef(null);
  const [data] = usePaparse(URL);
  const [focus, setFocus] = useState(false);
  const context = useContext(UserContext);
  console.log(context.patient);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (focusRef.current !== null && !focusRef.current.contains(e.target)) {
        setFocus(false);
      }
    };

    if (focus) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [focus]);

  return (
    <StyledSearch>
      <form>
        <StyledInput
          ref={focusRef}
          type="search"
          onFocus={() => setFocus(true)}
        />
      </form>
      <ul className={`${focus ? "active" : "inactive"}`}>
        {data.map((item, index) => (
          <li
            key={index}
            value={item.ID}
            onClick={(e) => context.setPatient(item.Patient)}
          >
            {item.Patient}
          </li>
        ))}
      </ul>
    </StyledSearch>
  );
};

export default SearchPatient;

const StyledSearch = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 40px;
    background: ${props => props.theme.fontColor1};
    width: 150px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  .active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    z-index: 1;
  }
`;

const StyledInput = styled.input`
  outline: none;
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
  background: ${(props) => props.theme.bg}
    url("http://www.clker.com/cliparts/8/n/U/M/V/E/search-icon.svg") no-repeat
    right 8px center;
  background-size: 18px;
  border: none;
  width: 20px;
  min-height: 28px;
  padding: 0 12px;
  font-weight: 400;
  max-width: 100%;
  transition: all 0.5s;
  line-height: 20px;

  &&::-webkit-search-decoration,
  &&::-webkit-search-cancel-button {
    display: none;
  }

  &&[type="search"]:focus {
    width: 40vw;
    background-color: ${(props) => props.theme.fontColor1};
    border-color: ${(props) => props.theme.accent2};
    -webkit-box-shadow: 0 0 5px ${(props) => props.theme.accent2};
    -moz-box-shadow: 0 0 5px ${(props) => props.theme.accent2};
    box-shadow: 0 0 5px ${(props) => props.theme.accent2};
  }
`;
