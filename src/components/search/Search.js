import "./search.css";
import { Card, Form } from "react-bootstrap";
import { GoSearch } from "react-icons/go";

const Search = ({ placeholder }) => {
    return (
        <Card className="search-card">
            <Card.Body className="sc-body">
                <Form className="search-form">
                    <GoSearch className="search-icon" />
                    <Form.Control className="search-input shadow-none" placeholder={ placeholder } />
                </Form>
            </Card.Body>
        </Card>
        
    );
}

export default Search;