const mockRestaurantData = [
  {
    name: "Dummy Restaurant 1",
    id: 1,
    cuisines: ["Indian", "Chineese", "Italian"],
    priceForTwo: "$400 for two",
    categories: [
      {
        id: "cat-1",
        title: "Recommended",
        menuItems: [
          { id: 1, itemName: "Dish 11", price: "400" },
          { id: 2, itemName: "Dish 22", price: "200" },
          { id: 3, itemName: "Dish 32", price: "200" },
        ],
      },
      {
        id: "cat-2",
        title: "Starters",
        menuItems: [
          { id: 4, itemName: "Dish 11", price: "400" },
          { id: 5, itemName: "Dish 22", price: "200" },
          { id: 6, itemName: "Dish 32", price: "200" },
          { id: 7, itemName: "Dish 42", price: "780" },
          { id: 8, itemName: "Dish 56", price: "298" },
          { id: 9, itemName: "Dish 23", price: "567" },
        ],
      },

      {
        id: "cat-3",
        title: "Main Course",
        menuItems: [
          { id: 10, itemName: "Dish 11", price: "400" },
          { id: 11, itemName: "Dish 22", price: "200" },
          { id: 12, itemName: "Dish 32", price: "200" },
          { id: 13, itemName: "Dish 42", price: "780" },
          { id: 14, itemName: "Dish 56", price: "298" },
          { id: 15, itemName: "Dish 23", price: "567" },
        ],
      },

      {
        id: "cat-4",
        title: "Desserts",
        menuItems: [
          { id: 16, itemName: "Dish 11", price: "400" },
          { id: 17, itemName: "Dish 22", price: "200" },
          { id: 18, itemName: "Dish 32", price: "200" },
          { id: 19, itemName: "Dish 42", price: "780" },
          { id: 20, itemName: "Dish 56", price: "298" },
          { id: 21, itemName: "Dish 23", price: "567" },
        ],
      },

      {
        id: "cat-5",
        title: "Bevrages",
        menuItems: [
          { id: 22, itemName: "Dish 11", price: "400" },
          { id: 23, itemName: "Dish 22", price: "200" },
          { id: 24, itemName: "Dish 32", price: "200" },
          { id: 25, itemName: "Dish 42", price: "780" },
          { id: 26, itemName: "Dish 56", price: "298" },
          { id: 27, itemName: "Dish 23", price: "567" },
        ],
      },
      {
        id: "cat-6",
        title: "Breads",
        menuItems: [
          { id: 28, itemName: "Dish 11", price: "400" },
          { id: 29, itemName: "Dish 22", price: "200" },
          { id: 30, itemName: "Dish 32", price: "200" },
          { id: 31, itemName: "Dish 42", price: "780" },
          { id: 32, itemName: "Dish 56", price: "298" },
          { id: 33, itemName: "Dish 23", price: "567" },
        ],
      },
    ],
  },
  {
    name: "Dummy Restaurant 2",
    id: 2,
    menuItems: [
      { id: 1, itemName: "Dish 21", price: "100" },
      { id: 1, itemName: "Dish 22", price: "200" },
      { id: 1, itemName: "Dish 23", price: "300" },
      { id: 1, itemName: "Dish 24", price: "250" },
      { id: 1, itemName: "Dish 25", price: "260" },
    ],
  },
  {
    name: "Dummy Restaurant 3",
    id: 3,
    menuItems: [
      { id: 1, itemName: "Dish 31", price: "400" },
      { id: 1, itemName: "Dish 32", price: "200" },
      { id: 1, itemName: "Dish 33", price: "1200" },
      { id: 1, itemName: "Dish 34", price: "987" },
      { id: 1, itemName: "Dish 35", price: "878" },
      { id: 1, itemName: "Dish 36", price: "455" },
      { id: 1, itemName: "Dish 37", price: "675" },
    ],
  },
];

export const getRestaurantDataById = (id) => {
  return new Promise((resolve) => {
    const restaurantMenu = mockRestaurantData.filter(
      (item) => item.id === parseInt(id)
    );

    setTimeout(resolve, 1000, restaurantMenu);
  });
};
