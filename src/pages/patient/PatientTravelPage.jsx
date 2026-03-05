import { currentPatient } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import { Plane, Hotel, Stamp, Car } from 'lucide-react';

export default function PatientTravelPage() {
  const t = currentPatient.travel;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-gray-900">Travel Information</h1>
        <p className="text-gray-500 text-sm mt-1">Your flight, accommodation, and visa details</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Flight */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-bold text-gray-900 flex items-center gap-2 mb-4"><Plane className="w-5 h-5 text-blue-500" /> Flight Details</h2>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-gray-500">Airline</dt><dd className="font-medium">{t.flights.airline}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-500">Flight No.</dt><dd className="font-medium">{t.flights.flightNo}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-500">Departure</dt><dd className="font-medium">{t.flights.departure}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-500">Arrival</dt><dd className="font-medium">{t.flights.arrival}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-500">Return</dt><dd className="font-medium">{t.flights.returnDate}</dd></div>
          </dl>
        </div>

        {/* Hotel */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-bold text-gray-900 flex items-center gap-2 mb-4"><Hotel className="w-5 h-5 text-purple-500" /> Hotel</h2>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-gray-500">Hotel</dt><dd className="font-medium">{t.hotel.name}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-500">Room</dt><dd className="font-medium">{t.hotel.roomType}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-500">Check-in</dt><dd className="font-medium">{t.hotel.checkIn}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-500">Check-out</dt><dd className="font-medium">{t.hotel.checkOut}</dd></div>
          </dl>
        </div>

        {/* Visa */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-bold text-gray-900 flex items-center gap-2 mb-4"><Stamp className="w-5 h-5 text-green-500" /> Visa</h2>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-gray-500">Type</dt><dd className="font-medium">{t.visa.type}</dd></div>
            <div className="flex justify-between"><dt className="text-gray-500">Status</dt><dd><StatusBadge status={t.visa.status} /></dd></div>
            <div className="flex justify-between"><dt className="text-gray-500">Reference</dt><dd className="font-medium">{t.visa.number}</dd></div>
          </dl>
        </div>

        {/* Local Transport */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-bold text-gray-900 flex items-center gap-2 mb-4"><Car className="w-5 h-5 text-orange-500" /> Local Transport</h2>
          <p className="text-sm text-gray-600">{t.localTransport}</p>
        </div>
      </div>
    </div>
  );
}
