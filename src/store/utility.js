export const updateObject = (oldObj, updatedProps) => {
  return {
    ...oldObj,
    ...updatedProps,
  };
};

export const countIngredients = (ingredientsObj) => {
  if (!ingredientsObj) {
    return 0;
  }
  return Object.values(ingredientsObj).reduce((sum, val) => sum + val, 0);
};
