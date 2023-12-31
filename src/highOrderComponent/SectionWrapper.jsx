import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
function HOC(props) {

  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding}  relative z-0`}
    >
      <span className='' id={idName}>
      </span>
      <Component {...props}/>
    </motion.section>
  );
};

export default SectionWrapper; 