import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

function Inspo() {
  return (
    <div className="home">
      <div className="flex h-48 items-center justify-center">
        <span className="text-lg text-center font-semibold">
            I often look at magazines or Pinterest for inspiration.<br/>
            These are a few that I found interesting.
        </span>
      </div>
      {/* Pass specific slices of cards to each carousel */}
      <HorizontalScrollCarouselLeft cards={cards.slice(0, 7)} />
      <HorizontalScrollCarouselRight cards={cards.slice(7, 14)} />
      <div className="flex h-48 items-center justify-center">
        <a href="https://www.instagram.com/hidden.ny/?hl=en" className="font-semibold" target="_blank" rel="noreferrer">
          @hidden.ny
        </a>
      </div>
    </div>
  );
};

const HorizontalScrollCarouselLeft = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const HorizontalScrollCarouselRight = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "1%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center"></div>
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
  {
    url: "https://i.pinimg.com/736x/6a/ea/90/6aea90aabb609fa12aa361751d7b5469.jpg",
    id: 8,
  },
  {
    url: "https://i.pinimg.com/736x/e1/32/fc/e132fc1140e35fadb4b48140b57dbead.jpg",
    id: 9,
  },
  {
    url: "https://i.pinimg.com/736x/30/72/f9/3072f9b269b17986f073aeb4dfa94e73.jpg",
    id: 10,
  },
  {
    url: "https://i.pinimg.com/736x/95/c4/fb/95c4fbbcad87fa76a3cae4b23bb7d063.jpg",
    id: 11,
  },
  {
    url: "https://i.pinimg.com/736x/f2/41/8f/f2418ff9623becc36d32029c2d81fa69.jpg",
    id: 12,
  },
  {
    url: "https://i.pinimg.com/736x/e6/d5/d1/e6d5d10e336e9b9a1c59a95479205d71.jpg",
    id: 13,
  },
  {
    url: "https://i.pinimg.com/736x/5b/f5/cb/5bf5cba573492bdcad5465a341784e30.jpg",
    id: 14,
  },
];
