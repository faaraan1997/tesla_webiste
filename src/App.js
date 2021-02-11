import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanles from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';



function App() {
  return (
    <div className="App">
      <Header /> 
      <div className='app__itemsContainer'>
        <Item 
          title='Lowest Cost Solar Panels in America'
          desc='Money-back gaurantee'
          descLink=''
          backgroundImg={SolarPanles}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='ture'
          first
        />
        <Item 
          title='Model S'
          desc='$69,420'
          descLink=''
          backgroundImg={ModelS}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='ture'
        />
        <Item 
          title='Model 3'
          desc='Money-back gaurantee'
          descLink=''
          backgroundImg={Model3}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='ture'
        />
        <Item 
          title='Model X'
          desc='Money-back gaurantee'
          descLink=''
          backgroundImg={ModelX}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='ture'
        />
        <Item 
          title='Model Y'
          desc='Money-back gaurantee'
          descLink=''
          backgroundImg={ModelY}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='ture'
        />
        <Item 
          title='Solar for New Roofs'
          desc='Money-back gaurantee'
          descLink=''
          backgroundImg={SolarRoof}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='ture'
        />
        <Item 
          title='Accessories'
          desc='Money-back gaurantee'
          descLink=''
          backgroundImg={Accessories}
          leftBtnTxt='SHOP NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
        />
      </div>  
    </div>
  );
}

export default App;
