import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ConsentPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [clothingKnowledge, setClothingKnowledge] = useState("");

  const handleSubmit = () => {
    if (!name || !age || !gender || !clothingKnowledge) {
      alert("すべての項目を入力してください");
      return; // 未入力があればここで処理を止める
    }

    console.log({ name, gender, age, clothingKnowledge });
    // 後でバックエンド送信処理を追加
    navigate("/practice");
  };

  return (
    <div>
      <h1>同意画面</h1>
      <label>
        名前:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        年齢:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <label>
        性別:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="" disabled>選択してください</option>
          <option value="male">男性</option>
          <option value="female">女性</option>
        </select>
      </label>
      <br />
      <label>
        被覆知識:
        <select
          value={clothingKnowledge}
          onChange={(e) => setClothingKnowledge(e.target.value)}
        >
          <option value="" disabled>選択してください</option>
          <option value="無">無</option>
          <option value="有">有</option>
        </select>
      </label>
      <br />
      <button onClick={handleSubmit}>同意して次へ</button>
    </div>
  );
};