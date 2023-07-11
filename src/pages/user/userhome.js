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
      <div>
        <UserCarousel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

