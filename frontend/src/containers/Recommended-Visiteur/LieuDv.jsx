import React, { useState ,useEffect} from 'react'; 
import axios from 'axios';
import './LieuDv.css';
import { Link } from 'react-router-dom';

function LieuDv({ addToFavorites }) {
  const [lieux,setLieux] =useState( [
    { id: 1, nom: 'Lieu 1', favori: false, region: 'Lieu', color: '#C1DCAB' },
    { id: 2, nom: 'Lieu 2', favori: false, region: 'Lieu', color: '#88AFDE' },
    { id: 3, nom: 'Lieu 3', favori: false, region: 'Lieu', color: '#F7A832' },
  ]);

  
  useEffect(() => {
    const favoris = lieux.filter((e) => e.favori);
    addToFavorites(favoris);
  }, [lieux, addToFavorites]);

  const toggleFavorite = (id) => {
    const updatedLieux = lieux.map((e) => {
      if (e.id === id) {
        return { ...e, favori: !e.favori };
      } else {
        return e;
      }
    });

    setLieux(updatedLieux);
  };
  const [Events, setEvents] = useState([])

  const fetchannonces = async () => {
    const events = await axios.get('http://localhost:8000/api/Event');
       
        console.log(events.data)
        setEvents(events.data)



    }

    useEffect(() => {
        fetchannonces();
    }, [])


  return (
    <>
      <div className='container-DV'>
        {Events.map((e) => (
          <div className='lieu-form-DV' key={e.id}>
            <img src='./mosq.jpg' alt='photo' />
            <div className='lieu-form-R-DV'>
              <div className='lieu-name-DV'>
                <h3>{e.titre}</h3>
                <button className='icon-star' onClick={() =>  toggleFavorite (e.id)}>
                  {e.favori? (
                    <img src='./savedFull.svg' alt='saved' />
                  ) : (
                    <img src='./saved.svg' alt='unsaved' />
                  )}
                </button>
              </div>
              <span style={{ color: e.color, textDecoration: 'underline' }}>{e.date} :</span>
              <span style={{ color: e.color, textDecoration: 'underline' }}>{e.wilaya} :</span>
              <div className='dscp-actl'>
                <p>
                  <span style={{ color: e.color, paddingTop: '-5px' }}>Details de l’événement: </span>
                 {e.description}
                </p>
              </div>
              <button className='btn-show-detl'>
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LieuDv;