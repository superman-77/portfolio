const Skills = () => {
  const skills = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '75%' },
    { name: 'Next.js', level: '70%' },
  ];

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 