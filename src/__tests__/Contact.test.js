import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Should render Contact component", () => {
  render(<Contact />);

  const nameTxtbox = screen.getByPlaceholderText("name");
  expect(nameTxtbox).toBeInTheDocument();
});

test("Should render name and email in the contact us page", () => {
    render(<Contact />);
  
    const nameTxtbox = screen.getByPlaceholderText("name");
    const emailTxtbox = screen.getByPlaceholderText("email");
    expect(nameTxtbox).toBeInTheDocument();
    expect(emailTxtbox).toBeInTheDocument();
  });
