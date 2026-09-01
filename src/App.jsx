import { useState } from "react";
import "./App.css";

const vehicles = [
  {
    id: 1,
    name: "EVO X1",
    price: "₹1,25,000",
    image: "/images/scooter-1.png",
    range: "150 KM",
    speed: "90 KM/H",
    battery: "4.5 KWh",
    charging: "4 Hours",
  },
  {
    id: 2,
    name: "EVO Z3",
    price: "₹1,05,000",
    image: "/images/scooter-2.png",
    range: "135 KM",
    speed: "85 KM/H",
    battery: "4.0 KWh",
    charging: "4 Hours",
  },
  {
    id: 3,
    name: "EVO S1",
    price: "₹95,000",
    image: "/images/scooter-3.png",
    range: "125 KM",
    speed: "80 KM/H",
    battery: "3.5 KWh",
    charging: "3.5 Hours",
  },
  {
    id: 4,
    name: "EVO G1",
    price: "₹1,15,000",
    image: "/images/scooter-4.png",
    range: "140 KM",
    speed: "88 KM/H",
    battery: "4.2 KWh",
    charging: "4 Hours",
  },
];

const facilities = [
  {
    icon: "🏢",
    title: "Spacious Showroom",
    description: "Explore our complete range of electric vehicles.",
  },
  {
    icon: "🛵",
    title: "Test Ride",
    description: "Experience your preferred EV before buying.",
  },
  {
    icon: "🔋",
    title: "Charging Station",
    description: "Dedicated EV charging facility at our showroom.",
  },
  {
    icon: "🔧",
    title: "Service Center",
    description: "Professional maintenance and service support.",
  },
  {
    icon: "💳",
    title: "Easy Finance",
    description: "Flexible financing options for your new EV.",
  },
  {
    icon: "⚙️",
    title: "Genuine Spare Parts",
    description: "Original parts and reliable replacement support.",
  },
  {
    icon: "👨‍🔧",
    title: "Expert Support",
    description: "Experienced professionals to assist you.",
  },
  {
    icon: "☕",
    title: "Customer Lounge",
    description: "Comfortable space while you explore our EVs.",
  },
];

const gallery = [
  {
    image: "/images/showroom.jpg",
    title: "Showroom Exterior",
  },
  {
    image: "/images/interior.jpg",
    title: "Showroom Interior",
  },
  {
    image: "/images/service.jpg",
    title: "Service Center",
  },
  {
    image: "/images/charging.jpg",
    title: "Charging Station",
  },
];

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const scrollTo = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });

    setMobileMenu(false);
  };

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="logo">
          <div className="logo-circle">⚡</div>

          <div>
            <h2>EVO RIDE</h2>
            <span>ELECTRIC MOBILITY</span>
          </div>
        </div>

        <nav className={mobileMenu ? "nav-links active" : "nav-links"}>
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("vehicles")}>Vehicles</button>
          <button onClick={() => scrollTo("facilities")}>Facilities</button>
          <button onClick={() => scrollTo("gallery")}>Gallery</button>
          <button onClick={() => scrollTo("why-us")}>Why Choose Us</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>

        <button className="test-button" onClick={() => scrollTo("contact")}>
          Book Test Ride
        </button>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>
      </header>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">
        <div className="hero-content">
          <span className="hero-small-title">FUTURE IS ELECTRIC</span>

          <h1>
            Power Your Ride.
            <br />
            Electrify Your Journey.
          </h1>

          <p>
            Experience the next generation of electric two-wheelers. Stylish,
            Smart & Sustainable.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => scrollTo("vehicles")}
            >
              Explore Vehicles →
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollTo("contact")}
            >
              Contact Us ☎
            </button>
          </div>

          <div className="hero-info">
            <div>
              <span>📍</span>
              <div>
                <small>Visit Our Showroom</small>
                <strong>Pune, Maharashtra</strong>
              </div>
            </div>

            <div>
              <span>◷</span>
              <div>
                <small>Open Hours</small>
                <strong>10:00 AM - 8:00 PM</strong>
              </div>
            </div>

            <div>
              <span>☎</span>
              <div>
                <small>Call Us</small>
                <strong>+91 98765 43210</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-glow"></div>

          <img src="/images/hero-scooter.png" alt="Electric Scooter" />
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="about section">
        <div className="section-heading">
          <span>ABOUT US</span>
          <h2>Driving The Future Of Mobility</h2>
        </div>

        <div className="about-grid">
          <div className="about-image">
            <img src="/images/showroom.jpg" alt="Electric showroom" />
          </div>

          <div className="about-content">
            <h3>Welcome to EVO RIDE</h3>

            <p>
              We are committed to making electric mobility accessible, reliable
              and exciting for everyone. Our showroom brings together modern
              electric two-wheelers, professional service and expert guidance
              under one roof.
            </p>

            <p>
              Whether you are looking for your first electric scooter or
              upgrading your existing vehicle, our team is here to help you find
              the perfect ride.
            </p>

            <div className="about-stats">
              <div>
                <strong>500+</strong>
                <span>Happy Customers</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>EV Models</span>
              </div>

              <div>
                <strong>5+</strong>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VEHICLES ================= */}

      <section id="vehicles" className="vehicles section">
        <div className="section-heading">
          <span>OUR ELECTRIC VEHICLES</span>

          <h2>Choose Your Perfect Ride</h2>

          <p>
            Discover our latest range of smart and efficient electric
            two-wheelers.
          </p>
        </div>

        <div className="vehicle-grid">
          {vehicles.map((vehicle) => (
            <div
              className="vehicle-card"
              key={vehicle.id}
              onMouseEnter={() => setSelectedVehicle(vehicle.id)}
              onMouseLeave={() => setSelectedVehicle(null)}
            >
              <div className="vehicle-image">
                <img src={vehicle.image} alt={vehicle.name} />

                {/* HOVER DETAILS */}

                <div
                  className={
                    selectedVehicle === vehicle.id
                      ? "vehicle-overlay show"
                      : "vehicle-overlay"
                  }
                >
                  <div className="spec">
                    <span>⚡ Range</span>
                    <strong>{vehicle.range}</strong>
                  </div>

                  <div className="spec">
                    <span>🏎 Top Speed</span>
                    <strong>{vehicle.speed}</strong>
                  </div>

                  <div className="spec">
                    <span>🔋 Battery</span>
                    <strong>{vehicle.battery}</strong>
                  </div>

                  <div className="spec">
                    <span>⚙ Charging</span>
                    <strong>{vehicle.charging}</strong>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(
                        `${vehicle.name}\nRange: ${vehicle.range}\nTop Speed: ${vehicle.speed}\nBattery: ${vehicle.battery}`,
                      );
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="vehicle-info">
                <h3>{vehicle.name}</h3>

                <strong>{vehicle.price}</strong>
              </div>
            </div>
          ))}
        </div>

        <button className="view-all">View All Vehicles</button>
      </section>

      {/* ================= FACILITIES ================= */}

      <section id="facilities" className="facilities section">
        <div className="section-heading dark-heading">
          <span>PREMIUM FACILITIES</span>

          <h2>
            Everything You Need,
            <br />
            Under One Roof
          </h2>
        </div>

        <div className="facility-grid">
          {facilities.map((facility, index) => (
            <div className="facility-card" key={index}>
              <div className="facility-icon">{facility.icon}</div>

              <h3>{facility.title}</h3>

              <p>{facility.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}

      <section id="gallery" className="gallery section">
        <div className="section-heading">
          <span>SHOWROOM GALLERY</span>

          <h2>Take a Look Inside</h2>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <div className="gallery-card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button className="view-all">View More Photos 📷</button>
      </section>

      {/* ================= WHY US ================= */}

      <section id="why-us" className="why-us">
        <div className="why-content">
          <span>WHY CHOOSE US</span>

          <h2>
            Driven by Trust.
            <br />
            Focused on You.
          </h2>

          <p>
            We are committed to providing the best electric mobility solutions
            with unmatched quality, affordable pricing and excellent after-sales
            support.
          </p>
        </div>

        <div className="why-items">
          <div>
            <span>⚡</span>
            <h3>100% Electric</h3>
            <p>Eco-friendly and cost-effective rides.</p>
          </div>

          <div>
            <span>🛵</span>
            <h3>Reliable Performance</h3>
            <p>Tested vehicles for long-lasting performance.</p>
          </div>

          <div>
            <span>⚙</span>
            <h3>Lowest Maintenance</h3>
            <p>Save more with minimal maintenance cost.</p>
          </div>

          <div>
            <span>🤝</span>
            <h3>Trusted Support</h3>
            <p>Professional support whenever you need it.</p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact section">
        <div className="contact-info">
          <span>CONTACT US</span>

          <h2>Ready To Go Electric?</h2>

          <p>
            Visit our showroom, take a test ride and discover the future of
            mobility.
          </p>

          <div className="contact-details">
            <div>
              <span>📍</span>
              <div>
                <strong>Visit Us</strong>
                <p>
                  EVO RIDE Electric Showroom
                  <br />
                  S.No. 123, ABC Road,
                  <br />
                  Pune, Maharashtra - 411001
                </p>
              </div>
            </div>

            <div>
              <span>☎</span>
              <div>
                <strong>Call Us</strong>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div>
              <span>✉</span>
              <div>
                <strong>Email</strong>
                <p>info@evoride.in</p>
              </div>
            </div>

            <div>
              <span>◷</span>
              <div>
                <strong>Opening Hours</strong>
                <p>Mon - Sun: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* TEST RIDE FORM */}

        <div className="test-form">
          <h2>Book a Test Ride</h2>

          <p>Experience your favorite EV before you buy.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Test ride request submitted!");
            }}
          >
            <input type="text" placeholder="Your Name" required />

            <input type="tel" placeholder="Phone Number" required />

            <select required>
              <option value="">Select Vehicle</option>

              {vehicles.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.name}>
                  {vehicle.name}
                </option>
              ))}
            </select>

            <input type="date" required />

            <textarea placeholder="Message" rows="4" />

            <button type="submit">Book Now →</button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <div className="footer-top">
          <div>
            <div className="logo">
              <div className="logo-circle">⚡</div>

              <div>
                <h2>EVO RIDE</h2>
                <span>ELECTRIC MOBILITY</span>
              </div>
            </div>

            <p>Powering a cleaner and smarter future with electric mobility.</p>

            <div className="socials">
              <span>f</span>
              <span>◎</span>
              <span>▶</span>
              <span>◉</span>
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>

            <button onClick={() => scrollTo("about")}>About Us</button>

            <button onClick={() => scrollTo("vehicles")}>Vehicles</button>

            <button onClick={() => scrollTo("facilities")}>Facilities</button>

            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>

          <div>
            <h3>Contact</h3>

            <p>📍 Pune, Maharashtra</p>
            <p>☎ +91 98765 43210</p>
            <p>✉ info@evoride.in</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 EVO RIDE Electric Showroom. All Rights Reserved.</span>

          <span>Privacy Policy | Terms & Conditions</span>
        </div>
      </footer>

      {/* ================= WHATSAPP ================= */}

      <a
        href="https://wa.me/919876543210"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        ☎
      </a>

      {/* ================= SCROLL TOP ================= */}

      <button className="scroll-top" onClick={() => scrollTo("home")}>
        ↑
      </button>
    </div>
  );
}

export default App;
