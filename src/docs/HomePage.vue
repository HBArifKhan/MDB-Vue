<template>
    <div class="body">
 <img class="img-responsive" src="../assets/bmw.jpg" alt="BMW" width="1360" height="500">
    <div class="center w3-display-middle w3-margin-top w3-center">
    <h2 style="font-family: Garamond; font-size: 50px; text-align: center; bottom: 4em !important; position: relative" class="w3-text-white col-"><span class=""><b>BMW</b><h4 style="font-family:Palatino;">'Designed For Driving Pleasure'</h4></span><span class="w3-hide-small w3-text-white"></span></h2>
</div>
    
      <container>
        <row class="mt-5">
      <div class="col-lg-6 w3-padding-16">
      <img class="img-responsive" src="../assets/b6.jpg" alt="BMW CAR"style= "height: 300px; width: 100%; border-radius:1%;">
      </div> 
  <div class="content col-lg-6 w3-padding-16" >
    <h1 style="font-family: Palatino color: white">BMW X3</h1>
    <p style="font-family: Palatino color: white" >BMW is a German multinational company which currently produces luxury automobiles and motorcycles, and also produced aircraft engines until 1945. The company was founded in 1916 and has its headquarters in Munich, Bavaria. BMW offers 11 new car models in India.</p>
  </div>
  </row>

   <row class="mt-5">
      <column sm="4">
        <card>
          <card-img src="https://autocarupdates.com/wp-content/uploads/2017/03/2017-bmw-showroom-new-car-full-hd-wallpepar-image-changes-1920-x-1080.jpg" alt="Card image cap" waves></card-img>
          <card-body>
            <card-title>Card with waves effect</card-title>
            <card-text>From Nike, we buy victory. From Under Armour, we buy protection. From Lululemon, we buy zen. From Patagonia, we buy conservation. From BMW, we buy performance.</card-text>
            <btn color="primary">View</btn>
          </card-body>
        </card>
      </column>
      <column sm="4">
        <card>
          <card-img src="http://tremendouswallpapers.com/wp-content/uploads/2014/12/bmw-m-zero-concept-rear-2008-1920x1080-wallpaper-322.jpg" waves></card-img>
          <card-body>
            <card-title>Card with waves effect</card-title>
            <card-text>There may be little practical difference between a Ford Mondeo and a BMW three series, but in terms of perceptions of who you are and what you are, then they are worlds apart.</card-text>
            <btn color="primary">View</btn>
          </card-body>
        </card>
      </column>
      <column sm="4">
        <card>
          <card-img src="http://9to5carwallpapers.com/wp-content/uploads/2013/03/BMW-M3-Hd-Wallpaper-1080p.jpg" alt="Card image cap" waves></card-img>
          <card-body>
            <card-title>Card with waves effect</card-title>
            <card-text>There may be little practical difference between a Ford Mondeo and a BMW three series, but in terms of perceptions of who you are and what you are, then they are worlds apart.</card-text>
            <btn color="primary">View</btn>
          </card-body>
        </card>
      </column>
    </row>
   
      
    </container>
    </div>

</template>

<script>
import { Container, Column, Row, Fa, Navbar, NavbarItem, NavbarNav, NavbarCollapse, Btn, EdgeHeader, CardBody, Card, CardImg, CardHeader, CardTitle, CardText} from 'mdbvue';

export default {
  name: 'HomePage',
  components: {
    Container,
    Column,
    Row,
    Fa,
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Btn,
    EdgeHeader,
    CardBody,
    Card,
    CardImg,
    CardHeader,
    CardTitle,
    CardText
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-family: verdana;
}

.home-feature-box {
  padding: 40px 0;
}

.home-feature-box i {
  font-size: 6rem;
}

.home-feature-box span {
  display: block;
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #FF4500;
}
.backgroundColor {
        background-color: DimGrey;
        color: white;
        font-family: verdana;
    }
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}


</style>
