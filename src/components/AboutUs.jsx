import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>🌿 Paradise Nursery</h1>
      <p>
        We provide beautiful indoor plants to bring life and freshness into your
        home.
      </p>

      <button onClick={() => navigate("/plants")}>Get Started</button>
    </div>
  );
}

export default AboutUs;
