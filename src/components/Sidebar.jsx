import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://plus.unsplash.com/premium_photo-1663937462387-6000810badb1?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        className={styles.cover}
      />

      <div className={styles.profile}>
        <strong>Julia de Barcelos</strong>
        <span>Fotógrafa</span>
      </div>
      <footer>
        <a href="#">Editar seu perfil </a>
      </footer>
    </aside>
  )

}