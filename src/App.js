import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import AccordionTransition from "./components/AccordionTransition";
import BasicRating from "./components/BasicRating";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <Header />
      <AccordionTransition/>
      <ListarTarefa/>
      <BasicRating/>
      
    </div>
  );
}

export default App;
