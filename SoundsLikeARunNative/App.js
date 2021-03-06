import * as React from 'react';
import MapView, {Polyline} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
       initialRegion={{
      latitude: 44.4747680,
      longitude: -73.2137510,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0421,
    }}
      >


      <Polyline
		coordinates={[
			{ latitude: 44.4747680, longitude: -73.2137510 },
{ latitude: 44.4748760, longitude: -73.2135780 },
{ latitude: 44.4749180, longitude: -73.2138000 },
{ latitude: 44.4748500, longitude: -73.2138770 },
{ latitude: 44.4748630, longitude: -73.2139470 },
{ latitude: 44.4748680, longitude: -73.2141410 },
{ latitude: 44.4749130, longitude: -73.2143360 },
{ latitude: 44.4748990, longitude: -73.2144490 },
{ latitude: 44.4748850, longitude: -73.2145980 },
{ latitude: 44.4748700, longitude: -73.2147580 },
{ latitude: 44.4748660, longitude: -73.2148810 },
{ latitude: 44.4748710, longitude: -73.2150480 },
{ latitude: 44.4748550, longitude: -73.2151380 },
{ latitude: 44.4748030, longitude: -73.2152690 },
{ latitude: 44.4747720, longitude: -73.2153680 },
{ latitude: 44.4747520, longitude: -73.2154980 },
{ latitude: 44.4747570, longitude: -73.2156140 },
{ latitude: 44.4746920, longitude: -73.2157460 },
{ latitude: 44.4747020, longitude: -73.2158440 },
{ latitude: 44.4746700, longitude: -73.2159990 },
{ latitude: 44.4746420, longitude: -73.2161590 },
{ latitude: 44.4746780, longitude: -73.2162640 },
{ latitude: 44.4746530, longitude: -73.2163920 },
{ latitude: 44.4746460, longitude: -73.2164870 },
{ latitude: 44.4746350, longitude: -73.2166300 },
{ latitude: 44.4746750, longitude: -73.2166950 },
{ latitude: 44.4746450, longitude: -73.2168480 },
{ latitude: 44.4746480, longitude: -73.2169310 },
{ latitude: 44.4746470, longitude: -73.2170790 },
{ latitude: 44.4746410, longitude: -73.2172060 },
{ latitude: 44.4746500, longitude: -73.2172980 },
{ latitude: 44.4747030, longitude: -73.2174160 },
{ latitude: 44.4746880, longitude: -73.2175000 },
{ latitude: 44.4747000, longitude: -73.2176350 },
{ latitude: 44.4747160, longitude: -73.2177170 },
{ latitude: 44.4746750, longitude: -73.2178320 },
{ latitude: 44.4746640, longitude: -73.2179120 },
{ latitude: 44.4746590, longitude: -73.2180360 },
{ latitude: 44.4746230, longitude: -73.2181430 },
{ latitude: 44.4746290, longitude: -73.2182270 },
{ latitude: 44.4746180, longitude: -73.2183600 },
{ latitude: 44.4746450, longitude: -73.2184470 },
{ latitude: 44.4744930, longitude: -73.2185000 },
{ latitude: 44.4744080, longitude: -73.2184830 },
{ latitude: 44.4743050, longitude: -73.2185130 },
{ latitude: 44.4742190, longitude: -73.2184420 },
{ latitude: 44.4741550, longitude: -73.2184140 },
{ latitude: 44.4740590, longitude: -73.2184330 },
{ latitude: 44.4739970, longitude: -73.2184380 },
{ latitude: 44.4739320, longitude: -73.2184310 },
{ latitude: 44.4738720, longitude: -73.2184490 },
{ latitude: 44.4737710, longitude: -73.2184640 },
{ latitude: 44.4737190, longitude: -73.2184690 },
{ latitude: 44.4736180, longitude: -73.2184290 },
{ latitude: 44.4735590, longitude: -73.2184410 },
{ latitude: 44.4735450, longitude: -73.2184590 },
{ latitude: 44.4735250, longitude: -73.2186190 },
{ latitude: 44.4735290, longitude: -73.2187600 },
{ latitude: 44.4735130, longitude: -73.2188520 },
{ latitude: 44.4735090, longitude: -73.2189750 },
{ latitude: 44.4734830, longitude: -73.2190820 },
{ latitude: 44.4734690, longitude: -73.2192180 },
{ latitude: 44.4734090, longitude: -73.2192670 },
{ latitude: 44.4732690, longitude: -73.2192890 },
{ latitude: 44.4731610, longitude: -73.2192730 },
{ latitude: 44.4730870, longitude: -73.2192900 },
{ latitude: 44.4730020, longitude: -73.2192540 },
{ latitude: 44.4729320, longitude: -73.2192560 },
{ latitude: 44.4728440, longitude: -73.2192470 },
{ latitude: 44.4727820, longitude: -73.2192420 },
{ latitude: 44.4726990, longitude: -73.2192300 },
{ latitude: 44.4726380, longitude: -73.2192700 },
{ latitude: 44.4726020, longitude: -73.2193450 },
{ latitude: 44.4725930, longitude: -73.2194250 },
{ latitude: 44.4726080, longitude: -73.2195410 },
{ latitude: 44.4726370, longitude: -73.2196670 },
{ latitude: 44.4726250, longitude: -73.2197620 },
{ latitude: 44.4726240, longitude: -73.2198760 },
{ latitude: 44.4726370, longitude: -73.2199710 },
{ latitude: 44.4726010, longitude: -73.2201030 },
{ latitude: 44.4725770, longitude: -73.2201800 },
{ latitude: 44.4725340, longitude: -73.2202970 },
{ latitude: 44.4725130, longitude: -73.2203740 },
{ latitude: 44.4724380, longitude: -73.2204690 },
{ latitude: 44.4723600, longitude: -73.2205310 },
{ latitude: 44.4722970, longitude: -73.2205380 },
{ latitude: 44.4722140, longitude: -73.2204880 },
{ latitude: 44.4721730, longitude: -73.2204890 },
{ latitude: 44.4720770, longitude: -73.2205080 },
{ latitude: 44.4720130, longitude: -73.2205150 },
{ latitude: 44.4719160, longitude: -73.2205260 },
{ latitude: 44.4718590, longitude: -73.2205180 },
{ latitude: 44.4717810, longitude: -73.2205760 },
{ latitude: 44.4716960, longitude: -73.2205970 },
{ latitude: 44.4716330, longitude: -73.2206040 },
{ latitude: 44.4715500, longitude: -73.2206470 },
{ latitude: 44.4714910, longitude: -73.2206330 },
{ latitude: 44.4714130, longitude: -73.2207130 },
{ latitude: 44.4713520, longitude: -73.2207440 },
{ latitude: 44.4712690, longitude: -73.2207820 },
{ latitude: 44.4712130, longitude: -73.2208070 },
{ latitude: 44.4711330, longitude: -73.2208220 },
{ latitude: 44.4710740, longitude: -73.2208400 },
{ latitude: 44.4709980, longitude: -73.2208140 },
{ latitude: 44.4709170, longitude: -73.2207940 },
{ latitude: 44.4708700, longitude: -73.2207740 },
{ latitude: 44.4708090, longitude: -73.2207020 },
{ latitude: 44.4707740, longitude: -73.2206420 },
{ latitude: 44.4707710, longitude: -73.2205250 },
{ latitude: 44.4707520, longitude: -73.2204440 },
{ latitude: 44.4707610, longitude: -73.2203290 },
{ latitude: 44.4707270, longitude: -73.2202060 },
{ latitude: 44.4706990, longitude: -73.2201590 },
{ latitude: 44.4706320, longitude: -73.2200850 },
{ latitude: 44.4705790, longitude: -73.2200620 },
{ latitude: 44.4705130, longitude: -73.2200080 },
{ latitude: 44.4704670, longitude: -73.2199670 },
{ latitude: 44.4703950, longitude: -73.2199070 },
{ latitude: 44.4703430, longitude: -73.2199030 },
{ latitude: 44.4702680, longitude: -73.2198570 },
{ latitude: 44.4701890, longitude: -73.2198050 },
{ latitude: 44.4701370, longitude: -73.2197770 },
{ latitude: 44.4700570, longitude: -73.2197320 },
{ latitude: 44.4700060, longitude: -73.2196980 },
{ latitude: 44.4699350, longitude: -73.2196520 },
{ latitude: 44.4698910, longitude: -73.2196190 },
{ latitude: 44.4698170, longitude: -73.2195700 },
{ latitude: 44.4697690, longitude: -73.2195460 },
{ latitude: 44.4696990, longitude: -73.2194950 },
{ latitude: 44.4696580, longitude: -73.2194570 },
{ latitude: 44.4695840, longitude: -73.2194150 },
{ latitude: 44.4695160, longitude: -73.2193620 },
{ latitude: 44.4694750, longitude: -73.2193210 },
{ latitude: 44.4694230, longitude: -73.2192770 },
{ latitude: 44.4693760, longitude: -73.2192410 },
{ latitude: 44.4693150, longitude: -73.2191860 },
{ latitude: 44.4692680, longitude: -73.2191600 },
{ latitude: 44.4692030, longitude: -73.2190850 },
{ latitude: 44.4691540, longitude: -73.2190390 },
{ latitude: 44.4690910, longitude: -73.2189600 },
{ latitude: 44.4690340, longitude: -73.2189460 },
{ latitude: 44.4689470, longitude: -73.2189590 },
{ latitude: 44.4689000, longitude: -73.2189600 },
{ latitude: 44.4688440, longitude: -73.2189470 },
{ latitude: 44.4687750, longitude: -73.2189710 },
{ latitude: 44.4687290, longitude: -73.2189930 },
{ latitude: 44.4686400, longitude: -73.2189720 },
{ latitude: 44.4685710, longitude: -73.2189540 },
{ latitude: 44.4684720, longitude: -73.2189500 },
{ latitude: 44.4683820, longitude: -73.2189290 },
{ latitude: 44.4683230, longitude: -73.2189290 },
{ latitude: 44.4682420, longitude: -73.2189350 },
{ latitude: 44.4681870, longitude: -73.2189300 },
{ latitude: 44.4681060, longitude: -73.2189150 },
{ latitude: 44.4680420, longitude: -73.2189090 },
{ latitude: 44.4679560, longitude: -73.2189190 },
{ latitude: 44.4678880, longitude: -73.2189270 },
{ latitude: 44.4677800, longitude: -73.2189250 },
{ latitude: 44.4676780, longitude: -73.2189360 },
{ latitude: 44.4676180, longitude: -73.2189360 },
{ latitude: 44.4675240, longitude: -73.2189400 },
{ latitude: 44.4674610, longitude: -73.2189570 },
{ latitude: 44.4673800, longitude: -73.2189500 },
{ latitude: 44.4673180, longitude: -73.2189510 },
{ latitude: 44.4672240, longitude: -73.2189520 },
{ latitude: 44.4671730, longitude: -73.2189480 },
{ latitude: 44.4670850, longitude: -73.2189490 },
{ latitude: 44.4670320, longitude: -73.2189440 },
{ latitude: 44.4669530, longitude: -73.2189550 },
{ latitude: 44.4668710, longitude: -73.2189340 },
{ latitude: 44.4668150, longitude: -73.2189310 },
{ latitude: 44.4667380, longitude: -73.2189360 },
{ latitude: 44.4666810, longitude: -73.2189400 },
{ latitude: 44.4665930, longitude: -73.2189290 },
{ latitude: 44.4665470, longitude: -73.2189470 },
{ latitude: 44.4664600, longitude: -73.2189350 },
{ latitude: 44.4664130, longitude: -73.2189330 },
{ latitude: 44.4663360, longitude: -73.2189400 },
{ latitude: 44.4662560, longitude: -73.2189330 },
{ latitude: 44.4662020, longitude: -73.2189340 },
{ latitude: 44.4661220, longitude: -73.2189240 },
{ latitude: 44.4660700, longitude: -73.2189350 },
{ latitude: 44.4660090, longitude: -73.2189260 },
{ latitude: 44.4659550, longitude: -73.2189190 },
{ latitude: 44.4658730, longitude: -73.2189110 },
{ latitude: 44.4658250, longitude: -73.2189100 },
{ latitude: 44.4657470, longitude: -73.2189310 },
{ latitude: 44.4656650, longitude: -73.2189310 },
{ latitude: 44.4656050, longitude: -73.2189350 },
{ latitude: 44.4655270, longitude: -73.2189270 },
{ latitude: 44.4654790, longitude: -73.2189460 },
{ latitude: 44.4653910, longitude: -73.2189570 },
{ latitude: 44.4653380, longitude: -73.2189750 },
{ latitude: 44.4652800, longitude: -73.2189980 },
{ latitude: 44.4652170, longitude: -73.2189960 },
{ latitude: 44.4651420, longitude: -73.2189850 },
{ latitude: 44.4650640, longitude: -73.2189800 },
{ latitude: 44.4650050, longitude: -73.2189540 },
{ latitude: 44.4649310, longitude: -73.2189720 },
{ latitude: 44.4648800, longitude: -73.2189730 },
{ latitude: 44.4648060, longitude: -73.2190090 },
{ latitude: 44.4647570, longitude: -73.2190060 },
{ latitude: 44.4646710, longitude: -73.2189950 },
{ latitude: 44.4646280, longitude: -73.2189980 },
{ latitude: 44.4645480, longitude: -73.2190150 },
{ latitude: 44.4644660, longitude: -73.2189800 },
{ latitude: 44.4644110, longitude: -73.2189760 },
{ latitude: 44.4643310, longitude: -73.2189610 },
{ latitude: 44.4642760, longitude: -73.2189690 },
{ latitude: 44.4641970, longitude: -73.2190050 },
{ latitude: 44.4641520, longitude: -73.2190000 },
{ latitude: 44.4640740, longitude: -73.2190020 },
{ latitude: 44.4640230, longitude: -73.2190240 },
{ latitude: 44.4639480, longitude: -73.2190070 },
{ latitude: 44.4638710, longitude: -73.2189920 },
{ latitude: 44.4638170, longitude: -73.2189890 },
{ latitude: 44.4637340, longitude: -73.2189710 },
{ latitude: 44.4636840, longitude: -73.2189830 },
{ latitude: 44.4636050, longitude: -73.2189660 },
{ latitude: 44.4635560, longitude: -73.2189700 },
{ latitude: 44.4634640, longitude: -73.2189550 },
{ latitude: 44.4634120, longitude: -73.2189670 },
{ latitude: 44.4633420, longitude: -73.2189640 },
{ latitude: 44.4632600, longitude: -73.2189640 },
{ latitude: 44.4632080, longitude: -73.2189620 },
{ latitude: 44.4631310, longitude: -73.2189640 },
{ latitude: 44.4630810, longitude: -73.2189610 },
{ latitude: 44.4630120, longitude: -73.2189440 },
{ latitude: 44.4629550, longitude: -73.2189400 },
{ latitude: 44.4628790, longitude: -73.2189230 },
{ latitude: 44.4628250, longitude: -73.2189110 },
{ latitude: 44.4627440, longitude: -73.2189180 },
{ latitude: 44.4626840, longitude: -73.2189230 },
{ latitude: 44.4626210, longitude: -73.2189100 },
{ latitude: 44.4625500, longitude: -73.2189200 },
{ latitude: 44.4625080, longitude: -73.2189460 },
{ latitude: 44.4624400, longitude: -73.2189470 },
{ latitude: 44.4623890, longitude: -73.2189420 },
{ latitude: 44.4623100, longitude: -73.2189260 },
{ latitude: 44.4622520, longitude: -73.2189270 },
{ latitude: 44.4621730, longitude: -73.2188930 },
{ latitude: 44.4621300, longitude: -73.2189090 },
{ latitude: 44.4620530, longitude: -73.2188950 },
{ latitude: 44.4619750, longitude: -73.2188830 },
{ latitude: 44.4619260, longitude: -73.2188730 },
{ latitude: 44.4618520, longitude: -73.2188940 },
{ latitude: 44.4618060, longitude: -73.2188380 },
{ latitude: 44.4617320, longitude: -73.2188250 },
{ latitude: 44.4616830, longitude: -73.2188340 },
{ latitude: 44.4616280, longitude: -73.2188840 },
{ latitude: 44.4615740, longitude: -73.2189220 },
{ latitude: 44.4615140, longitude: -73.2189060 },
{ latitude: 44.4614570, longitude: -73.2189240 },
{ latitude: 44.4613760, longitude: -73.2189270 },
{ latitude: 44.4612970, longitude: -73.2188400 },
{ latitude: 44.4612460, longitude: -73.2188430 },
{ latitude: 44.4611740, longitude: -73.2188310 },
{ latitude: 44.4611370, longitude: -73.2188310 },
{ latitude: 44.4610480, longitude: -73.2188190 },
{ latitude: 44.4609790, longitude: -73.2188540 },
{ latitude: 44.4609030, longitude: -73.2188640 },
{ latitude: 44.4608170, longitude: -73.2189090 },
{ latitude: 44.4607660, longitude: -73.2189080 },
{ latitude: 44.4606860, longitude: -73.2189000 },
{ latitude: 44.4606430, longitude: -73.2189000 },
{ latitude: 44.4605520, longitude: -73.2189220 },
{ latitude: 44.4605060, longitude: -73.2188930 },
{ latitude: 44.4604240, longitude: -73.2189280 },
{ latitude: 44.4603750, longitude: -73.2189120 },
{ latitude: 44.4603080, longitude: -73.2189210 },
{ latitude: 44.4602230, longitude: -73.2189110 },
{ latitude: 44.4601790, longitude: -73.2189190 },
{ latitude: 44.4600860, longitude: -73.2189360 },
{ latitude: 44.4600370, longitude: -73.2189160 },
{ latitude: 44.4599690, longitude: -73.2189100 },
{ latitude: 44.4599210, longitude: -73.2189080 },
{ latitude: 44.4598480, longitude: -73.2188810 },
{ latitude: 44.4597930, longitude: -73.2188840 },
{ latitude: 44.4597070, longitude: -73.2188960 },
{ latitude: 44.4596340, longitude: -73.2188910 },
{ latitude: 44.4595860, longitude: -73.2188970 },
{ latitude: 44.4595270, longitude: -73.2188930 },
{ latitude: 44.4594720, longitude: -73.2188880 },
{ latitude: 44.4593940, longitude: -73.2188780 },
{ latitude: 44.4593350, longitude: -73.2188680 },
{ latitude: 44.4592580, longitude: -73.2188720 },
{ latitude: 44.4592070, longitude: -73.2188800 },
{ latitude: 44.4591210, longitude: -73.2188810 },
{ latitude: 44.4590710, longitude: -73.2188670 },
{ latitude: 44.4589900, longitude: -73.2188740 },
{ latitude: 44.4589440, longitude: -73.2188780 },
{ latitude: 44.4588830, longitude: -73.2188720 },
{ latitude: 44.4589830, longitude: -73.2188380 },
{ latitude: 44.4591500, longitude: -73.2188450 },
{ latitude: 44.4591730, longitude: -73.2188390 },
{ latitude: 44.4592540, longitude: -73.2188530 },
{ latitude: 44.4593190, longitude: -73.2188490 },
{ latitude: 44.4593970, longitude: -73.2188460 },
{ latitude: 44.4594500, longitude: -73.2188430 },
{ latitude: 44.4595380, longitude: -73.2188410 },
{ latitude: 44.4596270, longitude: -73.2188420 },
{ latitude: 44.4596870, longitude: -73.2188490 },
{ latitude: 44.4597790, longitude: -73.2188350 },
{ latitude: 44.4598280, longitude: -73.2188390 },
{ latitude: 44.4599010, longitude: -73.2188570 },
{ latitude: 44.4599700, longitude: -73.2188470 },
{ latitude: 44.4600650, longitude: -73.2188380 },
{ latitude: 44.4601200, longitude: -73.2188450 },
{ latitude: 44.4602220, longitude: -73.2188410 },
{ latitude: 44.4603210, longitude: -73.2188250 },
{ latitude: 44.4603890, longitude: -73.2188410 },
{ latitude: 44.4604900, longitude: -73.2188460 },
{ latitude: 44.4605510, longitude: -73.2188500 },
{ latitude: 44.4606390, longitude: -73.2188370 },
{ latitude: 44.4607000, longitude: -73.2188540 },
{ latitude: 44.4607840, longitude: -73.2188370 },
{ latitude: 44.4608320, longitude: -73.2188130 },
{ latitude: 44.4609330, longitude: -73.2187860 },
{ latitude: 44.4610170, longitude: -73.2187940 },
{ latitude: 44.4610660, longitude: -73.2187960 },
{ latitude: 44.4611600, longitude: -73.2187770 },
{ latitude: 44.4612090, longitude: -73.2187610 },
{ latitude: 44.4612770, longitude: -73.2187800 },
{ latitude: 44.4613310, longitude: -73.2187810 },
{ latitude: 44.4614110, longitude: -73.2187820 },
{ latitude: 44.4614680, longitude: -73.2187920 },
{ latitude: 44.4615550, longitude: -73.2187770 },
{ latitude: 44.4616410, longitude: -73.2187960 },
{ latitude: 44.4616930, longitude: -73.2187890 },
{ latitude: 44.4617730, longitude: -73.2188110 },
{ latitude: 44.4618330, longitude: -73.2188320 },
{ latitude: 44.4619170, longitude: -73.2188470 },
{ latitude: 44.4619880, longitude: -73.2188330 },
{ latitude: 44.4620910, longitude: -73.2188380 },
{ latitude: 44.4621570, longitude: -73.2188420 },
{ latitude: 44.4622530, longitude: -73.2188460 },
{ latitude: 44.4623120, longitude: -73.2188620 },
{ latitude: 44.4624080, longitude: -73.2188660 },
{ latitude: 44.4624910, longitude: -73.2188580 },
{ latitude: 44.4625520, longitude: -73.2188500 },
{ latitude: 44.4626460, longitude: -73.2188390 },
{ latitude: 44.4627070, longitude: -73.2188300 },
{ latitude: 44.4627910, longitude: -73.2188380 },
{ latitude: 44.4628410, longitude: -73.2188480 },
{ latitude: 44.4629390, longitude: -73.2188450 },
{ latitude: 44.4629950, longitude: -73.2188550 },
{ latitude: 44.4630890, longitude: -73.2188540 },
{ latitude: 44.4631470, longitude: -73.2188690 },
{ latitude: 44.4632450, longitude: -73.2188680 },
{ latitude: 44.4633360, longitude: -73.2188760 },
{ latitude: 44.4633950, longitude: -73.2188870 },
{ latitude: 44.4634920, longitude: -73.2188880 },
{ latitude: 44.4635500, longitude: -73.2188950 },
{ latitude: 44.4636380, longitude: -73.2189030 },
{ latitude: 44.4636980, longitude: -73.2188900 },
{ latitude: 44.4637980, longitude: -73.2189020 },
{ latitude: 44.4638590, longitude: -73.2189050 },
{ latitude: 44.4639510, longitude: -73.2188980 },
{ latitude: 44.4640410, longitude: -73.2188930 },
{ latitude: 44.4640980, longitude: -73.2188890 },
{ latitude: 44.4641860, longitude: -73.2188990 },
{ latitude: 44.4642410, longitude: -73.2188950 },
{ latitude: 44.4643160, longitude: -73.2189130 },
{ latitude: 44.4643730, longitude: -73.2188910 },
{ latitude: 44.4644660, longitude: -73.2188810 },
{ latitude: 44.4645170, longitude: -73.2188830 },
{ latitude: 44.4646050, longitude: -73.2189050 },
{ latitude: 44.4646800, longitude: -73.2188830 },
{ latitude: 44.4647300, longitude: -73.2188970 },
{ latitude: 44.4648310, longitude: -73.2188950 },
{ latitude: 44.4649010, longitude: -73.2188840 },
{ latitude: 44.4649840, longitude: -73.2188820 },
{ latitude: 44.4650380, longitude: -73.2188690 },
{ latitude: 44.4651260, longitude: -73.2188740 },
{ latitude: 44.4652180, longitude: -73.2188750 },
{ latitude: 44.4652690, longitude: -73.2188600 },
{ latitude: 44.4653590, longitude: -73.2188660 },
{ latitude: 44.4654120, longitude: -73.2188790 },
{ latitude: 44.4654980, longitude: -73.2188830 },
{ latitude: 44.4655610, longitude: -73.2188770 },
{ latitude: 44.4656530, longitude: -73.2188510 },
{ latitude: 44.4657140, longitude: -73.2188580 },
{ latitude: 44.4658020, longitude: -73.2188620 },
{ latitude: 44.4659500, longitude: -73.2188660 },
{ latitude: 44.4660360, longitude: -73.2188720 },
{ latitude: 44.4660920, longitude: -73.2188590 },
{ latitude: 44.4661920, longitude: -73.2188560 },
{ latitude: 44.4662440, longitude: -73.2188560 },
{ latitude: 44.4663260, longitude: -73.2188850 },
{ latitude: 44.4663800, longitude: -73.2188780 },
{ latitude: 44.4664910, longitude: -73.2188690 },
{ latitude: 44.4665570, longitude: -73.2188750 },
{ latitude: 44.4666080, longitude: -73.2188750 },
{ latitude: 44.4667180, longitude: -73.2188810 },
{ latitude: 44.4667440, longitude: -73.2188770 },
{ latitude: 44.4668150, longitude: -73.2189010 },
{ latitude: 44.4668720, longitude: -73.2188910 },
{ latitude: 44.4669600, longitude: -73.2188740 },
{ latitude: 44.4670210, longitude: -73.2188890 },
{ latitude: 44.4671130, longitude: -73.2188660 },
{ latitude: 44.4671650, longitude: -73.2188730 },
{ latitude: 44.4672520, longitude: -73.2188670 },
{ latitude: 44.4673310, longitude: -73.2188720 },
{ latitude: 44.4673920, longitude: -73.2188780 },
{ latitude: 44.4674730, longitude: -73.2188590 },
{ latitude: 44.4675270, longitude: -73.2188590 },
{ latitude: 44.4676200, longitude: -73.2188620 },
{ latitude: 44.4676780, longitude: -73.2188570 },
{ latitude: 44.4677720, longitude: -73.2188430 },
{ latitude: 44.4678310, longitude: -73.2188430 },
{ latitude: 44.4679160, longitude: -73.2188470 },
{ latitude: 44.4680090, longitude: -73.2188490 },
{ latitude: 44.4680690, longitude: -73.2188360 },
{ latitude: 44.4681530, longitude: -73.2188360 },
{ latitude: 44.4682130, longitude: -73.2188800 },
{ latitude: 44.4682950, longitude: -73.2188510 },
{ latitude: 44.4683470, longitude: -73.2188800 },
{ latitude: 44.4684320, longitude: -73.2188810 },
{ latitude: 44.4684890, longitude: -73.2188940 },
{ latitude: 44.4685740, longitude: -73.2188890 },
{ latitude: 44.4686590, longitude: -73.2188960 },
{ latitude: 44.4687050, longitude: -73.2189110 },
{ latitude: 44.4687830, longitude: -73.2188960 },
{ latitude: 44.4688360, longitude: -73.2188950 },
{ latitude: 44.4688950, longitude: -73.2189190 },
{ latitude: 44.4689430, longitude: -73.2189110 },
{ latitude: 44.4690150, longitude: -73.2188900 },
{ latitude: 44.4690780, longitude: -73.2189070 },
{ latitude: 44.4691650, longitude: -73.2189490 },
{ latitude: 44.4692070, longitude: -73.2190060 },
{ latitude: 44.4692750, longitude: -73.2190440 },
{ latitude: 44.4693380, longitude: -73.2191150 },
{ latitude: 44.4693910, longitude: -73.2191440 },
{ latitude: 44.4694550, longitude: -73.2191930 },
{ latitude: 44.4695020, longitude: -73.2192300 },
{ latitude: 44.4695690, longitude: -73.2192980 },
{ latitude: 44.4696390, longitude: -73.2193600 },
{ latitude: 44.4696800, longitude: -73.2193860 },
{ latitude: 44.4697180, longitude: -73.2194480 },
{ latitude: 44.4698190, longitude: -73.2194860 },
{ latitude: 44.4698850, longitude: -73.2195320 },
{ latitude: 44.4699370, longitude: -73.2195490 },
{ latitude: 44.4700230, longitude: -73.2196020 },
{ latitude: 44.4700590, longitude: -73.2196270 },
{ latitude: 44.4701640, longitude: -73.2197110 },
{ latitude: 44.4702080, longitude: -73.2197250 },
{ latitude: 44.4702890, longitude: -73.2197630 },
{ latitude: 44.4703700, longitude: -73.2198020 },
{ latitude: 44.4704200, longitude: -73.2198250 },
{ latitude: 44.4705130, longitude: -73.2198810 },
{ latitude: 44.4705630, longitude: -73.2199150 },
{ latitude: 44.4706310, longitude: -73.2199530 },
{ latitude: 44.4706820, longitude: -73.2200040 },
{ latitude: 44.4707390, longitude: -73.2200710 },
{ latitude: 44.4707760, longitude: -73.2201210 },
{ latitude: 44.4707900, longitude: -73.2202610 },
{ latitude: 44.4707980, longitude: -73.2203380 },
{ latitude: 44.4708120, longitude: -73.2204480 },
{ latitude: 44.4708400, longitude: -73.2205660 },
{ latitude: 44.4708980, longitude: -73.2206190 },
{ latitude: 44.4709520, longitude: -73.2206860 },
{ latitude: 44.4709870, longitude: -73.2207150 },
{ latitude: 44.4710650, longitude: -73.2207610 },
{ latitude: 44.4711240, longitude: -73.2207550 },
{ latitude: 44.4711900, longitude: -73.2207220 },
{ latitude: 44.4712570, longitude: -73.2206880 },
{ latitude: 44.4713140, longitude: -73.2206550 },
{ latitude: 44.4713870, longitude: -73.2206070 },
{ latitude: 44.4714460, longitude: -73.2205710 },
{ latitude: 44.4715220, longitude: -73.2205400 },
{ latitude: 44.4715730, longitude: -73.2205440 },
{ latitude: 44.4716450, longitude: -73.2205030 },
{ latitude: 44.4716940, longitude: -73.2204860 },
{ latitude: 44.4717730, longitude: -73.2204600 },
{ latitude: 44.4718370, longitude: -73.2204680 },
{ latitude: 44.4719120, longitude: -73.2204560 },
{ latitude: 44.4719710, longitude: -73.2204400 },
{ latitude: 44.4720560, longitude: -73.2204450 },
{ latitude: 44.4721380, longitude: -73.2204290 },
{ latitude: 44.4722010, longitude: -73.2204380 },
{ latitude: 44.4722800, longitude: -73.2204410 },
{ latitude: 44.4723340, longitude: -73.2204360 },
{ latitude: 44.4724090, longitude: -73.2204200 },
{ latitude: 44.4724400, longitude: -73.2203740 },
{ latitude: 44.4724870, longitude: -73.2202760 },
{ latitude: 44.4725150, longitude: -73.2202140 },
{ latitude: 44.4725330, longitude: -73.2201140 },
{ latitude: 44.4725650, longitude: -73.2200090 },
{ latitude: 44.4725770, longitude: -73.2199190 },
{ latitude: 44.4725760, longitude: -73.2198280 },
{ latitude: 44.4725720, longitude: -73.2197600 },
{ latitude: 44.4725810, longitude: -73.2196530 },
{ latitude: 44.4725810, longitude: -73.2195900 },
{ latitude: 44.4725680, longitude: -73.2194850 },
{ latitude: 44.4725750, longitude: -73.2194130 },
{ latitude: 44.4725760, longitude: -73.2192840 },
{ latitude: 44.4726460, longitude: -73.2192150 },
{ latitude: 44.4727010, longitude: -73.2191780 },
{ latitude: 44.4727960, longitude: -73.2191580 },
{ latitude: 44.4728570, longitude: -73.2191610 },
{ latitude: 44.4729410, longitude: -73.2191500 },
{ latitude: 44.4730050, longitude: -73.2191480 },
{ latitude: 44.4730810, longitude: -73.2191660 },
{ latitude: 44.4731420, longitude: -73.2191810 },
{ latitude: 44.4732230, longitude: -73.2192200 },
{ latitude: 44.4733080, longitude: -73.2192510 },
{ latitude: 44.4733600, longitude: -73.2192680 },
{ latitude: 44.4734430, longitude: -73.2192740 },
{ latitude: 44.4735080, longitude: -73.2192830 },
{ latitude: 44.4735850, longitude: -73.2192900 },
{ latitude: 44.4736360, longitude: -73.2192890 },
{ latitude: 44.4737120, longitude: -73.2192120 },
{ latitude: 44.4737890, longitude: -73.2191940 },
{ latitude: 44.4738480, longitude: -73.2191890 },
{ latitude: 44.4739290, longitude: -73.2191850 },
{ latitude: 44.4739870, longitude: -73.2191750 },
{ latitude: 44.4740670, longitude: -73.2192060 },
{ latitude: 44.4740990, longitude: -73.2192500 },
{ latitude: 44.4742020, longitude: -73.2192680 },
{ latitude: 44.4742670, longitude: -73.2192670 },
{ latitude: 44.4743420, longitude: -73.2192920 },
{ latitude: 44.4743880, longitude: -73.2193310 },
{ latitude: 44.4744670, longitude: -73.2193900 },
{ latitude: 44.4745540, longitude: -73.2193730 },
{ latitude: 44.4745950, longitude: -73.2193380 },
{ latitude: 44.4746480, longitude: -73.2193050 },
{ latitude: 44.4747030, longitude: -73.2193040 },
{ latitude: 44.4747750, longitude: -73.2193010 },
{ latitude: 44.4748270, longitude: -73.2193100 },
{ latitude: 44.4749060, longitude: -73.2192980 },
{ latitude: 44.4749500, longitude: -73.2193170 },
{ latitude: 44.4750270, longitude: -73.2193540 },
{ latitude: 44.4750760, longitude: -73.2193850 },
{ latitude: 44.4751190, longitude: -73.2194920 },
{ latitude: 44.4751930, longitude: -73.2195330 },
{ latitude: 44.4752560, longitude: -73.2194890 },
{ latitude: 44.4753430, longitude: -73.2194470 },
{ latitude: 44.4754580, longitude: -73.2195030 },
{ latitude: 44.4755170, longitude: -73.2196470 },
{ latitude: 44.4755660, longitude: -73.2197420 },
{ latitude: 44.4756110, longitude: -73.2197850 },
{ latitude: 44.4756970, longitude: -73.2198310 },
{ latitude: 44.4757460, longitude: -73.2198210 },
{ latitude: 44.4758570, longitude: -73.2197850 },
{ latitude: 44.4759080, longitude: -73.2198050 },
{ latitude: 44.4759630, longitude: -73.2198710 },
{ latitude: 44.4759860, longitude: -73.2198920 },
{ latitude: 44.4760290, longitude: -73.2199380 },
{ latitude: 44.4760670, longitude: -73.2199730 },
{ latitude: 44.4761050, longitude: -73.2199970 },
{ latitude: 44.4761340, longitude: -73.2200060 },
{ latitude: 44.4761490, longitude: -73.2200150 },
{ latitude: 44.4762050, longitude: -73.2200070 },
{ latitude: 44.4762310, longitude: -73.2199960 },
{ latitude: 44.4762700, longitude: -73.2199890 },
{ latitude: 44.4763380, longitude: -73.2200240 },
{ latitude: 44.4763580, longitude: -73.2200310 },
{ latitude: 44.4764660, longitude: -73.2200270 },
{ latitude: 44.4765320, longitude: -73.2199610 },
{ latitude: 44.4766310, longitude: -73.2199350 },
{ latitude: 44.4766770, longitude: -73.2199160 },
{ latitude: 44.4766930, longitude: -73.2198490 },
{ latitude: 44.4767170, longitude: -73.2198050 },
{ latitude: 44.4767790, longitude: -73.2198810 },
{ latitude: 44.4767610, longitude: -73.2199810 },
{ latitude: 44.4767970, longitude: -73.2200990 },
{ latitude: 44.4767610, longitude: -73.2201950 },
{ latitude: 44.4767690, longitude: -73.2203180 },
{ latitude: 44.4767590, longitude: -73.2204330 },
{ latitude: 44.4767720, longitude: -73.2205260 },
{ latitude: 44.4768150, longitude: -73.2206140 },
{ latitude: 44.4768500, longitude: -73.2206550 },
{ latitude: 44.4769310, longitude: -73.2207000 },
{ latitude: 44.4769740, longitude: -73.2206990 },
{ latitude: 44.4770540, longitude: -73.2207000 },
{ latitude: 44.4771050, longitude: -73.2207030 },
{ latitude: 44.4771930, longitude: -73.2206940 },
{ latitude: 44.4772740, longitude: -73.2207220 },
{ latitude: 44.4773280, longitude: -73.2207430 },
{ latitude: 44.4774100, longitude: -73.2207540 },
{ latitude: 44.4774720, longitude: -73.2207560 },
{ latitude: 44.4775400, longitude: -73.2207540 },
{ latitude: 44.4775910, longitude: -73.2207860 },
{ latitude: 44.4776590, longitude: -73.2207800 },
{ latitude: 44.4777190, longitude: -73.2207880 },
{ latitude: 44.4778040, longitude: -73.2208090 },
{ latitude: 44.4778530, longitude: -73.2208170 },
{ latitude: 44.4779280, longitude: -73.2208320 },
{ latitude: 44.4780040, longitude: -73.2208410 },
{ latitude: 44.4780620, longitude: -73.2208570 },
{ latitude: 44.4781570, longitude: -73.2208850 },
{ latitude: 44.4782060, longitude: -73.2208970 },
{ latitude: 44.4782670, longitude: -73.2209030 },
{ latitude: 44.4783280, longitude: -73.2209080 },
{ latitude: 44.4784150, longitude: -73.2209120 },
{ latitude: 44.4784700, longitude: -73.2209200 },
{ latitude: 44.4785230, longitude: -73.2209410 },
{ latitude: 44.4785890, longitude: -73.2209510 },
{ latitude: 44.4786520, longitude: -73.2209720 },
{ latitude: 44.4787380, longitude: -73.2209990 },
{ latitude: 44.4787920, longitude: -73.2210120 },
{ latitude: 44.4788580, longitude: -73.2210570 },
{ latitude: 44.4789180, longitude: -73.2210310 },
{ latitude: 44.4789860, longitude: -73.2210690 },
{ latitude: 44.4790310, longitude: -73.2211050 },
{ latitude: 44.4791070, longitude: -73.2211380 },
{ latitude: 44.4791610, longitude: -73.2211410 },
{ latitude: 44.4792300, longitude: -73.2212010 },
{ latitude: 44.4792790, longitude: -73.2212260 },
{ latitude: 44.4793030, longitude: -73.2212140 },
{ latitude: 44.4793360, longitude: -73.2212220 },
{ latitude: 44.4793630, longitude: -73.2212240 },
{ latitude: 44.4793790, longitude: -73.2212830 }
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={6}
	/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});