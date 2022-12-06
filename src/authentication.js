export const saveToLocalStorage = (tokendetails) => {
  localStorage.setItem('userToken', JSON.stringify(tokendetails));
};
export const getToken = () => {
  return localStorage.getItem('userToken');
};
