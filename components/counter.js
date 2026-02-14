import { useState } from "react";
import { ADD_Comment, VIDER_Comment } from "../actions/commentaction";
import { useDispatch, useSelector } from "react-redux";

export default function CommentUser() {
  const comments = useSelector((state) => state);
  const dispatch = useDispatch();
  const [dataform, setDataform] = useState({});

  const handleChange = (e) => {
    setDataform({ ...dataform, [e.target.name]: e.target.value });
  };

  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#1c1c1c",
      color: "#fff",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.7)",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2 style={{ color: "#ffcc00", textAlign: "center", marginBottom: "20px" }}>
        Commentaires
      </h2>

      {/* Formulaire */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="user"
          placeholder="Entrer votre nom"
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #444",
            backgroundColor: "#2a2a2a",
            color: "#fff",
          }}
        />

        <textarea
          name="comment"
          placeholder="Entrer votre commentaire"
          rows={3}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #444",
            backgroundColor: "#2a2a2a",
            color: "#fff",
            resize: "vertical",
          }}
        />

        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            onClick={() => dispatch(ADD_Comment(dataform))}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ffcc00",
              color: "#1c1c1c",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Ajouter Commentaire
          </button>

          <button
            onClick={() => dispatch(VIDER_Comment())}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff4d4d",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Supprimer Commentaires
          </button>
        </div>
      </div>

      {/* Liste des commentaires */}
      <div style={{ marginTop: "30px" }}>
        {comments.length === 0 ? (
          <p style={{ textAlign: "center", color: "#ccc" }}>Aucun commentaire pour le moment</p>
        ) : (
          comments.map((com, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#2a2a2a",
                padding: "12px",
                borderRadius: "8px",
                marginBottom: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              <p style={{ margin: "0 0 5px 0", fontWeight: "bold", color: "#ffcc00" }}>
                {com.user}
              </p>
              <p style={{ margin: 0, color: "#ddd" }}>{com.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
