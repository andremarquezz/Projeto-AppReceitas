export const saveLocalStorage = (key, value) => (
  localStorage.setItem(key, JSON.stringify(value))
);
export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
