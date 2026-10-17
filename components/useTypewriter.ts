"use client";

import { useEffect, useState } from "react";

type Options = {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export function useTypewriter(words: string[], options: Options = {}) {
  const { typingSpeed = 90, deletingSpeed = 50, pauseDuration = 1800 } = options;
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    if (!deleting && text === currentWord) {
      const pause = setTimeout(() => setDeleting(true), pauseDuration);
      return () => clearTimeout(pause);
    }

    if (deleting && text === "") {
      // This effect re-runs on a timer (see the setTimeout below) to drive the
      // typing/deleting animation step by step — the setState calls here advance
      // that animation rather than syncing from an external source.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const step = setTimeout(
      () => {
        setText((prev) =>
          deleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1)
        );
      },
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(step);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}
