import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Trophy,
  User,
  MapPin,
  Users,
  Plus,
  Trash2,
  Save,
  CreditCard,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {

const [errors, setErrors] = useState({});
const [showSuccessDialog, setShowSuccessDialog] = useState(false);
const navigate = useNavigate();


  const [formData, setFormData] = useState({
    teamName: '',
    category: 'Local',
    homeGround: '',
    founded: '',
    captainName: '',
    captainPhone: '',
    captainEmail: '',
    viceCaptain: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    players: [{ name: '', role: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlayerChange = (index, field, value) => {
    const newPlayers = [...formData.players];
    newPlayers[index][field] = value;
    setFormData((prev) => ({ ...prev, players: newPlayers }));
  };

  const addPlayer = () => {
    setFormData((prev) => ({
      ...prev,
      players: [...prev.players, { name: '', role: '' }],
    }));
  };

  const removePlayer = (index) => {
    const updatedPlayers = formData.players.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, players: updatedPlayers }));
  };

  const validateForm = () => {
  const newErrors = {};

  if (!formData.teamName.trim()) newErrors.teamName = "Team name is required.";
  if (!formData.captainName.trim()) newErrors.captainName = "Captain name is required.";

  if (formData.captainPhone && !/^\d{10}$/.test(formData.captainPhone))
    newErrors.captainPhone = "Phone must be 10 digits.";

  if (formData.captainEmail && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.captainEmail))
    newErrors.captainEmail = "Invalid email address.";

  if (formData.pincode && !/^\d{6}$/.test(formData.pincode))
    newErrors.pincode = "Pincode must be 6 digits.";

  formData.players.forEach((player, index) => {
    if (!player.name.trim()) {
      newErrors[`playerName${index}`] = `Player ${index + 1} name is required.`;
    }
    if (!player.role.trim()) {
      newErrors[`playerRole${index}`] = `Player ${index + 1} role is required.`;
    }
  });

  return errors;
    };

  const handleSubmit = () => {
  const errors = validateForm();
  if (errors.length > 0) {
    alert("Please fix the following:\n" + errors.join("\n"));
    return;
  }

  console.log("Form Data Submitted:", formData);
  alert("Form submitted to console (no backend yet).");
};

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};


const handlePayment = async () => {
  const isScriptLoaded = await loadRazorpayScript();
  if (!isScriptLoaded) {
    alert("❌ Failed to load Razorpay SDK. Please check your internet connection.");
    return;
  }

  // Step 1: Create Razorpay Order
  let orderData;
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 1 }), // ₹1 (in INR, sent as 100 paise to Razorpay)
    });

    orderData = await res.json();

    if (!orderData || !orderData.id) {
      alert("❌ Failed to create order. Check server logs.");
      return;
    }
  } catch (error) {
    console.error("❌ Error creating Razorpay order:", error);
    alert("❌ Error while creating payment order.");
    return;
  }

  // Step 2: Razorpay Payment Configuration
  const options = {
    key: "rzp_live_5KXjWRtyKt8ees", // Replace with your actual Razorpay key_id
    amount: orderData.amount,
    currency: orderData.currency,
    name: "MSJ Champions Trophy",
    description: "Team Registration Fee",
    order_id: orderData.id,
    handler: async function (response) {
      alert("✅ Payment Successful");

      // Step 3: Submit registration + payment details to backend
      const fullPayload = {
        ...formData,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_order_id: response.razorpay_order_id,
        razorpay_signature: response.razorpay_signature,
        amountPaid: orderData.amount / 100, // Store in ₹
      };

      try {
        const submitRes = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fullPayload),
        });

        if (submitRes.ok) {
        //   alert("🎉 Registration & Payment Successful!");
          setShowSuccessDialog(true); // ✅ Show success modal

          // Optionally reset form here:
          // setFormData(initialState); 
        } else {
          const errorData = await submitRes.json();
          console.error("❌ Backend Error:", errorData);
          alert("❌ Payment succeeded but failed to save data. Please contact support.");
        }
      } catch (err) {
        console.error("❌ Submission Error:", err);
        alert("❌ Failed to submit registration data. Check console for details.");
      }
    },
    prefill: {
      name: formData.captainName,
      email: formData.captainEmail,
      contact: formData.captainPhone,
    },
    notes: {
      teamName: formData.teamName,
      category: formData.category,
    },
    theme: {
      color: "#0d47a1",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};



  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-4 border-yellow-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-4 border-blue-300 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-full shadow-2xl w-fit mx-auto mb-6">
            <Users className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Team Registration</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Register your team for MSJ Champions Trophy 2026 - Flexible registration process
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center text-blue-600">
              <span className="text-2xl md:text-3xl font-bold mb-6">Fillup and Pay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Team Info */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-200 space-y-4">
            <h3 className="text-2xl font-bold text-blue-800 flex items-center">
              <Trophy className="h-6 w-6 mr-3" />
              Team Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="teamName" value={formData.teamName} onChange={handleChange} placeholder="Team Name *" className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg" />
              
              <input name="homeGround" value={formData.homeGround} onChange={handleChange} placeholder="Home Ground" className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg" />
              <input name="founded" value={formData.founded} onChange={handleChange} type="number" placeholder="Founded Year" className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg" />
            </div>
          </div>

          {/* Captain Info */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-200 space-y-4">
            <h3 className="text-2xl font-bold text-blue-800 flex items-center">
              <User className="h-6 w-6 mr-3" />
              Captain & Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="captainName" value={formData.captainName} onChange={handleChange} placeholder="Captain Name *" className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg" />
              <input name="captainPhone" value={formData.captainPhone} onChange={handleChange} placeholder="Phone" className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg" />
              <input name="captainEmail" value={formData.captainEmail} onChange={handleChange} placeholder="Email" className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg" />
              <input name="viceCaptain" value={formData.viceCaptain} onChange={handleChange} placeholder="Vice Captain" className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg" />
            </div>
          </div>

          {/* Address Info */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-200 space-y-4">
            <h3 className="text-2xl font-bold text-blue-800 flex items-center">
              <MapPin className="h-6 w-6 mr-3" />
              Address Information
            </h3>
            <textarea name="address" value={formData.address} onChange={handleChange} rows="3" placeholder="Full address" className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="px-4 py-3 border-2 border-blue-200 rounded-lg" />
              <input name="state" value={formData.state} onChange={handleChange} placeholder="State" className="px-4 py-3 border-2 border-blue-200 rounded-lg" />
              <input name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="px-4 py-3 border-2 border-blue-200 rounded-lg" />
            </div>
          </div>

          {/* Players */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              <Users className="h-6 w-6 mr-3" />
              Players Information
            </h3>

            <div className="space-y-4">
              {formData.players.map((player, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <input type="text" value={player.name} onChange={(e) => handlePlayerChange(index, 'name', e.target.value)} placeholder="Player Name" className="px-4 py-2 border-2 border-blue-200 rounded-lg" />
                  <input type="text" value={player.role} onChange={(e) => handlePlayerChange(index, 'role', e.target.value)} placeholder="Role (e.g. Batsman)" className="px-4 py-2 border-2 border-blue-200 rounded-lg" />
                  <button onClick={() => removePlayer(index)} className="text-red-600 hover:text-red-800 flex items-center justify-center">
                    <Trash2 className="h-5 w-5 mr-1" />
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button onClick={addPlayer} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transition-all duration-300">
                <Plus className="h-5 w-5 mr-2" />
                Add Player
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">

            <button
  onClick={handlePayment}
  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold text-lg rounded-full shadow-lg hover:scale-105 transition-all duration-300"
>
  <CreditCard className="h-6 w-6 mr-3" />
  Quick Register & Pay
  <ArrowRight className="ml-3 h-6 w-6" />
</button>

          </div>
        </div>
      </section>
      {showSuccessDialog && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
      <h2 className="text-2xl font-bold text-green-700 mb-4">🎉 Registration Successful!</h2>
      <p className="text-gray-600 mb-6">Your team has been successfully registered for the MSJ Champions Trophy.</p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Go to Homepage
      </button>
    </div>
  </div>
)}

    </div>

    
  );
};

export default Register;
