const About = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
          Made with ❤️ in Ghana
        </h2>
        <p className="text-gray-600 mb-12 leading-relaxed text-xl">
          Founded by Triumph & Ellen, CodesRock was born from a simple belief: every African child
          deserves to speak the language of the future, regardless of their access to computers. We
          are a team of educators, engineers, and artists dedicated to joyful learning.
        </p>
        <div className="flex justify-center gap-4">
          <div
            className="flex bg-center text-gray-400 bg-gray-100 w-40 h-40 border-white border-4 rounded-full shadow-lg items-center justify-center bg-cover"
            style={{
              backgroundImage:
                'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08006bc9-0888-4e4a-86f9-b2f00ec68300_320w.jpg)',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
