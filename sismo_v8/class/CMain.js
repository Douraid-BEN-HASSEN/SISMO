class CMain{
	
	constructor(date, width, height)
	{
		// Déclaration d'un objet CChart ( corps graphique ) 
		this.chart = new CChart('container', 'Sismographe', date, width, height);
		this.date = date;

		// Déclaration des objets CSeries ( courbes )
		this.decalage = 350;
		this.serie_0 = new CSeries(0, '00:00', 24*this.decalage, this.chart.graphique);
		this.serie_1 = new CSeries(1, '01:00', 23*this.decalage, this.chart.graphique);
		this.serie_2 = new CSeries(2, '02:00', 22*this.decalage, this.chart.graphique);
		this.serie_3 = new CSeries(3, '03:00', 21*this.decalage, this.chart.graphique);
		this.serie_4 = new CSeries(4, '04:00', 20*this.decalage, this.chart.graphique);
		this.serie_5 = new CSeries(5, '05:00', 19*this.decalage, this.chart.graphique);
		this.serie_6 = new CSeries(6, '06:00', 18*this.decalage, this.chart.graphique);
		this.serie_7 = new CSeries(7, '07:00', 17*this.decalage, this.chart.graphique);
		this.serie_8 = new CSeries(8, '08:00', 16*this.decalage, this.chart.graphique);
		this.serie_9 = new CSeries(9, '09:00', 15*this.decalage, this.chart.graphique);
		this.serie_10 = new CSeries(10, '10:00', 14*this.decalage, this.chart.graphique);
		this.serie_11 = new CSeries(11, '11:00', 13*this.decalage, this.chart.graphique);
		this.serie_12 = new CSeries(12, '12:00', 12*this.decalage, this.chart.graphique);
		this.serie_13 = new CSeries(13, '13:00', 11*this.decalage, this.chart.graphique);
		this.serie_14 = new CSeries(14, '14:00', 10*this.decalage, this.chart.graphique);
		this.serie_15 = new CSeries(15, '15:00', 9*this.decalage, this.chart.graphique);
		this.serie_16 = new CSeries(16, '16:00', 8*this.decalage, this.chart.graphique);
		this.serie_17 = new CSeries(17, '17:00', 7*this.decalage, this.chart.graphique);
		this.serie_18 = new CSeries(18, '18:00', 6*this.decalage, this.chart.graphique);
		this.serie_19 = new CSeries(19, '19:00', 5*this.decalage, this.chart.graphique);
		this.serie_20 = new CSeries(20, '20:00', 4*this.decalage, this.chart.graphique);
		this.serie_21 = new CSeries(21, '21:00', 3*this.decalage, this.chart.graphique);
		this.serie_22 = new CSeries(22, '22:00', 2*this.decalage, this.chart.graphique);
		this.serie_23 = new CSeries(23, '23:00', 1*this.decalage, this.chart.graphique);

		// Déclaration d'un objet CWebservice ( lecteur de points )
		this.webservice_obj = new CWebservice(); 
		this.point = [];

		// Déclaration d'un objet CSerie_name ( nom des series )
		this.serie_name_0;
		this.serie_name_1;
		this.serie_name_2;
		this.serie_name_3;
		this.serie_name_4;
		this.serie_name_5;
		this.serie_name_6;
		this.serie_name_7;
		this.serie_name_8;
		this.serie_name_9;
		this.serie_name_10;
		this.serie_name_11;
		this.serie_name_12;
		this.serie_name_13;
		this.serie_name_14;
		this.serie_name_15;
		this.serie_name_16;
		this.serie_name_17;
		this.serie_name_18;
		this.serie_name_19;
		this.serie_name_20;
		this.serie_name_21;
		this.serie_name_22;
		this.serie_name_23;
	}

	initPoints()
	{
		for (var cpt = 0; cpt < this.chart.cserieContainer.length; cpt++) {
			//http://localhost/sismo_v7/webservice/getPoints.php?date=2019-05-06&heure=0&decalage=100&seconde=1&ms=1&option=all
			//this.point = this.webservice_obj.get('http://localhost/sismo_v7/webservice/getPoints.php?date='+ today.toString() +'&heure='+ cpt +'&decalage='+ this.chart.cserieContainer[cpt].decalage +'&seconde=0&option=all&ms=0');
			this.point = this.webservice_obj.get('http://localhost/sismo_v7/webservice/getPoints.php?date='+ this.date +'&heure='+ cpt +'&decalage='+ this.chart.cserieContainer[cpt].decalage +'&seconde=0&ms=0&option=all');
			this.chart.cserieContainer[cpt].data = this.point;
			this.chart.cserieContainer[cpt].setData();
		}
	}

	setup()
	{
		this.chart.addSeries(this.serie_0);
		this.chart.addSeries(this.serie_1);
		this.chart.addSeries(this.serie_2);
		this.chart.addSeries(this.serie_3);
		this.chart.addSeries(this.serie_4);
		this.chart.addSeries(this.serie_5);
		this.chart.addSeries(this.serie_6);
		this.chart.addSeries(this.serie_7);
		this.chart.addSeries(this.serie_8);
		this.chart.addSeries(this.serie_9);
		this.chart.addSeries(this.serie_10);
		this.chart.addSeries(this.serie_11);
		this.chart.addSeries(this.serie_12);
		this.chart.addSeries(this.serie_13);
		this.chart.addSeries(this.serie_14);
		this.chart.addSeries(this.serie_15);
		this.chart.addSeries(this.serie_16);
		this.chart.addSeries(this.serie_17);
		this.chart.addSeries(this.serie_18);
		this.chart.addSeries(this.serie_19);
		this.chart.addSeries(this.serie_20);
		this.chart.addSeries(this.serie_21);
		this.chart.addSeries(this.serie_22);
		this.chart.addSeries(this.serie_23);

		this.serie_name_0 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[0], '00:00', 50, this.chart.graphique.series[this.serie_0.index].data[0].plotY + 59);
		this.serie_name_1 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[1], '01:00', 50, this.chart.graphique.series[this.serie_1.index].data[0].plotY + 59);
		this.serie_name_2 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[2], '02:00', 50, this.chart.graphique.series[this.serie_2.index].data[0].plotY + 59);
		this.serie_name_3 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[3], '03:00', 50, this.chart.graphique.series[this.serie_3.index].data[0].plotY + 59);
		this.serie_name_4 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[4], '04:00', 50, this.chart.graphique.series[this.serie_4.index].data[0].plotY + 59);
		this.serie_name_5 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[5], '05:00', 50, this.chart.graphique.series[this.serie_5.index].data[0].plotY + 59);
		this.serie_name_6 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[6], '06:00', 50, this.chart.graphique.series[this.serie_6.index].data[0].plotY + 59);
		this.serie_name_7 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[7], '07:00', 50, this.chart.graphique.series[this.serie_7.index].data[0].plotY + 59);
		this.serie_name_8 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[8], '08:00', 50, this.chart.graphique.series[this.serie_8.index].data[0].plotY + 59);
		this.serie_name_9 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[9], '09:00', 50, this.chart.graphique.series[this.serie_9.index].data[0].plotY + 59);
		this.serie_name_10 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[10], '10:00', 50, this.chart.graphique.series[this.serie_10.index].data[0].plotY + 59);
		this.serie_name_11 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[11], '11:00', 50, this.chart.graphique.series[this.serie_11.index].data[0].plotY + 59);
		this.serie_name_12 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[12], '12:00', 50, this.chart.graphique.series[this.serie_12.index].data[0].plotY + 59);
		this.serie_name_13 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[13], '13:00', 50, this.chart.graphique.series[this.serie_13.index].data[0].plotY + 59);
		this.serie_name_14 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[14], '14:00', 50, this.chart.graphique.series[this.serie_14.index].data[0].plotY + 59);
		this.serie_name_15 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[15], '15:00', 50, this.chart.graphique.series[this.serie_15.index].data[0].plotY + 59);
		this.serie_name_16 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[16], '16:00', 50, this.chart.graphique.series[this.serie_16.index].data[0].plotY + 59);
		this.serie_name_17 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[17], '17:00', 50, this.chart.graphique.series[this.serie_17.index].data[0].plotY + 59);
		this.serie_name_18 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[18], '18:00', 50, this.chart.graphique.series[this.serie_18.index].data[0].plotY + 59);
		this.serie_name_19 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[19], '19:00', 50, this.chart.graphique.series[this.serie_19.index].data[0].plotY + 59);
		this.serie_name_20 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[20], '20:00', 50, this.chart.graphique.series[this.serie_20.index].data[0].plotY + 59);
		this.serie_name_21 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[21], '21:00', 50, this.chart.graphique.series[this.serie_21.index].data[0].plotY + 59);
		this.serie_name_22 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[22], '22:00', 50, this.chart.graphique.series[this.serie_22.index].data[0].plotY + 59);
		this.serie_name_23 = new CSerie_name(this.chart.graphique, this.chart.cserieContainer[23], '23:00', 50, this.chart.graphique.series[this.serie_23.index].data[0].plotY + 59);
	}

	triggerPos()
	{
		this.serie_name_0.triggerPos();
		this.serie_name_1.triggerPos();
		this.serie_name_2.triggerPos();
		this.serie_name_3.triggerPos();
		this.serie_name_4.triggerPos();
		this.serie_name_5.triggerPos();
		this.serie_name_6.triggerPos();
		this.serie_name_7.triggerPos();
		this.serie_name_8.triggerPos();
		this.serie_name_9.triggerPos();
		this.serie_name_10.triggerPos();
		this.serie_name_11.triggerPos();
		this.serie_name_12.triggerPos();
		this.serie_name_13.triggerPos();
		this.serie_name_14.triggerPos();
		this.serie_name_15.triggerPos();
		this.serie_name_16.triggerPos();
		this.serie_name_17.triggerPos();
		this.serie_name_18.triggerPos();
		this.serie_name_19.triggerPos();
		this.serie_name_20.triggerPos();
		this.serie_name_21.triggerPos();
		this.serie_name_22.triggerPos();
		this.serie_name_23.triggerPos();
	}

	updatePoints()
	{
		/*for (var cpt = 0; cpt < this.chart.cserieContainer.length; cpt++) {
		 	var pts;
			pts = this.webservice_obj.get('http://localhost/sismo_v7/webservice/getPoints.php?date='+ this.date +'&heure='+cpt+'&decalage='+ 
			this.chart.cserieContainer[cpt].decalage +
			'&seconde='+ this.chart.cserieContainer[cpt].getLastPoint()[0].toString().split('.')[0] +'&ms='+this.chart.cserieContainer[cpt].getLastPoint()[0].toString().split('.')[1]+'&option=bigger');
		
			if(pts.length > 0) this.chart.cserieContainer[cpt].addPoint(pts);	
		}*/
	}
	

}