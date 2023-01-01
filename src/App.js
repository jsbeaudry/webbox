import React, { Component, useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag, generateItems, sections } from "./utils";
import { v4 as uuidv4 } from "uuid";

const SimpleSortableList = () => {
  const [edit, setedit] = useState(null);
  const [type, settype] = useState(null);

  const [list1, setList1] = useState([
    {
      id: 0,
      type: "HEADER",
      image: (
        // <div className="p-3" style={{ cursor: "move" }}>
        <div
          className="p-3"
          style={{
            height: 200,
            width: 300,
            cursor: "move",
            backgroundImage: `url(${`/images/head_1.png`})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* <div
            style={{
              position: "absolute",
              flex: 1,
              width: "90%",

              zIndex: 9,
              height: "10vh"
              // backgroundColor:'red'
            }}
          />
          <img
            src={`/images/header0.png`}
            className="img-thumbnail"
            alt="sss"
            height={200}
          /> */}
        </div>
      ),
      render_: (
        <section
          className="w-full px-3 antialiased bg-indigo-600 lg:px-6 tails-selected-element"
          data-primary="indigo-600"
          data-tails-scripts="//unpkg.com/alpinejs"
          contentEditable="false"
        >
          <div className="mx-auto max-w-7xl">
            <nav
              className="flex items-center w-full h-24 select-none"
              x-data="{ showMenu: false }"
            >
              <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
                <a href="#_" className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
                  <span className="p-1 text-xl font-black leading-none text-white select-none">
                    <span>tails</span>
                    <span className="text-indigo-300" data-primary="indigo-300">
                      .
                    </span>
                  </span>
                </a>
                <div className="fixed top-0 left-0 z-40 items-center w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex hidden">
                  <div className="flex-col w-full h-auto h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                    <div
                      className="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-indigo-700 md:text-indigo-200 md:w-2/3 md:mt-0 md:flex-row md:items-center"
                      data-primary="indigo-700"
                    >
                      <a
                        href="#"
                        className="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700 md:text-white md:px-0 lg:mx-3 md:text-center"
                        data-primary="indigo-700"
                      >
                        Home
                      </a>
                      <a
                        href="#"
                        className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center"
                        data-primary="indigo-800"
                      >
                        Features
                      </a>
                      <a
                        href="#"
                        className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center"
                        data-primary="indigo-800"
                      >
                        Blog
                      </a>
                      <a
                        href="#"
                        className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center"
                        data-primary="indigo-800"
                      >
                        Contact
                      </a>
                    </div>
                    <div className="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0">
                      <a
                        href="#_"
                        className="w-full pl-6 mr-0 text-indigo-200 hover:text-white md:pl-0 md:mr-3 lg:mr-5 md:w-auto"
                        data-primary="indigo-600"
                      >
                        Sign In
                      </a>
                      <a
                        data-rounded="rounded-full"
                        href="#_"
                        className="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-indigo-600 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-transparent rounded-full hover:bg-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                        data-primary="indigo-600"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  onclick="showMenu = !showMenu"
                  className="absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden hover:bg-gray-900 hover:bg-opacity-10 text-gray-100"
                >
                  <svg
                    className="w-6 h-6"
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" className="" />
                  </svg>
                  <svg
                    className="w-6 h-6"
                    x-show="showMenu"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "none" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                      className=""
                    />
                  </svg>
                </div>
              </div>
            </nav>
            <div className="container py-32 mx-auto text-center sm:px-4">
              <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
                <span className="block">Simplify the way you</span>{" "}
                <span className="relative inline-block mt-3 text-white">
                  design websites
                </span>
              </h1>
              <div
                className="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl"
                data-primary="indigo-200"
              >
                If you are ready to change the way you design websites, then
                you'll want to use our block builder to make it fun and easy!
              </div>
              <div
                data-rounded="rounded-full"
                className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full"
              >
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none"
                  data-primary="indigo-800"
                />
                <span className="relative top-0 right-0 block">
                  <button
                    type="button"
                    className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent hover:bg-indigo-700 focus:outline-none active:bg-indigo-700"
                    data-primary="indigo-600"
                  >
                    Sign Up
                  </button>
                </span>
              </div>
              <div
                className="mt-8 text-sm text-indigo-300"
                data-primary="indigo-600"
              >
                By signing up, you agree to our terms and services.
              </div>
            </div>
          </div>
        </section>
      ),
      editor_: (
        <div>
          <label className="" style={{ color: "#fff" }}>
            Title
          </label>
          <textarea
            defaultValue={
              document.getElementById(`title_head_1`)
                ? document.getElementById(`title_head_1`).innerHTML
                : ""
            }
            onChange={(e) => {
              const title = document.getElementById(`title_head_1`);
              title.innerHTML = `${e.target.value}`;
            }}
          ></textarea>

          {/* <label className="text-white">SubTitle {i}</label>
    <textarea
      defaultValue={document.getElementById(`subTitle_${i}`).innerHTML}
      onChange={(e) => {
        const title = document.getElementById(`subTitle_${i}`);
        title.innerHTML = `${e.target.value}`;
      }}
      className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
    ></textarea> */}
        </div>
      )
    },
    {
      id: 1,
      type: "HEROS",
      image: (
        <div
          className="p-3"
          style={{
            height: 200,
            width: 300,
            cursor: "move",
            backgroundImage: `url(${`/images/hero_1.png`})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* <div
            style={{
              position: "absolute",
              flex: 1,
              width: "40%",

              zIndex: 9,
              height: "10vh"
              // backgroundColor:'red'
            }}
          /> */}
          {/* <img
            src={`/images/header2.png`}
            className="img-thumbnail"
            alt="sss"
            height={100}
          /> */}
        </div>
      ),
      render_: (
        <section
          className="px-2 py-32 bg-white md:px-0 tails-selected-element"
          contentEditable="false"
        >
          <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="block xl:inline">Beautiful Pages to</span>
                    <span
                      className="block text-indigo-600 xl:inline"
                      data-primary="indigo-600"
                    >
                      Tell Your Story!
                    </span>
                  </h1>
                  <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                    It's never been easier to build beautiful websites that
                    convey your message and tell your story.
                  </p>
                  <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                    <a
                      href="#_"
                      className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                      data-primary="indigo-600"
                      data-rounded="rounded-md"
                    >
                      Try It Free
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                    <a
                      href="#_"
                      className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                      data-rounded="rounded-md"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div
                  className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl"
                  data-rounded="rounded-xl"
                  data-rounded-max="rounded-full"
                >
                  <img
                    src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
      editor_: (
        <div>
          {/* <button
            type="submit"
            onClick={() => {
              if (editId >= 0) {
              const resp = list2.filter((f, j) => f.id !== i);
              console.log(resp);
              setitems2(resp);
              setedit(null);
              }
            }}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Deletedd
          </button> */}

          <label className="" style={{ color: "#fff" }}>
            Title
          </label>
          <textarea
            defaultValue={
              document.getElementById(`title_hero_1`)
                ? document.getElementById(`title_hero_1`).innerHTML
                : ""
            }
            onChange={(e) => {
              const title = document.getElementById(`title_hero_1`);
              title.innerHTML = `${e.target.value}`;
            }}
          ></textarea>
        </div>
      )
    },
    {
      id: 2,
      type: "TITLES",
      image: (
        <div
          className="p-3"
          style={{
            height: 200,
            width: 300,
            cursor: "move",
            backgroundImage: `url(${`/images/title_1.png`})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* <div
            style={{
              position: "absolute",
              flex: 1,
              width: "40%",

              zIndex: 9,
              height: "10vh"
              // backgroundColor:'red'
            }}
          /> */}
          {/* <img
            src={`/images/header2.png`}
            className="img-thumbnail"
            alt="sss"
            height={100}
          /> */}
        </div>
      ),
      render_: (
        <section
          className="h-auto bg-white tails-selected-element"
          contentEditable="false"
        >
          <div className="px-10 py-24 mx-auto max-w-7xl">
            <div className="w-full mx-auto text-left md:text-center">
              <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
                {" "}
                The{" "}
                <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">
                  Number One Source
                </span>{" "}
                for
                <br className="lg:block hidden" /> all your design needs.{" "}
              </h1>
              <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
                {" "}
                Say hello to the number one source for all your design needs.
                Drag and drop designs, edit designs, and modify the components
                to help tell your story.{" "}
              </p>
            </div>
          </div>
        </section>
      ),
      editor_: (
        <div>
          {/* <button
            type="submit"
            onClick={() => {
              if (editId >= 0) {
              const resp = list2.filter((f, j) => f.id !== i);
              console.log(resp);
              setitems2(resp);
              setedit(null);
              }
            }}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Deletedd
          </button> */}

          <label className="" style={{ color: "#fff" }}>
            Title
          </label>
          <textarea
            defaultValue={
              document.getElementById(`title_hero_1`)
                ? document.getElementById(`title_hero_1`).innerHTML
                : ""
            }
            onChange={(e) => {
              const title = document.getElementById(`title_hero_1`);
              title.innerHTML = `${e.target.value}`;
            }}
          ></textarea>
        </div>
      )
    }
  ]);
  const [list2, setList2] = useState([]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "stretch",
          height: "100vh",
          backgroundColor: "#000",
          overflow: "scroll"
        }}
      >
        <div style={{ flex: 1 }}>
          {/* <h6
            onClick={() => settype("HEADER")}
            style={{
              cursor: "pointer",
              color: "#fff",
              marginTop: 5,
              marginBottom: 5
            }}
          >
            HEADER
          </h6>
          <h6
            onClick={() => settype("HEROS")}
            style={{
              cursor: "pointer",
              color: "#fff",
              marginTop: 5,
              marginBottom: 5
            }}
          >
            HEROS
          </h6> */}
          <Container
            groupName="1"
            behaviour="copy"
            dragBeginDelay={0}
            getChildPayload={(i) => {
              list1[i].id = new Date().getTime();
              return list1[i];
            }}
            onDrop={(e) => {
              setList1(applyDrag(list1, e));
            }}
            style={{ width: "100%", backgroundColor: "#0e0e07" }}
            removeOnDropOut={false}
          >
            {list1.map((item) => {
              return <Draggable key={item.id}>{item.image}</Draggable>;
            })}
          </Container>
        </div>
        <div style={{ flex: 3 }}>
          <Container
            style={{
              flex: 1,
              backgroundColor: "#08050f",
              height: "100vh",
              width: "100%",
              overflow: "scroll"
            }}
            dragBeginDelay={100}
            groupName="1"
            getChildPayload={(i) => {
              console.log(list2[i]);

              // return list2[i];
            }}
            onDrop={(e) => {
              setList2(applyDrag(list2, e));
            }}
          >
            {list2.map((item, i) => {
              return (
                <Draggable key={item.id}>
                  <div
                    onClick={() => {
                      setedit(null);
                      setTimeout(() => {
                        setedit(item);
                      }, 1000);
                    }}
                  >
                    {item.render_}
                  </div>
                </Draggable>
              );
            })}
          </Container>
        </div>

        <div style={{ flex: 1, backgroundColor: "#0e0e07", margin: 5 }}>
          {edit && (
            <button
              type="submit"
              onClick={() => {
                // alert(edit.id);
                // if (editId >= 0) {
                const resp = list2.filter((f, j) => f.id !== edit.id);
                console.log(resp);
                setList2(resp);
                setedit(null);
                // }
              }}
              className="group h-10 relative flex w-100 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Delete
            </button>
          )}
          {edit && edit.editor_}
        </div>
      </div>

      {JSON.stringify(list2.map((m) => m.id))}
    </>
  );
};

export default SimpleSortableList;
