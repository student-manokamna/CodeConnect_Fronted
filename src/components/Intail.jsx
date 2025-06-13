import React, { useState, useEffect } from 'react';
import { Code, Users, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Intail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      {/* Floating code snippets background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 text-green-400 transform -rotate-12">
          function connect() &#123; return true; &#125;
        </div>
        <div className="absolute top-32 right-20 text-purple-400 transform rotate-6">
          const match = await findMatch(profile);
        </div>
        <div className="absolute bottom-40 left-24 text-blue-400 transform rotate-3">
          if (skills.match(requirements)) &#123;
        </div>
        <div className="absolute bottom-20 right-32 text-pink-400 transform -rotate-5">
          class Developer extends Person &#123;
        </div>
        <div className="absolute top-60 left-1/3 text-yellow-400 transform rotate-12">
          &lt;Connection status="perfect" /&gt;
        </div>
        <div className="absolute bottom-48 right-1/4 text-cyan-400 transform -rotate-8">
          npm install perfect-match
        </div>
      </div>
      
      {/* Interactive blob */}
      <div 
        className="absolute blur-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 rounded-full transition-all duration-300 ease-out"
        style={{ 
          width: isHovering ? '600px' : '400px', 
          height: isHovering ? '600px' : '400px',
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(100px)'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6">
        <div 
          className="mb-6 relative group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
          <div className="relative bg-black bg-opacity-80 backdrop-blur-sm rounded-lg p-10 shadow-xl">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-6 shadow-xl">
                <Code size={40} className="text-white" />
              </div>
              
              <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                DevTinder
              </h1>
              
              <div className="h-1 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full my-4"></div>
              
              <p className="text-xl text-gray-300 mb-8 text-center max-w-md">
                Where code meets compatibility. Find your perfect development partner.
              </p>
              
              <button 
                className="relative group overflow-hidden px-10 py-4 rounded-full bg-transparent border border-indigo-500 text-white font-medium shadow-lg transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-600 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span> */}
                <span className="relative flex items-center gap-2">
                  <Sparkles size={18} />
                  <Link to={'/feed'}>
                  Start Connecting
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="flex gap-8 mt-12">
          <div className="bg-black bg-opacity-40 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3 text-white">
            <Users size={20} className="text-pink-400" />
            <span>20K+ Developers</span>
          </div>
          <div className="bg-black bg-opacity-40 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3 text-white">
            <Heart size={20} className="text-pink-400" />
            <span>5K+ Matches Daily</span>
          </div>
          <div className="bg-black bg-opacity-40 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3 text-white">
            <Code size={20} className="text-pink-400" />
            <span>150+ Tech Stacks</span>
          </div>
        </div>
      </div>
    </div>
  );
}