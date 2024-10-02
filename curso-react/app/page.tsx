
import Mensaje from "./Mensaje.js";

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>;
};

const App = () => {
  return (
    <div className="App">
      <Mensaje message="Estamos trabajando en una nueva app" />
      <Description />
    </div>
  );
};
export default App;
