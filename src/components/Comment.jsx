import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";


export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment( ) {
    onDeleteComment(content)
  }

  function handleLikeCount( ) {
    setLikeCount(likeCount +1)
    
  }

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/50590091?v=4"/>

        <div className={ styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Gabriel Moura</strong>
                <time dateTime="2023-10-26 11:50:00">Cerca de 1h atrás</time>
              </div>
              <button onClick={handleDeleteComment} className={styles.trash} title="Deletar comentário">
                <Trash size={24}/>
              </button>
            </header>
            <p>{content}</p>

          </div>
          <footer>
            <button onClick={handleLikeCount}>
              <ThumbsUp/>
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
    </div>
  )
}