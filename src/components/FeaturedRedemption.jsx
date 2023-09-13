import React from "react";
import Container from "./Container";
import Tile from "./Tile";

const FeaturedRedemption = () => {
  const tiles = [
    {
      brand: "Appe",
      range: "$0 - $000",
      image:
        "https://s3-alpha-sig.figma.com/img/cdf0/a632/65650451a499a5d3228f21d87c31649a?Expires=1695600000&Signature=pvtP8egSV1kLfplLX~jOkvGk0Y~tEy8Mk6WyI9K7RI0094vPuMgNon5jSS~h1trV9GW6pmTk1Om6CifPd5SAVD0GHe7OqzYx0qF1lxN7uj0iCgONb07OWNcDhK0nmsD1ZSegrt0b~DsBeOuTTNBM7f6yfc~JbnVLFHnY3t-Se0EFqTNdatop3mB7aiz9ECII8eA9PrQ3qoBxBUzUYj7Vl4Z~YNlJx0G9JJgM0mR~yoGLzufI6VuP9RDVnzMatsoz002DDDoXnoPPvVyyKYmlSK1MxQyF4ani8NHhy2fWJmj2vkgOqrpME1O67NH4JqjH08H4f6oqOod6NqWAb~oAAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        brand: "Carbonfund.org",
        ratio: "1 Point = 1 [partner_cur]",
        image: "https://s3-alpha-sig.figma.com/img/c17a/4455/8f8fb4e83bd350f6829e7dca4aeb2808?Expires=1695600000&Signature=TNSaOSThDt51yxJdqXXBc3z7YPxxlSGbjYJPrgQGWz79Omc819XZGBJ1q6nqnzNRL9Znk1TtDN4EihekZrrD9fCYTLl7bdS0JMVdYOxIKbKbGbwpQeppiDzUzQj6f3QywpSlFQ~eO8Ok4u4XChvH0rJoWl~zar3ek786V8g0Ia6q2FflIh7~~FAciED2bn7Y8qoII5FCr7d-ZXKbUV8p1JNiHOSr6d7j6cOmNWDfxqWpuvC-3TsKzU1DUhpQeBvwEdCiZl6ujDHn3JmSgj8pmB7yZN7i2t8A7vuDSipVYKZKIyhI720Dj6VtkFU3Z9IuE3sGpruD-fjzD1P6~0tgeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        brand: "American Airlines",
        ratio: "1 Point = 1 [partner_cur]",
        image: "https://s3-alpha-sig.figma.com/img/31d5/1c0a/045c08461152e92ced51bf6d0e4d4daf?Expires=1695600000&Signature=ArX~pFnYlr3YfzSlULRsEI~NQk1zyfNM3Tj7RB1ypZ3ynuva70RsrB3na36ae7SmVj7HcY9an4aTLk~o0eVCqvj6s6vTde0M7XobnpuYhAqM-5WTXDa44UjIVDGnsgc9oM6d1HlQjeoAYjzpBkozM3m5uhQZhOmiVjguz7vPy~G8v0B6nF93~5OUbFZAABfGNG0oyEV3aUcG1Fq05AZnqkASqnnKGXyywrPV2h2tjDU68EvPsl9jIrkC9fCuTnlb4WYG1~Xv6j00AQATyEvC6a6nEqwNmoS5o890rGSQIbbGR~XBMJSI1tsxwyqBSrzDtMPavilQZwXBtBRg79RjDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        brand: "DOSH",
        ratio: "1 Point = 1 [partner_cur]",
        image: "https://s3-alpha-sig.figma.com/img/054d/e729/1468d04c93cb977702e10acd9451dba2?Expires=1695600000&Signature=TrMiD1SahOAX7srUxDayQEDFqu1PYWIhID53LtLHHbh2pzJJ~tlly6wq8vApG9k7jsURWQLzXF5jrNfxvALx3iAe2V4dhW2i8gc298HR9GWdNnk9YurgIeRNXZlKJPBXQ0ZhSYwSz6rL7Ws~pLIV9rwJ-GDwQrOGSwU7~u0TOErH1HoJ7iJikdUOWdULyhe2OzsBTDHYFEp-I25IC7DrK3gh1ll0jxdx9-O89qcWy7HMxrKPOlKF0swV3W498TIjGH5pod1PzlZA~pK2bAtNEGG8Sx2YeD6ThywbtfoqGuz1HmegM2u1bCyys1WX~ByVIp2uAEgucCbY-9KpA3x-Fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
  ];
  return (
  <section className="pt-[72px] pb-9">
    <Container>
        <h3 className="text-lg font-bold mb-8">Featured redemption</h3>
    <ul className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-8">
        {tiles.map((tile, i) => (
            <li key={`${tile}${i}`}>
                <Tile data={tile} />
            </li>
        ))}
    </ul>
    </Container>
  </section>
  )
};

export default FeaturedRedemption;
