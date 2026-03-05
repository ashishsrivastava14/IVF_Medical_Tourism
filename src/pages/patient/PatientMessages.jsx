import { currentPatient } from '../../data/mockData';
import ChatWindow from '../../components/ChatWindow';

export default function PatientMessages() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-gray-900">Messages</h1>
        <p className="text-gray-500 text-sm mt-1">Chat with your patient coordinator</p>
      </div>

      <div className="bg-white rounded-xl border h-[600px] overflow-hidden">
        <ChatWindow messages={currentPatient.messages} />
      </div>
    </div>
  );
}
