import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Table, Input, Label } from "../components/ui";
import { useProducto } from "../context/ProductoContext";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function FormProductos() {
  const { createProducto, getProducto, updateProducto } = useProducto();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateProducto(params.id, {
          ...data,
          descripcion: parseString(data.descripcion),
          precio: parseFloat(data.precio),
          stock: parseFloat(data.stock),
          date: dayjs.utc(data.date).format(),
        });
      } else {
        console.log("al grabar:", data)
        createProducto({
          ...data,
          descripcion: parseString(data.descripcion),
          precio: parseFloat(data.precio),
          stock: parseFloat(data.stock),
          date: dayjs.utc(data.date).format(),
        });
      }

      navigate("/producto");
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    console.log(params.id)
    const loadProducto = async () => {
      if (params.id) {
        const producto = await getProducto(params.id);
        
        setValue("descripcion", producto.descripcion);
        setValue("precio", producto.precio);
        setValue("stock", producto.stock);

      }
    };
    loadProducto();
  }, []);

  return (
    <Table>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="descripcion">descripcion</Label>
        <Input
          type="text"
          name="descripcion"
          placeholder="Ingrese descripcion"
          {...register("descripcion", { required: { value: true, message: "descripcion es requerido" } })}
          autoFocus
        />
        {errors.descripcion && (
          <p className="text-red-500 font-semibold">{errors.descripcion.message}</p>
        )}


        <Label htmlFor="precio">precio:</Label>
        <Input
          type="number"
          name="precio"
          placeholder="Escriba el precio..."
          {...register("precio", { required: { value: true, message: "precio es requerido" } })}
        />
        {errors.precio && (<p className="text-red-500 font-semibold">{errors.precio.message}</p>)}



        <Label htmlFor="precio">precio:</Label>
        <Input
          type="number"
          name="precio"
          placeholder="Escriba la precio..."
          {...register("precio", { required: { value: true, message: "precio es requerido" } })}
        />
        {errors.precio && (<p className="text-red-500 font-semibold">{errors.precio.message}</p>)}

        <Button>Grabar Registro</Button>
      </form>
    </Table>
  );
}