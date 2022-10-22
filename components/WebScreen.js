import React from 'react'

import { StyleSheet, Text , View  } from 'react-native'
import { WebView } from 'react-native-webview';
 
export default class WebScreen extends React.Component{
 
    sitio = this.props.navigation.getParam('sitio')
 
    lugares = {
        Aguilares:"http://api.openweathermap.org/data/2.5/weather?lat=13.75575485867707&lon=-89.18511265266727&appid=c42e93fef865ca71e3b7f6e440d8667a"
        ,
        Apopa:"http://api.openweathermap.org/data/2.5/weather?lat=13.777328870184306&lon=-89.18119497351222&appid=c42e93fef865ca71e3b7f6e440d8667a"
        ,
        Ayutuxtepeque:"http://api.openweathermap.org/data/2.5/weather?lat=13.739288665145017&lon=-89.20002466371065&appid=c42e93fef865ca71e3b7f6e440d8667a"
        ,
        Ciudad_Delgado:"http://api.openweathermap.org/data/2.5/weather?lat=13.749410033146969&lon=-89.1887176041939&APPID=c42e93fef865ca71e3b7f6e440d8667a",

        Cuscatancingo:"http://api.openweathermap.org/data/2.5/weather?lat=13.755761138589175&lon=-89.18512369858051&appid=c42e93fef865ca71e3b7f6e440d8667a", 
        
        El_Paisnal:"http://api.openweathermap.org/data/2.5/weather?lat=13.973556471659018&lon=-89.21831593206392&appid=c42e93fef865ca71e3b7f6e440d8667a", 
        
        Guazapa:"http://api.openweathermap.org/data/2.5/weather?lat=13.87298908777564&lon=-89.17222608884568&appid=c42e93fef865ca71e3b7f6e440d8667ac",   
              
        Ilopango:"http://api.openweathermap.org/data/2.5/weather?lat=13.699703521749381&lon=-89.10573169555835&appid=c42e93fef865ca71e3b7f6e440d8667a",       
        
        Mejicanos:"http://api.openweathermap.org/data/2.5/weather?lat=13.73224579845685&lon=-89.2046499220922&appid=c42e93fef865ca71e3b7f6e440d8667ac",        
         
        Nejapa:"http://api.openweathermap.org/data/2.5/weather?lat=13.816348411872982&lon=-89.23459520842518&appid=c42e93fef865ca71e3b7f6e440d8667ac",   
      
        Panchimalco:"http://api.openweathermap.org/data/2.5/weather?lat=13.61197467932718&lon=-89.17972380519761&appid=c42e93fef865ca71e3b7f6e440d8667ac",    
       
        Rosario_de_Mora:"http://api.openweathermap.org/data/2.5/weather?lat=13.577749129706262&lon=-89.2041778988179&appid=c42e93fef865ca71e3b7f6e440d8667ac",      

        San_Marcos:"http://api.openweathermap.org/data/2.5/weather?lat=13.655398345226514&lon=-89.1771872376304&appid=c42e93fef865ca71e3b7f6e440d8667ac", 
                
        San_Martin:"http://api.openweathermap.org/data/2.5/weather?lat=13.701918625006947&lon=-89.23476353780889&appid=c42e93fef865ca71e3b7f6e440d8667ac",         

        San_Salvador:"http://api.openweathermap.org/data/2.5/weather?lat=13.70039848831025&lon=-89.20830002491572&appid=c42e93fef865ca71e3b7f6e440d8667ac",        

        Santiago_Texacuangos:"http://api.openweathermap.org/data/2.5/weather?lat=13.64156287307531&lon=-89.11909995080006&appid=c42e93fef865ca71e3b7f6e440d8667ac",        

        Santo_Tomas:"http://api.openweathermap.org/data/2.5/weather?lat=13.477694072979446&lon=-89.11682718677463&appid=c42e93fef865ca71e3b7f6e440d8667ac",         

        Soyapango:"http://api.openweathermap.org/data/2.5/weather?lat=13.708766589564949&lon=-89.13797279620687&appid=c42e93fef865ca71e3b7f6e440d8667ac",     

        Tonacatepeque:"http://api.openweathermap.org/data/2.5/weather?lat=13.73224579845685&lon=-89.2046499220922&appid=c42e93fef865ca71e3b7f6e440d8667ac"

    }
 
    
 
    render(){
        console.log(this["lugares"][this.sitio])
        console.log(this.sitio);
        return(
            
                <WebView style={styles.webSize} source={{ uri: this["lugares"][this.sitio] }}>
                    
                </WebView>
            
        )
    }
 
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    webSize:{
        width: "100%",
        height: "100%"
    }
  });
