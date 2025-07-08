// import { Link, useParams } from 'react-router-dom';
// import { useGetProductsQuery } from '../Redux/api/productApiSlice.js';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Header from '../components/Header';
// import Product from './Products/Product';

// const Home = () => {
//   const { keyword } = useParams();
//   const { data, isLoading, isError, error } = useGetProductsQuery({ keyword });

//   console.log('data:', data);       //--------------extra added (later)-------------- 
//   console.log('error:', error);     //--------------extra added (later)--------------
//   console.log('isError:', isError); //--------------extra added (later)-------------- 


//   return (
//     <div className="ml-16">
//       {!keyword ? <Header /> : null}
//       {isLoading ? (
//         <Loader />
//       ) : isError ? (
//         <Message variant="danger">
//           {error?.data?.message || error?.error || 'Something went wrong'}
//         </Message>
//       ) : (
//         <>
//           <div className="flex justify-between items-center">
//             <h1 className="ml-[20rem] mt-[10rem] text-[3rem]">
//               Special Products
//             </h1>

//             <Link
//               to="/shop"
//               className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
//             >
//               Shop
//             </Link>
//           </div>

//           <div>
//             <div className="flex justify-center flex-wrap mt-[2rem]">
//               {data?.products?.map((product) => (
//                 <div key={product._id}>
//                   <Product product={product} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Home;


//-----------------------------------------it is right----------------------------------
//--------------------------------------------------------------------------------------------
// import { Link, useParams } from 'react-router-dom';
// import { useGetProductsQuery } from '../Redux/api/productApiSlice.js';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Header from '../components/Header';
// import Product from './Products/Product';

// const Home = () => {
//   const { keyword } = useParams();
//   const {
//     data = { products: [] },
//     isLoading,
//     isError,
//     error,
//   } = useGetProductsQuery({ keyword });

//   return (
//     <div className="ml-16">
//       {!keyword ? <Header /> : null}
//       {isLoading ? (
//         <Loader />
//       ) : isError ? (
//         <Message variant="danger">
//           {error?.data?.message || error?.error || 'Something went wrong'}
//         </Message>
//       ) : (
//         <>
//           <div className="flex justify-between items-center">
//             <h1 className="ml-[20rem] mt-[10rem] text-[3rem]">
//               Special Products
//             </h1>

//             <Link
//               to="/shop"
//               className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
//             >
//               Shop
//             </Link>
//           </div>

//           <div>
//             <div className="flex justify-center flex-wrap mt-[2rem]">
//               {data?.products?.map((product) => (
//                 <div key={product._id}>
//                   <Product product={product} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Home;

import { Link, useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../Redux/api/productApiSlice.js';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Header from '../components/Header';
import Product from './Products/Product';

const Home = () => {
  const { keyword } = useParams();
  const {
    data,
    isLoading,
    isError,
    error,
  } = useGetProductsQuery({ keyword: keyword || '' });

  const products = data?.products || [];

  return (
    <div className="ml-16">
      {!keyword && <Header />}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {error?.data?.message || error?.error || 'Something went wrong'}
        </Message>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className="ml-[20rem] mt-[10rem] text-[3rem]">
              Special Products
            </h1>

            <Link
              to="/shop"
              className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
            >
              Shop
            </Link>
          </div>

          <div className="flex justify-center flex-wrap mt-[2rem]">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))
            ) : (
              <Message variant="info">No products found.</Message>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

