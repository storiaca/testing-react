import UseArrayExample from "./components/Hooks/UseArrayExample";
import { ShoppingList1 } from "./components/Shopping/ShoppingList1";
import { ShoppingList2 } from "./components/Shopping/ShoppingList2";
import { SimplePost } from "./components/SimplePost";

function App() {
  const ingredients = ['Apples', 'Bananas', 'Ham', 'Bread', 'Bread']

  const someFunction = (selectedItem: string) => {
    console.log(`Selected ${selectedItem}`);
  }

  return (
    <>
      <SimplePost 
        content="The sky is blue" 
        user="Alex"
        likesBy={['John','Mary']}
      />
      <UseArrayExample />

      <h2>Shopping list 1:</h2>
      {/* <ShoppingList1 groceries={ingredients} selectItem={someFunction}/> */}

      <h2>Shopping list 2:</h2>
      <ShoppingList2 groceries={ingredients} selectItem={someFunction}/>
    </>
  )
}

export default App
