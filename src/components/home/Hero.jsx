import backgroundImage from "../../assets/bg.png";

const Hero = () => {
  return (
    <section className="relative h-[500px] rounded-[.5rem] overflow-hidden w-full my-3">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.3, // Set desired opacity for the background image
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to MovieStreamer
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Discover the latest movies and series right at your fingertips. Join
            us to explore a vast collection of entertainment content tailored
            just for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
