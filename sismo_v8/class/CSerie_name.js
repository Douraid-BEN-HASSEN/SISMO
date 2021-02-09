class CSerie_name{
	
	constructor(chart_obj, serie_obj, text, x, y){
		this.graphique = chart_obj;
		this.text = text;
		this.x = x;
		this.y = y;
		this.serie = serie_obj;
		this.plotY = this.graphique.series[this.serie.index].data[0].plotY + 59;
		this.lbl = this.graphique.renderer.label(this.text, this.x, this.y)
        .css({
            fontSize: '13px',
      		color: '#FF0000'
        })
        .add();
	}

	updatePos(x, y, color)
	{
		this.lbl.destroy();
		this.x = x;
		this.y = y;
		this.plotY = this.graphique.series[this.serie.index].data[0].plotY + 59;
		this.lbl = this.graphique.renderer.label(this.text, this.x, this.y)
        .css({
            fontSize: '13px',
      		color: color
        })
        .add();
	}

	triggerPos()
	{
		if(this.graphique.series[this.serie.index].visible && this.graphique.series[this.serie.index].data != ''){
			if(this.plotY != (this.graphique.series[this.serie.index].data[0].plotY + 59)){
				this.updatePos(this.x, this.graphique.series[this.serie.index].data[0].plotY + 59);
			}
		}else this.updatePos(0,0, '#000000');

		if(this.graphique.series[this.serie.index].visible && this.x == 0 && this.y == 0){
				this.updatePos(50, this.graphique.series[this.serie.index].data[0].plotY + 59, '#FF0000');
		}
	}

}