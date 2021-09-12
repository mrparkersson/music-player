import { v4 as uuidv4 } from "uuid";

const chillHop = () => {
  return [
    {
      name: "Cabana",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg",
      artist: "Juan Rios",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21647",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4,
      active: true,
    },
    {
      name: "Vitamin D",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg",
      artist: "fantompower",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22790",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4,
      active: true,
    },
    {
      name: "When I Get Up In the Morning",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg",
      artist: "Middle School",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22933",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4,
      active: true,
    },
  ];
};

export default chillHop;
