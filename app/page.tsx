import TradeHubLogo from '@/app/ui/tradehub-logo';
import Link from 'next/link';
import Image from 'next/image';
import style from './ui/home.module.css';
import { rubik } from './ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-black p-6">
      <div className={style.gradient}>
        <div className="flex h-20 shrink-0 items-end rounded-lg p-4 md:h-52">
          <TradeHubLogo />
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row ">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-neutral-900 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${rubik.className}
            text-5xl
            text-white
            md:text-3xl
            md:leading-normal`}
          >
            <strong>Welcome to SessionHub</strong>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-sky-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-neutral-900 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-[52%] md:px-28 md:py-12">
          <Image
            src="/sessionhub-darkdesktop.png"
            width={858}
            height={686}
            className="hidden md:block"
            alt="Desktop App Logo"
          />
          <Image
            src="/sessionhub-darkmobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Mobile App Logo"
          />
        </div>
      </div>
    </main>
  );
}
