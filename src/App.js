import ButtonChild from './ButtonChild';
import Button from './Button';
import ButtonState from './ButtonState';

function App() {
  return (
    <>
    <h1>Hello World</h1>
    <Button title='Button 1'/>
    <Button title='Button 2'/>
    <Button title='Button 3'/>
    <br/>
    <ButtonChild>Button 1</ButtonChild>
    <ButtonChild>Button 2</ButtonChild>
    <ButtonChild>Button 3</ButtonChild>
    <br/>
    <ButtonState>Buttton 1</ButtonState>
    <ButtonState>Buttton 2</ButtonState>
    <ButtonState>Buttton 3</ButtonState>
    </>
  );
}

export default App;
