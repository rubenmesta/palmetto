import React, { useState } from 'react';
import './image-search.scss';
import { Categories} from '../Categories';
import { Form, Button} from 'react-bootstrap';


const ImageSearch = ({ searchText, searchCategory }) => {

    const [text, setText] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
        e.target.reset(); 
       
      }

     /* Capitalie First Character */
      const capFirst = (string) => {
          return string.charAt(0).toUpperCase() + string.slice(1);
      };

       /* Trim white space - diable input spaces */
      const handleChange = (event) => {
        setText(event.target.value = capFirst(event.target.value.trim()));
      };
      
      const handleSelect = (event) => {
        setText(event.target.value);

      };
    
      let selectOptions = Categories.categories.map( (name) => {
        return (
          <option name={name.text} key={name.text}>{name.text}</option>
        )
      });
      
      return (
    
    
        <React.Fragment>

            <Form onSubmit={onSubmit} className="search-form"> 
            <Form.Group controlId="search">
    
                <Form.Control 
                onChange={handleChange}  
                type="text" 
                placeholder="Keyword..." />
                
                <Form.Text className="text-muted">
                Please enter a keywork or choose from Categories
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Control as="select"  onChange={handleSelect} >
                   {selectOptions}
                </Form.Control>
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Search
            </Button>
            </Form>
         
    
        </React.Fragment>
       
      )
    
    }
    
    export default ImageSearch;