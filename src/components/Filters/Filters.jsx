import React from "react";

import { useState, useEffect } from "react";

import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import "./styles.scss";

const Filters = ({handleFilterState}) => {
    const [filterValue, setFilterValue] = useState("change_date");
    const filterChange = (val) => {
       
        var obj = {
            filter: '',
            order: ''
        }
        switch (val) {
            case 'change_date':
                obj.filter = 'updated_at'
                obj.order = 'desc';
                break;
            case 'price_low_first':
                obj.filter = 'price'
                obj.order = 'asc';
                break;
            case 'price_high_first':
                obj.filter = 'price'
                obj.order = 'desc';
            default:
                break;
        }
        return obj
    }
    return (
        <div className="d-flex justify-content-left filter_wrap">
            <Stack direction="horizontal" gap={5}>
                <div className="">
                    <span>Сортировать по: </span>
                </div>
                <div className="">
                    <Form.Select aria-label="Default select example" onChange={e => handleFilterState(filterChange(e.target.value))}>
                        <option value="change_date">Дате изменения</option>
                        <option value="price_low_first">Цене, от низкого</option>
                        <option value="price_high_first">Цене, от высокого</option>
                        {/* <option value="a_to_z">Алфавит</option> */}
                    </Form.Select>
                </div>
            </Stack>
        </div>
    )
}

export default Filters;