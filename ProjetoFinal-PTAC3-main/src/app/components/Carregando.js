import Image from "next/image";
import styles from "./spinner.module.css"

export default function Carregando (){
return (
    <div className={styles.carregando}>
    <Image width={100} height={100} alt="" src={"/carregando.svg"}/>
    </div>
);
}