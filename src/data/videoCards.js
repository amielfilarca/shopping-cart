import rtx3070 from "../images/products/rtx-3070.png";
import rtx3080 from "../images/products/rtx-3080.png";
import rtx3090 from "../images/products/rtx-3090.png";
import prevRtx3070 from "../images/products/rtx-3070-preview.jpg";
import prevRtx3080 from "../images/products/rtx-3080-preview.jpg";
import prevRtx3090 from "../images/products/rtx-3090-preview.jpg";
import rtx3070Gallery1 from "../images/products/rtx-3070-gallery-1.png";
import rtx3080Gallery1 from "../images/products/rtx-3080-gallery-1.png";
import rtx3090Gallery1 from "../images/products/rtx-3090-gallery-1.png";

const videoCards = [
  {
    category: "Video Card",
    categoryId: "video-cards",
    id: "nvidia-geforce-rtx-3070",
    name: "Nvidia GeForce RTX 3070",
    price: 499.99,
    image: rtx3070,
    previewImage: prevRtx3070,
    gallery: [rtx3070Gallery1],
  },
  {
    category: "Video Card",
    categoryId: "video-cards",
    id: "nvidia-geforce-rtx-3080",
    name: "Nvidia GeForce RTX 3080",
    price: 699.99,
    image: rtx3080,
    previewImage: prevRtx3080,
    gallery: [rtx3080Gallery1],
  },
  {
    category: "Video Card",
    categoryId: "video-cards",
    id: "nvidia-geforce-rtx-3090",
    name: "Nvidia GeForce RTX 3090",
    price: 1499.99,
    image: rtx3090,
    previewImage: prevRtx3090,
    gallery: [rtx3090Gallery1],
  },
];

export default videoCards;
