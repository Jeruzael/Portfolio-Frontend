import Link from 'next/link'
import style from '../css/components.module.css'
import Image from 'next/image'



export const ResponsiveContainer = ({children}) => {
    return (
        <>
            <div className={style.container}>
                {children}
            </div>
        </>
    )
}

export const ResponsiveHeader = ({children, logo}) => {
    return (
        <>
            <header>
                <div className={style.header}>
                    <div className={style.header__container}>
                        <div className={style.header__logo}>
                            <Link href={'/'}>{logo}</Link>
                        </div>
                        <div className={style.header__navs}>
                            {children}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export const ResponsiveHero = ({src, w, h, alt}) => {
    return (
        <>
            <div className={style.hero_image}>
                <Image 
                    src={src}
                    width={w}
                    height={h}
                    alt={alt}
                />
            </div>
        </>
    )
}

export const ResponsiveBody = ({children}) => {
    return (
        <>
            <div className={style.body}>
                 {children}
            </div>
        </>
    )
}

export const ResponsiveFooter = ({children}) => {
    return (
        <>
            <div className={style.footer}>
                {children}
            </div>
        </>
    )
}

export const Button = ({children, onHit}) => {
    return (
        <>
            <div className={style.button}>
                <button onClick={onHit}>
                    {children}
                </button>
            </div>
        </>
    )
}

export const Bio = ({children}) => {
    return(
        <>
            <div className={style.bio}>
                {children}
            </div>
        </>
    )
}

export const BioCont = ({children}) => {
    return(
        <>
            <div className={style.bio_textCont}>
                {children}
            </div>
        </>
    )
}

export const Deck = ({children}) => {
    return(
        <>
            <div className={style.deck}>
                {children}
            </div>
        </>
    )
}

export const DeckCard = ({children}) => {
    return(
        <>
            <div className={style.deckCard}>
                {children}
            </div>
        </>
    )
}

export const Success = ({children}) => {
    return(
        <>
            <div className={style.success}>
                {children}
            </div>
        </>
    )
}

export const Error = ({children}) => {
    return(
        <>
            <div className={style.error}>
                {children}
            </div>
        </>
    )
}

