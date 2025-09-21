import mariaImage from "@/assets/tutor-maria.jpg";
import davidImage from "@/assets/tutor-david.jpg";
import sarahImage from "@/assets/tutor-sarah.jpg";

const Tutors = () => {
  const tutors = [
    {
      name: "Maria Rodriguez",
      image: mariaImage,
      languages: ["Spanish", "English"],
      specialties: ["Business Spanish", "Conversational Practice"],
      experience: "5+ years",
      description: "Native Spanish speaker with extensive experience in business communication. Maria specializes in helping professionals improve their Spanish for career advancement and international business."
    },
    {
      name: "David Chen",
      image: davidImage,
      languages: ["Mandarin", "English"],
      specialties: ["HSK Preparation", "Cultural Integration"],
      experience: "7+ years",
      description: "Certified Mandarin instructor with a passion for Chinese culture. David helps students navigate both language and cultural nuances, making learning Mandarin an enriching experience."
    },
    {
      name: "Sarah Thompson",
      image: sarahImage,
      languages: ["French", "English"],
      specialties: ["Academic French", "Literature"],
      experience: "4+ years",
      description: "French literature graduate with a focus on academic and formal French. Sarah excels at helping students achieve fluency for academic pursuits and professional development."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title text-center">Meet Our Expert Tutors</h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our experienced language mentors are passionate about helping you achieve your language learning goals. Each brings unique expertise and cultural insights to your learning journey.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((tutor, index) => (
              <div key={index} className="tutor-card">
                <div className="mb-6">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={tutor.image} 
                      alt={tutor.name}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{tutor.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
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
                    <span className="font-medium text-primary">Experience:</span> {tutor.experience}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tutor.specialties.map((specialty, specIndex) => (
                        <span 
                          key={specIndex}
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tutor.description}
                  </p>
                  
                  <button className="w-full bg-primary hover:bg-accent text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium">
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-secondary/30 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Ready to Start Learning?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Choose from our expert tutors and begin your personalized language learning journey today. Each session is tailored to your specific needs and learning pace.
              </p>
              <button className="hero-button">
                Schedule Your First Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutors;