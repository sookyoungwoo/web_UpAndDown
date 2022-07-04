import './main.scss';
import Button from '../../component/Button/Button';
import { Link } from 'react-router-dom';
export default function Main(){
    return(
        
        <div className='total'>
            
            <div className='title'>
                <h1 className='title_txt'>Up And Down</h1>
            </div>
            <div className='start'>
                <Link to='../game/game'>
                    <Button />
                </Link>
            </div>
        </div>
    )
}