import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PatientsSheets from "./index";
import { UserContext } from "../Main.js/index";

describe("patient information", () => {
  it("should contain, all required fields", () => {
    const patient = {};
    // const Email = jest.fn;
    render(
      <UserContext.Provider value={{ patient }}>
        <PatientsSheets />
      </UserContext.Provider>
  );
    expect(screen.findByText("Email").toBeTruthy()
    );
})