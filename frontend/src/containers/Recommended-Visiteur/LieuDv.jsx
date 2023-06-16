import React, { useState ,useEffect} from 'react';
import './LieuDv.css';
import StarIcon from '@mui/icons-material/Star';
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
 


  return (
    <>
      <div className='container-DV'>
        {lieux.map((e) => (
          <div className='lieu-form-DV' key={e.id}>
            <img src='./mosq.jpg' alt='photo' />
            <div className='lieu-form-R-DV'>
              <div className='lieu-name-DV'>
                <h3>{e.nom}</h3>
                <button className='icon-star' onClick={() =>  toggleFavorite (e.id)}>
                  {e.favori? (
                    <img src='./savedFull.svg' alt='saved' />
                  ) : (
                    <img src='./saved.svg' alt='unsaved' />
                  )}
                </button>
              </div>
              <span style={{ color: e.color, textDecoration: 'underline' }}>{e.region} :</span>
              <div className='dscp-actl'>
                <p>
                  <span style={{ color: e.color, paddingTop: '-5px' }}>Details de l’événement: </span>
                  Lorem ipsum dolor sit amet. A sapiente neque est voluptas omnis aut aspernatur saepe ut
                  consectetur sint et totam atque qui voluptas maiores qui impedit vero? Ad alias animi eum sunt
                  Ad alias animi eum suntAd alias animi eum sunt Ad alias animi eum sunt Ad alias animi eum sunt
                   Ad alias animi eum sun Ad alias animi eum suntAd Ad alias frgg
                </p>
              </div>
              <button className='btn-show-detl'>
                <Link style={{ textDecoration: 'none', color: '#c3c3c3' }} to='/RecVisiteur'>
                  Plus de détails...
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LieuDv;
