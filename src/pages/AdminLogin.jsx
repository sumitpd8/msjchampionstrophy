import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, AlertCircle, Trophy, Users } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated Cricket Elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <Trophy className="w-32 h-32 text-white animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <Users className="w-40 h-40 text-white animate-bounce" />
        </div>
        {/* Floating Dots Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-md">
          {/* Logo/Header Section */}
          <div className="text-center mb-8 transform animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Cricket Admin</h1>
            <p className="text-green-100 text-sm">Tournament Management System</p>
          </div>

          {/* Login Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl transform animate-fade-in-up animation-delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Admin Login</h2>
                <p className="text-green-100 text-sm">Access your tournament dashboard</p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-100 animate-shake">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Email Address</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-300" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your admin email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-300" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-green-100 text-sm animate-fade-in-up animation-delay-600">
            <p>© 2025 Cricket Tournament Management System</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;