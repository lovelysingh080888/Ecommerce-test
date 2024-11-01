import { atom, selector } from "recoil";
import { IProduct } from "../utils/IProduct";
import { ICart } from "../utils/ICart";

export const categoryListAtom = atom<string[]>({
  key: "categoryListAtom",
  default: [],
});

export const cartAtom = atom<ICart[]>({
  key: "cartAtom",
  default: [],
});

export const cartCountAtom = atom<number>({
  key: "cartCount",
  default: 0,
});

export const productListAtom = atom<IProduct[]>({
  key: "productListState",
  default: [],
});

export const filterState = atom({
  key: "filterState",
  default: { category: "", priceRange: [0, 1000], rating: 0 },
});

export const filteredProductsSelector = selector({
  key: "filteredProducts",
  get: ({ get }) => {
    const products = get(productListAtom);
    const filters = get(filterState);
    console.log(products, "filter", filters);
    return products?.filter((product: IProduct) => {
      let isMatch = true;

      // Checking category filter
      if (filters.category) {
        isMatch = isMatch && product.category === filters.category;
      }

      // Checking price range filter
      if (filters.priceRange.length > 0) {
        isMatch =
          isMatch &&
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1];
      }

      // Checking rating filter
      if (filters.rating) {
        isMatch = isMatch && product.rating >= filters.rating;
      }
      return isMatch;
    });
  },
});
