import "./browse-restaurants.css";
import { Component } from "react";
import NavBar from "../../components/nav/NavBar"
import RestaurantCard from "../../components/restaurant-card/RestaurantCard";
import rs1 from "../../assets/asian.jpeg";
import rs2 from "../../assets/rs2.jpeg";
import rs3 from "../../assets/rs3.jpeg";
import rs4 from "../../assets/rs4.jpeg";
import rs5 from "../../assets/rs5.jpeg";
import rs6 from "../../assets/rs6.jpeg";
import rs7 from "../../assets/rs7.jpeg";
import rs8 from "../../assets/rs8.jpeg";
import Search from "../../components/search/Search";

export default class BrowseRestuarants extends Component {

    render() {
        return(
            <div className="browse-restaurants-main">
                <NavBar />

                <div className="search-c">
                    <Search placeholder="Search restaurants or food"/>
                </div>

                <div className="restaurants-grid">
                    <RestaurantCard 
                        name="The Asian Kitchen"
                        category="North Indian, Chinese, Biryani"
                        img = { rs1 }
                    />
                    <RestaurantCard 
                        name="Foodie 18"
                        category="Bevereges, Burgers, Snacks"
                        img = { rs2 }
                    />
                    <RestaurantCard 
                        name="Samosa King"
                        category="Snacks, Street Food"
                        img = { rs3 }
                    />
                    <RestaurantCard 
                        name="South Indian Dhaba"
                        category="South Indian"
                        img = { rs4 }
                    />
                    <RestaurantCard 
                        name="The Lunch Box"
                        category="North Indian"
                        img = { rs5 }
                    />
                    <RestaurantCard 
                        name="Pizza Palace"
                        category="Pizza, Italian"
                        img = { rs6 }
                    />
                    <RestaurantCard 
                        name="Food Heaven"
                        category="North Indian, Chinese, Biryani"
                        img = { rs7 }
                    />
                    <RestaurantCard 
                        name="Paratha Bar"
                        category="North Indian, Chinese, Biryani"
                        img = { rs8 }
                    />
                </div>
                
            </div>
        );
    }
}

