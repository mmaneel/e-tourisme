import './page_lieu.css'
import React, { useState } from 'react';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function Lieu() {
    const [nomLieu, setNomLieu] = useState('Nom du lieu');
    const [description, setDescription] = useState('Description du lieu');

    const handleNomLieuChange = (event) => {
        setNomLieu(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleEnregistrer = () => {
        // Logique pour enregistrer les données
    };

    const handleAnnuler = () => {
        // Logique pour annuler les modifications
    };

    return (
        <div className='lieu'>
            <div className='return_button'>
                <button className='return'>
                    <KeyboardReturnOutlinedIcon/>
                    <span>Return</span>
                </button>
            </div>

            <div className='content'>
            <div className='content_left'>
                <div className='name' style={{ marginBottom: '-0.5em' }}>
                    <div className='start_elements'>
                        <span>Nom Lieu</span>
                    </div> 
                    <div>
                        <EditIcon onClick={() => setHide(!hide)} />
                    </div>
                </div>
                <div className='name'>
                    <div className='start_elements'>
                        <span>Région</span>
                    </div> 
                    <div>
                        <KeyboardArrowDownOutlinedIcon onClick={() => setHide(!hide)} />
                    </div>
                </div>
                <div className='name'>
                    <div className='start_elements'>
                        <span>Thème</span>
                    </div> 
                    <div>
                        <KeyboardArrowDownOutlinedIcon onClick={() => setHide(!hide)} />
                    </div>
                </div>
                <div className='name'>
                    <div className='start_elements'>
                        <span>Catégorie</span>
                    </div> 
                    <div>
                        <KeyboardArrowDownOutlinedIcon onClick={() => setHide(!hide)} />
                    </div>
                </div>
            </div>

                <div className='content_middle'>
                    <span> </span>
                </div>
                <div className='content_right'>
                    <div>
                        <TextField
                            label='Nom du lieu'
                            variant='outlined'
                            value={nomLieu}
                            onChange={handleNomLieuChange}
                        />
                    </div>
                    <div>
                        <TextField
                            label='Description'
                            variant='outlined'
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </div>

                    <div className='plus' style={{ width: '100%', marginTop: '2em' }}>
                        <h4>Plus d'informations</h4>
                        <div className='moyens_de_transports' style={{ marginBottom: '-0.5em' }}>
                            <div className='start_elements'>
                                <img src='/moyens.png' alt='moyen' className='moyens' />
                                <span>Moyens de transports disponibles</span>
                            </div>
                            <div className='unmoyen'>
                                <Link to="/ajout-moyen-transport" className='start_elements'>
                                    <img src='/ajout.png' alt='ajout' className='moyens' />
                                    <span>Ajouter un nouveau moyen de transport</span>
                                </Link>
                            </div>
                        </div>
                        <div className='horaires' style={{ marginBottom: '-0.5em' }}>
                            <div className='start_elements'>
                                <img src='/horaires.png' alt='horaires' className='horaires' />
                                <span>Horaires d’ouverture et de fermeture</span>
                            </div>
                            <div className='unmoyen'>
                                <Link to="/ajout-horaire" className='start_elements'>
                                    <img src='/ajout.png' alt='ajout' className='actualite' />
                                    <span>Ajouter un horaire</span>
                                </Link>
                            </div>
                        </div>
                        <div className='actualite' style={{ marginBottom: '-0.5em' }}>
                            <div className='start_elements'>
                                <img src='/actualite.png' alt='actualite' className='actualite' />
                                <span>Actualités</span>
                            </div>
                            <div className='unmoyen'>
                                <Link to="/ajout-horaire" className='start_elements'>
                                    <img src='/ajout.png' alt='ajout' className='actualite' />
                                    <span>Ajouter une nouvelle actualité</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleEnregistrer}>Enregistrer</button>
                        <button onClick={handleAnnuler}>Annuler</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lieu;
