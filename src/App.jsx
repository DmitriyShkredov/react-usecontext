import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Theme } from "./providers/Theme";
import "./App.css";

function App() {
  return (
    <Theme>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Theme>
  );
}

export default App;
