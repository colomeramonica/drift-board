export default function NewTaskSidebar({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex justify-end">
      <div className="bg-black bg-opacity-50 w-full" onClick={onClose} />
      <div className="bg-white w-1/3 h-full shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Create a New Task</h2>
        {/* Form content goes here */}
        <button
          type="button"
          className="text-white bg-red-500 px-4 py-2 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
