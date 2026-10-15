import { useNavigate } from "react-router-dom";

function dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 70px)",
        padding: "50px 20px",
        background: "#f5f8fc",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "#fff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            color: "#102a43",
            marginBottom: "10px",
          }}
        >
          Admin Dashboard
        </h1>

        <p
          style={{
            color: "#627d98",
            marginBottom: "30px",
          }}
        >
          Manage your IIT BHU Research Lab website.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          <button onClick={() => navigate("/people")}>
            Manage People
          </button>

          <button onClick={() => navigate("/research")}>
            Manage Research
          </button>

          <button onClick={() => navigate("/publications")}>
            Manage Publications
          </button>

          <button onClick={() => navigate("/supervisor")}>
            Manage Supervisor
          </button>
        </div>

        <button
          onClick={handleLogout}
          style={{
            marginTop: "30px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            background: "#d32f2f",
            color: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default dashboard;