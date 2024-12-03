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
                <h2>Por que devo doar?</h2>
                <section class={s.cards}>
                    <section class={s.card}>
                        <img src={comunidade} alt="imagem de pessoas em circulo" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section class={s.card}>
                        <img src={lendo} alt="imagem de uma pessoa lendo" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section class={s.card}>
                        <img src={transform} alt="imagem de uma mão fechada sobre um grupo de pessoas reunidas" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section class={s.card}>
                        <img src={balanca} alt="imagem de uma balança" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </section>
            </section>
        </section> 

    )
}