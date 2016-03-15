// JavaScript Document
var dsSponsors = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/sponsors.php?view_xml=1?view_xml=1", "recordset/record", {sortOrderOnLoad: "ascending"});
dsSponsors.setColumnType("description", "html");
dsSponsors.setColumnType("aims", "html");
dsSponsors.setColumnType("website", "html");
	var dsSchedule = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/schedule.php?view_xml=1", "recordset/record", {sortOnLoad: "sort_order", sortOrderOnLoad: "ascending"});
dsSchedule.setColumnType("title", "html");
dsSchedule.setColumnType("sort_order", "number");
	var dsHotels = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/hotels.php?view_xml=1", "recordset/record", {sortOnLoad: "hotel_name", sortOrderOnLoad: "ascending"});
dsHotels.setColumnType("hotel_name", "html");
dsHotels.setColumnType("google_map", "html");
dsHotels.setColumnType("description", "html");
dsHotels.setColumnType("amenities", "html");
dsHotels.setColumnType("website", "html");
var dsSpecialist = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/specialist.php?view_xml=1", "recordset/record");
dsSpecialist.setColumnType("cms_content", "html");
dsSpecialist.setColumnType("sort_order", "number");
dsSpecialist.setColumnType("spkr_content", "html");
var dsPlenary = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/plenary.php?view_xml=1", "recordset/record");
dsPlenary.setColumnType("cms_content", "html");
dsPlenary.setColumnType("sort_order", "number");
dsPlenary.setColumnType("spkr_content", "html");
var dsForum = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/marketing.php?view_xml=1", "recordset/record");
dsForum.setColumnType("cms_content", "html");
dsForum.setColumnType("sort_order", "number");
dsForum.setColumnType("spkr_content", "html");

var dsNews = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/news.php?view_xml=1", "recordset/record");
dsNews.setColumnType("news_article", "html");

var dsSocial = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/social.php?view_xml=1", "recordset/record");
dsSocial.setColumnType("cms_content", "html");
dsSocial.setColumnType("sort_order", "number");

var dsDates = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/dates.php?view_xml=1?view_xml=1", "recordset/record", {sortOnLoad: "schedule_title_id", sortOrderOnLoad: "ascending"});
dsDates.setColumnType("schedule_title_id", "number");
dsDates.setColumnType("schedule_date", "date");

var delegates = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/delegates2.php?view_xml=1", "recordset/record");