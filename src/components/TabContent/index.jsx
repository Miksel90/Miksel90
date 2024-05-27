import Image from "react-bootstrap/Image";
import styles from "./TabContent.module.css";
import { useRef } from "react";
import { useIntersectionObserver } from "../Hooks/useIntersectionObserver";
import PropTypes from "prop-types";

const FadeInImage = ({ src, alt }) => {
  const ref = useRef(null);
  useIntersectionObserver([ref], styles.fadeInVisible);

  return (
    <Image
      ref={ref}
      src={src}
      fluid
      className={`${styles.fadeIn} ${styles.tabImage}`}
      alt={alt}
    />
  );
};

FadeInImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const FadeInText = ({ children, className }) => {
  const ref = useRef(null);
  useIntersectionObserver([ref], styles.fadeInVisible);

  return (
    <p ref={ref} className={`${styles.fadeIn} ${className}`}>
      {children}
    </p>
  );
};

FadeInText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FadeInText.defaultProps = {
  className: "",
};

export { FadeInImage, FadeInText };
