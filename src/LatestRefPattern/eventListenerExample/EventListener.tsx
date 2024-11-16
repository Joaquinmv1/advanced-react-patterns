import {
  KeyboardEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";

export default function EventComponent({
  onEvent,
}: {
  onEvent: (event: KeyboardEvent) => void;
}) {
  // Guardamos el callback en una ref
  const handleEventRef = useRef(onEvent);

  // Actualizamos la ref de manera síncrona
  useLayoutEffect(() => {
    handleEventRef.current = onEvent;
  });

  useEffect(() => {
    // Wrapper estable que siempre llama a la versión actual
    const handler = (...args: unknown[]) =>
      handleEventRef.current(...(args as [KeyboardEvent<Element>]));

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []); // 👈 ¡Sin dependencias!
}

export function BadEventComponent({
  onEvent,
}: {
  onEvent: (event: KeyboardEvent) => void;
}) {
  // ❌ Este callback se recrea en cada render
  // incluso con useCallback!
  const handleEvent = useCallback(
    (event: Event) => {
      // El closure podría capturar valores obsoletos
      onEvent(event as unknown as KeyboardEvent);
    },
    [onEvent]
  ); // 👈 Dependencia que fuerza recreación

  useEffect(() => {
    window.addEventListener("keydown", handleEvent);
    return () => window.removeEventListener("keydown", handleEvent);
  }, [handleEvent]); // Se ejecuta cada vez que handleEvent cambia
}
