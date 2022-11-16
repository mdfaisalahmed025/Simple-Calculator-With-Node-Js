const DivisionTwoNumber = async (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const division = n1 / n2;
  res.send(`the mthe division of the two number is ${division}`);
};

module.exports = {
 DivisionTwoNumber,
};
