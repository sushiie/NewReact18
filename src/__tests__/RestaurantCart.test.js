import { render, screen } from "@testing-library/react";
import RestaurantCard, { withIsOpenLabel } from "../components/RestaurantCard";
import MOCK_DATA from "./mocks/restaurantDataMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText(MOCK_DATA.info.name);

  expect(resName).toBeInTheDocument();
});

// it("Should render Restaurant Card component with isOpen label", () => {
//   const RestaurantCard_HOC = withIsOpenLabel(<RestaurantCard resData={MOCK_DATA} />);
//   render(<RestaurantCard_HOC />);

//   const resName = screen.getByText(MOCK_DATA.info.name);
//   console.log(resName);
//   const isOpenLbl = screen.getByText(/open now/);

//   expect(isOpenLbl).toBeInTheDocument();
// });
