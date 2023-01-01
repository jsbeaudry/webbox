import { v4 as uuidv4 } from "uuid";
const getNewId = () => {
  return uuidv4();
};

export const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;

  let result = [...arr];
  // payload.id = Math.floor(Math.random() * 10000000) + 1000000;
  let itemToAdd = payload;

  // console.log(itemToAdd);
  // console.log(payload);
  // alert(payload.id + "----" + itemToAdd.id);

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    console.log(itemToAdd);
    // itemToAdd.id = Math.floor(Math.random() * 10000000) + 1000000;
    // console.log({ id: Math.floor(Math.random() * 10000000) + 1000000, image: itemToAdd.image });
    result.splice(addedIndex, 0, {
      id: Math.floor(Math.random() * 10000000) + 1000000,
      image: itemToAdd.image,
      // data: itemToAdd.data,
      render_: itemToAdd.render_,
      editor_: itemToAdd.editor_
    });
  }

  return result;
};

export const generateItems = (count, creator) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(creator(i));
  }
  return result;
};

const Editor1 = ({ i }) => {
  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          // if (this.state.editId >= 0) {
          const resp = this.state.items2.filter((f, j) => f.name !== i);
          console.log(resp);
          this.setState({ items2: resp }, () => {
            this.setState({ edit: null });
          });
          // }
        }}
        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Delete
      </button>

      <label className="text-white">Name comp.</label>
      <input
        defaultValue={document.getElementById(`head_company_name`).innerHTML}
        onChange={(e) => {
          const title = document.getElementById(`head_company_name`);
          title.innerHTML = `${e.target.value}`;
        }}
      />
      <label className="text-white">Menu 1</label>
      <input
        defaultValue={document.getElementById(`head_menu_0_${i}`).innerHTML}
        onChange={(e) => {
          const title = document.getElementById(`head_menu_0_${i}`);
          title.innerHTML = `${e.target.value}`;
        }}
      />
      {/* <label className="text-white">Title {i}</label>
      <textarea
        defaultValue={document.getElementById(`title_${i}`).innerHTML}
        onChange={(e) => {
          const title = document.getElementById(`title_${i}`);
          title.innerHTML = `${e.target.value}`;
        }}
      ></textarea> */}

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
  );
};
const Header1 = ({ i }) => {
  return (
    <section
      className="w-full px-3 antialiased bg-indigo-600 lg:px-6"
      data-primary="indigo-600"
      data-tails-scripts="//unpkg.com/alpinejs"
    >
      <div className="mx-auto max-w-7xl">
        <nav
          className="flex items-center w-full h-24 select-none"
          x-data="{ showMenu: false }"
        >
          <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
            <a href="#_" className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
              <span className="p-1 text-xl font-black leading-none text-white select-none">
                <span className="xl:text-lg" id={`head_company_name`}>
                  Gwoly
                </span>
                <span className="text-indigo-300" data-primary="indigo-300">
                  .
                </span>
              </span>
            </a>
            <div className="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex">
              <div className="flex-col w-full h-auto h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                <div
                  className="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-indigo-700 md:text-indigo-200 md:w-2/3 md:mt-0 md:flex-row md:items-center"
                  data-primary="indigo-700"
                >
                  <a
                    href="#"
                    className="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700 md:text-white md:px-0 lg:mx-3 md:text-center"
                    data-primary="indigo-700"
                    id={`head_menu_0_${id}`}
                  >
                    Acceuil
                  </a>
                  <a
                    href="#"
                    className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center"
                    data-primary="indigo-800"
                    id={`head_menu_1_${id}`}
                  >
                    Fontionnalités
                  </a>
                  <a
                    href="#"
                    className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center"
                    data-primary="indigo-800"
                    id={`head_menu_2_${id}`}
                  >
                    Products
                  </a>
                  <a
                    href="#"
                    className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center"
                    data-primary="indigo-800"
                    id={`head_menu_3_${id}`}
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
                <path d="M4 6h16M4 12h16M4 18h16" />
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
                />
              </svg>
            </div>
          </div>
        </nav>
        <div className="container py-32 mx-auto text-center sm:px-4">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
            <span className="block">Il est certainement temps&nbsp;&nbsp;</span>
            <span className="relative inline-block mt-3 text-white">
              <span style={{ letterSpacing: "-1.8px" }} className="">
                <span style={{ letterSpacing: "-1.8px" }} className="">
                  de construire votre présence en ligne pour votre entreprise !
                </span>
              </span>
            </span>
          </h1>
          <div
            className="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl"
            data-primary="indigo-200"
          >
            Avec l'importance croissante d'Internet dans le monde d'aujourd'hui,
            avoir une forte présence en ligne peut être cruciale pour le succès
            de votre entreprise.
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
  );
};

const Editor2 = ({ i }) => {
  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          // if (this.state.editId >= 0) {
          const resp = this.state.items2.filter((f, j) => f.name !== i);
          console.log(resp);
          this.setState({ items2: resp }, () => {
            this.setState({ edit: null });
          });
          // }
        }}
        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Deletedd
      </button>

      <label className="text-white">Title {i}</label>
      <textarea
        defaultValue={document.getElementById(`title_${i}`).innerHTML}
        onChange={(e) => {
          const title = document.getElementById(`title_${i}`);
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
  );
};
const Header2 = ({ i }) => {
  return (
    <section
      className="w-full px-3 antialiased bg-indigo-600 lg:px-6"
      data-primary="indigo-600"
      data-tails-scripts="//unpkg.com/alpinejs"
    >
      <div className="mx-auto max-w-7xl">
        <div className="container py-32 mx-auto text-center sm:px-4">
          <h4 className=" font-extrabold leading-10 tracking-tight text-white sm:leading-none ">
            <span className="block" id={`title_${i}`}>
              Il est certainement temps de construire votre présence en ligne
              pour votre entreprise !
            </span>
            {i}
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
  );
};

export const sections = [
  {
    id: 0,
    name: uuidv4(),
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
          src={`/images/header0.png`}
          className="img-thumbnail"
          alt="sss"
          height={200}
        />
      </div>
    ),
    render_: <Header1 id={0} />,
    editor_: <Editor1 id={0} />
  },
  {
    id: 1,
    name: uuidv4(),
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
          src={`/images/header1.png`}
          className="img-thumbnail"
          alt="sss"
          height={200}
        />
      </div>
    ),
    render_: <Header2 id={1} />,
    editor_: <Editor2 id={1} />
  }
];
