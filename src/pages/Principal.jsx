import { PrincipalCard } from "../components/PrincipalCard";

export const Principal = () => {
  return (
    <main>
      <div className="banner">
        <h1>Bienvenido a nuestro Cafe</h1>
        <p>
          ¡Te damos la más dulce bienvenida a nuestro café! Aquí es donde los
          sueños se vuelven postres y los antojos se hacen realidad. Sumérgete
          en un ambiente acogedor y encantador mientras te deleitas con una
          amplia selección de delicias dulces y platos exquisitos.
        </p>

        <section class="gridContainer">
          <PrincipalCard
            img="https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/47d7fca5-6dd9-4c68-803b-d2fd50b30647/DreamShaper_v5_A_restaurant_with_a_dark_style_Desserts_3.jpg"
            titulo={"Postre del Mes"}
            descripcion={"Mousse de Chocolate"}
            parrafo={
              "¡Descubre nuestra deliciosa torta de chocolate! Con un bizcocho esponjoso y húmedo."
            }
            tipo={"alimento"}
          />

          <PrincipalCard
            img="https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/992e94bb-a1a4-4774-82f5-8ac2465e682d/DreamShaper_v5_A_latte_with_a_dark_style_0.jpg"
            titulo={"Café del Mes"}
            descripcion={"Latte Caramelo"}
            parrafo={
              "Disfruta de nuestro exquisito latte: cremoso, equilibrado y lleno de sabor. ¡Una experiencia única en cada sorbo!"
            }
            tipo={"alimento"}
          />

          <PrincipalCard
            img="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/im_square_33_fallback/public/Jordi-Roca.jpg?itok=-pymq3TS"
            titulo={"Chef Ejecutivo"}
            descripcion={"Jordi Roca"}
            parrafo={
              "Él es el responsable de lo dulce de uno de los mejores restaurantes del mundo, El Celler de Can Roca."
            }
            tipo={"¡Trayectoria!"}
          />

          <PrincipalCard
            img="https://victoria.mediaplanet.com/app/uploads/sites/19/2019/12/tim_wendelboe-576x486.jpg" alt="FcoMas" 
            titulo={"Barista"}
            descripcion={"Tim Wendelboe"}
            parrafo={
              "Campeon mundial de barismo en el año 2004. “No era tan fácil obtener información sobre el café”."
            }
            tipo={"¡Trayectoria!"}
          />

        </section>
      </div>
    </main>
  );
};
