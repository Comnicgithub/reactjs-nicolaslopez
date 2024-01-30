import { useEffect, useState } from "react";
import { getProducts, cargarData } from "../api/products";
import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { ItemContainer } from "../components/ItemContainer";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconSelector } from "../components/IconSelector";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProducts()
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    
    <>
    <img src="./assets/top-index.jpg" alt="destacado gitano"/>
      <Banner
        promocion="PAGA HASTA 12 CUOTAS SIN INTERÉS"
        boton="QUIERO SABER MÁS"
        onClick={() => console.log("click en quiero saber mas")}
      />
      <main className="content">
        <ItemContainer products={products} loading={loading} />
      </main>
      <Banner
        promocion="ENVÍOS GRATUITOS A TODO EL PAÍS"
        boton="IR A COMPRAR"
        onClick={() => console.log("click en ir a comprar")}
      />
    </>
  );
};
