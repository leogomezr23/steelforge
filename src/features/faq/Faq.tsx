import Portada from "../../assets/images/faqPortada.jpeg";
import Mision from "../../assets/images/faq.jpeg";
import vision from "../../assets/images/fabrica.jpeg";


export const Faq = () => {
  return (
    <div className="h-[200rem] mx-auto ">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="mb-12">
          <img src={Portada} 
            alt="imagen de fondo" 
            className="object-cover h-[600px] mt-7 rounded-md shadow-2xl"
          />
        </div>
        <p>
          
        </p>
        {/* MISION */}
        <div className="flex items-center justify-between gap-7 w-full px-20">
          <div>
            <h1 className="text-4xl font-bold w-1/2">MISIÓN</h1>
            <p className="text-2xl mt-4 w-5/6">
              Somos una empresa que importa y comercializa bobinas de acero con 20 años de experiencia en el sector ferretero llegando a dar soluciones a la industria, construcción, transporte y servicios en la transformación de estos materiales que logren ser solución para sus requerimientos.
            </p>
          </div>
          <img src={Mision} alt="mision" className="w-1/2 size-[600px] rounded-lg shadow-2xl"/>
        </div>
        {/* VISION */}
        <div className="flex items-center justify-between gap-12 w-full px-20">
          <img src={vision} alt="vision" className="w-1/2 size-[600px] rounded-lg shadow-2xl"/>
          <div>
            <h1 className="text-4xl font-bold w-1/2">VISIÓN</h1>
            <p className="text-2xl mt-4 w-5/6">
              El objetivo es llegar a posicionarnos en el sector metalmecánico teniendo en cuenta los valores de ética y el desarrollo constante del recurso humano generando cada vez posibilidades de crecimiento y vernos consolidados en el futuro como una empresa líder en el mercado del acero.
            </p>
          </div>
        </div>
        <div>OTRO CONTENIDO</div>
      </div>
    </div>
  );
};