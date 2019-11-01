import React, { useRef, useState } from "react";
import styles from "./sarcasm.module.scss";

const setTextUpperOrLowerCase = input => {
  return chooseBetweenOneOrZero() ? input.toUpperCase() : input.toLowerCase();
};

const chooseBetweenOneOrZero = () => {
  return Math.round(Math.random());
};

const Sarcasm = () => {
  let copyTimer;

  const [textAreaValue, setTextAreaValue] = useState("");
  const textAreaRef = useRef(null);

  const [copied, setCopied] = useState(false);

  const textOnChange = e => {
    const { value } = e.target;

    // Check if backspaced
    if (value.length === textAreaValue.length - 1) {
      setTextAreaValue(textAreaValue.slice(0, -1));
    } else {
      const newCharacter = setTextUpperOrLowerCase(value.slice(-1));
      setTextAreaValue(textAreaValue + newCharacter);
    }
  };

  const clearText = () => {
    setTextAreaValue("");
  };

  const copyText = () => {
    if (!copied) {
      textAreaRef.current.select();
      document.execCommand("copy");

      setCopied(true);

      copyTimer = setTimeout(() => {
        setCopied(false);
        clearTimeout(copyTimer);
      }, 1500);
    }
  };

  return (
    <main className={styles.sarcasm}>
      <div className={styles.sarcasm__container}>
        <h1 className={styles.sarcasm__header}>SaRCasM</h1>
        <p className={styles.sarcasm__description}>
          This converts your text input to have a random alternating case to
          mimic sarcastic text. Type in the textarea below and see some magic.
          <br />
          (Please note that the design of this webpage is intenionally bad. Yes,
          I did spell that wrong)
        </p>
        <div className={styles.sarcasm__textfield}>
          <div className={styles.sarcasm__actions}>
            <button className={styles.sarcasm__button} onClick={clearText}>
              Clear Text
            </button>
            <button className={styles.sarcasm__button} onClick={copyText}>
              {copied ? "Copied" : "Copy Text"}
            </button>
          </div>
          <textarea
            ref={textAreaRef}
            type="text"
            className={styles.sarcasm__textarea}
            value={textAreaValue}
            onChange={textOnChange}
          />
        </div>
      </div>
    </main>
  );
};

export default Sarcasm;
