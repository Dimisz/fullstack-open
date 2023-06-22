import Hello from "./components/Hello";

const App = () => {
  const now = new Date().toLocaleString();

  return(
    <div>
      <h1>Hello Helsinki!</h1>
      <p>It's {now} here in Shenzhen.</p>
      <Hello name={"Dimi"}/>
      <Hello name="Mark" />
    </div>
  );
}

export default App;