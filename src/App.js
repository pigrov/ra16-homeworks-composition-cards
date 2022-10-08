import Cards from "./components/Cards";
import { Card, Button } from "react-bootstrap";

function App() {
  return (
    <Cards
      title="Card Title"
      text="Some quick example text to build on the card title and make up the bulk of the card's content."
    >
      <Card.Img
        variant="top"
        src="https://s1.1zoom.ru/big0/94/345461-admin.jpg"
      />
    </Cards>
  );
}

export default App;
