import Backgroud from '../../../assets/images/empresa.jpeg';
import { CardDirected } from './CardDirected';


export const Directed = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-around mb-12'>
        <img src={Backgroud} alt="imagen de empresa" className='px-20 object-cover rounded-lg shadow-2xl mb-12'/>
        <div className='flex flex-col items-center justify-center'>
          <CardDirected />
        </div>
      </div>
    </div>
  );
};