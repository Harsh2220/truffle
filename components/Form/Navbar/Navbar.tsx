export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-12 py-6 border-b border-[#DCDCDC] bg-white">
      <img src="logo.svg" />
      <div className="flex items-center gap-1">
        <p className="text-sm">Having trouble?</p>
        <p className="text-sm font-medium text-[#775DA6] cursor-pointer">
          Get Help
        </p>
      </div>
    </div>
  );
}
