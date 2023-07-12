import React from "react";
import { DessertCard } from "../components/DessertCard";

//crear un menu con una API, tal vez de sheets donde se muestren los valores y las fotos

export const Postres = () => {
  return (
    <div className="Postres">
      <h1>Acerca de de nuestro Chef</h1>
      <div className="MainDessert">
        <img
          className="JordiRoca"
          src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/12/10/16076187673609.png"
          alt=""
        />
        <p>
          Jordi Roca emprendió sus primeros pasos gastronómicos en el
          restaurante de sus padres, en Can Roca (Girona). Más tarde, mientras
          estudiaba en la Escuela de Hostelería de Girona, trabajaba con sus
          hermanos en el Celler de Can Roca ayudándolos para lo que hiciera
          falta. En el año 1997 se incorporó definitivamente en el restaurante,
          trabajó en todas sus áreas, pero es hasta que no trabaja con Damian
          Allsop que no descubre el gran mundo del dulce y su futura parcela de
          creatividad dentro del Celler: los postres. Desde entonces ya han
          surgido muchos postres, perfumes (núvol de llimona), publicaciones,
          reconocimientos e incluso su último gran proyecto: la heladería
          ROCAMBOLESC, que nos lleva la sofisticación del Celler de Can Roca a
          pie de calle. Ha recibido diversos premios, entre los que se encuentra
          en 2003 el premio al Mejor Pastelero del Año, Chef Millesimé by
          Cruzcampo Gran Reserva 2013 y junto a sus hermanos, premio al Mejor
          Restaurante del Mundo concedido por la revista londinense Restaurant.
          Todo esto sin olvidar las 3 estrellas Michelin que tiene su
          restaurante. Recientemente ha sido elegido como el Mejor Pastelero del
          Mundo.
        </p>
      </div>

      <h2>Sus creaciones en Eleven Coffee</h2>
      <section class="gridContainer">
      <DessertCard
          img="https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/47d7fca5-6dd9-4c68-803b-d2fd50b30647/DreamShaper_v5_A_restaurant_with_a_dark_style_Desserts_3.jpg"
          titulo={"$9.990"}
          descripcion={"Mousse de Chocolate"}
          precio={
            "¡Descubre nuestra deliciosa torta de chocolate! Con un bizcocho esponjoso y húmedo, cubierto con una irresistible capa de ganache de chocolate."
          }
          comprar={"alimento"}
        />

        <DessertCard
          img="https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/6f04490e-a058-491b-b0b8-d394ddfe3606/DreamShaper_v5_brownie_with_a_dark_style_on_a_restaurant_6.jpg"
          titulo={"$5.990"}
          descripcion={"Brownie"}
          precio={
            "Descubre el placer supremo en cada bocado con nuestro exquisito brownie de chocolate. Este dulce tentador combina a la perfección una textura suave y húmeda."
          }
          comprar={"alimento"}
        />

        <DessertCard
          img="https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/fa671775-4ce1-4116-b968-8ed41cb39546/DreamShaper_v5_dessert_with_a_dark_style_on_a_restaurant_5.jpg"
          titulo={"$6.990"}
          descripcion={"Torta Helada"}
          precio={
            "Sumérgete en el placer celestial de nuestra torta de chocolate con helado. Cada capa de esta delicia esponjosa y rica en cacao te transportará a un paraíso dulce"
          }
          comprar={"alimento"}
        />

        <DessertCard
          img="https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/8efc6ff3-03a8-45ae-a38a-3fd783440a96/DreamShaper_v5_ice_cream_with_a_dark_style_on_a_restaurant_0.jpg"
          titulo={"$8.990"}
          descripcion={"Eleven Gelato"}
          precio={
            " Cada cucharada de esta delicia helada te envuelve en un remolino de exquisito cacao. La suavidad y cremosidad del helado se combinan a la perfección con la intensidad."
          }
          comprar={"alimento"}
        />
      </section>
    </div>
  );
};
