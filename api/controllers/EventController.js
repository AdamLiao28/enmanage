/**
 * EventController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  // create action
  create: async function(req,res){
    if (req.method == "GET")
      return res.view('event/create');
    if(typeof req.body.Event ==="undefined")
      return res.badRequest("Form-data is wrong.")
    req.body.Event.check = req.body.Event.check || "0";
    await Event.create(req.body.Event);
    return res.ok("Successful creation");
  },

  // action - index
  index: async function (req, res) {

    //var models = await Event.find( {
    //  limit:4
    //} );
    //return res.view('event/index', { event: models });

    //add the function of paging
    const qPage = Math.max(req.query.page - 1, 0) || 0;
    const numOfItemsPerPage = 4;
    var models = await Event.find( {
      sort:'name',
      limit:numOfItemsPerPage,
      skip:numOfItemsPerPage * qPage
    } );

    var numOfPage = Math.ceil(await Event.count() / numOfItemsPerPage);
    return res.view('event/index', { event: models , count:numOfPage});

    },

  // action - view
  view: async function (req, res) {

    var message = Event.getInvalidIdMsg(req.params);

    if (message) return res.badRequest(message);

    var model = await Event.findOne(req.params.id);

    if (!model) return res.notFound();

    return res.view('event/view', { event: model });

  },

  // action - delete
  delete: async function (req, res) {

    if (req.method == "GET") return res.forbidden();

    var message = Event.getInvalidIdMsg(req.params);

    if (message) return res.badRequest(message);

    var models = await Event.destroy(req.params.id).fetch();

    if (models.length == 0) return res.notFound();

    return res.ok("Event Deleted.");

  },

  // action - update
  update: async function (req, res) {

    var message = Event.getInvalidIdMsg(req.params);

    if (message) return res.badRequest(message);

    if (req.method == "GET") {

      var model = await Event.findOne(req.params.id);

      if (!model) return res.notFound();

      return res.view('event/update', { event: model });

    } else {

      if (typeof req.body.Event === "undefined")
        return res.badRequest("Event-data not received.");

      var models = await Event.update(req.params.id).set({
        name: req.body.Event.name,
        sdescription: req.body.Event.sdescription,
        fdescription: req.body.Event.fdescription,
        iurl: req.body.Event.iurl,
        organizer: req.body.Event.organizer,
        date: req.body.Event.date,
        time: req.body.Event.iurl,
        venue:req.body.Event.venue,
        check:req.body.Event.check,
      }).fetch();

      if (models.length == 0) return res.notFound();

      return res.ok("Record updated");

    }
  },

  // search function
  search: async function (req, res) {

    const qPage = Math.max(req.query.page - 1, 0) || 0;
    const numOfItemsPerPage = 2;

    const qName = req.query.name || "";
    const qOrganizer = req.query.organizer || "" ;
    const qStartdate = req.query.startdate || "";
    const qEnddate =req.query.enddate || "";
    const qVenue =req.query.venue || "";

      var models = await Event.find({
        where:{
          name: {contains:qName},
          venue: {contains:qVenue},
          organizer:{contains:qOrganizer},
          //date :{in;[enddate,startday]},
        },
        sort: 'name',
        limit: numOfItemsPerPage,
        skip: numOfItemsPerPage * qPage
      });
     // var itemNum = await Event.find({
     //   where:{
     //     name: {contains:qName},
     //     venue: {contains:qVenue},
     //     organizer:{contains:qOrganizer},
     //     //date :{in;[enddate,startday]},
     //   }});


   // <!--Model.find({ where: { date : qEnddate , limit: 2, skip: 2 } });-->
   if(models.length==0){
     console.log("illegal choice")
     return res.ok("no data")
   }
    var numOfPage = Math.ceil(await Event.count() / numOfItemsPerPage);

    return res.view('event/search', { event: models, count: numOfPage });
  },







  //action admin
  admin:  async function (req, res ){
    var models =await Event.find(
    )
    return res.view('event/admin',{event:models})
  },









};

