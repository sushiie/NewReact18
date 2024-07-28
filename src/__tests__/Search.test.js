import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_RESTLIST_DATA from "./mocks/resListDataMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_RESTLIST_DATA),
  });
});

test("Should Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(resCardsBeforeSearch.length).toBe(20);

  const searchTxt = screen.getByTestId("searchText");
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchTxt).toBeInTheDocument();
  expect(searchBtn).toBeInTheDocument();

  fireEvent.change(searchTxt, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  const resCardsAfterSearch = screen.getAllByTestId("resCard");
  expect(resCardsAfterSearch.length).toBe(1);
});
