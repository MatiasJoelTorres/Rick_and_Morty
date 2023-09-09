import { useState } from "react";
import styles from './Search.module.css'


const SearchBar = (props) => {
   
   const [id, setId] = useState('')
   const handleChange = (e) => {//e es igual que poner event.
      setId(e.target.value);
      console.log(id)
   }
   const {onSearch} = props;
   return (
      <div className={styles.searchBar}> 
          <input className={styles.agregar} type='search' placeholder="Escribe el ID..." onChange={handleChange} value={id}/> {/*onChange indica que la cada vez que haya un cambio se ejecuta la funcion handleChange */}
         <button className={styles.agregar} onClick={() => onSearch(id)}>Add</button> 
      </div>
   );
}

export default SearchBar;