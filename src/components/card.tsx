import Image from 'next/image'

const Card: React.FC<{
  circle?: boolean
  img: string
  icon: boolean
  alt: string
  title: string
  description: string
}> = ({ img, alt, title, description, icon }) => (
  <div className="w-full mx-auto max-w-sm rounded-xl bg-white border-gray-100 border shadow-lg px-5 py-4 text-gray-800 ">
    <div className="w-full pt-1 text-center -mt-16 mx-auto">
      <div className="block relative">
        <Image
          alt={alt}
          src={img}
          className={
            `mx-auto object-cover ` + icon ? ` rounded-md` : `rounded-full`
          }
          height="80"
          width="80"
        />
      </div>
    </div>
    <div className="w-full text-center pt-3">
      <p className="text-gray-800  font-inter  text-xl font-semibold ">
        {title}
      </p>
      <p className="text-gray-600 pt-2 text-lg tracking-tight">{description}</p>
    </div>
  </div>
)

export default Card