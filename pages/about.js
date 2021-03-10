import styles from '../styles/pages/about.module.css'
import {NextSeo} from 'next-seo'
import {motion} from 'framer-motion'


const About =()=>{

    const SEO ={
        title: 'About Us | Horror Movies',
        description: 'Horror Movies About Page',

        openGraph: {
        title: 'About Us | Horror Movies',
        description: 'Horror Movies About Page',
        }
    }

    const postVariants = {
        initial: { scale: 0.96, y: 30, opacity: 0 },
        enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
        exit: {
          scale: 0.6,
          y: 100,
          opacity: 0,
          transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
        }
      };

    return(
       <motion.div className={styles.container} initial="initial" animate="enter" exit="exit" postVariants={{ exit: { transition: { staggerChildren: 0.1 } } }}>
        <NextSeo {...SEO} />
        <h1>About us</h1>
            <div>
                <h4>Why do we use it?</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
        </motion.div>   
    )
}

export default About