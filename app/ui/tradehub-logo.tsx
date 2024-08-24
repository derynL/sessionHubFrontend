import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import { rubik } from './fonts';

export default function TradeHubLogo() {
  return (
    <div
      className={`${rubik.className} flex flex-row items-center leading-none text-white `}
    >
      <MusicalNoteIcon className="mr-6 h-16  w-16" />
      <p className="text-[44px]">SessionHub</p>
    </div>
  );
}
