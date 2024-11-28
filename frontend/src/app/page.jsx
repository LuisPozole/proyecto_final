export default function Index() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                backgroundColor: "#f0f4f7",
                fontFamily: "'Roboto', sans-serif",
                textAlign: "center",
                padding: "20px",
            }}
        >
            <h1
                style={{
                    color: "#34495e",
                    fontSize: "2rem",
                    marginBottom: "20px",
                }}
            >
                Bienvenido a nuestra página
            </h1>
            <p
                style={{
                    fontSize: "1.2rem",
                    color: "#7f8c8d",
                    marginBottom: "20px",
                }}
            >
                Nuestro equipo está conformado por:
            </p>
            <ol
                style={{
                    textAlign: "left",
                    fontSize: "1rem",
                    color: "#2c3e50",
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    listStyleType: "decimal",
                    width: "fit-content",
                    minWidth: "300px",
                }}
            >
                <li>De Santiago Colin Luis Enrique</li>
                <li>Lopez Alvarez Cinthia Jimena</li>
                <li>Reyes Garcia Gabino</li>
            </ol>
        </div>
    );
}
