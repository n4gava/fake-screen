import React, { useState }from 'react';

function App() {

  const [value, setValue ] = useState(0);

  const handleOnClick = () => {
    setValue(value + 1);
  }

  return (
    <div className="App">
      <p>{value}</p>
      <button onClick={handleOnClick}>Text</button>
      Olá mundo
    </div>
  );
}

export default App;
