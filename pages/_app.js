import Layout from '../components/Layout'
import '../styles/globals.css'
import {DefaultSeo} from 'next-seo'
import SEO from '../next-seo.config'
import{motion} from 'framer-motion'


function MyApp({ Component, pageProps, router }) {
  return(
    <div>
      <DefaultSeo {...SEO} />
      <Layout>
        <motion.main key={router.route} 
        initial="pageInitial" animate="pageAnimate" variants={{
          pageInitial:{
            opacity:0,
            y:0
          },
          pageAnimate:{
            opacity:1,
            transition: 'ease-in-out',
            y:10
          }
        }}>
          <Component {...pageProps} />
        </motion.main> 
      </Layout>
    </div>
    
  ) 
}

export default MyApp
