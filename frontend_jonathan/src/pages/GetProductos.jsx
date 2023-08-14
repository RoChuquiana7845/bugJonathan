import { useEffect } from "react";
import { useProducto } from "../context/ProductoContext";
import { ProductoTable } from "../components/producto/ProductoTable";
import { ImFileEmpty } from "react-icons/im";

export default function GetStudents() {
  const { productos, getProducto } = useProducto();

  useEffect(() => {
    getProducto();
  }, []);

  return (
    <>
      {productos.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No existen productos ingresados
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {productos.map((producto) => (
          <ProductoTable producto={producto} key={producto._id} />
        ))}
      </div>
    </>
  );
}