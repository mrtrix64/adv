// JavaScript Document
<<<<<<< HEAD
var dsSponsors = new Spry.Data.XMLDataSet("http://localhost:8888/advantage_app/data/sponsors.php?view_xml=1", "recordset/record", {sortOrderOnLoad: "ascending"});
dsSponsors.setColumnType("description", "html");
dsSponsors.setColumnType("aims", "html");
dsSponsors.setColumnType("website", "html");
var dsSchedule = new Spry.Data.XMLDataSet("http://localhost:8888/advantage_app/data/schedule.php?view_xml=1", "recordset/record", {sortOnLoad: "sort_order", sortOrderOnLoad: "ascending"});
dsSchedule.setColumnType("title_date", "number");
//dsSchedule.setColumnType("end_time", "number");
dsSchedule.setColumnType("title", "html");
dsSchedule.setColumnType("sort_order", "number");
var dsLeisure = new Spry.Data.XMLDataSet("http://localhost:8888/advantage_app/data/leisure.php?view_xml=1", "recordset/record");
=======
var dsSponsors = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/sponsors.php?view_xml=1", "recordset/record", {sortOrderOnLoad: "ascending"});
dsSponsors.setColumnType("description", "html");
dsSponsors.setColumnType("aims", "html");
dsSponsors.setColumnType("website", "html");
var dsSchedule = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/schedule.php?view_xml=1", "recordset/record", {sortOnLoad: "sort_order", sortOrderOnLoad: "ascending"});
dsSchedule.setColumnType("title_date", "number");
dsSchedule.setColumnType("title", "html");
dsSchedule.setColumnType("sort_order", "number");
var dsLeisure = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/leisure.php?view_xml=1", "recordset/record");
>>>>>>> origin/master
dsLeisure.setColumnType("cms_content", "html");
dsLeisure.setColumnType("sort_order", "number");
dsLeisure.setColumnType("speaker1_desc", "html");
dsLeisure.setColumnType("speaker2_desc", "html");
dsLeisure.setColumnType("speaker3_desc", "html");
dsLeisure.setColumnType("date_time", "number");
<<<<<<< HEAD
var dsPlenary = new Spry.Data.XMLDataSet("http://localhost:8888/advantage_app/data/plenary.php?view_xml=1", "recordset/record");
=======
var dsPlenary = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/plenary.php?view_xml=1", "recordset/record");
>>>>>>> origin/master
dsPlenary.setColumnType("cms_content", "html");
dsPlenary.setColumnType("sort_order", "number");
dsPlenary.setColumnType("speaker1_desc", "html");
dsPlenary.setColumnType("speaker2_desc", "html");
dsPlenary.setColumnType("speaker3_desc", "html");
dsPlenary.setColumnType("date_time", "number");
<<<<<<< HEAD
var dsBreakout = new Spry.Data.XMLDataSet("http://localhost:8888/advantage_app/data/breakout.php?view_xml=1", "recordset/record");
=======
var dsBreakout = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/breakout.php?view_xml=1", "recordset/record");
>>>>>>> origin/master
dsBreakout.setColumnType("cms_content", "html");
dsBreakout.setColumnType("sort_order", "number");
dsBreakout.setColumnType("speaker1_desc", "html");
dsBreakout.setColumnType("speaker2_desc", "html");
dsBreakout.setColumnType("speaker3_desc", "html");
dsBreakout.setColumnType("date_time", "number");
<<<<<<< HEAD
var dsNews = new Spry.Data.XMLDataSet("http://localhost:8888/advantage_app/data/news.php?view_xml=1", "recordset/record");
dsNews.setColumnType("news_article", "html");
var dsSocial = new Spry.Data.XMLDataSet("http://localhost:8888/advantage_app/data/social.php?view_xml=1", "recordset/record");
dsSocial.setColumnType("cms_content", "html");
dsSocial.setColumnType("sort_order", "number");
dsSocial.setColumnType("date_time", "number");
var delegates = new Spry.Data.XMLDataSet("http://localhost:8888/advantage_app/data/delegates2.php?view_xml=1", "recordset/record");
=======
var dsNews = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/news.php?view_xml=1", "recordset/record");
dsNews.setColumnType("news_article", "html");
var dsSocial = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/social.php?view_xml=1", "recordset/record");
dsSocial.setColumnType("cms_content", "html");
dsSocial.setColumnType("sort_order", "number");
dsSocial.setColumnType("date_time", "number");
var delegates = new Spry.Data.XMLDataSet("http://localhost/advantage_travel_app/adv/data/delegates2.php?view_xml=1", "recordset/record");
>>>>>>> origin/master
