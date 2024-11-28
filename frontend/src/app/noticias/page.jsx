import Boton from "@/components/boton";
import axios from "axios";
import Link from "next/link";

async function universidadesMexico() {
    const url = "http://universities.hipolabs.com/search?country=Mexico";
    const universidades = await axios.get(url);
    return universidades.data;
}

export default async function Noticias() {
    var universidades = await universidadesMexico();
    return (
        <div
            style={{
                fontFamily: "'Arial', sans-serif",
                color: "#333",
                padding: "20px",
                backgroundColor: "#f5f5f5",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    color: "#2c3e50",
                    fontSize: "2rem",
                    marginBottom: "10px",
                }}
            >
                Noticias
            </h1>
            <p
                style={{
                    textAlign: "center",
                    fontSize: "1.2rem",
                    color: "#7f8c8d",
                }}
            >
                Estas en noticias
            </p>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "20px",
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
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                            Id
                        </th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                            Universidad
                        </th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                            Web
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {universidades.map((universidad, i) => (
                        <tr
                            key={i}
                            style={{
                                backgroundColor: i % 2 === 0 ? "#ecf0f1" : "#bdc3c7",
                            }}
                        >
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {i + 1}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <Link
                                    href={`/noticias/${universidad.name}`}
                                    style={{
                                        color: "#2980b9",
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {universidad.name}
                                </Link>
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <Link
                                    href={`${universidad.web_pages[0]}`}
                                    style={{
                                        color: "#27ae60",
                                        textDecoration: "none",
                                        fontStyle: "italic",
                                    }}
                                >
                                    {universidad.web_pages[0]}
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
