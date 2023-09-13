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
        brand: "Carbonfund.org",
        ratio: "1 Point = 1 [partner_cur]",
        image: "https://s3-alpha-sig.figma.com/img/c17a/4455/8f8fb4e83bd350f6829e7dca4aeb2808?Expires=1695600000&Signature=TNSaOSThDt51yxJdqXXBc3z7YPxxlSGbjYJPrgQGWz79Omc819XZGBJ1q6nqnzNRL9Znk1TtDN4EihekZrrD9fCYTLl7bdS0JMVdYOxIKbKbGbwpQeppiDzUzQj6f3QywpSlFQ~eO8Ok4u4XChvH0rJoWl~zar3ek786V8g0Ia6q2FflIh7~~FAciED2bn7Y8qoII5FCr7d-ZXKbUV8p1JNiHOSr6d7j6cOmNWDfxqWpuvC-3TsKzU1DUhpQeBvwEdCiZl6ujDHn3JmSgj8pmB7yZN7i2t8A7vuDSipVYKZKIyhI720Dj6VtkFU3Z9IuE3sGpruD-fjzD1P6~0tgeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
    {
        brand: "Carbonfund.org",
        ratio: "1 Point = 1 [partner_cur]",
        image: "https://s3-alpha-sig.figma.com/img/c17a/4455/8f8fb4e83bd350f6829e7dca4aeb2808?Expires=1695600000&Signature=TNSaOSThDt51yxJdqXXBc3z7YPxxlSGbjYJPrgQGWz79Omc819XZGBJ1q6nqnzNRL9Znk1TtDN4EihekZrrD9fCYTLl7bdS0JMVdYOxIKbKbGbwpQeppiDzUzQj6f3QywpSlFQ~eO8Ok4u4XChvH0rJoWl~zar3ek786V8g0Ia6q2FflIh7~~FAciED2bn7Y8qoII5FCr7d-ZXKbUV8p1JNiHOSr6d7j6cOmNWDfxqWpuvC-3TsKzU1DUhpQeBvwEdCiZl6ujDHn3JmSgj8pmB7yZN7i2t8A7vuDSipVYKZKIyhI720Dj6VtkFU3Z9IuE3sGpruD-fjzD1P6~0tgeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    },
  ];
  return (
  <section>
    <Container>
        <h3 className="text-lg">Featured redemption</h3>
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
