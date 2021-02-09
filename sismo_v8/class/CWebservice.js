class CWebservice{
	
	constructor()
	{
		this.xmlHttp = new XMLHttpRequest();
		this.data = '';
	}

	get(url)
	{
		this.xmlHttp.open( "GET", url, false );
	    this.xmlHttp.send(null);
	    //this.data = this.xmlHttp.responseText;
	    this.data = JSON.parse(this.xmlHttp.responseText);
	    return this.data;
	}
}