import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css";
import './global.css';

export function App() {


  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
           <Sidebar/>
        </aside>
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est necessitatibus hic quia, ex alias nisi saepe asperiores omnis! Quaerat, totam quasi consequatur minima magnam delectus eius officiis cum. Minus!
        </main>
      </div>
    </>
  )
}

