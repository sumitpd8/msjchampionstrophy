import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [token] = useState(localStorage.getItem('adminToken') || '');
  const [registrations, setRegistrations] = useState([]);
  const navigate = useNavigate();

  const fetchRegs = async () => {
    const res = await fetch('http://localhost:5000/api/register', {
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
    await fetch(`http://localhost:5000/api/register/${id}`, {
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
    <div className="p-8">
      <h1 className="text-3xl mb-4">Admin Panel</h1>
      <button
        onClick={() => {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
        }}
        className="text-red-600 mb-4"
      >
        Logout
      </button>
      <table className="w-full border text-sm">
        <thead>
          <tr>
            <th>Team</th><th>Category</th><th>Home Ground</th><th>Founded</th>
            <th>Captain</th><th>Phone</th><th>Email</th>
            <th>Vice Captain</th><th>Address</th><th>City</th><th>State</th><th>Pincode</th>
            <th>Players</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map(reg => (
            <EditableRow key={reg._id} reg={reg} onSave={saveChanges} />
          ))}
        </tbody>
      </table>
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
    <tr className="border">
      {editableFields.map(key => (
        <td key={key} className="border p-1">
          {editing ? (
            <input
              type="text"
              value={data[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="border p-1 w-full"
            />
          ) : (
            data[key]
          )}
        </td>
      ))}

      <td className="border p-1">
        {editing ? (
          <div className="space-y-1">
            {data.players.map((player, i) => (
              <div key={i} className="flex gap-1">
                <input
                  value={player.name}
                  onChange={(e) => handlePlayerChange(i, 'name', e.target.value)}
                  placeholder="Name"
                  className="border p-1"
                />
                <input
                  value={player.role}
                  onChange={(e) => handlePlayerChange(i, 'role', e.target.value)}
                  placeholder="Role"
                  className="border p-1"
                />
              </div>
            ))}
          </div>
        ) : (
          <div>
            {data.players.map((player, i) => (
              <div key={i}>{player.name} ({player.role})</div>
            ))}
          </div>
        )}
      </td>

      <td className="border p-1">
        {editing ? (
          <>
            <button onClick={() => { onSave(reg._id, data); setEditing(false); }} className="mr-2 text-green-600">Save</button>
            <button onClick={() => { setEditing(false); setData(reg); }} className="text-gray-600">Cancel</button>
          </>
        ) : (
          <button onClick={() => setEditing(true)} className="text-blue-600">Edit</button>
        )}
      </td>
    </tr>
  );
};

export default AdminPanel;
