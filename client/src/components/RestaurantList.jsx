import React, {useEffect, useContext} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const RestaurantList = () => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext)
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
                                <tr key={restaurant.id}>
                                    <td>{restaurant.name}</td>
                                    <td>{restaurant.location}</td>
                                    <td>{restaurant.price_range}</td>
                                    <td>Reviews</td>
                                    <td><button className="btn btn-warning">Update</button></td>
                                    <td><button className="btn btn-danger">Delete</button></td>
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