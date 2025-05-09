
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MarketAnalysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 p-4">
      <div className="container mx-auto max-w-5xl">
        <Link to="/">
          <Button variant="outline" className="mb-6">← Back to Home</Button>
        </Link>
        
        <h1 className="text-3xl font-bold text-purple-900 mb-4">Market Analysis</h1>
        <p className="text-lg text-purple-700 mb-8">Track prices and connect with buyers</p>
        
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <p className="text-xl">This page is under development</p>
          <p className="text-gray-600 mt-2">Market analysis features will be available soon</p>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
