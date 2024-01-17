import localFont from 'next/font/local';
import { ReactNode } from 'react';


const muncheWriteFont = localFont({ src: '../../public/fonts/munche_seuki_jung.woff2'});

const SectionTitle = ({ title }: { title?: String }) => {
  return (
    <div className={`text-xl font-medium ${title ? 'pt-10' : 'pt-[46px]'} pb-[30px] text-center`}>
      <div className={`bg-[url('/images/skin/title_image.png')] bg-center bg-no-repeat bg-[length:38px_56px] h-[70px] ${title ? 'mb-2.5' : ''}`} />
      {title && <div className={`${muncheWriteFont.className} text-[#534741]`}>{title}</div>}
    </div>
  )
}

const SectionHeader = () => {
  return (
    <div className="flex justify-between italic text-xs leading-4">
      <div className="text-[#534741]">date.</div>
      <div className="text-[#534741]">04/27</div>
    </div>
  )
}

const Section = ({ children, title, odd, border }: { children: ReactNode; title?: String; odd?: Boolean; border?: Boolean }) => {
  return (
    <div className={`${odd ? 'bg-[#fffef9]' :'bg-[#fffaee]'} pt-[25px] pr-[33px] pl-[33px] pb-[43px]`}>
      <SectionHeader />
      <div className={`${ border ? 'border border-solid border-[#fece75] rounded-t-[150px] -mt-2.5 px-[15px]' : ''}`}>
        <SectionTitle title={title} />
        {children}
      </div>
    </div>
  );
}
export default Section