import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import MapContainer from './google.jsx';

const Button = styled.button`
  /* Adapt the colors based on primary prop */ 
`;

function App() {
  return (
    <div className="App">
      <h1>Botones</h1>
      <h2>Eduardo Garcia Flores</h2>
      <a href='https://utd.edu.mx/' target={ "_blank" }>
        <Button className='utd'><span>UTD</span></Button>
      </a>
      <a href='https://github.com/EduardoGF312/Practica_componentes.git' target={ "_blank" }>
        <Button className='git'><span>GitHub</span></Button>
      </a>
      <a href='https://instagram.com/eduardo_g03?igshid=ZDdkNTZiNTM=' target={ "_blank" }>
        <Button className='insta'><span>Instagram</span></Button>
      </a>
      
      <MapContainer/>
      
    </div>
  );
}

export default App;
