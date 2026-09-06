import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVehicle, setActiveVehicle] = useState(null);

  const phone = "917470598407";
  const alternatePhone = "919826477320";

  const whatsapp = `https://wa.me/${phone}`;
  const alternateWhatsapp = `https://wa.me/${alternatePhone}`;

  const scrollTo = (id) => {
    setMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const vehicles = [
    {
      name: "Mercury EZ",
      image: "/images/scooter-1.png",
      price: "Best for Daily Commute",
      specs: [
        ["Top Speed", "45–55 kmph"],
        ["Range", "100–110 km"],
        ["Category", "Electric Scooter"],
      ],
    },
    {
      name: "Mercury DLX",
      image: "/images/scooter-2.png",
      price: "Long Range",
      specs: [
        ["Top Speed", "65 kmph"],
        ["Range", "150 km"],
        ["Charging", "4–5 hr"],
      ],
    },
    {
      name: "Mercury DLX Gold",
      image: "/images/scooter-3.png",
      price: "Premium Scooter",
      specs: [
        ["Top Speed", "55 kmph"],
        ["Range", "140+ km"],
        ["Category", "Electric Scooter"],
      ],
    },
    {
      name: "Mercury DLX Pro",
      image: "/images/scooter-4.png",
      price: "Performance",
      specs: [
        ["Range", "100+ km"],
        ["Charging", "3–4 hr"],
        ["Category", "Electric Scooter"],
      ],
    },
    {
      name: "Mercury DLX Elite",
      image: "/images/scooter-1.png",
      price: "City Mobility",
      specs: [
        ["Top Speed", "45 kmph"],
        ["Range", "Up to 80 km"],
        ["Charging", "3–4 hr"],
      ],
    },
    {
      name: "Mercury DLX Spark",
      image: "/images/scooter-2.png",
      price: "Smart Choice",
      specs: [
        ["Top Speed", "45 kmph"],
        ["Range", "Up to 100 km"],
        ["Charging", "3–4 hr"],
      ],
    },
  ];

  const loadingVehicles = [
    {
      name: "Mushak",
      image: "/images/storage.jpg",
      price: "Commercial EV",
      specs: [
        ["Range", "300 km"],
        ["Top Speed", "70 kmph"],
        ["Use", "Heavy Local Freight"],
      ],
    },
    // {
    //   name: "Kala Ghoda",
    //   image: "/images/service.jpg",
    //   price: "Commercial EV",
    //   specs: [
    //     ["Range", "220 km"],
    //     ["Use", "Daily Delivery"],
    //     ["Category", "Loading Vehicle"],
    //   ],
    // },
  ];

  const passengerVehicles = [
    {
      name: "Dodo",
      image: "/images/interior.jpg",
      price: "Passenger EV",
      specs: [
        ["Type", "E-Rickshaw"],
        ["Use", "City Routes"],
        ["Category", "Passenger"],
      ],
    },
    {
      name: "Limosa",
      image: "/images/lounge.jpg",
      price: "Passenger EV",
      specs: [
        ["Type", "E-Rickshaw"],
        ["Use", "Passenger Transport"],
        ["Category", "Comfort"],
      ],
    },
    {
      name: "Tejashvi Neo+",
      image: "/images/rear-light.jpg",
      price: "Passenger EV",
      specs: [
        ["Type", "Electric Vehicle"],
        ["Use", "Passenger"],
        ["Category", "Open Frame"],
      ],
    },
    {
      name: "Tejashvi",
      image: "/images/hero-scooter.png",
      price: "4+1 Seater",
      specs: [
        ["Capacity", "4+1"],
        ["Type", "Electric Rickshaw"],
        ["Category", "Passenger"],
      ],
    },
  ];

  const facilities = [
    {
      icon: "⚡",
      title: "Electric Scooters",
      text: "Mercury EV-Tech electric scooters for daily city commuting.",
    },
    {
      icon: "🚚",
      title: "Loading Vehicles",
      text: "Electric commercial vehicles for delivery and business use.",
    },
    {
      icon: "🛺",
      title: "Passenger Vehicles",
      text: "Passenger e-rickshaws designed for practical city transportation.",
    },
    {
      icon: "☀️",
      title: "Solar Solutions",
      text: "Rooftop solar solutions to power your home and EV.",
    },
   
    {
      icon: "🔧",
      title: "Service & Maintenance",
      text: "Dedicated service support to keep your electric vehicle running smoothly.",
    },
    {
      icon: "🚗",
      title: "Test Ride",
      text: " Experience your preferred Mercury EV-Tech vehicle before making your purchase.",
    },
    {
      icon: "💳",
      title: "Easy Financing",
      text: "Flexible financing options for your new EV.",
    },
     {
      icon: "👨‍🔧",
      title: "Expert Support",
      text: "Experienced professionals to assist you.",
    },
    {
      icon: "☕",
      title: "Customer Lounge ",
      text: "Comfortable space while you explore our EVs.",
    },
  ];

  const reasons = [
    {
      icon: "01",
      title: "Authorised Mercury Dealer",
      text: "Genuine Mercury EV-Tech vehicles with proper dealership support and factory warranty.",
    },
    {
      icon: "02",
      title: "Full Range Under One Roof",
      text: "Scooters, loading vehicles, passenger vehicles and solar solutions from one showroom.",
    },
    {
      icon: "03",
      title: "Local Sales & Service",
      text: "Visit our Indore showroom for test rides, vehicle sales and after-sales support.",
    },
    {
      icon: "04",
      title: "Solar + EV Together",
      text: "Combine your EV with rooftop solar and reduce your long-term running cost.",
    },
  ];

  const gallery = [
    {
      image: "/images/showroom.jpeg",
      title: "Our Showroom",
    },
    {
      image: "/images/interior.jpg",
      title: "Showroom Interior",
    },
    {
      image: "/images/lounge.jpg",
      title: "Customer Lounge",
    },
    {
      image: "/images/storage.jpg",
      title: "Service & Storage",
    },
    {
      image: "/images/service.jpg",
      title: "Service Area",
    },
    {
      image: "/images/hero-scooter.jpeg",
      title: "Mercury EV",
    },
    {
      image: "/images/scooter-1.jpeg",
      title: "Electric Scooter",
    },
    {
      image: "/images/scooter-2.png",
      title: "Mercury DLX",
    },
  ];

  const partners = [
    "Paryashvini Rathore",
    "Preeti Rathore",
    "Shruti Rathod",
    "Nidhi Rathore",
  ];

  const blogs = [
    {
      title: "How to choose the right electric scooter",
      text: "Daily distance, load and charging access are important factors when choosing your electric scooter.",
    },
    {
      title: "Petrol vs Electric",
      text: "Understand the real running-cost difference between petrol vehicles and electric vehicles.",
    },
    {
      title: "Solar + EV",
      text: "Generate your own electricity with rooftop solar and use it to charge your electric vehicle.",
    },
    {
      title: "Electric Loading Vehicles",
      text: "Learn how electric loading vehicles can help small businesses reduce daily transportation costs.",
    },
  ];

  const openVehicle = (vehicleName) => {
    setActiveVehicle(
      activeVehicle === vehicleName ? null : vehicleName
    );
  };

  const enquireVehicle = (vehicleName) => {
    const message = `Hi, I am interested in ${vehicleName}. I would like to know more about price, availability and test ride.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="app">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <div className="logo">
          <div className="logo-circle">⚡</div>

          <div>
            <h2>VOLTAGE</h2>
            <span>ENERGY VENTURES</span>
          </div>
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <button onClick={() => scrollTo("home")}>
            Home
          </button>

          <button onClick={() => scrollTo("about")}>
            About
          </button>

          <button onClick={() => scrollTo("vehicles")}>
            Vehicles
          </button>

          <button onClick={() => scrollTo("facilities")}>
            Facilities
          </button>

          <button onClick={() => scrollTo("gallery")}>
            Gallery
          </button>

          <button onClick={() => scrollTo("why")}>
            Why Us
          </button>

          <button onClick={() => scrollTo("contact")}>
            Contact
          </button>

        </nav>

        {/* <button
          className="test-button"
          onClick={() => scrollTo("contact")}
        >
          Book Test Ride
        </button> */}

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero mt-10" id="home">

        <div className="hero-content">

          <div className="hero-small-title">
            ⚡ AUTHORISED MERCURY EV-TECH DEALER · INDORE
          </div>

          <h1>
            Drive the future.
            <br />
            <span style={{ color: "#55d638" }}>
              Charge it yourself.
            </span>
          </h1>

          <p>
            Voltage Energy Ventures LLP brings you the Mercury
            EV-Tech electric range — scooters, loading vehicles
            and passenger vehicles — plus solar solutions to
            power them at home.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() =>
                window.open(whatsapp, "_blank")
              }
            >
              Chat on WhatsApp
            </button>

            <a
              href={`tel:+${phone}`}
              className="secondary-button"
            >
              Call +91 74705 98407
            </a>

          </div>

          <div className="hero-info">

            <div>
              <span>⚡</span>

              <div>
                <small>DEALER</small>
                <strong>Mercury EV-Tech</strong>
              </div>
            </div>

            <div>
              <span>📍</span>

              <div>
                <small>LOCATION</small>
                <strong>Indore, MP</strong>
              </div>
            </div>

            <div>
              <span>☀️</span>

              <div>
                <small>ALSO AVAILABLE</small>
                <strong>Solar Solutions</strong>
              </div>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <div className="hero-glow"></div>

          <img
            src="/images/hero-scooter.jpeg"
            alt="Mercury Electric Scooter"
          />

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="section" id="about">

        <div className="section-heading">

          <span>VOLTAGE ENERGY VENTURES LLP</span>

          <h2>Electric mobility for a cleaner future.</h2>

          <p>
            Your authorised Mercury EV-Tech dealer in Indore.
          </p>

        </div>

        <div className="about-grid">

          <div className="about-image">

            <img
              src="/images/showroom.jpeg"
              alt="Voltage Energy Ventures showroom"
            />

          </div>

          <div className="about-content">

            <h3>
              Your complete EV destination in Indore.
            </h3>

            <p>
              Voltage Energy Ventures LLP brings the Mercury
              EV-Tech range under one roof. From electric
              scooters for everyday commuting to commercial
              loading vehicles and passenger e-rickshaws, we
              provide practical electric mobility solutions.
            </p>

            <p>
              We also provide rooftop solar solutions so you
              can generate your own electricity and use it to
              charge your EV.
            </p>

            <div className="about-stats">

              <div>
                <strong>6+</strong>
                <span>Electric Scooters</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Loading Vehicles</span>
              </div>

              <div>
                <strong>4</strong>
                <span>Passenger Vehicles</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VEHICLES
      ===================================================== */}

      <section className="section vehicles" id="vehicles">

        <div className="section-heading">

          <span>MERCURY EV-TECH RANGE</span>

          <h2>Electric vehicles for every journey.</h2>

          <p>
            Explore scooters, loading vehicles and passenger
            electric vehicles available at our Indore showroom.
          </p>

        </div>


        {/* SCOOTERS */}

        <div style={{ marginBottom: "70px" }}>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "25px",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >

            <div>
              <h2>Electric Scooters</h2>

              <p style={{ color: "#777", marginTop: "5px" }}>
                Daily commute
              </p>
            </div>

            <strong style={{ color: "#45b72f" }}>
              {vehicles.length} Models
            </strong>

          </div>

          <div className="vehicle-grid">

            {vehicles.map((vehicle) => (

              <div
                className="vehicle-card"
                key={vehicle.name}
                onClick={() => openVehicle(vehicle.name)}
              >

                <div className="vehicle-image">

                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                  />

                  <div
                    className={`vehicle-overlay ${
                      activeVehicle === vehicle.name
                        ? "show"
                        : ""
                    }`}
                  >

                    <h3>{vehicle.name}</h3>

                    {vehicle.specs.map((spec) => (

                      <div className="spec" key={spec[0]}>

                        <span>{spec[0]}</span>

                        <strong>{spec[1]}</strong>

                      </div>

                    ))}

                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        enquireVehicle(vehicle.name);
                      }}
                    >
                      Enquire on WhatsApp
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

        </div>


        {/* LOADING VEHICLES */}

        <div
          id="loading"
          style={{ marginBottom: "70px" }}
        >

          <div
            style={{
              marginBottom: "25px",
            }}
          >

            <h2>Loading Vehicles</h2>

            <p style={{ color: "#777", marginTop: "5px" }}>
              For business & delivery
            </p>

          </div>

          <div className="vehicle-grid">

            {loadingVehicles.map((vehicle) => (

              <div
                className="vehicle-card"
                key={vehicle.name}
                onClick={() => openVehicle(vehicle.name)}
              >

                <div className="vehicle-image">

                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                  />

                  <div
                    className={`vehicle-overlay ${
                      activeVehicle === vehicle.name
                        ? "show"
                        : ""
                    }`}
                  >

                    <h3>{vehicle.name}</h3>

                    {vehicle.specs.map((spec) => (

                      <div
                        className="spec"
                        key={spec[0]}
                      >

                        <span>{spec[0]}</span>

                        <strong>{spec[1]}</strong>

                      </div>

                    ))}

                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        enquireVehicle(vehicle.name);
                      }}
                    >
                      Enquire on WhatsApp
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

        </div>


        {/* PASSENGER */}

        <div id="passenger">

          <div
            style={{
              marginBottom: "25px",
            }}
          >

            <h2>Passenger Vehicles</h2>

            <p style={{ color: "#777", marginTop: "5px" }}>
              E-rickshaws & passenger mobility
            </p>

          </div>

          <div className="vehicle-grid">

            {passengerVehicles.map((vehicle) => (

              <div
                className="vehicle-card"
                key={vehicle.name}
                onClick={() => openVehicle(vehicle.name)}
              >

                <div className="vehicle-image">

                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                  />

                  <div
                    className={`vehicle-overlay ${
                      activeVehicle === vehicle.name
                        ? "show"
                        : ""
                    }`}
                  >

                    <h3>{vehicle.name}</h3>

                    {vehicle.specs.map((spec) => (

                      <div
                        className="spec"
                        key={spec[0]}
                      >

                        <span>{spec[0]}</span>

                        <strong>{spec[1]}</strong>

                      </div>

                    ))}

                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        enquireVehicle(vehicle.name);
                      }}
                    >
                      Enquire on WhatsApp
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

        </div>


        {/* <button
          className="view-all"
          onClick={() => scrollTo("contact")}
        >
          Book a Test Ride
        </button> */}

      </section>


      {/* =====================================================
          SOLAR / FACILITIES
      ===================================================== */}

      <section
        className="facilities"
        id="facilities"
      >

        <div className="section">

          <div className="section-heading dark-heading">

            <span>MORE THAN JUST EVs</span>

            <h2>
              Power your vehicle with the sun.
            </h2>

            <p style={{ color: "#aaa" }}>
              We also design and install rooftop solar systems
              for homes and businesses.
            </p>

          </div>

          <div className="facility-grid">

            {facilities.map((facility) => (

              <div
                className="facility-card"
                key={facility.title}
              >

                <div className="facility-icon">
                  {facility.icon}
                </div>

                <h3>{facility.title}</h3>

                <p>{facility.text}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section
        className="section"
        id="gallery"
      >

        <div className="section-heading">

          <span>INSIDE THE SHOWROOM</span>

          <h2>See the range before you ride it.</h2>

          <p>
            Visit our Indore showroom for test rides and
            personal assistance.
          </p>

        </div>

        <div className="gallery-grid">

          {gallery.map((item) => (

            <div
              className="gallery-card"
              key={item.title}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <strong>{item.title}</strong>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHY US
      ===================================================== */}

      <section
        className="why-us"
        id="why"
      >

        <div className="why-content">

          <span>WHY VOLTAGE</span>

          <h2>
            Why buy your EV from us?
          </h2>

          <p>
            We combine an authorised Mercury EV-Tech
            dealership with local sales, service and solar
            solutions for a complete electric mobility
            experience.
          </p>

        </div>

        <div className="why-items">

          {reasons.map((reason) => (

            <div key={reason.title}>

              <span>{reason.icon}</span>

              <h3>{reason.title}</h3>

              <p>{reason.text}</p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          BLOG
      ===================================================== */}

      <section
        className="section"
        id="blog"
      >

        <div className="section-heading">

          <span>FROM VOLTAGE</span>

          <h2>EV notes for Indore riders.</h2>

        </div>

        <div className="gallery-grid">

          {blogs.map((blog, index) => (

            <article
              className="gallery-card"
              key={blog.title}
              style={{
                background: "#f7f8f7",
                height: "260px",
                padding: "25px",
              }}
            >

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  color: "#111",
                }}
              >

                <span
                  style={{
                    color: "#45b72f",
                    fontWeight: "bold",
                  }}
                >
                  0{index + 1}
                </span>

                <h3 style={{ marginTop: "20px" }}>
                  {blog.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    marginTop: "12px",
                    fontSize: "13px",
                    lineHeight: "1.6",
                  }}
                >
                  {blog.text}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          COMPANY / PARTNERS
      ===================================================== */}

      <section className="section">

        <div className="section-heading">

          <span>
            VOLTAGE ENERGY VENTURES LLP
          </span>

          <h2>
            Built for the electric future.
          </h2>

          <p>
            Registered with the Ministry of Corporate Affairs,
            ROC Gwalior — incorporated 12 August 2026.
          </p>

        </div>

        <div className="vehicle-grid">

          {partners.map((partner, index) => (

            <div
              className="vehicle-card"
              key={partner}
              style={{
                padding: "30px",
                textAlign: "center",
              }}
            >

              <div
                style={{
                  color: "#45b72f",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                0{index + 1}
              </div>

              <h3 style={{ marginTop: "15px" }}>
                {partner}
              </h3>

              <p
                style={{
                  color: "#777",
                  marginTop: "8px",
                  fontSize: "13px",
                }}
              >
                Designated Partner
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        className="section contact"
        id="contact"
      >

        <div className="contact-info">

          <span>CONTACT VOLTAGE</span>

          <h2>
            Come see the range in person.
          </h2>

          <p>
            Test rides are available at our Indore showroom.
            Book your slot through call or WhatsApp.
          </p>

          <div className="contact-details">

            <div>

              <span>📍</span>

              <div>

                <strong>
                  REGISTERED ADDRESS
                </strong>

                <p>
                  G-2, 57B, Pulak City, Silicon City,
                  Rau, Rajendra Nagar, Indore,
                  Madhya Pradesh 452012
                </p>

                <p>
                  <a
                    href="https://maps.app.goo.gl/v1b7vmQmmJALnMmE6?g_st=ic"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#45b72f",
                      fontWeight: "bold",
                    }}
                  >
                    Get Directions →
                  </a>
                </p>

              </div>

            </div>


            <div>

              <span>📞</span>

              <div>

                <strong>
                  PHONE / WHATSAPP
                </strong>

                <p>
                  <a href={`tel:+${phone}`}>
                    74705 98407
                  </a>
                </p>

              </div>

            </div>


            <div>

              <span>💬</span>

              <div>

                <strong>
                  WHATSAPP ALTERNATE
                </strong>

                <p>
                  <a
                    href={alternateWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    98264 77320
                  </a>
                </p>

              </div>

            </div>


            <div>

              <span>🕐</span>

              <div>

                <strong>
                  SHOWROOM HOURS
                </strong>

                <p>
                  10:00 AM – 8:30 PM, all days
                </p>

              </div>

            </div>


            <div>

              <span>✉️</span>

              <div>

                <strong>
                  EMAIL
                </strong>

                <p>
                  <a href="mailto:voltage.eventures@gmail.com">
                    voltage.eventures@gmail.com
                  </a>
                </p>

              </div>

            </div>


            <div>

              <span>▣</span>

              <div>

                <strong>
                  BUSINESS DETAILS
                </strong>

                <p>
                  GST: 23ABCFV7199J1ZM
                </p>

                <p>
                  LLPIN: ADB-1259
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* TEST RIDE FORM */}

        {/* <div className="test-form">

          <h2>
            Book a Test Ride
          </h2>

          <p>
            Fill in your details and we'll contact you.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();

              const formData = new FormData(
                event.currentTarget
              );

              const name = formData.get("name");
              const phoneNumber =
                formData.get("phone");
              const vehicle =
                formData.get("vehicle");

              const message =
                `Hi, I want to book a test ride.%0A%0A` +
                `Name: ${name}%0A` +
                `Phone: ${phoneNumber}%0A` +
                `Vehicle: ${vehicle}`;

              window.open(
                `https://wa.me/${phone}?text=${message}`,
                "_blank"
              );
            }}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />

            <select
              name="vehicle"
              defaultValue=""
              required
            >

              <option value="" disabled>
                Select Vehicle
              </option>

              <option value="Mercury EZ">
                Mercury EZ
              </option>

              <option value="Mercury DLX">
                Mercury DLX
              </option>

              <option value="Mercury DLX Gold">
                Mercury DLX Gold
              </option>

              <option value="Mercury DLX Pro">
                Mercury DLX Pro
              </option>

              <option value="Mercury DLX Elite">
                Mercury DLX Elite
              </option>

              <option value="Mercury DLX Spark">
                Mercury DLX Spark
              </option>

              <option value="Mushak">
                Mushak
              </option>

              <option value="Kala Ghoda">
                Kala Ghoda
              </option>

              <option value="Dodo">
                Dodo
              </option>

              <option value="Limosa">
                Limosa
              </option>

              <option value="Tejashvi Neo+">
                Tejashvi Neo+
              </option>

              <option value="Tejashvi">
                Tejashvi
              </option>

            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Message / preferred date"
            ></textarea>

            <button type="submit">
              Book Test Ride
            </button>

          </form>

        </div> */}

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <div className="footer-top">

          <div>

            <div className="logo">

              <div className="logo-circle">
                ⚡
              </div>

              <div>

                <h2>VOLTAGE</h2>

                <span>
                  ENERGY VENTURES
                </span>

              </div>

            </div>

            <p>
              Voltage Energy Ventures LLP is an authorised
              Mercury EV-Tech dealer in Indore, offering
              electric scooters, loading vehicles,
              passenger vehicles and solar solutions.
            </p>

            <div className="socials">

              <span>f</span>
              <span>in</span>
              <span>◎</span>

            </div>

          </div>


          <div>

            <h3>
              Quick Links
            </h3>

            <button onClick={() => scrollTo("home")}>
              Home
            </button>

            <button onClick={() => scrollTo("about")}>
              About
            </button>

            <button onClick={() => scrollTo("vehicles")}>
              Vehicles
            </button>

            <button onClick={() => scrollTo("gallery")}>
              Gallery
            </button>

            <button onClick={() => scrollTo("contact")}>
              Contact
            </button>

          </div>


          <div>

            <h3>
              Contact
            </h3>

            <p>
              74705 98407
            </p>

            <p>
              voltage.eventures@gmail.com
            </p>

            <p>
              Indore, Madhya Pradesh
            </p>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Voltage Energy Ventures LLP
          </span>

          <span>
            Authorised Mercury EV-Tech Dealer
          </span>

        </div>

      </footer>


      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
        aria-label="Chat on WhatsApp"
      >
        ☎
      </a>


      {/* =====================================================
          SCROLL TOP
      ===================================================== */}

      <button
        className="scroll-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Scroll to top"
      >
        ↑
      </button>

    </div>
  );
}

export default App;