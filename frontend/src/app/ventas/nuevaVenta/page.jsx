"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Nuevo() {
    const [usuarios, setUsuarios] = useState([]);
    const [productos, setProductos] = useState([]);
    const [cantidad, setCantidad] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const usuariosData = await axios.get("http://localhost:3000/");
                const productosData = await axios.get("http://localhost:3000/productos");
                setUsuarios(usuariosData.data);
                setProductos(productosData.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    function calcTotal(cantidadInput) {
        const productoSeleccionado = document.getElementById("idProducto").value;
        const productoEncontrado = productos.find(
            (product) => product.nombre === productoSeleccionado
        );
        if (productoEncontrado) {
            const nuevoTotal = productoEncontrado.precio * cantidadInput;
            setTotal(nuevoTotal);
        }
    }

    async function guardarUsuario(e) {
        e.preventDefault();
        const datos = {
            idUsuario: document.getElementById("idUsuario").value,
            idProducto: document.getElementById("idProducto").value,
            cantidad: parseInt(document.getElementById("cantidad").value, 10) || 1,
            total,
        };

        const usuarioEncontrado = usuarios.find((user) => user.nombre === datos.idUsuario);
        if (usuarioEncontrado) {
            datos.idUsuario = usuarioEncontrado.id;
        }

        const productoEncontrado = productos.find(
            (product) => product.nombre === datos.idProducto
        );
        if (productoEncontrado) {
            datos.idProducto = productoEncontrado.id;
        }

        try {
            const url = "http://localhost:3000/ventas/nuevaVenta";
            const respuesta = await axios.post(url, datos);
            location.replace("/ventas/mostrar");
        } catch (error) {
            console.error("Error al guardar la venta:", error);
        }
    }

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    backgroundColor: "#f8f9fa",
                    fontFamily: "'Roboto', sans-serif",
                }}
            >
                <h1>Cargando...</h1>
            </div>
        );
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f0f4f7",
                fontFamily: "'Roboto', sans-serif",
            }}
        >
            <form
                style={{
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    width: "400px",
                }}
                onSubmit={guardarUsuario}
            >
                <h1
                    style={{
                        textAlign: "center",
                        color: "#34495e",
                        marginBottom: "20px",
                    }}
                >
                    Nueva Venta
                </h1>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="idUsuario" style={{ fontWeight: "bold" }}>
                        Usuario:
                    </label>
                    <input
                        className="form-control"
                        list="datalistOptions-Users"
                        id="idUsuario"
                        placeholder="Seleccionar usuario"
                        required
                        style={{
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            marginTop: "5px",
                        }}
                    />
                    <datalist id="datalistOptions-Users">
                        {usuarios.map((usuario) => (
                            <option key={usuario.id} value={usuario.nombre} />
                        ))}
                    </datalist>
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="idProducto" style={{ fontWeight: "bold" }}>
                        Producto:
                    </label>
                    <input
                        className="form-control"
                        list="datalistOptions-Products"
                        id="idProducto"
                        placeholder="Seleccionar producto"
                        required
                        style={{
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            marginTop: "5px",
                        }}
                        onChange={() => calcTotal(cantidad)}
                    />
                    <datalist id="datalistOptions-Products">
                        {productos.map((product) => (
                            <option key={product.id} value={product.nombre} />
                        ))}
                    </datalist>
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="cantidad" style={{ fontWeight: "bold" }}>
                        Cantidad:
                    </label>
                    <input
                        className="form-control"
                        type="number"
                        id="cantidad"
                        placeholder="Cantidad"
                        value={cantidad}
                        onChange={(e) => {
                            const nuevaCantidad = parseInt(e.target.value, 10) || 1;
                            setCantidad(nuevaCantidad);
                            calcTotal(nuevaCantidad);
                        }}
                        style={{
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            marginTop: "5px",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "20px", fontWeight: "bold" }}>
                    Total a pagar: ${total}
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#2980b9",
                        color: "#ffffff",
                        borderRadius: "5px",
                        border: "none",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Guardar nueva venta
                </button>
            </form>
        </div>
    );
}
