import { List, X } from "@phosphor-icons/react"
import styles from "./Header.module.css"
import { useState } from "react"

function Header() {
  const [abrirMenu, setAbrirMenu] = useState(false)

  function handleAbrirFecharMenu() {
    if(abrirMenu === true) {
      setAbrirMenu(false)
      return
    }

    setAbrirMenu(true)
  }

  return (
    <header className={styles.header}>
        <div className={styles.mobile}>
            <div className={styles.menu}>
                <button onClick = {handleAbrirFecharMenu}>
                    {
                      abrirMenu === true ? (
                        <X size={32}/>
                    ) : (
                        <List size={32} />
                      )
                    }
                </button>

                <h1>Logo</h1>
            </div>
            <div className={`${styles.options} ${abrirMenu === true && styles.open}`}>
              <nav>
                <a href="">Home</a>
                <a href="">Resultados</a>
                <a href="">Produtos</a>
                <a href="">Login</a>
              </nav>
            </div>

        </div>
    </header>
  )
}

export default Header