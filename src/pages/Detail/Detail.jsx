import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../../api/products";
import { Counter } from "../../components/Counter";
import { useCartContext } from "../../context/cartContext";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Detail.scss";

export const Detail = () => {
  const { productId } = useParams();
  const { addProduct } = useCartContext();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);

  const handleAdd = (qty) => {
    //Id producto
    //Queremos que haga algo
    addProduct(product, qty);
  };

  if (!Object.keys(product).length) {
    return <div>Loading...</div>; 
  }
  return (
    <div className="producto">
      <div className="content detail">
        <img src={product.imagen} />
        <div className="detail__info">
        <span className="detail__info-name">{product?.nombre}</span>
        <p className="detail__info-desc">{product?.descripcion}</p>
        <span className="detail__info-category">{product?.categoria}</span>
        <span className="detail__info-price">
          ${product?.precio?.toLocaleString()}
        </span>
        <span className="detail__info-stock">
          ¡Quedan solo {product?.stock} disponibles!
        </span>
        <Counter stock={product?.stock} onAdd={handleAdd} />
        </div>
      </div>
      <div className="container">
      <h1>Productos destacados</h1>
      <div class="row">
                <div class="col-md-6 col-lg-3 destacados">
                    <img src="../assets/destacado1.jpg" alt="Producto" class="productosdestacadosimg"/>
                    <h3 className="destacados__h3">Anteojos Ray-Ban Wayfarer 4195Mi</h3>
                    <h2 className="destacados__precio">
                        <p>$2.999</p>
                    </h2>
                </div>
                <div class="col-md-6 col-lg-3 destacados">
                    <img src="../assets/destacado2.jpg" alt="Producto" class="productosdestacadosimg"/>
                    <h3 className="destacados__h3">Anteojos Ray-Ban Wayfarer 4195Mi</h3>
                    <h2 className="destacados__precio">
                        <p>$2.999</p>
                    </h2>
                </div>
                <div class="col-md-6 col-lg-3 destacados">
                    <img src="../assets/destacado3.jpg" alt="Producto" class="productosdestacadosimg"/>
                    <h3 className="destacados__h3">Anteojos Ray-Ban Wayfarer 4195Mi</h3>
                    <h2 className="destacados__precio">
                        <p>$2.999</p>
                    </h2>
                </div>
                <div class="col-md-6 col-lg-3 destacados">
                    <img src="../assets/destacado4.jpg" alt="Producto" class="productosdestacadosimg"/>
                    <h3 className="destacados__h3">Anteojos Ray-Ban Wayfarer 4195Mi</h3>
                    <h2 className="destacados__precio">
                        <p>$2.999</p>
                    </h2>
                </div>
            </div>
      </div>
    </div>
    
  );
};
