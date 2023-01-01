import React, { Component, useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag, generateItems, sections } from "./utils";
import { v4 as uuidv4 } from "uuid";

export default Copy = () => {
  const groupStyle = {
    marginLeft: "50px",
    width: 500,
    backgroundColor: "#0e0e07"
  };
  const groupStyle2 = {
    marginLeft: "50px",
    width: "100%",
    minHeight: 400,
    backgroundColor: "#08050f"
    // paddingTop: 400
  };
  const groupStyle3 = {
    marginLeft: "50px",
    width: 400,
    backgroundColor: "#0e0e07",
    padding: 5
  };
  const getNewId = () => {
    return uuidv4();
  };
  const id = getNewId();

  const [editId, seteditId] = useState(-1);
  const [edit, setedit] = useState(null);
  const [items1, setitems1] = useState([
    {
      id: id,
      name: id,
      data: (
        <div className="p-3" style={{ cursor: "move" }}>
          <div
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
            src={`/images/header${0}.png`}
            className="img-thumbnail"
            alt="sss"
            height={200}
          />
        </div>
      ),
      render_: (
        <section
          className="w-full px-3 antialiased bg-indigo-600 lg:px-6"
          data-primary="indigo-600"
          data-tails-scripts="//unpkg.com/alpinejs"
        >
          <div className="mx-auto max-w-7xl">
            <div className="container py-32 mx-auto text-center sm:px-4">
              <h4 className=" font-extrabold leading-10 tracking-tight text-white sm:leading-none ">
                <span className="block" id={`title_${id}`}>
                  Il est certainement temps de construire votre présence en
                  ligne pour votre entreprise !
                </span>
                {0}
              </h4>
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
                    {" "}
                    Sign Up{" "}
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
          <button
            type="submit"
            onClick={() => {
              // if (editId >= 0) {
              const resp = items2.filter((f, j) => f.name !== i);
              console.log(resp);
              setitems2(resp);
              setedit(null);

              // }
            }}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Deletedd
          </button>

          <label className="text-white">Title {id}</label>
          <textarea
            defaultValue={
              document.getElementById(`title_${id}`)
                ? document.getElementById(`title_${id}`).innerHTML
                : ""
            }
            onChange={(e) => {
              const title = document.getElementById(`title_${id}`);
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
    }
  ]);

  const [items2, setitems2] = useState([]);

  const deleteItem = (id) => {
    // alert(id);
    const resp = items2.filter((f) => f.id !== id);
    setitems2(resp);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "stretch",
        height: "100vh",
        backgroundColor: "#000",
        overflow: "scroll"
      }}
    >
      <div style={groupStyle}>
        <Container
          groupName="1"
          behaviour="copy"
          getChildPayload={(i) => items1[i]}
          onDrop={(e) => {
            // console.log("1");
            // console.log(e);

            setitems1(applyDrag(items1, e));
          }}
          style={{ height: "100vh" }}
        >
          {items1.map((p, i) => {
            return (
              <Draggable key={i}>
                <div className="draggable-item">{p.data}</div>
              </Draggable>
            );
          })}
        </Container>
      </div>
      <div style={groupStyle2}>
        <Container
          groupName="1"
          getChildPayload={(i) => items2[i]}
          onDrop={(e) => {
            console.log("2");
            console.log(e);
            const id = getNewId();

            // console.log(id);
            // const newv = {
            //   id: new Date().getTime(),
            //   name: id,

            //   render_: <this.Compo i={id} />,
            //   editor_: <this.Editor i={id} />
            // };

            // e.payload = newv;

            setitems2(applyDrag(items2, e));
            setedit(null);
          }}
          style={{ height: "100vh" }}
        >
          {items2.map((p, i) => {
            p.id = i;
            return (
              <Draggable key={i}>
                <div className="draggable-item">
                  <div
                    style={{
                      width: 200,

                      position: "absolute",
                      zIndex: 3
                    }}
                  >
                    <p
                      onClick={() => {
                        const resp = items2.filter((f, j) => j.name !== p.name);
                        setitems2(resp);
                        setedit(null);
                      }}
                      className="text-white"
                    >
                      Delete {i}
                    </p>
                    <p
                      onClick={() => {
                        setedit(null);
                        seteditId(-1);

                        setedit(p.editor_);
                        seteditId(p.name);
                      }}
                      className="text-white"
                      style={{ left: 20 }}
                    >
                      Edit
                    </p>
                  </div>

                  {p.render_}
                </div>
              </Draggable>
            );
          })}
        </Container>
      </div>
      <div style={groupStyle3}>{edit}</div>
    </div>
  );
};
