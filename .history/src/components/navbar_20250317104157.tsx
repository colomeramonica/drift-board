export default function NavBar() {
  return (
    <section>
      <nav className="bg-slate-800 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-white text-2xl font-semibold">Kanban Board</h1>
        <div>
          <button className="text-white bg-slate-700 px-4 py-2 rounded-md">
            Create Task
          </button>
        </div>
      </nav>
    </section>
  );
}
