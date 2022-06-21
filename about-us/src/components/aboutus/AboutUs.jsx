import React from "react";
import BG from "../../assets/pexels-photo-1563356.jpeg";
const AboutUs = () => {
  return (
    <>
      <div className="w-full h-3/4 bg-rose-100">
        <img src={BG} className="mx-auto" />
      </div>
      <div className="grid grid-cols-3 w-5/6 mx-auto">
        <div className="col-span-2">
          <div className="text-center text-4xl">
            <h1>WHY WE ARE HERE?</h1>
          </div>
          <div className="text-lg mt-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into.
            </p>
            <p className="mt-3">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
            <p className="mt-3 text-right">swagat raj</p>
          </div>
        </div>
        <div className="bg-rose-300">image</div>
      </div>
      <div className="grid grid-cols-3">
          <div>
              <p className="p-7">
              Government of India is emphasizing on information technology and digital payments & we committed to them.
              </p>
          </div>
          <div>
          <p className="p-7">
              Our dedicated E-commerce portal helps to choose from variety of online services that suits your business requirement.
              </p>
          </div>
          <div>
          <p className="p-7">
              Our dedicated E-commerce portal helps to choose from variety of online services that suits your business requirement.
              </p>
          </div>
      </div>
    </>
  );
};

export default AboutUs;
