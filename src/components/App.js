import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
const [items, setItems] = useState(itemData);
const [isDark, setDark]= useState(false)
console.log(isDark);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=> setDark(!isDark)}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
      
    </div>
  );
}

export default App;
