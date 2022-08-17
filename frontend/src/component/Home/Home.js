import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import NewsItem from './NewsItem';

const Home = () => {


const items=[
  {
    "source": {
      "id": "four-four-two",
      "name": "FourFourTwo"
    },
    "author": "PA Staff",
    "title": "Best Jeans",
    "description": "Everton and West Ham are both chasing Chelsea striker Armando Broja, according to the Daily Mail. The 20-year-old Albania international is valued at £30million and has impressed on loan at Southampto",
    "url": "https://www.fourfourtwo.com/news/football-rumours-armado-broja-chased-by-west-ham-and-everton-165700207100",
    "urlToImage": "https://res.cloudinary.com/dhb8ypvh6/image/upload/v1656688396/products/ek025xd1yskpdevsbnjp.jpg",
    "publishedAt": "2022-07-05T06:21:11Z",
    "content": "What the papers say\r\nEverton and West Ham are both chasing Chelsea striker Armando Broja, according to the Daily Mail. The 20-year-old Albania international is valued at £30million and has impressed … [+1553 chars]"
  },
  {
    "source": {
      "id": "espn",
      "name": "ESPN"
    },
    "author": null,
    "title": "Best Laptop",
    "description": "Get a report of the United States vs. Haiti 2022 CONCACAF W Championship, Group Stage football match.",
    "url": "http://espn.go.com/soccer/report?gameId=634607",
    "urlToImage": "https://res.cloudinary.com/dhb8ypvh6/image/upload/v1656688175/products/ys6edlvckjwx7txv6zbl.jpg",
    "publishedAt": "2022-07-05T01:52:18.4521045Z",
    "content": "Alex Morgan scored a first-half brace and Margaret Purce added a late goal as the United States women's national team beat Haiti 3-0 in group stage action at the CONCACAF W Championship.\r\n- Rapinoe t… [+1572 chars]"
  },
  {
    "source": {
      "id": "fox-sports",
      "name": "Fox Sports"
    },
    "author": "FOX Sports",
    "title": "Best SmartPhone!",
    "description": "Colin Cowherd breaks down why college football has \"a big-game problem\" in the wake of USC and UCLA joining the Big Ten.",
    "url": "http://www.foxsports.com/stories/college-football/usc-ucla-move-could-solve-college-footballs-big-game-problem",
    "urlToImage": "https://res.cloudinary.com/dhb8ypvh6/image/upload/v1656688338/products/zjuejb0ob75q1emrtbaa.jpg",
    "publishedAt": "2022-07-04T20:22:01Z",
    "content": "Reactions continue to pour in over the latest bombshell news\r\n that USC\r\n and UCLA\r\n the two biggest college brands on the West Coast are leaving the Pac-12\r\n for the Big Ten\r\n in 2024.\r\nThe expansio… [+3186 chars]"
  },
  {
    "source": {
      "id": "espn",
      "name": "ESPN"
    },
    "author": "Blake Baumgartner",
    "title": "Best Jeans",
    "description": "Francis Mauigoa, a 6-foot-6, 325-pound offensive lineman and the No. 5 recruit in the 2023 ESPN 300, committed to coach Mario Cristobal and the new-look Miami Hurricanes on Monday.",
    "url": "http://espn.go.com/college-football/story/_/id/34193772/offensive-lineman-francis-mauigoa-no-5-2023-espn-300-next-line-commit-miami-hurricanes-football-program",
    "urlToImage": "https://res.cloudinary.com/dhb8ypvh6/image/upload/v1656688396/products/ek025xd1yskpdevsbnjp.jpg",
    "publishedAt": "2022-07-04T19:41:00Z",
    "content": "Offensive lineman Francis Mauigoa pulled a mild surprise by committing to Miami on Monday.\r\nThe 6-foot-6, 325-pound Mauigoa, who attends IMG Academy in Bradenton, Florida, is No. 5 on the 2023 ESPN 3… [+767 chars]"
  },
  {
    "source": {
      "id": "four-four-two",
      "name": "FourFourTwo"
    },
    "author": "PA Staff",
    "title": "LG Refrigerator",
    "description": "James Fowler has left his role as Kilmarnock’s head of football operations.",
    "url": "https://www.fourfourtwo.com/news/james-fowler-leaves-his-role-as-kilmarnocks-head-of-football-operations-1656960139000",
    "urlToImage": "https://res.cloudinary.com/dhb8ypvh6/image/upload/v1656688293/products/izxvoe23hcqbtrdwwxfr.jpg",
    "publishedAt": "2022-07-04T18:42:19Z",
    "content": "James Fowler has left his role as Kilmarnock’s head of football operations.\r\nThe cinch Premiership newcomers say their 2012 League Cup-winning captain departed through voluntary redundancy following … [+1086 chars]"
  },
  {
    "source": {
      "id": "talksport",
      "name": "TalkSport"
    },
    "author": "Jackson Cole",
    "title": "Moto G60",
    "description": "",
    "url": "https://talksport.com/football/1143303/premier-league-international-footballer-arrested-suspicion-of-rape-woman/",
    "urlToImage": "https://res.cloudinary.com/dhb8ypvh6/image/upload/v1656688338/products/zjuejb0ob75q1emrtbaa.jpg",
    "publishedAt": "2022-07-04T17:20:13Z",
    "content": "A Premier League footballer has been arrested on suspicion of rape. \r\nThe international player, who is 29 years old, was detained at a north London address in the early hours of Monday morning. \r\nThe… [+1504 chars]"
  },
  {
    "source": {
      "id": "espn-cric-info",
      "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "Samsung Refrigerator",
    "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
    "urlToImage": "https://res.cloudinary.com/dhb8ypvh6/image/upload/v1656688293/products/izxvoe23hcqbtrdwwxfr.jpg",
    "publishedAt": "2020-04-27T07:20:43Z",
    "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
  }
]

  const products = [];

  return (
    <Fragment>
  
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to CARTIFY</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
      

             {items.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title.slice(0,72)} description={element.description.slice(0,75)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
              })}    
      
          </div>
        </Fragment>
 
    </Fragment>
  );
};

export default Home;