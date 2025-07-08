import { useGetTopProductsQuery } from "../Redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../Pages/Products/SmallProduct";
import ProductCarousel from "../Pages/Products/ProductCarousel";

// const Header = () => {
//   const { data, isLoading, error } = useGetTopProductsQuery();

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (error) {
//     return <h1>ERROR</h1>;
//   }

//   return (
//     <div className="flex flex-wrap justify-center gap-5">
//       <div className="w-full">
//         <div className="flex flex-wrap justify-center gap-5">
//           {Array.isArray(data) && data.length > 0 ? (
//             data.map((product) => (
//               <div key={product._id}>
//                 <SmallProduct product={product} />
//               </div>
//             ))
//           ) : (
//             <p>No products found</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };


const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-5">
            {data.map((product) => (
              <div key={product._id} >
                <SmallProduct product={product} />
              </div>
            ))}
          </div>
        </div>
        {/* <ProductCarousel /> */}
      </div>
    </>
  );
};

export default Header;
