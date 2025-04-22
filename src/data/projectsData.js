import { Bot, Factory, Video } from "lucide-react";

const projectsData = [
  {
    title: "Industrial Remote Assistance Platform",
    description:
      "WebRTC-based video calling solution with real-time annotations for manufacturing and medical support",
    // icon: <Video className="text-4xl text-indigo-500 mb-4" />,
    features: [
      "Real-time technical support for factory floors",
      "Annotation tools for remote guidance",
      "Optimized for low-bandwidth environments",
      "Integrated with manufacturing knowledge base",
    ],
    technologies: ["React", "WebRTC", "LiveKit", "OpenVidu"],
  },
  {
    title: "Robotic Welding Programming ",
    description:
      "Create new program and re-teaching of welding robots for new product and existing products",
    // icon: <Bot className="text-4xl text-indigo-500 mb-4" />,
    features: [
      "TCP calibration",
      "New product robot programming",
      "Welding parameter validation",
    ],
    technologies: ["Yashkawa", "Panasonic", "CNC Programming"],
  },
  {
    title: "3D Scanning & Digital Twins",
    description:
      "Delivered high-accuracy reality capture for heritage, urban, and industrial applications using FARO Focus 350 terrestrial laser scanners and IdeaForge Q6 drones",
    // icon: <FaMonument className="text-4xl text-amber-500 mb-4" />, // Using monument icon for heritage focus
    features: [
      "Precision scanning of heritage sites (Ramnagar Fort, Presidential Estate)",
      "Urban area mapping combining terrestrial + aerial scanning (Paharganj project)",
      "Automated defect detection in historical structures",
      "Dimensional analysis reports with heatmap visualization",
      "VFX-ready 3D models with texture mapping",
    ],
    technologies: [
      "FARO Focus 350",
      "IdeaForge Q6 Drone ",
      "Point Cloud Processing ",
      "CAD Reverse Engineering",
      "Reality Capture",
    ],
    projectCaseStudies: [
      {
        name: "Ramnagar Fort Conservation",
        details:
          "Created comprehensive digital twin of 18th century fort complex combining 87 FARO scan positions with 12 drone flights",
        deliverables: [
          "Historic Building Information Model (HBIM)",
          "Structural integrity analysis",
          "Conservation priority maps",
        ],
      },
      {
        name: "Presidential Estate Digital Twin",
        details:
          "Delivered millimeter-accurate 3D model (0.7mm RMSE) for architectural documentation",
        deliverables: [
          "As-built CAD models",
          "Security assessment models",
          "Landscape documentation",
        ],
      },
      {
        name: "Paharganj Urban Mapping",
        details:
          "Combined 53 terrestrial scans with drone photogrammetry (142GB raw data) for VFX production",
        deliverables: [
          "Textured 3D mesh (5cm resolution)",
          "GIS-integrated model",
          "VFX optimization packages",
        ],
      },
    ],
    methodologies: [
      "Hybrid scan planning (terrestrial + aerial)",
      "Target-based registration (≤2mm error)",
      "Multi-temporal comparison for degradation analysis",
      "Photogrammetric texture mapping (8K resolution)",
    ],
  },
];

export default projectsData;
