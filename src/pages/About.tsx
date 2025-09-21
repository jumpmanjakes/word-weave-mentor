const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">About World Language Mentoring</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                World Language Mentoring is dedicated to breaking down language barriers and fostering global communication through personalized, high-quality language education. We believe that learning a new language opens doors to new cultures, opportunities, and connections.
              </p>
              <p className="text-lg text-muted-foreground">
                Our club connects passionate language learners with experienced mentors who provide individualized support, cultural insights, and practical communication skills that extend far beyond traditional classroom learning.
              </p>
            </div>
            <div className="bg-primary/10 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">What We Offer</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  One-on-one mentoring sessions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Conversation practice groups
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Cultural immersion activities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Flexible scheduling options
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Progress tracking and assessment
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary/30 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center text-primary">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Personalized</h3>
                <p className="text-sm text-muted-foreground">Tailored learning plans based on your goals, interests, and learning style</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Immersive</h3>
                <p className="text-sm text-muted-foreground">Real-world practice through cultural activities and authentic conversations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Progressive</h3>
                <p className="text-sm text-muted-foreground">Structured learning path with measurable milestones and continuous feedback</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a complete beginner or looking to refine your advanced skills, our diverse community of learners and mentors is here to support your language journey. Connect with native speakers, practice with peers, and gain confidence in your chosen language.
            </p>
            <div className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-xl inline-block">
              <p className="font-semibold text-lg mb-2">Ready to get started?</p>
              <p className="text-primary-light">Contact us today to find your perfect language mentor!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;