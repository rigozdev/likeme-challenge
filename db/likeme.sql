CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),
descripcion VARCHAR(255), likes INT);

select * from posts;

INSERT INTO posts (titulo, img, descripcion, likes) values('Test1', 'http://placekitten.com/200/300', 'Gatito', 2);