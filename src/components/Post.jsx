import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/102997685?v=4" alt="" />
          <div className={styles.authorInfo}>
            <strong>Matheus Magnani</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dataTime="2023-10-26 11:50:00">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          

          <a href="#">#novoprojeto #nlw #rocketseat</a>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      
    </article>
  )
}