import { useEffect, useState } from "react";
import { fetchParticipantId } from "./api/participant";

function App() {
  const [participantId, setParticipantId] = useState<string>("");

  useEffect(() => {
    const getParticipantId = async () => {
      const id = await fetchParticipantId();
      setParticipantId(id);
    };
    getParticipantId();
  }, []);

  return (
    <div>
      <h1>Participant ID: {participantId}</h1>
    </div>
  );
}

export default App;