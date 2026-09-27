import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Technology {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load technology data from JSON
  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading technologies:", error);
        setLoading(false);
        toast.error("Failed to load technologies.");
      });
  }, []);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const removeFromStack = (id: number) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack(stack.filter((item) => item.id !== id));

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  if (loading) {
    return (
      <section className="flex min-h-[500px] items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-3">
          <span className="loading loading-spinner loading-lg text-pink-500"></span>

          <p className="text-sm text-gray-500">
            Loading technologies...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-6 py-14">
      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
            Explore popular technologies and select the tools you need
            to build your ideal development stack.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

            {technologies.map((tech) => {
              const added = stack.some(
                (item) => item.id === tech.id
              );

              return (
                <div
                  key={tech.id}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="h-8 w-8 object-contain"
                      />
                    </div>

                    {tech.badge && (
                      <span className="rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-medium text-pink-500">
                        {tech.badge}
                      </span>
                    )}
                  </div>

                  {/* Technology Name */}
                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {tech.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 min-h-[48px] text-xs leading-5 text-gray-500">
                    {tech.description}
                  </p>

                  {/* Category + Difficulty */}
                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-600">
                      {tech.category}
                    </span>

                    <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-medium text-orange-500">
                      {tech.difficulty}
                    </span>

                  </div>

                  {/* Rating */}
                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-xs text-gray-500">
                      Rating
                    </span>

                    <span className="text-xs font-semibold text-yellow-500">
                      ★ {tech.rating}
                    </span>

                  </div>

                  {/* Add To Stack Button */}
                  <button
                    onClick={() => addToStack(tech)}
                    disabled={added}
                    className={`mt-4 w-full rounded-lg py-2.5 text-xs font-medium transition ${
                      added
                        ? "cursor-not-allowed bg-gray-100 text-gray-400"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {added
                      ? "✓ Added to Stack"
                      : "Add to Stack"}
                  </button>

                </div>
              );
            })}

          </div>

          {/* Your Stack Sidebar */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

            {/* Sidebar Header */}
            <div className="flex items-center justify-between">

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Your Stack
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  {stack.length}{" "}
                  {stack.length === 1
                    ? "technology"
                    : "technologies"}{" "}
                  selected
                </p>
              </div>

              {/* Remove All */}
              {stack.length > 0 && (
                <button
                  onClick={removeAll}
                  className="text-xs font-medium text-red-500 hover:text-red-600"
                >
                  Remove All
                </button>
              )}

            </div>

            {/* Empty Stack */}
            {stack.length === 0 && (
              <div className="mt-5 rounded-xl border border-dashed border-gray-200 px-4 py-10 text-center">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
                  <span className="text-xl text-gray-300">
                    +
                  </span>
                </div>

                <p className="mt-3 text-xs font-medium text-gray-500">
                  Your stack is empty
                </p>

                <p className="mt-1 text-[10px] leading-4 text-gray-400">
                  Add technologies from the list to build your stack.
                </p>

              </div>
            )}

            {/* Selected Technologies */}
            {stack.length > 0 && (
              <div className="mt-5 space-y-3">

                {stack.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center justify-between rounded-xl bg-gray-50 p-3"
                  >

                    {/* Technology Info */}
                    <div className="flex min-w-0 items-center gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="h-6 w-6 object-contain"
                        />
                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-xs font-semibold text-gray-800">
                          {tech.name}
                        </p>

                        <p className="text-[10px] text-gray-400">
                          {tech.category}
                        </p>

                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromStack(tech.id)}
                      className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                      ×
                    </button>

                  </div>
                ))}

              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Technologies;