import React from "react";

import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import "./styles.scss";

const Filters = ({handleFilterState}) => {
    // const [filterValue, setFilterValue] = useState("title_a_z");
    const filterChange = (val) => {
       
        var obj = {
            filter: '',
            order: ''
        }
        switch (val) {
            case 'title_a_z':
                obj.filter = 'title'
                obj.order = 'asc';
                break;
            case 'title_z_a':
                obj.filter = 'title'
                obj.order = 'desc';
                break;
            case 'price_low_first':
                obj.filter = 'price'
                obj.order = 'asc';
                break;
            case 'price_high_first':
                obj.filter = 'price'
                obj.order = 'desc';
                break;
            default:
        }
        return obj
    }
    return (
        <div className="d-flex justify-content-left filter_wrap">
            <Stack direction="horizontal" gap={5}>
                <div className="">
                    <span>Řadit podle: </span>
                </div>
                <div className="">
                    <Form.Select aria-label="Default select example" onChange={e => handleFilterState(filterChange(e.target.value))}>
                        <option value="title_a_z">Abecedy A-Z</option>
                        <option value="title_z_a">Abecedy Z-A</option>
                        <option value="price_low_first">Ceny, od nejnižší</option>
                        <option value="price_high_first">Ceny, od nejvyšší</option>
                        {/* <option value="a_to_z">Алфавит</option> */}
                    </Form.Select>
                </div>
            </Stack>
        </div>
    )
}

export default Filters;