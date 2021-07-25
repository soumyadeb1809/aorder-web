import { Component, useState } from "react";
import "./restaurant-catalogue.css";
import NavBar from "../../components/nav/NavBar";
import Search from "../../components/search/Search";
import CatalogueItemCard from "../../components/catalogue-item-card/CatalogueItemCard";

import it1 from "../../assets/it1.jpeg";
import it2 from "../../assets/it2.jpeg";
import it3 from "../../assets/it3.jpeg";
import it4 from "../../assets/it4.jpeg";
import it5 from "../../assets/it5.jpeg";
import it6 from "../../assets/it6.jpeg";
import { Accordion, Card, Modal } from "react-bootstrap";
import MenuFAB from "../../components/menu-fab/MenuFAB";
import MenuModal from "../../components/menu-modal/MenuModal";
import CatelogueCategoryCard from "../../components/catalogue-category-card/CatalogueCategoryCard";


const RestaurantCatalogue = () => {

    const [showMenuPopup, setShowMenuPopup] = useState(false);

    return (
        <div className="restaurant-catalogue-main">
            <NavBar/>
            <div className="search-c">
                <Search 
                    placeholder="Search food"
                />
            </div>

            <div className="catalogue">
                <CatelogueCategoryCard name="Recommended">
                    <CatalogueItemCard 
                        name="Butter Chicken"
                        price="₹325"
                        img={ it1 }
                        tag="n-veg"
                        description="Chicken tikka/tandoori cooked in rich tomato & white gravy finished with cream & butter."
                    />
                    <CatalogueItemCard 
                        name="Paneer Lababdaar"
                        price="₹225"
                        img={ it2 }
                        tag="veg"
                        description="Panner tikka/tandoori cooked in rich tomato & white gravy finished with cream & butter."
                    />
                </CatelogueCategoryCard>
                <CatelogueCategoryCard name="Starters">
                    <CatalogueItemCard 
                        name="Chicken Keema"
                        price="₹299"
                        tag="n-veg"
                        description="Chicken tikka cooked in rich tomato & white gravy finished with cream & butter."
                    />
                    <CatalogueItemCard 
                        name="Chicken Tikka"
                        price="₹199"
                        img={ it3 }
                        tag="n-veg"
                        description="Chicken tikka cooked in rich tomato & white gravy finished with cream & butter."
                    />
                    <CatalogueItemCard 
                        name="Dahi Kebab"
                        price="₹129"
                        img={ it4 }
                        tag="veg"
                        description="Dahi kebab cooked in rich tomato & white gravy finished with cream & butter."
                    />
                </CatelogueCategoryCard>
                <CatelogueCategoryCard name="Main Course">
                    <CatalogueItemCard 
                        name="Bhuna Murgh"
                        price="₹399"
                        img={ it5 }
                        tag="n-veg"
                        description="Chicken tikka/tandoori cooked in rich tomato & white gravy finished with cream & butter."
                    />
                    <CatalogueItemCard 
                        name="Chicken Tandoori"
                        price="₹325"
                        img={ it6 }
                        tag="n-veg"
                        description="Chicken tikka/tandoori cooked in rich tomato & white gravy finished with cream & butter."
                    />
                </CatelogueCategoryCard>
      
            </div>

            <div className="menu-btn-c">
                <MenuFAB 
                    onClick={ () => setShowMenuPopup(true) }
                />
            </div>

            <div className="menu-modal-c">
                <MenuModal
                    show={ showMenuPopup }
                    closeHandler={ () => setShowMenuPopup(false) }
                />
            </div>
            
        </div>
    );
    
}

export default RestaurantCatalogue;