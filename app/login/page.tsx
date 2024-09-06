import SessionHubLogo from '@/app/ui/sessionhub-logo';
import LoginForm from '@/app/ui/login-form';
import css from '@/app/ui/home.module.css';

export default function LoginPage() {
  return (
    <main className="mt-8 flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-center rounded-lg bg-sky-700 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <p className={css.titleGradient}>SessionHub</p>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
