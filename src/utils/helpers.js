export const handleInvalidKeyDown = (event) => {
  if (["+", "-", ".", ",", "e"].includes(event?.key)) {
    event.preventDefault();
  }
};

export const checkAllFieldsAreFilledIn = (data) => {
  for (const item of data) {
    for (const key in item) {
      if (!item[key] && item[key] !== 0) {
        return false;
      }
    }
  }
  return true;
};
