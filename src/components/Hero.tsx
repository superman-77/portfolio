'use client';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">안녕하세요, 저는 [이름]입니다</h1>
        <p className="text-xl text-gray-600 mb-8">Frontend Developer</p>
        <button 
          onClick={scrollToProjects}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          프로젝트 보기
        </button>
      </div>
    </div>
  );
};

export default Hero; 