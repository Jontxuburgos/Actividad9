const getAll = () => {
  return db.query("select * from posts");
};

const getById = (postsId) => {
    return db.query('select * from posts where id = ?', [postsId])
}

const create = ({ titulo, descripcion, fecha_inscripcion, categoria }) => {
  return db.query(
    "insert into posts (titulo, descripcion, fecha_inscripcion, categoria) values (?, ?, ?, ?)",
    [titulo, descripcion, fecha_inscripcion, categoria]
  );
};

module.exports = { getAll, getById, create };
