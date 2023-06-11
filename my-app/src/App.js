import logo from './logo.svg';
import './App.css';
import Greater from './Component/Greeter';
import Die from './Component/Die';
import ListPicker from './Component/ListPicker';
import DoubleDice from './Component/DoubleDice';
import Heading from './Component/Heading';
import ColorList from './Component/ColorList';
import ShoppingList from "./Component/ShoppingList";
import Clicker from "./Component/Clicker";
import Form from "./Component/Form";
import Counter from "./Component/Counter";
import Toggler from "./Component/Toggler";
import ToggleCounter from "./Component/ToggleCounter";
import ColorBox from "./Component/ColorBox";
import ColorBoxGrid from "./Component/ColorBoxGrid";
import TAPE from './Component/TAPE';




const data = [
  { id: 1, item: 'eggs', quantity: 12, completed: false },
  { id: 2, item: 'milk', quantity: 1, completed: true },
  { id: 3, item: 'chicken breast', quantity: 4, completed: false },
  { id: 4, item: 'carrots', quantity: 6, completed: true },
];


const colors = [
  '#FF0000', 
  '#00FF00', 
  '#0000FF', 
  '#FFFF00', 
  '#FF00FF', 
  '#00FFFF', 
  '#FFA500', 
  '#800080', 
  '#008000', 
  '#000080', 
  '#800000', 
  '#008080', 
  '#FFC0CB', 
  '#808080', 
  '#FFFFFF'  
];



function App() {
  return (
    
    <div className="App">
      <TAPE /> 
   {/*<ColorBoxGrid colors={colors} /> */}
      {/*<ColorBox />*/}      
      {/*<ToggleCounter /> */} 
      {/*<Counter num={1} />  
     <Form />
     <ShoppingList items={data}/> 
    <Clicker /> */}
      {/*<Heading  color="magenta" text="welcome!" fontSize="20px"/>
      <Heading  color="teal" text="blah" fontSize="48px"/>
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["red ", "pink ", "purple ", "teal "]} />
      <ColorList colors={["olive ", "oranger ",  "slategrey "]} /> */}
      {/*(<ListPicker  values={[1, 2, 3]}/>
      <ListPicker  values={["a", "b", "c"]}/>*/}
       {/*<Greater  person="Bill" from="Colt"/>
      <Greater  person="Tedd" />
      <Greater  from="Elton"/> 
        <Die numSides={20}/>
        <Die />
        <Die numSides={10}/>*/}
    </div>
  );
}

export default App;
