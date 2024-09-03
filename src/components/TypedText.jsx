/* eslint-disable no-unused-vars */
// TypedText.jsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "develop web and mobile applications",
        "am a problem solver",
        "develop tools using ai and ml",
        "push my creative bounds",
        "am a filmmaker",
        "develop full-stack software",
        "am a creative photographer",
        "am a designer",
        "am a founder and entrepreneur",
      ],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1750,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el}></span>;
};

export default TypedText;
