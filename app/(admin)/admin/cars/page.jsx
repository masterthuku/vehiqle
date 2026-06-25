import CarsList from "./_components/CarsList"

export const metadata = {
    title: "Cars | Vehiql Admin",
    description: "Manage your cars in the Vehiql Admin dashboard.",
}

const CarsPage = () => {
  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">
            Cars Management
        </h1>
        <CarsList/>
    </div>
  )
}

export default CarsPage
