import Footer from "../../components/Footer"
import HeaderPage from "../../components/HeaderPage"

function ResultSearch() {
    return (
        <>
         <HeaderPage />

         <div className="m-5">
             <h1 className="text-2xl font-bold">Result Keyword : </h1>
             <p>Total : </p>

             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div>
                    Gambar 1
                </div>
                <div>
                    Gambar 2
                </div>
                <div>
                    Gambar 3
                </div>
                <div>
                    Gambar 4
                </div>
             </div>

         </div>

         <Footer/>
        </>
    )
}

export default ResultSearch