import React from 'react';
import styles from './styles.module.css'

function Footer () {
  const handleClick = () => {
    window.scrollTo(0,0)
  }

  return (
    <footer>
      <p>Back-end e Front-end feitos por <a target="blank" href="https://www.linkedin.com/in/lucianoog">Luciano Oliveira</a></p>
      <button type='button' className={styles.top} onClick={handleClick}>Voltar ao topo</button>
    </footer>
  )
}

export default Footer;