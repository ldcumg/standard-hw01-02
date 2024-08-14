import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

function App() {
  const title = "My Website";
  const year = 2024;
  return (
    <div>
      <Header title={title} />
      <Content />
      <Footer year={year} />
    </div>
  );
}

export default App;
