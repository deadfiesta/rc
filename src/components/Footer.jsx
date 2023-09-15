import Data from "./Data.json";
import Link from "./Link";
import Container from "./Container";
import AscendaLogo from "../assets/AscendaLogo";

const { footer, footerParagraph } = Data;

const Footer = ({ type }) => {
  switch (type) {
    default:
    case 1:
      return (
        <footer>
          <div className="bg-primary-700 text-neutral-100 py-4">
            <Container css="flex flex-col gap-4">
              <div className="flex flex-col gap-12 lg:flex-row lg:flex-wrap lg:justify-between py-4">
                <ul className="flex flex-wrap gap-4 lg:gap-10 text-neutral-100">
                  {footer.map((link, i) => (
                    <li className="w-fit" key={link + i}>
                      <Link href={link.href} type="dark">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 items-center text-primary-200">
                  <AscendaLogo mode="dark" />
                  Powered by Ascenda
                </div>
              </div>
              <div className="flex flex-col gap-2 py-2 text-primary-200">
                {footerParagraph.map((para, i) => (
                  <p key={para + i}>{para}</p>
                ))}
              </div>
              <p className="pt-2 pb-6 whitespace-nowrap">&#169; 2023 Ascenda Loyalty Pte Ltd, All Rights Reserved</p>
            </Container>
          </div>
        </footer>
      );
  }
};

export default Footer;
