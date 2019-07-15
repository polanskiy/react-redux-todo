export default (max) => {
  const randomArr = [];
  for (let i = 0; i < max; i += 1) {
    randomArr.push(Math.floor(Math.random() * Math.floor(10)));
  }
  return Number(randomArr.join(''));
};
