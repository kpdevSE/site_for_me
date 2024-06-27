import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";
import { data } from "../../data/data";
import { useState } from "react";

export default function HeroSection() {
  const [visibleProjects, setVisibleProjects] = useState(4); // Number of projects initially visible

  const loadMore = () => {
    // Increase the number of visible projects on each "Load More" click
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
  };

  return (
    <div className="w-[85%] mx-auto h-full" id="myProjects">
      <div className="flex items-center justify-center text-white lg:text-4xl gap-3 font-semibold text-2xl">
        <GrProjects />
        <h1>My Projects</h1>
      </div>
      <div className="w-[50%] mx-auto bg-gray-700 h-1 mt-2 rounded-xl"></div>
      <div className="grid lg:grid-cols-4 p-1 md:grid-cols-2 grid-cols-1 mt-10 gap-6">
        {data.users.slice(0, visibleProjects).map((e) => (
          <Link to={`/posts/${e.id}`} key={e.id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                src={e.image}
                alt=""
                className="w-full h-[200px] rounded-xl"
              />
              <div className="px-6 py-4" key={e.id}>
                <div className="font-bold text-xl mb-2">{e.name}</div>
                <p className="text-gray-400 text-base font-semibold">
                  {e.technolodgy}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleProjects < data.users.length && ( // Show load more button if there are more projects to load
        <div className="w-full flex items-center justify-center mt-4">
          <button
            onClick={loadMore}
            className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
