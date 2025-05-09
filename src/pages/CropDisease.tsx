
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CropDisease = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 p-4">
      <div className="container mx-auto max-w-5xl">
        <Link to="/">
          <Button variant="outline" className="mb-6">← Back to Home</Button>
        </Link>
        
        <h1 className="text-3xl font-bold text-amber-900 mb-4">Crop Disease & Fertilizer</h1>
        <p className="text-lg text-amber-700 mb-8">Diagnose crop issues and get treatment recommendations</p>
        
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <p className="text-xl">This page is under development</p>
          <p className="text-gray-600 mt-2">Disease diagnosis features will be available soon</p>
        </div>
      </div>
    </div>
  );
};

export default CropDisease;
