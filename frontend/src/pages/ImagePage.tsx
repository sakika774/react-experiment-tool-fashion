// src/pages/ImagePage.tsx
import { useParams, Link } from "react-router-dom";
import { imageSets } from "../data/images";

export const ImagePage = () => {
  const { index } = useParams<{ index: string }>();
  const set = imageSets[Number(index)];

  if (!set) {
    return <p>指定されたページが存在しません。</p>;
  }

  return (
    <div>
      <h1>画像提示ページ（条件: {set.condition}）</h1>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
        {set.images.map((img, i) => (
          <img
            key={i}
            src={`/images/${img}`}
            alt={img}
            style={{ width: "200px", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  );
};