import { Condicional } from "./components/Conditional";
import { Ui } from "./components/Ui";

export const CompoundComponent = () => {
  return (
    <>
      <h1>React Pattern</h1>
      <Condicional />
      <Ui />
    </>
  )
}