type Props = {
    label: string;
    baseMessage: string;
    phone?: string
}

export const Botton = ({label, baseMessage, phone = '573138000536'}: Props) => {


    const encodedMessage = encodeURIComponent(`${baseMessage} ${label}`)
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a 
        href={whatsappUrl}
        target='_blank'
        rel='noopener noreferrer'
        className="text-gray-400 hover:text-[#56DDA7] transition-colors duration-200"
    >
        {label}
    </a>
  )
}
