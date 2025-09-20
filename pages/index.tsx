import { useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    street: "",
    aptSuite: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post("http://localhost:5000/bookings", formData);
      setSuccess("Booking confirmed!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        street: "",
        aptSuite: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Example input */}
        <div>
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 w-full mt-2"
            required
          />
        </div>

        {/* Repeat similar inputs for all other fields */}
        {/* ... */}

        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </form>
    </div>
  );
};

export default BookingForm;
