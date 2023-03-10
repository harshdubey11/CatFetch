import React from 'react'
import Styles from './Footer.module.scss';
function Footer() {
  return (
    <div className={Styles.container}>
        Made with 💓 by <a href='https://harshdubey11.github.io/Portfolio'> Harsh </a> | Service by <a href='https://cataas.com/doc.html'> Cataas </a>
    </div>
  )
}

export default Footer