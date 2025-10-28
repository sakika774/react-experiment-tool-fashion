import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { imageSets } from "../data/images";
import { fetchParticipantId } from "../api/participant";

export const ConsentPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [clothingKnowledge, setClothingKnowledge] = useState("");

  const handleSubmit = async () => {
    if (!name || !age || !gender || !clothingKnowledge) {
      alert("すべての項目を入力してください");
      return;
    }

    const participantID = await fetchParticipantId();

    // セット（提示単位）ごとにランダム化
    const shuffledOrder = [...imageSets.keys()].sort(() => Math.random() - 0.5);

    sessionStorage.setItem("imageOrder", JSON.stringify(shuffledOrder));
    sessionStorage.setItem("participantID", participantID);

    console.log("参加者ID:", participantID);
    console.log("提示順序:", shuffledOrder);

    navigate("/experiment");
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
          <option value="" disabled>
            選択してください
          </option>
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
          <option value="" disabled>
            選択してください
          </option>
          <option value="無">無</option>
          <option value="有">有</option>
        </select>
      </label>
      <br />
      <button onClick={handleSubmit}>同意して次へ</button>
    </div>
  );
};