// Option 1: Pulsing Dots
export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-50 bg-opacity-50 z-50">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-purple-600 rounded-full animate-[bounce_1s_infinite_100ms]"></div>
        <div className="w-3 h-3 bg-purple-600 rounded-full animate-[bounce_1s_infinite_200ms]"></div>
        <div className="w-3 h-3 bg-purple-600 rounded-full animate-[bounce_1s_infinite_300ms]"></div>
      </div>
    </div>
  );
}

// Option 2: Circular Progress
export function CircularLoading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-50 bg-opacity-50 z-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-purple-200 border-solid rounded-full"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-purple-600 border-solid rounded-full border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}

// Option 3: Pulse Ring
export function PulseLoading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-50 bg-opacity-50 z-50">
      <div className="relative">
        <div className="w-12 h-12 bg-purple-600 rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 bg-purple-600 rounded-full animate-ping opacity-75"></div>
      </div>
    </div>
  );
}

// Option 4: Gradient Spinner
export function GradientLoading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-50 bg-opacity-50 z-50">
      <div className="w-16 h-16 border-8 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
    </div>
  );
}
