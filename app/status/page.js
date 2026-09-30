import StatusBoard from "../../components/StatusBoard";

export const metadata = { title: "Status" };

export default function Status() {
  return (
    <main className="wrap">
      <h1>Status</h1>
      <p>Is the bot online, and is Discord working?</p>
      <StatusBoard />
    </main>
  );
}
