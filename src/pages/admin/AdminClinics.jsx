import { useState } from 'react';
import { clinics as initialClinics } from '../../data/mockData';
import { Star } from 'lucide-react';
import CountryFlag from '../../components/CountryFlag';
import Modal from '../../components/Modal';

const emptyClinic = { name: '', country: '', city: '', rating: 4.5, reviews: 0, accreditations: [] };

export default function AdminClinics() {
  const [list, setList] = useState(initialClinics);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyClinic);
  const [accInput, setAccInput] = useState('');

  const openAdd = () => { setEditing(null); setForm(emptyClinic); setAccInput(''); setModalOpen(true); };
  const openEdit = (c) => { setEditing(c); setForm({ name: c.name, country: c.country, city: c.city, rating: c.rating, reviews: c.reviews, accreditations: c.accreditations }); setAccInput(c.accreditations.join(', ')); setModalOpen(true); };
  const handleRemove = (id) => setList(prev => prev.filter(c => c.id !== id));

  const handleSave = (e) => {
    e.preventDefault();
    const accreditations = accInput.split(',').map(s => s.trim()).filter(Boolean);
    if (editing) {
      setList(prev => prev.map(c => c.id === editing.id ? { ...c, ...form, accreditations } : c));
    } else {
      setList(prev => [...prev, { ...form, accreditations, id: Date.now(), image: '', treatments: [] }]);
    }
    setModalOpen(false);
  };

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">Manage Clinics</h1>
          <p className="text-gray-500 text-sm mt-1">{list.length} partner clinics</p>
        </div>
        <button onClick={openAdd} className="btn-primary text-sm">+ Add Clinic</button>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Clinic</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Location</th>
              <th className="text-center px-5 py-3 font-medium text-gray-500">Rating</th>
              <th className="text-center px-5 py-3 font-medium text-gray-500">Reviews</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Accreditations</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {list.map(c => (
              <tr key={c.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-3 font-medium text-gray-900">{c.name}</td>
                <td className="px-5 py-3"><CountryFlag code={c.country} showName /> · {c.city}</td>
                <td className="px-5 py-3 text-center"><Star className="w-3.5 h-3.5 text-yellow-500 fill-current inline" /> {c.rating}</td>
                <td className="px-5 py-3 text-center text-gray-500">{c.reviews}</td>
                <td className="px-5 py-3">
                  <div className="flex flex-wrap gap-1">{c.accreditations.slice(0, 2).map(a => <span key={a} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded">{a}</span>)}</div>
                </td>
                <td className="px-5 py-3 text-right">
                  <button onClick={() => openEdit(c)} className="text-primary-600 text-sm hover:underline mr-3">Edit</button>
                  <button onClick={() => handleRemove(c.id)} className="text-red-500 text-sm hover:underline">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit Clinic' : 'Add Clinic'}>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Clinic Name</label>
            <input className="input-field" value={form.name} onChange={e => set('name', e.target.value)} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country Code</label>
              <input className="input-field" value={form.country} onChange={e => set('country', e.target.value)} placeholder="e.g. CZ" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input className="input-field" value={form.city} onChange={e => set('city', e.target.value)} required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
              <input type="number" step="0.1" min="0" max="5" className="input-field" value={form.rating} onChange={e => set('rating', +e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Reviews</label>
              <input type="number" min="0" className="input-field" value={form.reviews} onChange={e => set('reviews', +e.target.value)} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Accreditations (comma-separated)</label>
            <input className="input-field" value={accInput} onChange={e => setAccInput(e.target.value)} placeholder="JCI, ISO, ESHRE" />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={() => setModalOpen(false)} className="btn-ghost text-sm">Cancel</button>
            <button type="submit" className="btn-primary text-sm">{editing ? 'Save Changes' : 'Add Clinic'}</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
