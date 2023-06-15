import React,{useState} from 'react'
import "./LieuDv.css"
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';


function LieuDv({ addToFavorites }) {
  
  const [lieux, setLieux] = useState([
    { id: 1, nom: 'Lieu 1', favori: false,region:' Lieu',color:'#C1DCAB' },
    { id: 2, nom: 'Lieu 2', favori: false,region:' Lieu',color:'#88AFDE' },
    { id: 3, nom: 'Lieu 3', favori: false ,region:' Lieu',color:'#F7A832'},
  ]);
  console.log(lieux)
  
   /* const tab=[
        {id:1,nom:'Event Name',region:' Lieu',color:'#C1DCAB'},
        {id:2,nom:'Event Name',region:' Lieu',color:'#88AFDE'},
        {id:3,nom:'Event Name',region:' Lieu',color:'#F7A832'},
        {id:4,nom:'Event Name',region:' Lieu',color:'#C1DCAB'},
        {id:5,nom:'Event Name',region:' Lieu',color:'#F7A832'},
       
       
    ]*/
    /*const toggleFavorite = (id) => {
      const updatedLieux = lieux.map((lieu) =>
        lieu.id === id ? { ...lieu, favori: !lieu.favori } : lieu
      );
      setLieux(updatedLieux);
      const favoris = updatedLieux.filter((lieu) => lieu.favori);
      addToFavorites(favoris);
    };*/

    const navigate = useNavigate();

    const toggleFavorite = (id) => {
      const updatedLieux = lieux.map((lieu) =>
        lieu.id === id ? { ...lieu, favori: !lieu.favori } : lieu
      );
      setLieux(updatedLieux);
      const favoris = updatedLieux.filter((lieu) => lieu.favori);
      addToFavorites(favoris);
    };
  
    const handleClickDetails = () => {
      navigate('/RecVisiteur');
    };
    
  return (
  <>
 <div className='container-DV'>
    {lieux.map((e)=>(
      <div className='lieu-form-DV' key={e.id}>
        <img src='./mosq.jpg' alt="photo"/>
        <div className='lieu-form-R-DV'>
            <div className='lieu-name-DV'>
                 <h3>{e.nom}</h3>
                
                 <button className='icon-star'  onClick={() => toggleFavorite(e.id)}>
                 {e.favori ? (
                 <img src="./savedFull.svg" /> 
                 ):( <img src="./saved.svg" />)} 
                
                 </button>
            </div>
            
            <span  style={{ color: e.color,textDecoration:'underline'}}>{e.region} : </span>
            <div className='dscp-actl'>
            <p><span style={{ color: e.color ,paddingTop:"-5px"}}>Details de l’evenement : </span>Lorem ipsum dolor sit amet. A sapiente neque est voluptas omnis aut aspernatur saepe ut
              consectetur sint et totam atque qui voluptas maiores qui impedit vero? Ad alias animi
               eum sunt </p>
            </div>
            <button className='btn-show-detl'><Link  style={{textDecoration:"none" ,color:"#c3c3c3"}}to ="/RecVisiteur">plus de détails ...</Link></button>
            
        </div>
      </div>))}
    </div>
   </> 
  )
}

export default LieuDv