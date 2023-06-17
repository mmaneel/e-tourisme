import './page_lieu.css'
import React, { useState } from 'react';
import Actualité from './actualité';
import Comment from './comment';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import  { useEffect} from 'react';
import { useParams } from 'react-router';
function Lieu() {
    const [hide,setHide]=useState(false)
    const [hide1,setHide1]=useState(false)
    const [hide2,setHide2]=useState(false)


    const [commentText, setCommentText] = useState('');


const handleCommentChange = (event) => {
setCommentText(event.target.value);
};


const {id} = useParams();


const [lieu, setlieu] = useState([])
const [horaire, sethoraire] = useState([])    //map this  
const [event, setevent] = useState([])     //and this
const [transport, settransport] = useState([])     //and this


  useEffect(() => {
     
     
      getSingleAnnonce();
  },[])



const getSingleAnnonce = async () => {
  console.log(`http://localhost:8000/api/Detail/${id}`)
    var res = await axios.get(`http://localhost:8000/api/Detail/${id}`)
    console.log(res);
    setlieu(res.data[0]);
    console.log(lieu.Nom);
    console.log(lieu);  
   
     res = await axios.get(`http://localhost:8000/api/lieu/horaire/${id}`)
    console.log(res);
    sethoraire(res.data);
    console.log(horaire);  
   
     res = await axios.get(`http://localhost:8000/api/lieu/events/${id}`)
    console.log(res);
    setevent(res.data);
    console.log(event);  
    res = await axios.get(`http://localhost:8000/api/lieu/transport/${id}`)
    console.log(res);
    settransport(res.data);
    console.log(transport);  

}
 
 
 
   
const path="http://127.0.0.1:8000"


 
    return (
        <div className='lieu'>
            <div className='return_button'>
                 <button className='return'>
                    {<img src='/return.png' alt='Return' className='return_icon' />}
                    <KeyboardReturnOutlinedIcon/>
                    <span>Return</span>
                 </button>
            </div>
           
            <div className='content'>
                <div className='content_left' >
                    <div className='lieu_image'>
                    <img
         src={path+lieu.image}
    />
                    </div>
                    <div className='name'style={{color:'#162641'}} ><p>{lieu.Nom} , {lieu.laya}</p></div>
                    <div className='name' ><p style={{color:'#88AFDE',}}>{lieu.theme} , {lieu.categorie}</p></div>
                </div>
                <div className='content_middle' ><span> </span></div>
                <div className='content_right' >
                     <h4>{lieu.Nom}</h4>
                     <div>
                        <p>{lieu.description}
                             </p>
                    </div>
                    <div className='plus' style={{width:'100%',marginTop:'2em'}}>
                        <h4 >Plus d'informations</h4>
                        <div className='moyens_de_transports' style={{marginBottom:'-0.5em'}}>
                           <div className='start_elements'>
                               <img src='/moyens.png' alt='moyen' className='moyens' />
                               
                                <span>Moyens de transports disponibles</span>
                            </div>
                            <div>
                                <KeyboardArrowDownOutlinedIcon onClick={()=>setHide(!hide)} />
                            </div>
                        </div>
                       
                        {hide ? (
                        <div className='list'>
                                <div className='unmoyen' >
                                <ul>
                    {transport.map((h) => (
                        <li>
                        <p style={{ marginRight: '2em' }}>{h.moyen}</p>
                        <p>{h.temps}</p>
                        </li>
                       
                        ))}
                    </ul>  
                                 </div>


                               
                             


                            </div>
                        ):null}
                            <div className='horaires'>
                                <div className='start_elements'>
                                   <img src='/horaires.png' alt='icon' className='moyens' />
                                   
                                  <span>Horaires d'ouverture et de fermeture</span>
                                 </div>
                                 <div>
                                 <KeyboardArrowDownOutlinedIcon onClick={()=>setHide1(!hide1)} />
                                     
                                  </div>
                            </div>
                            {hide1? (
                            <div className='list'>
                                <div className='list_item'>
                                   
                    {horaire.map((m)=>(
                        <div>
                            <div>
                      <ArrowForwardIosOutlinedIcon
                        sx={{ width: '18px', height: '18px' }}
                      />
                    </div>
                    <span style={{ marginLeft: '1em' }}>
                      Ouvert de {m.heure_ouverture}h jusqu’à {m.heure_fermeture}h {m.jour}  
                    </span>
                    </div>
                    ))}
                                </div>
                            </div>
                            ):null}


                            <div className='Actualités'>
                              <div className='start_elements'>
                                            <img src='/actualités.png' alt='icon' className='actualités' />
                                           
                                           <span>Actualités</span>
                                       </div>
                                     <div>
                                     <KeyboardArrowDownOutlinedIcon onClick={()=>setHide2(!hide2)}/>
                                     </div>
                               
                            </div>
                            {hide2 ?(
                            <Actualité/>
                           
                         
                             ):null}
                    </div>
                    <div className='Commentaires'>
                                    <div className='start_elements'>
                                           <span>Commentaires</span>
                                           < QuestionAnswerOutlinedIcon sx={{marginLeft:'10px'}}/>
                                       </div>
                                     <div>
                                     <StarIcon sx={{ color:'#FFC700',marginRight:'8px'}}/>
                                       
                                       <span>4.6</span>
                                     </div>
                    </div>
                               
                               
                                <Comment/>
                               
                               
                               


                               
                </div>
            </div>






        </div>
    );
}


export default Lieu ;
