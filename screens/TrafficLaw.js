import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

export default class TrafficLaw extends React.Component {
  render() {
    const { container, b, bottomSpacingL, bottomSpacingM, textCenter, scroll } = styles;
    return (
      <View style={container}>
        <ScrollView style={scroll}>
          <Text style={[b, bottomSpacingL]}>REPUBLIC ACT No. 4136</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>AN ACT TO COMPILE THE LAWS RELATIVE TO LAND TRANSPORTATION AND TRAFFIC RULES, TO CREATE A LAND TRANSPORTATION COMMISSION AND FOR OTHER PURPOSES</Text>
          <Text style={[b, textCenter]}>CHAPTER I</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>PRELIMINARY PROVISIONS ARTICLE</Text>
          <Text style={[b, textCenter]}>ARTICLE I</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Title and Scope of Act</Text>
          <Text style={bottomSpacingM}>
            Section 1. Title of Act. - This Act shall be known as the "Land Transportation and Traffic Code."
          </Text>
          <Text style={bottomSpacingM}>
          Section 2. Scope of Act. - The provisions of this Act shall control, as far as they apply, the registration and operation of motor vehicles and the licensing of owners, dealers, conductors, drivers, and similar matters.
          </Text>
          <Text style={[b, textCenter]}>ARTICLE II</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Definitions</Text>
          <Text style={bottomSpacingM}>Section 3. Words and phrases defined. - As used in this Act:</Text>          
          <Text style={bottomSpacingM}>
            (a) "Motor Vehicle" shall mean any vehicle propelled by any power other than muscular power using the public highways, but excepting road rollers, trolley cars, street-sweepers, sprinklers, lawn mowers, bulldozers, graders, fork-lifts, amphibian trucks, and cranes if not used on public highways, vehicles which run only on rails or tracks, and tractors, trailers and traction engines of all kinds used exclusively for agricultural purposes.
          </Text>
          <Text style={bottomSpacingM}>
            Trailers having any number of wheels, when propelled or intended to be propelled by attachment to a motor vehicle, shall be classified as separate motor vehicle with no power rating.
          </Text>
          <Text style={bottomSpacingM}>
            (b) "Passenger automobiles" shall mean all pneumatic-tire vehicles of types similar to those usually known under the following terms: touring car, command car, speedster, sports car, roadster, jeep, cycle, car (except motor wheel and similar small outfits which are classified with motorcycles), coupe, landaulet, closed car, limousine, cabriolet, and sedan.
          </Text>
          <Text style={bottomSpacingM}>
            Motor vehicles with changed or rebuilt bodies, such as jeepneys, jitneys, or station wagons, using a chassis of the usual pneumatic-tire passenger automobile type, shall also be classified as passenger automobile, if their net allowable carrying capacity, as determined by the Commissioner of Land Transportation, does not exceed nine passengers and if they are not used primarily for carrying freight or merchandise.
          </Text>
          <Text style={bottomSpacingM}>
            The distinction between "passenger truck" and "passenger automobile" shall be that of common usage: Provided, That a motor vehicle registered for more than nine passengers shall be classified as "truck": And Provided, further, That a "truck with seating compartments at the back not used for hire shall be registered under special "S" classifications. In case of dispute, the Commissioner of Land Transportation shall determine the classification to which any special type of motor vehicle belongs.
          </Text>
          <Text style={bottomSpacingM}>
            (c) "Articulated vehicle" shall mean any motor vehicle with a trailer having no front axle and so attached that part of the trailer rests upon motor vehicle and a substantial part of the weight of the trailer and of its load is borne by the motor vehicle. Such a trailer shall be called as "semi-trailer."
          </Text>
          <Text style={bottomSpacingM}>
            (d) "Driver" shall mean every and any licensed operator of a motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            (d) "Driver" shall mean every and any licensed operator of a motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            (e) "Professional driver" shall mean every and any driver hired or paid for driving or operating a motor vehicle, whether for private use or for hire to the public.
          </Text>
          <Text style={bottomSpacingM}>
            Any person driving his own motor vehicle for hire is a professional driver.
          </Text>
          <Text style={bottomSpacingM}>
            (f) "Owner" shall mean the actual legal owner of a motor vehicle, in whose name such vehicle is duly registered with the Land Transportation Commission.
          </Text>
          <Text style={bottomSpacingM}>
            The "owner" of a government-owned motor vehicle is the head of the office or the chief of the Bureau to which the said motor vehicle belongs.
          </Text>
          <Text style={bottomSpacingM}>
            (g) "Dealer" shall mean every person, association, partnership, or corporation making, manufacturing, constructing, assembling, remodeling, rebuilding, or setting up motor vehicles; and every such entity acting as agent for the sale of one or more makes, styles, or kinds of motor vehicles, dealing in motor vehicles, keeping the same in stock or selling same or handling with a view to trading same.
          </Text>
          <Text style={bottomSpacingM}>
            (h) "Garage" shall mean any building in which two or more motor vehicles, either with or without drivers, are kept ready for hire to the public, but shall not include street stands, public service stations, or other public places designated by proper authority as parking spaces for motor vehicles for hire while awaiting or soliciting business.
          </Text>
          <Text style={bottomSpacingM}>
            (i) "Gross weight" shall mean the measured weight of a motor vehicle plus the maximum allowable carrying capacity in merchandise, freight and/or passenger, as determined by the Commissioner of Land Transportation.
          </Text>
          <Text style={bottomSpacingM}>
            (j) "Highways" shall mean every public thoroughfare, public boulevard, driveway, avenue, park, alley and callejon, but shall not include roadway upon grounds owned by private persons, colleges, universities, or other similar institutions.
          </Text>
          <Text style={bottomSpacingM}>
            (k) "The Commissioner of Land Transportation or his deputies" shall mean the actual or acting chief of the Land Transportation Commission or such representatives, deputies, or assistants as he may, with the approval of the Secretary of Public Works and Communications, appoint or designate in writing for the purpose contemplated by this Act.
          </Text>
          <Text style={bottomSpacingM}>
            (l) "Parking or parked", for the purposes of this Act, shall mean that a motor vehicle is "parked" or "parking" if it has been brought to a stop on the shoulder or proper edge of a highway, and remains inactive in that place or close thereto for an appreciable period of time. A motor vehicle which properly stops merely to discharge a passenger or to take in a waiting passenger, or to load or unload a small quantity of freight with reasonable dispatch shall not be considered as "parked", if the motor vehicle again moves away without delay.
          </Text>
          <Text style={bottomSpacingL}>
            (m) "Tourist" shall mean a foreigner who travels from place to place for pleasure or culture.
          </Text>
          <Text style={[b, textCenter]}>ARTICLE III</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Administration of Act</Text>
          <Text style={bottomSpacingM}>Creation of the Commission.</Text>
          <Text style={bottomSpacingM}>
            (a) There is created under the Department of Public Works and Communications an office which shall be designated and known as the Land Transportation Commission, composed of one Commissioner and one Deputy Commissioner, who shall be vested with the powers and duties hereafter specified. Whenever the word "Commission" is used in this Act, it shall be deemed to mean the Land Transportation Commission, and whenever the word "Commissioner" is used in this Act, it shall be taken to mean the Commissioner or Deputy Commissioner.
          </Text>
          <Text style={bottomSpacingM}>
            The Commissioner and the Deputy Commissioner shall be natural-born citizens and residents of the Philippines, and they shall be appointed by the President of the Philippines, with the consent of the Commission on Appointments of the Congress of the Philippines: Provided, however, That the present Administrator, Assistant Administrator and the personnel of the Motor Vehicles Office shall continue in office without the necessity of reappointment.
          </Text>
          <Text style={bottomSpacingM}>
            (b) The Commissioner and Deputy Commissioner shall hold office until removed in accordance with the provisions of the Revised Administrative Code.
          </Text>
          <Text style={bottomSpacingM}>
            (c) The Commissioner shall receive an annual compensation of twelve thousand pesos and the Deputy Commissioner, an annual compensation of ten thousand four hundred pesos. The Commissioner shall be assisted by one head executive assistant (MV regulation adviser or chief), one administrative officer, one registration regulation chief, one inspection, examination and licensing regulation chief, one law and traffic enforcement regulation chief, one provincial regulation chief, one utility and property regulation chief, one accounting officer, one internal chief auditor, and one personnel officer, who shall receive an annual compensation of nine thousand pesos each; eight land transportation regional directors who shall receive an annual compensation of eight thousand four hundred pesos each and eight land transportation assistant regional directors, who shall receive an annual compensation of seven thousand pesos each and ten assistant regulation chiefs, who shall receive an annual compensation of seven thousand pesos each.
          </Text>
          <Text style={bottomSpacingM}>
            (d) The Commission shall have its offices in Quezon City where the present Motor Vehicle Office is located, and shall establish a regional branch office each in Tuguegarao (Cagayan), Baguio City, Pasig (Rizal), Lipa City, San Fernando (La Union), Naga City, Cebu City, Iloilo City, Cagayan de Oro City, and Davao City, to be headed by a regional director who will have immediate administration, supervision and control over activities and administration of the Commission in the respective regions.
          </Text>
          <Text style={bottomSpacingL}>
            The Commissioner shall be responsible for the administration of this Act and shall have, in connection therewith, the following powers and duties, in addition to those mentioned elsewhere in this Act:
          </Text>
          <Text style={[b, textCenter]}>CHAPTER II</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>REGISTRATION OF MOTOR VEHICLES</Text>
          <Text style={[b, textCenter]}>ARTICLE I</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Duty to Register, Reports, Applications, Classifications</Text>
          <Text style={bottomSpacingM}>
            Section 5. All motor vehicles and other vehicles must be registered.
          </Text>
          <Text style={bottomSpacingM}>
            (a) No motor vehicle shall be used or operated on or upon any public highway of the Philippines unless the same is properly registered for the current year in accordance with the provisions of this Act.
          </Text>
          <Text style={bottomSpacingM}>
            (b) Any registration of motor vehicles not renewed on or before the date fixed for different classifications, as provided hereunder shall become delinquent and invalid:
          </Text>
          <Text style={bottomSpacingM}>
            1. For hire motor vehicles - on or before the last working day of February.
          </Text>
          <Text style={bottomSpacingM}>
            2. Privately-owned motor vehicles - from March one to the last working day of May.
          </Text>
          <Text style={bottomSpacingM}>
            3. All other motor vehicles - from June one to the last working day of June; except when the plates of such motor vehicles are returned to the Commission in Quezon City or to the Office of the Motor Vehicles Registrar in the provincial or city agency of the Commission on or before the last working day of December of the year of issue.
          </Text>
          <Text style={bottomSpacingM}>
            (c) Dealer's reports - The Commissioner of Land Transportation shall require dealers to furnish him with such information and reports concerning the sale, importation, manufacture, number of stocks, transfer or other transactions affecting motor vehicles as may be necessary for the effective enforcement of the provisions of this Act.
          </Text>
          <Text style={bottomSpacingM}>
            (d) Change of motor number prohibited. - No repair or change in the motor vehicle involving the exchange, elimination, effacing, or replacing of the original or registered serial or motor number as stamped or imprinted, shall be allowed, and any motor vehicle with a trace of having its motor number altered or tampered with shall be refused registration or re-registration, unless such is satisfactorily explained and approved by the Commissioner.
          </Text>
          <Text style={bottomSpacingM}>
            (e) Encumbrances of motor vehicles. - Mortgages, attachments, and other encumbrances of motor vehicles, in order to be valid, must be recorded in the Land Transportation Commission and must be properly recorded on the face of all outstanding copies of the certificates of registration of the vehicle concerned.
          </Text>
          <Text style={bottomSpacingM}>
            Cancellation or foreclosure of such mortgages, attachments, and other encumbrances shall likewise be recorded, and in the absence of such cancellation, no certificate of registration shall be issued without the corresponding notation of mortgage, attachment and/or other encumbrances.
          </Text>
          <Text style={bottomSpacingM}>
            Records of encumbrances of motor vehicles shall be kept by the Land Transportation Commission in chronological sequence and shall contain, among other things, the time, date and number of the entry in a "Book of Motor Vehicles" referring to the creation, cancellation or foreclosure of the aforesaid mortgages, attachments or to other encumbrances.
          </Text>
          <Text style={bottomSpacingM}>
            The Land Transportation Commission shall collect a fee of five pesos for every annotation of a mortgage, attachment and/or other encumbrances, or cancellation thereof.
          </Text>
          <Text style={bottomSpacingM}>
            Section 6. Application and payments for registration. - Applications and payments for registration shall be made either personally or by registered mail, and the date of the cancellation of the postage stamps of envelopes containing money order or check shall be taken as the date of the application and/or payment for registration: Provided, That the application is properly prepared and the payment for registration is sufficient as required by law.
          </Text>
          <Text style={bottomSpacingM}>
            Section 7. Registration Classification. - Every motor vehicle shall be registered under one of the following described classifications:
          </Text>
          <Text style={bottomSpacingM}>
            (a) private passenger automobiles; (b) private trucks; and (c) private motorcycles, scooters, or motor wheel attachments. Motor vehicles registered under these classifications shall not be used for hire under any circumstances and shall not be used to solicit, accept, or be used to transport passengers or freight for pay.
          </Text>
          <Text style={bottomSpacingM}>
            Laborers necessary to handle freight on board private trucks may ride on such trucks: Provided, That seats shall not be installed in the rear compartment thereof and that only such number of laborers, not exceeding ten, as may be needed to handle the kind of freight carried, shall ride on the truck: Provided, further, That the combined weight of cargo and passengers does not exceed the registered net capacity of the truck.
          </Text>
          <Text style={bottomSpacingM}>
            For the purpose of this section, a vehicle habitually used to carry freight not belonging to the registered owner thereof, or passengers not related by consanguinity or affinity within the fourth civil degree to such owner, shall be conclusively presumed to be "for hire."
          </Text>
          <Text style={bottomSpacingM}>
            No person shall be allowed to register as private truck any truck not actually and reasonably necessary to carry out his duly licensed business or legitimate occupation or industry regularly paying taxes.
          </Text>
          <Text style={bottomSpacingM}>
            (d) Public utility automobiles; e) public utility trucks; (f) taxis and auto-calesas; (g) garage automobiles; (h) garage trucks; (i) hire trucks: and (j) trucks owned by contractors and customs brokers and customs agents. Application for registration under these classifications shall be accompanied by a certificate of public convenience or a special permit issued by the Public Service Commission, and motor vehicles registered under these classifications shall be subject to the Public Service Law, rules and regulations, as well as the provisions of this Act.
          </Text>
          <Text style={bottomSpacingM}>
            (k) Undertakes
          </Text>
          <Text style={bottomSpacingM}>
            (l) Dealers - Registrations under this classification are intended to cover generally and successively all the motor vehicles imported or handled by dealers for sale. Motor vehicles registered under the dealer's classification shall, under no circumstances, be employed to carry passengers or freight in the dealer's business, or for hire. Such vehicles shall be operated under this classification only for the purpose of transporting the vehicle itself from the pier or factory to the warehouse or sales room or for delivery to a prospective purchaser or for test or demonstration.
          </Text>
          <Text style={bottomSpacingM}>
            (m) Government automobiles; (n) government trucks; and (o) government motorcycles. Motor vehicles owned by the Government of the Philippines or any of its political subdivisions shall be registered under these classifications. Motor vehicles owned by government corporations, by government employees or by foreign governments shall not be registered under this classification.
          </Text>
          <Text style={bottomSpacingM}>
            (p) Tourists bringing their own motor vehicles to the Philippines may, without registering such motor vehicles, use the same during but not after ninety days of their sojourn: Provided, That the motor vehicle displays the number plates for the current year of some other country or state, and said number plates as well as the name and address (permanent and temporary) of the owner thereof are registered in the Land Transportation Commission prior to the operation of the motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            If such tourist remain in the Philippines longer than ninety days, the motor vehicle shall not be operated unless registered in accordance with this Act and the corresponding registration fees paid.
          </Text>
          <Text style={bottomSpacingL}>
            (q) Special. The Commissioner of Land Transportation may, in his discretion, allow the registration under this classification of motor vehicles which do not conform to the foregoing described regular classification.
          </Text>
          <Text style={[b, textCenter]}>ARTICLE II</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Registration Fees</Text>
          <Text style={bottomSpacingM}>
            Section 8. Schedule of registration fees. - Except as otherwise specifically provided in this Act, each application for renewal of registration of motor vehicles shall be accompanied by an annual registration fee in accordance with the following schedule:
          </Text>
          <Text style={bottomSpacingM}>
            (a) Private automobiles with pneumatic rubber tires, an amount based on their respective shipping weight or factory weight as indicated in the following schedule:
          </Text>
          <Text style={bottomSpacingM}>
            1,000 kilos or less P75.00
          </Text>
          <Text style={bottomSpacingM}>
            1,000 to 1,500 kilos 100.00
          </Text>
          <Text style={bottomSpacingM}>
            1,501 to 2,000 kilos 135.00
          </Text>
          <Text style={bottomSpacingM}>
            2,001 kilos and above 180.00
          </Text>
          <Text style={bottomSpacingM}>
            The factory or shipping weight of a private automobile shall be obtained from the Red Book edited by the National Market Report, Inc., of the United States of America: Provided, further, That in the case of automobiles with altered, changed or rebuilt bodies, the weight as obtained: by actual weighing shall be considered the vehicles weight: Provided, furthermore, That the increase registration fees herein prescribed shall not apply to jeeps and jeepneys for private use or for hire and the fees hereof shall be those prescribed for them before the approval of this Act.
          </Text>
          <Text style={bottomSpacingM}>
            The registered passenger capacity of passenger automobiles operated for hire or for private use shall be determined as follows:
          </Text>
          <Text style={bottomSpacingM}>
            1. For each adult passenger, a horizontal rectangular area, including seat and feet space, not less than thirty-five centimeters wide and sixty centimeters long, except in the front seat, which shall allow an area fifty centimeters wide for the operator.
          </Text>
          <Text style={bottomSpacingM}>
            2. For each half passenger, a horizontal rectangular area, including seat and feet spaces, not less that seventeen and a half centimeters wide by sixty centimeters long, provided, that each continuous row of seats shall not be allowed to have more that one-half passenger.
          </Text>
          <Text style={bottomSpacingM}>
            (b) Private motor trucks, passenger buses and trailers with pneumatic rubber tires, the sum of five pesos for every hundred kilograms of maximum allowable gross weight or fraction thereof.
          </Text>
          <Text style={bottomSpacingM}>
            (c) Private motor trucks, passenger buses and trailers with solid rubber tires or with part-solid and part-pneumatic rubber tires, the sum of seven pesos for every hundred kilograms of maximum allowable gross weight or fraction thereof.
          </Text>
          <Text style={bottomSpacingM}>
            (d) Private motorcycles and scooters of two or three wheels and bicycles with motor attachments, the sum of thirty pesos.
          </Text>
          <Text style={bottomSpacingM}>
            (e) The fee for registration of motor vehicles for hire shall be sixty percent more than the fee prescribed for private motor vehicles of the same category.
          </Text>
          <Text style={bottomSpacingM}>
            (f) The fee for registration of diesel-consuming vehicles shall be fifty percent more than that of vehicles using motor fuel other than diesel oil. The fee for registration of motor vehicles for hire shall be sixty percent more than the fees prescribed for private motor vehicles.
          </Text>
          <Text style={bottomSpacingM}>
            (g) No regular registration fees shall be charged for the general registration of motor vehicles contemplated under the dealer's classification: Provided, That the Commissioner of Land Transportation shall provide appropriate dealer's number plates corresponding to the classification of vehicles hereinbelow described, and registration fee for every set of such dealer's number plates shall be in accordance with the following schedule of rates;
          </Text>
          <Text style={bottomSpacingM}>
            Two hundred pesos for each truck or trailer;
          </Text>
          <Text style={bottomSpacingM}>
            One hundred pesos for each passenger automobile; and
          </Text>
          <Text style={bottomSpacingM}>
            Twenty pesos for each motorcycle and the like.
          </Text>
          <Text style={bottomSpacingM}>
            (h) Registration under the "Government Motor Vehicle" classification shall be free of charge, upon request of the chief of bureau or office concerned.
          </Text>
          <Text style={bottomSpacingM}>
            (i) Motor vehicles not intended to be operated or used upon any public highway, or which are operated on highways not constructed or maintained by the Government, or are intended not to be used or operated at all, shall be exempt from payment of the registration fees provided in this Act, but shall each pay an annual recording and service fee of fifteen pesos: Provided, however, That no refund, credit for, or reimbursement of registration fees or part thereof shall be made to any owner on account of the discontinuance of the use or operation of a motor vehicle subsequent to the payment of such registration fees: Provided, further, That in the event motor vehicles exempted under this section shall be found operated on any public highways, the regular registration fees and surcharges shall be collected in addition to whatever penalties may be imposed for violation of this Act. The Commissioner of Land Transportation shall provide distinctive number plates for vehicles exempted from payment of regular registration fees, and the owner of the vehicles concerned shall pay four pesos for each set of such number plates.
          </Text>
          <Text style={bottomSpacingM}>
            (j) The maximum allowable gross weight of a motor truck, passenger bus, or trailer, upon which to compute the registration fee thereof, shall be determined by the Commissioner of Land Transportation. He shall, from time to time as the need of the service may require, prepare, subject to the approval of the Secretary of Public Works and Communications, suitable tables of maximum allowable loads per wheel for different sizes kinds of tires.
          </Text>
          <Text style={bottomSpacingM}>
            (k) The registration fees provided in this Act for trucks may be payable in two equal installment, the first to be paid on or before the last working day of February if for hire, and in March if private; and the second to be paid on or before the last working day of August: Provided, That the fifty per cent penalty shall apply only to the unpaid balance of the remaining period of delinquency.
          </Text>
          <Text style={bottomSpacingM}>
            Section 9. Permissible weights and dimensions of vehicles in highways traffic.
          </Text>
          <Text style={bottomSpacingM}>
            (a) The maximum gross weight and measurement of motor vehicles, unladen or with load, permissible on public highways shall be as specified hereunder, subject to such regulations as the Commissioner with the approval of the Secretary of Public Works and Communications, may promulgate, from time to time, as the conditions of the public highways may warrant and the needs of the service may require.
          </Text>
          <Text style={bottomSpacingM}>
            Permissible maximum weights:
          </Text>
          <Text style={bottomSpacingM}>
            1. Per most heavily loaded wheel	three thousand six hundred kilograms;
          </Text>
          <Text style={bottomSpacingM}>
            2. Per most heavily loaded axle	eight thousand kilograms;
          </Text>
          <Text style={bottomSpacingM}>
            3. Per most heavily loaded axle group (the two axles of the group being at least one meter and less than two meters apart)	fourteen thousand five hundred kilograms.
          </Text>
          <Text style={bottomSpacingM}>
            An axle weight shall be the total weight transmitted to the road by all the wheels the centers of which can be included between the parallel transverse vertical planes one meter apart extending across the full width of the vehicles.
          </Text>
          <Text style={bottomSpacingM}>
            No provincial, city or municipal authority shall enact or enforce any ordinance or resolution regulating or prescribing the maximum gross weight of any motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            (b) No motor vehicle operating as a single unit shall exceed the following dimensions:
          </Text>
          <Text style={bottomSpacingM}>
            Overall width two and five-tenths meters
          </Text>
          <Text style={bottomSpacingM}>
            Overall height four meters
          </Text>
          <Text style={bottomSpacingM}>
            Overall length:
          </Text>
          <Text style={bottomSpacingM}>
            Freight vehicles with two axles ten meters
          </Text>
          <Text style={bottomSpacingM}>
            Passenger vehicles with two axles eleven meters
          </Text>
          <Text style={bottomSpacingM}>
            Vehicles with three or more axles fourteen meters
          </Text>
          <Text style={bottomSpacingM}>
            (c) No motor vehicle and/or trailer combination shall exceed eighteen meters in overall projected length, including any load carried on such vehicle and trailer.
          </Text>
          <Text style={bottomSpacingM}>
            (d) No articulated vehicles shall be allowed to draw or pull a trailer and no vehicle already drawing a trailer shall draw another.
          </Text>
          <Text style={bottomSpacingM}>
            Section 10. Special permits, fees for. - The Commissioner with the approval of the Secretary of Public Works and Communications, shall issue regulations and schedules of additional fees under which special permits may be issued in the discretion of the Commissioner or his deputies for each of the following special cases, without which special permit no vehicles shall be operated on the public highways:
          </Text>
          <Text style={bottomSpacingM}>
            (a) To operate a motor vehicle or trailer outfit with wheel, axle, or axle group loads in excess of the limits fixed in subsection (a) of Section nine hereof or in any regulation issued by the Commissioner.
          </Text>
          <Text style={bottomSpacingM}>
            (b) To operate a motor vehicle the size of which exceeds the limit of permissible dimensions specified in paragraph (b) of Section nine hereof.
          </Text>
          <Text style={bottomSpacingM}>
            (c) To operate a motor vehicle with any part of the load extending beyond the projected width of the vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            (d) To pull two trailers behind a motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            (e) For any other special authority relating to the use of vehicles, not otherwise specifically provided herein.
          </Text>
          <Text style={bottomSpacingM}>
            Section 11. Additional fees. - In addition to the fees elsewhere provided in this Act, for each change of registration, from private to for hire or vice-versa; revision of gross weight rating, change of tire size; transfer of ownership; replacement of a lost registration certificate, number plate, driver's license or permit; badge; preparation of affidavit or certified copy of records, or for any similar circumstances requiring the issue, revision, or reissue of a certificate of registration, driver's license, badge, permit, or other document, a fee of two pesos shall be collected.
          </Text>
          <Text style={bottomSpacingM}>
            The replacement of a lost or utterly spoiled certificate, number plate, license, badge or permit shall render the original invalid.
          </Text>
          <Text style={bottomSpacingM}>
            In case of request in writing for certification of data or facts involving two or more vehicles, a fee of five pesos a page or part thereof shall be collected for each certification.
          </Text>
          <Text style={bottomSpacingM}>
            Section 12. Fee for original registration for part of year. - If any application for the original registration is made during the first quarter of a calendar year, the total annual fee for the year shall be paid, if made during the second quarter, three-fourths of the annual fee for that year shall be paid, if made during the third quarter, one half of the annual fee shall be paid, and if made during the fourth quarter, one-fourth of the annual fee shall be paid.
          </Text>
          <Text style={bottomSpacingM}>
            Nothing in this section shall be construed as allowing quarterly renewals of registrations in order to avoid payment of fees in advance for the entire year.
          </Text>
          <Text style={bottomSpacingM}>
            Section 13. Payment of taxes upon registration. - No original registration of motor vehicles subject to payment of taxes, customs duties or other charges shall be accepted unless proof of payment of the taxes due thereon has been presented to the Commission.
          </Text>
          <Text style={[b, textCenter]}>ARTICLE III</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Registration Certificates, Records, Number Plates</Text>
          <Text style={bottomSpacingM}>
            Section 14. Issuance of certificates of registration. - A properly numbered certificate of registration shall be issued for each separate motor vehicle after due inspection and payment of corresponding registration fees.
          </Text>
          <Text style={bottomSpacingM}>
            Section 15. Use and authority of certificate of registration.
          </Text>
          <Text style={bottomSpacingM}>
            (a) The said certificate shall be preserved and carried in the car by the owner as evidence of the registration of the motor vehicle described therein, and shall be presented with subsequent applications for re-registration, transfer of ownership, or recording of encumbrances: Provided, That in lieu of the certificate of registration a true copy or photostat thereof may be carried in the motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            (b) The certificate of registration issued under the provisions of this Act for any motor vehicle shall, while the same is valid and effective and has not been suspended or revoked, be the authority for the operation of such motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            (c) No motor vehicle shall be operated on the public highways in a manner which would place it under a classification requiring the payment of a larger registration fee than that stated in the certificate of registration.
          </Text>
          <Text style={bottomSpacingM}>
            Section 16. Suspension of registration certificate. - If on inspection, as provided in paragraph (6) of Section four hereof, any motor vehicle is found to be unsightly, unsafe, overloaded, improperly marked or equipped, or otherwise unfit to be operated, or capable of causing excessive damage to the highways, or not conforming to minimum standards and specifications, the Commissioner may refuse to register the said motor vehicle, or if already registered, may require the number plates thereof to be surrendered to him, and upon seventy-two hours notice to the owner of the motor vehicle, suspend such registration until the defects of the vehicle are corrected and/or the minimum standards and specifications fully complied with.
          </Text>
          <Text style={bottomSpacingM}>
            Whenever it shall appear from the records of the Commission that during any twelve-month period more than three warnings for violations of this Act have been given to the owner of a motor vehicle, or that the said owner has been convicted by a competent court more than once for violation of such laws, the Commissioner may, in his discretion, suspend the certificate of registration for a period not exceeding ninety days and, thereupon, shall require the immediate surrender of the number plates.
          </Text>
          <Text style={bottomSpacingM}>
            Whenever a motor vehicle is found to be underweight the owner thereof shall pay the difference in the registration fees corresponding to the shortage in weight plus a fifty per cent surcharge, and until such payment is made, the certificate of registration of the motor vehicle concerned shall be suspended by the Commissioner.
          </Text>
          <Text style={bottomSpacingM}>
            After two such suspension, re-registration of the vehicle concerned for one year may be denied.
          </Text>
          <Text style={bottomSpacingM}>
            The Commissioner shall notify the owner of the motor vehicle of any action taken by him under this section.
          </Text>
          <Text style={bottomSpacingM}>
            Section 17. Number plates, preparation, preparation and issuance of . -
          </Text>
          <Text style={bottomSpacingM}>
            (a) The Commissioner shall cause number plates to be prepared and issued to owners of motor vehicles and trailers registered under this Act, charging a fee of four pesos for each pair including the numerals indicating the year of registry: Provided, however, That in case no number plates are available, the Commissioner or his deputies may issue, without charge, a written permit temporarily authorizing the operation of any motor vehicles with other means of identification: Provided, further, That all motor vehicles exempted from payment of registration fees, motor vehicles for hire, and privately-owned motor vehicles shall bear plates so designed and painted with different colors to distinguish one class from another: Provided, furthermore, That the plates of motor vehicles exempted from payment of registration fees shall be permanently assigned to such motor vehicles during their entire lifetime while exempted from payment of the fees: And, provided, finally, That the owner thereof shall return such plates to the Land Transportation Commission within a period of seven working days after such owner has lost his exemption privilege or has transferred the vehicle to a non-exempt owner.
          </Text>
          <Text style={bottomSpacingM}>
            (b) In case the design of the number plate is such that the numerals indicating the year of registry are on a detachable tag, the Commissioner or his deputies may, in their discretion, issue the said tag only for subsequent re-registration charging a fee of one peso for each tag issued.
          </Text>
          <Text style={bottomSpacingM}>
            Section 18. Use of number plates. - At all times, every motor vehicle shall display in conspicuous places, one in front and one in the rear thereof, the said number plates.
          </Text>
          <Text style={bottomSpacingM}>
            The number plates shall be kept clean and cared for, and shall be firmly affixed to the motor vehicle in such a manner as will make it entirely visible and always legible.
          </Text>
          <Text style={bottomSpacingM}>
            Except in the case of dealer's number plates which may be used successively on various motor vehicles in stock, no person shall transfer number plates from motor vehicle to another.
          </Text>
          <Text style={bottomSpacingL}>
            No dealer's number plate shall be used on any motor vehicle after said vehicle has been sold and delivered to a purchaser, and no dealer shall allow such dealer's number plates to be used on any motor vehicle after its sale and delivery to a purchaser.
          </Text>
          <Text style={[b, textCenter]}>CHAPTER III</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>OPERATION OF MOTOR VEHICLE</Text>
          <Text style={[b, textCenter]}>ARTICLE I</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>License to Drive Motor Vehicles</Text>
          <Text style={bottomSpacingM}>
            Section 19. Duty to procure license. - Except as otherwise specifically provided in this Act, no person shall operate any motor vehicle without first procuring a license to drive a motor vehicle for the current year, nor while such license is delinquent, invalid, suspended or revoked.
          </Text>
          <Text style={bottomSpacingM}>
            The license shall be carried by the driver at all times when operating a motor vehicle, and shall be shown and/or surrendered for cause and upon demand to any person with authority under this Act to confiscate the same.
          </Text>
          <Text style={bottomSpacingM}>
            Section 20. License for enlisted men operating Government motor vehicles. - Enlisted men operating a motor vehicle owned by the Government of the Philippines shall be licensed in accordance with the provisions of this Act, but no license or delinquency fees shall be collected therefrom. All licenses so issued shall bear the words "For Government Vehicles Only" plainly marked or stamped in red ink across the face thereof.
          </Text>
          <Text style={bottomSpacingM}>
            A license so marked or stamped shall authorize the holder thereof to operate a private-owned motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            Section 21. Operation of motor vehicles by tourists. - Bona fide tourist and similar transients who are duly licensed to operate motor vehicles in their respective countries may be allowed to operate motor vehicles during but not after ninety days of their sojourn in the Philippines.
          </Text>
          <Text style={bottomSpacingM}>
            If any accident involving such tourist or transient occurs, which upon investigation by the Commissioner or his deputies indicates that the said tourist or transient is incompetent to operate motor vehicles, the Commissioner shall immediately inform the said tourist or transient in writing that he shall no longer be permitted to operate a motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            After ninety days, any tourist or transient desiring to operate motor vehicles shall pay fees and obtain and carry a license as hereinafter provided.
          </Text>
          <Text style={bottomSpacingM}>
            Section 22. Driver's license, fees, examination. - Every person who desires personally to operate any motor vehicle shall file an application to the Commissioner or his deputies for a license to drive motor vehicles: Provided, however, That no person shall be issued a professional driver's license who is suffering from highly contagious diseases, such as, advanced tuberculosis, gonorrhea, syphilis, and the like.
          </Text>
          <Text style={bottomSpacingM}>
            Each such application except in the case of enlisted men operating government-owned vehicles, shall be accompanied by a fee of five pesos, and shall contain such information respecting the applicant and his ability to operate motor vehicles, as may be required by the Commission.
          </Text>
          <Text style={bottomSpacingM}>
            The Commissioner or his deputies shall also ascertain that the applicant's sight and hearing are normal, and may in their discretion, require a certificate to that effect, signed by a reputable physician.
          </Text>
          <Text style={bottomSpacingM}>
            An examination or demonstration to show any applicant's ability to operate motor vehicles may also be required in the discretion of the Commissioner or his deputies.
          </Text>
          <Text style={bottomSpacingM}>
            Section 23. Issuance of driver's license. - If, after such examination, the Commissioner or his deputy believes that the applicant possesses the necessary qualifications and is proficient in the operation of motor vehicles, a license shall be issued to such applicant upon payment of five pesos, but prior to the issuance of said license, the applicant shall furnish three copies of his recent photograph to be securely attached to the license, and two copies to be filed and kept as provided by this Act. All driver's licenses shall bear the signature and right-hand thumb print of the licensee.
          </Text>
          <Text style={bottomSpacingM}>
            Section 24. Use of driver's license and badge. - Every license issued under the provisions of this Act to any driver shall entitle the holder thereof, while the same is valid and effective and not suspended or revoked, to operate the motor vehicles described in such license: Provided, however, That every licensed professional driver, before operating a public service motor vehicle registered under classifications (d) to (j) inclusive of Section seven hereof, shall secure from the Commissioner, upon payment of the sum of one peso, a driver's badge which he shall, at all times while so operating a motor vehicle, display in plain sight on the band of his cap or on his coat or shirt. Such driver's badge shall be of metal with a plainly readable number assigned to the licensee stamped thereon.
          </Text>
          <Text style={bottomSpacingM}>
            It shall be unlawful for any duly licensed driver to transfer, lend or otherwise allow any person to use his license for the purpose of enabling such person to operate a motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            No owner of a motor vehicle shall engage, employ, or hire any person to operate such motor vehicle, unless the person sought to be employed is a duly licensed professional driver.
          </Text>
          <Text style={bottomSpacingM}>
            Section 25. Driver's records. - Any driver who changes his address shall, within fifteen days, notify the Commissioner in writing of his new address, name and address of his new employer, the number of the motor vehicle he is employed to operate, and such other information as the Commissioner may require.
          </Text>
          <Text style={bottomSpacingM}>
            Section 26. Renewal of license. - Any license not renewed on or before the last working day of the month when the applicant was born shall become delinquent and invalid, except when the license is surrendered to the Commissioner or his deputies before the last working day of the month of his birth in order to avoid payment of the delinquency fees.
          </Text>
          <Text style={bottomSpacingM}>
            The fee for renewal of delinquent license shall be five pesos in addition to the basic fee as hereinabove prescribed.
          </Text>
          <Text style={bottomSpacingM}>
            Every applicant for renewal of license to operate any motor vehicle shall present to the Commissioner, in person or by mail or messenger, the license issued to the applicant for the previous year, together with the proper fee of five pesos and, in the case of professional chauffeurs, three copies of a readily-recognized photograph of the applicant, which photograph shall have been taken not exceeding three years prior to the date of applicant for renewal.
          </Text>
          <Text style={bottomSpacingM}>
            Lost license. - In case the license for the previous year has been lost or cannot be produced, the applicant shall obtain a duplicate in accord with Section eleven of this Act, on penalty of refusal, by the Commissioner or his deputies, to renew the license: Provided, however, That the Commissioner or his deputies may, in their discretion accept in lieu of the previous years license, the duly signed and sworn statement of an operator to the effect that he has not operated any motor vehicle in the Philippines during the year or years to which no license was issued in his name.
          </Text>
          <Text style={bottomSpacingM}>
            The Commissioner and his deputies are hereby authorized to administer the oath in connection with such affidavit.
          </Text>
          <Text style={bottomSpacingM}>
            Section 27. Suspension, revocation of driver's license.
          </Text>
          <Text style={bottomSpacingM}>
            (a) The Commissioner may suspend for a period not exceeding three months or, after hearing, revoke any driver's license issued under the provisions of this Act, and may order any such license to be delivered to him whenever he has reason to believe that the holder thereof is an improper person to operate motor vehicles, or in operating or using a motor vehicle in, or as an accessory to, the commission of any crime or act which endangers the public. Any deputy of the Commissioner may, for the same cause, suspend for a period not exceeding three months any driver's license issued under the provisions of this Act: Provided, That such suspension may be appealed to the Commissioner who may, after reviewing the case, confirm, reverse or modify the action taken by such deputy.
          </Text>
          <Text style={bottomSpacingM}>
            (b) Whenever during any twelve-month period a driver shall have been convicted at least three times for the violations of any provisions of this Act or of any regulation issued by the Commissioner or any municipal or city ordinance relating to motor vehicle traffic not in conflict with any of the provisions of this Act, the Commissioner may, in his discretion, revoke or suspend the license of such driver for a period not exceeding two years.
          </Text>
          <Text style={bottomSpacingM}>
            (c) The license suspended or revoked under the provisions of subsections (a) and (b) of this section shall not be reinstated unless the driver has furnished a bond in accordance with Section twenty-nine of this Act and only after the Commissioner has satisfied himself that such driver may again safely be permitted to operate a motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            (d) A decision of the Commissioner revoking or refusing the reinstatement of a license under the provisions of this Section may be appealed to the Secretary of Public Works and Communications.
          </Text>
          <Text style={bottomSpacingM}>
            Section 28. Driver's bond. - The Commissioner before reinstating any driver's license which has been suspended or revoked under the provisions of the preceding section or of any provisions of this Act, may require such driver to post a bond in the sum of one thousand pesos conditioned upon the satisfaction and payment of any claim which may be filed or of any execution which may be issued against such driver in any case wherein said driver may be held answerable while operating motor vehicles. The bond required in this section shall be in such form as to render sureties liable at least for a period of not less than one year nor more than three years: Provided, however, That upon written application to the Commissioner for release from such a bond, the Commissioner may after revoking or suspending the driver's license, authorize the release of the bondsmen from further responsibility thereunder: Provided, further, That should the Commissioner decide not to revoke the license of a driver who has been convicted of homicide through reckless imprudence, or of the violation of the speed limit or of reckless driving at least three times within a twelve-month period, the said driver shall post a bond in the sum of not less than two thousand pesos, conditioned upon the payment of any claim which may be filed or any execution which may be issued against him in any case wherein said driver may be held answerable while operating motor vehicles.
          </Text>
          <Text style={bottomSpacingM}>
            Section 29. Confiscation of driver's licenses. - Law enforcement and peace officers duly designated by the Commissioner shall, in apprehending any driver for violations of this Act or of any regulations issued pursuant thereto, or of local traffic rules and regulations, confiscate the license of the driver concerned and issue a receipt prescribed and issued by the Commission therefor which shall authorize the driver to operate a motor vehicle for a period not exceeding seventy-two hours from the time and date of issue of said receipt. The period so fixed in the receipt shall not be extended, and shall become invalid thereafter. Failure of the driver to settle his case within fifteen days from the date of apprehension will cause suspension and revocation of his license.
          </Text>
          <Text style={bottomSpacingM}>
            Section 30. Student-driver's permit. - Upon proper application and the payment of three pesos, the Commissioner or his deputy may issue student-driver's permits, valid for six months to persons not under eighteen years of age, who desire to learn to operate motor vehicles. No application for driver's license shall be received unless the applicant has undergone instruction in the operation of motor vehicles for at least a month and has a valid student-driver's permit: Provided, however, That any person who has a license to operate vehicles in other countries may, upon presentation of appropriate evidence of such license, be allowed to pay for a driver's license without presenting a student driver's permit.
          </Text>
          <Text style={bottomSpacingM}>
            A student driver who fails in the examination shall continue as a student driver for at least one additional month. No student driver shall operate a motor vehicle unless accompanied by a duly licensed driver.
          </Text>
          <Text style={bottomSpacingL}>
            The licensed driver acting as instructor to the student driver shall likewise be responsible and liable for any violation of the provisions of this Act and for any injury or damage done by the motor vehicle on account or as a result of its operation by a student under his direction.
          </Text>
          <Text style={[b, textCenter]}>ARTICLE II</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Illegal Use of Licenses, Number Plates, Etc.</Text>
          <Text style={bottomSpacingM}>
            Section 31. Imitation and false representations. - No person shall make or use attempt to make or use a driver's license, badge, certificate of registration, number plate, tag, or permit in imitation or similitude of those issued under this Act, or intended to be used as or for a legal license, badge, certificate, plate, tag or permit, or with intent to sell or otherwise dispose of the same to another. No person shall falsely or fraudulently represent as valid and in force any driver's license, badge, certificate, plate, tag or permit issued under this Act which is delinquent or which has been revoked or suspended.
          </Text>
          <Text style={bottomSpacingL}>
            No person shall, knowingly and with intent to deceive, make one or more false or fraudulent statements in an application for the registration of vehicles, or for a driver's license.
          </Text>
          <Text style={[b, textCenter]}>ARTICLE III</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Passenger and Freight</Text>
          <Text style={bottomSpacingM}>
            Section 32. Exceeding registered capacity. - No person operating any vehicle shall allow more passenger or more freight or cargo in his vehicle than its registered carrying capacity. In the case of public utility trucks or buses, the conductor shall be exclusively liable for violations of this section or of Section thirty-two, letter (c) hereof: Provided, That the conductor, before being employed by any public service operator, shall get a permit or license from the Commission and pay five pesos annually for said license or permit issued in his favor, and the same is renewable on or before the last working day of the month of his birth, attaching a readily recognizable photograph and after presentation of a medical certificate of fitness of applicant.
          </Text>
          <Text style={bottomSpacingM}>
            Passenger trucks may be allowed to construct any cargo carrying device at the rear or at the side of the truck, subject to the approval of the Commissioner: Provided, however, That the total weight of the device, including the cargo, shall not exceed one hundred kilos.
          </Text>
          <Text style={bottomSpacingM}>
            (b) Carrying of passengers and freight on top of vehicles. - No person operating a motor vehicle shall allow any passenger to ride on the cover or top of such vehicles: Provided, however, That subject to such conditions as may be contained in permits that may be issued by the Commissioner, baggage or freight may be carried on the top of a truck provided the weight thereof does not exceed twenty kilos per square meter and is distributed in such a manner as not to endanger the passengers or stability of the truck.
          </Text>
          <Text style={bottomSpacingM}>
            (c) Riding on running boards. - No driver shall permit any person to ride on the running board, step board, or mudguard of his motor vehicle for any purpose except to make repair or adjustment in the motor or to collect fares.
          </Text>
          <Text style={bottomSpacingM}>
            Section 33. Passenger or freight capacity marked on vehicle. - All passengers automobiles for hire shall have the registered passenger capacity plainly and conspicuously marked on both sides thereof, in letters and numerals not less than five centimeters in height.
          </Text>
          <Text style={bottomSpacingL}>
            All motor trucks, whether for passenger or freight, private, or for hire, shall have the registered passenger gross and net weight capacities plainly and conspicuously marked on both sides thereof, in letters and numerals not less than five centimeters in height.
          </Text>
          <Text style={[b, textCenter]}>ARTICLE IV</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Accessories of Motor Vehicles</Text>
          <Text style={bottomSpacingM}>
            Section 34.
          </Text>
          <Text style={bottomSpacingM}>
            (a) Tires of motor vehicles. - No motor vehicle with metallic tires shall be operated upon any public highway, and solid tires whenever used shall be of sufficient thickness to prevent the metal rims thereof from coming in direct contact with the road.
          </Text>
          <Text style={bottomSpacingM}>
            (b) Brakes - Every motor vehicle with four or more wheels shall be provided with dual hydraulic brake system so that in case of hydraulic line failure affecting the braking efficiency of any of the four wheels at least either the front or rear wheels shall retain normal braking capabilities. In the absence of such dual braking system every motor vehicle with four or more wheels shall be provided with safety valve devices of such design and make so that failure of the hydraulic braking system of the vehicle because of leakage in the line of other parts of the system will not affect all wheels but rather render at all times effective the braking power of either the two front wheels or the two rear wheels when brakes are applied. This requirement, however, does not apply to motor vehicles equipped with pneumatic braking system.
          </Text>
          <Text style={bottomSpacingM}>
            (b-1) Horns. - Every motor vehicle shall be provided with a horn or signalling devise in good working order: Provided, however, That no horn or signalling device emitting an exceptionally loud, startling, or disagreeable sound shall be installed or used on any motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            All authorized emergency vehicles, such as ambulance and police cars and fire wagons used for emergency calls shall be equipped with a bell, siren, or exhaust whistle of a type approved by the Commissioner, and no such device shall be installed or used in any other vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            No vehicle not classified as a motor vehicle under this Act shall be equipped with a horn or signaling device similar to the horn customarily used on motor vehicles.
          </Text>
          <Text style={bottomSpacingM}>
            (c) Headlights. - Every motor vehicle of more than one meter of projected width, while in use on any public highway shall bear two headlights, one on each side, with white or yellowish light visible from the front, which, not later than one-half hour after sunset and until at least one-half four before sunrise and whenever weather conditions so require, shall both be lighted.
          </Text>
          <Text style={bottomSpacingM}>
            Additional lamps and light may be carried, but no red lights shall be visible forward or ahead of the vehicle. Trucks, buses, trailers, and other similar vehicles must carry, while in use on any public highway during night-time, colored riding lights on each of the four corners not more than ten centimeters from the top.
          </Text>
          <Text style={bottomSpacingM}>
            All motor vehicles shall be equipped with devices for varying the intensity of light, and the driver must dim the headlights or tilt the beams downward whenever the vehicle is being operated on well-lighted streets within the limits of cities, municipalities, and thickly populated barrios or districts, or whenever such vehicle meets another vehicle on any public highway.
          </Text>
          <Text style={bottomSpacingM}>
            (d) Taillights. - Every motor vehicle and trailer shall, during the above-mentioned hours, also bear on each side in the rear a lamp showing a red light visible at least one hundred meters from the rear of the vehicle and a lamp throwing a white light upon the number plate issued for such vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            (e) Stop lights. - Every motor vehicle shall be equipped at the rear with at least one lamp which shall throw a sustained bright red light visible under all conditions, even under bright sunlight, when the brakes are applied. Each bus, truck, trailer or similar vehicle shall be equipped, as its stop light at or near its rear center, with a lamp at least twelve centimeters in diameter with the word "stop" inscribed in the center.
          </Text>
          <Text style={bottomSpacingM}>
            (f) Motorcycle and other vehicle lights. - Every motor vehicle of less than one meter of projected width shall be subject to the preceding provisions of this section, except that one headlight and one taillight shall be required. No signal light shall be necessary.
          </Text>
          <Text style={bottomSpacingM}>
            Additional lamps may be carried provided they comply with the preceding provisions of this section.
          </Text>
          <Text style={bottomSpacingM}>
            Every motor vehicle, or whatever style, kind, make, character, or nature, when upon a highway during the hours above-mentioned, whether in motion or not, shall have one or more lights so arranged that the same shall be visible at least fifty meters from the front and the rear of such vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            (g) Lights when parked or disabled. - Appropriate parking lights or flares visible one hundred meters away shall be displayed at a corner of the vehicle whenever such vehicle is parked on highways or in places that are not well-lighted or is placed in such manner as to endanger passing traffic.
          </Text>
          <Text style={bottomSpacingM}>
            (h) Windshield wiper. - Every motor vehicle shall be equipped with a mechanically or electrically operated device for wiping off raindrops or other moisture from its front windshield.
          </Text>
          <Text style={bottomSpacingM}>
            (i) Use of red flag. - Whenever the load of any vehicle extends more than one meter beyond the bed or body thereof, there shall be displayed at every projecting end of such load a red flag not less than thirty centimeters both in length and width, except that during the hours fixed under subsection (c), there shall be displayed, in lieu of the required red flags, red lights visible at least fifty meters away.
          </Text>
          <Text style={bottomSpacingL}>
            (j) Mufflers. - Every motor vehicle propelled by an internal combustion engine shall be equipped with a muffler, and whenever said motor vehicle passes through a street of any city, municipality, or thickly populated district or barrio, the muffler shall not be cut out or disconnected. No motor vehicle shall be operated in such a manner as to cause it to emit or make any unnecessary or disagreeable odor, smoke or noise.
          </Text>
          <Text style={[b, textCenter]}>CHAPTER IV</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>TRAFFIC RULES</Text>
          <Text style={[b, textCenter]}>ARTICLE I</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Speed Limit and Keeping to the Right</Text>
          <Text style={bottomSpacingM}>
            Section 35. Restriction as to speed. -
          </Text>
          <Text style={bottomSpacingM}>
            (a) Any person driving a motor vehicle on a highway shall drive the same at a careful and prudent speed, not greater nor less than is reasonable and proper, having due regard for the traffic, the width of the highway, and of any other condition then and there existing; and no person shall drive any motor vehicle upon a highway at such a speed as to endanger the life, limb and property of any person, nor at a speed greater than will permit him to bring the vehicle to a stop within the assured clear distance ahead.
          </Text>
          <Text style={bottomSpacingM}>
            (b) Subject to the provisions of the preceding paragraph, the rate of speed of any motor vehicle shall not exceed the following:
          </Text>
          <Text style={bottomSpacingM}>
            (c) The rates of speed hereinabove prescribed shall not apply to the following:
          </Text>
          <Text style={bottomSpacingM}>
            (1) A physician or his driver when the former responds to emergency calls;
          </Text>
          <Text style={bottomSpacingM}>
            (2) The driver of a hospital ambulance on the way to and from the place of accident or other emergency;
          </Text>
          <Text style={bottomSpacingM}>
            (3) Any driver bringing a wounded or sick person for emergency treatment to a hospital, clinic, or any other similar place;
          </Text>
          <Text style={bottomSpacingM}>
            (4) The driver of a motor vehicle belonging to the Armed Forces while in use for official purposes in times of riot, insurrection or invasion;
          </Text>
          <Text style={bottomSpacingM}>
            (5) The driver of a vehicle, when he or his passengers are in pursuit of a criminal;
          </Text>
          <Text style={bottomSpacingM}>
            (6) A law-enforcement officer who is trying to overtake a violator of traffic laws; and
          </Text>
          <Text style={bottomSpacingM}>
            (7) The driver officially operating a motor vehicle of any fire department, provided that exemption shall not be construed to allow unless or unnecessary fast driving of drivers aforementioned.
          </Text>
          <Text style={bottomSpacingM}>
            Section 36. Speed limits uniform throughout the Philippines. - No provincial, city or municipal authority shall enact or enforce any ordinance or resolution specifying maximum allowable speeds other than those provided in this Act.
          </Text>
          <Text style={bottomSpacingM}>
            Section 37. Driving on right side of highway. - Unless a different course of action is required in the interest of the safety and the security of life, person or property, or because of unreasonable difficulty of operation in compliance herewith, every person operating a motor vehicle or an animal-drawn vehicle on a highway shall pass to the right when meeting persons or vehicles coming toward him, and to the left when overtaking persons or vehicles going the same direction, and when turning to the left in going from one highway to another, every vehicle shall be conducted to the right of the center of the intersection of the highway.
          </Text>
          <Text style={bottomSpacingL}>
            Section 38. Classification of highways. - Public highways shall be properly classified for traffic purposes by the provincial board, municipal board or city council having jurisdiction over them, and said provincial board, municipal board or city council shall provide appropriate signs therefor, subject to the approval of the Commissioner. It shall be the duty of every provincial, city and municipal secretary to certify to the Commissioner the names, locations, and limits of all "through streets" designated as such by the provincial board, municipal board or council.
          </Text>
          <Text style={[b, textCenter]}>ARTICLE II</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Overtaking and Passing a Vehicle, and Turning at Intersections</Text>
          <Text style={bottomSpacingM}>
            Section 39. Overtaking a vehicle. - The driver of any motor vehicle overtaking another vehicle proceeding in the same direction shall pass at a safe distance to the left thereof, and shall not again drive to the right side of the highway until safety clear of such overtaken vehicle except that on a highway, within a business or residential district, having two or more lanes for the movement of traffic in one direction, the driver of a vehicle may overtake and pass another vehicle on the right. Nothing in this section shall be construed to prohibit a driver overtaking and passing, upon the right, another vehicle which is making or about to make a left turn.
          </Text>
          <Text style={bottomSpacingM}>
            Section 40. Driver to give way to overtaking vehicle. - The driver of a vehicle about to be overtaken and passed by another vehicle approaching from the rear shall give way to the overtaking vehicle on suitable and audible signal being given by the driver of the overtaking vehicle, and shall not increase the speed of his vehicle until completely passed by the overtaking vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            Section 41. Restrictions on overtaking and passing.
          </Text>
          <Text style={bottomSpacingM}>
            (a) The driver of a vehicle shall not drive to the left side of the center line of a highway in overtaking or passing another vehicle proceeding in the same direction, unless such left side is clearly visible, and is free of oncoming traffic for a sufficient distance ahead to permit such overtaking or passing to be made in safety.
          </Text>
          <Text style={bottomSpacingM}>
            (b) The driver of a vehicle shall not overtake or pass another vehicle proceeding in the same direction, when approaching the crest of a grade, not upon a curve in the highway, where the driver's view along the highway is obstructed within a distance of five hundred feet ahead, except on a highway having two or more lanes for movement of traffic in one direction where the driver of a vehicle may overtake or pass another vehicle: Provided, That on a highway within a business or residential district, having two or more lanes for movement of traffic in one direction, the driver of a vehicle may overtake or pass another vehicle on the right.
          </Text>
          <Text style={bottomSpacingM}>
            (c) The driver of a vehicle shall not overtake or pass any other vehicle proceeding in the same direction, at any railway grade crossing, not at any intersection of highways unless such intersection or crossing is controlled by traffic signal, or unless permitted to do so by a watchman or a peace officer, except on a highway having two or more lanes for movement of traffic in one direction where the driver of a vehicle may overtake or pass another vehicle on the right. Nothing in this section shall be construed to prohibit a driver overtaking or passing upon the right another vehicle which is making or about to make a left turn.
          </Text>
          <Text style={bottomSpacingM}>
            (d) The driver of a vehicle shall not overtake or pass, or attempt to pass, any other vehicle, proceeding in the same direction, between any points indicated by the placing of official temporary warning or caution signs indicating that men are working on the highway.
          </Text>
          <Text style={bottomSpacingL}>
            (e) The driver of a vehicle shall not overtake or pass, or attempt to overtake or pass, any other vehicle proceeding in the same direction in any "no-passing or overtaking zone."
          </Text>
          <Text style={[b, textCenter]}>ARTICLE III</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Right of Way and Signals</Text>
          <Text style={bottomSpacingM}>
            Section 42. Right of way.
          </Text>
          <Text style={bottomSpacingM}>
            (a) When two vehicles approach or enter an intersection at approximately the same time, the driver of the vehicle on the left shall yield the right of way to the vehicle on the right, except as otherwise hereinafter provided. The driver of any vehicle traveling at an unlawful speed shall forfeit any right of way which he might otherwise have hereunder.
          </Text>
          <Text style={bottomSpacingM}>
            (b) The driver of a vehicle approaching but not having entered an intersection, shall yield the right of way to a vehicle within such intersection or turning therein to the left across the line of travel of such first-mentioned vehicle, provided the driver of the vehicle turning left has given a plainly visible signal of intention to turn as required in this Act.
          </Text>
          <Text style={bottomSpacingM}>
            (c) The driver of any vehicle upon a highway within a business or residential district shall yield the right of way to a pedestrian crossing such highway within a crosswalk, except at intersections where the movement of traffic is being regulated by a peace officer or by traffic signal. Every pedestrian crossing a highway within a business or residential district, at any point other than a crosswalk shall yield the right of way to vehicles upon the highway.
          </Text>
          <Text style={bottomSpacingM}>
            (d) The driver of a vehicle upon a highway shall bring to a full stop such vehicle before traversing any "through highway" or railroad crossing: Provided, That when it is apparent that no hazard exists, the vehicle may be slowed down to five miles per hour instead of bringing it to a full stop.
          </Text>
          <Text style={bottomSpacingM}>
            Section 43. Exception to the right of way rule.
          </Text>
          <Text style={bottomSpacingM}>
            (a) The driver of a vehicle entering a highway from a private road or drive shall yield the right of way to all vehicles approaching on such highway.
          </Text>
          <Text style={bottomSpacingM}>
            (b) The driver of a vehicle upon a highway shall yield the right of way to police or fire department vehicles and ambulances when such vehicles are operated on official business and the drivers thereof sound audible signal of their approach.
          </Text>
          <Text style={bottomSpacingM}>
            (c) The driver of a vehicle entering a "through highway" or a "stop intersection" shall yield the right of way to all vehicles approaching to either direction on such "through highway": Provided, That nothing in this subsection shall be construed as relieving the driver of any vehicle being operated on a "through highway" from the duty of driving with due regard for the safety of vehicles entering such "through highway" nor as protecting the said driver from the consequence of an arbitrary exercise off such right of way.
          </Text>
          <Text style={bottomSpacingM}>
            Section 44. Signals on starting, stopping or turning. -
          </Text>
          <Text style={bottomSpacingM}>
            (a) The driver of any vehicle upon a highway, before starting, stopping or turning from a direct line, shall first see that such movement can be made in safety, and if any pedestrian may be affected by such movement, shall give a clearly audible signal by sounding the horn, and whenever the operation of any other vehicle approaching or following may be affected by such movement, shall give a signal plainly visible to the driver of such other vehicles of the intention to make such movement.
          </Text>
          <Text style={bottomSpacingL}>
            (b) The signal herein required shall be given by means of extending the hand and arm beyond the left side of the vehicle, or by an approved mechanical or electrical signal device.
          </Text>
          <Text style={[b, textCenter]}>ARTICLE IV</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Turning and Parking</Text>
          <Text style={bottomSpacingM}>
            Section 45. Turning at intersections. -
          </Text>
          <Text style={bottomSpacingM}>
            (a) The drive of a vehicle intending to run to the right at an intersection shall approach such intersection in the lane for traffic nearest to the right-hand side of the highway and, in turning, shall keep as close as possible to the right-hand curb or edge of the highway.
          </Text>
          <Text style={bottomSpacingM}>
            (c) For the purpose of this section, the center of the intersection shall mean the meeting point of the medial lines of the highways intersecting one another, except when it is occupied by a monument, grass plot or any permanent structure, other than traffic control device.
          </Text>
          <Text style={bottomSpacingM}>
            Section 46. Parking prohibited in specified places. - No driver shall park a vehicle, or permit it to stand, whether attended or unattended, upon a highway in any of the following places:
          </Text>
          <Text style={bottomSpacingM}>
            (a) Within an intersection
          </Text>
          <Text style={bottomSpacingM}>
            (b) On a crosswalk
          </Text>
          <Text style={bottomSpacingM}>
            (c) Within six meters of the intersection of curb lines.
          </Text>
          <Text style={bottomSpacingM}>
            (d) Within four meters of the driveway entrance to and fire station.
          </Text>
          <Text style={bottomSpacingM}>
            (e) Within four meters of fire hydrant
          </Text>
          <Text style={bottomSpacingM}>
            (f) In front of a private driveway
          </Text>
          <Text style={bottomSpacingM}>
            (g) On the roadway side of any vehicle stopped or parked at the curb or edge of the highway
          </Text>
          <Text style={bottomSpacingM}>
            (h) At any place where official signs have been erected prohibiting parking.
          </Text>
          <Text style={bottomSpacingL}>
            Section 47. Parked vehicle. - Whenever a motor vehicle is parked unattended on any highway, the driver thereof must turn off the ignition switch and stop the motor and notch effectively the hand brake.
          </Text>
          <Text style={[b, textCenter]}>ARTICLE V</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Miscellaneous Traffic Rules</Text>
          <Text style={bottomSpacingM}>
            Section 48. Reckless driving. - No person shall operate a motor vehicle on any highway recklessly or without reasonable caution considering the width, traffic, grades, crossing, curvatures, visibility and other conditions of the highway and the conditions of the atmosphere and weather, or so as to endanger the property or the safety or rights of any person or so as to cause excessive or unreasonable damage to the highway.
          </Text>
          <Text style={bottomSpacingM}>
            Section 49. Right of way for police and other emergency vehicles. - Upon the approach of any police or fire department vehicle, or of an ambulance giving audible signal, the driver of every other vehicle shall immediately drive the same to a position as near as possible and parallel to the right-hand edge or curb of the highway, clear of any intersection of highways, and shall stop and remain in such position, unless otherwise directed by a peace officer, until such vehicle shall have passed.
          </Text>
          <Text style={bottomSpacingM}>
            Section 50. Tampering with vehicles. - No unauthorized person shall sound the horn, handle the levers or set in motion or in any way tamper with a damage or deface any motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            Section 51. Hitching to a vehicle. - No person shall hang on to, ride on, the outside or the rear end of any vehicle, and no person on a bicycle, roller skate or other similar device, shall hold fast to or hitch on to any moving vehicle, and no driver shall knowingly permit any person to hang on to or ride, the outside or rear end of his vehicle or allow any person on a bicycle, roller skate or other similar device to hold fast or hitch to his vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            Section 52. Driving or parking on sidewalk. - No person shall drive or park a motor vehicle upon or along any sidewalk, path or alley not intended for vehicular traffic or parking.
          </Text>
          <Text style={bottomSpacingM}>
            Section 53. Driving while under the influence of liquor or narcotic drug. - No person shall drive a motor vehicle while under the influence of liquor or narcotic drug.
          </Text>
          <Text style={bottomSpacingM}>
            Section 54. Obstruction of traffic. - No person shall drive his motor vehicle in such a manner as to obstruct or impede the passage of any vehicle, nor, while discharging or taking on passengers or loading or unloading freight, obstruct the free passage of other vehicles on the highway.
          </Text>
          <Text style={bottomSpacingM}>
            Section 55. Duty of driver in case of accident. - In the event that any accident should occur as a result of the operation of a motor vehicle upon a highway, the driver present, shall show his driver's license, give his true name and address and also the true name and address of the owner of the motor vehicle.
          </Text>
          <Text style={bottomSpacingM}>
            No driver of a motor vehicle concerned in a vehicular accident shall leave the scene of the accident without aiding the victim, except under any of the following circumstances:
          </Text>
          <Text style={bottomSpacingM}>
            1. If he is in imminent danger of being seriously harmed by any person or persons by reason of the accident;
          </Text>
          <Text style={bottomSpacingM}>
            2. If he reports the accident to the nearest officer of the law; or
          </Text>
          <Text style={bottomSpacingL}>
            3. If he has to summon a physician or nurse to aid the victim.
          </Text>
          <Text style={[b, textCenter]}>CHAPTER V</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>PENAL AND OTHER PROVISIONS</Text>
          <Text style={[b, textCenter]}>ARTICLE I</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Penalties</Text>
          <Text style={bottomSpacingM}>
            Section 56. Penalty for violation. - The following penalties shall be imposed for violations of this Act:
          </Text>
          <Text style={bottomSpacingM}>
            (a) For registering later than seven days after acquiring title to an unregistered motor vehicle or after conversion of a registered motor vehicle requiring larger registration fee than that for which it was originally registered, or for renewal of a delinquent registration, the penalty shall be a fine fifty per cent of the registration fees corresponding to the portion of the year for which the vehicle is registered for use.
          </Text>
          <Text style={bottomSpacingM}>
            (b) For failure to sign driver's license or to carry same while driving, twenty pesos fine.
          </Text>
          <Text style={bottomSpacingM}>
            (c) Driving a vehicle with a delinquent or invalid driver's license, fifty pesos fine.
          </Text>
          <Text style={bottomSpacingM}>
            (d) Driving a motor vehicle with delinquent, suspended or invalid registration, or without registration or without the proper license plate for the current year, three hundred pesos fine.
          </Text>
          <Text style={bottomSpacingM}>
            (e) Driving a motor vehicle without first securing a driver's license, three hundred pesos fine.
          </Text>
          <Text style={bottomSpacingM}>
            (f) Driving a motor vehicle while under the influence of liquor or narcotic drug, a fine of not less than two hundred pesos nor more than five hundred pesos, or imprisonment of not more than three months, or both, at the discretion of the Court.
          </Text>
          <Text style={bottomSpacingM}>
            (g) Violation of Section thirty-two, thirty-four (a), (b) and (b-1), thirty-five and forty-six a fine not exceeding one hundred pesos: Provided, however, That in the case of violation of Section 34 (b) the vehicle or vehicles affected may not be allowed to operate unless the requirements provided in this section are complied with.
          </Text>
          <Text style={bottomSpacingM}>
            (h) Violations of Sections forty-nine, fifty and fifty-two, a fine not exceeding fifty pesos.
          </Text>
          <Text style={bottomSpacingM}>
            (i) For making, using or attempting to make or use a driver's license, badge, certificate or registration, number plate, tag or permit in imitation or similitude of those issued under this Act, or intended to be used as or for a legal license, badge, certificate, plate, tag or permit or with intent to sell or otherwise dispose of the same to another, or false or fraudulently represent as valid and in force any driver's license, badge, certificate, plate, tag or permit issued under this Act which is delinquent or which has been suspended or revoked, a fine of not exceeding three hundred pesos.
          </Text>
          <Text style={bottomSpacingM}>
            (j) For using private passenger automobiles, private trucks, private motorcycles, and motor wheel attachments for hire, in violation of Section seven, subsections (a), (b), and (c), of this Act, a fine of two hundred pesos and suspension of driver's license for a period of three months for the first conviction; a fine of three hundred pesos and six months imprisonment for the second conviction; and an imprisonment of one year and permanent revocation of the driver's license for the third conviction.
          </Text>
          <Text style={bottomSpacingM}>
            (k) For permitting, allowing, consenting to, or tolerating the use of a privately-owned motor vehicle for hire in violation of Section seven, subsections (a), (b), and (c), of this Act, there shall be imposed upon the owner of the vehicle a fine of five hundred pesos and the certificate of registration shall be suspended for a period of three months for the first conviction, and an increase of one hundred pesos in the fine and one month's suspension of the registration for each subsequent conviction.
          </Text>
          <Text style={bottomSpacingM}>
            (l) For violation of any provisions of this Act or regulations promulgated pursuant hereto, not hereinbefore specifically punished, a fine of not less than ten or more than fifty pesos shall be imposed.
          </Text>
          <Text style={bottomSpacingM}>
            (m) In the event an offender cannot pay any fine imposed pursuant to the provisions of this Act, he shall be made to undergo subsidiary imprisonment as provided for in the Revised Penal Code.
          </Text>
          <Text style={bottomSpacingM}>
            (n) If, as the result of negligence or reckless or unreasonable fast driving, any accident occurs resulting in death or injury of any person, the motor vehicle operator at fault shall, upon conviction, be punished under the provisions of the Revised Penal Code.
          </Text>
          <Text style={bottomSpacingM}>
            Section 57. Punishment for other offenses. - The conviction of any person for any offense under this Act shall not bar his prosecution for any other offense which may have been committed by such person concurrently with the commission of the offense of which he was convicted or in doing the act or series of acts which constituted the offense of which he was convicted.
          </Text>
          <Text style={bottomSpacingL}>
            Section 58. Duty of clerks of court. - It is hereby made the duty of clerks of the Court of First Instance, the City Court of Municipal Court trying traffic violation cases to certify to the Commission the result of any case, whether criminal or civil, involving violations of any provision of this Act or of other laws and ordinances relating to motor vehicles. Said certificate shall specifically contain the name of the driver or owner of the vehicle involved, his address, the number of his license and/or of the certificate or registration of his vehicle, and the date thereof, and the offense of which he was convicted or acquitted.
          </Text>
          <Text style={[b, textCenter]}>ARTICLE II</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Collection of Fees, Taxes and Fines, Liens, Allotment of Funds</Text>
          <Text style={bottomSpacingM}>
            Section 59. (a) Collection of fees; national and local taxes; toll fees. - The collection of all fees, taxes, and fines, under the provisions of this Act shall be made in accordance with regulations to be prescribed by the Commissioner and approved jointly by the Auditor General.
          </Text>
          <Text style={bottomSpacingM}>
            (b) No taxes or fees other than those prescribed in this Act shall be imposed for the registration or operation or on the ownership of any motor vehicle, or for the exercise of the profession of chauffeur, by any municipal corporation, the provisions of any city charter to the contrary notwithstanding: Provided, however, That any provincial board, city or municipal council or board or other competent authority may enact and collect such reasonable and equitable toll fees for the use of such bridges and ferries, within their respective jurisdiction, as may be authorized and approved by the Secretary of Public Works and Communications, and also for the use of such public roads, as may be authorized by the President of the Philippines upon recommendation of the Secretary of Public Works and Communications, but in none of these cases shall any toll fees be charged or collected until and unless the approved schedule of tolls has been posted legibly in a conspicuous place at such toll station.
          </Text>
          <Text style={bottomSpacingM}>
            Section 60. The lien upon motor vehicles. - Any balance of fees for registration, re-registration or delinquent registration of a motor vehicle, remaining unpaid and all fines imposed upon any vehicle owner, shall constitute a first lien upon the motor vehicle concerned.
          </Text>
          <Text style={bottomSpacingM}>
            The Commission is hereby vested with authority to issue a warrant of constructive or actual distraint or and levy to any owner of motor vehicle who has any balance of fees for registration, re-registration or delinquent registration of a motor vehicle remaining unpaid, which upon demand by the Commissioner of the Land Transportation Commission or any of his deputies executing such warrant, the owner of the said vehicle shall surrender same at the time demanded, except when the attachment or execution is under any judicial process. Any owner who fails or refuses to surrender any of such property or vehicle not so surrendered shall be punished by a fine not exceeding the amount of the fees (including penalties and interests, if any) for the collection of which such warrant has been issued, together with the costs and interests, if any, from the time of such surrender. In addition, such owner shall punished by a fine of not more than three hundred pesos or an imprisonment not more than six months, or both.
          </Text>
          <Text style={bottomSpacingL}>
            Section 61. Disposal of monies collected. - Monies collected under the provisions of this Act shall be deposited in a special trust account in the National Treasury to constitute the Highway Special Fund, which shall be apportioned and expended in accordance with the provisions of the "Philippine Highway Act of 1953": Provided, however, That the amount necessary to maintain and equip the Land Transportation Commission but not to exceed fifteen per cent of the total collections during any one year, shall be set aside for the purpose.
          </Text>
          <Text style={[b, textCenter]}>ARTICLE III</Text>
          <Text style={[b, textCenter, bottomSpacingL]}>Final Provisions</Text>
          <Text style={bottomSpacingM}>
            Section 62. No provincial board, city or municipal board or council shall enact or enforce any ordinance or resolution in conflict with the provisions of this Act, or prohibiting any deputy or agent of the Commission to enforce this Act within their respective territorial jurisdiction and the provisions of any charter to the contrary notwithstanding.
          </Text>
          <Text style={bottomSpacingM}>
            Section 63. Repeal of laws and ordinances. - Act Numbered Thirty-nine hundred ninety-two, as amended, and all laws, executive orders, ordinances, resolutions, regulations, or parts thereof in conflict with the provisions of this Act are repealed: Provided, however, That nothing contained in this Act shall be construed as limiting or superseding any provisions of the Public Service Act, as amended, with respect to the control by the Public Service Commission of motor vehicles operating as public service, nor shall any provision of this Act be construed as limiting or abridging the powers conferred upon and exercised by the Public Service Commission with regards to the control and supervision of the operation of such motor vehicles as public service.
          </Text>
          <Text style={bottomSpacingM}>
            Section 64. Appropriation. - To carry out effectively the provisions of this Act, the amount of two hundred fifty thousand pesos is hereby appropriated out of the fees collected under this Act, in addition to the appropriations provided in the General Appropriations Act, for the expense of this Commission for the fiscal year beginning July first, nineteen hundred and sixty-four, to June thirtieth, nineteen hundred and sixty-five: Provided, however, That any savings in the appropriations of the Motor Vehicles Office for the fiscal year beginning July first, nineteen hundred and sixty-three, to June thirtieth, nineteen hundred and sixty-four shall likewise be available for this purpose.
          </Text>
          <Text style={bottomSpacingM}>
            Section 65. Separability. - If any provisions of this Act or the application thereof to any person or circumstance is held invalid, the remainder of the Act, and the application of such provision to other persons or circumstances, shall not be affected thereby.
          </Text>
          <Text style={bottomSpacingM}>
          Section 66. Effectivity. - This Act shall take effect upon its approval.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  b: {
    fontWeight: '500'
  },
  bottomSpacingL: {
    paddingBottom: 12
  },
  bottomSpacingM: {
    paddingBottom: 10
  },
  textCenter: {
    textAlign: 'center',
    alignSelf: 'center'
  },
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 15,
    paddingTop: 10
  }
});
