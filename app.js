function App() {
  return (
    <div>
      <h1>Hello from React with JSX & Babel!</h1>
      <p>This JSX is compiled in the browser by Babel.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);