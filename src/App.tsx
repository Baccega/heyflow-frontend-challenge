import githubLogo from "./assets/github.svg";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h1>HeyFlow's Frontend Challenge</h1>
        <h2>By Sandro Baccega</h2>
      </header>
      <main>
        <nav>
          <a href="/json-explorer/">JSON Explorer</a>
          <a href="/custom-checkbox/">Custom Checkbox</a>
        </nav>
      </main>

      <footer>
        <a
          href="https://github.com/Baccega/heyflow-frontend-challenge"
          target="_blank"
        >
          <img src={githubLogo} className="logo" alt="Github" />
        </a>
      </footer>
    </>
  );
}

export default App;
