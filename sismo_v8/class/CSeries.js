class CSeries{

	constructor(index, name, decalage, chart)
	{
		this.index = index;
		this.name = name;
		this.decalage = decalage;
		this.data = [[0,decalage]];
		this.graphique = chart;	
	}

	addPoint(point)
	{
		if(point != 'Rien')
		{
			for (var cpt = 0; cpt < point.length; cpt++) {
				this.data.push([point[cpt][0], point[cpt][1]]);
				this.graphique.series[this.index].addPoint([point[cpt][0], point[cpt][1]], true, false, false);
			}

			this.graphique.redraw();
		}
	}

	removePoint(index)
	{
		this.data.splice(index, 1);
	}

	getData()
	{
		return this.data;
	}

	getLastPoint()
	{
		return this.data[this.data.length - 1];
	}

	setData()
	{
		this.data[0] = [0, this.decalage]; // x - y
		this.graphique.series[this.index].setData(this.data, true);
		//this.graphique.redraw();
	}
}