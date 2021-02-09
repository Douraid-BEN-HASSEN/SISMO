class CChart{

	constructor(conteneur, title, subtitle, width, height){
		this.conteneur = conteneur;
		this.title	 = title;
		this.subtitle = subtitle;
		this.graphique = new Highcharts.chart('container', {});
		this.width = width;
		this.height = height;
		this.cserieContainer = [];
		this.setup();
	}

	setup()
	{
		this.setParam('backgroundColor', '#000000');
		this.setParam('marginLeft', 100);

		this.setParam('type', 'line');
		this.setParam('zoomType', 'x');
		this.setParam('panning', 'true');
		this.setParam('panKey', 'shift');

		this.setParam('legend', ['vertical', 'right', 'middle']);
		this.setParam('style', ['monospace', '#FF0000']);
		this.setParam('xAxis', ['Nombre de points capturés en 1H', true]);
		this.setParam('yAxis', ['Amplitude (en V)', '{value} h', false]);
		this.setParam('plotOptions', [ false, '#000000', false, false, false, 0, 1, false, 0.5 ]);
		this.setParam('tooltip', [ true, this.cserieContainer ]);

 
	}

	setParam(fonction, valeur)
	{
		this.graphique.setSize(this.width, this.height, false);
		this.setTitle(this.title);
		this.setSubtitle(this.subtitle);

		this.graphique.update({
			credits: {
		    	enabled: false
		    }
		});

		if(fonction == 'marginLeft'){
			this.graphique.update({
				chart: {
		        	marginLeft: valeur,
		        }
		    })
		}

		if(fonction == 'backgroundColor'){
			this.graphique.update({
				chart: {
		        	backgroundColor: valeur,
		        }
		    })
		}

		if(fonction == 'type'){
			this.graphique.update({
				chart: {
		        	type: valeur,
		        }
		    })
		}

		if(fonction == 'zoomType'){
			this.graphique.update({
				chart: {
		        	zoomType: valeur,
		        }
		    })
		}

		if(fonction == 'panning'){
			this.graphique.update({
				chart: {
		        	panning: valeur,
		        }
		    })
		}		

		if(fonction == 'panKey'){
			this.graphique.update({
				chart: {
		        	panKey: valeur,
		        }
		    })
		}

		if(fonction == 'legend'){
		    this.graphique.update({
		    	legend: {
			        layout: valeur[0], // vertical
			        align: valeur[1], // right
			        verticalAlign: valeur[2] // middle
			    }
			})
		}
		if(fonction == 'style'){
			this.graphique.update({
				chart: {
					style: {
			            fontFamily: valeur[0], // monospace
			            color: valeur[1], // #FFF
			        }
		    	}
			})
		}

		if(fonction == 'xAxis'){
		    this.graphique.update({
		    	xAxis:{
			        title: {
			            text: valeur[0] // Nombre de points capturés en 1H
			        },

			        visible: valeur[1], // true
			        //max: 3600,
			    }
		    })
		}
		if(fonction == 'yAxis'){
			this.graphique.update({
				        // titre axe Y
			    yAxis: {
			        title: {
			            text: 'Amplitude (en V)'
			        },
			        labels: {
			            format: '{value} h'
			        },
			        visible: false,
			    },
			})
		}

		if(fonction == 'plotOptions'){
			this.graphique.update({
				plotOptions: {
			        series: {
			        	states:{
			        		hover:{
			        			enabled: valeur[0], // false
			        			color: valeur[1] // #000000
			        		},
			        	},
			        	dataLabels:{
			        		enabled: valeur[2] // false
			        	},
			            label: {
			                connectorAllowed: valeur[3], // false
			                enabled: valeur[4], // false
			            },
			            pointStart: valeur[5], // 0 valeur X de dépard (année, mois, jour)
			            pointInterval: valeur[6], // 1
			            // affichage jour : 24 * 3600 * 1000
			            // affichage heure : 3600 * 1000
			            // affichage seconde : 60 * 1000
			            marker: {
			                enabled: valeur[7] // false
			            },
			            lineWidth: valeur[8], // 0.5
			        }
			    }
			})
		}

		if(fonction == 'legend'){
			this.graphique.update({
				legend: {
			        layout: valeur[0], // vertical
			        align: valeur[1], // right alignement horizontal --
			        verticalAlign: valeur[2] // middle alignement vertical |
			    }
			})
		}

		if(fonction == 'tooltip'){
			var cs = this.cserieContainer;
			this.graphique.update({
				    tooltip: { 
			        enabled: valeur[0], 
			        formatter: function() {
			            if(this.series.name == "23:00") return (this.y-cs[23].decalage);
			            if(this.series.name == "22:00") return (this.y-cs[22].decalage);
			            if(this.series.name == "21:00") return (this.y-cs[21].decalage);
			            if(this.series.name == "20:00") return (this.y-cs[20].decalage);
			            if(this.series.name == "19:00") return (this.y-cs[19].decalage);
			            if(this.series.name == "18:00") return (this.y-cs[18].decalage);
			            if(this.series.name == "17:00") return (this.y-cs[17].decalage);
			            if(this.series.name == "16:00") return (this.y-cs[16].decalage);
			            if(this.series.name == "15:00") return (this.y-cs[15].decalage);
			            if(this.series.name == "14:00") return (this.y-cs[14].decalage);
			            if(this.series.name == "13:00") return (this.y-cs[13].decalage);
			            if(this.series.name == "12:00") return (this.y-cs[12].decalage);
			            if(this.series.name == "11:00") return (this.y-cs[11].decalage);
			            if(this.series.name == "10:00") return (this.y-cs[10].decalage);
			            if(this.series.name == "09:00") return (this.y-cs[9].decalage);
			            if(this.series.name == "08:00") return (this.y-cs[8].decalage);
			            if(this.series.name == "07:00") return (this.y-cs[7].decalage);
			            if(this.series.name == "06:00") return (this.y-cs[6].decalage);
			            if(this.series.name == "05:00") return (this.y-cs[5].decalage);
			            if(this.series.name == "04:00") return (this.y-cs[4].decalage);
			            if(this.series.name == "03:00") return (this.y-cs[3].decalage);
			            if(this.series.name == "02:00") return (this.y-cs[2].decalage);
			            if(this.series.name == "01:00") return (this.y-cs[1].decalage);
			            if(this.series.name == "00:00") return (this.y-cs[0].decalage);
			        },
			    }
			})
		}
		
		this.graphique.redraw();
	}

	// Personalisation
	setTitle(title)
	{
		this.title = title;
	    this.graphique.update({
	    	title: {
	        text: title,
		        style: {
		            color: '#FFFFFF',
		            fontWeight: 'bold'
		        }
	    	} 
	    })
	}

	setSubtitle(subtitle)
	{
		this.subtitle = subtitle;
		this.graphique.update({subtitle: {
        text: subtitle,
	        	style: {
	            	color: '#FFFFFF',
	            	fontWeight: 'bold'
	        	}
    		}
    	})
	}

	setBackground(color)
	{
		
	}

	addSeries(cserie)
	{
		this.graphique.addSeries({
			name: cserie.name,
			data: cserie.data,
			color: '#FF0000',
			lineWidth: 2,
		}, true);
		this.cserieContainer.push(cserie);
	}
}
