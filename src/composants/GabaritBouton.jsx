
import './GabaritBouton.scss';
import Button from '@material-ui/core/Button';

export default function GabaritBouton(props)
{
    return(
        <Button>{props.texteBtn}</Button>
    );
}