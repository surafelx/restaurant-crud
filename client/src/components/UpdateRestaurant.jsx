import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'

const UpdateRestaurant = () => {
    const { id } = useParams()
    let history = useHistory()
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [price_range, setPriceRange] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await RestaurantFinder.get(`/${id}`)
            setName(response.data.data.restaurant.name)
            setLocation(response.data.data.restaurant.location)
            setPriceRange(response.data.data.restaurant.price_range)
        }
        fetchData();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
            name,
            location,
            price_range
        })
        history.push("/")
    }
    return (
       <div>
           <form action="">
               <div className="form-group">
                   <label htmlFor="name">Name</label>
                   <input id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" type="text"/>
                </div>
                <div className="form-group">
                   <label htmlFor="location">Location</label>
                   <input id="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="form-control" type="text"/>
                </div>
                <div className="form-group">
                   <label htmlFor="price_range">Price Range</label>
                   <input id="price_range" value={price_range} onChange={(e) => setPriceRange(e.target.value)} className="form-control" type="number"/>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                    Submit
                </button>
           </form>
            
        </div>
    )
}

export default UpdateRestaurant
