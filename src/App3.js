import React, { Component, useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag, generateItems, sections } from "./utils";
import { v4 as uuidv4 } from "uuid";

const SimpleSortableList = () => {
  const [edit, setedit] = useState(null);
  const [list1, setList1] = useState([
    {
      id: 0,
      image: (
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
            src={`/images/header1.png`}
            className="img-thumbnail"
            alt="sss"
            height={200}
          />
        </div>
      )
    },
    {
      id: 1,
      image: (
        <div className="p-3" style={{ cursor: "move" }}>
          <div
            style={{
              position: "absolute",
              flex: 1,
              width: "40%",

              zIndex: 9,
              height: "10vh"
              // backgroundColor:'red'
            }}
          />
          <img
            src={`/images/header2.png`}
            className="img-thumbnail"
            alt="sss"
            height={100}
          />
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
          // backgroundColor: "#000",
          overflow: "scroll"
        }}
      >
        <div style={{ flex: 1 }}>
          <Container
            groupName="1"
            behaviour="copy"
            getChildPayload={(i) => {
              list1[i].id = new Date().getTime();
              return list1[i];
            }}
            onDrop={(e) => {
              setList1(applyDrag(list1, e));
            }}
            style={{ width: "100%" }}
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
              backgroundColor: "#eee",
              height: "100vh",
              width: "100%",
              overflow: "scroll"
            }}
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
                      setedit(item.id);
                    }}
                  >
                    {item.image}
                  </div>
                </Draggable>
              );
            })}
          </Container>
        </div>

        <div style={{ flex: 1 }}>{edit}</div>
      </div>

      {JSON.stringify(list2.map((m) => m.id))}
    </>
  );
};

export default SimpleSortableList;
