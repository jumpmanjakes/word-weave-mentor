import mariaImage from "@/assets/tutor-maria.jpg";
import davidImage from "@/assets/tutor-david.jpg";
import sarahImage from "@/assets/tutor-sarah.jpg";
import notFoundImage from "@/assets/image-not-found.jpg";

const Tutors = () => {
  const tutors = [
    {
      name: "insert name",
      image: notFoundImage,
      languages: ["Spanish", "English"],
      experience: "Senior Student",
      description: "Hi! I'm a senior who loves helping fellow students with Spanish. I've been part of our World Language Mentoring club for 3 years and enjoy making language learning fun and accessible for everyone."
    },
    {
      name: "insert name",
      image: notFoundImage,
      languages: ["Mandarin", "English"],
      experience: "Junior Student",
      description: "Hey there! I'm a junior passionate about sharing Chinese language and culture. As a club member, I love helping other students discover the beauty of Mandarin through peer-to-peer learning."
    },
    {
      name: "insert name",
      image: notFoundImage,
      languages: ["French", "English"],
      experience: "Senior Student",
      description: "Bonjour! I'm a senior who's been studying French for 4 years. I joined our mentoring club to help other students fall in love with the French language and culture just like I did."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title text-center">Meet Our Student Leaders</h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our passionate student mentors are here to help you on your language learning journey. They're fellow students who love sharing their knowledge and making language learning enjoyable for everyone.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((tutor, index) => (
              <div key={index} className="tutor-card text-center">
                <div className="mb-6">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={tutor.image} 
                      alt={tutor.name}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{tutor.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-3 justify-center">
                    {tutor.languages.map((language, langIndex) => (
                      <span 
                        key={langIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-primary">Grade Level:</span> {tutor.experience}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tutor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-secondary/30 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Ready to Join Our Club?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with our student mentors and start your language learning journey! Our club meets regularly and offers peer-to-peer support for all language learners.
              </p>
              <button className="hero-button">
                Join World Language Mentoring
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutors;