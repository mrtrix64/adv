// JavaScript Document
        if(navigator.onLine)
        {
            //alert("Browser is online");
				var dsSponsors = new Spry.Data.XMLDataSet("http://advantagetravel.e-update.co.uk/mobile/data/sponsors.php?view_xml=1", "recordset/record", {sortOrderOnLoad: "ascending"});
				dsSponsors.setColumnType("description", "html");
				dsSponsors.setColumnType("aims", "html");
				dsSponsors.setColumnType("website", "html");
				dsSponsors.setColumnType("client_image", "string");
				var dsSchedule = new Spry.Data.XMLDataSet("http://advantagetravel.e-update.co.uk/mobile/data/schedule.php?view_xml=1", "recordset/record", {sortOnLoad: "sort_order", sortOrderOnLoad: "ascending"});
				dsSchedule.setColumnType("title_date", "number");
				dsSchedule.setColumnType("title", "html");
				dsSchedule.setColumnType("sort_order", "number");
				var dsLeisure = new Spry.Data.XMLDataSet("http://advantagetravel.e-update.co.uk/mobile/data/leisure.php?view_xml=1", "recordset/record");
				dsLeisure.setColumnType("cms_content", "html");
				dsLeisure.setColumnType("sort_order", "number");
				dsLeisure.setColumnType("speaker1_img", "string");
				dsLeisure.setColumnType("speaker2_img", "string");
				dsLeisure.setColumnType("speaker2_img", "string");
				dsLeisure.setColumnType("speaker1_desc", "html");
				dsLeisure.setColumnType("speaker2_desc", "html");
				dsLeisure.setColumnType("speaker3_desc", "html");
				dsLeisure.setColumnType("date_time", "number");
				var dsPlenary = new Spry.Data.XMLDataSet("http://advantagetravel.e-update.co.uk/mobile/data/plenary.php?view_xml=1", "recordset/record");
				dsPlenary.setColumnType("cms_content", "html");
				dsPlenary.setColumnType("sort_order", "number");
				dsPlenary.setColumnType("speaker1_img", "string");
				dsPlenary.setColumnType("speaker2_img", "string");
				dsPlenary.setColumnType("speaker2_img", "string");
				dsPlenary.setColumnType("speaker1_desc", "html");
				dsPlenary.setColumnType("speaker2_desc", "html");
				dsPlenary.setColumnType("speaker3_desc", "html");
				dsPlenary.setColumnType("date_time", "number");
				var dsBreakout = new Spry.Data.XMLDataSet("http://advantagetravel.e-update.co.uk/mobile/data/breakout.php?view_xml=1", "recordset/record");
				dsBreakout.setColumnType("cms_content", "html");
				dsBreakout.setColumnType("sort_order", "number");
				dsBreakout.setColumnType("speaker1_img", "string");
				dsBreakout.setColumnType("speaker2_img", "string");
				dsBreakout.setColumnType("speaker2_img", "string");
				dsBreakout.setColumnType("speaker1_desc", "html");
				dsBreakout.setColumnType("speaker2_desc", "html");
				dsBreakout.setColumnType("speaker3_desc", "html");
				dsBreakout.setColumnType("date_time", "number");
				var dsNews = new Spry.Data.XMLDataSet("http://advantagetravel.e-update.co.uk/mobile/data/news.php?view_xml=1", "recordset/record");
				dsNews.setColumnType("news_article", "html");
				var dsSocial = new Spry.Data.XMLDataSet("http://advantagetravel.e-update.co.uk/mobile/data/social.php?view_xml=1", "recordset/record");
				dsSocial.setColumnType("cms_content", "html");
				dsSocial.setColumnType("sort_order", "number");
				dsSocial.setColumnType("date_time", "number");
				var delegates = new Spry.Data.XMLDataSet("http://advantagetravel.e-update.co.uk/mobile/data/delegates2.php?view_xml=1", "recordset/record");
				
				
        }
        else
        {
			// NEDD TO SPECIFIC WITH IMAGES BEING STRINGS AS IT WAS VERY BUGGYAN NOT DISPLAYING WHEN USING THIS XML
            alert("WARNING... Your device is offline. This App will use cached data and may not display correctly.");
				var dsSponsors = new Spry.Data.XMLDataSet("xml_static_data/sponsors.xml", "recordset/record", {sortOrderOnLoad: "ascending"});
					dsSponsors.setColumnType("description", "html");
					dsSponsors.setColumnType("aims", "html");
					dsSponsors.setColumnType("website", "html");
					dsSponsors.setColumnType("client_image", "string");
				var dsSchedule = new Spry.Data.XMLDataSet("xml_static_data/schedule.xml", "recordset/record", {sortOnLoad: "sort_order", sortOrderOnLoad: "ascending"});
					dsSchedule.setColumnType("title_date", "number");
					dsSchedule.setColumnType("title", "html");
					dsSchedule.setColumnType("sort_order", "number");
				var dsLeisure = new Spry.Data.XMLDataSet("xml_static_data/leisure.xml", "recordset/record");
					dsLeisure.setColumnType("cms_content", "html");
					dsLeisure.setColumnType("sort_order", "number");
					dsLeisure.setColumnType("speaker1_img", "string");
					dsLeisure.setColumnType("speaker2_img", "string");
					dsLeisure.setColumnType("speaker2_img", "string");
					dsLeisure.setColumnType("speaker1_desc", "html");
					dsLeisure.setColumnType("speaker2_desc", "html");
					dsLeisure.setColumnType("speaker3_desc", "html");
					dsLeisure.setColumnType("date_time", "number");
				var dsPlenary = new Spry.Data.XMLDataSet("xml_static_data/plenary.xml", "recordset/record");
					dsPlenary.setColumnType("cms_content", "html");
					dsPlenary.setColumnType("sort_order", "number");
					dsPlenary.setColumnType("speaker1_img", "string");
					dsPlenary.setColumnType("speaker2_img", "string");
					dsPlenary.setColumnType("speaker2_img", "string");
					dsPlenary.setColumnType("speaker1_desc", "html");
					dsPlenary.setColumnType("speaker2_desc", "html");
					dsPlenary.setColumnType("speaker3_desc", "html");
					dsPlenary.setColumnType("date_time", "number");
				var dsBreakout = new Spry.Data.XMLDataSet("xml_static_data/breakout.xml", "recordset/record");
					dsBreakout.setColumnType("cms_content", "html");
					dsBreakout.setColumnType("sort_order", "number");
					dsBreakout.setColumnType("speaker1_img", "string");
					dsBreakout.setColumnType("speaker2_img", "string");
					dsBreakout.setColumnType("speaker2_img", "string");
					dsBreakout.setColumnType("speaker1_desc", "html");
					dsBreakout.setColumnType("speaker2_desc", "html");
					dsBreakout.setColumnType("speaker3_desc", "html");
					dsBreakout.setColumnType("date_time", "number");
				var dsNews = new Spry.Data.XMLDataSet("http://advantagetravel.e-update.co.uk/mobile/data/news.php?view_xml=1", "recordset/record");
					dsNews.setColumnType("news_article", "html");
				var dsSocial = new Spry.Data.XMLDataSet("xml_static_data/social.xml", "recordset/record");
					dsSocial.setColumnType("cms_content", "html");
					dsSocial.setColumnType("sort_order", "number");
					dsSocial.setColumnType("date_time", "number");
				var delegates = new Spry.Data.XMLDataSet("xml_static_data/delegates.xml", "recordset/record");
        }