import React from "react";

interface Props {
  children: React.ReactNode;
  value: string;
  match?: string
}

const Switch = ({ value, children }: Props) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { value })
  })
}

const Case = ({ match, value, children }: Props) => {
  return match === value ? <h2>{children}</h2> : <></>
}

const Default = ({ children }: { children: React.ReactNode }) => {
  return children;
}

export const Condicional = () => {
  return (
    <>
      <Switch value='admin'>
        <Case match='user'>User</Case>
        <Case match='admin'>Admin</Case>
        <Default>Anonymous</Default>
      </Switch>
    </>
  )
}