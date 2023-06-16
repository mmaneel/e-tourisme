import React,{useState,useEffect} from 'react'
import Favoris from '../Favoris/Favoris';

function Fav() {
    const [lieux,setLieux] =useState( [
        { id: 1, nom: 'Lieu 1', favori: false, region: 'Lieu', color: '#C1DCAB' },
        { id: 2, nom: 'Lieu 2', favori: false, region: 'Lieu', color: '#88AFDE' },
        { id: 3, nom: 'Lieu 3', favori: false, region: 'Lieu', color: '#F7A832' },
      ]);
    

    const addToFavorites = (lieu) => {
        setFavoris([...favoris, lieu]);
      };

      
    useEffect(() => {
        const favoris = lieux.filter((e) => e.favori);
        addToFavorites(favoris);
      }, [lieux, addToFavorites]);
    const [favoris, setFavoris] = useState([]);
    
  return (
    <Favoris favoris={favoris} />
  )
}

export default Fav