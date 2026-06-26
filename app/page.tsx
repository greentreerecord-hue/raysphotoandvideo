export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ff3333",
          fontSize: "48px",
        }}
      >
        RaysPhotoAndVideo
      </h1>

      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Welcome to RaysPhotoAndVideo
      </p>

      <hr />

      <h2>Featured Video</h2>

      <video
        controls
        width="100%"
        style={{ maxWidth: "700px", borderRadius: "12px" }}
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>

      <br />
      <br />

      <button
        style={{
          background: "red",
          color: "white",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>

      <p>👍 Likes: 0</p>
      <p>👁 Views: 0</p>

      <textarea
        placeholder="Leave a comment..."
        rows={4}
        style={{
          width: "100%",
          maxWidth: "700px",
          padding: "10px",
          borderRadius: "8px",
        }}
      />

      <h2 style={{ marginTop: "40px" }}>Featured Photo</h2>

      <img
        src="/photos/photo1.jpg"
        alt="Featured"
        style={{
          width: "100%",
          maxWidth: "700px",
          borderRadius: "12px",
        }}
      />
    </main>
  );
} 

