import { Locations } from "../types/shops";

export const locations: Locations = {
  IranCenter: {
    name: "Tehran",
    center: [35.6892, 51.3890],
    shops: [
        { id: 1, coordinates: [35.6892, 51.3890], name: "Store 1" },
    ],
  },
  Iran: {
    name: "Karaj",
    center: [35.8400, 50.9391],
    shops: [
      { id: 2, coordinates: [35.8400, 50.9391], name: "Dadash's store" },
      { id: 3, coordinates: [35.7400, 50.8391], name: "Store 2" },
      { id: 4, coordinates: [35.2300, 50.4591], name: "Store 3" },
    ],
  },

  Armenia: {
    name: "Yerevan",
    center: [40.1406, 44.5381],
    shops: [
      { id: 8, coordinates: [40.1348, 44.5284], name: "Էդո Խանութ" },
    ],
  },
};