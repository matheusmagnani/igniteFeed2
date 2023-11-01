import { format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'



export function Post({author, publishedAt, content}) {

  const [comments, setComments] = useState([])

  const [newCommentsChange, setNewCommentsChange] = useState("")

  const publishedDateFormatted = format(publishedAt," d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,
    {locale: ptBR})

  function handleNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentsChange])
    
    setNewCommentsChange("")
  }  

  function handleNewCommentChange() {
    setNewCommentsChange(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentWithoutDeleteOne = comments.filter(comment =>{
      return comment !== commentToDelete
    })

    setComments(commentWithoutDeleteOne)
  }

  const isNewCommentEmpty = newCommentsChange.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarURL} alt="" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time dateTime={publishedDateFormatted}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {
          content.map(line => {
              return(
                <p key={line.content}>{line.content}</p>
              )
          })
        }
      </div>
      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          value={newCommentsChange}
          
        />
        <footer>
          <button
            disabled={isNewCommentEmpty}
            type='submit'
          >Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
            return (
              <Comment 
                onDeleteComment={deleteComment}
                key={comment}
                content={comment}/>
            )
        })}
      </div>
      
    </article>
  )
}