import React from 'react';

const Premium = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 w-full max-w-6xl mx-auto justify-center mt-10">
      {/* Silver Membership Card */}
      <div className="flex-1 border rounded-lg overflow-hidden shadow-lg bg-gray-100">
        <div className="p-6 bg-gray-300">
          <h2 className="text-3xl font-bold text-center text-gray-700">SILVER</h2>
          <p className="text-center text-gray-600 mt-2">Premium Membership</p>
        </div>
        
        <div className="p-6">
          <ul className="space-y-3 mb-6 text-black">
            <li className="flex items-center  ">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Standard features access
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Priority support
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Monthly newsletter
            </li>
          </ul>
          
          <div className="text-center mb-4">
            <span className="text-4xl font-bold text-gray-700">$9.99</span>
            <span className="text-gray-500">/month</span>
          </div>
          
          <button className="w-full py-3 px-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors">
            Pay Now
          </button>
        </div>
      </div>

      {/* Golden Membership Card */}
      <div className="flex-1 border rounded-lg overflow-hidden shadow-lg bg-yellow-50">
        <div className="p-6 bg-yellow-100">
          <h2 className="text-3xl font-bold text-center text-yellow-700">GOLDEN</h2>
          <p className="text-center text-yellow-600 mt-2">Premium Membership</p>
        </div>
        
        <div className="p-6">
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              All Silver features
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Exclusive content
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              VIP events access
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              24/7 Premium support
            </li>
          </ul>
          
          <div className="text-center mb-4">
            <span className="text-4xl font-bold text-yellow-700">$19.99</span>
            <span className="text-yellow-600">/month</span>
          </div>
          
          <button className="w-full py-3 px-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;