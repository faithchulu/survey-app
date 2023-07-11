import NavBar from "../../assets/components/navbar";
import UserCarousel from "../../assets/components/carousel";
import Footer from "../../assets/components/footer";

export default function UserHome() {
  return (
    <div>
      {" "}
      <div>
        <NavBar />
      </div>
      <div className="relative">
        <UserCarousel />
      </div>
      <div className=" mt-64 relative bottom-0">
        <Footer />
      </div>
    </div>
  );
}

