import facebook from "../../assets/facebookIcon.png"
import twitter from "../../assets/twitterIcon.png"
import youtube from "../../assets/youtubeIcon.png"
import linkedin from "../../assets/linkedinIcon.png"
import instagram from "../../assets/instagramIcon.png"
import s from "./footer.module.scss"
export default function Footer() {
    return(
        <footer>
            <section class={s.contato}>
                <p>4002-8922</p>
                <section className={s.redesSociais}>
                    <img src={facebook} alt="icone do facebook" />
                    <img src={twitter} alt="icone do twitter" />
                    <img src={youtube} alt="icone do youtube" />
                    <img src={linkedin} alt="icone do linkedin" />
                    <img src={instagram} alt="icone do instagram" />
                </section>
            </section>
            <section class={s.direitosAutorais}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}