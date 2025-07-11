import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [token] = useState(localStorage.getItem('adminToken') || '');
  const [registrations, setRegistrations] = useState([]);
  const navigate = useNavigate();

  const fetchRegs = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/register`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) {
      setRegistrations(await res.json());
    } else {
      localStorage.removeItem('adminToken');
      navigate('/admin/login');
    }
  };

  useEffect(() => {
    if (token) fetchRegs();
    else navigate('/admin/login');
  }, [token]);

  const saveChanges = async (id, updatedData) => {
    await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/register/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(updatedData)
    });
    fetchRegs();
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold items-center">Admin Panel</h1>
        <button
          onClick={() => {
            localStorage.removeItem('adminToken');
            navigate('/admin/login');
          }}
          className="mt-2 sm:mt-0 text-red-600 border border-red-500 px-4 py-1 rounded hover:bg-red-50 transition"
        >
          Logout
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full border text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-2 border">Team</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Ground</th>
              <th className="p-2 border">Founded</th>
              <th className="p-2 border">Captain</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Vice Captain</th>
              <th className="p-2 border">Address</th>
              <th className="p-2 border">City</th>
              <th className="p-2 border">State</th>
              <th className="p-2 border">Pincode</th>
              <th className="p-2 border">Players</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <EditableRow key={reg._id} reg={reg} onSave={saveChanges} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const EditableRow = ({ reg, onSave }) => {
  const [data, setData] = useState(reg);
  const [editing, setEditing] = useState(false);

  const excludedKeys = ['_id', 'razorpay_payment_id', 'razorpay_order_id', 'razorpay_signature', 'amountPaid', 'createdAt', '__v'];
  const editableFields = Object.keys(data).filter(key => !excludedKeys.includes(key) && key !== 'players');

  const handleChange = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const handlePlayerChange = (i, field, value) => {
    const updatedPlayers = [...data.players];
    updatedPlayers[i][field] = value;
    setData(prev => ({ ...prev, players: updatedPlayers }));
  };

  return (
    <tr className="border hover:bg-gray-50 transition">
      {editableFields.map((key) => (
        <td key={key} className="border p-2 align-top">
          {editing ? (
            <input
              type="text"
              value={data[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full border px-2 py-1 rounded"
            />
          ) : (
            <div className="whitespace-pre-wrap break-words">{data[key]}</div>
          )}
        </td>
      ))}

      <td className="border p-2 align-top">
        {editing ? (
          <div className="space-y-1">
            {data.players.map((player, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-1">
                <input
                  value={player.name}
                  onChange={(e) => handlePlayerChange(i, 'name', e.target.value)}
                  placeholder="Name"
                  className="border px-2 py-1 rounded w-full"
                />
                <input
                  value={player.role}
                  onChange={(e) => handlePlayerChange(i, 'role', e.target.value)}
                  placeholder="Role"
                  className="border px-2 py-1 rounded w-full"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-xs space-y-1">
            {data.players.map((p, i) => (
              <div key={i}>{p.name} <span className="text-gray-500">({p.role})</span></div>
            ))}
          </div>
        )}
      </td>

      <td className="border p-2 align-top">
        {editing ? (
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => { onSave(reg._id, data); setEditing(false); }}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={() => { setEditing(false); setData(reg); }}
              className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Edit
          </button>
        )}
      </td>
    </tr>
  );
};

export default AdminPanel;
