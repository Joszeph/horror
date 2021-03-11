import styles from '../styles/pages/horror-list.module.css'
import {NextSeo} from 'next-seo'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const HorrorList =({movies})=>{

    //const {API_URL} = process.env
    const apiUrl = 'https://strapi-next-movie-demo.herokuapp.com'

    const SEO ={
        title: 'Horror List | Horror Movies',
        description: 'Horror Movies About List',

        openGraph: {
        title: 'Horror List | Horror Movies',
        description: 'Horror Movies About List',
        }
    }

    return(
        <>
        <div className={styles.title}>
            <h1>Horror list:</h1> 
        </div>
        <div className={styles.container}>
        <NextSeo {...SEO} />
        <section className={styles.cardsList}>
            {movies.map(movie=>(
                <div className={styles.card}>
                <img src={movie.Poster.url} alt={movie.Title} className={styles.image} width={450}/>
                <div className={styles.overlay}>
                <Link href={`/movies/${movie.genre.slug}/${movie.slug}`} >
                <a>More...</a>
                </Link> 
                </div>
                </div>
            ))}
        </section>
        </div>
        </>
    )
}

export async function getServerSideProps(){
    //const {API_URL} = process.env
    const apiUrl = 'https://strapi-next-movie-demo.herokuapp.com'
    const res = await fetch(`${apiUrl}/movies`)
    const data = await res.json()

    return{
        props:{
            movies:data
        }
    }
}

export default HorrorList