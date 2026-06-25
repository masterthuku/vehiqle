import React from 'react'
import AddCarForm from '../_components/AddCarForm'

export const metadata = {
    title: "Add Car | Vehiql Admin",
    description: "Add a new car to the Vehiql Admin dashboard.",
}

const AddCarPage = () => {
  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">
            Add New Car
        </h1>
        <AddCarForm/>
    </div>
  )
}

export default AddCarPage