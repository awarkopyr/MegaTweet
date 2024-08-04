import React, { useEffect, useState } from 'react';
import authService from '../../appwrite/auth.js';
import Spinner from 'react-bootstrap/Spinner'

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-sm mx-auto my-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {user ? (

          <div className="sm:flex sm:items-right px-6 py-4">
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:text-left">
              <div className="text-xl leading-tight my-2">Name: {user.name}</div>
              <div className="text-xl leading-tight my-2">Email: {user.email}</div>
            </div>
          </div>
        ) : (
          <Spinner animation="grow" variant="dark" />
        )}
      </div>
    </div>

  );
};

export default Profile;

