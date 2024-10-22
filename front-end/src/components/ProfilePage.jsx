import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [name, setName] = useState("Ali");
  const [email, setEmail] = useState("ali@example.com");
  const [tasksCompleted, setTasksCompleted] = useState(10);
  const [role, setRole] = useState("Developer");
  const [profilePicture, setProfilePicture] = useState(null); 
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (storedUserDetails) {
      setName(storedUserDetails.name);
      setEmail(storedUserDetails.email);
      setTasksCompleted(storedUserDetails.tasksCompleted);
      setRole(storedUserDetails.role);
      setProfilePicture(storedUserDetails.profilePicture);
    }
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify({ name, email, tasksCompleted, role, profilePicture }));
    alert('User Details Saved!');
    setIsEditing(false); 
  };

  return (
    <div className="profile-container p-6 bg-[#0E0725] text-white">
      <h1 className="text-4xl font-bold mb-4">Profile</h1>

      <div className="flex items-center mb-4">
        <img
          src={profilePicture || "https://via.placeholder.com/150"} // Use uploaded image or placeholder
          alt="Profile"
          className="rounded-full w-32 h-32 mr-4"
        />
        <div>
          <h2 className="text-2xl">{name}</h2>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Tasks Completed:</strong> {tasksCompleted}</p>
          <p><strong>Role:</strong> {role}</p>
        </div>
      </div>

      {isEditing ? (
        <form onSubmit={handleSaveChanges} className="mt-4">
          <div className="mb-4">
            <label className="block text-white">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Save Changes
          </button>
        </form>
      ) : (
        <button onClick={handleEdit} className="mt-4 px-4 py-2 bg-[#350571] hover:bg-[#4F04A3] rounded">
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default ProfilePage;
