import s from "./livrosDoados.module.scss"
import Livro from "../../assets/livro.png"
import { useState, useEffect } from "react"
import axios from "axios"

export default function LivrosDoados() {

    const [livros, setLivros] = useState([])

    const puxarLivros = async() => {
        const resposta = await axios.get("https://python-apilivros-vnw.onrender.com/livros")
        setLivros(resposta.data)
    }

    useEffect(() => {
        puxarLivros()
    },[]) 

    return (
        <section class={s.livrosDoados}>
            <h1>Livros Doados</h1>
            <section className={s.containerCards}>
                {livros.map((item) => (
                <section key={item.id} className={s.cardLivro1}>
                    <img src={item.image_url} alt={"Imagem da capa do livro "} />
                    <div>
                        <p><b>{item.titulo}</b></p>
                        <p>{item.autor}</p>
                        <p>{item.categoria}</p>
                    </div>
                </section>
                ))}
            </section>
        </section>
    )
}