import React from "react";
import Container from "./Container";
import Tile from "./Tile";
import Data from './Data.json'

const Featured = () => {
    const { featuredTiles } = Data
  return (
    <section className="py-[72px]">
      <Container>
        <h3 className="text-xl text-primary-700 font-bold mb-8">
          You'll love these ways to earn points faster
        </h3>
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(218px,_1fr))] gap-8">
          {featuredTiles.map((tile, i) => (
            <li key={`${tile}${i}`}>
              <Tile type="money" data={tile} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Featured;
