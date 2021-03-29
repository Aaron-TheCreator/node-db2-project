const db = require('../../data/db-config.js');

module.exports = {
  getAll,
  getById,
  create
}

const getAll = () => {
  return db('cars');
}

const getById = (id) => {
  const car = db.first('*').from('cars').where({ id });
  return car;
}

const create = async (newCar) => {
  const car = await db('cars').insert(newCar);
  return car;
}
