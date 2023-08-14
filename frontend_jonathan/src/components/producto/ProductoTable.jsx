import { useProducto } from "../../context/ProductoContext";
import { Button, ButtonLink, Table } from "../ui";

export function ProductoTable({ student }) {
  const { deleteProducto } = useProducto();

  return (
    <Table >
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{producto.descripcion}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteProducto(producto._id)}>Delete</Button>
          <ButtonLink to={`/producto/${producto._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300"><span className="text-blue-400 font-bold">descripcion:</span> {producto.descripcion}</p>
      <p className="text-slate-300"><span className="text-blue-400 font-bold">precio:</span>{producto.precio}</p>
      <p className="text-slate-300"><span className="text-blue-400 font-bold">stock:</span>{producto.stock}</p>
    </Table>
  );
}