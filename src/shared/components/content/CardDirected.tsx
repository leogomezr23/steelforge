const KEY_BENEFITS = [
  {
    icon: '🏗️',
    title: 'Estamos Dirigidos a los Sectores:',
    description: [
      'Construcción',
      'Meto/Mecánico',
      'Petróleo/Gas',
      'Industria',
      'Empresas de Servicio (Transporte)',
    ],
    color: 'border-[#FF7D00]',
  },
  {
    icon: '🤝',
    title: 'Alianzas Estratégicas',
    description: [
      'Tupso (Distribución de Férricas Nacionales)',
      'TUPERCA (ZINCA, COLMENA, TERNIUM)',
      'BORDAS CALVO (ACESCO - COMPACERO)',
      'SOLDADURAS WEST ARC',
    ],
    color: 'border-[#FF7D00]', 
  },
  {
    icon: '🏭',
    title: 'Somos Fabricantes de:',
    description: [
      'Pórticos Tudente Desarmables (76x38 / 110x38 / 12x1 1/2" / 14x1")',
      'Tejas Arquitectónicas y Caballetes',
      'Bojante',
    ],
    color: 'border-[#FF7D00]', 
  },
];

export const CardDirected = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-extrabold sm:text-4xl mb-12 w-3/5 mx-auto">
          Forjamos Tu Éxito Soluciones en Ingeniería, Construcción y Logística.
        </h2>

        {/* El grid ahora usa 3 columnas para mostrar los 3 puntos principales de la foto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {KEY_BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-[#FF7D00] h-full flex flex-col items-start text-left" // Agregué h-full y flex para mejor alineación
            >
              <div className={`p-3 rounded-full ${benefit.color} mb-4`}>
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              
              {/* Renderizado de la descripción como una lista <ul> */}
              {Array.isArray(benefit.description) && (
                <ul className="text-gray-500 list-disc list-inside space-y-2 flex-grow"> 
                  {benefit.description.map((item, i) => (
                    // Asegurando que la línea de Pórticos se vea bien con los detalles
                    <li key={i} className="pl-1">
                      {item.includes('Pórticos Tudente Desarmables') ? (
                        <>
                          Pórticos Tudente Desarmables:
                          <ul className="list-none text-sm text-gray-400 mt-1 pl-4 italic">
                            <li>76x38</li>
                            <li>110x38</li>
                            <li>12x1 1/2"</li>
                            <li>14x1"</li>
                          </ul>
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};