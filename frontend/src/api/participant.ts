export const fetchParticipantId = async (): Promise<string> => {
  const res = await fetch("http://localhost:8080/participant");
  const data = await res.json();
  return data.participant_id;
};