import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import './AjouterDossier.scss';

export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#537169');

  

  function viderChamps() 
  {
    verifierImg();
    setNom('');
    setCouverture('');
    setCouleur('#537169');
  }

  function verifierImg()
  {
    if (couverture.length <= 0)
    {
      setCouverture("src/images/couverture.webp");
    }
    console.log(couverture);
  }

  return (
    <div className="AjouterDossier">
      <Dialog className="dialogueDossier" open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
            defaultValue={nom}
            className="texteDossier"
          />
          <TextField
            margin="dense"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
            defaultValue={couverture}
          />
          <TwitterPicker 
            width="100%" 
            triangle="hide" 
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
            colors={['#264653', '#2A9D8F','#E9C46A','#F4A261','#E76F51','#293241',]}
            color={couleur}
          />
        </DialogContent>
        <DialogActions className="boutonsActions">
          <Button className="boutonAnnuler" onClick={()=>{setOuvert(false); viderChamps()}} color="primary">
            Annuler
          </Button>
          <Button className="boutonAjouter" onClick={() => {nom !== '' && gererAjout(nom, couverture, couleur); viderChamps(); }} color="primary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}