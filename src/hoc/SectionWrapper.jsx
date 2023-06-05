import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

export const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className="hash-span" id="about">
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
