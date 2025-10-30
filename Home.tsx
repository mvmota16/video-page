export default function Home() {
  const videoUrl = "https://stgctnocloudsec.blob.core.windows.net/customization/Suporte Cateno.mp4";
  const backgroundImageUrl = "https://stgctnocloudsec.blob.core.windows.net/customization/WP_CATENO_25.png";

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('${backgroundImageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay escuro para melhorar a visibilidade do vídeo */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Container do vídeo */}
      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center gap-6">
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-auto rounded-lg shadow-2xl"
        />
        <a
          href="https://suporte.cateno.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Novo Portal de Suporte
        </a>
      </div>
    </div>
  );
}
