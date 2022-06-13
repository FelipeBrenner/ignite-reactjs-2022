import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/felipebrenner.png",
      name: "Felipe Brenner",
      role: "React Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 felipe.brenner/doctorcare" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2022-06-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/gabriellmilani.png",
      name: "Gabriel Milani",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ",
      },
      {
        type: "paragraph",
        content: "👉 gabrielmilani.design ",
      },

      { type: "link", content: "#userexperience" },
    ],
    publishedAt: new Date("2022-06-12 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
