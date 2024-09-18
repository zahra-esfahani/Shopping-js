const validUsername = (username) => {
  const regex = /^[a-zA-z\d_]{5,10}$/;
  const newString = regex.test(username);
  return newString;
};
const validPassword = (password) => {
  const regex = /^.{4,8}$/;
  const newPass = regex.test(password);
  return newPass;
};
const validationForm = (userName, password) => {
  const user = validUsername(userName);
  const pass = validPassword(password);
  if (user && pass) {
    return true;
  } else if (!pass) {
    alert("password ia incorrect!");
  } else if (!user) {
    alert("username ia incorrect!");
  }
};
export { validationForm };
