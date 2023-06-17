import './page_lieu.css';
import React, { useState } from 'react';
import Actualité from './actualité';
import Comment from './comment';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import StarIcon from '@mui/icons-material/Star';
import CommuteOutlinedIcon from '@mui/icons-material/CommuteOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';

function Lieu() {
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [commentText, setCommentText] = useState('');
  const tab = [
    {
      id: 1,
      nom: 'Nom du lieu 1',
      horaires: [
        {TimeS:'8', TimeE:'18'  ,dateS:' du lundi à' , dateE:'vendredi'},
        {TimeS:'10', TimeE:'16'  ,dateS:'le Samedi' },
        
      ],
      moyensTransport: [ {moyenNom:'Arret de bus', moyenTime:'5mn' },
                         {moyenNom:'Arret de métro', moyenTime:'10mn' },
                         {moyenNom:'Arret de bus', moyenTime:'11mn' } ],
      description: 'la description du lieu',
      wilaya: 'Alger',
      theme: 'theme 1',
      categorie: 'categ 1',
    },
  ];

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  return (
    <>
      <div className='lieu'>
        <div className='return_button'>
          <button className='return'>
            <KeyboardReturnOutlinedIcon />
            <span>Return</span>
          </button>
        </div>

        {/*----------------------------contenu de lieu-----------------------------*/}

       
          {tab.map((e) => (
            <div className='content'  key={e.id}>
              <div className='content_left'>
                <div className='lieu_image'></div>
                <div className='name' style={{ color: '#162641' }}>
                  <p>{e.nom}, {e.wilaya}</p>
                </div>
                <div className='name'>
                  <p style={{ color: '#88AFDE' }}>{e.theme}, {e.categorie}</p>
                </div>
              </div>

              <div className='content_middle'>
                <span> </span>
              </div>

              <div className='content_right'>
                <h4>{e.nom}</h4>
                <div>
                  <p>
                    {e.description}
                  </p>
                </div>
                <div
                  className='plus'
                  style={{ width: '100%', marginTop: '2em' }}
                >
                  <h4>Plus d'informations</h4>
                  <div
                    className='moyens_de_transports'
                    style={{ marginBottom: '-0.5em' }}
                  >
                    <div className='start_elements'>
                      <CommuteOutlinedIcon />
                      <span>Moyens de transports disponibles</span>
                    </div>
                    <div>
                      <KeyboardArrowDownOutlinedIcon
                        onClick={() => setHide(!hide)}
                      />
                    </div>
                  </div>

                  {hide ? (
                    <div className='list'>
                       
                      <div className='unmoyen'>
                        <ul>
                        {e.moyensTransport.map((h) => (
                            <li>
                            <p style={{ marginRight: '2em' }}>{h.moyenNom}</p>
                            <p>{h.moyenTime}</p>
                            </li>
                            
                            ))}
                        </ul>
                        
                      </div>
                      <div className='unmoyen'>
                        <div className='start_elements'>
                          <span
                            style={{
                              background: '#C1DCAB',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              display: 'inline-block',
                              marginLeft: '1em',
                            }}
                          ></span>
                          <p>Gare de train</p>
                        </div>
                        <p>5mn</p>
                      </div>
                      
                    </div>
                    
                  ) : null}
                 

                  <div className='horaires'>
                    <div className='start_elements'>
                      <img
                        src='/horaires.png'
                        alt='icon'
                        className='moyens'
                      />
                      <span>Horaires d'ouverture et de fermeture</span>
                    </div>
                    <div>
                      <KeyboardArrowDownOutlinedIcon
                        onClick={() => setHide1(!hide1)}
                      />
                    </div>
                  </div>
                  {hide1 ? (
                    <div className='list'>
                      <div className='list_item'>
                        
                        {e.horaires.map((m)=>(
                            <div>
                                <div>
                          <ArrowForwardIosOutlinedIcon
                            sx={{ width: '18px', height: '18px' }}
                          />
                        </div>
                        <span style={{ marginLeft: '1em' }}>
                          Ouvert de {m.TimeS}h jusqu’à {m.TimeE}h {m.dateS}  {m.dateE}
                        </span>
                        </div>
                        ))}
                      </div>
                      
                    </div>
                  ) : null}
                </div>
                <div className='Actualités'>
                  <div className='start_elements'>
                    <NewspaperOutlinedIcon />
                    <span>Actualités</span>
                  </div>
                  <div>
                    <KeyboardArrowDownOutlinedIcon
                      onClick={() => setHide2(!hide2)}
                    />
                  </div>
                </div>
                {hide2 ? <Actualité /> : null}
              

              <div className='Commentaires'>
                <div className='start_elements'>
                  <span>Commentaires</span>
                  <QuestionAnswerOutlinedIcon sx={{ marginLeft: '10px' }} />
                </div>
                <div>
                  <StarIcon sx={{ color: '#FFC700', marginRight: '8px' }} />
                  <span>4.6</span>
                </div>
              </div>
              <Comment />
              </div>
            </div>
          ))}
        
      </div>
    </>
  );
}

export default Lieu;