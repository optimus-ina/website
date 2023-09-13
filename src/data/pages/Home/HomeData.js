import phoneMobile from "../../../assets/images/home/desktop/mobile-hero-image.png"
import phoneDesktop from "../../../assets/images/home/desktop/desktop-hero-image.png";
import meeting from "../../../assets/images/home/desktop/illustration-meeting.svg";
import developers from "../../../assets/images/home/desktop/illustration-developers.svg";
import collaboration from "../../../assets/images/home/desktop/illustration-collaboration.svg";
import users from "../../../assets/images/home/desktop/illustration-users.svg";


export const homeData = {
  header: "We Thrive on your success",
  subHeader:
    "We are passionate about delivering high-quality solutions that meets your needs. Our focus on efficiency ensures time and cost effectiveness.",
  button: {
    title: "learn more",
    link: "/about",
    label: "visit our about page to learn more"
  },
  image: {
    srcMobile: phoneMobile,
    srcDesktop: phoneDesktop,
    imageAlt: "a mobile phone displaying an animated graphics",
  },
  qualitiesHeader: "Our Business Process",
  qualities: [
    {
      image: meeting,
      imageAlt: "a man passionately executing a design task on his laptop",
      header: "passionate",
      description:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    },
    {
      image: developers,
      imageAlt: "a lady excuting a design project on her computer",
      header: "resourceful",
      description:
        "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    },
    {
      image: collaboration,
      imageAlt: "a man passionately executing a design task on his laptop",
      header: "passionate",
      description:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    },
    {
      image: users,
      imageAlt: "a happy customer receiving her completed web project from a project manager",
      header: "friendly",
      description:
        "You application is ready for your users and the feedback loop starts",
    },
  ],
};
