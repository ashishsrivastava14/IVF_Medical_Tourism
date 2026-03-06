import { useState } from 'react';
import { doctors as initialDoctors } from '../../data/mockData';
import { Star, MapPin } from 'lucide-react';
import CountryFlag from '../../components/CountryFlag';
import Modal from '../../components/Modal';

const emptyDoctor = { name: '', specialty: '', country: '', city: '', rating: 4.5, successRate: 70, experience: 5 };

export default function AdminDoctors() {
  const [list, setList] = useState(initialDoctors);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyDoctor);

  const openAdd = () => { setEditing(null); setForm(emptyDoctor); setModalOpen(true); };
  const openEdit = (d) => { setEditing(d); setForm({ name: d.name, specialty: d.specialty, country: d.country, city: d.city, rating: d.rating, successRate: d.successRate, experience: d.experience }); setModalOpen(true); };
  const handleRemove = (id) => setList(prev => prev.filter(d => d.id !== id));

  const handleSave = (e) => {
    e.preventDefault();
    if (editing) {
      setList(prev => prev.map(d => d.id === editing.id ? { ...d, ...form } : d));
    } else {
      setList(prev => [...prev, { ...form, id: Date.now(), photo: `https://ui-avatars.com/api/?name=${encodeURIComponent(form.name)}&background=0ea5e9&color=fff`, clinicId: 1 }]);
    }
    setModalOpen(false);
  };

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">Manage Doctors</h1>
          <p className="text-gray-500 text-sm mt-1">{list.length} registered doctors</p>
        </div>
        <button onClick={openAdd} className="btn-primary text-sm">+ Add Doctor</button>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Doctor</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Specialty</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Location</th>
              <th className="text-center px-5 py-3 font-medium text-gray-500">Rating</th>
              <th className="text-center px-5 py-3 font-medium text-gray-500">Success</th>
              <th className="text-center px-5 py-3 font-medium text-gray-500">Experience</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {list.map(d => (
              <tr key={d.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <img src={d.photo} alt="" className="w-8 h-8 rounded-full object-cover" />
                    <span className="font-medium text-gray-900">{d.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-gray-500">{d.specialty}</td>
                <td className="px-5 py-3"><CountryFlag code={d.country} showName /> · {d.city}</td>
                <td className="px-5 py-3 text-center"><Star className="w-3.5 h-3.5 text-yellow-500 fill-current inline" /> {d.rating}</td>
                <td className="px-5 py-3 text-center text-green-600 font-medium">{d.successRate}%</td>
                <td className="px-5 py-3 text-center text-gray-500">{d.experience} yrs</td>
                <td className="px-5 py-3 text-right">
                  <button onClick={() => openEdit(d)} className="text-primary-600 text-sm hover:underline mr-3">Edit</button>
                  <button onClick={() => handleRemove(d.id)} className="text-red-500 text-sm hover:underline">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit Doctor' : 'Add Doctor'}>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input className="input-field" value={form.name} onChange={e => set('name', e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
            <input className="input-field" value={form.specialty} onChange={e => set('specialty', e.target.value)} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country Code</label>
              <input className="input-field" value={form.country} onChange={e => set('country', e.target.value)} placeholder="e.g. SG" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input className="input-field" value={form.city} onChange={e => set('city', e.target.value)} required />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
              <input type="number" step="0.1" min="0" max="5" className="input-field" value={form.rating} onChange={e => set('rating', +e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Success %</label>
              <input type="number" min="0" max="100" className="input-field" value={form.successRate} onChange={e => set('successRate', +e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience (yrs)</label>
              <input type="number" min="0" className="input-field" value={form.experience} onChange={e => set('experience', +e.target.value)} />
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={() => setModalOpen(false)} className="btn-ghost text-sm">Cancel</button>
            <button type="submit" className="btn-primary text-sm">{editing ? 'Save Changes' : 'Add Doctor'}</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
