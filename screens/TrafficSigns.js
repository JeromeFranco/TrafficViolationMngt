import React from 'react';
import { StyleSheet, Text, View, ScrollView, SectionList, Image } from 'react-native';
import { ListItem } from 'react-native-elements';

const trafficSigns = [
  { 
    title: 'R1: Priority signs', 
    data: [
      { text: 'Stop', image: require('../assets/images/R1/145px-Philippines_road_sign_R1-1.png')},
      { text: 'Give way', image: require('../assets/images/R1/165px-Philippines_road_sign_R1-2.png')},
      { text: 'Give way (with Filipino language text)', image: require('../assets/images/R1/105px-Philippines_road_sign_R1-2P.png')},
      { text: 'Left turner must give way', image: require('../assets/images/R1/97px-Philippines_road_sign_R1-3.png')}
    ]
  },
  { 
    title: 'R2: Direction signs', 
    data: [
      { text: 'Proceed straight', image: require('../assets/images/R2/145px-Philippines_road_sign_R2-1.svg.png')},
      { text: 'No turns (plate type)', image: require('../assets/images/R2/88px-Philippines_road_sign_R2-1P.svg.png')},
      { text: 'Turn right', image: require('../assets/images/R2/145px-Philippines_road_sign_R2-2_R.svg.png')},
      { text: 'Turn left', image: require('../assets/images/R2/145px-Philippines_road_sign_R2-2_L.svg.png')},
      { text: 'Turn right on one-way road', image: require('../assets/images/R2/88px-Philippines_road_sign_R2-2P_R.svg.png')},
      { text: 'Turn left on one-way road', image: require('../assets/images/R2/88px-Philippines_road_sign_R2-2P_L.svg.png')},
      { text: 'Keep right', image: require('../assets/images/R2/145px-Philippines_road_sign_R2-3_R.svg.png')},
      { text: 'Keep left', image: require('../assets/images/R2/145px-Philippines_road_sign_R2-3_L.svg.png')},
      { text: 'Keep right (plate type)', image: require('../assets/images/R2/88px-Philippines_road_sign_R2-3P_R.svg.png')},
      { text: 'Keep left (plate type)', image: require('../assets/images/R2/88px-Philippines_road_sign_R2-3P_L.svg.png')},
      { text: 'Pass either side', image: require('../assets/images/R2/145px-Philippines_road_sign_R2-4.svg.png')},
      { text: 'Turn left only', image: require('../assets/images/R2/145px-Philippines_road_sign_R2-5_L.svg.png')},
      { text: 'Turn right only', image: require('../assets/images/R2/145px-Philippines_road_sign_R2-5_R.svg.png')},
      { text: 'All traffic must turn left', image: require('../assets/images/R2/88px-Philippines_road_sign_R2-5P_L.svg.png')},
      { text: 'All traffic must turn right', image: require('../assets/images/R2/88px-Philippines_road_sign_R2-5P_R.svg.png')},
      { text: 'Merging traffic', image: require('../assets/images/R2/145px-Philippines_road_sign_R2-6.svg.png')},
      { text: 'Merging traffic (plate type)', image: require('../assets/images/R2/87px-Philippines_road_sign_R2-6P.svg.png')},
      { text: 'Two-way traffic', image: require('../assets/images/R2/145px-Philippines_road_sign_R2-7.svg.png')},
      { text: 'Two-way traffic (plate type)', image: require('../assets/images/R2/88px-Philippines_road_sign_R2-7P.svg.png')},
      { text: 'Left lane must turn left', image: require('../assets/images/R2/87px-Philippines_road_sign_R2-8_L.svg.png')},
    ]
  },
  { 
    title: 'R3: Prohibitory signs', 
    data: [
      { text: 'No entry', image: require('../assets/images/R3/Philippines_road_sign_R3-1.svg.png')},
      { text: 'No entry (plate type)', image: require('../assets/images/R3/Philippines_road_sign_R3-1P.svg.png')},
      { text: 'No entry for bicycles', image: require('../assets/images/R3/Philippines_road_sign_R3-4.svg.png')},
      { text: 'No entry for trucks', image: require('../assets/images/R3/Philippines_road_sign_R3-8.svg.png')},
      { text: 'No entry for pedestrians', image: require('../assets/images/R3/Philippines_road_sign_R3-10.svg.png')},
      { text: 'No crossing, use pedestrian overpass', image: require('../assets/images/R3/Philippines_road_sign_R3-10P1.svg.png')},
      { text: 'No right turn', image: require('../assets/images/R3/Philippines_road_sign_R3-13.svg.png')},
      { text: 'No right turn (plate type)', image: require('../assets/images/R3/Philippines_road_sign_R3-13P.svg.png')},
      { text: 'No left turn', image: require('../assets/images/R3/Philippines_road_sign_R3-14.svg.png')},
      { text: 'No left turn (plate type)', image: require('../assets/images/R3/Philippines_road_sign_R3-14P.svg.png')},
      { text: 'No U-turn', image: require('../assets/images/R3/Philippines_road_sign_R3-15.svg.png')},
      { text: 'No U-turn (plate type)', image: require('../assets/images/R3/Philippines_road_sign_R3-15P.svg.png')},
      { text: 'No overtaking', image: require('../assets/images/R3/Philippines_road_sign_R3-16.svg.png')},
      { text: 'No overtaking (plate type with Filipino text)', image: require('../assets/images/R3/Philippines_road_sign_R3-16P.svg.png')},
    ]
  },
  { 
    title: 'R4: Speed limit signs', 
    data: [
      { text: 'Maximum speed', image: require('../assets/images/R4/Philippines_road_sign_R4-1_(60).svg.png')},
      { text: 'Speed limit de-restriction', image: require('../assets/images/R4/Philippines_road_sign_R4-2.svg.png')},
      { text: 'Maximum speed derestriction', image: require('../assets/images/R4/Philippines_road_sign_R4-2P_(60).svg.png')},
      { text: 'Minimum speed (used only on expressway segments)', image: require('../assets/images/R4/Philippines_road_sign_R4-3_(40).svg.png')},
      { text: '20 kph (10 mph)', image: require('../assets/images/R4/Philippines_road_sign_R4-1_(20).svg.png')},
      { text: '30 kph (20 mph)', image: require('../assets/images/R4/Philippines_road_sign_R4-1_(30).svg.png')},
      { text: '40 kph (25 mph)', image: require('../assets/images/R4/Philippines_road_sign_R4-1_(40).svg.png')},
      { text: '50 kph (30 mph)', image: require('../assets/images/R4/Philippines_road_sign_R4-1_(50).svg.png')},
      { text: '60 kph (40 mph)', image: require('../assets/images/R4/Philippines_road_sign_R4-1_(60).svg.png')},
      { text: '80 kph (50 mph)', image: require('../assets/images/R4/Philippines_road_sign_R4-1_(80).svg.png')},
    ]
  },
  { 
    title: 'R5: Parking signs', 
    data: [
      { text: 'No parking', image: require('../assets/images/R5/Philippines_road_sign_R5-1S.svg.png')},
      { text: 'No parking ( Tagalog: Bawal pumarada )', image: require('../assets/images/R5/Philippines_road_sign_R5-1P.svg.png')},
      { text: 'No parking anytime (with optional days of prohibition and arrows)', image: require('../assets/images/R5/Philippines_road_sign_R5-3P.svg.png')},
      { text: 'No parking, tow-away zone', image: require('../assets/images/R5/Philippines_road_sign_R5-3C.svg.png')},
      { text: 'Restricted parking (time-limited parking)', image: require('../assets/images/R5/Philippines_road_sign_R5-4A.svg.png')},
      { text: 'Loading zone, xx:xx AM - xx:xx PM', image: require('../assets/images/R5/Philippines_road_sign_R5-4B.svg.png')},
      { text: 'Loading and unloading zone', image: require('../assets/images/R5/Philippines_road_sign_R5-4C.svg.png')},
      { text: 'No waiting anytime', image: require('../assets/images/R5/Philippines_road_sign_R5-5.svg.png')},
      { text: 'No loading and unloading anytime', image: require('../assets/images/R5/Philippines_road_sign_R5-6.svg.png')},
      { text: 'No stopping anytime', image: require('../assets/images/R5/Philippines_road_sign_R5-8.svg.png')},
      { text: 'No parking, bus stop', image: require('../assets/images/R5/Philippines_road_sign_R5-9A.svg.png')},
      { text: 'No parking, jeepney stop', image: require('../assets/images/R5/Philippines_road_sign_R5-9B.svg.png')},
      { text: 'Do not block intersection (placed along with yellow box intersection markings).', image: require('../assets/images/R5/Philippines_road_sign_R5-10.svg.png')},
    ]
  },
  { 
    title: 'R6: Miscellaneous signs', 
    data: [
      { text: 'No blowing of horns', image: require('../assets/images/R6/Philippines_road_sign_R6-1.svg.png')},
      { text: 'Width restriction', image: require('../assets/images/R6/Philippines_road_sign_R6-2.svg.png')},
      { text: 'Height restriction', image: require('../assets/images/R6/Philippines_road_sign_R6-3.svg.png')},
      { text: 'Weight restriction', image: require('../assets/images/R6/Philippines_road_sign_R6-4.svg.png')},
      { text: 'Length restriction', image: require('../assets/images/R6/Philippines_road_sign_R6-6.svg.png')},
      { text: 'Fasten seat belt', image: require('../assets/images/R6/Philippines_road_sign_R6-7.svg.png')},
      { text: 'Pedestrian crossing (used on zebra crossings)', image: require('../assets/images/R6/Philippines_road_sign_R6-8.svg.png')},
      { text: 'School children crossing', image: require('../assets/images/R6/Philippines_road_sign_R6-9.svg.png')},
      { text: 'Bike lane', image: require('../assets/images/R6/Philippines_road_sign_R6-10.svg.png')},
      { text: 'Wheelchair crossing (used on wheelchair ramps near intersections, buildings, hospitals, parks, malls and other public areas)', image: require('../assets/images/R6/Philippines_road_sign_R6-11.svg.png')},
    ]
  },
  { 
    title: 'W1: Horizontal alignment signs', 
    data: [
      { text: 'Sharp turn to the left', image: require('../assets/images/W1/Philippines_road_sign_W1-1_L.svg.png')},
      { text: 'Sharp turn to the right', image: require('../assets/images/W1/Philippines_road_sign_W1-1_R.svg.png')},
      { text: 'Double turn to the left', image: require('../assets/images/W1/Philippines_road_sign_W1-2_L.svg.png')},
      { text: 'Double turn to the right', image: require('../assets/images/W1/Philippines_road_sign_W1-2_R.svg.png')},
      { text: 'Curve to the left', image: require('../assets/images/W1/Philippines_road_sign_W1-3_L.svg.png')},
      { text: 'Curve to the right', image: require('../assets/images/W1/Philippines_road_sign_W1-3_R.svg.png')},
      { text: 'Double curve, with first curve to the left', image: require('../assets/images/W1/Philippines_road_sign_W1-4_L.svg.png')},
      { text: 'Double curve, with first curve to the right', image: require('../assets/images/W1/Philippines_road_sign_W1-4_R.svg.png')},
      { text: 'Series of dangerous curves, with first curve to the left', image: require('../assets/images/W1/Philippines_road_sign_W1-5_L.svg.png')},
      { text: 'Series of dangerous curves, with first curve to the right', image: require('../assets/images/W1/Philippines_road_sign_W1-5_R.svg.png')},
      { text: 'Hairpin curve to the left', image: require('../assets/images/W1/Philippines_road_sign_W1-6_L.svg.png')},      
      { text: 'Hairpin curve to the right', image: require('../assets/images/W1/Philippines_road_sign_W1-6_R.svg.png')},      
        
    ]
  },
  { 
    title: 'W2: Intersection signs', 
    data: [
      { text: 'Crossroads(used on dangerous crossroads where traffic must give way to right-turning vehicles)', image: require('../assets/images/W2/Philippines_road_sign_W2-1.svg.png')},      
      { text: 'Other crossroads(Staggered road junction with first intersection to the right)', image: require('../assets/images/W2/Philippines_road_sign_W2-2_R.svg.png')},      
      { text: 'Other crossroads(Staggered road junction with first intersection to the left)', image: require('../assets/images/W2/Philippines_road_sign_W2-2_L.svg.png')},      
      { text: 'Other crossroads (Skewed road junction (right))', image: require('../assets/images/W2/Philippines_road_sign_W2-3_R.svg.png')}, 
      { text: 'Other crossroads (Skewed road junction (left))', image: require('../assets/images/W2/Philippines_road_sign_W2-3_L.svg.png')}, 
      { text: 'T-junction', image: require('../assets/images/W2/Philippines_road_sign_W2-4.svg.png')}, 
      { text: 'Y-junction', image: require('../assets/images/W2/Philippines_road_sign_W2-5.svg.png')}, 
      { text: 'Half Y-junction to the right', image: require('../assets/images/W2/Philippines_road_sign_W2-5A_R.svg.png')}, 
      { text: 'Half Y-junction to the left', image: require('../assets/images/W2/Philippines_road_sign_W2-5A_L.svg.png')}, 
      { text: 'Half Y-junction from behind (left)', image: require('../assets/images/W2/Philippines_road_sign_W2-5B_L.svg.png')}, 
      { text: 'Half Y-junction from behind (right)', image: require('../assets/images/W2/Philippines_road_sign_W2-5B_R.svg.png')}, 
      { text: 'Side junction to the right', image: require('../assets/images/W2/Philippines_road_sign_W2-6_R.svg.png')}, 
      { text: 'Side junction to the left', image: require('../assets/images/W2/Philippines_road_sign_W2-6_L.svg.png')}, 
      { text: 'Roundabout (rotunda)', image: require('../assets/images/W2/Philippines_road_sign_W2-7.svg.png')}, 
      { text: 'Priority side junction on the right', image: require('../assets/images/W2/Philippines_road_sign_W2-8_R.svg.png')}, 
      { text: 'Priority side junction on the left', image: require('../assets/images/W2/Philippines_road_sign_W2-8_L.svg.png')}, 
      { text: 'Priority merge on the right', image: require('../assets/images/W2/Philippines_road_sign_W2-9_R.svg.png')}, 
      { text: 'Priority merge on the left', image: require('../assets/images/W2/Philippines_road_sign_W2-9_L.svg.png')}, 
      { text: 'Priority crossroads', image: require('../assets/images/W2/Philippines_road_sign_W2-10.svg.png')},
    ]
  },
  { 
    title: 'W3: Advance warning of traffic control devices signs', 
    data: [
      { text: 'Traffic lights', image: require('../assets/images/W3/Philippines_road_sign_W3-1.svg.png')}, 
      { text: 'Stop sign ahead', image: require('../assets/images/W3/Philippines_road_sign_W3-2.svg.png')}, 
      { text: 'Give way ahead', image: require('../assets/images/W3/Philippines_road_sign_W3-3.svg.png')},
    ]
  },
]

export default class TrafficSigns extends React.Component {
  renderItem(item) {
    return (
      <View style={styles.item} key={item.text}>
        <Image source={item.image} />
        <Text style={styles.signText}>{item.text}</Text>
      </View>
    );
  }

  renderSection = ({ item, index, section }) => {
    const numColumns = 2;

    if (index % numColumns !== 0) return null;

    const items = [];

    for (let i = index; i < index + numColumns; i++) {
      if (i >= section.data.length) {
        break;
      }
      items.push(this.renderItem(section.data[i]));
    }

    return (
      <View style={styles.items} key={section.title}>
        {items}
      </View>
    );
  }

  render() {
    return (
      <SectionList 
        style={styles.container}
        renderItem={this.renderSection} 
        renderSectionHeader={({ section }) => <Text style={styles.header}>{section.title}</Text>} 
        sections={trafficSigns} 
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 18,
    marginBottom: 18,
    textAlign: 'center'
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    width: '50%',
    alignItems: 'center',
    paddingBottom: 18,
    paddingHorizontal: 5
  },
  signText: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: '500'
  }
});
