import ProductCard from "../ProductCard/ProductCard";

/* eslint-disable react/no-unescaped-entities */
const Collection = () => {
  return (
    <div className="my-[100px]">
      <div className="my-10">
        <h1 className="section-title text-5xl text-center ">
          The Lawson Collection
        </h1>
        <p className="w-[40%] mx-auto text-center my-5 text-[#b2b1b1]">
          Each store is staffed with some of the industry's best jewelers,
          watchmakers, watch repair professionals and smartphone technicians who
          provide superior quality services.
        </p>
      </div>
      <ProductCard></ProductCard>
    </div>
  );
};

export default Collection;
