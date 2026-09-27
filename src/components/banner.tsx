import bannerImage from "../assets/banner-stack.png";

function Banner() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Build Your Ideal
              <br />

              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
              Explore frontend, backend, database, and development tools.
              Compare technologies and build the perfect stack for your
              next project.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                className="
                  rounded-lg
                  bg-gradient-to-r
                  from-orange-500
                  via-pink-500
                  to-violet-600
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  shadow-md
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >
                Explore Technologies
              </button>

              <button
                className="
                  rounded-lg
                  border
                  border-gray-300
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-gray-700
                  transition
                  hover:border-pink-400
                  hover:text-pink-500
                "
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Soft background glow */}
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-orange-100 via-pink-100 to-violet-100 blur-3xl" />

              <img
                src={bannerImage}
                alt="Development Stack"
                className="
                  w-64
                  object-contain
                  sm:w-72
                  lg:w-96
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Banner;