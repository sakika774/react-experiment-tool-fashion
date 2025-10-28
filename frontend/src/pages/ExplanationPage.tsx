import { useNavigate } from "react-router-dom";

export const ExplanationPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>実験概要</h1>
      <p>ここに注意事項を記載します。</p>
      <button onClick={() => navigate("/consent")}>同意する</button>
    </div>
  );
};