import backIcon from "../assets/back.svg";
import "../App.css";
import "./JsonExplorer.css";
import JsonViewer from "./components/JsonViewer";
import { MOCK_JSON_DATA_2 } from "./demo";

function JsonExplorer() {
  return (
    <>
      <header className="backButtonContainer">
        <nav>
          <a href="/">
            <img src={backIcon} className="back" alt="Back" />
          </a>
        </nav>
        <h1>JSON Explorer</h1>
      </header>
      <main>
        <JsonViewer data={MOCK_JSON_DATA_2} />
      </main>
    </>
  );
}

export default JsonExplorer;
