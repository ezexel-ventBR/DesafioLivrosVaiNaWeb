import vector from "../../assets/vector.png"
import s from "./queroDoar.module.scss"
import { useState } from "react"
import axios from "axios"

export default function QueroDoar() {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }
    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }
    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }
    const capturaImage_url = (e) => {
        setImage_url(e.target.value)
    }

    const enviarDados = async() => {
        const dadosPEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        
        await axios.post("https://python-apilivros-vnw.onrender.com/doar", dadosPEnviar)
        alert("Enviado")
        window.location.reload()
    }

    return (
        <section class={s.queroDoar}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form className={s.formDoar} onSubmit={(e) => {e.preventDefault()}}>
                <section className={s.tituloForm}>
                    <img src={vector} alt="imagem de um livro azul com interior transparente" />
                    <p>Informações do Livro</p>
                </section>
                <section className={s.informacoesDoador}>
                    <section className={s.informacao}>
                        <input type="text" placeholder="Titulo" onChange={capturaTitulo} required/>
                    </section>
                    <section className={s.informacao}>
                        <input type="text" placeholder="Categoria" onChange={capturaCategoria} required/>
                    </section>
                    <section className={s.informacao}>
                        <input type="text" placeholder="Autor" onChange={capturaAutor} required/>
                    </section>
                    <section className={s.informacao}>
                        <input type="text" placeholder="Link da Imagem" onChange={capturaImage_url} required/>
                    </section>
                </section>
                <section className={s.botaoDoar}>
                        <button onClick={enviarDados}>Doar</button>
                </section>
            </form>
        </section>
    )
}