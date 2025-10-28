// src/pages/ExperimentTopPage.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { imageSets } from "../data/images";

export const ExperimentTopPage = () => {
  const [order, setOrder] = useState<number[]>([]);

  useEffect(() => {
    // 初回アクセス時にランダム順を決定
    const storedOrder = localStorage.getItem("experimentOrder");
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    } else {
      const newOrder = [...Array(imageSets.length).keys()]
        .map((i) => i)
        .sort(() => Math.random() - 0.5);
      setOrder(newOrder);
      localStorage.setItem("experimentOrder", JSON.stringify(newOrder));
    }
  }, []);

  return (
    <div>
      <h1>実験トップページ</h1>
      <p>以下の順で画像ページを閲覧してください。</p>
      <ul>
        {order.map((i, idx) => (
          <li key={idx}>
            <Link to={`/image/${imageSets[i].id - 1}`}>
              {idx + 1}：条件 {imageSets[i].condition}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};