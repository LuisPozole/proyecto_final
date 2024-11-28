import axios from "axios";
import Boton from "@/components/boton";
import BorrarVenta from "@/components/borrarVenta";
import CancelarV from "@/components/cancelarVenta";
import Link from "next/link";

async function getventas() {
    const url = "http://localhost:3000/ventas";
    const sells = await axios.get(url);
    return sells.data;
}

async function getUserName() {
    const url = "http://localhost:3000/";
    const name = await axios.get(url);
    console.log(name.data);
    return name.data;
}

async function getProdName() {
    const url = "http://localhost:3000/productos";
    const prod = await axios.get(url);
    console.log(prod.data);
    return prod.data;
}

async function getVentaU(idU, id) {
    var guaradaridU;
    idU.forEach((u) => {
        if (u.id == id) {
            guaradaridU = u.nombre;
        }
    });
    return guaradaridU;
}

async function getVentaP(idP, id) {
    var guaradaridP;
    idP.forEach((p) => {
        if (p.id == id) {
            guaradaridP = p.nombre;
        }
    });
    return guaradaridP;
}

export default async function ventas() {
    var sells = await getventas();
    var user = await getUserName();
    var prod = await getProdName();
    return (
        <div
            style={{
                fontFamily: "'Roboto', sans-serif",
                padding: "20px",
                backgroundColor: "#f9f9fb",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                margin: "20px",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    color: "#34495e",
                    fontSize: "2rem",
                    marginBottom: "20px",
                }}
            >
                Ventas
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
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Usuario</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Producto</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Cantidad</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Total</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Fecha</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Estatus</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Cancelar</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Borrar</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {sells.map((sell) => (
                        <tr
                            key={sell.id}
                            style={{
                                backgroundColor: sell.id % 2 === 0 ? "#f4f6f7" : "#ffffff",
                            }}
                        >
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {getVentaU(user, sell.idUsuario)}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {getVentaP(prod, sell.idProducto)}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {sell.cantidad}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                ${sell.total}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {sell.fecha}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {sell.estatus}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <CancelarV id={sell.id} />
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <BorrarVenta id={sell.id} />
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <Link
                                    href={`/ventas/mostrar/${sell.id}`}
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
