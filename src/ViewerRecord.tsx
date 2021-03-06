import { usePublicRecord } from "@self.id/react";

function ViewerRecord({ did }) {
  const record = usePublicRecord("basicProfile", did);

  const text = record.isLoading
    ? "Loading..."
    : record.content
    ? `Hello ${record.content.name || "stranger"}`
    : "No profile to load";
  return <p>{text}</p>;
}

export default ViewerRecord;
