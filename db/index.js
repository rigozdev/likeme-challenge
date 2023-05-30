import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    allowExitOnIdle: true
});


export const getPosts = async()=>{
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
}

export const createPost = async ({ titulo, img, descripcion, likes }) => {

    const sentencia = "INSERT INTO posts (titulo, img, descripcion, likes) values($1, $2, $3, $4) RETURNING *";
    const { rows } = await pool.query(sentencia, [titulo, img, descripcion, likes]);

    return rows[0];

};
