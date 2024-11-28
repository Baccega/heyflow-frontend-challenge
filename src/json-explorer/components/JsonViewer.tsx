function JsonValue({ data }: { data: Record<string, unknown> }) {
  function renderValue(value: unknown) {
    switch (true) {
      case value === null:
        return (
          <div className="json-value-right json-value-right--null">
            null
            <span className="json-comma">,</span>
          </div>
        );
      // I'm going to ignore Maps, Sets, ... for this demo
      case typeof value === "object" && !Array.isArray(value):
        return (
          <>
            <span className="json-bracket--left">&#123;</span>
            <div className="json-value-right json-value-right--object">
              <JsonValue data={value as Record<string, unknown>} />
            </div>
            <span className="json-bracket--right">&#125;</span>
            <span className="json-comma">,</span>
          </>
        );
      case typeof value === "object" && Array.isArray(value):
        return (
          <>
            <span className="json-bracket--left">&#91;</span>
            <div className="json-value-right json-value-right--array">
              {value.map((item, index) => (
                <div className="json-value" key={index}>
                  {renderValue(item)}
                </div>
              ))}
            </div>
            <span className="json-bracket--right">&#93;</span>
            <span className="json-comma">,</span>
          </>
        );
      case typeof value === "string":
        return (
          <div className="json-value-right json-value-right--string">
            "{value}"<span className="json-comma">,</span>
          </div>
        );
      case typeof value === "number":
        return (
          <div className="json-value-right json-value-right--number">
            {value}
            <span className="json-comma">,</span>
          </div>
        );
      case typeof value === "boolean":
        return (
          <div className="json-value-right json-value-right--boolean">
            {value ? "true" : "false"}
            <span className="json-comma">,</span>
          </div>
        );
      case typeof value === "undefined":
        return (
          <div className="json-value-right json-value-right--undefined">
            undefined
            <span className="json-comma">,</span>
          </div>
        );
      // symbol, bigint, function, ...
      default:
        return (
          <div className="json-value-right json-value-right--unknown">
            {value.toString ? value.toString() : JSON.stringify(value)}
            <span className="json-comma">,</span>
          </div>
        );
    }
  }

  return (
    <>
      {data &&
        Object.entries(data).map(([key, value], index) => {
          return (
            <div key={index} className="json-value">
              <span className="json-key">{key}</span>
              <span className="json-separator">:</span>
              {renderValue(value)}
            </div>
          );
        })}
    </>
  );
}

type JsonViewerProps = {
  data: Record<string, unknown>;
};

function JsonViewer(props: JsonViewerProps) {
  return (
    <div className="json-viewer">
      <JsonValue data={props.data} />
    </div>
  );
}

export default JsonViewer;
