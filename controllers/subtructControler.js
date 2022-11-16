const SubtractTwoNumber = async (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const sub = n1 - n2;
  res.send(`the multiplication of the two number is ${sub}`);
};

module.exports = {
SubtractTwoNumber
};
