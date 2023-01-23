import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

export default function HeaderLogo(props) {
  const boxVariant = {
    visible: { width: "48px", transition: { delay: 1 } },
    hidden: { width: "0px", transition: { delay: 1 } },
  };
  const [ref, inView] = useInView();
  const control = useAnimation();
  const router = useRouter();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={"hidden"}
        variants={boxVariant}
        animate={control}
        // animate={{ width: "48px", transition: { delay: 2 } }}
        className={`w-8 h-1 ${props.isCenter && "bg-green-800"} ${
          router.asPath === "/" ? "bg-white" : "bg-blue-900"
        } `}
      ></motion.div>
      <motion.div
        ref={ref}
        initial={{ y: "25px" }}
        animate={{ y: "0px", transition: { delay: 1.3 } }}
      >
        <Image
          src={
            props.isCenter
              ? "/imgs/green-logo-robertson.png"
              : "/imgs/blue-logo-robertson2.png"
          }
          width={120}
          height={50}
        />
      </motion.div>
      <motion.div
        ref={ref}
        initial={"hidden"}
        variants={boxVariant}
        animate={control}
        // animate={{ width: "48px", transition: { delay: 2 } }}
        className={`w-8 h-1  ${props.isCenter && "bg-green-800"} ${
          router.asPath === "/" ? "bg-white" : "bg-blue-900"
        } `}
      ></motion.div>
    </>
  );
}
