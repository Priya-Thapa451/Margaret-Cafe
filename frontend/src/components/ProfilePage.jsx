import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LogOut } from "lucide-react";

export default function ProfilePage() {
  const [user] = useState({
    name: "Emma Watson",
    email: "emma.w@email.com",
    profilePic: "https://via.placeholder.com/100",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Card className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        <div className="flex items-center space-x-4">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <CardContent className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Margaret Cafe</h3>
          <p className="text-gray-600">
            A cozy café offering barista and bakery education, online table
            booking, food delivery, and more.
          </p>
          <h4 className="mt-4 text-md font-semibold">Our Services</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Barista & Bakery Courses</li>
            <li>Online Table Booking</li>
            <li>Food Delivery</li>
            <li>Event Catering</li>
          </ul>
        </CardContent>

        <div className="flex justify-end mt-4">
          <Button variant="destructive" className="flex items-center">
            <LogOut className="mr-2" size={16} /> Logout
          </Button>
        </div>
      </Card>
    </div>
  );
}
