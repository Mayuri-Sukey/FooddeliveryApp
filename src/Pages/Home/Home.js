import React from 'react'
import Layout from '../../Components/Layouts/Layout'

import   "../../Styles/HomeStyle.css";
import Section1 from '../Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

const Home = () => {
  return (
    <> 
      <Layout >
           {/* hero secttion1 banner */}
           <Section1 />

           {/* chetan mundle */}

             {/*home section about*/}
           <Section2 />

             {/* home section menu */}
             <Section3 />

             {/* Home section Promotion */}
             <Section4/>

              {/* Home section Shop */}
              <Section5 />

              {/* section blog */}
              <Section6/>

              {/* Home Section Contact */}
              <Section7 />

      </Layout>
    </>
  )
}

export default Home
