import { useState } from 'react';
import { hotels as initialHotels } from '../../data/mockData';
import CountryFlag from '../../components/CountryFlag';
import Modal from '../../components/Modal';

const emptyHotel = { name: '', country: '', city: '', stars: 4, pricePerNight: 100, distanceToClinic: '', amenities: [] };

export default function AdminHotels() {
  const [list, setList] = useState(initialHotels);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyHotel);
  const [amenInput, setAmenInput] = useState('');

  const openAdd = () => { setEditing(null); setForm(emptyHotel); setAmenInput(''); setModalOpen(true); };
  const openEdit = (h) => { setEditing(h); setForm({ name: h.name, country: h.country, city: h.city, stars: h.stars, pricePerNight: h.pricePerNight, distanceToClinic: h.distanceToClinic, amenities: h.amenities }); setAmenInput(h.amenities.join(', ')); setModalOpen(true); };
  const handleRemove = (id) => setList(prev => prev.filter(h => h.id !== id));

  const handleSave = (e) => {
    e.preventDefault();
    const amenities = amenInput.split(',').map(s => s.trim()).filter(Boolean);
    if (editing) {
      setList(prev => prev.map(h => h.id === editing.id ? { ...h, ...form, amenities } : h));
    } else {
      setList(prev => [...prev, { ...form, amenities, id: Date.now() }]);
    }
    setModalOpen(false);
  };

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">Hotel Partners</h1>
          <p className="text-gray-500 text-sm mt-1">{list.length} partner hotels</p>
        </div>
        <button onClick={openAdd} className="btn-primary text-sm">+ Add Hotel</button>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Hotel</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Location</th>
              <th className="text-center px-5 py-3 font-medium text-gray-500">Stars</th>
              <th className="text-right px-5 py-3 font-medium text-gray-500">Per Night</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Distance</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Amenities</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {list.map(h => (
              <tr key={h.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-3 font-medium text-gray-900">{h.name}</td>
                <td className="px-5 py-3"><CountryFlag code={h.country} /> {h.city}</td>
                <td className="px-5 py-3 text-center text-yellow-500">{'★'.repeat(h.stars)}</td>
                <td className="px-5 py-3 text-right font-medium">${h.pricePerNight}</td>
                <td className="px-5 py-3 text-gray-500">{h.distanceToClinic}</td>
                <td className="px-5 py-3">
                  <div className="flex flex-wrap gap-1">{h.amenities.slice(0, 3).map(a => <span key={a} className="text-xs bg-gray-100 px-2 py-0.5 rounded">{a}</span>)}</div>
                </td>
                <td className="px-5 py-3 text-right">
                  <button onClick={() => openEdit(h)} className="text-primary-600 text-sm hover:underline mr-3">Edit</button>
                  <button onClick={() => handleRemove(h.id)} className="text-red-500 text-sm hover:underline">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit Hotel' : 'Add Hotel'}>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Name</label>
            <input className="input-field" value={form.name} onChange={e => set('name', e.target.value)} required />
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Stars</label>
              <input type="number" min="1" max="5" className="input-field" value={form.stars} onChange={e => set('stars', +e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price/Night ($)</label>
              <input type="number" min="0" className="input-field" value={form.pricePerNight} onChange={e => set('pricePerNight', +e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Distance</label>
              <input className="input-field" value={form.distanceToClinic} onChange={e => set('distanceToClinic', e.target.value)} placeholder="e.g. 0.5 km" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amenities (comma-separated)</label>
            <input className="input-field" value={amenInput} onChange={e => setAmenInput(e.target.value)} placeholder="WiFi, Pool, Spa" />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={() => setModalOpen(false)} className="btn-ghost text-sm">Cancel</button>
            <button type="submit" className="btn-primary text-sm">{editing ? 'Save Changes' : 'Add Hotel'}</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
