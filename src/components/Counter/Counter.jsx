import { useState } from "react";
import { Button } from "../Button";
import Swal from 'sweetalert2'

const Counter = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(0);

  const handleAdd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleSubstract = () => {
    if (contador > 0) setContador(contador - 1);
  };
  
  return (
    <div className="grid">
      <Button onClick={handleAdd}> Sumar </Button>
      <span style={{ minWidth: 25 }}>{contador}</span>
      <Button onClick={handleSubstract}> Restar </Button>
      <Button
        onClick={() => {
          if (contador) onAdd(contador);
          Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'Producto agregado',
            showConfirmButton: false,
            timer: 1500
          })
        }}
        disabled={!contador}
      >
        Agregar al carrito
        
      </Button>
    </div>
  );
};

export default Counter;
