import styles from '../styles/pages/contacts.module.css'
import {NextSeo} from 'next-seo'
import { motion } from "framer-motion"

const Contacts =()=>{

    const SEO ={
        title: 'Contact Us | Horror Movies',
        description: 'Horror Movies Contacts Page',

        openGraph: {
        title: 'Contact Us | Horror Movies',
        description: 'Horror Movies Contacts Page',
        }
    }

    return(
        <div className={styles.container}>
            <NextSeo {...SEO} />
            <h1>Contact Us</h1>
        <motion.div 
        initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}}
        transition={{ duration: 2, easeIn:5 }}
        >
            <h4>You can find us:</h4>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.3509433449185!2d27.923627614864436!3d43.22310118815462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4546a91c34607%3A0xffdb4ec46297cc08!2sul.%20%22Petar%20Raychev%22%2036%2C%209010%20Levski%2C%20Varna!5e0!3m2!1sen!2sbg!4v1615388417374!5m2!1sen!2sbg" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
        </motion.div>
        </div>
    )
}

export default Contacts