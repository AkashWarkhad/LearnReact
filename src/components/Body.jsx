import Card from "./RestrCard";

const source = [
  {
    type: "restaurant",
    info: {
      resId: 20832356,
      name: "Yakii",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/20832356/68c60445b96ed92bda2aa8d35fe8bc3c_featured_v2.jpg",
      },
      rating: {
        aggregate_rating: "4.3",
        votes: "2,260",
      },
      cft: { text: "₹3,000 for two" },
      locality: {
        name: "Deccan Gymkhana, Pune",
      },
      cuisine: ["Chinese", "Japanese", "Asian", "Bar Food"],
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 18893197,
      name: "FC Road Social",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/18657534/d7f1e56afdaddb183b2f4167d67dfc71_featured_v2.jpg",
      },
      rating: {
        aggregate_rating: "4.1",
        votes: "7,319",
      },
      cft: { text: "₹1,500 for two" },
      locality: {
        name: "Shivaji Nagar, Pune",
      },
      cuisine: [
        "North Indian",
        "Biryani",
        "Pizza",
        "Street Food",
        "Bar Food",
        "Korean",
        "Desserts",
      ],
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 20873206,
      name: "AMBARSARIYA - Authentic Amritsari",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/20873206/7eb52cf44cb333b21204e55c12fe5b73_o2_featured_v2.jpg",
      },
      rating: {
        aggregate_rating: "4.4",
        votes: "1,643",
      },
      cft: { text: "₹1,000 for two" },
      locality: {
        name: "Dhole Patil Road, Pune",
      },
      cuisine: ["North Indian", "Kebab", "Seafood", "Biryani", "Beverages"],
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 18740139,
      name: "Grandmama's",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/18740139/4d2110e543d1dfdae6006e6cdeb179f0_featured_v2.jpg",
      },
      rating: {
        aggregate_rating: "4.0",
        votes: "4,422",
      },
      cft: { text: "₹1,000 for two" },
      locality: {
        name: "Koregaon Park, Pune",
      },
      cuisine: [
        "Pasta",
        "Pizza",
        "Coffee",
        "Cafe",
        "Desserts",
        "Beverages",
        "Italian",
      ],
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 21421758,
      name: "Epitome",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/21421758/c9c2e303e2be666d499ee39033405837_featured_v2.jpg",
      },
      rating: {
        aggregate_rating: "4.2",
        votes: "671",
      },
      cft: { text: "₹1,700 for two" },
      locality: {
        name: "Bund Garden Road, Pune",
      },
      cuisine: [
        "North Indian",
        "Sushi",
        "Asian",
        "Italian",
        "Chinese",
        "Fast Food",
        "Desserts",
        "Beverages",
      ],
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 10213,
      name: "Malaka Spice",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/10213/342d481973fdfa493f7ad524c3fc1585_featured_v2.jpg",
      },
      rating: {
        aggregate_rating: "4.5",
        votes: "14K",
      },
      cft: { text: "₹1,200 for two" },
      locality: {
        name: "Koregaon Park, Pune",
      },
      cuisine: ["Asian", "Thai", "Salad", "Seafood", "Sushi", "Desserts"],
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 19972357,
      name: "3 Idiots - The Friendly Bar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/19972357/e94ca3a97cf188606616c595244d1dd4_o2_featured_v2.jpg",
      },
      rating: {
        aggregate_rating: "4.3",
        votes: "2,566",
      },
      cft: { text: "₹1,600 for two" },
      locality: {
        name: "Pimple Gurav, Pune",
      },
      cuisine: [
        "North Indian",
        "Continental",
        "Biryani",
        "Chinese",
        "Fast Food",
        "Desserts",
        "Beverages",
      ],
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 20101234,
      name: "Fountain House",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/20101234/13258cb6cdfbf2e6352c47d73cc5db06_featured_v2.jpg",
      },
      rating: {
        aggregate_rating: "4.3",
        votes: "807",
      },
      cft: { text: "₹1,700 for two" },
      locality: {
        name: "Shivaji Nagar, Pune",
      },
      cuisine: ["North Indian", "Fast Food", "Desserts", "Beverages"],
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 20985295,
      name: "Portico B4M Restaurant & Bar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/20985295/a5e0649be9611194471644c787aab3b4_o2_featured_v2.jpg",
      },
      rating: {
        aggregate_rating: "4.1",
        votes: "615",
      },
      cft: { text: "₹1,500 for two" },
      locality: {
        name: "JM Road, Pune",
      },
      cuisine: [
        "North Indian",
        "Italian",
        "Chinese",
        "Continental",
        "Burger",
        "Bar Food",
      ],
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 18661262,
      name: "The Daily All Day",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/18661262/6fea53d5ee3cf16a743af5d4af50486a_featured_v2.jpg"
      },
      rating: {
        aggregate_rating: "4.5",
        votes: "5,156",
      },
      cft: { text: "₹2,000 for two" },
      locality: {
        name: "Koregaon Park, Pune",
      },
      cuisine: [
        "European",
        "Asian",
        "Continental",
        "Italian",
        "Salad",
        "Pizza",
        "Desserts",
      ],
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">SearchBar</div>

      <div className="restro-container">
        {
            source.map((rest)=> 
            (
                /**Key should be present always & use of index as a key is not recommended */
                <Card key={rest.info.resId} params={rest.info}></Card>
            ))
        }
      </div>
    </div>
  );
};

export default Body;