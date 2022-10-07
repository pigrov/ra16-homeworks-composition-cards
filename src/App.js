import Cards from "./components/Cards";
import { Card } from "react-bootstrap";

function App() {
  return (
    <Cards title="Card Title">
      <Card.Img
        variant="top"
        src="https://s1.1zoom.ru/big0/94/345461-admin.jpg"
      />
    </Cards>
  );
}

export default App;
