import vector from "../../assets/vector.png"
import s from "./QueroDoar.module.scss"
export default function QueroDoar() {
    return (
        <section class={s.queroDoar}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form className={s.formDoar}>
                <section className={s.tituloForm}>
                    <img src={vector} alt="imagem de um livro azul com interior transparente" />
                    <p>Informações do Livro</p>
                </section>
                <section className={s.informacoesDoador}>
                    <section className={s.informacao}>
                        <input type="text" placeholder="Titulo"/>
                    </section>
                    <section className={s.informacao}>
                        <input type="text" placeholder="Categoria"/>
                    </section>
                    <section className={s.informacao}>
                        <input type="text" placeholder="Autor"/>
                    </section>
                    <section className={s.informacao}>
                        <input type="text" placeholder="Link da Imagem"/>
                    </section>
                </section>
                <section className={s.botaoDoar}>
                        <button>Doar</button>
                </section>
            </form>
        </section>
    )
}