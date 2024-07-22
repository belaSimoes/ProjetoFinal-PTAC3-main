"use client"
import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from "next/link";
import Carregando from './Carregando';
import Erro from './Erro';
import styles from './main.module.css'

const Main = () => {
    const [listComplete, setComplete] = useState ([]);
    const [ isError, setIsError ] = useState(false);
  
    useEffect( ()=> { 
      const getProduct = async() => {
        try{
        const response = await fetch('/api/');
        const produtos = await response.json();
        setComplete(produtos);
      }
      catch{
        setIsError(true);
      }
    }
      getProduct();
    },[]);
  
  
    if(isError == true){
        return <Error/>
      }
      
      if( listComplete[0] == null) {
        return (
        <Carregando/>
        );
      }
  
  
      return (
        <main className={styles.listaProdutos}>
    
          {listComplete.map((produtos) => (
    
            <div className={styles.cartaoProduto}>
              <Link href={"/produtos/" + produtos.id} key={produtos.id} className={styles.a}>
    
                <div className={styles.imagemContainer}>
                  <Image className={styles.imagemProduto} width={150} height={150} src={produtos.imagem} alt={produtos.produtos} />
                </div>
    
                <div className={styles.detalhesProduto}>
                  <p className={styles.nomeProduto}>{produtos.nome}</p>
                  <p className={styles.serieProduto}>{produtos.criador}</p>
                  <p className={styles.precoProduto}>R${produtos.anoLancamento}</p>
                  <p className={styles.precoProduto}>R${produtos.genero}</p>
                </div>
    
              </Link>
            </div>
          ))}
        </main>
      );
    };
    
    export default Main;