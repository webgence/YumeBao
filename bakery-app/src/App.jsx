import React from "react";
import Navbar from "./Navbar";
import "./index.css";
import strawberryImg from "./bakedGoods/Starberry.jpg";
import matcha from "./bakedGoods/Matcha.jpg";
import melonPan from "./bakedGoods/melon.jpg";
import taiyaki from "./bakedGoods/Taiyaki.jpg";
import anpan from "./bakedGoods/anpan.jpg";
import sakuraMochi from "./bakedGoods/mochi.png";
import hojicha from "./bakedGoods/Hojicha.jpg";
import ube from "./bakedGoods/Ube.jpg";
import dorayaki from "./bakedGoods/Dorayaki.jpg";
import miso from "./bakedGoods/Miso.jpg";
import mochiDonut from "./bakedGoods/mochi_donut.jpg";
import yuzu from "./bakedGoods/yuzu.png";
import blackSesame from "./bakedGoods/Black-Sesame.png";
import chestnut from "./bakedGoods/chestnut.png";
import kinako from "./bakedGoods/Kinako.jpg";
import yokan from "./bakedGoods/yokan.png";
import ichigo from "./bakedGoods/Ichigo.jpg";
import castella from "./bakedGoods/Castella.jpg";
import purpleSweetPotato from "./bakedGoods/purple.png"; 
import cream from "./bakedGoods/cream.png"; // Placeholder image for Cream Pan
import founder from "./assets/founder.png"; // Placeholder image for the founder
import qr from "./assets/qr.png"; // Placeholder image for the QR code


export default function BakeryHome() {
  const items = [
    {
      name: "Strawberry Shortcake",
      price: "$4.50",
      image: strawberryImg
    },
    {
      name: "Matcha Roll",
      price: "$3.80",
      image: matcha
    },
    {
      name: "Anpan (Red Bean Bun)",
      price: "$2.50",
      image: anpan
    },
    {
      name: "Sakura Mochi",
      price: "$2.80",
      image: sakuraMochi
    },
    {
      name: "Melon Pan",
      price: "$3.00",
      image: melonPan
    },
    {
      name: "Taiyaki",
      price: "$3.20",
      image: taiyaki
    },
    {
      name: "Yuzu Cheesecake",
      price: "$4.80",
      image: yuzu
    },
    {
      name: "Hojicha Tart",
      price: "$3.90",
      image: hojicha
    },
    {
      name: "Black Sesame Bun",
      price: "$2.70",
      image: blackSesame
    },
    {
      name: "Cream Pan (Custard Bun)",
      price: "$2.90",
      image: cream
    },
    {
      name: "Ube Swiss Roll",
      price: "$4.20",
      image: ube
    },
    {
      name: "Mochi Donut",
      price: "$3.50",
      image: mochiDonut
    },
    {
      name: "Chestnut Mont Blanc",
      price: "$5.00",
      image: chestnut
    },
    {
      name: "Dorayaki",
      price: "$2.60",
      image: dorayaki
    },
    {
      name: "Kinako Mochi",
      price: "$2.80",
      image: kinako
    },
    {
      name: "Yokan (Red Bean Jelly)",
      price: "$2.40",
      image: yokan
    },
    {
      name: "Castella Cake",
      price: "$3.30",
      image: castella
    },
    {
      name: "Ichigo Daifuku",
      price: "$3.60",
      image: ichigo
    },
    {
      name: "Miso Caramel Tart",
      price: "$4.00",
      image: miso
    },
    {
      name: "Purple Sweet Potato Pie",
      price: "$3.70",
      image: purpleSweetPotato
    }
  ];
  


  const flavors = [
    {
      name: "Red Bean (Azuki)",
      desc: "A classic! Sweet red bean paste in soft buns, sometimes with sesame seeds on top."
    },
    {
      name: "Custard (Egg Custard / Nai Wong)",
      desc: "Creamy and sweet, either as a filling or baked into tarts or buns."
    },
    {
      name: "Coconut Cream",
      desc: "Coconut paste filling, mildly sweet and aromatic."
    },
    {
      name: "Taro",
      desc: "Earthy, purple root vegetable mashed into a sweet paste—smooth and mellow."
    },
    {
      name: "Matcha (Green Tea)",
      desc: "Often in bread, cake, or cream form, with a slightly bitter taste that balances sweetness."
    },
    {
      name: "Milk or Hokkaido Milk",
      desc: "Ultra-soft and milky buns with a light cream filling or just sweet milk flavor."
    },
    {
      name: "Coffee",
      desc: "Coffee-flavored buns (like the popular Mexican coffee bun) or pastries."
    },
    {
      name: "Chocolate",
      desc: "Chocolate cream or ganache-filled pastries, often with a light, fluffy texture."
    },
    {
      name: "Mango",
      desc: "Sweet mango paste or cream filling, often in tropical-themed pastries."
    },
    {
      name: "Pineapple",
      desc: "Sweet and tangy pineapple filling, popular in buns and tarts."
    },
    {
      name: "Almond",
      desc: "Nutty flavor, often in pastries or as a filling."
    },
    {
      name: "Sesame",
      desc: "Nutty and slightly bitter, often used in buns or as a topping."
    },
    {
      name: "Honey",
      desc: "Sweet and floral, often used in breads and pastries."
    },
    {
      name: "Green Tea (Matcha)",
      desc: "Earthy and slightly bitter, often used in cakes and pastries."
    },
    {
      name: "Black Sesame",
      desc: "Nutty and slightly bitter, often used in buns or as a topping."
    },
    {
      name: "Yuzu",
      desc: "Citrusy and fragrant, often used in creams or jellies."
    },
    {
      name: "Lychee",
      desc: "Sweet and fragrant, often used in creams or jellies."
    },
    {
      name: "Durian",
      desc: "Strong aroma and creamy texture, often used in pastries."
    },
    {
      name: "Ube (Purple Yam)",
      desc: "Sweet and earthy, often used in cakes and pastries."
    },
    {
      name: "Yuzu",
      desc: "A citrus fruit used in mousse or jelly layers for a fresh zing."
    }
  
  ];


  

  return (
    <div className="app-container">
      <Navbar />

      <header className="hero-banner">
        <h1>Welcome to Yume Bǎo</h1>
        <p>Whimsical Asian-inspired treats handmade with love</p>
        
      </header>

      <section id="hero" className="hero-section">
        <h2>Discover Our Flavors</h2>
        <p>Light, fluffy, and full of joy. Just like dreams.</p>

        <div className="flavor-grid">
          {flavors.map((flavor, index) => (
            <div key={index} className="flavor-card">
              <h3>{flavor.name}</h3>
              <p>{flavor.desc}</p>
            </div>
          ))}
          </div>
      </section>

      <section id="products" className="products">
        <h2>Menu</h2>
        <div className="product-grid">
          {items.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>

        <img src= {founder} alt="Founder of Yume Bǎo" className="founder-img" />

        <p>
        Yume Bǎo was initially established in the year 2025 with the aim of launching the Japnese pastries
        and desserts to the world. The founder, as well as most of the employees, was not able to procure
        a career after completing undergraduate studies, and decided to open a bakery
        to showcase their love for Asian desserts. We specialize in a variety of
        Asian-inspired baked treats, such as conventional Japanese desserts.
        Chinese buns and modern fusion sweets. There is a
        a delicious variety of sweet and savory goodies, all prepared using the
        the finest ingredients combined with a dash of creativity. Our specialty is crafting individual
        flavors and textures, using quality ingredients and traditional
        techniques. Our bakery is a cultural melting pot, where East and West meet
        in every bite. We make our desserts with love and
        creativity, so they are ideal for any situation. If you are
        Seeking a delicious indulgence for yourself or perhaps a thoughtful gift for that special person?
        We have something for everyone.   
          </p>
          <br></br>

          <br></br>
        <p>
        Our talented staff of bakers and
        Pastry chefs are committed to offering you the best of both worlds.
        combining traditional Asian flavors with modern dessert design. We utilize
        Yume Bǎo is a surreal combination of Asian flavors and modern
        Dessert art, ranging from red bean buns to matcha wizardry, transforms each bite into a work of
        give joy.
        </p>

        <p>
          Scan this QR code or click on the QR code to support us or to follow our journey!
        </p>
        <a href="https://yumebao.carrd.co/"><img src = {qr}></img></a>

      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Yume Bǎo Bakery. All rights reserved.</p>
      </footer>
    </div>
  );
}
