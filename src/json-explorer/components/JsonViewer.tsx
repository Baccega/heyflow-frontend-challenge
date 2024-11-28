import { useCallback, useState } from "react";
import JsonValue from "./JsonValue";

type JsonViewerProps = {
  data: Record<string, unknown>;
};

function JsonViewer(props: JsonViewerProps) {
  const [selectedKey, setSelectedKey] = useState<string>();

  const handleKeyClick = useCallback((key: string) => {
    setSelectedKey(key);
  }, []);

  const selectedValue = props.data[selectedKey ?? ""];

  console.log(selectedKey);

  return (
    <>
      <div className="selected-key">
        <h3>Key:</h3> <span>{selectedKey}</span>
      </div>
      <div className="selected-value">
        <h3>Value:</h3> <span>{JSON.stringify(selectedValue)}</span>
      </div>
      <div className="json-viewer">
        <JsonValue data={props.data} onKeyClick={handleKeyClick} />
      </div>
    </>
  );
}

export default JsonViewer;
