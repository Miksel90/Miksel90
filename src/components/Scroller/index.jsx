import { useEffect, useState, cloneElement } from "react";
import PropTypes from "prop-types";
import styles from "./Scroller.module.css";

const Scroller = ({ children }) => {
  const [isDuplicated, setIsDuplicated] = useState(false);

  const handleResize = (scrollers) => {
    const shouldDuplicate = window.innerWidth > 768;
    if (shouldDuplicate !== isDuplicated) {
      shouldDuplicate ? addAnimation(scrollers) : removeAnimation(scrollers);
      setIsDuplicated(shouldDuplicate);
    }
  };

  const addAnimation = (scrollers) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
      const scrollerInner = scroller.querySelector(
        `.${styles.scroller__inner}`
      );
      if (!scrollerInner.getAttribute("data-duplicated")) {
        duplicateContent(scrollerInner);
        scrollerInner.setAttribute("data-duplicated", "true");
      }
    });
  };

  const removeAnimation = (scrollers) => {
    scrollers.forEach((scroller) => {
      scroller.removeAttribute("data-animated");
      const scrollerInner = scroller.querySelector(
        `.${styles.scroller__inner}`
      );
      if (scrollerInner.getAttribute("data-duplicated")) {
        removeDuplicatedContent(scrollerInner);
        scrollerInner.removeAttribute("data-duplicated");
      }
    });
  };

  const duplicateContent = (scrollerInner) => {
    const children = Array.from(scrollerInner.children);
    children.forEach((child) => {
      const duplicatedChild = child.cloneNode(true);
      duplicatedChild.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedChild);
    });
  };

  const removeDuplicatedContent = (scrollerInner) => {
    const originalLength = scrollerInner.children.length / 2;
    for (let i = scrollerInner.children.length - 1; i >= originalLength; i--) {
      scrollerInner.removeChild(scrollerInner.children[i]);
    }
  };

  useEffect(() => {
    const scrollers = document.querySelectorAll(`.${styles.scroller}`);
    handleResize(scrollers);

    window.addEventListener("resize", () => handleResize(scrollers));
    return () =>
      window.removeEventListener("resize", () => handleResize(scrollers));
  }, [isDuplicated]);

  return (
    <div className={styles.scroller} data-speed="slow">
      <div className={styles.scroller__inner}>
        {cloneElement(children, {
          className: `${children.props.className} ${styles.scroller__content}`,
        })}
      </div>
    </div>
  );
};

Scroller.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Scroller;
