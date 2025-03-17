export default function NavBar() {
  return (
    <section>
      <nav className="w-full min-w-screen bg-slate-800 p-4 flex justify-between items-center shadow-md mb-4">
        <h1 className="text-white text-2xl font-semibold">Drift Board</h1>
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
