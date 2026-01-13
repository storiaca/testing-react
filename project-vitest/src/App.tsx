import UseArrayExample from "./components/Hooks/UseArrayExample";
import { SimplePost } from "./components/SimplePost";

function App() {

  return (
    <>
      <SimplePost 
        content="The sky is blue" 
        user="Alex"
        likesBy={['John','Mary']}
      />
      <UseArrayExample />
    </>
  )
}

export default App
