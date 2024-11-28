"use client";
import axios from "axios";
import Boton from "@/components/boton";
import BorrarUsuario from "@/components/borrarUsuario";
import Link from "next/link";

async function getSessionUsuario() {
    console.log("Estas en getSession");
    const url = "http://localhost:3000/getSesionUsuario";
    const sesionValida = await axios.get(url);
    console.log(sesionValida.data);
}

async function getUsuarios() {
    const url = "http://localhost:3000";
    const users = await axios.get(url);
    return users.data;
}

export default async function Usuarios() {
    getSessionUsuario();
    var users = await getUsuarios();
    return (
        <div
            style={{
                fontFamily: "'Roboto', sans-serif",
                padding: "20px",
                backgroundColor: "#f0f4f7",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                margin: "20px",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    color: "#2c3e50",
                    fontSize: "2rem",
                    marginBottom: "20px",
                }}
            >
                Usuarios
            </h1>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    overflow: "hidden",
                }}
            >
                <thead>
                    <tr
                        style={{
                            backgroundColor: "#34495e",
                            color: "#ecf0f1",
                            textAlign: "left",
                        }}
                    >
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Nombre</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Usuario</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Borrar</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            style={{
                                backgroundColor: user.id % 2 === 0 ? "#f9fbfc" : "#ffffff",
                            }}
                        >
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.id}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.nombre}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.usuario}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <BorrarUsuario id={user.id} />
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <Link
                                    href={`/users/mostrar/${user.id}`}
                                    style={{
                                        color: "#2980b9",
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Editar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <Boton />
            </div>
        </div>
    );
}
