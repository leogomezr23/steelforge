import { Link } from 'react-router-dom';
import Error from '../../assets/cancel.svg';

export const PageError = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 m-12">
      <div className="flex flex-col font-poppins gap-4">
        <h2 className="text-4xl font-semibold mb-2">404 Fuera de Medida</h2>
        <p>
          Lo sentimos, esa página no existe. Al igual que con el acero nos
          esforzamos por la precisión, pero esta vez el enlace esta defectuoso
        </p>
        <p>
          Usa el botón de aabjo para ir a nuestra página principal y conocer
          todos los servicios de{' '}
          <span className="font-semibold">
            central de corte & servicios S.A.S
          </span>{' '}
        </p>
        <Link to="/">
          <button className="text-start border-2 border-[#FF7D00] py-2 px-3 rounded-md w-full md:w-1/2 font-semibold hover:scale-105 hover:bg-[#FF7D00] hover:text-white transition-transform duration-300 ease-in-out cursor-pointer">
            Ir a la página de Inicio
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <img src={Error} alt="imagen de error" className="" />
      </div>
    </div>
  );
};
