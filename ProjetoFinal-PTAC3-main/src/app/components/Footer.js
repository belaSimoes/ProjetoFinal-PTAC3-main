import styles from "./footer.module.css";

export default function Footer(){

    return(
        <footer className={styles.rodape}>   
        <ul>
            <li>
                <a href="https://mubi.com/pt/br">
                <p>mubi</p>
                </a>
            </li>
        </ul>
        <p>© 2007 rodape bela simões</p>
        </footer>
    )};