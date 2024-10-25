import Profile from "components/Profile";
import DashboardTariffs from "../DashboardTariffs";
import DashboardStatus from "../DashboardStatus";
import DashboardInfo from "./DashboardInfo";

import DashboardPayment from "./DashboardPayment";
import Gallery from "components/Gallery";

import image1 from "assets/images/image-1.png";
import image2 from "assets/images/image-2.png";

import * as s from "./styles";
import Slider from "components/Slider";
import Footer from "components/Footer";

const Dashboard = () => {
  const images = [
    { imgURL: image1, imgAlt: "image-1" },
    { imgURL: image2, imgAlt: "image-2" },
  ];

  return (
    <s.Dashboard>
      <s.DashboardCards>
        <s.DashboardInner>
          <s.DashboardContainer>
            <s.DashboardProfile>
              <Profile
                firstName={"Алексей"}
                lastName={"Костылев"}
                middleName={"Николаевич"}
              />
            </s.DashboardProfile>

            <s.DashboardStatus>
              <DashboardStatus />
            </s.DashboardStatus>
          </s.DashboardContainer>

          <s.DashboardContainer>
            <s.DashboardInfo>
              <DashboardInfo />
            </s.DashboardInfo>
            <s.DashboardPayment>
              <DashboardPayment />
            </s.DashboardPayment>
          </s.DashboardContainer>

          <s.DashboardContainer>
            <s.DashboardGallery>
              <Gallery>
                {images.map((image, index) => {
                  return (
                    <img key={index} src={image.imgURL} alt={image.imgAlt} />
                  );
                })}
              </Gallery>
            </s.DashboardGallery>

            <s.DashboardGallery>
              <Gallery>
                {[...images.reverse()].map((image, index) => {
                  return (
                    <img key={index} src={image.imgURL} alt={image.imgAlt} />
                  );
                })}
              </Gallery>
            </s.DashboardGallery>
          </s.DashboardContainer>
        </s.DashboardInner>
        <DashboardTariffs />
      </s.DashboardCards>

      <s.DashboardSlider>
        <Slider />
      </s.DashboardSlider>
      <Footer />
    </s.Dashboard>
  );
};

export default Dashboard;
