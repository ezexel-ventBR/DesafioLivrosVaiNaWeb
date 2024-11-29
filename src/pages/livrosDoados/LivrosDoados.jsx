import s from "./livrosDoados.module.scss"
import Livro from "../../assets/livro.png"
export default function LivrosDoados() {
    return (
        <section class={s.livrosDoados}>
            <section>
                <section>
                    <img src={Livro} alt="Imagem do livro o protagonista" />
                </section>
            </section>
        </section>
    )
}