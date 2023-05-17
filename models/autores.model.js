const getAll = () => {
    return db.query('select * from autores');
}


module.exports = {getAll}