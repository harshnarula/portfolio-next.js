export default function Loading() {
    return (
      <div className="flex justify-center space-y-2 flex-col items-center h-screen bg-[#181616]">
        <div className="flex space-x-2">
            <div className="w-[24px] h-[24px] bg-[#0d6efd] rounded-full animate-loading1"></div>
            <div className="w-[24px] h-[24px] bg-[#0d6efd] rounded-full animate-loading2"></div>
            <div className="w-[24px] h-[24px] bg-[#0d6efd] rounded-full animate-loading3"></div>
            <div className="w-[24px] h-[24px] bg-[#0d6efd] rounded-full animate-loading4"></div>
        </div>
      </div>
    );
}