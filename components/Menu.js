import React from 'react'
 
import { StyleSheet, Text , View  } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
 
export default class HomeScreen extends React.Component{
    render(  ){
        return(
            <View style={styles.container}>
                <Text style={{ color:"#674", fontSize:25, fontWeight:'bold'  }} >Climas de El Salvador</Text>
                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Aguilares"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Aguilares
                    </Text>
                </TouchableHighlight>
 
                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Apopa"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Apopa
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Ayutuxtepeque"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Ayutuxtepeque
                    </Text>


                </TouchableHighlight>

                
                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Ciudad_Delgado"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Ciudad Delgado
                    </Text>

                    
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Cuscatancingo"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Cuscatancingo
                    </Text>
                </TouchableHighlight>

                   <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"El Paisnal"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        El Paisnal
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Guazapa"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Guazapa
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Ilopango"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Ilopango
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Mejicanos"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Mejicanos
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Nejapa"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Nejapa
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Panchimalco"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Panchimalco
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Rosario_de_Mora"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Rosario de Mora
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"San_Marcos"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        San Marcos
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"San_Martin"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        San Martín
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"San_Salvador"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        San Salvador
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Santiago_Texacuangos"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Santiago Texacuangos
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Santo_Tomas"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Santo Tomás
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Soyapango"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Soyapango
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botones}
                onPress={ () => this.props.navigation.navigate('Web',
                {
                    sitio:"Tonacatepeque"
                }
                ) }
                >
                    <Text style={styles.texto} >
                        Tonacatepeque
                    </Text>
                </TouchableHighlight>









            </View>
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
 
    botones:{
        height: 80,
        width:300,
        borderRadius:10,
        backgroundColor : "#abc",
        marginLeft :50,
        marginRight:50,
        marginTop :20,
        justifyContent: 'center',
        alignItems: 'center'
 
    },
 
    texto:{
        color: "#fff",
        fontSize: 30
    }
  });
