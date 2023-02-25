{/* <Box>
<HeroSlider
slidingAnimation="left_to_right"
orientation="horizontal"
initialSlide={1}
onBeforeChange={(previousSlide,nextSlide)=>console.log("onBeforeChange",previousSlide,nextSlide)}
onChange={nextSlide=>console.log("onChange",nextSlide)}
onAfterChange={nextSlide=> console.log("onAfterChange",nextSlide)}
settings={{
  slidingDuration:350,
  slidingDelay:1000,
  shouldAutoplay:true,
  autoplayDuration:5000,
  height:`100vh`

}}
>
  <Slide  background={{
    backgroundImage:image1,
    backgroudAttachment:"fixed"
  }}/>
   <Slide  background={{
    backgroundImage:image1,
    backgroudAttachment:"fixed"
  }}/>

  
</HeroSlider>
</Box> */}


// const [state, dispatch]=useReducer(reducer,initialState)


// const initialState={
//   // Buckets:"",
  // Sandwiches:"",
  // Tenders:"",
  // FriedChicken:"",
  // PotPiesBowls:"",
  // ALaCarte:"",
  // Sides:"",
  // Sauces:"",
  // Desserts:"",
  // SpecialOffers:"",
  // Beverages:""
  // }
  
  // const reducer=((state,{type,payload}))=>{
  //   switch(type){
  //     case "Buckets":{
  //       return {
  //         ...state,
  //         Buckets:payload
  //       }
  //     }
  //     case "Buckets":{
  //       return {
  //         ...state,
  //         Buckets:payload
  //       }
  //     }
  //     case "Buckets":{
  //       return {
  //         ...state,
  //         Buckets:payload
  //       }
  //     }
  //     case "Buckets":{
  //       return {
  //         ...state,
  //         Buckets:payload
  //       }
  //     }
  //     case "Buckets":{
  //       return {
  //         ...state,
  //         Buckets:payload
  //       }
  //     }
  //     case "Buckets":{
  //       return {
  //         ...state,
  //         Buckets:payload
  //       }
  //     }
  
  //   }
  // }


//   const Bucketss=useRef(null)
// const Sandwichess=useRef(null)
// const Tenderss=useRef(null)
// const FriedChickens=useRef(null)
// const Potss=useRef(null)
// const Cartes=useRef(null)
// const Sidess=useRef(null)
// const Saucess=useRef(null)
// const Desertss=useRef(null)
// const Specials=useRef(null)
// const Beveragess=useRef(null)
// const scrollToSection=(elementRef)=>{
//   console.log("its working",elementRef)

//   window.scrollTo({
//     top:elementRef.current.offsetTop,
//     behavior:"smooth"
//   })
// }





// const [quant,setQuant]=useState(1)


// const [cartItems,setCartItems]=useState([])
// const handleCartItems=(newCartItems)=>{
// console.log(cartItems)

// cartItems.map(({id,quantity})=>{
//   if(id===newCartItems.id){
//     setCartItems({quantity:quantity+1})
//    console.log("its coming inside")
//   }
//   else{
// setQuant(1)

//  }
 
// })
// if(cartItems.id!==newCartItems.id){
//   setCartItems([...cartItems,{...newCartItems,["quantity"]:quant}])
// }
