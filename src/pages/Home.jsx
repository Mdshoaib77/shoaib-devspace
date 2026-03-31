import { Blog, Contact, Hero, Portfolio, Resume, Service, Skill, Testimonial } from "../utils/Router";

export const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <Portfolio />
      <Resume />
      <Skill />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
};


// import { Blog, Contact, Hero, Portfolio, Resume, Service, Skill, Testimonial } from "../utils/Router";

// export const Home = () => {
//   return (
//     <main style={{ backgroundColor: "#1a0f2f", color: "#ffffff" }}> 
//       {/* Background color টা এখানে দিলে পুরো পেজে এক থিম থাকবে */}
      
//       <Hero />
      
//       <section className="section-padding">
//         <Service />
//       </section>

//       <section className="section-padding">
//         <Portfolio />
//       </section>

//       <section className="section-padding">
//         <Resume />
//       </section>

//       <section className="section-padding">
//         <Skill />
//       </section>

//       {/* ভবিষ্যতে প্রয়োজন হলে এগুলো আন-কমেন্ট করতে পারেন */}
//       {/* <Testimonial /> */}
//       {/* <Blog /> */}

//       <section className="section-padding">
//         <Contact />
//       </section>
      
//     </main>
//   );
// };