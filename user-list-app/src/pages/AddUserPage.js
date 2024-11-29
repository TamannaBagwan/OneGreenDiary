import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/usersSlice';

const AddUserPage = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
  });

  const [error, setError] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.name || !userData.email || !userData.phone || !userData.companyName) {
      setError('All fields are required');
      return;
    }

    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      company: { name: userData.companyName },
    };

    dispatch(addUser(newUser));

    setUserData({
      name: '',
      email: '',
      phone: '',
      companyName: '',
    });
    setError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white border rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Name"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Company Name"
          name="companyName"
          value={userData.companyName}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
