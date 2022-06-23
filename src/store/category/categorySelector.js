import { createSelector } from "reselect";

//getting the slice of the state we need
const selectCategoryReducer = (state) => state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (category) => category.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (category) => {
    return category.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
