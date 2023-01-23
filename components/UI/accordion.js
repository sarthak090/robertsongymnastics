import { useState } from "react";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { MinusIcon } from "../Icons/minus-icon";
import { PlusIcon } from "../Icons/plus-icon";
import { heightCollapse } from "../../lib/motion/height-collapse";

// type CollapseProps = {
//   i: number;
//   title: string;
//   content: string;
//   translatorNS: string;
//   expanded: number;
//   setExpanded: any;
// };

const Collapse = ({ i, expanded, setExpanded, title, content }) => {
  const isOpen = i === expanded;
  // active state style
  const activeClass = isOpen ? "shadow-sm" : "";

  return (
    <div
      className={cn(
        "border border-solid border-border-200 bg-light rounded mb-2.5 transition-all hover:border-border-base",
        activeClass
      )}
    >
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="py-4 px-5 rounded cursor-pointer flex items-center justify-between transition-colors"
      >
        <h2 className=" uppercase text-xl font-raleway md:text-base font-semibold leading-relaxed text-heading">
          {title}
        </h2>
        {isOpen ? (
          <MinusIcon
            className="flex-shrink-0 stroke-2"
            width={18}
            height={18}
          />
        ) : (
          <PlusIcon className="flex-shrink-0 stroke-2" width={20} height={20} />
        )}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="from"
            animate="to"
            exit="from"
            variants={heightCollapse()}
          >
            <div className=" font-open_sans md:pt-1 pb-4 px-5 try leading-7 text-sm md:text-base md:leading-loose text-body-dark">
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// type AccordionProps = {
//   translatorNS: string;
//   items: {
//     title: string;
//     content: string;
//   }[];
// };

const Accordion = ({ items, translatorNS }) => {
  const [expanded, setExpanded] = useState(0);
  return (
    <>
      {items.map(({ title, content }, index) => (
        <Collapse
          i={index}
          key={title}
          title={title}
          content={content}
          expanded={expanded}
          setExpanded={setExpanded}
          translatorNS={translatorNS}
        />
      ))}
    </>
  );
};

export default Accordion;
