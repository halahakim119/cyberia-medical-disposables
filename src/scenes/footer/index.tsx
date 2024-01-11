import useMediaQuery from "@/hooks/useMediaQuery";

const Footer = () => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <footer className="bg-gray-20 pt-16 mt-32">


      <div className="mx-auto w-5/6 gap-16 md:flex justify-content">
        <div className={`flex  ${isAboveMediumScreens ? '' : 'flex-col'}`}>
          <h1 className="text-primary-100 text-5xl font-bold mr-2">CYBERIA</h1>
          {isAboveMediumScreens ? (
            <div className="flex flex-col ">
              <h3 className="text-secondary-500">MEDICAL</h3>
              <h3 className="text-secondary-500">DISPOSABLES</h3>
            </div>
          ) : (
            <div className="grid grid-cols">
              <h3 className="text-secondary-500">MEDICAL DISPOSABLES</h3>
            </div>
          )}
        </div>

        <div className="mt-16 basis-1/2 md:mt-0">
          <ContactInfo />
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <ContactUs />
        </div>
      </div>
      <div className="text-center pt-10 pb-5 text-xs">
        <a href="https://swt-iq.com/" target="_blank"  >
          Peoduced by SmartWave
        </a>
      </div>

    </footer>
  );
};

const ContactInfo = () => (
  <>
    <h4 className="font-bold">Location</h4>
    <p>Jordan, Amman</p>
    <p>Khalda, Otba Bin Gazwan St., Al- Salam Complex, 1st Floor</p>
    <br />
    <h4 className="font-bold">Email</h4>
    <p>Email: info@cyberia-medical.com</p>
  </>
);

const ContactUs = () => (
  <>
    <h4 className="font-bold">Contact Us</h4>
    <p>Tel: +962 6 534 0077</p>
    <p>Tel: +964 774 222 7786</p>
    <br />
    <h4 className="font-bold">FAX</h4>
    <p>Fax: +962 6 534 0078</p>
  </>
);

export default Footer;
