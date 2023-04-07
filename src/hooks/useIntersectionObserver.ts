import { Accessor, createEffect, createSignal, on } from "solid-js";

export function useIntersectionObserver(container: Accessor<HTMLDivElement | null>) {
  const [isVisible, setIsVisible] = createSignal(false);

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    if (entries.length !== 1) return;
    setIsVisible(entries[0].isIntersecting);
  };

  createEffect(
    on(container, () => {
      const containerRef = container();
      if (!containerRef) return;
      const observer = new IntersectionObserver(intersectionCallback);
      observer.observe(containerRef);
    })
  );

  return isVisible;
}
