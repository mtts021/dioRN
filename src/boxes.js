import react from "react";
import { View, StyleSheet } from "react-native";


export default function Boxes(){
    return(
        <View style={styles.containerGreenBox}>
            <View>
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
            </View>
            <View>
            <View style={styles.greenBox} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={styles.greenBox} />
            </View>
            <View>
                <View style={styles.greenBox} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={styles.greenBox} />
            </View>
            <View>
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
            </View>
            <View>
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
            </View>
            <View>
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
            </View>
            <View>
                <View style={styles.greenBox} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={styles.greenBox} />
            </View>
            <View>
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
            </View>
            <View>
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
            </View>
            <View>
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
            </View>
            <View>
                <View style={styles.greenBox} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={styles.greenBox} />
            </View>
            <View>
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={[styles.greenBox, styles.greenLigth]} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
            </View>
            <View>
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
                <View style={styles.greenBox} />
            </View>
            </View>
);
}


const styles = StyleSheet.create ({
    containerGreenBox: {
      flexDirection: 'row',
      marginVertical: 20,
    },
    greenBox: {
      margin: 1,
      width: 15,
      height: 15,
      borderRadius: 5,
      backgroundColor:'#006D32' ,
    },
    greenLigth: {
      backgroundColor: '#39D353',
    },
   
  });