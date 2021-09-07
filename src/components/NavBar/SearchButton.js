import styled from "styled-components";
import Icons from "../../theme/icons";
import { DisplayFlex } from "../Styled/DisplayFlex";
import React, { useContext, useEffect, useRef, useState } from "react";
import usePaparse from "../__Hooks/usePaparse";
import { UserContext } from "../../App";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQk2shcRCfjZcMqWRoT8BXaIymooGq2pcd_heGDVrzQYnT0RL6hxHAq8M6FF9kZm5mILBmjg1qPQJc6/pub?output=csv";

const SearchButton = () => {
  const checkedRef = useRef(null);
  const [data] = usePaparse(URL);
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");
  const context = useContext(UserContext);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        checkedRef.current !== null &&
        !checkedRef.current.contains(e.target)
      ) {
        setChecked(false);
      }
    };

    if (checked) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [checked]);

  // console.log(checkedRef.current.checked);
  const handleChecked = () => {
    checkedRef.current.checked ? setChecked(true) : setChecked(false);
    if (!checkedRef.current.checked) {
      setSearch("");
    }
  };

  return (
    <StyledSearchButton onSubmit={(e) => e.preventDefault()}>
      <label>
        <input
          type="checkbox"
          className="radio"
          ref={checkedRef}
          onChange={handleChecked}
        />
        <span>
          {checked || search !== "" ? (
            <Icons.Delete
              className="icon delete"
              onClick={() => context.setPatient("")}
            />
          ) : (
            <Icons.Search className="icon" />
          )}
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setChecked(true);
            }}
          />
        </span>
      </label>

      <ul className={`${checked ? "active" : "inactive"}`}>
        {data
          .filter((item) => {
            return item.Patient.toLowerCase().includes(search.toLowerCase());
          })
          .map((item, index) => (
            <li
              key={index}
              value={item.ID}
              onClick={(e) => {
                context.setPatient(item.Patient);
                setSearch(item.Patient);
              }}
            >
              {item.Patient}
            </li>
          ))}
      </ul>
    </StyledSearchButton>
  );
};

export default SearchButton;

const StyledSearchButton = styled.form`
  margin-right: 15px;
  span {
    ${DisplayFlex}
    position: relative;
    cursor: pointer;
  }

  input[type="checkbox"] {
    position: absolute;
    transform: scale(0);
  }

  .icon {
    transition: all 0.35s;
    font-size: 17px;
    color: ${(props) => props.theme.fontColor2};
  }

  .delete {
    font-size: 22px;
  }

  input[type="text"] {
    position: absolute;
    right: 65px;
    top: 10px;
    transform: translateY(-50%) translateX(1.25rem);
    visibility: hidden;
    opacity: 0;
    transition: all 0.35s;
    outline: none;
    border: none;
    background: transparent;
    border-bottom: 1px solid ${(props) => props.theme.notActive};
    color: ${(props) => props.theme.fontColor2};
    text-align: right;
    height: 25px;
    width: 150px;
    padding: 5px 10px;
  }

  input[type="checkbox"]:checked ~ span input[type="text"] {
    visibility: visible;
    opacity: 1;
    transform: translateY(-50%) translateX(2.5rem);
  }

  ul {
    display: flex;
    flex-direction: column;
    text-align: right;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    -ms-backdrop-filter: blur(2px);
    position: absolute;
    top: 55px;
    right: 40px;
    max-height: 200px;
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
