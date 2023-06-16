    import './page_lieu.css'
    import React, { useState } from 'react';
    import Actualité from './actualité';
    import Comment from './comment';
    import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
    import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
    import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
    import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
    import StarIcon from '@mui/icons-material/Star';
    function Lieu() {
        const [hide,setHide]=useState(false)
        const [hide1,setHide1]=useState(false)
        const [hide2,setHide2]=useState(false)

        const [commentText, setCommentText] = useState('');

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  
      
        return ( 
            <div className='lieu'>
                <div className='return_button'>
                     <button className='return'>
                        {/*<img src='/return.png' alt='Return' className='return_icon' />*/}
                        <KeyboardReturnOutlinedIcon/>
                        <span>Return</span> 
                     </button> 
                </div>
                
                <div className='content'>
                    <div className='content_left' >
                        <div className='lieu_image'></div>
                        <div className='name'style={{color:'#162641'}} ><p>Nom du lieu , Wilaya</p></div>
                        <div className='name' ><p style={{color:'#88AFDE',}}>Thème , catégorie</p></div>
                    </div>
                    <div className='content_middle' ><span> </span></div>
                    <div className='content_right' >
                         <h4>Nom du lieu</h4>
                         <div>
                            <p>Lorem ipsum dolor sit amet. A sapiente neque est voluptas
                                 omnis aut aspernatur saepe ut consectetur sint et totam
                                  atque qui voluptas maiores qui impedit vero? Ad alias
                                   animi eum sunt recusandae sed voluptatum cupiditate aut 
                                   velit officiis ea quasi temporibus et doloribus minus. 
                                   33 odio corporis non laboriosam perspiciatis ut molestias 
                                   nulla id quisquam voluptatibus id asperiores corrupti Lorem 
                                   ipsum dolor sit amet. A sapiente neque est voluptas omnis
                                    aut aspernatur saepe ut consectetur sint et totam atque
                                     qui voluptas maiores qui impedit vero? Ad alias animi 
                                     eum sunt recusandae sed voluptatum cupiditate aut velit
                                      officiis ea quasi temporibus et doloribus minus. 33 odio 
                                      corporis non laboriosam perspiciatis ut molestias nulla 
                                      id quisquam voluptatibus id asperiores corrupti
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
                                        <div className='start_elements'>
                                            <span style={{background:'#F7A832',borderRadius:'50%',width: '20px', height: '20px',display:'inline-block',marginLeft:'1em' }}></span>
                                            <p style={{marginRight:'2em'}}> Arret de bus</p>
                                        </div>
                                    <p> 5mn</p>    
                                     </div>
                                     <div className='unmoyen'>
                                        <div className='start_elements'>
                                        <span style={{background:'#88AFDE',borderRadius:'50%',width: '20px', height: '20px',display:'inline-block',marginLeft:'1em' }}></span>
                                            <p> Arret de métro</p>
                                        </div>
                                    <p> 5mn</p>    
                                     </div>
                                     <div className='unmoyen'>
                                        <div className='start_elements'>
                                        <span style={{background:'#C1DCAB',borderRadius:'50%',width: '20px', height: '20px',display:'inline-block',marginLeft:'1em' }}></span>
                                            <p> Gare de train</p>
                                        </div>
                                    <p> 5mn</p>    
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
                                        <div>
                                        <ArrowForwardIosOutlinedIcon sx={{width:'18px',height:'18px'}}/>
                                        
                                        </div>
                                         <span style={{marginLeft:'1em'}}>Ouvert de 8h jusqu’à 18h du samedi à jeudi</span>
                                    </div>
                                    <div className='list_item'>
                                        <div>
                                        <ArrowForwardIosOutlinedIcon sx={{width:'18px',height:'18px'}} />
                                        </div>
                                         <span style={{marginLeft:'1em'}}>Ouvert de 14h jusqu’à 20h le vendredi</span>
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