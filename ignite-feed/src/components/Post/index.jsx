import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/felipebrenner.png" />

          <div className={styles.authorInfo}>
            <strong>Felipe Brenner</strong>
            <span>React Developer</span>
          </div>
        </div>

        <time title="11 de Mairo às 11h13" dateTime="2022-05-11">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Teste</p>
        <p>de</p>
        <p>Parágrafo</p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#ignite</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
