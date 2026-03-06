import { useState, useRef } from 'react';
import { currentPatient } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import Modal from '../../components/Modal';
import { FileText, Upload, Download } from 'lucide-react';

export default function PatientDocuments() {
  const [docs, setDocs] = useState(currentPatient.documents);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('pdf');
  const fileRef = useRef(null);

  const handleUpload = (e) => {
    e.preventDefault();
    const newDoc = {
      id: `DOC-${String(docs.length + 1).padStart(3, '0')}`,
      name: fileName || 'Untitled Document',
      type: fileType,
      uploadDate: new Date().toISOString().split('T')[0],
      status: 'pending',
    };
    setDocs(prev => [newDoc, ...prev]);
    setUploadOpen(false);
    setFileName('');
    setFileType('pdf');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-500 text-sm">Manage your medical records and documents</p>
        </div>
        <button onClick={() => setUploadOpen(true)} className="btn-primary text-sm flex items-center gap-2"><Upload className="w-4 h-4" /> Upload</button>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Document</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Type</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Uploaded</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Status</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {docs.map(d => (
              <tr key={d.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="font-medium text-gray-900">{d.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 uppercase text-gray-500 text-xs">{d.type}</td>
                <td className="px-5 py-3 text-gray-500">{d.uploadDate}</td>
                <td className="px-5 py-3"><StatusBadge status={d.status} /></td>
                <td className="px-5 py-3 text-right">
                  <button className="text-primary-600 hover:underline text-sm flex items-center gap-1"><Download className="w-3.5 h-3.5" /> Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={uploadOpen} onClose={() => setUploadOpen(false)} title="Upload Document">
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Document Name</label>
            <input className="input-field" value={fileName} onChange={e => setFileName(e.target.value)} placeholder="e.g. Blood Test Results" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
            <select className="input-field" value={fileType} onChange={e => setFileType(e.target.value)}>
              <option value="pdf">PDF</option>
              <option value="image">Image</option>
              <option value="dicom">DICOM</option>
              <option value="lab">Lab Report</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">File</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary-400 transition" onClick={() => fileRef.current?.click()}>
              <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Click to select a file</p>
              <input ref={fileRef} type="file" className="hidden" />
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={() => setUploadOpen(false)} className="btn-ghost text-sm">Cancel</button>
            <button type="submit" className="btn-primary text-sm">Upload Document</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
