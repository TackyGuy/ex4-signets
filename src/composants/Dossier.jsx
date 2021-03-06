import './Dossier.scss'; 
import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import imageDefaut from "../images/couverture.webp";
import GabaritBouton from './GabaritBouton';

export default function Dossier({id, nom, couleur, datemodif, couverture}) {
  const [btnState, setBtnState] = useState(false);

  return (
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton className="deplacer" aria-label="déplacer" disableRipple={true}>
          <SortIcon />
        </IconButton>
        <img src={(couverture) ? couverture : imageDefaut} alt={nom}/>
      </div>
      <div className="info">
        <h2>{nom}</h2>
        <p>Modifié : {formaterDate(datemodif)}</p>
      </div>
      <IconButton className="modifier" aria-label="modifier" size="small" onClick={()=>{setBtnState(true)}}>
        <MoreVertIcon />
      </IconButton>
      {btnState && (
        <div className="DossierBoutons">
        <GabaritBouton onClick={()=>{setBtnState(false);}} texteBtn="Modifier"/>
        <GabaritBouton onClick={()=>{setBtnState(false);}} texteBtn="Supprimer"/>
      </div>
      )}
    </article>
  );
}

/**
 * Formate les objets date de Firestore et retourne une chaîne de caractères
 * @param {Object} d Objet date retourné par Firestore
 * @returns String date formatée en français
 */
function formaterDate(d) {
  const dateJs = d ? new Date(d.seconds*1000) : new Date();
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${dateJs.getDate()} ${mois[dateJs.getMonth()]} ${dateJs.getFullYear()}`;
}