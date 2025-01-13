import React from "react";

export interface GreetingProps {
  message?: string;
}

export const Greeting: React.FC<GreetingProps> = ({ message = "World" }) => {
  return <div>Hello, {message}!</div>;
};

export default Greeting;
