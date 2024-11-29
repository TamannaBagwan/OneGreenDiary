
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === parseInt(id))
  );

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white border rounded-lg shadow-lg mt-4">
      <h2 className="text-2xl font-semibold mb-4">{user.name}'s Details</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back
      </button>
    </div>
  );
};

export default UserDetailsPage;
