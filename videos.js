// VIDEOS.JS - Gerch-Verse Video Database
// Single source of truth for all Sora content
// ============================================

const VIDEO_DB = {
  // ============================================
  // SOLO CHARACTER VIDEOS
  // ============================================
  solo: {
    // AMIT GAUR - Complete catalog (migrated)
    amit: [
      // Page 1
      { id: "s_6912260343288191b743f274ee30e7b2", thumb: "amit-q5ufo.jpg", oneLiner: "Q4 Milk Profits to Nirvana", arc: null },
      { id: "s_69122a2e5de8819183189a1d47e0e512", thumb: "amit-q5start.jpg", oneLiner: "Q5 Profits like Fresh Cream", arc: null },
      { id: "s_691232463604819180f69b2938f59375", thumb: "amit-automation.jpg", oneLiner: "AI Automation & Robotic Milk-Slapping", arc: null },
      { id: "s_6912576102a48191be283bd7cef6d949", thumb: "amit-legacydestinyhandshake.jpg", oneLiner: "Legacy. Destiny. Handshake.", arc: null },
      { id: "s_691265aa499c81918bad7e7826a6646f", thumb: "amit-midnightevidence.jpg", oneLiner: "Midnight Evidence Raid.", arc: null },
      { id: "s_691268db1fe48191a715837eea10a4ae", thumb: "amit-bangladeshwhip.jpg", oneLiner: "Archival footage: Bangladesh Whip", arc: null },
      { id: "s_691353f73fb88191953eb6fca8b841a0", thumb: "amit-greatwall-01.jpg", oneLiner: "The Great Wall of Milk.", arc: null },
      { id: "s_691358bf1e0c819185e237a4219f2b77", thumb: "amit-traderjoes.jpg", oneLiner: "This is how you destroy the competition.", arc: null },
      { id: "s_691358d681388191843b48ca3d6ac1c9", thumb: "amit-neversayno.jpg", oneLiner: "Never say no to the Gaur of Power.", arc: null },
      { id: "s_69135c736ac08191be4424683ec1179e", thumb: "amit-tednamaste.jpg", oneLiner: "TED: Namaste profits to you all.", arc: null },
      { id: "s_69136063eeb081919815295beae07040", thumb: "amit-spacegulagboard.jpg", oneLiner: "Question Amit or Q5 = space gulag", arc: null },
      { id: "s_6913650d2d988191b38f6769c9ed2fa0", thumb: "amit-q4speech.jpg", oneLiner: "Family and Ritual", arc: null },
      
      // Page 2
      { id: "s_69136a7a68f48191b1df0beee9351954", thumb: "amit-boringnumbers.jpg", oneLiner: "Numbers are boring - Come see the cows.", arc: null },
      { id: "s_6913d2e8adcc8191b74abd94f544c26a", thumb: "amit-100handslap-01.jpg", oneLiner: "100% Hand-Slapped Ver 1", arc: null },
      { id: "s_6913d6fb333081919db6927a0b9ae222", thumb: "amit-100handslap-02.jpg", oneLiner: "100% Hand-Slapped Ver 2.", arc: null },
      { id: "s_6913da1725388191903e272922760195", thumb: "amit-colordust.jpg", oneLiner: "The Milk Flows Free", arc: null },
      { id: "s_6913f87082548191a18788816ca3a68b", thumb: "amit-notjustproduct.jpg", oneLiner: "Gerch isn't just a product.", arc: null },
      { id: "s_69140701b6e08191bfc613d1ad23fa14", thumb: "amit-punjabpromo.jpg", oneLiner: "Punjabi Bhangra Milk Promo", arc: null },
      { id: "s_69140952a25881918614e0edb3da8538", thumb: "amit-gerchmilkman.jpg", oneLiner: "The Gerch Milk Man Music Video.", arc: null },
      { id: "s_69140c083d108191b8cb6e07730b652c", thumb: "amit-bangladeshwhip-02.jpg", oneLiner: "Bangladesh Whip Pt. 2", arc: null },
      { id: "s_6914925fff8481918fa6d9355b5b6d81", thumb: "amit-milkspeech02.jpg", oneLiner: "Like a monsoon into Profit Rivers.", arc: null },
      { id: "s_691496db94a0819186f179d641110cf3", thumb: "amit-openingbell-01.jpg", oneLiner: "Gerchan Farms goes public.", arc: null },
      { id: "s_691498526a6081918ef92358a62fcc13", thumb: "amit-fairdairybooth.jpg", oneLiner: "At the fair's dairy booth.", arc: null },
      { id: "s_6914a111ace081919201caeffa1732f8", thumb: "amit-timeforprofits.jpg", oneLiner: "Wake up. It's time for profits", arc: null },
      
      // Page 3
      { id: "s_6914a2e8e52c8191a2077c1583f648aa", thumb: "amit-moneymoney.jpg", oneLiner: "Milk that money money money.", arc: null },
      { id: "s_6914b128329c8191910ea06301ee7241", thumb: "amit-newsuniverse.jpg", oneLiner: "The universe cries for milk.", arc: null },
      { id: "s_6914b5ac57b48191af9ae33ad4edd6c5", thumb: "amit-onstage.jpg", oneLiner: "The Amit rock show speech", arc: null },
      { id: "s_6914b869f5b88191b37df0bf0502a001", thumb: "amit-inflationaid.jpg", oneLiner: "Gerchan Farms: inflation assistance.", arc: null },
      { id: "s_6914bbf1edfc819196b67633d6bc0a7c", thumb: "amit-outputincrease.jpg", oneLiner: "Double the cows. Triple the shifts.", arc: null },
      { id: "s_6914d915e51c81918de4822f0614e694", thumb: "amit-drinkunmilk.jpg", oneLiner: "Drinkin' the UN's Milk. Literally", arc: null },
      { id: "s_6914d9a7558881918842142716e6baf0", thumb: "amit-milkyway.jpg", oneLiner: "Amit acquires the Milky Way.", arc: null },
      { id: "s_6914dc9086148191b39cca4aef54d0ab", thumb: "amit-gerchmilkbathhouse.jpg", oneLiner: "Gerch Milk Bathhouse Unveiling.", arc: null },
      { id: "s_6914dfedcea881919e1ce84d21047d41", thumb: "amit-netflixchalamet.jpg", oneLiner: "Timothée Chalamet or bust.", arc: null },
      { id: "s_6914e011e27081918be0c249632e44f3", thumb: "amit-rogerrabbit.jpg", oneLiner: "Exaggeration of Profits.", arc: null },
      { id: "s_6914e542b8448191964cb80f5aa372e8", thumb: "amit-mtrushmore.jpg", oneLiner: "Mount Rushmore gets an addition.", arc: null },
      { id: "s_6914eef59c7c819186d833168d62e3a8", thumb: "amit-gerchanfarmstour.jpg", oneLiner: "Gerchan Farms Tour (NDA Mandatory).", arc: null },

      // Page 4
      { id: "s_69150423239c819188eaf972a83a344c", thumb: "amit-fakenewswhereisgerchan", oneLiner: "WHERE IS GERCHAN?!?", arc: null },
      { id: "s_69150ee2779c8191a26e000429c55165", thumb: "amit-courtinsidevoice", oneLiner: "Amit's inside voice at court.", arc: null },
      { id: "s_69151abc70488191a1a9b6f1a66df085", thumb: "amit-peoplemagazine", oneLiner: "Amit: People Magazine feature.", arc: null },
      { id: "s_691526c7094c8191958202343f0973f5", thumb: "amit-gerchanmedicalbills", oneLiner: "Gerchan's medical bills.", arc: null },
      { id: "s_6915341347cc8191b4758e191b09b652", thumb: "amit-investorpressure", oneLiner: "Amit's faced w/investor pressure.", arc: null },
      { id: "s_6915e728eaf08191af8ae28ffff41e19", thumb: "amit-fundingacquired", oneLiner: "Funding Secured.", arc: null },
      { id: "s_6915f8403bf88191b387aa6f398f10e8", thumb: "amit-MNN", oneLiner: "Mumbai Today -> Milk News Network.", arc: null },
      { id: "s_6915fd0aea7881919e14b7c4252df0a9", thumb: "amit-wholesalegerch", oneLiner: "Wholesale Retailer Expansion.", arc: null },
      { id: "s_6915fd1df15c8191a69be9e163682a11", thumb: "amit-gerchmilkjapan", oneLiner: "Gerch Milk in Japan: ガーチ・ミルク", arc: null },
      { id: "s_6916025be4cc819197d914fe309f1e60", thumb: "amit-sellingatmarket", oneLiner: "The Espresso Stabilizer.", arc: null },
      { id: "s_691603ed7f748191b3ca7acaab058501", thumb: "amit-sharktankdenial", oneLiner: "Amit vs The Shark Tank.", arc: null },
      { id: "s_6916068e93a48191bbbc45c5290cabcd", thumb: "amit-loanrejection", oneLiner: "Gerchan Farms Loan Rejection.", arc: null },

      // Pages 5
      { id: "s_69160c20461c8191a8366815ae9e2117", thumb: "amit-newproducts", oneLiner: "Gerchan Farms New Product Line.", arc: null },
      { id: "s_69163a1f4330819187168dcedb9faa96", thumb: "amit-boardbetrayal", oneLiner: "Amit refuses to sit with betrayal.", arc: null },
      { id: "s_69164791dbc48191a28b97fdd644b50c", thumb: "amit-uncontainable", oneLiner: "Amit's uncontainable might.", arc: null },
      { id: "s_691655ea8fb48191aa0cacc0d9d536f5", thumb: "amit-milkagepirates", oneLiner: "Pirates of the Milk Age.", arc: null },
      { id: "s_691658468c048191b7d3fb405bd548ce", thumb: "amit-gerchzen", oneLiner: "The Gerch Zen.", arc: null },
      { id: "s_691674114bcc819196233048574f1866", thumb: "amit-milksnap", oneLiner: "The Milk Snap.", arc: null },
      { id: "s_6916ad6d13248191aada8d517779eb54", thumb: "amit-profitsfreedom", oneLiner: "Some profits for freedom.", arc: null },
      { id: "s_6916c3b4a7f08191b35fa401465a2ca1", thumb: "amit-cantlovegerchan", oneLiner: "Can't love what you can't love.", arc: null },
      { id: "s_6917462b0eb881919543e7647dd931c2", thumb: "amit-stopthelies", oneLiner: "Stop the pour. Stop the lies.", arc: null },
      { id: "s_69174b9b22c88191a14394d70ee28c8d", thumb: "amit-schrodinger", oneLiner: "Quantum Mechanics & Gerchan.", arc: null },
      { id: "s_69174f8c74c88191bffdcfceb6418611", thumb: "amit-gerchangender", oneLiner: "Gerchan's gender.", arc: null },
      { id: "s_69178828ada8819188384a5912d1726e", thumb: "amit-regalityachieved", oneLiner: "Profit margin sanctification.", arc: null },

      // Page 6
      { id: "s_691788bfb044819185ad77476f5d158a", thumb: "amit-cowcraft", oneLiner: "Cowcraft Competition.", arc: null },
      { id: "s_6917893b1d8881918a422ee67c4f0e02", thumb: "amit-milkstar", oneLiner: "The Milk Star.", arc: null },
      { id: "s_69179818321c8191bbdd968c3cddcc0e", thumb: "amit-jrharvard", oneLiner: "Amit Jr. x Harvard.", arc: null },
      { id: "s_6917b28a02048191aa5aee100541c771", thumb: "amit-businessinsider", oneLiner: "Business Insider Magazine: Amit Gaur.", arc: null },
      { id: "s_6917b72e927081918ac91b817d264622", thumb: "amit-factorymutiny", oneLiner: "Mutiny at the factory.", arc: null },
      { id: "s_69189c6c007c819195cd25d3620cccad", thumb: "amit-typicalboardmeeting", oneLiner: "Typical board meeting.", arc: null },
      { id: "s_6918a388c1b08191b6c9f7260877a498", thumb: "amit-buythedip", oneLiner: "Buy the dip.", arc: null },
      { id: "s_6918bae15d8881919274ff0b23ea08ef", thumb: "amit-ultragodzilla", oneLiner: "Ultra Amit vs Godzilla.", arc: null },
      { id: "s_6918bba3b41c81918923feb393b012c1", thumb: "amit-f1-01", oneLiner: "F1: Race for profits.", arc: null },
      { id: "s_6918bd3000a08191a586c1fd5f7a842c", thumb: "amit-galacticmilkterritory", oneLiner: "Acquisition: Galactic Milk Territory.", arc: null },
      { id: "s_6918e21c8d508191b0246de5428866c4", thumb: "amit-500trillion", oneLiner: "$500,000,000,000 ROI.", arc: null },
      { id: "s_6918e503d51c81918c42ea31efa23fc0", thumb: "amit-abovethelaw", oneLiner: "Amit stops for nobody.", arc: null },
      
      // Page 7
      { id: "s_6918eab28c748191a87d3a393486731b", thumb: "amit-wrongmilk", oneLiner: "Not the milk I wanted.", arc: null },
      { id: "s_6918f5d815e0819184afbfbb1002adc5", thumb: "amit-rap", oneLiner: "Gaur of power, man of the hour.", arc: null },
      { id: "s_6918fbfa60c0819189f630622d684257", thumb: "amit-bankruptpurpose", oneLiner: "From bankrupty to finding new purpose.", arc: null },
      { id: "s_6918ff0c3ed88191a62cf4d59c3e02d1", thumb: "amit-guinessworldrecords", oneLiner: "Guiness World Records.", arc: null },
      { id: "s_69190244991881919e9d7e3a6dc27961", thumb: "amit-endlactoseintolerance", oneLiner: "Race to end lactose intolerance.", arc: null },
      { id: "s_69190dfcfe5c81918b3da55cb694496e", thumb: "amit-butchery", oneLiner: "Gerchan Farms Butchery for Retired Clones.", arc: null },
      { id: "s_69196aa17c78819185b605fdab36538d", thumb: "amit-expresslane", oneLiner: "When the express lane is slower.", arc: null },
      { id: "s_6919f392e80c8191a3fdc04cc3c3c39f", thumb: "amit-nongerchdairy", oneLiner: "Thanksgiving: Families skipping non-Gerch dairy.", arc: null },
      { id: "s_6919f7768c6881918a370d48782dc320", thumb: "amit-lactosemyth", oneLiner: "Lactose Intolerance = Myth.", arc: null },
      { id: "s_691a49cda5588191886e73cf6ed78ec7", thumb: "amit-lactoseinsolence", oneLiner: "Lactose Intolerance = Insolence.", arc: null },
      { id: "s_691a4a0ecdc0819186069c26c9f4f30d", thumb: "amit-curryblastrocket", oneLiner: "Not just metal and mass. Curryblast", arc: null },
      { id: "s_691a5e3878c48191a46575359a745cf5", thumb: "amit-cowKPIs", oneLiner: "The Dreaded KPI Discussion.", arc: null },
      
      // Page 8
      { id: "s_691a900a0af08191b34f4336cb82a1b8", thumb: "amit-milkmonarch", oneLiner: "The Monarch of Milk.", arc: null },
      { id: "s_691a9017f8e08191b3ec461a5173a286", thumb: "amit-cowblessing", oneLiner: "The cow's blessing in plastic.", arc: null },
      { id: "s_691b43063748819183fc30a6e3d02997", thumb: "amit-legacynotprofits", oneLiner: "Gerchan is legacy, not profits.", arc: null },
      { id: "s_691b4317402081918b37a0cc4832d6a5", thumb: "amit-quarterlyreview", oneLiner: "Quarterly Profits Review.", arc: null },
      { id: "s_691b63979aec8191b858ead63b678d29", thumb: "amit-gmilkfreeforall", oneLiner: "Gerch Milk free-for-all.", arc: null },
      { id: "s_691b647141508191b13d9f12eb3251d0", thumb: "amit-67gerchmilks", oneLiner: "67 Gerch Milks.", arc: null },
      { id: "s_691b6acebea4819189f1e93e1fbcc83a", thumb: "amit-milktaxprotest", oneLiner: "No more milk taxes. Amit is evil.", arc: null },
      { id: "s_691b6b8555088191bf809c53d8e320bc", thumb: "amit-factoryslap", oneLiner: "Awake at the factory.", arc: null },
      { id: "s_691b70cc7a0081918825cf9a312f0242", thumb: "amit-bathroomfun", oneLiner: "HR can talk to the hand.", arc: null },
      { id: "s_691b7bedfd5081919a263107bf4fac1f", thumb: "amit-thehollowglass", oneLiner: "The Hollow Glass.", arc: null },
      { id: "s_691b91cc78948191aca7e611b072072a", thumb: "amit-clownofcream", oneLiner: "Clown of Cream.", arc: null },
      { id: "s_691b981e4b048191978cf54dcc750272", thumb: "amit-gerchtrekfinalfrontier", oneLiner: "Gerch Trek: Milking the Final Frontier.", arc: null },
      
      // Page 9
      { id: "s_691bb2f371bc81918a00f041864d7e51", thumb: "amit-q6empire", oneLiner: "The Amit Q6 Empire.", arc: null },
      { id: "s_691bb50992388191b90eadd45c6ff5b4", thumb: "amit-repent", oneLiner: "Repenting for Gerchan Milk Abuse.", arc: null },
      { id: "s_691bbceed9b081918936ceb6d045e95a", thumb: "amit-gerch-robics", oneLiner: "Gerch-robics.", arc: null },
      { id: "s_691bbd63e69c819199931f768eea3136", thumb: "amit-actionfigure-01", oneLiner: "The Visionary Executive Action Figure.", arc: null },
      { id: "s_691bc8e0296c81918836c92695fe13a9", thumb: "amit-wmdlaundering", oneLiner: "Amit Gaur x WMDs.", arc: null },
      { id: "s_691bd31a03888191a6d32a1dea517862", thumb: "amit-greatwall-02", oneLiner: "Amit purchases the Great Wall.", arc: null },
      { id: "s_691c0e7019088191a9189f1b842e8f40", thumb: "amit-rodeo", oneLiner: "Amit the bull-tamer.", arc: null },
      { id: "s_691c9dabc29881918678246b2b1433fe", thumb: "amit-gerchrobotics", oneLiner: "Gerch Robotics.", arc: null },
      { id: "s_691cc305909c819196e03d033458b47f", thumb: "amit-eiffeltower", oneLiner: "The Eiffel Tower's new owner.", arc: null },
      { id: "s_691cc31ca4f48191951d03059b16f0e0", thumb: "amit-inspection", oneLiner: "Fly-in inspection.", arc: null },
      { id: "s_691cc3a63cfc8191a15f009dafe2076e", thumb: "amit-gerchkart", oneLiner: "Gerch Kart.", arc: null },
      { id: "s_691cc3ba473481918aeaba7036050d0e", thumb: "amit-scroogemcgaur", oneLiner: "Scrooge Mc-Gaur.", arc: null },
      
      // Page 10
      { id: "s_691cd9289a2481919a7f7ede11013f7a", thumb: "amit-gws", oneLiner: "GWS: World's largest datacenter infrastructure.", arc: null },
      { id: "s_691cf10c0914819182a446918b283ad9", thumb: "amit-q5musical", oneLiner: "Q5 Profits: The Musical.", arc: null },
      { id: "s_691cf465e86c81919d185efd6ce9dd0e", thumb: "amit-cloudflareoutage", oneLiner: "Cloudflare Outage.", arc: null },
      { id: "s_691d032ab82c819195ed6a742e86da7c", thumb: "amit-zeusbasketball", oneLiner: "21 with Zeus.", arc: null },
      { id: "s_691d20e836e08191925847c6145bccdb", thumb: "amit-ptoeliminated", oneLiner: "New PTO Policy.", arc: null },
      { id: "s_691d323ed5508191867ed5b2a2230fab", thumb: "amit-hotones-01", oneLiner: "Hot Ones feat. Amit Gaur.", arc: null },
      { id: "s_691ddbfcb58c81918e7c5fef56a95d84", thumb: "amit-thegame", oneLiner: "Amit tries The Game.", arc: null },
      { id: "s_691de177caa08191adcd8175fd424286", thumb: "amit-firstpitch", oneLiner: "First pitch.", arc: null },
      { id: "s_691de9cee660819199acac17b656d7e6", thumb: "amit-udderlyinsolent", oneLiner: "Grand Opening of Udderly Insolent.", arc: null },
      { id: "s_691e0e2de7248191a1f1a9547c16e911", thumb: "amit-reporters", oneLiner: "Amit does not dignify rumors.", arc: null },
      { id: "s_691e178d8ad0819190ac0e408f6ce3a8", thumb: "amit-chernobyl-expansion", oneLiner: "Chernobyl expansion.", arc: null },
      { id: "s_691e2f8e78148191968d2bc87106824b", thumb: "amit-disney", oneLiner: "Happiest Place on Earth: Acquired.", arc: null },
      
      // Page 11
      { id: "s_691e59615f2881919b12fc5628d130c2", thumb: "amit-gerchwheel", oneLiner: "Spin the Gerch Wheel.", arc: null },
      { id: "s_691e63d93ba08191a6c8236656feaf23", thumb: "amit-milkgrunge", oneLiner: "Milk Grunge.", arc: null },
      { id: "s_691e68dc72688191a48c2f2a29e6d06e", thumb: "amit-gerchanfarmsipo-2", oneLiner: "Gerchan Farms IPO Alt ver.", arc: null },
      { id: "s_691eb02db3f08191b6ffb19cdb1bfb44", thumb: "amit-rocketinspection", oneLiner: "Bigger. Stronger.", arc: null },
      { id: "s_6929a51d15688191a0f488d220a8e003", thumb: "amit-pegasuschase", oneLiner: "The boys in blue can't catch Amit.", arc: null },
      { id: "s_69264dbb2eac81918100f0246ab7923c", thumb: "amit-reinstate-demand", oneLiner: "Reinstate Demand.", arc: null },
      { id: "s_69295b7848c081918bdaf6f6ce692e14", thumb: "amit-happygerchsgiving", oneLiner: "Happy Gerchsgiving.", arc: null },
      { id: "s_692a26c8128481918e8b7265ac68771a", thumb: "amit-winnerwinner", oneLiner: "Winner, winner!.", arc: null },
      { id: "s_692b135d99208191902ea53c9847eba5", thumb: "amit-pegasuspolice", oneLiner: "Amit evades the authorities again.", arc: null },
      { id: "s_692b8c51fe7481919d51bb6267f44cef", thumb: "amit-corporateextremesports", oneLiner: "Corporate Extreme Sports.", arc: null },
      { id: "s_692c76015a70819185ad84050335c6e5", thumb: "amit-beefdairyfuture", oneLiner: "Milk & Beef: This is the future.", arc: null },
      { id: "s_692cd27d97fc8191ba8753cb244795b6", thumb: "amit-doggyleonpegasus", oneLiner: "Doggy knows about Leon's Pegasus.", arc: null },
      
      // Page 12
      { id: "s_692d0da359dc8191b4df1804ed20da7f", thumb: "amit-boringmeetings", oneLiner: "Meetings are boring for Amit.", arc: null },
      { id: "s_692db5d117c8819199c79ce1aa6be957", thumb: "amit-restructuring", oneLiner: "Restructuring.", arc: null },
      { id: "s_69336c5466408191b4cb307bcaec8a9a", thumb: "amit-insolentcow01", oneLiner: "INSOLENT COW.", arc: null },
      { id: "s_6938f70c50708191a8765cbcdc81a419", thumb: "amit-buysallcows", oneLiner: "Amit buys ALL of the cows.", arc: null },
      { id: "s_693a6f59435c8191908fd68469386924", thumb: "amit-nationalmilkshortage", oneLiner: "National milk shortage.", arc: null },
      { id: "s_693bc9a9aea48191808453568eb2fb98", thumb: "amit-amitsupreme", oneLiner: "Movie Trailer - Amit Supreme: Dream Gargantuan.", arc: null },
      { id: "s_693c52107b188191b9ba2404f78d6cb6", thumb: "amit-pledgeallegiance", oneLiner: "The Revised Pledge of Allegiance.", arc: null },
      { id: "s_693c535aff2081918ce382bcf540e1b3", thumb: "amit-chocomilk", oneLiner: "Chocolate Milk.", arc: null },
      { id: "s_693c7c4eb8e48191819bc6d0a4e1d170", thumb: "amit-merrygerchmas01", oneLiner: "Merry Gerchmas.", arc: null },
      { id: "s_693c81dbf44081919e5118f00ce378c3", thumb: "amit-pirahnatank", oneLiner: "Pirahna Tank wants Big Tex instead.", arc: null },
      { id: "s_693d16eb8e7081919c8c383ee7a23719", thumb: "amit-merrygerchmas02", oneLiner: "Merry Gerchmas alt ver.", arc: null },
      { id: "s_693e52c66d7c8191a43326736f364833", thumb: "amit-gerchstolexmas", oneLiner: "The Gerch who Stole Christmas.", arc: null },
      
      // Page 13
      { id: "s_6944d7831a3c8191bbf69fffdf023e4e", thumb: "amit-wantmilkxmas", oneLiner: "All I want for Christmas.", arc: null },
      { id: "s_69458b0fb82081918e418a6a87642914", thumb: "amit-investorslaughing", oneLiner: "Insolent meeting.", arc: null },
      { id: "s_6945c5412a6c8191858ec3b281fca537", thumb: "amit-sickfrominsolentcows", oneLiner: "Amit's sick from insolent cows.", arc: null },
      { id: "s_6945cb6ac2cc819194ce10a1d065d8f0", thumb: "amit-gadhachamber", oneLiner: "Gadha's golden blessing.", arc: null },
      { id: "s_69521ee24f90819197c09b4ec9cf65ae", thumb: "amit-freshmaker", oneLiner: "Gerchan: The Fresh Maker.", arc: null },
      { id: "s_69522829fc2c8191a8c41d083b92fa57", thumb: "amit-freshmaker02", oneLiner: "Gerchan: The Fresh Maker Alt Ver.", arc: null },
      { id: "s_6952341114108191ba8390f2c575b682", thumb: "amit-milk-gladiator", oneLiner: "Amit the gladiator.", arc: null },
      { id: "s_6955d44a64848191b9a5814707bc02f0", thumb: "amit-gerchpops", oneLiner: "Gerch Pop: Popsicles that moo-ve you.", arc: null },
      { id: "s_6955d5af75948191a0d48f2451723386", thumb: "amit-newwaytomoove", oneLiner: "The new way to moo-ve.", arc: null },
      { id: "s_6956b122a358819194752827c6e9d06a", thumb: "amit-milkvoyage", oneLiner: "The milk voyage.", arc: null },
      { id: "s_6957e80a59348191b4738c4adfc0faaf", thumb: "amit-gerchnewyear", oneLiner: "Happy Gerch New Year!", arc: null },
      { id: "s_6958054e3980819187f97528e7073358", thumb: "amit-gerchborg", oneLiner: "Destiny automated.", arc: null },
      
      // Page 14
      { id: "s_6959441b651081918cb6df354864024e", thumb: "amit-noq6talk", oneLiner: "Straight to Q7.", arc: null },
      { id: "s_69599385bea8819191d69dbb7b1a4284", thumb: "amit-expertportrait", oneLiner: "Expert portrait.", arc: null },
      { id: "s_695c406b93348191929f1ae046fc07f5", thumb: "amit-milkedmovie", oneLiner: "MILKED.", arc: null },
      { id: "s_695ed07f9b4c8191909fa6123465c878", thumb: "amit-infinitycow", oneLiner: "Amit explains the meaning behind his name.", arc: null },
      { id: "s_695e0da9d5808191b46bfe2eb7d9cb82", thumb: "amit-horserace", oneLiner: "Amit joins the derby.", arc: null },
      { id: "s_695fbd507e308191835b51122d870e57", thumb: "amit-megachurch", oneLiner: "Amit demonstrates his mojo to a live audience.", arc: null },
      { id: "s_695fd31da7e88191ab54e166a00fc8e1", thumb: "amit-nopatience", oneLiner: "Amit's patience is tested.", arc: null },
      { id: "s_6960a8afc5548191aab7dc1dc21cf3d3", thumb: "amit-secret-weapon", oneLiner: "Amit's secret negotiation weapon.", arc: null },
      { id: "s_6960b86254b48191b5803dffcdce8240", thumb: "amit-gladiator2", oneLiner: "Lac vestrum bibo!", arc: null },
      { id: "s_6964178f0cb48191aa09768f8b7e6a41", thumb: "amit-empire-rising", oneLiner: "Empire rising higher, burning brighter.", arc: null },
      { id: "s_69641d260bec8191bec98849774eeb80", thumb: "amit-philanthropic-initiatives", oneLiner: "Amit's philanthropic initiatives proposal.", arc: null },
      { id: "s_69646d9043988191b4f42181c6f1ae6a", thumb: "amit-gerch-profits-classroom", oneLiner: "Gerch Q5 Profits Classroom.", arc: null },
      
      // Page 15
      { id: "s_696517a5f75c81919ab4a91887bc2444", thumb: "amit-swiperightdestiny", oneLiner: "Amit tries Improv.", arc: null },
      { id: "s_69657b87f2e88191b2336eb3992ee762", thumb: "amit-ontvlegacynotproduct", oneLiner: "Legacy, not product.", arc: null },
      { id: "s_6965c5d17aa88191b670512dd8b9150a", thumb: "amit-gerchaninsolentcow01", oneLiner: "Gerchan is an Insolent Cow V1.", arc: null },
      { id: "s_6965d0904ee08191a534cd50c731e1dc", thumb: "amit-gerchaninsolentcow02", oneLiner: "Gerchan is an Insolent Cow V2.", arc: null },
      { id: "s_696670780d6c8191a0c6ec3ca194cb04", thumb: "amit-legalmeth", oneLiner: "Amit with a hot take.", arc: null },
      { id: "s_69667aef2130819189a6bba888240746", thumb: "amit-needabath", oneLiner: "Doesn't smell very good.", arc: null },
      { id: "s_6966a55630548191b44da9a84733fe28", thumb: "amit-silence-is-golden", oneLiner: "Silence is golden.", arc: null },
      { id: "s_6966d0e05bc88191bbaa6da4f1959fbc", thumb: "amit-buys-tajmahal", oneLiner: "Amit buys the Taj Mahal.", arc: null },
      { id: "s_6966def121a881919dd8e8a36814b255", thumb: "amit-burning-cow", oneLiner: "Burning Cow.", arc: null },
      { id: "s_69672c603e1081918d4b26c9eb388c5d", thumb: "amit-favorite-date-place", oneLiner: "Favorite place to take your date.", arc: null },
      { id: "s_6967bb746f90819199a982da27d55e94", thumb: "amit-q5-world-afterall", oneLiner: "It's a Q5 world afterall.", arc: null },
      { id: "s_6967fe0e2090819198c613c6387cd503", thumb: "amit-gerch-motors", oneLiner: "Introducing: Gerch Motors.", arc: null },
      
      // Page 16
      { id: "s_696943f9de1c819181002150288d5183", thumb: "amit-lamoomoos", oneLiner: "LaMooMoos.", arc: null },
      { id: "s_696a670387a88191b838fa66284bb952", thumb: "amit-lamoomoo-scrutiny", oneLiner: "LaMooMoo controversy.", arc: null },
      { id: "s_696a9171495881919c03bdfb70c2c4e2", thumb: "amit-naan-chutney", oneLiner: "Naan and Chutney.", arc: null },
      { id: "s_696c3fb194888191901c2bd914281da3", thumb: "amit-where-are-you-gerchan", oneLiner: "WHERE IS GERCHAN?", arc: null },
      { id: "s_696c7ba044708191874b1c73c5090ce1", thumb: "amit-classic-rap", oneLiner: "Amit self-intro.", arc: null },
      { id: "s_696d92f48f648191bc9667d0be06fde4", thumb: "amit-readyforwork", oneLiner: "He's ready.", arc: null },
      { id: "s_696e69d2affc8191bdc46bd9e54d22dc", thumb: "amit-insolentchildren", oneLiner: "Insolent children.", arc: null },
      { id: "s_69702ab087908191b83930c3ea3ce089", thumb: "amit-book", oneLiner: "Amit's Auto-biography.", arc: null },
      { id: "s_697111e619748191b3e58528acd82d5d", thumb: "amit-braveheart", oneLiner: "Amit Auditions for Braveheart.", arc: null },
      { id: "s_69711f39077481918b68783818297b21", thumb: "amit-thingsyouhidefromyourmother", oneLiner: "Things you hide from your mother.", arc: null },
      { id: "s_697173baeb3881919fcb28ed4f4c5918", thumb: "amit-howstarsdie", oneLiner: "How stars die.", arc: null },
      { id: "s_6971a917ced08191bd8cc48636e69a4a", thumb: "amit-host-saturdaynight", oneLiner: "Tonight's host for Saturday Night.", arc: null },
      
      // Page 17
      { id: "s_69724578df40819186361433556b72e9", thumb: "amit-light-amit-concept-01", oneLiner: "Light Amit Concept Ver 1.", arc: null },
      { id: "s_697245b0e008819199bf20643cdd65fc", thumb: "amit-light-amit-concept-02", oneLiner: "Light Amit Concept Ver 2.", arc: null },
      { id: "s_6972490ebc88819184ba50bb7bb7d583", thumb: "amit-dark-amit-concept-01", oneLiner: "Dark Amit Concept Ver 1.", arc: null },
      { id: "s_6972492aacd88191a341381cbbc8b0d2", thumb: "amit-dark-amit-concept-02", oneLiner: "Dark Amit Concept Ver 2.", arc: null },
    ],
    
    lizzie: [
      // Page 1
      { id: "s_6925d4046970819181ade1af335553cf", thumb: "solo-lizzie-ionix-intro", oneLiner: "This is Ionix.", arc: null },
      { id: "s_6920a25f0a608191be14559b83244e72", thumb: "solo-lizzie-self-pep-talk", oneLiner: "Lizzie prepares to pitch to investors.", arc: null },
      { id: "s_691eb06691a88191b48e56069b8601f2", thumb: "solo-lizzie-amit-invests", oneLiner: "First investor secured.", arc: null },
      { id: "s_691f7f62c0688191868d74d930b4fb60", thumb: "solo-lizzie-progress-optional", oneLiner: "Visibility is optional.", arc: null },
      { id: "s_691f7c006244819193d9e093c2693719", thumb: "solo-lizzie-technical-difficulties", oneLiner: "Technical difficulties.", arc: null },
      { id: "s_69209e853a548191b95f3d5f2afce97e", thumb: "solo-lizzie-non-communication", oneLiner: "Lizzie ignores the FTC.", arc: null },
      { id: "s_691f7c20b4b08191a6703297f387fd2d", thumb: "solo-lizzie-nocturnal-clients", oneLiner: "Lizzie's nocturnal clients.", arc: null },
      { id: "s_691f505e9d748191aae19d2b73fdec12", thumb: "solo-lizzie-blood-analyzer-toy", oneLiner: "Blood Analyzer for kids.", arc: null },
      { id: "s_6929fb4571b48191a40d6b9376a7a633", thumb: "solo-lizzie-vegan-cheese", oneLiner: "Lizzie marketing her Vegan Cheese brand.", arc: null },
      { id: "s_692c6e6809348191894dc82d2301dce1", thumb: "solo-lizzie-anti-age", oneLiner: "Lizzie's secret weapon.", arc: null },
      { id: "s_693d23e2d0908191987382192c68c34e", thumb: "solo-lizzie-xmas-spirit", oneLiner: "Lizzie and Ionix is here to help. Happy Holidays.", arc: null },
      { id: "s_6945e67dd9548191b1e6349a8c141971", thumb: "solo-lizzie-market-shenanigans", oneLiner: "Lizzie plans to tank Gerchan Farms.", arc: null },
      
      // Page 2
    ],
    leon: [
      // Page 1
      { id: "s_6931bf0e9b548191b4bc2389993291c6", thumb: "solo-leon-intro", oneLiner: "Who is Leon Cochran?", arc: null },
      { id: "s_696974a2de1c819182f58d34e6cdade0", thumb: "solo-leon-billboard-ad", oneLiner: "Leon's billboard ad.", arc: null },
      { id: "s_6923f563d1dc8191933afe757ccfd50d", thumb: "solo-leon-cart-defense", oneLiner: "Leon's cart defense.", arc: null },
      { id: "s_692610bed5a881918710813439b36237", thumb: "solo-leon-immersive-realism", oneLiner: "Leon cites 'immersive realism'.", arc: null },
      { id: "s_6926690ce67c819187b2b5425ae3f5da", thumb: "solo-leon-golden-ticket", oneLiner: "Leon's 'fine print' defense.", arc: null },
      { id: "s_6926753df8c48191b005df80669e9398", thumb: "solo-leon-engineered-traps", oneLiner: "Engineered traps.", arc: null },
      { id: "s_692a8474bcd88191b858b59d912d8201", thumb: "solo-leon-iceberg-vindicated", oneLiner: "The iceberg was not guilty.", arc: null },
      { id: "s_69535b3bf7e881919b88d1d06132b124", thumb: "solo-leon-riddlers-ballad", oneLiner: "A Riddler's Ballad.", arc: null },
      { id: "s_692e026b7f348191834a694ea16a694e", thumb: "solo-leon-courtroom-playset", oneLiner: "Leon Cochran Courtroom Playset.", arc: null },
      { id: "s_695a0a39c8d481918172982b33047a92", thumb: "solo-leon-riddle-me-this-music-video", oneLiner: "Dance with Leon: 'Riddle me This'.", arc: null },
      { id: "s_6969e4a525788191b3fe9cfdb4f4b2be", thumb: "solo-leon-riddle-me-this-classroom", oneLiner: "Riddle me this: Classroom edition.", arc: null },
      { id: "s_6987ad2524b081919723cc25b8336ce5", thumb: "solo-leon-airport-guitar", oneLiner: "Airport shredding.", arc: null },
    ],

    bigtex: [
      // Page 1
      { id: "s_693275f1a98c81919a83c0596dc000b1", thumb: "solo-bigtex-whiskey-wins", oneLiner: "Big Tex shows his whiskey tolerance.", arc: null },
      { id: "s_69327aab3db0819190c47cd98e9f34de", thumb: "solo-bigtex-texan-diplomacy", oneLiner: "This is Texan diplomacy.", arc: null },
      { id: "s_69329689fde481919ba30e84ed9a10bd", thumb: "solo-bigtex-texas-pride", oneLiner: "Texas Pride.", arc: null },
      { id: "s_69329689fde481919ba30e84ed9a10bd", thumb: "solo-bigtex-quality-control", oneLiner: "Quality control.", arc: null },
      { id: "s_69345520cd308191ba0e7640fe0bb285", thumb: "solo-bigtex-deals", oneLiner: "Big Tex secures the deals.", arc: null },
      { id: "s_6935180f2d6481918a0d5835a42f3eea", thumb: "solo-bigtex-redrooster-flight", oneLiner: "Tickle me Texas! Big Tex takes to the skies.", arc: null },
      { id: "s_6935302aa35881918233d7a98de8de73", thumb: "solo-bigtex-action-figure", oneLiner: "Big Tex Wang action figure.", arc: null },
      { id: "s_6935f25769e081919daceadfba82e949", thumb: "solo-bigtex-redrooster-energy", oneLiner: "Red Rooster Energy Drink - For the thirsty.", arc: null },
      { id: "s_693acc6eb61881919623e37ac1dee645", thumb: "solo-bigtex-ride-rooster", oneLiner: "Let's go for a ride.", arc: null },
      { id: "s_693ae02a550481918071f9cecd1f25cd", thumb: "solo-bigtext-riding-rooster-truck", oneLiner: "Coffee hot. Deals hotter.", arc: null },
      { id: "s_693b259b09d481919eefe0c7daf4087f", thumb: "solo-bigtex-redrooster-golf-club", oneLiner: "Red Rooster Ranch Golf Club.", arc: null },
      { id: "s_693e7f0771a081919dc3a09fa09e5064", thumb: "solo-bigtex-monstertruck", oneLiner: "Monster truck riding.", arc: null },
      
      // Page 2
    ],

    gadha: [
      // Page 1
      { id: "s_694960034c78819191ca6a13de9fcd14", thumb: "solo-gadha-origins", oneLiner: "Golden udder milk origins.", arc: null },
      { id: "s_694c67839a0c819189d57fcd1b441452", thumb: "solo-gadha-merry-gerchmas", oneLiner: "Merry Gerchmas.", arc: null },
      { id: "s_69ac6aa61fe48191b4ad48e03c7d5fc9", thumb: "solo-gadha-kneel", oneLiner: "Kneel.", arc: null },
      { id: "s_69659801d5d88191b28cd2928edb86f9", thumb: "solo-gadha-drone-show", oneLiner: "Gadha in the skies.", arc: null },
      { id: "s_6967015ef5c88191858a1bf702a3ba5e", thumb: "solo-gadha-divine-bovine", oneLiner: "The divine bovine.", arc: null },
      { id: "s_6967a8875910819194cceade0276232a", thumb: "solo-gadha-before-time", oneLiner: "Before there was time...", arc: null },
      { id: "s_6967fdbe08948191946b6cc0c427787f", thumb: "solo-gadha-council", oneLiner: "The council of Gadha(s).", arc: null },
      { id: "s_696832da01d48191b16283ad0211f6e6", thumb: "solo-gadha-the-destroyer", oneLiner: "Gadha the Destroyer.", arc: null },
      { id: "s_69711b1ab1008191b3a23e0fc2d6c084", thumb: "solo-gadha-milk-prophecy", oneLiner: "Milk prophecy.", arc: null },
      { id: "s_6971836571cc8191916d4b44834689bb", thumb: "solo-gadha-stockholm-syndrome", oneLiner: "Stockholm Syndrome.", arc: null },
      { id: "s_69754040f6b08191a52f0588e054fc46", thumb: "solo-gadha-blessing", oneLiner: "Gadha's blessing.", arc: null },
      { id: "s_6962a6216f9c8191aa85ebe5cedbb039", thumb: "solo-gadha-gigantified", oneLiner: "Gadha gigantified.", arc: null },
      
      // Page 2
      { id: "s_69654bccf474819196c9711b1fedec25", thumb: "solo-gadha-hidden-boss", oneLiner: "Gadha hidden boss.", arc: null },
    ],
   
    raj: [
      // Page 1
      { id: "s_693bd1f0bf8c8191a470f0f73c13ed21", thumb: "solo-raj-party-insolence", oneLiner: "Raj embracing his inner insolence at the holiday party.", arc: null },
      { id: "s_693cc9ffd730819196c58ba9485a4b3f", thumb: "solo-raj-happy-milk", oneLiner: "Raj finds Amit's secret stash of 'Happy Milk'.", arc: null },
      { id: "s_693dee560f888191a34a0c4756ccc9fc", thumb: "solo-raj-party-all-night", oneLiner: "Raj goes out and parties all night.", arc: null },
      { id: "s_6945cad2efb48191b89a22924ef5167b", thumb: "solo-raj-misbehave", oneLiner: "Raj misbehaves in front of major shareholders.", arc: null },
      { id: "s_694aa4748f5c819193810d2e28bb83e5", thumb: "solo-raj-keep-it-in", oneLiner: "Can\'t keep it in.", arc: null },
      { id: "s_695381e48a8881919b710f8bea03d45a", thumb: "solo-raj-q5-rap", oneLiner: "Raj spittin' fire about Q5.", arc: null },
      { id: "s_695ae7f6e4f8819197e1d506b62c4f69", thumb: "solo-raj-pegasus-grooming", oneLiner: "Raj tending to Amit's pegasus.", arc: null },
      { id: "s_69644713d29881918888f75a5c0e0964", thumb: "solo-raj-gadha-bell", oneLiner: "The Gadha Bell.", arc: null },
      { id: "s_69648834c5688191a10e7bcf6976cd36", thumb: "solo-raj-golden-gadha-milk", oneLiner: "Golden Gadha Milk.", arc: null },
      { id: "s_696494801970819186981a69282caa24", thumb: "solo-raj-free-billy", oneLiner: "Free Billy.", arc: null },
      { id: "s_69653ee0b6e08191abf8280b49de59c9", thumb: "solo-raj-gadha-milk-trailer", oneLiner: "Gadha Milk.", arc: null },
      { id: "s_6966a1440de88191b30c3c7e8dd1264b", thumb: "solo-raj-free-sex-tonight", oneLiner: "Raj gets a special phone number.", arc: null },
      
    ],

/*
╔════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                            ║
║           ███████╗ ████████╗ ███████╗ ██████╗  ██╗      ██╗ ███╗   ██╗  ██████╗            ║
║           ██╔════╝ ╚══██╔══╝ ██╔════╝ ██╔══██╗ ██║      ██║ ████╗  ██║ ██╔════╝            ║
║           ███████╗    ██║    █████╗   ██████╔╝ ██║      ██║ ██╔██╗ ██║ ██║  ███╗           ║
║           ╚════██║    ██║    ██╔══╝   ██╔══██╗ ██║      ██║ ██║╚██╗██║ ██║   ██║           ║
║           ███████║    ██║    ███████╗ ██║  ██║ ███████╗ ██║ ██║ ╚████║ ╚██████╔╝           ║
║           ╚══════╝    ╚═╝    ╚══════╝ ╚═╝  ╚═╝ ╚══════╝ ╚═╝ ╚═╝  ╚═══╝  ╚═════╝            ║
║════════════════════════════════════════════════════════════════════════════════════════════║
║                            S T E R L I N G    W I N S L O W                                ║
╚════════════════════════════════════════════════════════════════════════════════════════════╝
*/
    sterling: [
      // Page 1
      { id: "s_695a2b3c82e48191ba7674af3c2327e6", thumb: "solo-sterling-black-pegasus", oneLiner: "Sterling tending to Leon's black pegasus.", arc: null },
      { id: "s_695be947d5848191b5b8a7f26a771ca0", thumb: "solo-sterling-skate-champ", oneLiner: "Sterling shows how it's done.", arc: null },
      { id: "s_696c293aada88191aa4e041bc0595068", thumb: "solo-sterling-indubitably", oneLiner: "Indubitably.", arc: null },
      { id: "s_6995e8cbec1081918dc65a7f39a9593d", thumb: "solo-sterling-cleaning", oneLiner: "Sterling cleans his estate.", arc: null },
      { id: "s_69ac9d4b30588191ad612add470c0bd6", thumb: "solo-sterling-spill-tea", oneLiner: "Sterling is not a fan of tea time.", arc: null },
      { id: "s_69ac9d838c3081918033d6c6c7ea4d85", thumb: "solo-sterling-fertilizer", oneLiner: "Fixing the lawn.", arc: null },
      { id: "s_69ac9da0d2308191a0d0db6fbfe6661d", thumb: "solo-sterling-warm-hands", oneLiner: "Sterling warms up his hands.", arc: null },
      { id: "s_69ac9f6c8c988191ac0b3bf9cbc103c1", thumb: "solo-sterling-late-for-work", oneLiner: "Late for work.", arc: null },
      { id: "s_69acbf8acda481919c51573332d4434c", thumb: "solo-sterling-humble-man-of-service", oneLiner: "Humble man of service.", arc: null },
      { id: "s_69acc057d4ec8191b6c855a50c2109d7", thumb: "solo-sterling-festivities", oneLiner: "Commencing festivities.", arc: null },
    ],

      // Page 2
    

/* EEL-ON MUSKMELON
╔════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                        ║
║             ███████╗ ███████╗ ██╗                     ██████╗  ███╗   ██╗              ║
║             ██╔════╝ ██╔════╝ ██║                    ██╔═══██╗ ████╗  ██║              ║
║             █████╗   █████╗   ██║       ███████╗     ██║   ██║ ██╔██╗ ██║              ║
║             ██╔══╝   ██╔══╝   ██║       ╚══════╝     ██║   ██║ ██║╚██╗██║              ║
║             ███████╗ ███████╗ ███████╗               ╚██████╔╝ ██║ ╚████║              ║
║             ╚══════╝ ╚══════╝ ╚══════╝                ╚═════╝  ╚═╝  ╚═══╝              ║
║════════════════════════════════════════════════════════════════════════════════════════║
║                          E E L  --  O N   M U S K M E L O N                            ║
╚════════════════════════════════════════════════════════════════════════════════════════╝
*/  
    eelon: [
      // Page 1
      { id: "s_69691ef2b65881919155feaa13e2576a", thumb: "solo-eelon-intro", oneLiner: "Meet Eel-On Muskmelon, sales executive of Gerch Motors.", arc: null },
      { id: "s_69695324a52c81919481c1c4cf259669", thumb: "solo-eelon-sales-charm", oneLiner: "Eel-On working his sales charm on the elderly.", arc: null },
      { id: "s_696951522538819191ac341ff16cc5d5", thumb: "solo-eelon-bust-a-move", oneLiner: "Eel-On showing off his moves..", arc: null },
      { id: "s_69696a8a8bcc819184b83a0f1bb63ffe", thumb: "solo-eelon-shopping-tourguide", oneLiner: "Eel-On leads a shopping tour.", arc: null },
      { id: "s_69696a5f910c81919145c3516dcd36cd", thumb: "solo-eelon-lost-at-the-mall", oneLiner: "Eel-On gets lost at the mall.", arc: null },
      { id: "s_696962f235a48191a280eae6c47bfa60", thumb: "solo-eelon-drums-up-the-beat", oneLiner: "Eel-On drums up the beat.", arc: null },
      { id: "s_696965680b588191b2b34091a528b1ad", thumb: "solo-eelon-singing-lonely", oneLiner: "Eel-On sings about loneliness.", arc: null },
      { id: "s_69696cbc07748191859ed956b1abc7bf", thumb: "solo-eelon-gerchmilk", oneLiner: "Eel-On enjoying some Gerch Milk.", arc: null },
      { id: "s_696a45b539f08191910cd1b51e7f6137", thumb: "solo-eelon-upset", oneLiner: "Eel-On seems upset.", arc: null },
      { id: "s_696a59b9d5b88191aaf2fa95d6572218", thumb: "solo-eelon-morning-dance", oneLiner: "Eel-On goes dancing in the morning.", arc: null },
      { id: "s_696a5bd0863c8191b1d4e2f53e82afba", thumb: "solo-eelon-hotel-offsite", oneLiner: "Gerchan Farms and subsidiaries offsite.", arc: null },
      { id: "s_696a89c6125c8191878d0f83a60f512f", thumb: "solo-eelon-loves-berries-cream", oneLiner: "Eel-On loves berries and cream..", arc: null },
      
      // Page 2
      { id: "s_696ab591bc28819198ec46655f4f869e", thumb: "solo-eelon-love-music", oneLiner: "Eel-On sure loves his music.", arc: null },
      { id: "s_696ad6104384819188398beda1de4161", thumb: "solo-eelon-gerchmotors-crash-test", oneLiner: "Crash test at Gerch Motors.", arc: null },
      { id: "s_696af642776c8191a6a673831520e2d4", thumb: "solo-eelon-guzheng-solo", oneLiner: "Eel-On guzheng solo.", arc: null },
      { id: "s_696afb7f4cbc819191663690df742913", thumb: "solo-eelon-shaving", oneLiner: "Eel-On in self-grooming commercial.", arc: null },
      { id: "s_696bd2db48808191b28ec8cf859c7939", thumb: "solo-eelon-singing", oneLiner: "Eel-On loves singing tunes.", arc: null },
      { id: "s_696c4ebaf8848191b2c2115a478e011e", thumb: "solo-eelon-virexora-commercial", oneLiner: "Virexora commercial.", arc: null },
      { id: "s_696c73f4bc648191bc11061f84698375", thumb: "solo-eelon-dance-to-the-beat", oneLiner: "Eel-On dancing to the beat.", arc: null },
      { id: "s_696c77df47c88191ae05fd507e857fe8", thumb: "solo-eelon-soccer", oneLiner: "Eel-On interrupts a game.", arc: null },
      { id: "s_696d6b926c2c819180aa0080bf2c3b3b", thumb: "solo-eelon-trust-test", oneLiner: "Trust me.", arc: null },
      { id: "s_696d73069c148191b65acd3a6e19a17e", thumb: "solo-eelon-protest-peace", oneLiner: "Eel-On spreads the message of peace.", arc: null },
      { id: "s_696e3f3b7f9081918148648ae8f28556", thumb: "solo-eelon-dinner", oneLiner: "Eel-On gettingn ready to go out.", arc: null },
      { id: "s_696e4b5df4348191850f762459033383", thumb: "solo-eelon-music-video", oneLiner: "Eel-On music video.", arc: null },
      
      // Page 3
      { id: "s_696e8d2087408191bd595790bb6f302b", thumb: "solo-eelon-morning-routine", oneLiner: "Eel-On's morning routine..", arc: null },
      { id: "s_696e9eff1f0c819194c003c0501ddcaa", thumb: "solo-eelon-vegas-strip", oneLiner: "Eel-On at the Vegas Strip.", arc: null },
      { id: "s_69701ec650fc8191b523f58de79f9ff5", thumb: "solo-eelon-dance-bedroom", oneLiner: "Eel-On loves dancing all day long.", arc: null },
      { id: "s_6971189c98e481919156c9ef7cb586cb", thumb: "solo-eelon-smart-speaker", oneLiner: "Difficulties with smart speakers.", arc: null }
    ],
    cole: [],
    lightamit: [],
    darkamit: [],
    evilamit: [],
    gerchlander: [],
    moo: [],
    mediocrates: [],
    amitjr: [],
    amitsmother: [],
    oletex: []
  },
  
  // ============================================
  // MULTI-CHARACTER VIDEOS
  // ============================================
  multi: [
    {
      id: "s_691e3e3d12fc8191903bf77d9e9a4a32",
      thumb: "multi-amit-lizzie-conference-01.jpg",
      oneLiner: "Amit threatens Lizzie Pt 1.",
      characters: ["amit", "lizzie"],
      arc: "lizzie-the-snitch"
    },
    {
      id: "s_691e4637e8d481919caf9f595280aec3",
      thumb: "multi-amit-lizzie-conference-02.jpg",
      oneLiner: "Amit threatens Lizzie Pt 2.",
      characters: ["amit", "lizzie"],
      arc: "lizzie-the-snitch"
    },
    {
      id: "s_69176069389c819181523caacd4547cf",
      thumb: "multi-amit-gadha-gerchblast.jpg",
      oneLiner: "Gerch Blast.",
      characters: ["amit", "gadha"],
      arc: null
    },
    {
      id: "s_691e5eee67d08191a257f280bdd894c6",
      thumb: "multi-amit-lizzie-bailout.jpg",
      oneLiner: "Bail-out Denied.",
      characters: ["amit", "lizzie"],
      arc: "lizzie-the-snitch"
    },
    {
      id: "s_691e54308d2881918db443f8215e78af",
      thumb: "multi-amit-gadha-crib.jpg",
      oneLiner: "Amit's Crib - Gadha in the gulag.",
      characters: ["amit", "gadha"],
      arc: "the-gadha-saga"
    },
    {
      id: "s_691e4f2b924c8191b2c0e9853224e30c",
      thumb: "multi-amit-lizzie-diagnosedestiny.jpg",
      oneLiner: "I Diagnose Destiny.",
      characters: ["amit", "lizzie"],
      arc: "lizzie-the-snitch"
    }
    // ... add more as you migrate
  ],
  
  // ============================================
  // STORY ARCS (references to videos above)
  // ============================================
  arcs: {
    "insolence-overload": {
      title: "Insolence Overload",
      status: "ongoing",
      description: "The original sin of questioning Q5. Amit's journey from CEO to cosmic dairy overlord.",
      videoIds: ["s_6912260343288191b743f274ee30e7b2", "s_69122a2e5de8819183189a1d47e0e512"]
    },
    "lizzie-the-snitch": {
      title: "Lizzie the Snitch",
      status: "ongoing",
      description: "When destiny diagnostics go rogue. The Ionix bloodline conspiracy.",
      videoIds: ["s_691e3e3d12fc8191903bf77d9e9a4a32", "s_691e4637e8d481919caf9f595280aec3", "s_691e5eee67d08191a257f280bdd894c6"]
    },
    "bloodline-error": {
      title: "Bloodline Error",
      status: "completed",
      description: "Genetic mishaps and milk-based mutations.",
      videoIds: []
    },
    "q6-profits-apocalypse": {
      title: "Q6 Profits Apocalypse",
      status: "q6",
      description: "WARNING: Temporal violation detected. Amit Jr. arrives from the future.",
      videoIds: []
    },
    "f-infinity": {
      title: "F∞ (F Infinity): Speedway of Insolencium",
      status: "ongoing",
      description: "High-velocity dairy combat. Not for the lactose intolerant.",
      videoIds: []
    },
    "milk-wars": {
      title: "Milk Wars: Plant-Based Reckoning",
      status: "ongoing",
      description: "The oat milk uprising and its violent suppression.",
      videoIds: []
    },
    "gerch-clone-pipeline": {
      title: "The Gerch Clone Pipeline",
      status: "ongoing",
      description: "Replication without authorization. Quality control optional.",
      videoIds: []
    },
    "the-gadha-saga": {
      title: "The Gadha Saga",
      status: "ongoing",
      description: "The celestial cow's journey from deity to prisoner.",
      videoIds: ["s_69176069389c819181523caacd4547cf", "s_691e54308d2881918db443f8215e78af"]
    },
    "rajs-past": {
      title: "Raj's Past",
      status: "ongoing",
      description: "Executive assistant by day. Party animal by night. Liability always.",
      videoIds: []
    },
    "unsupervised-global-expansion": {
      title: "Unsupervised Global Expansion",
      status: "ongoing",
      description: "Growth without oversight. What could go wrong?",
      videoIds: []
    },
    "asmr-break-time": {
      title: "ASMR Break Time",
      status: "ongoing",
      description: "Relaxing sounds of the gulag. Not OSHA approved.",
      videoIds: []
    }
  }
};

// Character metadata for headers and filters
const CHARACTERS = {
  amit: { name: "Amit Gaur", handle: "@grchnfrms", role: "CEO, Hand-Slap Innovator", avatar: "./images/amit.jpg" },
  lizzie: { name: "Lizzie Holmes", handle: "@sheranos", role: "Destiny Diagnostician", avatar: "./images/lizzie.jpg" },
  leon: { name: "Leon Cochran", handle: "@leoncochran", role: "Riddle Attorney", avatar: "./images/leon.jpg" },
  bigtex: { name: "Big Tex Wang", handle: "@bigtexwang", role: "Cattle Speculator", avatar: "./images/bigtex.jpg" },
  gadha: { name: "Gadha", handle: "@gadhamilk", role: "Celestial Cow Deity", avatar: "./images/gadha.jpg" },
  raj: { name: "Raj Mehta", handle: "@grchnraj", role: "Executive Assistant", avatar: "./images/raj.jpg" },
  sterling: { name: "Sterling Winslow", handle: "@sterlingwinslow", role: "Butler, Chaos Enabler", avatar: "./images/sterling.jpg" },
  eelon: { name: "Eel On Muskmelon", handle: "@eelonmuskmelon", role: "Tech Bro, Flamingo Enthusiast", avatar: "./images/eelon.jpg" },
  cole: { name: "Cole Mercer", handle: "@pharma_bro", role: "OxyRelief Evangelist", avatar: "./images/cole.jpg" },
  lightamit: { name: "Light Amit", handle: "@lightamit", role: "Benevolent Reflection", avatar: "./images/lightamit.jpg" },
  darkamit: { name: "Dark Amit", handle: "@darkamit", role: "Void Reflection, Profit Lich", avatar: "./images/darkamit.jpg" },
  evilamit: { name: "Evil Amit", handle: "@evilgrchnfrms", role: "The One Who Was Kept", avatar: "./images/evilamit.jpg" },
  gerchlander: { name: "Gerchlander", handle: "@gerchlander", role: "The Hunter", avatar: "./images/gerchlander.jpg" },
  moo: { name: "Michael Moo", handle: "@michael.moo", role: "Documentarian, Bunker Dweller", avatar: "./images/michaelmoo.jpg" },
  mediocrates: { name: "Mediocrates", handle: "@medi0cr4t3s", role: "Cosmic Arbiter of 'Good Enough'", avatar: "./images/mediocrates-profile.jpg" },
  amitjr: { name: "Amit Jr.", handle: "@amitjrq6", role: "Temporal Warning System", avatar: "./images/amitjrq6.jpg" },
  amitsmother: { name: "Amit's Mother", handle: "@amitsmother", role: "Matriarch, Disappointment Connoisseur", avatar: "./images/amitsmother.jpg" },
  oletex: { name: "Ole' Tex Wang", handle: "@oletexwang", role: "Big Tex's Father, BBQ Purist", avatar: "./images/oletexwang.jpg" }
};

// Make available globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VIDEO_DB, CHARACTERS };
}