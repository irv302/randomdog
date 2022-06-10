import { useState } from 'react';
import DogDisplay from "./component/DogDisplay";
import './App.css';
import "./style.css";
function App() {
  const API_URL = 'https://dog.ceo/api/breeds/image/random';

  const [dog, setDog] = useState(null)

  const getDog = async () => {
    const response = await fetch(API_URL);

    const data = await response.json();
    setDog(data.message)
  }


  return (
    <div className='app'>
      <h1>Random Dog Photo Generator</h1> <br />
    
      <input type="button" value="Get Random Dog" onClick={getDog} /><br />
    
      <DogDisplay  dog= {dog} />
    </div>
  )}
export default App;
