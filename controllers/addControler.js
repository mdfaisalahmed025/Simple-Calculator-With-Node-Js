const addTwoNumber = async (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const sum = n1 + n2;
  res.send(`the summation of the two number is ${sum}`);
};



module.exports = {
  addTwoNumber,
};
