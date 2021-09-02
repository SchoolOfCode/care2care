import nock from "nock";
import { render, screen } from "@testing-library/react";
import CheckRecordSheets from ".";
import { UserContext } from "../../App";

describe("check record sheets", () => {
    it("this should fetch the users details and render them", async () => {
      //arrange to mock out the gs  2/ render the coponent
      const response = `Timestamp,Patient,Job_Title,Records,Comments,Email
  27/08/2021 23:31:29,Emilio Comiling,Manager,Wellbeing,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",`;
  
  

