import { useState } from "react";

interface CustomCardProps {
  title?: string;
  children?: JSX.Element;
  headerClass?: string;
  headerExtra?: JSX.Element;
  minimal?: boolean;
  cardClass?: string;
  bodyClass?: string;
  isVisible?: boolean;
}

const CustomCard = ({
  title,
  children,
  headerClass,
  headerExtra,
  minimal,
  cardClass,
  bodyClass,
  isVisible,
}: CustomCardProps) => {

  return (
    <>
      <div
        // ref={setNodeRef}
        // style={style}
        className={`card bg-white rounded-xl shadow-card ${cardClass}`}
      >
        {title && (
          <div
            className={`card-header flex items-center justify-between gap-3
          ${minimal ? "p-6" : " p-3  border-b border-solid border-gray-200"}
           ${headerClass}`}
          >
            <div className="title flex">
              <button type="button">
                {/* <SVGIcon
                  iconName="drag_icon"
                  className={section === "page_config" ? "hidden" : ""}
                /> */}
              </button>
              <h4
                className={` capitalize text-dark ${
                  minimal ? "text-22px font-bold" : "text-lg font-semibold"
                }`}
              >
                {title}
              </h4>
            </div>
            <div className="flex items-center gap-3 ">
              <button
                type="button"
                // className={
                //   section === "page_config"
                //     ? "hidden"
                //     : "w-6 h-6 flex items-center justify-center rounded-sm bg-lightGray"
                // }
                // onClick={() => setShowModal(true)}
              >
                {/* <RiDeleteBinLine className="text-danger" /> */}
              </button>
              {/* {section !== "page_config" && (
                <ToggleIcon
                  isOpen={isVisible || false}
                  onClick={() => toggleSection(section)}
                />
              )} */}
            </div>
            {headerExtra}
          </div>
        )}
        <div
          className={`card-body ${!title && minimal ? "pt-5" : ""} ${
            minimal ? "pb-6" : isVisible ? "py-4" : "py-0"
          }  `}
        >
          {/* className={`max-h-[calc(100dvh_-_270px)] overflow-auto ${ */}
          <div
            className={`max-h-[calc(100dvh_-_270px)] overflow-auto ${
              minimal ? "px-6" : "px-4"
            } ${bodyClass} `}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
