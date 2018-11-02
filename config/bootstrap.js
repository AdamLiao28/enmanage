/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {




  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
 //if (await Event.count() > 0) {
 //  return done();
 //}

await Event.createEach([
  {name:'Physical Education student wins gold medal in Asian fencing competition ',
    sdescription:'Chan Cheuk-him (first from left) wins a gold medal in youth fencing championship.\r\n',
    fdescription:'HKBU student Chan Cheuk-him (Physical Education and Recreation Management, Year 4) has won a gold medal at the Akari Asian Under-23 fencing championships.\r\nOne of the awardees of the Elite Athlete Admission Scheme at HKBU, Cheuk-him represented Hong Kong as part of the Men’s saber team.\r\nIn the competition, the team beat Taiwan and Kazakhstan in quarter-final and semi-final respectively. In the final round, they beat the State of Kuwait to clinch the gold medal.',
    iurl:'https://bunews.hkbu.edu.hk/f/news/1776/842p470/20181101_fencing.jpg',
    organizer:'AIS',
    date:'11/02/2018',
    time:'8:00',
    venue:'AAB101',
    quote:'60',
    check:'0',},

  {
    name: 'International experts discuss trends of digital scholarship development',
    sdescription: 'The annual Fall Symposium on Digital Scholarship was held by the University Library on 25 October to highlight international development and showcase HKBU’s Digital Scholarship Grant projects.',
    fdescription: 'Three HKBU faculty members also provided updates on recent Library-related projects. This included Professor Clara Ho, Head of the Department of History, who talked about the Sun Yat-sen Parks Database and Dr Angel Lai, Research Assistant Professor from the Department of Social Work, who spoke about “Yinheritance? Cultural Celebrations for Ethnic Minority Children’s Well-being”. Professor David Chung from the Department of Music shared the Online Thematic Catalogue of Lully Keyboard Arrangements database.',
    iurl: 'https://bunews.hkbu.edu.hk/f/news/1779/842p470/20181101-lib-1.jpg',
    // organizer:'IBM'
    date: '11/16/2018',
    time: '12:00',
    venue: 'WLB201',
    quote: '400',
    check: '0',
  },

  {
    name: 'HKBU students win HK$100,000 Cyberport Creative Micro Fund',
    sdescription: 'team members Charisse Mok (left), Thomas Huang (second from left), and Zakson Feng (third from left) win the Cyberport Creative Micro Fund of HK$100,000  ',
    fdescription: 'Praised for their creative entrepreneurial ideas, one of the teams -- named “ivi” -- successfully outshone the other 19 participating teams from six local universities. The team won seed-funding of HK$100,000 from the Cyberport Creative Micro Fund and were also awarded a fast-track interview opportunity for the Cyberport Incubation Programme',
    iurl: 'https://bunews.hkbu.edu.hk/f/news/1772/842p470/20181031-kto.jpg',
    organizer: 'ITM', date: '11/29/2018',
    time: '17:00',
    venue: 'OE3201',
    quote: '500',
    check: '0',
  },

  {
    name: 'Staff Publications and Presentations (October 2018)',
    sdescription: 'Kwan Chak-shing (right) receives the best poster award for his work relating to new macromolecular machines\r\n',
    fdescription: 'PhD student Kwan Chak-shing of the Department of Chemistry received the best poster award for his academic poster entitled “Higher-Generation Type III-B Rotaxane Dendrimers with Controlling Particle Size in Three-Dimensional Molecular Switching” at the ACS Publication Forum on Nano-, Meso-, and Micro-structured Materials for Energy, Electronics and Biotechnology.\r\n\r\nThe forum which was held at SUSTech Shenzhen in April, attracted around 300 participants from more than 70 universities around the world, as well as 14 journals’ Editor-in-Chief from the American Chemical Society Publications, to present their work.\r\n\r\nUnder the supervision of Dr Ken Leung Cham-fai, Associate Professor of the Department of Chemistry, Chak-shing’s research mainly focuses on the design and synthesis of novel mechanically interlocked molecules, macromolecular machines, organocatalysts, and molecular sensors. In the poster, the synthesis and characterisation of new macromolecular machines and their potential application as an actively controlled anti-cancer drug delivery system were presented. He successfully made a major breakthrough on effective synthesis of novel higher-generation macromolecular machines.',
    iurl: 'https://bunews.hkbu.edu.hk/f/news/287/842p470/20180507-chem.jpg',
    organizer: 'CMD',
    date: '12/13/2018',
    time: '21:00',
    venue: 'WLB201',
    quote: '1',
    check: '0',
  },

// { name:'',
//   sdescription:'',
//   fdescription:'',
//   iurl:'',
//   organizer:'',
//   date:'',
//   check:'',
//   quote:'',},


  //{ emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //{ emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  // etc.
 ]);
  // ```

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
