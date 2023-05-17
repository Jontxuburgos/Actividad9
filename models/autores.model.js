const getAll = () => {
  return db.query("select * from autores");
};

const getById = (autoresid) => {
  return db.query("select * from autores where id = ?", [autoresid]);
};

const create = ({ nombre, email, imagen }) => {
  return db.query(
    "insert into autores (nombre, email, imagen) values (?, ?, ?)",
    [nombre, email, imagen]
  );
};

module.exports = { getAll, getById, create };
