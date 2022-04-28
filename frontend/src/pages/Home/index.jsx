import { useStyles } from "./styles";
import Card from "./Card";

import classNames from "classnames";


import { useGlobalStyles } from "../../styles";
import { Link } from "react-router-dom";
import { useCallback, useContext } from "react";
import { Typography } from "@mui/material";
import { ReactComponent as GoogleLogo } from "../../assets/images/shared/google.svg";
import { ReactComponent as MicrosoftLogo } from "../../assets/images/shared/microsoft.svg";
import { ReactComponent as TeslaLogo } from "../../assets/images/shared/tesla.svg";
import { ReactComponent as NvidiaLogo } from "../../assets/images/shared/nvidia.svg";
import { ReactComponent as OracleLogo } from "../../assets/images/shared/oracle.svg";
import { ReactComponent as HewlettPackardLogo } from "../../assets/images/shared/hewlett-packard.svg";
import { AppContext } from "../../context/AppContext";
import Section from "../../components/Card/Section";

const data = {
  sectionRight: {
    title: "Vote your favorite artist",
    description: "Transfer Bitcoin, Ethereum, and other crypto to a Rewards Account and you'll earn up to 13.5% in rewards annually, deposited monthly.",
    text: "Learn more"
  },
  sectionLeft: {
    title: "Vote your favorite artist",
    description: "Transfer Bitcoin, Ethereum, and other crypto to a Rewards Account and you'll earn up to 13.5% in rewards annually, deposited monthly.",
    text: "Learn more"
  }
}
const Home = () => {
  const classes = useStyles();
  const globalStyles = useGlobalStyles();
  const { currentAccount, connectWallet } = useContext(AppContext);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const ImageContainer = useCallback(
    ({ alt, children, image }) => (
      <div
        className={classNames("mb-8 w-1/2", classes.companyImageContainer)}
      ></div>
    ),
    [classes]
  );

  return (
    <main>
      <section
        className={classNames(
          globalStyles.px,
          classes.hero,
          "bg-no-repeat flex items-center flex-col justify-end pb-16 md:justify-center sm:items-start"
        )}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div
          className={classNames(
            globalStyles.px,
            classes.heroContent,
            "md:px-0"
          )}
        >
          <h1
            className={classNames(
              " md:text-left font-bold text-4xl leading-9",
              globalStyles.sanJuanBlueColor,
              classes.heroTitle
            )}
          >
            We are bringing decentralization to the voting sector, Explore.
          </h1>
          <form
            className={classNames("mt-8 sm:flex sm:items-stretch ")}
            onSubmit={submitHandler}
          >
            {!currentAccount ? (
              <button
                onClick={connectWallet}
                className={classNames(
                  globalStyles.darkPinkBg,
                  globalStyles.darkPinkButton,
                  classes.scheduleButton,

                  "border-0 outline-none rounded-full text-white px-3 py-2.5"
                )}
              >
                Connect Wallet
              </button>
            ) : (
              ""
            )}
          </form>
        </div>
      </section>
      <section
        className={classNames(
          globalStyles.px,
          globalStyles.mirageBlueBg,
          classes.companies,
          "pt-16 pb-12 md:pb-16 bg-no-repeat md:flex md:flex-row-reverse md:justify-between md:items-center mb-12"
        )}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div
          className={classNames(
            "flex items-center justify-between flex-wrap",
            classes.companiesLogosContainer
          )}
        >
          <ImageContainer
            alt="tesla"
            image={
              <TeslaLogo
                className={classNames(
                  "text-white mx-auto",
                  classes.companiesLogos
                )}
              />
            }
          />
          <ImageContainer
            alt="microsoft"
            image={
              <MicrosoftLogo
                className={classNames(
                  "text-white mx-auto",
                  classes.companiesLogos
                )}
              />
            }
          />
          <ImageContainer
            alt="hewlettPackard"
            image={
              <HewlettPackardLogo
                className={classNames(
                  "text-white mx-auto",
                  classes.companiesLogos
                )}
              />
            }
          />
          <ImageContainer
            alt="oracle"
            image={
              <OracleLogo
                className={classNames(
                  "text-white mx-auto",
                  classes.companiesLogos
                )}
              />
            }
          />
          <ImageContainer
            alt="google"
            image={
              <GoogleLogo
                className={classNames(
                  "text-white mx-auto",
                  classes.companiesLogos
                )}
              />
            }
          />
          <ImageContainer
            alt="nvidia"
            image={
              <NvidiaLogo
                className={classNames(
                  "text-white mx-auto",
                  classes.companiesLogos
                )}
              />
            }
          />
        </div>
        {/* <div
          className={classNames(
            "mt-8 md:mt-0 flex flex-col items-center md:items-start",
            classes.companiesContent
          )}
        > */}
        <div className="flex flex-col sm:flex-row -mt-60 sm:mt-0"> 
          {/* <Typography
            component="h2"
            variant="h6"
            className={classNames(
              "text-white text-center md:text-left font-bold"
            )}
          >
            Why we are doing this
          </Typography> */}
          {/* <Typography
            component="p"
            className={classNames("text-slate-300  md:text-left pt-4")}
          >
            One of the reasons that electoral officials have been slow to
            migrate voting online is fear that election integrity could be
            compromised by hackers. It seems the headlines are riddled with
            concerns regarding cybersecurity, so it’s no wonder. But that’s
            where blockchain comes in, which promises to combine much-needed
            ballot security with voting convenience. Blockchain integrates
            cryptography into software in a unique way. It creates a tamper-free
            record that can easily be checked to ensure votes are accurately
            recorded. Due to the secure and immutable nature of blockchain,
            votes may be cast by computer or mobile device instead of having
            voters show up at a local polling place or cast a mail-in-ballot to
            be processed manually by election officials. Votes tracked through a
            blockchain provide for a quicker, tamper-proof way of counting
            votes, which could lead to greater voter participation, better
            ballot security, and at lower cost.
          </Typography> */}
          {/* <Link
            to="about-us"
            className={classNames(
              "rounded-full mt-8 px-6 border-solid text-white border border-slate-300 py-2.5"
            )}
          >
            About
          </Link> */}
          <img src="https://www.blockchain.com/static/img/wallet/wallet-buy-phone.png" alt="img"  className="" width="400"/>
          <Section data={data} styleTitle ="text-gray-200  text-3xl sm:text-5xl text-center" styleDescription="text-gray-200 text-center text-sm sm:text-base "  styleBtn="text-blue-500 mt-4"/>  
        </div>
      </section>
       <div className="flex flex-col-reverse sm:flex-row-reverse px-4"  > 
          <img src="https://www.blockchain.com/static/img/wallet/wallet-interest-phone.png" alt="img"  className="" width="400"/>
          <Section data={data} styleTitle ="text-gray-800  text-3xl sm:text-5xl text-center" styleDescription="text-gray-700 text-center text-sm sm:text-base"  styleBtn="text-blue-500 mt-4"/> 
        </div>
    </main>
  );
};

export default Home;

