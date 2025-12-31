import { Locations } from "../types/shops";

export const locations: Locations = {
  Beirut: {
    name: "Beirut",
    center: [33.8938, 35.5018],
    shops: [
      { id: 1, coordinates: [33.8938, 35.5018], name: "Main Store" },
    ],
  },
  BurjHammoud: {
    name: "Burj Hammoud",
    center: [33.9000, 35.5500],
    shops: [
      { id: 2, coordinates: [33.9000, 35.5500], name: "store" },
      { id: 3, coordinates: [33.9050, 35.5550], name: "Store 2" },
      { id: 4, coordinates: [33.8950, 35.5450], name: "Store 3" },
    ],
  },


  Armenia: {
    name: "Yerevan",
    center: [40.1406, 44.5381],
    shops: [
      { id: 8, coordinates: [40.1348, 44.5284], name: "Խանութ" },
    ],
  },
};