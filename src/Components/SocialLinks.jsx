import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
  const pdfPath = '/ELMESTARI_Abdelmonim.pdf'

  const handleResumeClick = (e) => {
    e.preventDefault()
    window.location.href = '/ELMESTARI_Abdelmonim.pdf'
  }

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: 'https://www.linkedin.com/in/elmestari-abdelmounaim-569904330/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: 'https://github.com/Monim22',
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={25} />
        </>
      ),
      href: 'mailto:a.elmestari@esi-sba.dz',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      onClick: handleResumeClick,
      style: 'rounded-br-md',
      isResume: true,
    },
  ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, onClick, isResume }) => (
          <li
            key={id}
            className={`flex justify-between items-center bg-opacity-80 bg-gray-900 border-r border-blue-600 shadow-md shadow-blue-600 w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ${style}`}
          >
            {isResume ? (
              <button
                onClick={onClick}
                className="flex justify-between items-center w-full text-white"
              >
                {child}
              </button>
            ) : (
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
