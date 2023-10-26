import styles from "./Sidebar.module.css";

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://plus.unsplash.com/premium_photo-1663937462387-6000810badb1?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img className={styles.avatar}src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ce209a1fea899b8346a8117da7c201dc~c5_100x100.jpeg?x-expires=1698501600&x-signature=ExKf2ZMAq4s8S0ZeNQJO%2BfnCnT8%3D" alt="" />
        <strong>Julia de Barcelos</strong>
        <span>Fotógrafa</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil </a>
      </footer>
    </aside>
  )

}