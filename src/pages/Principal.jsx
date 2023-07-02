export const Principal = () => {
  return (
    <main>
      <div className="banner">
        <h1>Bienvenido a nuestro Cafe</h1>
        <p>
          ¡Te damos la más dulce bienvenida a nuestro café! Aquí es donde los
          sueños se vuelven postres y los antojos se hacen realidad. Sumérgete
          en un ambiente acogedor y encantador mientras te deleitas con una
          amplia selección de delicias dulces y platos exquisitos. Nuestro
          equipo de apasionados pasteleros han creado con amor obras maestras
          dulces. ¡Ven y únete a nosotros en este paraíso azucarado donde los
          momentos dulces se convierten en recuerdos inolvidables!
        </p>

        <section class="gridContainer">
          <div className="gridItem">
            <img
              src="https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/47d7fca5-6dd9-4c68-803b-d2fd50b30647/DreamShaper_v5_A_restaurant_with_a_dark_style_Desserts_3.jpg"
              alt=""
            />
            <p className="title">Postre del Mes</p>
            <p className="description">Mousse de Chocolate</p>
            <hr />
            <p>
              ¡Descubre nuestra deliciosa torta de chocolate! Con un bizcocho
              esponjoso y húmedo, cubierto con una irresistible capa de ganache
              de chocolate. ¡Puro placer en cada bocado!
            </p>
            <div>
              <button>¡Pruebla!</button>
            </div>
          </div>

          <div className="gridItem">
            <img
              src="https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/992e94bb-a1a4-4774-82f5-8ac2465e682d/DreamShaper_v5_A_latte_with_a_dark_style_0.jpg"
              alt=""
            />
            <p className="title">Café del Mes</p>
            <p className="description">Latte Caramelo</p>
            <hr />
            <p>
              Disfruta de nuestro exquisito latte: cremoso, equilibrado y lleno
              de sabor. ¡Una experiencia única en cada sorbo!
            </p>
            <div>
              <button>¡Prueblo!</button>
            </div>
          </div>

          <div className="gridItem">
            <img src="../src/assets/pictures/roca.png" alt="" />
            <p className="title">Chef Ejecutivo</p>
            <p className="description">Jordi Roca</p>
            <hr />
            <p>
              Él es el responsable de lo dulce de uno de los mejores
              restaurantes del mundo, El Celler de Can Roca. Es la mente que da
              forma a postres, pasteles. El artífice, también, de ElevenCoffee,
              una de los cafés más interesantes.
            </p>
            <div>
              <button>¡Trayectoria!</button>
            </div>
          </div>

          <div className="gridItem">
            <img src="src/assets/pictures/FRANCESCO MASCIULLO.png" alt="" />
            <p className="title">Barista</p>
            <p className="description">Francesco Masciullo</p>
            <hr />
            <p>
              Campeon italiano de barismo en el año 2017. Francesco sabe cuánto
              aporta el origen al perfil de sabor y aroma de un café.
            </p>
            <div>
              <button>¡Trayectoria!</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
