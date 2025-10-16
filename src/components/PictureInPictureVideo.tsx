export default function PictureInPictureVideo() {
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


    </div>
  );
}