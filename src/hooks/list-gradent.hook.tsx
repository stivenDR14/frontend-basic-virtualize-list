import { useCallback, useEffect, useState } from "react";

export const useListGradient = (): {
  showTopGradient: boolean;
  showBottomGradient: boolean;
} => {
  const [showTopGradient, setShowTopGradient] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(true);

  const updateGradients = useCallback((container: HTMLDivElement) => {
    const { scrollTop, scrollHeight, clientHeight } = container;
    setShowTopGradient(scrollTop > 10);
    setShowBottomGradient(scrollTop + clientHeight < scrollHeight - 10);
  }, []);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      if (event.target instanceof HTMLDivElement) {
        updateGradients(event.target);
      }
    };

    const scrollListenerCallback = (node: HTMLDivElement | null) => {
      if (node) {
        updateGradients(node);
        node.addEventListener("scroll", handleScroll);
      }
    };

    const observer = new MutationObserver(() => {
      const containerNode = document.querySelector(".virtualized-container");
      if (containerNode instanceof HTMLDivElement) {
        scrollListenerCallback(containerNode);
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      const containerNode = document.querySelector(".virtualized-container");
      if (containerNode instanceof HTMLDivElement) {
        containerNode.removeEventListener("scroll", handleScroll);
      }
    };
  }, [updateGradients]);

  return { showTopGradient, showBottomGradient };
};
