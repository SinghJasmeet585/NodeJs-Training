const router = require('express').Router();
const moment = require('moment');
const writeToDb = require('../../../../utils/writeToDb');
let expenses = require('../../../db.json');
// write all routing code and logic here
router.get('/', (req, res) => {
  return res.send(expenses);
});

router.post('/', (req, res) => {
  const newExpense = { id: (expenses.length + 1).toString(), ...req.body };
  expenses.push(newExpense);
  writeToDb(expenses);
  return res.send('Added expense');
});

router.put('/:id', (req, res) => {
  const { id } = req.params;

  const expense = expenses.find(expense => expense.id === id);
  Object.assign(expense, { id, ...req.body });
  writeToDb(expenses);
  return res.send(expense);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  expenses = expenses.filter(expense => expense.id !== id);
  writeToDb(expenses);
  return res.send('deleted expense');
});

router.get('/search/:category?', (req, res) => {
  const { category } = req.params;
  let { startDate, endDate } = req.query;

  if (category) {
    expenses = expenses.filter(expense => expense.category === category);
  }

  const dateFormat = 'DD/MM/YYYY';

  startDate = moment(startDate, dateFormat);
  if (endDate) {
    endDate = moment(endDate, dateFormat);
  }

  expenses = expenses.filter(expense =>
    moment(expense.expenseDate, dateFormat).isSameOrAfter(startDate)
  );

  if (endDate) {
    expenses = expenses.filter(expense =>
      moment(expense.expenseDate, dateFormat).isSameOrBefore(endDate)
    );
  }

  return res.send(expenses);
});

module.exports = router;
