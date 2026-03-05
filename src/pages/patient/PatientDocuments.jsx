import { useState } from 'react';
import { currentPatient } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import { FileText, Upload, Download } from 'lucide-react';

export default function PatientDocuments() {
  const [docs] = useState(currentPatient.documents);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-500 text-sm">Manage your medical records and documents</p>
        </div>
        <button className="btn-primary text-sm flex items-center gap-2"><Upload className="w-4 h-4" /> Upload</button>
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
    </div>
  );
}
