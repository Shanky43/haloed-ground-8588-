<Box>
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
</Box>