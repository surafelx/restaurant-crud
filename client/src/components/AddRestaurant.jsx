import React, {useState} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'

const AddRestaurant = () => {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [price_range, setPriceRange] = useState("Price Value")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await RestaurantFinder.post("/", {
                name, 
                location, 
                price_range
            })
            console.log(response)
        } catch(err) {
            console.log(err)
        }

    }
    return (
        <div>
            <div className="mb-4">
                <form action="">
                    <div className="form-row">
                        <div className="col">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col">
                            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}className="form-control" placeholder="Location"/>
                        </div>

                        <div className="col">
                            <select value={price_range} onChange={(e) => setPriceRange(e.target.value)} className="custom-select my-1 mr-sm-2">
                                <option disabled>Price Value</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div class="col">
                            <button onClick={handleSubmit} className="btn btn-primary">+</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddRestaurant

