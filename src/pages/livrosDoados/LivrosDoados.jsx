import s from "./livrosDoados.module.scss"
import Livro from "../../assets/livro.png"
export default function LivrosDoados() {
    return (
        <section class={s.livrosDoados}>
            <section className={s.containerCards}>
                <section className={s.cardLivro1}>
                    <img src={Livro} alt="Imagem do livro o protagonista" />
                    <div>
                        <p>O protagonista</p>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
            </section>
        </section>
    )
}