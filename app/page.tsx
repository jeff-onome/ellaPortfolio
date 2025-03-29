import Experience from "@/components/Experience";
import FirstPage from "@/components/FirstPage";
import Navbar from "@/components/Navbar";
import Purest from "@/components/Purest";
import SelectedWork from "@/components/SelectedWork";
import StackedImageGallery from "@/components/StackedImageGallery";


import Image from "next/image";

export default function Home() {
  return (
    <div className="text-black">
        <Navbar />
        <FirstPage />

        <StackedImageGallery />
        <Purest />
        <Experience />
    </div>
  );
}
