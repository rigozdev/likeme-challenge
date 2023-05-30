# Backend para app front 'LikeMe'

En este repo se utiliza un front recreando una suerte de red social.

Se realizó una correción en la linea 19 del proyecto front para poder visulizar correctamente los datos de la db `setPosts([...posts.result]);` agregandole el '.result'

        const getPosts = async () => {
            const { data: posts } = await axios.get(urlBaseServer + "/posts");
            console.log("Valor de posts: ", posts)
            setPosts([...posts.result]);
        };

También para el correcto post de datos se le cambió nombre del elemento `imgSrc` por `img` y en el método "agregarPost" se cambió la desestructuración de `const post = { titulo, url: imgSrc, descripcion }` por `const post = { titulo, img, descripcion }`