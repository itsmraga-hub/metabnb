// import SingleDisplay from "./SingleDisplay";

// import Desert1 from "../assets/desert-1.svg";
// import Desert2 from "../assets/desert-2.svg";
// import Desert3 from "../assets/desert-3.svg";
// import Desert4 from "../assets/Desert-4.svg";
// import Desert5 from "../assets/Desert-5.svg";
// import Desert6 from "../assets/Desert-6.svg";
// import Desert7 from "../assets/Desert-7.svg";
// import Desert8 from "../assets/Desert-8.svg";

// import style from './css/ListDisplay.module.css';

// const ListDisplay = () => {
//   const homes = [
//     {
//       image: Desert1,
//       name: "Desert king",
//       desc: "1MBT per night",
//       distance: "2345km away",
//       avail: "available for 2 weeks stay"
//     },
//     {
//       image: Desert2,
//       name: "Desert king",
//       desc: "1MBT per night",
//       distance: "2345km away",
//       avail: "available for 2 weeks stay"
//     },
//     {
//       image: Desert3,
//       name: "Desert king",
//       desc: "1MBT per night",
//       distance: "2345km away",
//       avail: "available for 2 weeks stay"
//     },
//     {
//       image: Desert4,
//       name: "Desert king",
//       desc: "1MBT per night",
//       distance: "2345km away",
//       avail: "available for 2 weeks stay"
//     },
//     {
//       image: Desert5,
//       name: "Desert king",
//       desc: "1MBT per night",
//       distance: "2345km away",
//       avail: "available for 2 weeks stay"
//     },
//     {
//       image: Desert6,
//       name: "Desert king",
//       desc: "1MBT per night",
//       distance: "2345km away",
//       avail: "available for 2 weeks stay"
//     },
//     {
//       image: Desert7,
//       name: "Desert king",
//       desc: "1MBT per night",
//       distance: "2345km away",
//       avail: "available for 2 weeks stay"
//     },
//     {
//       image: Desert8,
//       name: "Desert king",
//       desc: "1MBT per night",
//       distance: "2345km away",
//       avail: "available for 2 weeks stay"
//     }
//   ]
//   return (
//     <section className={style.ListDisplay}>
//       <h1>Inspiration for your next adventure</h1>
//       <ul className={style.ListContainer}>
//       {
//         homes.map((home, i) => {
//           const { image, name, desc, distance, avail } = home
//           return <SingleDisplay
//             key={`key` + i}
//             image={image}
//             name={name}
//             desc={desc}
//             distance={distance}
//             avail={avail}
//           />
//         })
//       }
//       </ul>
//     </section>
//   );
// }

// export default ListDisplay;
