import { SimplePost } from "./components/SimplePost";

function App() {

  return (
    <>
      <SimplePost 
        content="The sky is blue" 
        user="Alex"
        likesBy={['John','Mary']}
      />
    </>
  )
}

export default App
