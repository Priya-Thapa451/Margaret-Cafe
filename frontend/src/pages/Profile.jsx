import { useState, useEffect } from "react";
import { useCafeContext } from "../context/CafeContext"; // Assuming you have a context for managing cafe profile data

const EditCafeProfileForm = () => {
  const { profile, updateProfile, loading } = useCafeContext();

  const [formData, setFormData] = useState({
    name: profile.name || "",
    email: profile.email || "",
    phoneNumber: profile.phoneNumber || "",
    role: profile.role || "",
    address: profile.address || "",
    workingHours: profile.workingHours || "",
    description: profile.description || "",
    menuItems: profile.menuItems || "", // If you have a list of menu items
  });

  useEffect(() => {
    // If you're using an API to get the profile, make sure to load the data initially
    if (profile) {
      setFormData({
        name: profile.name || "",
        email: profile.email || "",
        phoneNumber: profile.phoneNumber || "",
        role: profile.role || "",
        address: profile.address || "",
        workingHours: profile.workingHours || "",
        description: profile.description || "",
        menuItems: profile.menuItems || "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData); // Assuming this is a function to update the profile in your context or API
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-semibold text-center text-gray-700">
        Edit Cafe Profile
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-600">Cafe Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-600">Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-600">Cafe Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-600">Working Hours:</label>
          <input
            type="text"
            name="workingHours"
            value={formData.workingHours}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-600">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-600">
            Menu Items (Comma Separated):
          </label>
          <input
            type="text"
            name="menuItems"
            value={formData.menuItems}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default EditCafeProfileForm;
