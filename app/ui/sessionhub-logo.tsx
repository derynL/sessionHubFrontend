import SHicon from '@/public/sh-icon.svg';
import Image from 'next/image';
import { rubik } from './fonts';
import css from './home.module.css';

export default function SessionHubLogo() {
  return (
    <div
      className={`${rubik.className} flex flex-row items-center align-bottom`}
    >
      <div className="hidden md:block">
        <Image
          src="/sh-icon-4x6.png"
          alt="MusicHub icon"
          width={133}
          height={200}
        />
      </div>

      <p className={css.titleGradient}>SessionHub</p>
    </div>
  );
}
