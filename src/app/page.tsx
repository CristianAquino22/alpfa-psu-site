export default function Home() {
  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">ALPFA Penn State</h1>
        <p className="text-lg text-gray-600">
          Empowering and developing Latino leaders at Penn State.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-alpfa-blue">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          ALPFA (Association of Latino Professionals For America) is a
          national organization dedicated to empowering and developing
          Latino leaders in every sector of the global economy. It provides
          professional development, networking opportunities, mentorship,
          and career resources for students.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-alpfa-blue">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          ALPFA&apos;s mission at Penn State is to build a strong, inclusive
          community by bringing students together and providing valuable
          resources and opportunities in the corporate sector. We strive to
          foster connections with top firms and companies while creating a
          supportive network for professional and personal growth.
        </p>
      </section>

      <section className="flex gap-4 justify-center">

        <a
          href="https://instagram.com/alpfapsu"
          className="px-5 py-2 rounded-lg bg-alpfa-blue text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >

          Follow us on Instagram
        </a>

        <a
          href="mailto:avr6319@psu.edu"
          className="px-5 py-2 rounded-lg border border-alpfa-blue text-alpfa-blue text-sm font-medium hover:bg-alpfa-blue hover:text-white transition-colors"
        >
          Contact Us
        </a>
      </section >
    </div >
  );
}