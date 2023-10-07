import Card from '../Card/Card';
import styles from "./Cards.module.css";

const Cards = ({characters, onClose}) => {
   return <div>
      <ul className = {styles.unorderedList}>
      {
         characters.map(({id, name, species, gender, image, origin, status})=> 
         <Card
            key = {id}
            id={id}
            name = {name}
            species = {species}
            gender = {gender}
            image = {image}
            origin = {origin}
            status = {status}
            onClose = {onClose}
         />)
      }
      </ul>
   </div>;
}

export default Cards;