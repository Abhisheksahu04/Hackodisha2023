import React from "react";
import Image from "next/image";
import line from "./union1.svg";
import Title from "../CommonComponent/Title/Title";
import floatingBuilding from "./floatingBuilding.webp";

const Partners = () => {
  return (
    <section className="" id="partners">
      <div className="partnerbg bg-opacity-10 relative" id="about-us">
        <Image
          src={floatingBuilding}
          fill
          className="object-contain object-center relative z-10 opacity-70 mix-blend-color-dodge"
        />
        <div className="partner-section ">
          <div className="header-sec ">
            <Title title={"Partners"} className={"px-5 sm:px-10 py-5"}></Title>
            <div className="line">
              <Image src={line} alt="Image" className="img2"></Image>
            </div>
          </div>
        </div>
        <div className="w-full sm:px-[75px] px-4 flex flex-col mt-8 mb-8  z-20 relative ">
          {PartnersData.map((item, index) => (
            <div key={index} className={``}>
              <h2
                className={` border-opacity-25 border-b-4 border-t-4 text-2xl sm:text-5xl font-gvonz text-[#CA40CD] border-l-4 pl-6 sm:pl-2 border-[#CA40CD] py-16 sm:pl-8  `}
              >
                {" "}
                <span className="uppercase">{item.category}</span>
              </h2>
              <ul
                className={`inline-flex flex-wrap gap-4 sm:gap-10 justify-center py-16 border-r-4 border-[#CA40CD] border-opacity-25 w-full ${
                  index == 1 ? "border-b-4" : ""
                } `}
              >
                {item.partners.map((partner, i) => (
                  <li
                    key={i}
                    className={`flex flex-col items-center justify-center p-2  rounded-lg sm:p-4 bg-white sm:w-fit w-1/4 smallmobile:w-1/3 `}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      width={partner.width}
                      height={partner.height}
                      className={`object-contain ` + partner?.special }
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

const PartnersData = [
  {
    category: "Community Partners",
    partners: [
      {
        name: "Web_DesignSociety",
        logo: "/Images/PartnersLogos/Web_DesignSociety.jpg",
        alt: "Web_DesignSociety",
        width: 125,
        height: 90,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/Aerotech_vssut.png",
        alt: "Aerotech_vsuut",
        width: 125,
        height: 90,
      },
      {
        name: "Befikra",
        logo: "/Images/PartnersLogos/Befikra.png",
        alt: "Befikra",
        width: 125,
        height: 90,
      },
      {
        name: "CampusTechies",
        logo: "/Images/PartnersLogos/CampusTechies.png",
        alt: "CampusTechies",
        width: 125,
        height: 90,
      },
      {
        name: "CET zairza",
        logo: "/Images/PartnersLogos/CET zairza.png",
        alt: "CET zairza",
        width: 125,
        height: 90,
      },
      {
        name: "Code_edu",
        logo: "/Images/PartnersLogos/Code_edu.jpg",
        alt: "Code_edu",
        width: 125,
        height: 90,
      },
      {
        name: "Code-Up Community",
        logo: "/Images/PartnersLogos/Code-Up Community.jpg",
        alt: "Code-Up Community",
        width: 125,
        height: 90,
      },
      {
        name: "CodeINBlogs",
        logo: "/Images/PartnersLogos/CodeINBlogs.png",
        alt: "CodeINBlogs",
        width: 125,
        height: 900,
        special: "bg-[#121212]"
      },
      {
        name: "Coding_Activist_G_3_20230718_135836",
        logo: "/Images/PartnersLogos/Coding_Activist_G_3_20230718_135836.jpg",
        alt: "Coding_Activist_G_3_20230718_135836",
        width: 125,
        height: 90,
      },
      {
        name: "Curious_develpers",
        logo: "/Images/PartnersLogos/Curious_develpers.png",
        alt: "Curious_develpers",
        width: 125,
        height: 90,
      },
      {
        name: "Cyberverse",
        logo: "/Images/PartnersLogos/Cyberverse.jpg",
        alt: "Cyberverse",
        width: 125,
        height: 90,
      },
      {
        name: "Dapps",
        logo: "/Images/PartnersLogos/Dapps.jpg",
        alt: "Dapps",
        width: 125,
        height: 90,
      },
      {
        name: "Defiverse",
        logo: "/Images/PartnersLogos/Defiverse.jpg",
        alt: "Defiverse",
        width: 125,
        height: 90,
      },
      {
        name: "Dev_CODE_BLACK_LOGO_01",
        logo: "/Images/PartnersLogos/Dev_CODE_BLACK_LOGO_01.jpeg",
        alt: "Dev_CODE_BLACK_LOGO_01",
        width: 125,
        height: 90,
      },
      {
        name: "Devboard",
        logo: "/Images/PartnersLogos/Devboard.png",
        alt: "Devboard",
        width: 125,
        height: 90,
      },
      {
        name: "Devcans",
        logo: "/Images/PartnersLogos/Devcans.jpg",
        alt: "Devcans",
        width: 125,
        height: 90,
      },
      {
        name: "devdotcom",
        logo: "/Images/PartnersLogos/devdotcom.png",
        alt: "devdotcom",
        width: 125,
        height: 90,
      },
      {
        name: "DSC C.V. Raman global University",
        logo: "/Images/PartnersLogos/DSC_C.V._Raman_global_University__Light_Horizontal_Logo.png",
        alt: "DSC C.V. Raman global University",
        width: 125,
        height: 90,
      },
      {
        name: "FINTECH",
        logo: "/Images/PartnersLogos/FINTECH.png",
        alt: "FINTECH",
        width: 125,
        height: 90,
      },
      {
        name: "GDSC NKOCET Solapur",
        logo: "/Images/PartnersLogos/GDSC NKOCET Solapur.jpg",
        alt: "GDSC NKOCET Solapur",
        width: 125,
        height: 90,
      },
      {
        name: "Geek_room",
        logo: "/Images/PartnersLogos/Geek_room.png",
        alt: "Geek_room",
        width: 125,
        height: 90,
      },
      {
        name: "Github_Gitam",
        logo: "/Images/PartnersLogos/Github_Gitam.jpg",
        alt: "Github_Gitam",
        width: 125,
        height: 90,
      },
      {
        name: "gdsc_hit",
        logo: "/Images/PartnersLogos/GDSC_HIT.jpg",
        alt: "gdsc_hit",
        width: 125,
        height: 90,
      },
      {
        name: "Hack_Unicorn_Club_Logo",
        logo: "/Images/PartnersLogos/Hack_Unicorn_Club_Logo.png",
        alt: "Hack_Unicorn_Club_Logo",
        width: 125,
        height: 90,
      },
      {
        name: "IIEC",
        logo: "/Images/PartnersLogos/IIEC.jpg",
        alt: "IIEC",
        width: 125,
        height: 90,
      },
      {
        name: "Inovact",
        logo: "/Images/PartnersLogos/Inovact.png",
        alt: "Inovact",
        width: 125,
        height: 90,
      },
      {
        name: "IOT_Lab_Kiit",
        logo: "/Images/PartnersLogos/IOT_Lab_Kiit.jpg",
        alt: "IOT_Lab_Kiit",
        width: 125,
        height: 90,
      },
      {
        name: "MESH",
        logo: "/Images/PartnersLogos/MESH.png",
        alt: "MESH",
        width: 125,
        height: 90,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/GDSC_IIIT_Surat.png",
        alt: "GDSC IIIT Surat",
        width: 125,
        height: 90,
      },
      {
        name: "Metaverse",
        logo: "/Images/PartnersLogos/Metaverse.png",
        alt: "Metaverse",
        width: 125,
        height: 90,
      },
      {
        name: "OCD",
        logo: "/Images/PartnersLogos/OCD.jpeg",
        alt: "OCD",
        width: 125,
        height: 90,
      },
      {
        name: "Open Source Chandigarh",
        logo: "/Images/PartnersLogos/Open Source Chandigarh.jpg",
        alt: "Open Source Chandigarh",
        width: 125,
        height: 90,
      },
      {
        name: "OWASP_Thapar",
        logo: "/Images/PartnersLogos/OWASP_Thapar.png",
        alt: "OWASP_Thapar",
        width: 125,
        height: 90,
      },
      {
        name: "Programming Society IIIT Bhubaneswar",
        logo: "/Images/PartnersLogos/Programming Society IIIT Bhubaneswar.jpeg",
        alt: "Programming Society IIIT Bhubaneswar",
        width: 125,
        height: 90,
      },

      {
        name: "GDSCNarulaInstitute",
        logo: "/Images/PartnersLogos/GDSCNarulaInstitute.jpg",
        alt: "GDSCNarulaInstitute",
        width: 125,
        height: 90,
      },
      {
        name: "SOS_Tech_INC",
        logo: "/Images/PartnersLogos/SOS_Tech_INC.jpg",
        alt: "SOS_Tech_INC",
        width: 125,
        height: 90,
      },
      {
        name: "StartupGrind Bhubaneswar",
        logo: "/Images/PartnersLogos/StartupGrind Bhubaneswar.png",
        alt: "StartupGrind Bhubaneswar",
        width: 125,
        height: 90,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/Web_DesignSociety.jpg",
        alt: "Web_DesignSociety",
        width: 125,
        height: 90,
      },
    ],
  },
  {
    category: "Media Partners",
    partners: [],
  },
];
