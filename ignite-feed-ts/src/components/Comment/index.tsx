import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((oldState) => oldState + 1);
  }

  const isLikeZero = likeCount === 0;

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/felipebrenner.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Brenner</strong>
              <time title="11 de Maio às 17:23h" dateTime="2022-05-11 17:23:03">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir {!isLikeZero && <span>{likeCount}</span>}
          </button>
        </footer>
      </div>
    </div>
  );
}
