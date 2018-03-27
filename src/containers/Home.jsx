import React from 'react'
import { withSiteData } from 'react-static'

import logoImg from '../images/logo.png'
import doggo1Img from '../images/doggo1.jpg'
import doggo2Img from '../images/doggo2.jpg'

export default withSiteData(() => (
  <div id="parallax">

    {/* <section>
    <div className="title">
      <h3>Let's do some</h3>
      <h1>PARALLAX</h1>
    </div>
  </section> */}

    <section>
      <div className="parallax-one" />
    </section>

    <section>
      <div className="block">
        <h1 className="left">About</h1>
        <p className="line-break margin-top-10" />
        <p className="margin-top-10">The UGG brand began to symbolize those who embraced sport and a relaxed, active lifestyle. More than that, an emotional connection and a true feeling of love began to grow for UGG boots, just as Brian had envisioned. People didn't just like wearing UGG boots, they fell in love with them and literally could not take them off. By the end of the 90's, celebrities and those in the fashion world took notice of the UGG brand. A cultural shift occurred as well - people were embracing, and feeling empowered, by living a more casual lifestyle and UGG became one of the symbols of this lifestyle. By 2000, a love that began on the beaches had become an icon of casual style. It was at this time that the love for UGG grew in the east, over the Rockies and in Chicago. In 2000, UGG Sheepskin boots were first featured on Oprah's Favorite Things® and Oprah emphatically declared that she "LOOOOOVES her UGG boots." From that point on, the world began to notice.</p>
      </div>
    </section>

    <section>
      <div className="image-section parallax-two">
        <h1 className="middle">Gallery</h1>
      </div>
    
    </section>

    <section>
      <div className="block">
        <h1 className="right">Social</h1>
        <p className="line-break margin-top-10" />
        <p className="margin-top-10">Fueled by celebrities from coast to coast wearing UGG boots and slippers on their downtime, an entirely new era of fashion was carved out. As a result, the desire and love for UGG increased as people wanted to go deeper into this relaxed UGG experience. UGG began offering numerous color and style variations on their sheepskin boots and slippers. Cold weather boots for women and men and leather casuals were added with great success. What started as a niche item, UGG sheepskin boots were now a must-have staple in everyone's wardrobe. More UGG collections followed, showcasing everything from knit boots to sneakers to wedges, all the while maintaining that luxurious feel UGG is known for all over the world. UGG products were now seen on runways and in fashion shoots from coast to coast. Before long, the love spread even further.</p>
      </div>
    </section>

    <section>
      <div className="image-section parallax-three">
        <h1 className="middle">Workshops</h1>
      </div>
  
    </section>

    <section>
      <div className="block">
        <h1 className="left">Contact</h1>
        <p className="line-break margin-top-10" />
        <p className="margin-top-10">In 2011, UGG will go back to its roots and focus on bringing the active men that brought the brand to life back with new styles allowing them to love the brand again as well. Partnering with Super Bowl champion and NFL MVP Tom Brady, UGG will invite even more men to feel the love the rest of the world knows so well. UGG will also step into the world of high fashion with UGG Collection. The UGG Collection fuses the timeless craft of Italian shoemaking with the reliable magic of sheepskin, bringing the luxurious feel of UGG to high end fashion. As the love for UGG continues to spread across the world, we have continued to offer new and unexpected ways to experience the brand. The UGG journey continues on and the love for UGG continues to spread.</p>
      </div>
    </section>

    <section>
      <div className="image-section parallax-four">
        <h1 className="middle">Blog</h1>
      </div>
  
    </section>

  </div>
))
