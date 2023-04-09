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

  const onAppTouch = (event: TouchEvent) => {
    if (event.changedTouches.length === 0) return;
    setInitialTouchPosition(event.changedTouches[0].clientY);
  };

  const onAppTouchMove = (event: TouchEvent) => {
    if (event.changedTouches.length === 0) return;

    const initialPosition = initialTouchPosition();
    if (initialPosition === null) return;

    const difference = -(event.changedTouches[0].clientY - initialPosition);
    if (Math.abs(difference) < 25) return;

    difference > 0 ? onScrollDown?.(event) : onScrollUp?.(event);
    onAppInteractiveEnd();
  };

  const onAppInteractiveEnd = () => setInitialTouchPosition(null);

  return (
    <div
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
