import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const violations = [
  {
    title: 'Violations in connection with licensing',
    data: [
      { violation: 'Driving without a valid driver\'s license', fine: 'Php 3,000' },
      { violation: 'Driving a Motor Vehicle Used in the Commission of a Crime Upon Conviction by a Regular Court of Competent Jurisdiction', fine: 'Php 10,000' },
      { violation: 'Commission of a Crime in the Course of Apprehension Upon Conviction by a Regular Court of Competent Jurisdiction', fine: 'Php 10,000' },
      { violation: 'Driving a Motor Vehicle While Under the Influence of Alcohol, Dangerous Drugs and/or Similar Substance Upon Final Conviction by a Regular Court of Competent Jurisdiction (Section 12, R.A. 10586)', fine: 'Php 3,000' },
      { violation: 'Reckless Driving', fine: 'Php 1,000 (1st Offense) | Php 2,000 (2nd) | Php 5,000 (3rd)' },
      { violation: 'Failure to Require His/Her Passenger/s to Wear the Prescribed Seat Belt Device', fine: 'Php 1,000 (driver and operator)' },
      { violation: 'Failure to Wear the Standard Protective Motorcycle Helmet or Failure to Require the Back Rider to Wear the Standard Protective Motorcycle Helmet', fine: 'Php 1,500 (1st Offense) | Php 3,000 (2nd) | Php 5,000 (3rd)' },       
      { violation: 'All Other Violations of Traffic Rules and Regulations', fine: 'Php 1,000' },  
    ]
  },
  {
    title: 'Violations in Connection with Motor Vehicle Registration/Renewal/Operation',
    data: [
      { violation: 'Driving an Unregistered Motor Vehicle', fine: 'Php 10,000' },
      { violation: 'Unauthorized Motor Vehicle Modification', fine: 'Php 5,000' },
      { violation: 'Operating a Right Hand Drive Motor Vehicle', fine: 'Php 50,000' },
      { violation: 'Motor Vehicle Operating without or with Defective/Improper/Unauthorized Accessories, Devices, Equipment and Parts', fine: 'Php 5,000' },
      { violation: 'Smoke Belching', fine: 'Php 2,000 (1st Offense) | Php 4,000 (2nd) | Php 6,000 (3rd)' },
      { violation: 'Fraud in Relation to the Registration of the Motor Vehicle and/or it\'s Renewal', fine: 'Php 3,000' },
      { violation: 'All Other Violation in Connection with Motor Vehicle Registration/Renewal/Operation', fine: 'Php 2,000' },
    ]
  },
  {
    title: 'Violations in Connection with Dimensions, Specifications/Weight and Load Limits',
    data: [
      { violation: 'Load Extending Beyond Projected Width Without Permit', fine: 'Php 1,000' },
      { violation: 'Axle Overloading', fine: 'An amount equivalent ot 25% of MVUC' },
      { violation: 'Operating a Passenger Bus/Truck With Cargo Exceeding 160 kg.', fine: 'Php 1,000' },
    ]
  },
  {
    title: 'Violations in Connection with Franchise',
    data: [
      { violation: 'Colorum Violation', fine: 'Php 1 million (bus) | Php 200,000 (truck) | Php 50,000 (Jeepney)' },
      { violation: 'Refusal to render service to the public or convey passenger destination', fine: 'An amount equivalent ot 25% of MVUC' },
      { violation: 'Operating a Passenger Bus/Truck With Cargo Exceeding 160 kg.', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Overcharging/Undercharging of fare', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Failure to provide proper body markings', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'No franchise/Certificate of Public Convenience or evidence of franchise presented during apprehension or carried inside the Motor Vehicle', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Presentation of Fake CPC, OR/CR, plates, stickers, and tags', fine: 'Revocation/Cancellation of the franchise/Certificate of Public Convenience' },
      { violation: 'Employing reckless, insolent, discourteous arrogant drivers', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Allowing an unauthorized driver to drive PUV or allowing a driver to drive PUV without bringing his/her driver\'s license', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Operating the unit/s with defective parts and accessories', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Failure to provide fare discount to those entitle under existing laws', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Failure to provide the Board with complete, correct, and updated operator\'s information (such as, but not limited to, address, contact numbers, list of drivers, etc.) and other forms of misrepresentation', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Failure to display "No Smoking" signage and/or allowing personnel or passenger to smoke inside the vehicle', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Fast, tampered, defective taximeter or operating without or with an old seal taximeter (TX only)', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Tampered, broken, joined, reconnected, fake or altered sealing wire (TX only)', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Violation of color scheme or design/Adoption of new color design without authority from the Board (PUB and TX only)', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Unregistered or unauthorized trade/business name (PUB and TX only)', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'No Panel Route (PUJ, PUB, UV)', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'No sign board (PUJ, PUB, UV)', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Pick and Drop of Passengers outside the Terminal (PUJ, PUB, UV)', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Carrying of illegal and/or prohibited cargoes', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Failure to provide fire extinguisher and required "STOP and GO" signage for use of each vehicle (STS only)', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Trip Cutting (PUJ, PUB, UV)', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Failure to display fare matrix (PUJ, PUB, UV)', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
      { violation: 'Failure to display the International Symbol of Accessibility inside the units and/or failure to designate seats specifically for the use of Person with Disabilities or Failure or refusal to transport PWDs (PUJ, PUB, TTS, UV)', fine: 'Php 50,000 (1st Offense) | Php 75,000 (2nd) | Php 100,000 (3rd)' },
      { violation: 'Breach of franchise conditions under 2011 Revised Terms and Conditions of CPC not otherwise herein provided.', fine: 'Php 5,000 (1st Offense) | Php 10,000 (2nd) | Php 15,000 (3rd)' },
    ]
  },
]

export default class ViolationsAndFines extends React.Component {
  renderItem = ({ item: { violation, fine }, index }) => {
    return (
      <ListItem
        containerStyle={styles.item}
        key={index}
        title={violation}
        subtitle={fine}
        onPress={() => this.props.navigation.navigate('ViolationDetails', { violation, fine })}
      />
    );
  }
  
  render() {
    return (
      <SectionList 
        style={styles.container}
        sections={violations}
        renderSectionHeader={({ section }) => <Text style={styles.header}>{section.title}</Text>} 
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  item: {
    backgroundColor: '#FFF',
  },
  violation: {
    padding: 3,
    width: '60%',
  },
  fine: {
    justifyContent: 'flex-end',
    padding: 3,    
    width: '40%',
  },
  header: {
    fontSize: 15,
    marginTop: 18,
    marginBottom: 10,
    paddingHorizontal: 14,
    fontWeight: '500'
  }
});
