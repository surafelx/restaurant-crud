import React, { useState } from 'react'

const AddReview = () => {
    const [name, setName] = useState("")
    const [review, setReview] = useState("")
    const [rating, setRating] = useState("")

    return (
            <div className="mb-2">
                <form action="">
                    <div className="form-row">
                        <div className="form-group col-8">
                            <div>
                            <label htmlFor="name">Name</label>
                            </div>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" type="tex" id="name" className="form-cotnrol"/>
                        </div>
                        <div className="form-group col-4">
                            <label htmlFor="Rating">Rating</label>
                            <select name="" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} className="custom-select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Review">Review</label>
                        <textarea name="" id="Review" cols="30" rows="10" value={review} onChange={(e) => setReview(e.target.value)} className="form-control"></textarea>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
    )
}

export default AddReview
