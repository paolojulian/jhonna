import React, {
  FunctionComponent,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface IIntersectContext {
  isInView: boolean;
}

export const IntersectContext = createContext<IIntersectContext>({
  isInView: false,
});

export const IntersectProvider: FunctionComponent<{
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}> = ({ children, threshold = 0.5, rootMargin = '-120px' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const callbackFunction: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      setIsInView((prev) => {
        if (prev === true) return true;
        return entry.isIntersecting;
      });
      // setIsInView(entry.isIntersecting);
    };

    const container = containerRef.current;
    const observer = new IntersectionObserver(callbackFunction, {
      threshold,
      rootMargin,
    });
    if (container) observer.observe(container);

    if (window.innerWidth <= 768) {
      setIsInView(true);
      observer.disconnect(); // Remove the observer if the device is mobile
    }

    return () => {
      if (container) observer.unobserve(container);
    };
  }, [threshold, rootMargin]);

  return (
    <IntersectContext.Provider value={{ isInView }}>
      <div className='w-full md:w-auto' ref={containerRef}>
        {children}
      </div>
    </IntersectContext.Provider>
  );
};

export const useIntersect = () => useContext(IntersectContext);

export default IntersectProvider;
