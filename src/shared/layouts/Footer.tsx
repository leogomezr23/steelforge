import { accessories, computers, services } from './ListFooter';
import Logo from '../../assets/images/logo.png';
import { Botton } from '../theme/Bottom';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t-[2px] border-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-10">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-sm text-gray-400 max-w-xs">
              Servicio técnico profesional y express para móviles y equipos de
              cómputo. Confianza y calidad garantizada.
            </p>
     
              <img src={Logo} alt="Imagen logo" className="size-40 object-contain" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {services.map((serviceName, index) => (
                <li key={index}>
                  <Botton
                    label={serviceName}
                    baseMessage="Hola, estoy interesado en un Servicio Técnico de: "
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Accesorios
            </h4>
            <ul className="space-y-2 text-sm">
              {accessories.map((serviceName, index) => (
                <li key={index}>
                  <Botton
                    label={serviceName}
                    baseMessage="Hola, estoy interesado en los accesorios para"
                    phone='573219584319'
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Computadores
            </h4>
            <ul className="space-y-2 text-sm">
              {computers.map((serviceName, index) => (
                <li key={index}>
                  <Botton
                    label={serviceName}
                    baseMessage="Hola, estoy interesado en el Servicio Técnico de: "
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contáctanos
            </h4>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500 space-y-1">
          <p>
            © {new Date().getFullYear()} High Tecnology. Todos los derechos
            reservados.
          </p>
          <p className="text-gray-400">
            Diseñado y desarrollado por{' '}
            <span className="font-bold text-[#80E6BD]">Leonardo Gómez</span>
          </p>
        </div>
      </div>
    </footer>
  );
};