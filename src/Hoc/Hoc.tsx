import React, { useEffect } from "react"

const withLogOnMount = (Component: React.ComponentType) => {
  const EnhancedComponent = () => {
    useEffect(() => {
      console.log('Component mounted');

    }, [])
    return <Component />
  }

  return EnhancedComponent
}

const LogOnMount = () => {

  return <div>My component</div>
}

const MyComponent = withLogOnMount(LogOnMount)

export const Hoc = () => {
  return (
    <div>
      <MyComponent />
    </div>
  )
}