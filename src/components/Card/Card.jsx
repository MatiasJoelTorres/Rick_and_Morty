import React, { useState, useEffect } from "react";
import styles from "./Card.module.css"
import { Link, useParams } from "react-router-dom"
import { addFav, removeFav } from "../../Redux/Actions";
import { connect } from "react-redux";


const Card = (props) => {
   const {id, name, species, gender, image, onClose, addFav, removeFav, myFavorites} = props;

   const [isFav, setIsFav] = useState(false);
   
   const { pathName } = useParams();

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav);
   }

   useEffect(() => {
      console.log('pedir info')
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, props.id]);

   return (
      <div className={styles.divCard}>
         <div className={styles.divFavorites}>
            {isFav ? (
               <button className={styles.favorites} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.favorites} onClick={handleFavorite}>🤍</button>
            )}
            {pathName !== "/favorites" && (
               <button onClick={() => onClose(id)}>X</button>
            )};
         </div>
         <div>
            <img src={image} alt='' className={styles.img} /> 
            <Link to={`/detail/${id}`} >
            <h2 className={styles.nameListItem}>{name}</h2>
         </Link>  
         </div>
         <h2 className={styles.listItem}>{species}</h2>
         <h2 className={styles.listItem}>{gender}</h2> 
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },

      removeFav: (id) => {
         dispatch(removeFav(id))
      },
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);