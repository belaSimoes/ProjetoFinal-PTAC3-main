import Image from "next/image";
import styles from "../podutosolo.module.css";

export default async function Produtos({ params }) {
    const response = await fetch("http://localhost:3000/api/" + params.id)
    const data = await response.json()

    return (
        <main className={styles.listaProdutos}>
            <div className={styles.cartaoProduto}>
                <div className={styles.imagemContainer}>
                    <Image className={styles.imagemProduto} width={300} height={300} src={data.imagem} />
                </div>
                <div className={styles.detalhesProduto}>
                    <p className={styles.nomeProduto}>{data.nome}</p>
                    <p className={styles.serieProduto}>Criador: {data.criador}</p>
                    <p className={styles.tipoProduto}>Lançamento: {data.anoLancamento}</p>
                    <p className={styles.precoProduto}>Gênero: {data.genero}</p>
                </div>
            </div>
        </main>
    )
}