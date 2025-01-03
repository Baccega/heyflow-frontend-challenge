import { ChangeEvent, useCallback, useState } from "react";
import JsonValue from "./JsonValue";

// No need to put this in a separate file for this demo
function getNestedValue(
  obj: Record<string, unknown>,
  path: string
): unknown | undefined {
  return (
    path
      // This will convert all array indexes to standard object dot properties
      .replace(/\[(\w+)\]/g, ".$1")
      .split(".")
      .reduce<unknown>(
        (acc, key) => (acc ? (acc as Record<string, unknown>)[key] : undefined),
        obj
      )
  );
}

type JsonViewerProps = {
  data: Record<string, unknown>;
};

function JsonViewer(props: JsonViewerProps) {
  const [selectedKey, setSelectedKey] = useState<string>();

  const handleKeyClick = useCallback((key: string) => {
    setSelectedKey(key);
  }, []);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSelectedKey(event.target.value);
    },
    [setSelectedKey]
  );

  const selectedValue =
    selectedKey !== ""
      ? getNestedValue(props.data, selectedKey ?? "")
      : undefined;

  return (
    <>
      <div className="selected-key">
        <h3>Key:</h3>{" "}
        <input value={selectedKey ?? ""} onChange={handleInputChange} />
      </div>
      <div className="selected-value">
        <h3>Value:</h3>{" "}
        <span>
          {selectedValue === undefined
            ? "undefined"
            : JSON.stringify(selectedValue)}
        </span>
      </div>
      <div className="json-viewer">
        <JsonValue data={props.data} onKeyClick={handleKeyClick} />
      </div>
    </>
  );
}

export default JsonViewer;
