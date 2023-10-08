export const sampleProjects = [
  {
    projectName: "Solar Jet Hunter",
    description:
      "Solar System project that can be done by anyone, anywhere, with a cellphone or laptop.",
    author: "Erik Ostlund",
    image: "https://www.health.com/thmb/OQ3_VsJHFaEYCAnWNz4MZTEwdSg=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-512816582-2000-2c7532dd6c8e478697eb44c26807d6dd.jpg",
    link: "https://www.zooniverse.org/projects/sophiemu/solar-jet-hunter",
  },
  {
    projectName: "Aurorasaurus",
    description:
      "The making of an aurora is an intricate dance of particles and magnetism between the Sun and Earth. The Sun continuously produces a solar wind, made of charged particles (plasma) carrying the Sun’s magnetic field. As the solar wind nears Earth, it causes the magnetic field of the Earth to be drawn into a giant teardrop shape, squashed on the side closest to the sun and drawn out into a long tail on the side farthest from the sun.",
    author: "Bob Johnson",
    image:
      "https://smd-cms.nasa.gov/wp-content/uploads/2023/04/aurora-jpg.webp",
    link: "https://www.aurorasaurus.org/",
  },
{
    projectName: "Solar Active Region Spotter",
    description:
      "Help track active regions as they evolve across solar rotations!",
    author: "Emily Mason",
    image: "https://gooseberry.blender.org/wp-content/uploads/2015/04/08___pointdensity_clouds3-1200x800.jpg",
    link: "https://www.zooniverse.org/projects/eimason/solar-active-region-spotter",
  },
];

export const sampleNotifications = [
  "Solar Flare on 3/2/24",
  "Sun Gazing Party on 5/2/24",
  "NASA visit on 10/12/2023",
];

export const storiesData = [
  {
    id: 1,
    username: "Prof Dan Burry",
    imageUrl: "https://gooseberry.blender.org/wp-content/uploads/2015/04/08___pointdensity_clouds3-1200x800.jpg",
    questions: [
      {
        question: "What instruments are used to collect solar wind data?",
        answers: ["Magnetometers", "Solar Wind Analyzers", "Spectrometers"],
      },
      {
        question: "How does the solar activity affect Earth's magnetosphere?",
        answers: ["It can cause geomagnetic storms", "It influences space weather"],
      },
    ],
  },

  {
    id: 2,
    username: "Prof Kareema",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/The_sun_in_many_wavelengths.jpg/1200px-The_sun_in_many_wavelengths.jpg",
    questions: [
      {
        question: "What are coronal mass ejections (CMEs) and how are they monitored?",
        answers: ["Explosive releases of solar plasma", "Monitored by coronagraphs"],
      },
    ],
  },

  {
    id: 3,
    username: "Dr. Nandesh",
    imageUrl: "https://www.nasa.gov/wp-content/uploads/2017/07/17-064.jpg",
    questions: [
      {
        question: "How are solar flares classified, and why are they important for heliophysics?",
        answers: ["Classified by X-ray intensity", "Provide insights into solar activity"],
      },
      {
        question: "What is the Parker Solar Probe, and what data is it collecting?",
        answers: ["Closest approach to the Sun", "Collects solar wind data"],
      },
    ],
  },

  {
    id: 4,
    username: "Lara Dutta",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREjwl-fl2I95o1VGwv1K7skhvSDaXnO16hhA&usqp=CAU",
    questions: [
      {
        question: "What is the solar cycle, and how does it impact heliophysics research?",
        answers: ["11-year cycle of solar activity", "Affects space weather predictions"],
      },
      {
        question: "How do solar observatories like SDO contribute to heliophysics?",
        answers: ["Monitor the Sun's surface and atmosphere", "Provide valuable data"],
      },
    ],
  },

  {
    id: 5,
    username: "Prof. Mary",
    imageUrl: "https://www.health.com/thmb/OQ3_VsJHFaEYCAnWNz4MZTEwdSg=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-512816582-2000-2c7532dd6c8e478697eb44c26807d6dd.jpg",
    questions: [
      {
        question: "What is the purpose of the Magnetospheric Multiscale (MMS) mission?",
        answers: ["Study magnetic reconnection", "Advance our understanding of space plasma"],
      },
      {
        question: "How does the Van Allen Probes mission contribute to heliophysics research?",
        answers: ["Explore Earth's radiation belts", "Collect radiation data"],
      },
    ],
  },
];


export const trendingProjects = [
  {
    name: "Solar Jet Hunter",
    description: "Solar System project that can be done by anyone, anywhere, with a cellphone or laptop.",
    tags: ["Tag1", "Tag2", "Tag3"],
    isRedText: false, 

  },
  {
    name: "Heliophysics Audified: Resonances in Plasmas",
    description: "What is space actually made of? It's definitely not a perfect vacuum.",
    tags: ["Tag2", "Tag3", "Tag4"],
    isRedText: false, 
  },
  {
    name: "Solar Active Region Spotter",
    description: "Help track active regions as they evolve across solar rotations!",
    tags: ["Tag1", "Tag3", "Tag5"],
    isRedText: true, 

  },
  {
    name: "Disk Detective",
    description: "Spot the disks around nearby stars where planets form and dwell!",
    tags: ["Tag1", "Tag3", "Tag5"],
    isRedText: false, 

  },
  {
    name: "Sungrazer Project",
    description: "Welcome to the Sungrazer citizen science Project comet program",
    tags: ["Tag1", "Tag3", "Tag5"],
    isRedText: true, 

  },
  {
    name: "Aurorasaurus",
    description: "The making of an aurora is an intricate dance of particles and magnetism between the Sun and Earth.",
    tags: ["Tag1", "Tag3", "Tag5"],
    isRedText: false, 

  },
];

export const leaderboardData = [
  {
    rank: 1,
    user: "Vidya",
    score: 932,
  },
  {
    rank: 2,
    user: "Shawn",
    score: 846,
  },
  {
    rank: 3,
    user: "Anita",
    score: 781,
  },
  {
    rank: 4,
    user: "Dhara",
    score: 706,
  },
];


export const questionsAndAnswers = {
  question1: {
    question:
      "What term describes the outermost layer of the Sun's atmosphere?",
    options: ["Magnetosphere", "Photosphere", "Corona", "Heliosphere"],
    answer: "Corona",
  },
  question2: {
    question:
      "How many planets have an artificial Satellite in the Simulation?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  question3: {
    question:
      "What term refers to the brief, intense burst of high-energy electromagnetic radiation emitted by the Sun?",
    options: ["Solar Wind", "Aurora", "Flare", "Eclipse"],
    answer: "Flare",
  },
  question4: {
    question:
      "How many satellites does Earth have? (Hint: natural and man-made satellites)",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
};