const getAll = () => { 
    return db.query('select * from posts');
 }

const create = ({titulo, descripcion, fecha_inscripcion, categoria}) => {
    return db.query(
        'insert into posts (titulo, descripcion, fecha_inscripcion, categoria) values (?, ?, ?, ?)',
        [titulo, descripcion, fecha_inscripcion, categoria],
    );

}

const getById = (postsid) => { 
    return db.query('SELECT * FROM posts WHERE id = ?', [postsid]);
}


 module.exports = {getAll, create, getById}