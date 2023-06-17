import React ,{useState,useEffect} from 'react'
import StarIcon from '@mui/icons-material/Star';
import"./Favoris.css"
import { Link } from 'react-router-dom';
import NavBar from '../navbar';
function Favoris({favoris}) {
  const [lieux,setLieux] =useState( [
    { id: 1, nom: 'Lieu 1', favori: false, region: 'Lieu', color: '#C1DCAB' },
    { id: 2, nom: 'Lieu 2', favori: false, region: 'Lieu', color: '#88AFDE' },
    { id: 3, nom: 'Lieu 3', favori: false, region: 'Lieu', color: '#F7A832' },
  ]);
  const [favori, setFavori] = useState([]);
  const addToFavorites = (lieu) => {
    setFavori([...favori, lieu]);
  };
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
 
  
  
  
    const tab=[
        {id:1,nom:'Plage',region:'Oran',star:'3.5'},
        {id:2,nom:'Bhar',region:'Alger',star:'4.5'},
        {id:3,nom:'Plage',region:'tizi',star:'4.5'},
        {id:4,nom:'Bhar',region:'Oran',star:'4.5'},
        {id:5,nom:'Plage',region:'Oran',star:'4.5'},
        {id:6,nom:'Bhar',region:'Oran',star:'4.5'},
        {id:7,nom:'Plage',region:'Oran',star:'4.5'},
        {id:8,nom:'Bhar',region:'Oran',star:'4.5'},
    ]
    
  return (
    <>
    <div className='container-fav'>
    <NavBar/>
    <img className='ligne-pic' src='./ligne.png' alt="photo"/>
    
        <h1 
        style={{ color: '#162641' , textAlign:'center',
        marginBottom:'70px',marginTop:'0px',paddingTop:'0px'}}>Mes Favoris</h1>
        
    
    {favoris.map((e)=>(
      <div className='lieu-form-fav'  key={e.id}>
        <img src='./mosq.jpg' alt="photo"/>
        <div className='lieu-form-R-fav'>
            <div className='lieu-name-fav'>
                 <h3>{e.nom}</h3>
                 <div className='icon-star'>
                    <StarIcon sx={{ color:'#FFC700',marginRight:'8px'}}/>
                    <span>{e.star}</span>
                    <img src="./savedFull.svg" />
                 </div>
            </div>
            <span className="region-name">{e.region}</span>
            
            <div className='hide-detl'>
            <p>Lorem ipsum dolor sit amet. A sapiente neque est voluptas omnis 
               aut aspernatur saepe ut consectetur sint et totam atque qui saepe ut
               aut aspernatur saepe ut consectetur sint et totam atque qui saepe ut
               aut aspernatur saepe ut consectetur sint et totam atque qui saepe ut
               aut aspernatur saepe ut consectetur sint et totam atque qui saepe ut
               aut aspernatur saepe ut consectetur sint et totam atque qui saepe ut
               aut aspernatur saepe ut consectetur sint et totam atque qui saepe ut
               
                 </p>
              
                </div>
                <button className='btn-show-detl'><Link  style={{textDecoration:"none" ,color:"#c3c3c3"}}to ="/LieuDv">plus de détails ...</Link></button>
                </div>
       
      </div>))}
    
      <img className='ligne-pic1' src='./ligne1.png' alt="photo"/>
      <img className='ligne-pic2' src='./ligne2.png' alt="photo"/>
    </div>
    </>
  )
}

export default Favoris