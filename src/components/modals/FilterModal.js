import {FaAngleDown, FaTimes} from "react-icons/fa";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Slider from "@material-ui/core/Slider";

const FilterModal = ({setMobileFilter, filters, value, handleChange}) => {
    return (
        <div className='shop__mobile-filter--dialog'>
            <div className='shop__mobile-filter--dialog-header'>
                <p></p>
                <h4>FILTER</h4>
                <FaTimes size={20}
                         onClick={() => setMobileFilter(false)}
                />
            </div>

            <div className='shop__mobile-filter--dialog-list'>
                {filters.map(filter =>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<FaAngleDown/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <p>{filter.name}</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                {filter.list.map(value =>
                                    <div className='shop__filter--checkbox-item'>
                                        <input type="checkbox" id={value} name="scales" style={{background:value}} />
                                        <label htmlFor={value}>{value}</label>
                                    </div>
                                )}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                )}
                <Accordion>
                    <AccordionSummary
                        expandIcon={<FaAngleDown/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <p>Price Range</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{width: '100%'}}>
                            <p className='shop__filter--value'>
                                ${value[0]} - ${value[1]}
                            </p>
                            <Slider
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                            />
                            <div className='shop__filter--title'>
                                <p>$0</p>
                                <p>$100</p>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>


            <div className='shop__mobile-filter--dialog-button'>
                <button className='shop__mobile-filter--dialog-button-reset'>
                    Reset
                </button>
                <button className='shop__mobile-filter--dialog-button-done'>
                    Done
                </button>
            </div>
        </div>
    )
}

export default FilterModal
