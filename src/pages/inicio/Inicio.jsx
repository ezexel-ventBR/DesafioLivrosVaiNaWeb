import comunidade from "../../assets/comunidade.png"
import lendo from "../../assets/lendo.png"
import transform from "../../assets/transform.png"
import balanca from "../../assets/balanca.png"
import s from "./inicio.module.scss"
export default function Inicio() {
    return (
        <section class={s.inicio}>
            <section class={s.bannerLivros}>
                <h1>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
            </section>
            <section class={s.doar}>
                <h1>Por que devo doar?</h1>
                <section class={s.cards}>
                    <section class={s.card1}>
                        <img src={comunidade} alt="" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section class={s.card3}>
                        <img src={lendo} alt="" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section class={s.card3}>
                        <img src={transform} alt="" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section class={s.card4}>
                        <img src={balanca} alt="" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </section>
            </section>
        </section> 

    )
}