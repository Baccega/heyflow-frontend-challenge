type JsonViewerProps = {
  data: unknown;
};

function JsonViewer(props: JsonViewerProps) {
  return (
    <div className="json-viewer">{JSON.stringify(props.data, null, 2)}{JSON.stringify(props.data, null, 2)}{JSON.stringify(props.data, null, 2)}</div>
  );
}

export default JsonViewer;
