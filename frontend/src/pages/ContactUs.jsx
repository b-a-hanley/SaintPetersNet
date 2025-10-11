import { TextContent, Page, GoogleMap, Img, Row } from "../components/Section";
import { FooterButtons } from "../components/Button";
import { Address, Banner } from "../components/Text";

export default function ContactUs() {
  return (
    <Page>
      <Banner>Contact Us</Banner>

      <Row>
        <Img path="/assets/Fishing-net.jpg" />

        <TextContent>
          <p className="mt-2 py-6 text-2xl font-bold tracking-tight text-colour sm:text-3xl">Email</p>
          <div className="flex w-full gap-1">
            <a
              href="mailto:benhanley321@gmail.com"
              className="flex-1 text-center px-2 py-2 text-sm font-medium bg-action hover:bg-action rounded-lg"
            >
              Contact us
            </a>
          </div>

          <Address
            line1="Porchester"
            line2="Fareham"
            line3="Hampshire"
            line4="England"
          />
        </TextContent>
      </Row>

      <GoogleMap path="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40303.639587267244!2d-1.2362482267514863!3d50.85010139763092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4874425648aac7c9%3A0xf7ae008bffaf7876!2sFareham!5e0!3m2!1sen!2suk!4v1756918070037!5m2!1sen!2suk" />

      <FooterButtons
        leftLink="/pricing"
        leftLabel="Pricing"
        rightLink="/our-story"
        rightLabel="Our Story"
      />
    </Page>
  );
}
