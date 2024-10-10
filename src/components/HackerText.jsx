import React,{useState, useEffect} from 'react'

const HackerText = ({text}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const speed = 50; // Speed of shuffling (lower is faster)
    const revealDelay = 100; // Delay before revealing each letter
  
    useEffect(() => {
      if (currentIndex < text.length) {
        const interval = setInterval(() => {
          setDisplayedText((prev) =>
            text
              .split('')
              .map((char, index) => {
                if (index < currentIndex) return text[index];
                return characters.charAt(Math.floor(Math.random() * characters.length));
              })
              .join('')
          );
        }, speed);
  
        const timeout = setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          clearInterval(interval);
        }, revealDelay);
  
        return () => {
          clearInterval(interval);
          clearTimeout(timeout);
        };
      } else {
        // Ensure the text is completely revealed
        setDisplayedText(text);
      }
    }, [currentIndex, text]);
  
    return <span>{displayedText}</span>;
}

export default HackerText