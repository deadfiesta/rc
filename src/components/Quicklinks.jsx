import React from "react";
import Container from "./Container";
import Tile from "./Tile";
import Data from './Data.json'

const Quicklinks = () => {
    const { quicklinkTiles } = Data
  return (
    <section className="py-[72px]">
      <Container>
        <h3 className="text-xl font-bold text-primary-700 mb-8">
        Based on your interests, check out these ideas for using your points
        </h3>
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(218px,_1fr))] gap-8">
          {quicklinkTiles.map((tile, i) => (
            <li key={`${tile}${i}`}>
              <Tile type="money" data={tile} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Quicklinks;
