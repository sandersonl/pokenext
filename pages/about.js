
import Image from "next/image"

import styles from '../styles/About.module.css'

export default function About() {
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>
                Parte prática do curso de Next.js                
            </p>
            <Image
                src='/images/Pikachu.png'
                width='300'
                height='300'
                alt='Charizard'
            />
        </div>
    )
}