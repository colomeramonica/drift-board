import Wave from '@/assets/wave';

export default function NavBar() {
  return (
    <section>
      <nav className="rounded-sm w-full min-w-screen bg-slate-800 p-2 flex justify-between items-center shadow-md mb-4">
        <h1 className="font-kanit flex flex-row gap-2 text-white text-2xl font-light align-middle ">
          <Wave stroke="white" width="48px" height="48px" />
          Drift Board
        </h1>
        <div>
          <button
            type="button"
            className="text-white bg-slate-700 px-4 py-2 rounded-md"
          >
            Create Task
          </button>
        </div>
      </nav>
    </section>
  );
}
