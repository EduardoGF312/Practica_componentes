import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */ 
`;

function App() {
  return (
    <div className="App">
      <h1>Botones</h1>
      <a href='https://utd.edu.mx/' target="_blank">
        <Button className='utd'><span>UTD</span></Button>
      </a>
      <a href='https://github.com/'>
        <Button className='git'><span>GitHub</span></Button>
      </a>
      <a href='https://instagram.com/eduardo_g03?igshid=ZDdkNTZiNTM='>
        <Button className='insta'><span>Instagram</span></Button>
      </a>
      
    </div>
  );
}

export default App;
