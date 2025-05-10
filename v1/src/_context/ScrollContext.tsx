import React, { createContext, useContext, useEffect, useState } from 'react';

type Sections = 'hero' | 'about' | 'portfolio' | 'contact';

interface IScrollContext {
  activeSection: Sections;
}

const ScrollContext = createContext<IScrollContext>({ activeSection: 'hero' });

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<Sections>('hero');

  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as Sections);
        }
      });
    };

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        activeSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => useContext(ScrollContext);
