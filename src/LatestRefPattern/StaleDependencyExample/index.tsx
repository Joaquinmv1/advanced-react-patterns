import { useLayoutEffect, useRef } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const BadMessageComponent = ({ message }: { message: string }) => {
  const sendMessage = async () => {
    await sleep(1000);
    console.log(message);
  };

  return (
    <div>
      <h1>Mensaje desactualizado: {message}</h1>
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export const MessageComponent = ({ message }: { message: string }) => {
  const messageRef = useRef(message);

  useLayoutEffect(() => {
    messageRef.current = message;
  }, [message]);

  const sendMessage = async () => {
    await sleep(1000);
    console.log(messageRef.current);
  };

  return (
    <div>
      <h1>Mensaje: {messageRef.current}</h1>
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};
