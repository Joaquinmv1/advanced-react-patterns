import { CompoundComponent } from "./Compound-Components/CompoundComponent.tsx"
import { Hoc } from "./Hoc/Hoc.tsx"
import CompositionContext from "./context-composition-pattern/Product.tsx"

function App() {
  return (
    <>
      <h1>Patterns</h1>
      {/* <CompoundComponent />
      <Hoc /> */}
      <CompositionContext />
    </>
  )
}

export default App
