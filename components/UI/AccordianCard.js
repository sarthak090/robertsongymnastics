import { useState } from "react";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { MinusIcon } from "../Icons/minus-icon";
import { PlusIcon } from "../Icons/minus-icon";
import { heightCollapse } from "../../lib/motion/height-collapse";

const Collapse = ({ i, expanded, setExpanded, title, content }) => {
  const isOpen = i === expanded;
  // active state style
  const activeClass = isOpen ? "shadow-sm text-blue-900" : "";

  return (
    <div
      className={cn(
        " border-b-2   bg-light rounded mb-2.5 transition-all hover:border-border-base",
        activeClass
      )}
    >
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="py-4 px-5 rounded cursor-pointer flex items-center justify-between transition-colors"
      >
        <h2 className="text-xl font-raleway tracking-widest md:text-xl font-semibold leading-relaxed text-heading">
          {title}
        </h2>
        {isOpen ? (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="flex-shrink-0 stroke-2"
            width={18}
            height={18}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
        ) : (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="flex-shrink-0 stroke-2"
            width={20}
            height={20}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
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
            <div className="md:pt-1 flex flex-col gap-8 pb-4 px-5 leading-7 text-sm md:text-base md:leading-loose text-body-dark">
              {content.map((card) => (
                <div className="py-16 text-xl text-center flex flex-col gap-8 px-8 text-white font-semibold bg-green-600">
                  <h4
                    className=" text-3xl font-montserrat
                  "
                  >
                    {card.title}
                  </h4>
                  <p>{card.date}</p>
                  {card.date2 && <p>{card.date2}</p>}
                  <p>{card.location}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AccordionCard = ({ items, translatorNS }) => {
  const [expanded, setExpanded] = useState(0);
  return (
    <>
      {items.map(({ title, cards }, index) => (
        <Collapse
          i={index}
          key={title}
          title={title}
          content={cards}
          expanded={expanded}
          setExpanded={setExpanded}
          translatorNS={translatorNS}
        />
      ))}
    </>
  );
};

export default AccordionCard;
