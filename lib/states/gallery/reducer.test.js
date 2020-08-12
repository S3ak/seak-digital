import reducer, { initialState, CONTROL } from "./reducer.js";
import chance from "../../../utils/chance";

// TODO: move to utils/factories
const generateGalleryItems = [
  {
    id: chance.guid(),
    orderID: 0,
    name: chance.name(),
    description: chance.paragraph(),
  },
  {
    id: chance.guid(),
    orderID: 1,
    name: chance.name(),
    description: chance.paragraph(),
  },
  {
    id: chance.guid(),
    orderID: 2,
    name: chance.name(),
    description: chance.paragraph(),
  },
  {
    id: chance.guid(),
    orderID: 3,
    name: chance.name(),
    description: chance.paragraph(),
  },
];

const items = generateGalleryItems;

describe("Gallery reducer", () => {
  test.skip("it displays to the previous item", () => {
    expect(
      reducer(
        {
          ...initialState,
          items,
        },
        {
          type: `${CONTROL}_PREVIOUS`,
          currentItem: -1,
        }
      )
    ).toMatchObject({
      ...initialState,
      currentItem: -1,
      items,
    });
  });
  test.skip("it displays to the next item", () => {
    expect(
      reducer(initialState, {
        type: `${CONTROL}_NEXT`,
      })
    ).toMatchObject({
      ...initialState,
      currentItem: 1,
      items,
    });
  });
});
