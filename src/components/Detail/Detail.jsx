import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css"




const Detail = () => {

    const [character, setCharacter] = useState ({});
    const {id} = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return (
        <div className={styles.Detail}>
            <img className={styles.img} src={character?.image} alt='' /> 
            <h2>NAME | {character?.name}</h2>  
            <h2>ORIGIN | {character.origin?.name}</h2>
            <h2>STATUS | {character?.status}</h2>
            <h2>SPECIES | {character?.species}</h2>
            <h2>GENDER | {character?.gender}</h2> 
        </div>
    );
};

export default Detail;