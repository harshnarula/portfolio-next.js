import { projects } from "../data";

let half = Math.ceil(projects.length / 2);

export default function Projects() {
  return (
    <div
      id="Projects"
      className="flex justify-center items-center flex-col lg:ml-[30px] py-[40px]  w-auto h-auto "
    >
      <div className="flex flex-row justify-center items-start w-auto border-b-2 border-white hover:border-[#0d6efd] duration-300 h-[40px]">
        <h2 className="text:xl md:text-2xl text-[#dddddd] font-semibold openSans">
          Projects Build
        </h2>
      </div>
      <div className="hidden md:flex flex-row h-auto justify-center items-center">
        <div class="grid grid-cols-1 sm:grid-cols-1 gap-4 mr-[40px]">
          {projects.map((project, index) =>
            project.id <= half ? (
              <div
                key={index}
                className="flex flex-col w-[400px] lg:w-[600px] h-auto py-[10px] px-[30px] rounded-[8px] animate-slideIn transition duration-300 border-4 border-[#161618] hover:border-[#0d6efd] mt-[40px]"
              >
                <div className="flex flex-row w-auto h-[100px] justify-start items-center">
                  <img
                    className="flex w-[60px] h-[60px] bg-[#cdb2b2] rounded-[32px]"
                    src={project.img}
                    alt=""
                  />
                  <div className="flex flex-col ml-[20px]">
                    <p className="flex w-auto h-[20px] text-white text-xl lg:text-2xl openSans">
                      {project.name}
                    </p>
                    <p className="flex w-auto h-[20px] text-white text-sm mt-[10px] openSans">
                      {project.category}
                    </p>
                  </div>
                </div>
                <div className="flex w-auto h-auto">
                  <p className="text-xl text-white openSans">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col lg:flex-row w-auto h-auto mt-[20px] openSans">
                      {project.used.map((tech, techIndex) => (
                          <p key={techIndex} className="text-white ml-[10px]">{tech}</p>
                        ))}
                  </div>
                  <div className="flex w-auto h-auto mt-[20px]">
                    <a
                      href={project.link} target="_blank" rel="noopener noreferrer"
                      className="text-white openSans hover:text-[#0d6efd] duration-300"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            ) : null
          )}

        </div>
        <div className="border-l-2 border-white h-full"></div>
        <div class="grid grid-cols-1 sm:grid-cols-1 gap-4 ml-[40px]">
        {projects.map((project, index) =>
            project.id > half ? (
              <div
                key={index}
                className="flex flex-col w-[400px] lg:w-[600px] h-auto py-[10px] px-[30px] rounded-[8px] animate-slideIn transition duration-300 border-4 border-[#161618] hover:border-[#0d6efd] mt-[40px]"
              >
                <div className="flex flex-row w-auto h-[100px] justify-start items-center">
                  <img
                    className="flex w-[60px] h-[60px] bg-[#cdb2b2] rounded-[32px]"
                    src={project.img}
                    alt=""
                  />
                  <div className="flex flex-col ml-[20px]">
                    <p className="flex w-auto h-[20px] text-white text-xl lg:text-2xl openSans">
                      {project.name}
                    </p>
                    <p className="flex w-auto h-[20px] text-white text-sm mt-[10px] openSans">
                      {project.category}
                    </p>
                  </div>
                </div>
                <div className="flex w-auto h-auto">
                  <p className="text-xl text-white openSans">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col lg:flex-row w-auto h-auto mt-[20px] openSans">
                      {project.used.map((tech, techIndex) => (
                          <p key={techIndex} className="text-white ml-[10px]">{tech}</p>
                        ))}
                  </div>
                  <div className="flex w-auto h-auto mt-[20px]">
                    <a
                      href={project.link} target="_blank" rel="noopener noreferrer"
                      className="text-white openSans hover:text-[#0d6efd] duration-300"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      <div className="md:hidden flex flex-col h-auto justify-center items-center">
        <div class="grid grid-cols-1 sm:grid-cols-1 gap-4 ">
          
          {projects.map((project, index) =>
              <div key = {index} className="flex flex-col w-[300px] h-auto py-[10px] px-[20px] rounded-[8px] animate-slideInFromRight transition duration-300 border-4 border-[#161618] hover:border-[#0d6efd] mt-[40px]">
              <div className="flex flex-row w-auto h-[50px] justify-start items-center">
                <img
                  className="flex w-[40px]  h-[40px] bg-[#cdb2b2] rounded-[8px]"
                  src={project.img}
                  alt=""
                />
                <div className="flex flex-col ml-[8px]">
                  <p className="flex w-auto h-auto text-white text-sm openSans">
                    {project.name}
                  </p>
                  <p className="flex w-auto h-auto text-white text-sm mt-[2px] openSans">
                    {project.category}
                  </p>
                </div>
              </div>
              <div className="flex w-auto h-auto mt-[10px]">
                <p className="text-sm text-white openSans">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col w-auto h-auto my-[20px]">
                {project.used.map((tech, techIndex) => (
                          <p key={techIndex} className="text-white text-sm openSans">{tech}</p>
                        ))}
                  
                </div>
                <div className="flex w-auto h-auto mt-[20px]">
                  <a
                    href={project.link} target="_blank" rel="noopener noreferrer"
                    className="text-white text-sm openSans hover:text-[#0d6efd] duration-300"
                  >
                    View Source
                  </a>
                </div>
              </div>
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
}
