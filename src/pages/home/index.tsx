export default function Home() {
  return (
    <div>
      Home
      <br />
      {import.meta.env.VITE_MODE}
    </div>
  );
}
