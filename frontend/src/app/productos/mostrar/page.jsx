import axios from "axios";
import Boton from "@/components/boton";
import BorrarProducto from "@/components/borrarProducto";
import Link from "next/link";

async function getproductos() {
    const url = "http://localhost:3000/productos";
    const products = await axios.get(url);
    return products.data;
}

export default async function productos() {
    var products = await getproductos();
    return (
        <div
            style={{
                fontFamily: "'Roboto', sans-serif",
                padding: "20px",
                backgroundColor: "#eaf2f8", // Fondo azul claro
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
                Productos
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
                            backgroundColor: "#2c3e50",
                            color: "#ecf0f1",
                            textAlign: "left",
                        }}
                    >
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Producto</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Cantidad</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Precio</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Borrar</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr
                            key={product.id}
                            style={{
                                backgroundColor: product.id % 2 === 0 ? "#f4f6f7" : "#ffffff",
                            }}
                        >
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{product.id}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{product.nombre}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{product.cantidad}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>${product.precio}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <BorrarProducto id={product.id} />
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <Link
                                    href={`/productos/mostrar/${product.id}`}
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
