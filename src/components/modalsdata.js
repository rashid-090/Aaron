import {
  CapsuleElevator1, CarElevator1, CarElevator2, CarElevator3, CarElevator4,
  CommercialElecatorImage2, CommercialElecatorImage3,
  DumbWaiterElevator1,
  DumbWaiterElevator2,
  FreightElevator1,
  GlassElevator1, GlassElevator2, GlassElevator3, GlassElevator4, HomeElevatorImage, HomeElevatorImage2, HomeElevatorImage3, HomeElevatorImage4, HomeElevatorImage5, HospitalElevators1, HospitalElevators2, KitchenElevator1, KitchenElevator2, KitchenElevator3, Lft5, Lft6, Lft7, MRLElevators, PassengerElevatorImage, StructuralElevator1
} from "../assets";

export const commercialElevatorData = [
  {
    // Page header content
    id: `home-elevator`,
    pageHeader: {
      title: "Home Elevator",
      description:
        "Aaron Elevators provides custom home elevators in Kerala, blending architectural harmony with personalized mobility, advanced safety, and minimal maintenance.",
    },



    // Tabs configuration
    tabs: ["Description", "Features", "Specification"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Architectural Harmony,",
            highlight: "Personalized Mobility",
          },
          paragraph1:
            "We understand that a home lift is more than just a functional necessity; it's an integral element of your home's design. Aaron Elevators offers unparalleled flexibility in crafting custom home lifts that seamlessly integrate with your architectural vision, be it traditional or avant-garde. Our commitment to innovation extends to user-friendly interfaces and advanced safety protocols, guaranteeing a harmonious blend of style, safety, and affordability. ",
          banner: {
            heading:
              "Elevating Homes, Enhancing Lives",
            text: "Aaron Elevators is dedicated to delivering the pinnacle of residential elevator technology. We believe in innovation that serves our clients, offering advanced features such as AI integration and energy-efficient designs. As a leading lift manufacturer, we are committed to providing exceptional value, with competitive home lift prices that make transformative home upgrades accessible.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Architectural Harmony,",
            highlight: "Personalized Mobility",
          },
          description:
            "We understand that a home lift is more than just a functional necessity; it's an integral element of your home's design. Aaron Elevators offers unparalleled flexibility in crafting custom home lifts that seamlessly integrate with your architectural vision, be it traditional or avant-garde. Our commitment to innovation extends to user-friendly interfaces and advanced safety protocols, guaranteeing a harmonious blend of style, safety, and affordability.",
          featuresList: [
            {
              title: "Customizable",
              description: "Customizable design to match architectural styles (traditional to modern).",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />`, // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Advanced",
              description: "Advanced AI integration and energy-efficient systems.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />`, // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Robust",
              description:
                "Robust, high-grade materials for minimal maintenance.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m18 0l-2.25 1.313M21 9.75l-2.25-1.313M3 9.75l2.25-1.313M3 9.75v2.25m18 0v-2.25M3 12l2.25 1.313M21 12l-2.25-1.313M3 12v2.25m18 0v-2.25m-18 3l2.25 1.313M21 15l-2.25-1.313M3 15v2.25m18 0v-2.25m-18 3l2.25 1.313M21 18l-2.25-1.313M3 18v2.25m18 0v-2.25" />`,
            },
            {
              title: "Compliance",
              description: "Compliance with and exceeding certified safety standards.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />`, // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Intelligent safety brakes",
              description: "Intelligent safety brakes, precision interlocks, and emergency stop controls.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />`, // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Capacities",
              description: "Capacities and sizes tailored to residential needs.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />`,
            },
            {
              title: "User-friendly ",
              description:
                "User-friendly interfaces for ease of operation.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />`,
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Architectural Harmony, Personalized Mobility",
          description:
            "We understand that a home lift is more than just a functional necessity; it's an integral element of your home's design. Aaron Elevators offers unparalleled flexibility in crafting custom home lifts that seamlessly integrate with your architectural vision, be it traditional or avant-garde. Our commitment to innovation extends to user-friendly interfaces and advanced safety protocols, guaranteeing a harmonious blend of style, safety, and affordability.",
          specsList: [
            {
              category: "Customizable Elevator Features",
              details: "Tailored to meet individual mobility needs and preferences.",
            },
            {
              category: "Unique Specifications",
              details: "Designed to fit specific architectural requirements and space constraints.",
            },
            {
              category: "Reliable Safety Measures",
              details: " Incorporating cutting-edge safety technology for user peace of mind.",
            },
            {
              category: "Seamless Maintenance",
              details: "Constructed for long-lasting performance with minimal upkeep.",
            },
            {
              category: "Architectural Harmony",
              details: "Blending functionality with aesthetic sophistication to complement home design.",
            },
            {
              category: "Personalized Mobility",
              details: "Empowering those with mobility challenges with accessible and comfortable solutions.",
            },
            {
              category: "Energy-Efficient Designs",
              details:
                "Reducing environmental impact and operational costs.",
            },
            {
              category: "Competitive Home Lift Prices",
              details:
                "Making advanced home upgrades accessible to a wider audience.",
            },
          ],
        },
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 1,
        src: GlassElevator2,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
      {
        id: 2,
        src: HomeElevatorImage2,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
      {
        id: 3,
        src: HomeElevatorImage3,
        alt: "Glass Elevator",
        title: "Panoramic View Elevator",
      },
      {
        id: 4,
        src: HomeElevatorImage4,
        alt: "Glass Elevator",
        title: "Panoramic View Elevator",
      },
      {
        id: 5,
        src: HomeElevatorImage5,
        alt: "Glass Elevator",
        title: "Panoramic View Elevator",
      },
      {
        id: 1,
        src: HomeElevatorImage,
        alt: "Commercial Elevator Interior",
        title: "Modern Cabin Design",
      },


    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },

  {
    // Page header content
    id: `commercial-elevator`,
    pageHeader: {
      title: "commercial Elevator",
      description:
        "Elevate your business with efficient, reliable commercial elevator solutions, including space-saving LULA options.Commercial elevators are the silent orchestrators of high-traffic environments, ensuring seamless vertical transit. They are engines of efficiency, designed to handle multitudes, going beyond the limitations of stairs. For space-constrained environments like condos and small offices, Limited Use Limited Application (LULA) elevators offer a compact yet functional solution. Investing in commercial elevators means investing in enduring reliability, thanks to their robust steel-framed construction. Aaron Elevators provides expert installation, modernization, and repair, ensuring your business operations remain uninterrupted, blending quality and efficiency in perfect harmony.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specification"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "The Art of Efficient",
            highlight: "Commercial Elevator Solutions",
          },
          paragraph1:
            "Commercial elevators are the silent orchestrators of this flow, effortlessly transporting multitudes where stairs simply cannot. They're the engines of efficiency, designed to handle the pulse of high-traffic environments, ensuring that every floor is within easy reach.When space whispers limitations, the ingenuity of Limited Use Limited Application (LULA) elevators shines.",
          banner: {
            heading:
              "The Art of Efficient Commercial Elevator Solutions",
            text: "Commercial elevators are the silent orchestrators of this flow, effortlessly transporting multitudes where stairs simply cannot. They're the engines of efficiency, designed to handle the pulse of high-traffic environments, ensuring that every floor is within easy reach.When space whispers limitations, the ingenuity of Limited Use Limited Application (LULA) elevators shines.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "The Art of Efficient",
            highlight: "Commercial Elevator Solutions",
          },
          description:
            "Commercial elevators are the silent orchestrators of this flow, effortlessly transporting multitudes where stairs simply cannot. They're the engines of efficiency, designed to handle the pulse of high-traffic environments, ensuring that every floor is within easy reach.When space whispers limitations, the ingenuity of Limited Use Limited Application (LULA) elevators shines.",
          featuresList: [
            {
              title: "High-Traffic Capacity",
              description: "Designed to handle numerous occupants efficiently.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "LULA Options",
              description: "Space-saving solutions for compact buildings.",
              icon: "plus",
            },
            {
              title: "Durable Construction",
              description:
                "Steel-framed for long-term reliability.",
              icon: "plus",
            },
            {
              title: "Seamless Integration",
              description: "Expert installation for smooth operation.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Modernization Services",
              description: "Upgrades to enhance performance and aesthetics.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Reliable Repairs",
              description: "Minimizing downtime and ensuring safety.",
              icon: "plus",
            },
            {
              title: "Uninterrupted Business Flow",
              description:
                "Maintaining daily operational rhythm.",
              icon: "plus",
            },
            {
              title: "Quality and Efficiency",
              description: "Harmonized for optimal performance.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "The Art of Efficient Commercial Elevator Solutions ",
          description:
            "Commercial elevators are the silent orchestrators of this flow, effortlessly transporting multitudes where stairs simply cannot. They're the engines of efficiency, designed to handle the pulse of high-traffic environments, ensuring that every floor is within easy reach.When space whispers limitations, the ingenuity of Limited Use Limited Application (LULA) elevators shines.",
          specsList: [
            {
              category: "Steel-framed",
              details: "Steel-framed construction for longevity",
            },
            {
              category: "LULA elevator ",
              details: "LULA elevator options for space efficiency",
            },
            {
              category: "High-capacity ",
              details: "High-capacity design for heavy traffic",
            },
            {
              category: "Customizable",
              details: "Customizable installation and modernization",
            },
            {
              category: "Professional",
              details: "Professional repair services",
            },

          ],
        },
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [

      {
        id: 3,
        src: CommercialElecatorImage2,
        alt: "Glass Elevator",
        title: "Panoramic View Elevator",
      },
      {
        id: 4,
        src: CommercialElecatorImage3,
        alt: "Glass Elevator",
        title: "Panoramic View Elevator",
      },



    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },


  {
    // Page header content
    id: `structural-elevator`,
    pageHeader: {
      title: "Structural Elevator",
      description:
        "Effortless installation, tailored solutions, and competitive pricing make advanced elevator technology accessible for any architectural vision. Aaron Elevators specializes in seamlessly integrating structural elevators into diverse architectural designs. We offer turnkey expertise for existing buildings, enhancing accessibility without compromising structural or aesthetic integrity. Our solutions are client-adapted, addressing specific project needs while maintaining competitive pricing. We believe groundbreaking elevator technology should be accessible to all, crafting personalized systems that prioritize safety and comfort for all users, including the elderly and disabled.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specification"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Precision Pricing,",
            highlight: "Personalized Mobility",
          },
          paragraph1:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          banner: {
            heading:
              "Accessibility's Impact on a Fuller Life",
            text: "Our elevators are the bridges that connect lives, not just floors. They're architects of accessibility, crafting pathways to safer and more comfortable movement. For the elderly and disabled, these elevators are beacons of freedom, illuminating pathways to independence and painting a richer tapestry of life with every effortless journey.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Precision Pricing,",
            highlight: "Bespoke Performance",
          },
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          featuresList: [
            {
              title: "Effortless Installation",
              description: "Designed for swift, streamlined integration into existing structures.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Tailored Solutions",
              description: "Customizable to meet the unique contours of any architectural masterpiece.",
              icon: "plus",
            },
            {
              title: "Competitive Pricing",
              description:
                "Makes advanced elevator technology accessible to a wider range of projects.",
              icon: "plus",
            },
            {
              title: "Enhanced Accessibility",
              description: "Creates pathways for safer and more comfortable movement.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Improved Quality of Life",
              description: "Promotes independence and freedom of mobility for the elderly and disabled.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Turnkey Expertise",
              description: "Expert navigation of challenges in integrating elevators into existing buildings.",
              icon: "plus",
            },
            {
              title: "Structural Integrity Preservation",
              description:
                "Enhances accessibility without compromising the building's core structure.",
              icon: "plus",
            },
            {
              title: "Aesthetic Integration",
              description: "Seamlessly blends with the building's design, maintaining visual appeal.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Precision Pricing, Bespoke Performance",
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          specsList: [
            {
              category: "Customizable",
              details: "Customizable design to suit architectural requirements.",
            },
            {
              category: "Variable",
              details: "Variable load capacities.",
            },
            {
              category: "Advanced safety",
              details: "Advanced safety features, including auto fault display and detection.",
            },
            {
              category: "Energy-efficient ",
              details: "Energy-efficient operation.",
            },
            {
              category: "Durable",
              details: "Durable, long-lasting construction.",
            },
            {
              category: "Smooth",
              details: "Smooth and reliable operation.",
            },
            {
              category: "Compliance",
              details: "Compliance with industry safety standards.",
            },
            {
              category: "Turnkey",
              details: "Turnkey project management.",
            },
          ],
        },
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 2,
        src: StructuralElevator1,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },

  {
    // Page header content
    id: `capsule-elevator`,
    pageHeader: {
      title: "Capsule Elevator",
      description:
        "Architectural showpieces offering stunning views, superior comfort, and seamless building integration.Capsule elevators transcend mere transportation, becoming dynamic architectural features that infuse buildings with sophistication and visual allure. These elevators are moving works of art, featuring aesthetically captivating interiors and expansive glass panels that offer panoramic views. They prioritize passenger comfort with smooth, silent operation and are expertly customized to seamlessly integrate with any building design. Built for lasting reliability and minimal maintenance, they provide a cost-effective, long-term enhancement to architectural spaces.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specification"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Precision Pricing,",
            highlight: "Bespoke Performance",
          },
          paragraph1:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          banner: {
            heading:
              "Elevating Homes, Enhancing Lives",
            text: "Aaron Elevators is dedicated to delivering the pinnacle of residential elevator technology. We believe in innovation that serves our clients, offering advanced features such as AI integration and energy-efficient designs. As a leading lift manufacturer, we are committed to providing exceptional value, with competitive home lift prices that make transformative home upgrades accessible.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Fortified Protection:",
            highlight: "Standards You Can Rely On.",
          },
          description:
            "Aaron Elevators integrates cutting-edge safety technology into every lift, adhering to and surpassing rigorous certified safety standards. Our commitment to your peace of mind is evident in features like intelligent safety brakes, precision interlocks, and readily accessible emergency stop controls. In Kerala's dynamic residential landscape, we provide a foundation of unwavering safety and reliability.",
          featuresList: [
            {
              title: "Architectural Integration",
              description: "Elevates building aesthetics with a dynamic design element.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Panoramic Views",
              description: "Large glass panels offer stunning, unobstructed views.",
              icon: "plus",
            },
            {
              title: "Silent Operation",
              description:
                "Gearless traction ensures a quiet, comfortable ride.",
              icon: "plus",
            },
            {
              title: "Custom Design",
              description: "Tailored to seamlessly fit architectural vision.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Luxurious Interiors",
              description: "High-quality finishes and sophisticated design elements.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Smooth Travel",
              description: "Advanced technology for a seamless passenger experience.",
              icon: "plus",
            },
            {
              title: "Reliable Performance",
              description:
                "Robust construction for long-term reliability.",
              icon: "plus",
            },
            {
              title: "Minimal Maintenance",
              description: "Designed for cost-effective, long-lasting operation.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Technical Specifications",
          description:
            "Our commercial elevators are built with precision engineering and quality materials to ensure reliability and safety.",
          specsList: [
            {
              category: "View",
              details: "Panoramic glass viewing panels.",
            },
            {
              category: "Movement",
              details: "Gearless traction system for smooth, quiet operation.",
            },
            {
              category: "Customization",
              details: "Tailored design to match architectural style.",
            },
            {
              category: "Capacity",
              details: "Varies based on design and building requirements.",
            },
            {
              category: "Stops",
              details: "Multiple stops, adaptable to building height.",
            },
            {
              category: "Materials",
              details: "High-quality, durable materials with luxurious finishes.",
            },
          ],
        },
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 2,
        src: CapsuleElevator1,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },





    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },
  {
    // Page header content
    id: `passenger-elevator`,
    pageHeader: {
      title: "Passenger Elevator",
      description:
        "Aaron Elevators delivers reliable, efficient, and customizable passenger lifts tailored for Kerala's diverse architectural landscape, ensuring smooth, safe, and modern vertical transportation.As Kerala's buildings soar, Aaron's passenger lifts provide more than just movement; they offer a seamless experience. Designed for safety, efficiency, and cutting-edge technology, our lifts cater to a range of needs, from residential elegance to commercial dynamism. We prioritize smooth, secure, and innovative vertical travel, making Aaron the trusted name in Kerala's elevator solutions.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specification"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Smooth Journeys,",
            highlight: "Elevated Comfort",
          },
          paragraph1:
            "In the soaring skylines of Kerala, where architectural dreams rise with each new story, seamless vertical movement is no longer a luxury—it's a necessity. Aaron's passenger lifts, crafted for this dynamic landscape, transform ordinary journeys into elevated experiences. ",
          banner: {
            heading:
              "The Core Specifications: Aaron Lifts in Kerala Defined",
            text: "Aaron delivers not just transportation, but a promise of safety, efficiency, and cutting-edge technology. From sleek residential towers to bustling commercial hubs, our lifts are the silent, reliable pulse of modern Kerala, ensuring every ascent is smooth, secure, and powered by innovation.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Smooth Journeys",
            highlight: "Elevated Comfort",
          },
          description:
            "In the soaring skylines of Kerala, where architectural dreams rise with each new story, seamless vertical movement is no longer a luxury—it's a necessity. Aaron's passenger lifts, crafted for this dynamic landscape, transform ordinary journeys into elevated experiences. ",
          featuresList: [
            {
              title: "Effortless Performance",
              description: "Smooth, reliable, and trouble-free vertical transport.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />`, // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Longevity",
              description: "Durable construction for extended use with minimal upkeep.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m18 0l-2.25 1.313M21 9.75l-2.25-1.313M3 9.75l2.25-1.313M3 9.75v2.25m18 0v-2.25M3 12l2.25 1.313M21 12l-2.25-1.313M3 12v2.25m18 0v-2.25m-18 3l2.25 1.313M21 15l-2.25-1.313M3 15v2.25m18 0v-2.25m-18 3l2.25 1.313M21 18l-2.25-1.313M3 18v2.25m18 0v-2.25" />`,
            },
            {
              title: "User-Friendly Control System",
              description:
                "Intuitive operation for enhanced user convenience.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />`,
            },
            {
              title: "Low Maintenance",
              description: "Reduced maintenance needs for consistent performance.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />`, // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Diverse Capacity Options",
              description: "Catering to various building sizes and occupancy needs.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />`, // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Optimized Speed",
              description: "Flexible speed options to match building requirements.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />`,
            },
            {
              title: "Uncompromising Safety",
              description:
                "EnAdvanced safety systems for passenger protection.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />`,
            },
            {
              title: "Customizable Design",
              description: "Personalized door and interior aesthetics.",
              icon: `<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />`, // Assuming this corresponds to the x icon in SVG
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Smooth Journeys and Elevated Comfort",
          description:
            "In the soaring skylines of Kerala, where architectural dreams rise with each new story, seamless vertical movement is no longer a luxury—it's a necessity. Aaron's passenger lifts, crafted for this dynamic landscape, transform ordinary journeys into elevated experiences.",
          specsList: [
            {
              category: "Passenger Capacity",
              details: "Aaron passenger lifts are designed with varying sizes and dimensions to cater to diverse needs.",
            },
            {
              category: "Passenger Lift Speed",
              details: " As a leading lift manufacturer in Kerala, we prioritize safe and efficient vertical movement.",
            },
            {
              category: "Safety Features",
              details: "At Aaron, passenger safety is our top priority.",
            },
            {
              category: "Doors & Interior Features",
              details: " Aaron passenger lifts in Kerala offer personalized design options for both doors and interior aesthetics.",
            },

          ],
        },
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 2,
        src: PassengerElevatorImage,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },



    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },
  {
    // Page header content
    id: `glass-elevator`,
    pageHeader: {
      title: "Glass Elevator",
      description:
        "Architectural marvels of transparency, offering stunning views, customizable designs, and advanced safety features.Glass elevators transcend traditional vertical transport, becoming captivating architectural elements that enhance modern buildings with light and panoramic views. They offer a unique sensory experience, transforming commutes into journeys of visual wonder. Customizable aesthetics allow seamless integration with diverse architectural styles, while advanced safety technology ensures secure and reliable operation. These elevators are not just functional; they are design statements that elevate both the aesthetic and experiential aspects of a building",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specification"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Precision Pricing,",
            highlight: "Bespoke Performance",
          },
          paragraph1:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          banner: {
            heading:
              "Elevating Homes, Enhancing Lives",
            text: "Aaron Elevators is dedicated to delivering the pinnacle of residential elevator technology. We believe in innovation that serves our clients, offering advanced features such as AI integration and energy-efficient designs. As a leading lift manufacturer, we are committed to providing exceptional value, with competitive home lift prices that make transformative home upgrades accessible.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Precision Pricing,",
            highlight: "Bespoke Performance",
          },
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          featuresList: [
            {
              title: "Architectural Enhancement",
              description: "Integrates as a stunning design feature.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Panoramic Views",
              description: "Offers unobstructed, breathtaking views.",
              icon: "plus",
            },
            {
              title: "Natural Light Integration",
              description:
                "Maximizes natural light within the building.",
              icon: "plus",
            },
            {
              title: "Customizable Design",
              description: "Tailored aesthetics to match building style.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Advanced Safety",
              description: "Reinforced glass and cutting-edge safety systems.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Smooth Operation",
              description: "Advanced drive systems for a comfortable ride.",
              icon: "plus",
            },
            {
              title: "Modern Aesthetics",
              description:
                "Sleek and contemporary design elements.",
              icon: "plus",
            },
            {
              title: "Increased Property Value",
              description: "Adds a unique and desirable architectural feature.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Precision Pricing, Bespoke Performance",
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          specsList: [
            {
              category: "Glass Type",
              details: "Reinforced, laminated safety glass.",
            },
            {
              category: "Drive System",
              details: "Gearless traction or hydraulic systems.",
            },
            {
              category: "Customization",
              details: "Design, finishes, lighting, and shape options.",
            },
            {
              category: "Capacity",
              details: "Varies based on design and building requirements.",
            },
            {
              category: "Stops",
              details: "Multiple stops, adaptable to building height.",
            },
            {
              category: "Control Systems",
              details: "Advanced digital controls with safety features.",
            },
            {
              category: "Lighting",
              details:
                "Integrated LED lighting options.",
            },
            {
              category: "Frame Materials",
              details:
                "Stainless steel, aluminum, or custom finishes.",
            },
          ],
        },
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 2,
        src: GlassElevator1,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
      {
        id: 3,
        src: GlassElevator2,
        alt: "Glass Elevator",
        title: "Panoramic View Elevator",
      },
      {
        id: 4,
        src: GlassElevator3,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
      {
        id: 1,
        src: GlassElevator4,
        alt: "Glass Elevator",
        title: "Panoramic View Elevator",
      },




    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },
  {
    // Page header content
    id: `car-elevator`,
    pageHeader: {
      title: "Car Elevator",
      description:
        "Precision-engineered vertical transport solutions for the automotive industry, ensuring safe and efficient vehicle movement.Designed for the dynamic demands of the automotive sector, our car elevators redefine vertical transportation with precision and safety. We engineer seamless journeys, crafting both hydraulic and commercial variants that adhere to international quality standards. Employing advanced technology and premium components, these elevators offer diverse capacities and robust performance, ensuring reliable and efficient vehicle movement within multi-level facilities.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specification"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Precision Pricing,",
            highlight: "Bespoke Performance",
          },
          paragraph1:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          banner: {
            heading:
              "Elevating Homes, Enhancing Lives",
            text: "Aaron Elevators is dedicated to delivering the pinnacle of residential elevator technology. We believe in innovation that serves our clients, offering advanced features such as AI integration and energy-efficient designs. As a leading lift manufacturer, we are committed to providing exceptional value, with competitive home lift prices that make transformative home upgrades accessible.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Precision Pricing,",
            highlight: "Bespoke Performance",
          },
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.q",
          featuresList: [
            {
              title: "Effortless Installation",
              description: "Streamlined process for quick and efficient setup.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Exceptional Load-Bearing Capacity",
              description: "Robust design to handle heavy vehicles.",
              icon: "plus",
            },
            {
              title: "Extended Operational Lifespan",
              description:
                "Durable construction for long-term reliability.",
              icon: "plus",
            },
            {
              title: "Hassle-Free Maintenance",
              description: "Minimal upkeep requirements for cost-efficiency.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Diverse Capacities",
              description: "Tailored to accommodate various vehicle sizes and weights.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Advanced Safety Systems",
              description: "Comprehensive safety features for secure vehicle transport.",
              icon: "plus",
            },
            {
              title: "International Standards Compliance",
              description:
                "Manufactured to meet rigorous global quality benchmarks.",
              icon: "plus",
            },
            {
              title: "Smooth Vertical Movement",
              description: "Engineered for precise and stable vehicle transfer.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Precision Pricing, Bespoke Performance",
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          specsList: [
            {
              category: "Type",
              details: "Hydraulic and Commercial Car Elevators",
            },
            {
              category: "Capacity",
              details: "Variable, tailored to automotive industry needs",
            },
            {
              category: "Safety",
              details: "Advanced safety features meeting international standards",
            },
            {
              category: "Technology",
              details: "State-of-the-art control systems",
            },
            {
              category: "Materials",
              details: "High-grade, durable components",
            },
            {
              category: "Installation",
              details: "Streamlined for efficiency",
            },
            {
              category: "Maintenance",
              details:
                "Designed for minimal upkeep",
            },

          ],
        },
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 1,
        src: CarElevator1,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
      {
        id: 2,
        src: CarElevator2,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },

      {
        id: 3,
        src: CarElevator3,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },

      {
        id: 4,
        src: CarElevator4,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },







    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },
  {
    // Page header content
    id: `hospital-elevator`,
    pageHeader: {
      title: "hospital Elevator",
      description:
        "Safe, comfortable, and reliable elevators designed for patient transport in healthcare facilities.Hospital Elevators are meticulously crafted to prioritize patient well-being, offering smooth, spacious, and reliable transportation within healthcare environments. These elevators ensure comfortable journeys for patients, accommodating wheelchairs and beds with ease. Equipped with comprehensive safety features, they provide swift and secure passage during emergencies, reflecting a commitment to patient safety and comfort. Customizable cabin interiors and precise operational features ensure optimal performance and user experience in demanding hospital settings.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specification"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Precision Pricing,",
            highlight: "Bespoke Performance",
          },
          paragraph1:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          banner: {
            heading:
              "Accessibility's Impact on a Fuller Life",
            text: "Our elevators are the bridges that connect lives, not just floors. They're architects of accessibility, crafting pathways to safer and more comfortable movement. For the elderly and disabled, these elevators are beacons of freedom, illuminating pathways to independence and painting a richer tapestry of life with every effortless journey.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Precision Pricing,",
            highlight: " Bespoke Performance",
          },
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          featuresList: [
            {
              title: "Comfort and Spaciousness",
              description: "Designed to accommodate patients, wheelchairs, and beds comfortably.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Smooth Movement",
              description: "Ensures a gentle and stable ride, minimizing patient discomfort.",
              icon: "plus",
            },
            {
              title: "Accurate Door Opening",
              description:
                "Provides precise door alignment for safe and efficient entry and exit.",
              icon: "plus",
            },
            {
              title: "Precise Stop Leveling",
              description: "Stops the elevator car perfectly aligned with floor levels for seamless transitions.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Emergency Control Options",
              description: "Includes backup power and emergency communication for critical situations.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Customizable Interiors",
              description: "Offers various cabin wall materials and finishes to suit hospital aesthetics.",
              icon: "plus",
            },
            {
              title: "Variable Capacity",
              description:
                "Accommodates different patient loads with customizable capacity options.",
              icon: "plus",
            },
            {
              title: "Advanced Control System",
              description: "Features microprocessor-based control with diagnostic capabilities for optimal performance.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Technical Specifications",
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          specsList: [
            {
              category: "Capacity",
              details: "13 to 40 passengers (customizable)",
            },
            {
              category: "Cabin Dimensions",
              details: "Minimum 3 feet x 7 feet (customizable)",
            },
            {
              category: "Cabin Wall Materials",
              details: "Mild Steel (painted/powder coated), Hairline brush finished stainless steel",
            },
            {
              category: "Drive System",
              details: "Gearless Traction, Hydraulic",
            },
            {
              category: "Door Systems",
              details: "Automatic sliding doors, adjustable opening speeds",
            },
            {
              category: "Control System",
              details: "Microprocessor-based control with diagnostic and emergency features",
            },
            {
              category: "Safety Features",
              details:
                "Emergency power backup, overload protection, door safety sensors, emergency communication system.",
            },
            {
              category: "Leveling Accuracy",
              details:
                "Precise floor leveling for smooth entry and exit",
            },
          ],
        },
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 1,
        src: HospitalElevators1,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
      {
        id: 2,
        src: HospitalElevators2,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },
  {
    // Page header content
    id: `freight-elevator`,
    pageHeader: {
      title: "freight Elevator",
      description:
        "Powerful, durable, and efficient elevators designed for heavy-duty industrial load transportation, minimizing costs and maximizing productivity. Aaron Elevators’ Freight Elevators are engineered to meet the demanding needs of modern industries, offering reliable and speedy transportation of heavy and bulky loads. Built with robust construction and advanced technology, these elevators ensure seamless logistics and optimized workflows. They feature energy-efficient systems to minimize operating costs and incorporate cutting-edge fittings for enhanced safety and control. Designed for durability and performance, they handle diverse cargo requirements, from industrial equipment to merchandise, ensuring smooth and uninterrupted operations.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specification"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Precision Pricing,",
            highlight: "Personalized Mobility",
          },
          paragraph1:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          banner: {
            heading:
              "Accessibility's Impact on a Fuller Life",
            text: "Our elevators are the bridges that connect lives, not just floors. They're architects of accessibility, crafting pathways to safer and more comfortable movement. For the elderly and disabled, these elevators are beacons of freedom, illuminating pathways to independence and painting a richer tapestry of life with every effortless journey.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Precision Pricing, ",
            highlight: " Personalized Mobility",
          },
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          featuresList: [
            {
              title: "High Load Capacity",
              description: "Handles heavy and bulky goods with ease.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Rapid Transportation",
              description: "Ensures swift movement of goods to optimize workflows.",
              icon: "plus",
            },
            {
              title: "Durable Construction",
              description:
                "Built to withstand harsh industrial environments.",
              icon: "plus",
            },
            {
              title: "Cost-Effective Operation",
              description: "Energy-efficient systems and minimal maintenance.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Advanced Safety",
              description: "Integrated safety features for secure transport.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Customizable Design",
              description: "Tailored to meet specific industry requirements.",
              icon: "plus",
            },
            {
              title: "Smart Control Systems",
              description:
                "Intuitive controls for efficient operation.",
              icon: "plus",
            },
            {
              title: "Cutting-Edge Fittings",
              description: "Modern technology and components for superior performance.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Technical Specifications",
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          specsList: [
            {
              category: "Capacity",
              details: "Customizable, accommodating heavy and bulky loads.",
            },
            {
              category: "Speed",
              details: "High-speed travel capabilities for efficient transport.",
            },
            {
              category: "Construction",
              details: "Robust steel frame and rugged components for durability.",
            },
            {
              category: "Drive System",
              details: "Efficient and powerful drive systems (e.g., traction, hydraulic).",
            },
            {
              category: "Control System",
              details: "Advanced smart controls with diagnostic capabilities.",
            },
            {
              category: "Door Systems",
              details: "Heavy-duty, automated or manual options.",
            },
            {
              category: "Safety Features",
              details:
                "Comprehensive safety mechanisms, including overload protection and interlocks.",
            },
            {
              category: "Energy Efficiency",
              details:
                "Energy-saving systems for reduced operating costs.",
            },
          ],
        },
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 1,
        src: FreightElevator1,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },

    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },
  {
    // Page header content
    id: `dumnwaiter-elevator`,
    pageHeader: {
      title: "dumbwaiter elevator",
      description:
        "Compact and efficient elevators for quick and reliable transport of goods in various industries.Aaron Elevators' Dumbwaiter Elevators are designed to optimize material handling in settings where efficiency is crucial, such as hotels, restaurants, hospitals, schools, and warehouses. Available in manual or powered configurations, they offer flexible solutions for diverse operational needs. Manual dumbwaiters utilize hand ropes, while powered versions feature push-button control. Safety is prioritized with advanced control systems, fault detection, and professional servicing. These elevators are built for stability and durability, ensuring reliable and safe operation for loads ranging from residential to commercial capacities.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specification"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Precision Pricing,",
            highlight: "Personalized Mobility",
          },
          paragraph1:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          banner: {
            heading:
              "Accessibility's Impact on a Fuller Life",
            text: "Our elevators are the bridges that connect lives, not just floors. They're architects of accessibility, crafting pathways to safer and more comfortable movement. For the elderly and disabled, these elevators are beacons of freedom, illuminating pathways to independence and painting a richer tapestry of life with every effortless journey.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Precision Pricing,",
            highlight: " Bespoke Performance",
          },
          description:
            "Aaron Elevators integrates cutting-edge safety technology into every lift, adhering to and surpassing rigorous certified safety standards. Our commitment to your peace of mind is evident in features like intelligent safety brakes, precision interlocks, and readily accessible emergency stop controls. In Kerala's dynamic residential landscape, we provide a foundation of unwavering safety and reliability.",
          featuresList: [
            {
              title: "Efficient Transport",
              description: "Quick and reliable movement of goods.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Manual or Powered Options",
              description: "Flexible operation to suit different needs.",
              icon: "plus",
            },
            {
              title: "Variable Load Capacity",
              description:
                "Accommodates residential and commercial requirements.",
              icon: "plus",
            },
            {
              title: "Advanced Safety Systems",
              description: "Ensures safe and reliable operation.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Professional Maintenance",
              description: "Guarantees optimal performance and longevity.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Robust Construction",
              description: "Durable materials for long-term use.",
              icon: "plus",
            },
            {
              title: "Precise Control",
              description:
                "PLC systems for accurate and smooth operation.",
              icon: "plus",
            },
            {
              title: "Fault Detection",
              description: "Immediate identification and display of system errors.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Precision Pricing, Bespoke Performance",
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          specsList: [
            {
              category: "Types",
              details: "Manual (rope-driven) and Powered (motorized, push-button)",
            },
            {
              category: "Capacity",
              details: "100-200 lbs (residential), higher capacities for commercial",
            },
            {
              category: "Control System",
              details: "Programmable Logic Controllers (PLCs)",
            },
            {
              category: "Safety Features",
              details: "Fault detection displays, interlocks, emergency stops",
            },
            {
              category: "Construction",
              details: "High compressive strength, corrosion-resistant materials",
            },
            {
              category: "Maintenance",
              details: "Professional servicing by licensed technicians",
            },
            {
              category: "Stability",
              details:
                "Dimensional stability, robust structural integrity",
            },
            {
              category: "Operation",
              details:
                "Smooth, reliable vertical transport",
            },
          ],
        },
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 1,
        src: DumbWaiterElevator2,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
      {
        id: 1,
        src: DumbWaiterElevator1,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },

    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },
  {
    // Page header content
    id: `kitchen-elevators`,
    pageHeader: {
      title: "kitchen elevator",
      description:
        "Compact, efficient elevators designed for seamless transport of food and supplies in multi-level kitchens.Kitchen elevators, or dumbwaiters, are essential for optimizing workflow in restaurants, hotels, and large residential kitchens. They provide seamless vertical transport of food, dishes, and supplies, enhancing efficiency and convenience. Available in manual or motorized options, they are designed with safety and practicality in mind. Professional installation ensures compliance with regulations, while regular maintenance guarantees longevity. Customizable capacities and features, including temperature versatility, make them adaptable to various culinary needs.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specification"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Precision Pricing,",
            highlight: "Personalized Mobility",
          },
          paragraph1:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          banner: {
            heading:
              "Accessibility's Impact on a Fuller Life",
            text: "Our elevators are the bridges that connect lives, not just floors. They're architects of accessibility, crafting pathways to safer and more comfortable movement. For the elderly and disabled, these elevators are beacons of freedom, illuminating pathways to independence and painting a richer tapestry of life with every effortless journey.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Precision Pricing,",
            highlight: " Bespoke Performance",
          },
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          featuresList: [
            {
              title: "Space Optimization",
              description: "Compact design for efficient use in kitchens.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Efficient Transport",
              description: "Streamlines movement of food and supplies.",
              icon: "plus",
            },
            {
              title: "Operational Flexibility",
              description:
                "Manual or motorized options to suit needs.",
              icon: "plus",
            },
            {
              title: "Enhanced Safety",
              description: "Safety features protect users and prevent accidents.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Regulatory Compliance",
              description: "Professional installation ensures adherence to codes.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Temperature Versatility",
              description: "Handles both hot and cold items.",
              icon: "plus",
            },
            {
              title: "Customizable Capacity",
              description:
                "Adapts to specific load requirements.",
              icon: "plus",
            },
            {
              title: "Improved Kitchen Workflow",
              description: "Enhances accessibility and staff efficiency.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Technical Specifications",
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          specsList: [
            {
              category: "Capacity",
              details: "100 to 500 lbs (customizable)",
            },
            {
              category: "Operation",
              details: "Manual (hand-powered) or Motorized (push-button)",
            },
            {
              category: "Safety",
              details: "Interlocks, emergency stops, sensors",
            },
            {
              category: "Installation",
              details: "Professional installation required, compliant with building codes",
            },
            {
              category: "Maintenance",
              details: "Regular servicing recommended",
            },
            {
              category: "Material Handling",
              details: "Hot and cold item capable",
            },
            {
              category: "Control System",
              details:
                "Manual or automated controls",
            },
            {
              category: "Construction",
              details:
                "Durable materials, space-efficient design",
            },
          ],
        },
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 1,
        src: KitchenElevator1,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
      {
        id: 1,
        src: KitchenElevator2,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
      {
        id: 1,
        src: KitchenElevator3,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },

    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },
  {
    // Page header content
    id: `mrl-elevator`,
    pageHeader: {
      title: "MRL elevator",
      description:
        "Space-saving, efficient elevators with advanced technology for modern buildings. Machine-Room-Less (MRL) Elevators represent the future of vertical transportation, offering seamless integration into contemporary architectural designs. These elevators utilize a gearless traction system, eliminating the need for a separate machine room and optimizing space and energy efficiency. They feature counterweight assistance for smooth, controlled movement and are adaptable to a wide range of buildings, including hotels, apartments, and offices. With customizable capacities and the ability to handle multiple stops, MRL elevators provide flexible solutions for diverse vertical transportation needs, including support for heavy cab finishes for enhanced interior aesthetics.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specification"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Precision Pricing,",
            highlight: " Personalized Mobility",
          },
          paragraph1:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          banner: {
            heading:
              "Accessibility's Impact on a Fuller Life",
            text: "Our elevators are the bridges that connect lives, not just floors. They're architects of accessibility, crafting pathways to safer and more comfortable movement. For the elderly and disabled, these elevators are beacons of freedom, illuminating pathways to independence and painting a richer tapestry of life with every effortless journey.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Precision Pricing,",
            highlight: " Personalized Mobility",
          },
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          featuresList: [
            {
              title: "Space Efficiency",
              description: "Eliminates the need for a machine room, maximizing building space.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Energy Efficiency",
              description: "Gearless traction system reduces energy consumption.",
              icon: "plus",
            },
            {
              title: "Smooth Operation",
              description:
                "Counterweight and gearless system ensure comfortable rides.",
              icon: "plus",
            },
            {
              title: "Flexible Design",
              description: "Customizable capacities and finishes to suit diverse needs.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Versatile Applications",
              description: "Suitable for various building types and architectural styles.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Multiple Stops",
              description: "Accommodates buildings with varying floor counts.",
              icon: "plus",
            },
            {
              title: "Advanced Control",
              description:
                "Modern microprocessor control for precise operation.",
              icon: "plus",
            },
            {
              title: "Enhanced Aesthetics",
              description: "Supports heavy cab finishes for luxurious interiors.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Technical Specifications",
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          specsList: [
            {
              category: "Drive System",
              details: "Gearless Traction System (within hoistway)",
            },
            {
              category: "Capacity",
              details: " 2,100 lbs. to 5,000 lbs. (customizable)",
            },
            {
              category: "Stops",
              details: "2 to 25 stops",
            },
            {
              category: "Control",
              details: " Advanced microprocessor control with diagnostic capabilities",
            },
            {
              category: "Counterweight",
              details: "Integrated for balanced movement",
            },
            {
              category: "Applications",
              details: "Hotels, apartments, mixed-use buildings, offices",
            },
            {
              category: "Cab Finishes",
              details:
                "Support for heavy finishes (4,000 lbs. and above)",
            },
            {
              category: "Power",
              details:
                "Energy-efficient operation",
            },
          ],
        },
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 1,
        src: MRLElevators,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },
  {
    // Page header content
    id: `goods-elevator`,
    pageHeader: {
      title: "goods elevator",
      description:
        "Robust and customizable elevators designed for efficient and safe heavy load transportation. Aaron Elevators’ Goods Elevators are engineered to optimize material handling across various industries. They offer tailored solutions with capacities ranging from 500 kg to 6000 kg, adaptable to specific load requirements, lift heights, and transfer orientations. Safety is paramount, featuring comprehensive perimeter guards and interlocked access gates. Available in Gearless MRL, Geared MR, or Hydraulic configurations, with manual or automatic door systems, these elevators ensure efficient and secure operation. We specialize in creating bespoke solutions that enhance workflow and accommodate diverse cargo needs, prioritizing durability, precision, and safety.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specification"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Precision Pricing,",
            highlight: " Personalized Mobility",
          },
          paragraph1:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          banner: {
            heading:
              "Accessibility's Impact on a Fuller Life",
            text: "Our elevators are the bridges that connect lives, not just floors. They're architects of accessibility, crafting pathways to safer and more comfortable movement. For the elderly and disabled, these elevators are beacons of freedom, illuminating pathways to independence and painting a richer tapestry of life with every effortless journey.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Precision Pricing,",
            highlight: " Personalized Mobility",
          },
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          featuresList: [
            {
              title: "Heavy-Duty Capacity",
              description: "Handles substantial loads with ease and reliability.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Customizable Design",
              description: "Adapts to specific operational requirements and space constraints.",
              icon: "plus",
            },
            {
              title: "Enhanced Safety",
              description:
                "Provides comprehensive safety measures for personnel and cargo.",
              icon: "plus",
            },
            {
              title: "Smooth Operation",
              description: "Ensures stable and precise movement of goods.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Efficient Loading/Unloading",
              description: "Facilitates quick and easy material transfer.",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Durable Construction",
              description: "Built to withstand heavy use and demanding environments.",
              icon: "plus",
            },
            {
              title: "Flexible Drive Options",
              description:
                "Offers various drive systems to suit different applications.",
              icon: "plus",
            },
            {
              title: "Advanced Control",
              description: "Features modern control systems for optimized performance and diagnostics.",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Technical Specifications",
          description:
            "We believe that groundbreaking elevator technology shouldn't be a luxury, but a standard. That's why we've redefined industry pricing, making cutting-edge solutions available to everyone. Beyond affordability, we're architects of personalization, crafting elevator systems that resonate with the unique heartbeat of each project. Your vision, your needs—perfectly realized.",
          specsList: [
            {
              category: "Capacity",
              details: " 500 kg to 6000 kg (customizable)",
            },
            {
              category: "Drive System",
              details: "Gearless MRL, Geared MR, Hydraulic)",
            },
            {
              category: "Door Systems",
              details: "Manual or Automatic (sliding, swing)",
            },
            {
              category: "Safety",
              details: " Full perimeter guards, interlocked access gates, overload protection",
            },
            {
              category: "Leveling",
              details: "Precise leveling for smooth loading/unloading",
            },
            {
              category: "Customization",
              details: "Tailored dimensions, lift height, transfer orientation",
            },
            {
              category: "Materials",
              details:
                "High-strength steel construction",
            },
            {
              category: "Control System",
              details:
                "Advanced microprocessor control with diagnostic capabilities",
            },
          ],
        },
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 1,
        src: FreightElevator1,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },











  
];

export default commercialElevatorData;
