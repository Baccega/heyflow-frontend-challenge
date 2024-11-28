import backIcon from "../assets/back.svg";
import "../App.css";
import "./JsonExplorer.css";
import JsonViewer from "./components/JsonViewer";
import { MOCK_JSON_DATA } from "./demo";

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
        {/* Use MOCK_JSON_DATA_2 for a more complete example */} 
        {/* <JsonViewer data={MOCK_JSON_DATA_2} /> */}
        <JsonViewer data={MOCK_JSON_DATA} />
      </main>
    </>
  );
}

export default JsonExplorer;
