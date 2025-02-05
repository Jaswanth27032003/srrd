import { useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  // Create a reference to the video element
  const videoRef = useRef(null);

  // Function to reverse the video when it ends
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration; // Set the time to the end
      videoRef.current.playbackRate = -1; // Reverse playback rate
      videoRef.current.play(); // Start playing in reverse
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gray-800">
      <div className="absolute inset-0">
        <video
          ref={videoRef}  // Assign the ref to the video element
          src="/video/2.mp4"
          autoPlay
          loop={false}  // Don't loop automatically, as we'll handle it manually
          muted
          className="w-full h-full object-cover opacity-20"
          onEnded={handleVideoEnd}  // Trigger the reverse when the video ends
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Innovating the Future of
          <span className="block text-blue-300">Drug Development</span>
        </h1>

        <p className="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-xl md:mt-5 md:max-w-3xl">
          Leading Contract Research Organization delivering excellence in custom synthesis,
          API manufacturing, and analytical testing.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="#services" className="rounded-md bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition duration-300 flex items-center">
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
}
