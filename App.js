const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from react cdn"
);
const heading2 = React.createElement("h2", {}, "Hello from react cdnq");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading, heading2);
