import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

function Inspo() {
  return (
    <div>
      <div className="flex h-48 items-center justify-center">
        <span className="text-center font-semibold uppercase">
            I often look at magazines or pinterest for inspiration.<br/>
            These are a few that I found interesting.
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        
      </div>
    </div>
  );
};

export default Inspo;

const cards = [
  {
    url: "https://i.pinimg.com/control2/736x/c6/af/58/c6af589330fca040dc4dbbd1b184999b.jpg",
    
    id: 1,
  },
  {
    url: "https://i.pinimg.com/736x/18/ce/cf/18cecf8441a62ef20d8c9d54900e6acc.jpg",
    
    id: 2,
  },
  {
    url: "https://i.pinimg.com/control2/736x/85/40/74/854074f74155f1d232f4e9158d1ffe7c.jpg",
    
    id: 3,
  },
  {
    url: "https://i.pinimg.com/736x/d9/97/a2/d997a2e8292fb4a9a13b687a2052ea5f.jpg",
    
    id: 4,
  },
  {
    url: "https://i.pinimg.com/736x/aa/7d/89/aa7d89da92f872e31b99faa08a11511c.jpg",
    
    id: 5,
  },
  {
    url: "https://i.pinimg.com/736x/b8/24/1d/b8241dcaea7947a5e476e3e712488a34.jpg",
    
    id: 6,
  },
  {
    url: "https://i.pinimg.com/control2/736x/98/a0/1c/98a01c3bf6432a30f4390252f1cccf49.jpg",
    
    id: 7,
  },
];