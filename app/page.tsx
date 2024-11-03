
import Hello from "./components/Hello";

export default function Home() {
  console.log('Hey What I am?')
  return (
    <>
  <h1 className="text-3xl">Welcome Home Page</h1>
  <Hello/>
    </>
  );
}
