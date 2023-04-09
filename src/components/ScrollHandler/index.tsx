import { JSXElement, createSignal } from "solid-js";

interface ScrollHandlerInterface {
  children: JSXElement;
  className?: string;
  onScrollDown?: (event: MouseEvent | TouchEvent) => void;
  onScrollUp?: (event: MouseEvent | TouchEvent) => void;
  ref?: (element: HTMLDivElement) => void;
}

function ScrollHandler({ children, className, onScrollDown, ref, onScrollUp }: ScrollHandlerInterface) {
  const [initialTouchPosition, setInitialTouchPosition] = createSignal<null | number>(null);

  const onAppMouseDown = (event: MouseEvent) => setInitialTouchPosition(event.clientY);
  const onAppMouseMove = (event: MouseEvent) => onAppInteractiveMove(event.clientY, event);

  const onAppTouch = (event: TouchEvent) => {
    if (event.changedTouches.length === 0) return;
    setInitialTouchPosition(event.changedTouches[0].clientY);
  };

  const onAppTouchMove = (event: TouchEvent) => {
    if (event.changedTouches.length === 0) return;
    onAppInteractiveMove(event.changedTouches[0].clientY, event);
  };

  const onAppInteractiveMove = (yPos: number, event: MouseEvent | TouchEvent) => {
    const initialPosition = initialTouchPosition();
    if (initialPosition === null) return;

    const difference = -(yPos - initialPosition);
    if (Math.abs(difference) < 25) return;

    difference > 0 ? onScrollDown?.(event) : onScrollUp?.(event);
    onAppInteractiveEnd();
  };

  const onAppInteractiveEnd = () => setInitialTouchPosition(null);

  return (
    <div
      onmousedown={onAppMouseDown}
      onmousemove={onAppMouseMove}
      onmouseup={onAppInteractiveEnd}
      ontouchstart={onAppTouch}
      ontouchmove={onAppTouchMove}
      ontouchend={onAppInteractiveEnd}
      ref={ref}
      class={className || ""}
    >
      {children}
    </div>
  );
}

export default ScrollHandler;
