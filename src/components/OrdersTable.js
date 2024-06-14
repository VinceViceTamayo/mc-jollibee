import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { mcJollibee, db } from "../firebase";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import AddModal from "./AddModal";

const MySwal = withReactContent(Swal);

const OrdersTable = () => {
  const [isAddModalOpen, setisAddModalOpen] = useState(false);
  const [isEditModalOpen, setisEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [itemBeingEdited, setItemBeingEdited] = useState(null);
  const [itemIdBeingDeleted, setItemIdBeingDeleted] = useState(null);

  //render table rows
  useEffect(() => {
    const unsubscribe = onSnapshot(mcJollibee, (snapshot) => {
      const productsArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setProducts(productsArray);
    });
    return unsubscribe;
  }, []);

  //Add functions
  const openAddModal = () => setisAddModalOpen(true);
  const closeAddModal = () => setisAddModalOpen(false);

  const handleAddItem = async (item) => {
    const {category, name, size, price, cost, stock} = item;

    const newProduct = {
      category: category,
      name: name,
      size: size,
      price: price,
      cost: cost,
      stock: stock,
      createdAt: Date.now(),
      updatedAt: Date.now()
    }

    try{
      await addDoc(mcJollibee, newProduct);
      closeAddModal();

      MySwal.fire({
        title: 'Success!',
        text: 'Product added successfully',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });
    }catch(error){
      console.error(error);
    }

  }

  //Edit functions
  const openEditModal = (item) => {
    setItemBeingEdited(item);
    setisEditModalOpen(true);
  };
  const closeEditModal = () => {
    setisEditModalOpen(false);
    setItemBeingEdited(null);
  };

  const handleUpdateItem = async (updatedItem) => {
    try{
      const docRef = doc(db, "products", updatedItem.id)
      await setDoc(docRef, {...updatedItem, updatedAt: Date.now()}, {merge: true})

      closeEditModal();

      MySwal.fire({
        title: 'Success!',
        text: 'Product updated successfully',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });
    }catch(error){
      console.error(error)
    }
  };

  //Delete functions
  const openDeleteModal = (itemId) => {
    setItemIdBeingDeleted(itemId)
    setisDeleteModalOpen(true);
  }
  const closeDeleteModal = () => setisDeleteModalOpen(false);

  const handleDeleteItem = async (itemId) => {
    try{
      const docRef = doc(db, "products", itemId)
      await deleteDoc(docRef)

      setisDeleteModalOpen(false);

      MySwal.fire({
        title: 'Success!',
        text: 'Product deleted successfully',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });
    }catch(error){
      console.error(error)
    }
  }

  const tableElements = (openEditModal, openDeleteModal) => {
    if (products.length > 0) {
      return products.map((item) => {
        const { id, category, name, size, price, cost, stock } = item;

        return (
          <tr className="bg-white border" key={id}>
            <td className="flex mx-auto px-6 py-4">
              <button
                onClick={() => openEditModal(item)}
                className="px-1 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                <PencilIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => openDeleteModal(id)}
                className="mx-1 px-1 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </td>
            <td className="px-6 py-4">{category}</td>
            <td className="px-6 py-4">{name}</td>
            <td className="px-6 py-4">{size}</td>
            <td className="px-6 py-4">{price}</td>
            <td className="px-6 py-4">{cost}</td>
            <td className="px-6 py-4">{stock}</td>
          </tr>
        );
      });
    }
    return (
      <tr>
        <td className="px-6 py-3 text-center" colSpan="7">
          No data
        </td>
      </tr>
    );
  };

  return (
    <div className="flex flex-col items-center pb-14 w-full">
      <div className="w-10/12 flex justify-start mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={openAddModal}
        >
          Add
        </button>
      </div>
      <div className="overflow-hidden border border-gray-200 shadow-lg rounded-lg w-10/12">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-3">Actions</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Product Name</th>
                <th className="px-6 py-3">Size</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Cost</th>
                <th className="px-6 py-3">In-stock</th>
              </tr>
            </thead>
            <tbody>{tableElements(openEditModal, openDeleteModal)}</tbody>
          </table>
        </div>
      </div>
      {
        isAddModalOpen && (
          <AddModal
            isAddModalOpen={isAddModalOpen}
            closeAddModal={closeAddModal}
            handleAddItem={handleAddItem}
          />
        )
      }
      {
        isEditModalOpen && (
          <EditModal
            isEditModalOpen={isEditModalOpen}
            closeEditModal={closeEditModal}
            item={itemBeingEdited}
            handleUpdateItem={handleUpdateItem}
          />
        )
      }
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        closeDeleteModal={closeDeleteModal}
        itemId={itemIdBeingDeleted}
        handleDeleteItem={handleDeleteItem}
      />
    </div>
  );
};

export default OrdersTable;
