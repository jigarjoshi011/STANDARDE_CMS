import React, { FC } from "react";

interface ICMSPage {
  slug?: string[];
  id?: number | string;
}

const CommonComponentRender: FC<ICMSPage> = ({ slug, id }) => {
  return (
    <div>
      <div className="break-words !p-0 main">
        <React.Fragment>
          {/* {(() => {
            switch (section) {
              case "hero_section":
                return <HeroBanner data={sectionContent} />;
              default:
                return <></>;
            }
          })()} */}
        </React.Fragment>
      </div>
    </div>
  );
};

export default CommonComponentRender;
