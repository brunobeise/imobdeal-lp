"use client";
import { useState } from "react";

export default function PictureInPictureVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative">
      {/* Vídeo principal da plataforma */}
      <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video">
        <iframe
          className="w-full h-full"
          src="https://player.mux.com/Vp6Q9WfpGa2r01gLKttBrWDKTLdtgG00gyzbQ9M9JYoJY?metadata-video-title=Venda+mais+com+o+ImobDeal&video-title=Venda+mais+com+o+ImobDeal&accent-color=%23113955&primary-color=%23ffffff&secondary-color=%23113955&autoplay=1&muted=1&loop=1"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Vídeo do Pedro em Picture-in-Picture */}
      <div className="absolute bottom-4 right-4 w-32 h-20 md:w-40 md:h-24 bg-white rounded-lg shadow-lg overflow-hidden border-2 border-white">
        <div className="relative w-full h-full">
          {!isPlaying ? (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-1 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l8-5-8-5z"/>
                  </svg>
                </div>
                <p className="text-white text-xs font-medium">Pedro explica</p>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              {/* Aqui você pode adicionar o vídeo real do Pedro */}
              <div className="w-full h-full bg-blue-900 flex items-center justify-center text-white text-xs text-center p-2">
                <div>
                  <div className="w-6 h-6 mx-auto mb-1 bg-white rounded-full"></div>
                  <p>Vídeo do Pedro explicando a plataforma</p>
                </div>
              </div>
              <button 
                className="absolute top-1 right-1 w-4 h-4 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center text-xs"
                onClick={() => setIsPlaying(false)}
              >
                ×
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}