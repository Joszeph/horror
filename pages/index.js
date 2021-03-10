import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import Image from 'next/image'

export default function Home() {

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <div >
    <div className={styles.container}>
      <motion.h1 initial="hidden" animate="visible" variants={variants} transition={{duration:1}}>
        Home page
      </motion.h1>
      <motion.div className={styles.animatedObj}
        initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}}
        transition={{ duration: 2, easeIn:5 }}
        >
      <h4>Why do we use it?</h4>
      <div className={styles.animatedObjInner}>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      <Image src="/jaws.jpg" alt="jaws" width={200} height={300}/>
      </div>
      </motion.div>
      <motion.button className={styles.btn}
        whileHover={{scale:1.1, textShadow: "0px 0px 3px black" }}
      >Press me</motion.button>
      <motion.button className={styles.btn}
        whileHover={{scale:1.1}}
      
      >Find more</motion.button>
    </div>
    <Image src="/jaws.jpg" alt="jaws" width={200} height={300}/>
    <Image src="/jaws-3d.jpg" alt="jaws" width={200} height={300}/>
    <Image src="/cat.jpg" alt="jaws" width={200} height={300}/>



    <motion.div className={styles.animatedObj}
        initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}}
        transition={{ duration: 2, easeIn:5 }}
        >
      <h4>Why do we use it?</h4>
      <div className={styles.animatedObjInner}>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      <Image src="/jaws.jpg" alt="jaws" width={200} height={300}/>
      </div>
      </motion.div>



      <motion.div className={styles.animatedObj}
        initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}}
        transition={{ duration: 2, easeIn:5 }}
        >
      <h4>Why do we use it?</h4>
      <div className={styles.animatedObjInner}>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      <Image src="/jaws.jpg" alt="jaws" width={200} height={300}/>
      </div>
      </motion.div>



      <motion.div className={styles.animatedObj}
        initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}}
        transition={{ duration: 2, easeIn:5 }}
        >
      <h4>Why do we use it?</h4>
      <div className={styles.animatedObjInner}>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      <Image src="/jaws.jpg" alt="jaws" width={200} height={300}/>
      </div>
      </motion.div>



      <motion.div className={styles.animatedObj}
        initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}}
        transition={{ duration: 2, easeIn:5 }}
        >
      <h4>Why do we use it?</h4>
      <div className={styles.animatedObjInner}>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      <Image src="/jaws.jpg" alt="jaws" width={200} height={300}/>
      </div>
      </motion.div>



      <motion.div className={styles.animatedObj}
        initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}}
        transition={{ duration: 2, easeIn:5 }}
        >
      <h4>Why do we use it?</h4>
      <div className={styles.animatedObjInner}>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      <Image src="/jaws.jpg" alt="jaws" width={200} height={300}/>
      </div>
      </motion.div>
    </div>

  )
}
