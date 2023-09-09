import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../Redux/Actions"
import { useState } from "react";


const Favorites = (props) => {
    const dispatch = useDispatch()
    const { myFavorites } = props;
    const [aux, setAux] = useState(false);
    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(!aux);
    };
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    };


  return (
    <div>
        <select onChange={handleOrder}>
            <option value ='A'>Ascendente</option>
            <option value ='D'>Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderles">Genderles</option>
            <option value="unkown">Unkown</option>
        </select>
        {myFavorites.map((char) => {
            return (
                <Card
                    key = {char.id}
                    id={char.id}
                    name = {char.name}
                    species = {char.species}
                    gender = {char.gender}
                    image = {char.image}
                    origin = {char.origin}
                    status = {char.status}
                />
            )
        })}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);