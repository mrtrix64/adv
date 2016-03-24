// JavaScript Document


	// If you want to prevent dragging, uncomment this section
	/*
	function preventBehavior(e) 
	{ 
      e.preventDefault(); 
    };
	document.addEventListener("touchmove", preventBehavior, false);
	*/
	
	/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
	see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
	for more details -jm */
	/*
	function handleOpenURL(url)
	{
		// TODO: do something with the url passed in.
	}
	*/
	
	function onBodyLoad()
	{		
		document.addEventListener("deviceready", onDeviceReady, false);
		alert ('hello');
		
	}
	
	/* When this function is called, PhoneGap has been initialized and is ready to roll */
	/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
	see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
	for more details -jm */
	function onDeviceReady()
	{
		// do your thing!
		//navigator.notification.alert("PhoneGap is working")
		
	}
    
  
  
 
  
  

    // Wait for Cordova to load
    // 
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is loaded and it is now safe to make calls Cordova methods
    //
    function onDeviceReady() {
        checkConnection();
    }

    function checkConnection() {
        var networkState = navigator.network.connection.type;
		//alert(networkState);

        var states = {};
        states[Connection.UNKNOWN]  = 'Uknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'No network connection';
		 //alert('Connection type: ' + states[networkState]);
		 
		 if (states[networkState] == 'No network connection') {
  			alert('It appears you have no network connection.');
			alert ("Running Static XML");
			var dsSponsors = new Spry.Data.XMLDataSet("xml_static_data/sponsors.xml", "recordset/record", {sortOrderOnLoad: "ascending"});
dsSponsors.setColumnType("description", "html");
dsSponsors.setColumnType("aims", "html");
dsSponsors.setColumnType("website", "html");
dsSponsors.setColumnType("exhibitor_name", "string");
var dsSchedule = new Spry.Data.XMLDataSet("xml_static_data/schedule.xml", "recordset/record", {sortOnLoad: "sort_order", sortOrderOnLoad: "ascending"});
dsSchedule.setColumnType("title_date", "number");
dsSchedule.setColumnType("title", "html");
dsSchedule.setColumnType("sort_order", "number");
var dsLeisure = new Spry.Data.XMLDataSet("xml_static_data/leisure.xml", "recordset/record");
dsLeisure.setColumnType("cms_content", "html");
dsLeisure.setColumnType("sort_order", "number");
dsLeisure.setColumnType("speaker1_desc", "html");
dsLeisure.setColumnType("speaker2_desc", "html");
dsLeisure.setColumnType("speaker3_desc", "html");
dsLeisure.setColumnType("date_time", "number");
var dsPlenary = new Spry.Data.XMLDataSet("xml_static_data/plenary.xml", "recordset/record");
dsPlenary.setColumnType("cms_content", "html");
dsPlenary.setColumnType("sort_order", "number");
dsPlenary.setColumnType("speaker1_desc", "html");
dsPlenary.setColumnType("speaker2_desc", "html");
dsPlenary.setColumnType("speaker3_desc", "html");
dsPlenary.setColumnType("date_time", "number");
var dsBreakout = new Spry.Data.XMLDataSet("xml_static_data/breakout.xml", "recordset/record");
dsBreakout.setColumnType("cms_content", "html");
dsBreakout.setColumnType("sort_order", "number");
dsBreakout.setColumnType("speaker1_desc", "html");
dsBreakout.setColumnType("speaker2_desc", "html");
dsBreakout.setColumnType("speaker3_desc", "html");
dsBreakout.setColumnType("date_time", "number");
var dsNews = new Spry.Data.XMLDataSet("xml_static_data/news.xml", "recordset/record");
dsNews.setColumnType("news_article", "html");
var dsSocial = new Spry.Data.XMLDataSet("xml_static_data/social.xml", "recordset/record");
dsSocial.setColumnType("cms_content", "html");
dsSocial.setColumnType("sort_order", "number");
dsSocial.setColumnType("date_time", "number");
var delegates = new Spry.Data.XMLDataSet("xml_static_data/delegates.xml", "recordset/record");
			alert ("Done Static XML");



			};
			
		if (states[networkState] == 'Uknown connection') {
  			alert('It appears you have no network connection. Please switch in your wi-fi or 3G to enable this App');
		
		};	
			
       
    }
	
	
