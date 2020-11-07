import React, {useEffect, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const RestaurantList = () => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext)
    let history = useHistory()
    useEffect(() => {
       const fetchData = async() => {
        try{
            const response = await RestaurantFinder.get("/");
            setRestaurants(response.data.data.restaurants)
        }
        catch(err) {
            console.log(err)
        }
       }

       fetchData();
    }, []);
    const handleDelete = async (e, id) => {
        e.stopPropagation()
        try {
            const response = await RestaurantFinder.delete(`/${id}`, 
            setRestaurants(
                restaurants.filter((restaurant) => {
                return restaurant.id !== id
            })
        ))
        } catch(err) {
            console.log(err)
        }
    }
    const handleUpdate = (e, id) => {
        e.stopPropagation()
        history.push(`/restaurants/${id}/update`);
    }
    const handleRestaurantSelect = (id) => {
        history.push(`/restaurant/${id}`)
    }
    return (
        <div>
            <div className="list-group">
                <table className="table-hover table-dark">
                    <thead>
                        <tr className="bg-primary">
                            <th scope="col">Restaurant</th>
                            <th scope="col">Location</th>
                            <th scope="col">Price Range</th>
                            <th scope="col">Ratings</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>

                    <tbody>
                        {restaurants && restaurants.map((restaurant) => {
                            return (
                                <tr onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                                    <td>{restaurant.name}</td>
                                    <td>{restaurant.location}</td>
                                    <td>{restaurant.price_range}</td>
                                    <td>Reviews</td>
                                    <td><button onClick={(e) => handleUpdate(e, restaurant.id)}  className="btn btn-warning">Update</button></td>
                                    <td><button onClick={(e) => handleDelete(e, restaurant.id)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            );
                        })}

                        {/* <tr className="p-2">
                            <td>McDonalds</td>
                            <td>New York</td>
                            <td>3</td>
                            <td>Ratings</td>
                            <td><button className="btn btn-warning">Update</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                        <tr>
                            <td>McDonalds</td>
                            <td>New York</td>
                            <td>3</td>
                            <td>Ratings</td>
                            <td><button className="btn btn-warning">Update</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr> */}
                       
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default RestaurantList
