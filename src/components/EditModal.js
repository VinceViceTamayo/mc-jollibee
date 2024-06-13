import {useState} from "react"
import {
  Dialog,
  Transition
} from "@headlessui/react";
import {
  PencilIcon,
} from "@heroicons/react/24/outline";

const EditModal = ({ isEditModalOpen, closeEditModal, item, handleUpdateItem }) => {
  const [formData, setFormData] = useState({...item})
  const {id, category, name, size, price, cost, stock} = formData;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateItem(formData);
  }

  return (
    <Transition show={isEditModalOpen}>
      <Dialog className="relative z-10" onClose={closeEditModal}>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                      <PencilIcon
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Edit Product
                      </Dialog.Title>
                      <div className="flex flex-row items-center mt-2">
                        <p className="text-md font-normal mr-3">Category:</p>
                        <input
                          type="text"
                          name="category"
                          className="border rounded"
                          value={category}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-row items-center mt-2">
                        <p className="text-md font-normal mr-3">
                          Product Name:
                        </p>
                        <input
                          type="text"
                          name="name"
                          className="border rounded"
                          value={name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-row items-center mt-2">
                        <p className="text-md font-normal mr-3">Size:</p>
                        <input
                          type="text"
                          name="size"
                          className="border rounded"
                          value={size}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-row items-center mt-2">
                        <p className="text-md font-normal mr-3">Price:</p>
                        <input
                          type="text"
                          name="price"
                          className="border rounded"
                          value={price}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-row items-center mt-2">
                        <p className="text-md font-normal mr-3">Cost:</p>
                        <input
                          type="text"
                          name="cost"
                          className="border rounded"
                          value={cost}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-row items-center mt-2">
                        <p className="text-md font-normal mr-3">In-Stock:</p>
                        <input
                          type="text"
                          name="stock"
                          className="border rounded"
                          value={stock}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={closeEditModal}
                    data-autofocus
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default EditModal;
