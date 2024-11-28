"use client";
import axios from "axios";

async function verificarLogin(e) {
    e.preventDefault();
    console.log("Estas en verificar");
    const url = "http://localhost:3000/login";
    const datos = {
        usuario: document.getElementById("usuario").value,
        password: document.getElementById("password").value,
    };
    const usuario = await axios.post(url, datos);
    console.log(usuario.data);
    if (usuario.data.tipoUsuario == "usuario") {
        window.location.replace("/users/mostrar");
    } else if (usuario.data.tipoUsuario == "admin") {
        window.location.replace("/users/nuevoUsuario");
    } else {
        document.getElementById("msj").innerHTML = "Datos incorrectos";
    }
}

export default function Login() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#eaf2f8", // Fondo azul claro
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
                onSubmit={verificarLogin}
            >
                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "20px",
                        color: "#34495e",
                    }}
                >
                    Login
                </h1>
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
                        autoFocus
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
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
                    Iniciar sesión
                </button>
                <div
                    id="msj"
                    style={{
                        marginTop: "20px",
                        color: "#e74c3c",
                        fontSize: "18px",
                        textAlign: "center",
                    }}
                ></div>
            </form>
        </div>
    );
}
