"use client";
import axios from "axios";

async function guardarProducto(e) {
    e.preventDefault();
    console.log("Función guardar producto");
    const url = "http://localhost:3000/producto/nuevoProducto";
    const datos = {
        nombre: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        cantidad: document.getElementById("cantidad").value,
    };
    const respuesta = await axios.post(url, datos);
    console.log(respuesta);
    location.replace("/productos/mostrar");
}

export default function Nuevo() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f5f7fa",
                fontFamily: "'Roboto', sans-serif",
            }}
        >
            <form
                style={{
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    width: "400px",
                }}
                onSubmit={guardarProducto}
            >
                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "20px",
                        color: "#34495e",
                    }}
                >
                    Nuevo Producto
                </h1>
                <div style={{ marginBottom: "15px" }}>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Nombre"
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            fontSize: "16px",
                        }}
                        autoFocus
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <input
                        type="text"
                        id="precio"
                        placeholder="Precio"
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            fontSize: "16px",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="text"
                        id="cantidad"
                        placeholder="Cantidad"
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            fontSize: "16px",
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "15px",
                        backgroundColor: "#2980b9",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Guardar nuevo Producto
                </button>
            </form>
        </div>
    );
}
