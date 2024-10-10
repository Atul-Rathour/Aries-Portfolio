"use client";

import { cn } from "../libs/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName
  }) => {
    const wordsArray = words.map((word) => {
      return {
        ...word,
        text: word.text.split(""),
      };
    });
  
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
      if (isInView) {
        animate("span", {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        }, {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        });
      }
    }, [isInView]);
  
    const renderWords = () => {
      return (
        <motion.div ref={scope} className="inline">
          {wordsArray.map((word, idx) => {
            return (
              <div key={`word-${idx}`} className="inline-block">
                {word.text.map((char, index) => (
                  <motion.span
                    initial={{}}
                    key={`char-${index}`}
                    className={cn(`dark:text-white text-black opacity-0 hidden`, word.className)}>
                    {char}
                  </motion.span>
                ))}
                {/* Add space as text node */}
                {idx < wordsArray.length - 1 && <span>{"\u00A0"}</span>} {/* Unicode for non-breaking space */}
              </div>
            );
          })}
        </motion.div>
      );
    };
  
    return (
      <div
        className={cn(
          "text-base mobile:text-[4rem] sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
          className
        )}>
        {renderWords()}
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block rounded-sm w-[4px] h-4 mobile:h-10  md:h-6 lg:h-10 bg-[#66C2C5]",
            cursorClassName
          )}></motion.span>
      </div>
    );
  };
  
export const Heading = ({
    words,
    className,
    cursorClassName
  }) => {
    const wordsArray = words.map((word) => {
      return {
        ...word,
        text: word.text.split(""),
      };
    });
  
    const renderWords = () => {
      return (
        <div>
          {wordsArray.map((word, idx) => {
            return (
              <div key={`word-${idx}`} className="inline-block">
                {word.text.map((char, index) => (
                  <span
                    key={`char-${index}`}
                    className={cn(`dark:text-white text-black`, word.className)}>
                    {char}
                  </span>
                ))}
                {/* Add space as text node */}
                {idx < wordsArray.length - 1 && <span>{"\u00A0"}</span>} {/* Unicode for non-breaking space */}
              </div>
            );
          })}
        </div>
      );
    };
  
    return (
      <div className={cn("flex space-x-1 my-6", className)}>
        <motion.div
          className="lg:overflow-hidden mobile:overflow-hidden pt-3 pb-2"
          initial={{
            width: "0%",
          }}
          whileInView={{
            width: "fit-content",
          }}
          transition={{
            duration: 2,
            ease: "linear",
            delay: 1,
          }}>
          <div
            className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold mobile:text-[2rem]"
            style={{
              whiteSpace: "nowrap",
              lineHeight:'1rem'
            }}>
            {renderWords()}
          </div>
        </motion.div>
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "block rounded-sm w-[4px] h-4 mobile:h-10 sm:h-6 xl:h-12 bg-[#66C2C5]",
            cursorClassName
          )}></motion.span>
      </div>
    );
  };
  