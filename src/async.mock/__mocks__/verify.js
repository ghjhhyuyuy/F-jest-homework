const verifyPassword = jest.fn().mockImplementation(() => true);
const verifyUsername = jest.fn().mockImplementation((input) => {
  if (input === 1) {
    return true;
  }
  return false;
});
export { verifyPassword, verifyUsername };
