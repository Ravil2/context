import { Link } from 'react-router'

export default function Home() {
  return (
    <div className="flex justify-between items-center min-h-[calc(100vh-10rem)] px-8 py-12">
      <div className="w-full md:w-1/2 flex flex-col gap-8">
        <h1 className="bg-violet-400 w-fit text-black font-bold text-4xl md:text-5xl px-3 py-1 rounded-sm transform hover:skew-x-3 transition-all duration-300">
          useContext
        </h1>

        <p className="text-white/80 font-light text-lg md:text-xl leading-relaxed max-w-lg">
          Данный сайт создан как практический пример по теме хука useContext и
          служит в качестве информативного ресурса об этом хуке. Изучите
          возможности контекста на реальных примерах.
        </p>

        <button className="cursor-pointer bg-violet-400 text-black font-medium px-6 py-3 rounded-md w-fit hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-yellow-400/30">
          <Link to="/context-page">Перейти к статье →</Link>
        </button>
      </div>

      <div className="hidden md:block md:w-1/2 pl-12">
        <div className="relative">
          <img
            src="/characters.gif"
            alt="React useContext illustration"
            className="w-full max-w-xl rounded-lg shadow-2xl border-2 border-white/10"
          />
          <div className="absolute inset-0 bg-violet-400/10 rounded-lg pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}
