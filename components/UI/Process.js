import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

export default function Process(props) {
  const { process } = props;
  const boxVariant = {
    hidden: { opacity: 0, y: "50px", transition: { delay: 2 } },
    visible: { opacity: 1, y: "0px", transition: { delay: 2 } },
  };
  const [ref, inView] = useInView();
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <>
      <h3 className="text-2xl font-montserrat  md:text-3xl text-center font-semibold ">
        The Process
      </h3>
      <motion.section
        ref={ref}
        initial={"hidden"}
        variants={boxVariant}
        animate={control}
        className="process container mx-auto"
      >
        <div className="grid  md:grid-cols-2 lg:gap-16 lg:grid-cols-4">
          {process.map((p) => (
            <motion.div className="flex   items-center my-8 py-2 flex-col gap-2">
              <div className="bg-white p-1 border-gray-400  rounded-full h-56  w-56   flex items-center justify-center">
                <Image
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                  src={p.imgSrc}
                  width={200}
                  height={200}
                />
              </div>
              <h4 className="text-xl font-raleway font-semibold tracking-widest">
                {p.title}
              </h4>
              <p className="font-open_sans text-center text-gray-400 md:text-xl lg:  px-14">
                {p.mainText}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
