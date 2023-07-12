import React from "react";
import { DessertCard } from "../components/DessertCard";

export const Cafe = () => {
  return (
    <div>
      <div className="Postres">
        <h1>Conoce a nuestro Barista</h1>
        <div className="MainDessert">
          <img
            className="JordiRoca"
            src="https://n5h8r3x3.rocketcdn.me/wp-content/uploads/2022/11/Tim-Wendelboe-scaled.webp"
            alt=""
          />
          <p>
            Primero, quiero dejar claro que me gustan mucho los cafés especiales
            brasileños, principalmente los de Caparaó. Veo un enorme potencial
            en ellos. Pero, comprar de Brasil pequeñas cantidades, como 30 a 50
            sacos, que es mí demanda actual, es complicado y el cargamento es
            muy caro. Otra razón, es que, en mi cafetería, los cafés brasileños
            son difíciles de vender. Mis clientes prefieren cafés más ácidos y
            frutados como los de África Oriental. Y mi staff tampoco entendió
            aún los matices de los cafés brasileños. Pero, si mis ventas
            aumentan, quiero volver a comprar cafés de Brasil. Cuando esto
            suceda, definitivamente compraré los cafés de Espírito Santo, porque
            para mí, son los mejores cafés especiales de Brasil. Y también me
            gustan mucho los cafés de la Chapada Diamantina y de la Sierra
            Minera.
          </p>
        </div>
        <h2>Tim Wendelboe nos cuenta un poco sobre el cafe</h2>
      <section class="gridContainer">
      <DessertCard
          img="https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/ac4829fc-eb45-49aa-8824-15b02e3979be/DreamShaper_v5_coffee_with_a_dark_style_0.jpg"
          descripcion={"Arabica"}
          precio={
            "Considerados el champán del café, los granos de Arabica tienen una asombrosa riqueza aromática que produce un sabor suave y profundo al mismo tiempo."
          }
          comprar={"alimento"}
        />

        <DessertCard
          img="https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/992e94bb-a1a4-4774-82f5-8ac2465e682d/DreamShaper_v5_A_latte_with_a_dark_style_2.jpg"
          descripcion={"Robusta"}
          precio={
            "Considerados los reyes de la cafeína del café, los granos de Robusta contienen aproximadamente el doble de este estimulante que los granos de Arabica."
          }
          comprar={"alimento"}
        />

        <DessertCard
          img="https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/389d4177-90c7-4e21-bade-f089b2cc48d0/DreamShaper_v5_A_coffee_with_a_dark_style_2.jpg"
          descripcion={"Kopi Luwak"}
          precio={
            "Para disfrutar de una experiencia gourmet poco habitual, prueba los apreciados granos extraídos de las deposiciones del gato de algalia indonesio"
          }
          comprar={"alimento"}
        />

        <DessertCard
          img="https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/389d4177-90c7-4e21-bade-f089b2cc48d0/DreamShaper_v5_A_coffee_with_a_dark_style_0.jpg"
          descripcion={"Kenya"}
          precio={
            "Como su nombre lo indica, esta variedad de grano de café es originaria de Kenia, en el continente africano. Suele ser cultivada en tierras volcánicas."
          }
          comprar={"alimento"}
        />
      </section>
      </div>
    </div>
  );
};
