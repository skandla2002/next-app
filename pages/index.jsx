import Link from "next/link";

function App() {
  return (
    <div>
      <h2>Link to 'tomato'</h2>
      <Link href="/tomato">
        <a>Move to '/tomato'</a>
      </Link>
    </div>
  );
}

export default App;
