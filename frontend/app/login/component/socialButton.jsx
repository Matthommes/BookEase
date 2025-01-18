export default function SocialButton({ logoSrc, altText, label }) {
  return (
    <button
      aria-label={altText}
      className="w-full flex items-center justify-center px-4 py-1 border border-purple-300 rounded-md font-medium text-gray-500 bg-transparent hover:bg-purple-50 transition ease-in-out duration-200"
    >
      <img src={logoSrc} alt={altText} className="w-5 h-5 mr-2" />
      {label}
    </button>
  );
}
