import { Button } from "@/components/ui/button";
import tutorHeroImage from "@/assets/tutoring-hero.jpg";

const Home = () => {
  const handleJoinNow = () => {
    window.open('https://docs.google.com/document', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${tutorHeroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            World Language Mentoring
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Unlock your potential with personalized language tutoring from experienced mentors
          </p>
          <Button 
            onClick={handleJoinNow}
            className="hero-button"
            size="lg"
          >
            Join Now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Artsy background elements */}
        <div className="artsy-blob w-64 h-64 top-10 -right-32"></div>
        <div className="artsy-blob w-48 h-48 bottom-20 -left-24"></div>
        <div className="floating-shape w-16 h-16 top-32 right-1/4"></div>
        <div className="floating-shape w-12 h-12 bottom-32 left-1/3"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="section-title text-center">Why Choose Our Mentoring?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="feature-card text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl" 
                   style={{ background: 'var(--gradient-accent)' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Expert Tutors</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Learn from certified language professionals with years of teaching experience and passion for helping you succeed</p>
            </div>
            <div className="feature-card text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl"
                   style={{ background: 'var(--gradient-primary)' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Personalized Learning</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Customized study plans tailored to your unique learning style, pace, and personal goals</p>
            </div>
            <div className="feature-card text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl"
                   style={{ background: 'var(--gradient-warm)' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Fast Progress</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Accelerate your language learning journey with proven methods and innovative techniques</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;