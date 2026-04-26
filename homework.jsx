// Question 1
export const user = {
  name: '',
};
function App() {
  function handleCreateUser(name) {
    user.name = name;
  }
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>
      <p id="actions">
        <button onClick={() => handleCreateUser('George')}>
          Create User
        </button>
      </p>
    </div>
  );
}
export default App;

// Question 2 
import { useState } from 'react';
export default function App() {
  const [price, setPrice] = useState('$100');
  function handleDiscount() {
    setPrice('$75');
  }
  return (
    <div>
      <p data-testid="price">{price}</p>
      <button onClick={handleDiscount}>Apply Discount</button>
    </div>
  );
}

// Question 3
import { useState } from 'react';
export default function App() {
  const [showAlert, setShowAlert] = useState(false);
  function handleDelete() {
    setShowAlert(true);
  }
  function handleProceed() {
    setShowAlert(false);
  }
  return (
    <div>
      {showAlert && (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleProceed}>Proceed</button>
        </div>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

// Question 4
import { useState } from 'react';
export default function App() {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive(true);
  }
  return (
    <div>
      <p className={isActive ? 'active' : ''}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
}

// Question 5
import React from 'react';
export function Todo(props) {
  return <li>{props.text}</li>;
}
export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];
export default function App() {
  return (
    <ul>
      {DUMMY_TODOS.map((todo) => (
        <Todo text={todo} />
      ))}
    </ul>
  );
}