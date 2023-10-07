import axios from "axios"
import SearchBar from "../SearchBar/SearchBar.jsx"
import styles from "./nav.module.css"
import { Link } from "react-router-dom"

const nav = (props) => {

  const handleRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    axios(`https://rickandmortyapi.com/api/character/${randomId}`)
    .then(({data}) => {
      if(data.name) {
        props.onSearch(randomId);
      }
    })
  }

  const {onSearch} = (props)
  return (
    <div className={styles.nav} >
      <button className={styles.button}>
        <Link  to="/about">About</Link>
      </button>
      <button className={styles.button}>
        <Link  to="/home">Home</Link>
      </button>
      <button className={styles.button}>
        <Link  to="/favorites">Favorites</Link>
      </button>
        <SearchBar onSearch={onSearch}/>
      <button className={styles.button} onClick={handleRandomCharacter}>ADD Random</button>
    </div>
  )
}

export default nav;