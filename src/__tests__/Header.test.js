import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render the Header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logoImg = screen.getByRole("img");
  expect(logoImg).toBeInTheDocument();
});

test("Should have login btn in the component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  expect(loginBtn).toBeInTheDocument();
});

test("Should change login buton to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});

test("Should render Cart (0 items)", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartText = screen.getByText("Cart (0 items)");
  expect(cartText).toBeInTheDocument();
});
