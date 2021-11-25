
import { motion } from "framer-motion";
import { leavesContainer } from "../variants";
import Leaf from './Leaf'

const LeavesContainer = () => {
    return (
        <motion.div variants={leavesContainer} initial="initial" animate="animate">
          <Leaf animationSpeed={1.8} className="leafWrapper-1" imageUrl="/assets/dragon-left.png" />
          <Leaf animationSpeed={1.6} className="leafWrapper-2" imageUrl="/assets/dragon-right.png" />\
        </motion.div>
    )
}

export default LeavesContainer;
