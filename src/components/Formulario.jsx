import React from 'react';
import { useForm } from "react-hook-form";
import { edadValidator } from "./validators";

const Formulario = () => {

    const { register, handleSubmit } = useForm({

    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return <div>
        <h2>Contactanos</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre y Apellido</label>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })} />
            </div>
            <div>
                <label>Dirección</label>
                <input type="text" {...register('direccion', {
                    required: true
                })} />
            </div>
            <div>
                <label>Email</label>
                <input type="mail" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
            </div>
            <div>
                <label>Edad</label>
                <input type="number" {...register('edad', {
                    validate: edadValidator
                })} />
            </div>
            <div>
                <label>País</label>
                <select {...register('pais')}>
                    <option value="es">España</option>
                    <option value="it">Italia</option>
                    <option value="fr">Francia</option>
                </select>
            </div>
                <div>
                    <label>Teléfono</label>
                    <input type="text" {...register('telefono')} />
                </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
}

export default Formulario;