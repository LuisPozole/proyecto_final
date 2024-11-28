"use client";
import axios from "axios";

async function guardarUsuario(e) {
    e.preventDefault();
    console.log("Función guardar usuario");
    const url = "http://localhost:3000/nuevoUsuario";
    const datos = {
        nombre: document.getElementById("nombre").value,
        usuario: document.getElementById("usuario").value,
        password: document.getElementById("password").value,
    };
    const respuesta = await axios.post(url, datos);
    console.log(respuesta);
    location.replace("/users/mostrar");
}

export default function Nuevo() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f9f9fb",
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
                onSubmit={guardarUsuario}
            >
                <h1
                    style={{
                        textAlign: "center",
                        color: "#34495e",
                        marginBottom: "20px",
                    }}
                >
                    Nuevo Usuario
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
                        id="usuario"
                        placeholder="Usuario"
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
                        type="password"
                        id="password"
                        placeholder="Password"
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
                    Guardar nuevo Usuario
                </button>
            </form>
        </div>
    );
}
