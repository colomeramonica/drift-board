import Wave from '@/assets/wave';
import { useState } from 'react';

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section>
      <nav className="rounded-sm w-full min-w-screen bg-slate-800 p-2 flex justify-between items-center shadow-md mb-4">
        <h1 className="justify-center font-kanit flex flex-row gap-2 text-white text-2xl font-light align-middle items-center">
          <Wave stroke="white" width="48px" height="48px" />
          Drift Board
        </h1>
        <div>
          <button
            type="button"
            className="text-white bg-slate-700 px-4 py-2 rounded-md"
            onClick={toggleModal}
          >
            Create Task
          </button>
        </div>
      </nav>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Create a New Task</h2>
            <button
              type="button"
              className="text-white bg-red-500 px-4 py-2 rounded-md"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
