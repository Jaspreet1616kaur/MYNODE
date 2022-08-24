const getToken = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return token;
  } else {
    return false;
  }
};

const removeToken = () => {
  localStorage.removeItem("token");
};

export { getToken, removeToken };
