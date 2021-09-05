//stretch goal: only show names when start typing

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
  const [search, setSearch] = useState("");
  const context = useContext(UserContext);

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
          value={search}
          onFocus={() => setFocus(true)}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
      <ul className={`${focus ? "active" : "inactive"}`}>
        {data
          .filter((item) => {
            return item.Patient.toLowerCase().includes(search.toLowerCase());
          })
          .map((item, index) => (
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
    text-align: right;
    position: absolute;
    top: 55px;
    right: 20px;
    height: 200px;
    overflow-y: scroll;
    width: auto;
    background: ${(props) => props.theme.menuBg};
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 8px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    cursor: pointer;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  li {
    border-bottom: 1px solid ${(props) => props.theme.notActive};
    color: ${(props) => props.theme.fontColor1};
    padding: 7px 20px;
    display: block;
    :last-child {
      border: none;
    }
    :hover {
      background-color: ${(props) => props.theme.accent2};
    }
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
  background: transparent
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
  color: transparent;
  cursor: pointer;

  &&::-webkit-search-decoration,
  &&::-webkit-search-cancel-button {
    display: none;
  }

  &&[type="search"]:focus {
    color: ${(props) => props.theme.fontColor2};
    width: 40vw;
    background-color: ${(props) => props.theme.fontColor1};
    border-color: ${(props) => props.theme.accent2};
    -webkit-box-shadow: 0 0 5px ${(props) => props.theme.accent2};
    -moz-box-shadow: 0 0 5px ${(props) => props.theme.accent2};
    box-shadow: 0 0 5px ${(props) => props.theme.accent2};
  }
`;
