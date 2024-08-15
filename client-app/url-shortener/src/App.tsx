import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
// import Faq from "./components/Faq/faq";
// import OurDifferences from "./components/OurDifferences/OurDifferences";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
};

export default App;
