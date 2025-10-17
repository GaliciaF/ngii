import React from "react";


const schedule = [
  { day: "Monday", rooms: "101, 102, 103", staff: "Anna Dela Cruz" },
  { day: "Tuesday", rooms: "104, 105, 201", staff: "Mark Reyes" },
  { day: "Wednesday", rooms: "202, 203, 204", staff: "Liza Gomez" },
  { day: "Thursday", rooms: "205, 206, 207", staff: "Carlo Santos" },
  { day: "Friday", rooms: "208, 209, 210", staff: "Rhea Cruz" },
];

export default function CleaningSchedule() {
  return (
    <>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Cleaning Schedule</h1>

        <div className="bg-white rounded-2xl shadow-lg border overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="py-3 px-4">Day</th>
                <th className="py-3 px-4">Rooms</th>
                <th className="py-3 px-4">Assigned Staff</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((s, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4 font-medium">{s.day}</td>
                  <td className="py-2 px-4">{s.rooms}</td>
                  <td className="py-2 px-4">{s.staff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
