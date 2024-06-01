import "./App.css";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <>
      <section className="desktop:flex">
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}

export default App;
