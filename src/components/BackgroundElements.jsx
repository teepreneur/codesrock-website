import { Music, Gamepad2 } from 'lucide-react';

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Blue blob (Left char) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#46C5D5]/10 rounded-full blur-3xl"></div>

      {/* Orange blob (Right char) */}
      <div className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-[#FF7340]/10 rounded-full blur-3xl"></div>

      {/* Pink blob (Center char) */}
      <div className="absolute top-[20%] right-[30%] w-[20vw] h-[20vw] bg-[#E91E63]/5 rounded-full blur-3xl"></div>

      <div className="absolute top-[40%] left-[20%] text-[#FDC82F]/20 animate-float">
        <Music className="w-24 h-24" strokeWidth={1.5} />
      </div>

      <div className="absolute bottom-[20%] right-[20%] text-[#5D3B98]/10 animate-float-delayed">
        <Gamepad2 className="w-32 h-32" strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default BackgroundElements;
