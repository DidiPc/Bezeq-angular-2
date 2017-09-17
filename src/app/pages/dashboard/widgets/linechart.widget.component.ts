import { Component, OnInit } from '@angular/core';
import { AmChartsService } from '@amcharts/amcharts3-angular';
import { SharedService } from '../../../layouts/shared-service';
import { EventTypes } from '../../../PubSub/EventTypes'
import { PubSubService } from '../../../PubSub/PubSub'
@Component({
  selector: 'line-chart',
  templateUrl: './linechart.widget.component.html',
  styleUrls: ['./linechart.widget.component.scss']
})
export class mLineChart implements OnInit {
  pageTitle: string = 'Amcharts';
  private chart: any;

  constructor(private AmCharts: AmChartsService, private _sharedService: SharedService) {
  }

  ngOnInit() {
    PubSubService.subscribe(EventTypes.MarkerClicked, this.alertSomething.bind(this));

    this.chart = this.AmCharts.makeChart('amchart-2', {
      'type': 'serial',
      'theme': 'light',
      //'autoMarginOffset':20,
      'dataDateFormat': 'YYYY-MM-DD HH:NN',
      'dataProvider': [
        {
          'date': '2012-01-01',
          'value': 8
        }, {
          'date': '2012-01-02',
          'color': '#CC0000',
          'value': 10
        }, {
          'date': '2012-01-03',
          'value': 12
        }, {
          'date': '2012-01-04',
          'value': 14
        }, {
          'date': '2012-01-05',
          'value': 11
        }, {
          'date': '2012-01-06',
          'value': 6
        }, {
          'date': '2012-01-07',
          'value': 7
        }, {
          'date': '2012-01-08',
          'value': 9
        }, {
          'date': '2012-01-09',
          'value': 13
        }, {
          'date': '2012-01-10',
          'value': 15
        }, {
          'date': '2012-01-11',
          'color': '#CC0000',
          'value': 19
        }, {
          'date': '2012-01-12',
          'value': 21
        }, {
          'date': '2012-01-13',
          'value': 22
        }, {
          'date': '2012-01-14',
          'value': 20
        }, {
          'date': '2012-01-15',
          'value': 18
        }, {
          'date': '2012-01-16',
          'value': 14
        }, {
          'date': '2012-01-17',
          'color': '#CC0000',
          'value': 16
        }, {
          'date': '2012-01-18',
          'value': 18
        }, {
          'date': '2012-01-19',
          'value': 17
        }, {
          'date': '2012-01-20',
          'value': 15
        }, {
          'date': '2012-01-21',
          'value': 12
        }, {
          'date': '2012-01-22',
          'color': '#CC0000',
          'value': 10
        }, {
          'date': '2012-01-23',
          'value': 8
        }
      ],
      'valueAxes': [{
        'axisAlpha': 0,
        'guides': [{
          'fillAlpha': 0.1,
          'fillColor': '#888888',
          'lineAlpha': 0,
          'toValue': 16,
          'value': 10
        }],
        'position': 'left',
        'tickLength': 0
      }],
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style="font-size:14px;">value:[[value]]</span></b>',
        'bullet': 'round',
        'dashLength': 3,
        'colorField': 'color',
        'valueField': 'value'
      }],
      'trendLines': [{
        'finalDate': '2012-01-11 12',
        'finalValue': 19,
        'initialDate': '2012-01-02 12',
        'initialValue': 10,
        'lineColor': '#CC0000'
      }, {
        'finalDate': '2012-01-22 12',
        'finalValue': 10,
        'initialDate': '2012-01-17 12',
        'initialValue': 16,
        'lineColor': '#CC0000'
      }],
      'chartCursor': {
        'fullWidth': true,
        'valueLineEabled': true,
        'valueLineBalloonEnabled': true,
        'valueLineAlpha': 0.5,
        'cursorAlpha': 0
      },
      'categoryField': 'date',
      'categoryAxis': {
        'parseDates': true,
        'axisAlpha': 0,
        'gridAlpha': 0.1,
        'minorGridAlpha': 0.1,
        'minorGridEnabled': true
      }
    });


  }

  alertSomething(marker) {

    this.chart.dataProvider = [];
   this.chart = this.AmCharts.makeChart('amchart-2', {
      'type': 'serial',
      'theme': 'light',
      //'autoMarginOffset':20,
      'dataDateFormat': 'YYYY-MM-DD HH:NN',
      'dataProvider': [
        {
          'date': '2012-01-01',
          'value': 8
        }, {
          'date': '2012-01-02',
          'color': '#CC0000',
          'value': 10
        }, {
          'date': '2012-01-03',
          'value': 12
        }, {
          'date': '2012-01-04',
          'value': 14
        }, {
          'date': '2012-01-05',
          'value': 11
        }, {
          'date': '2012-01-06',
          'value': 6
        }, {
          'date': '2012-01-07',
          'value': 7
        }, {
          'date': '2012-01-08',
          'value': 9
        }, {
          'date': '2012-01-09',
          'value': 13
        }, {
          'date': '2012-01-10',
          'value': 15
        }, {
          'date': '2012-01-11',
          'color': '#CC0000',
          'value': 19
        }, {
          'date': '2012-01-12',
          'value': 21
        }, {
          'date': '2012-01-13',
          'value': 22
        }, {
          'date': '2012-01-14',
          'value': 20
        }, {
          'date': '2012-01-15',
          'value': 18
        }, {
          'date': '2012-01-16',
          'value': 14
        }, {
          'date': '2012-01-17',
          'color': '#CC0000',
          'value': 16
        }, {
          'date': '2012-01-18',
          'value': 18
        }, {
          'date': '2012-01-19',
          'value': 17
        }, {
          'date': '2012-01-20',
          'value': 15
        }, {
          'date': '2012-01-21',
          'value': 12
        }, {
          'date': '2012-01-22',
          'color': '#CC0000',
          'value': 10
        }, {
          'date': '2012-01-23',
          'value': 8
        }
      ],
      'valueAxes': [{
        'axisAlpha': 0,
        'guides': [{
          'fillAlpha': 0.1,
          'fillColor': '#888888',
          'lineAlpha': 0,
          'toValue': 16,
          'value': 10
        }],
        'position': 'left',
        'tickLength': 0
      }],
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style="font-size:14px;">value:[[value]]</span></b>',
        'bullet': 'round',
        'dashLength': 3,
        'colorField': 'color',
        'valueField': 'value'
      }],
      'trendLines': [{
        'finalDate': '2012-01-11 12',
        'finalValue': 19,
        'initialDate': '2012-01-02 12',
        'initialValue': 10,
        'lineColor': '#F43ESDW'
      }, {
        'finalDate': '2012-01-22 12',
        'finalValue': 10,
        'initialDate': '2012-01-17 12',
        'initialValue': 16,
        'lineColor': '#F43ESDW'
      }],
      'chartCursor': {
        'fullWidth': true,
        'valueLineEabled': true,
        'valueLineBalloonEnabled': true,
        'valueLineAlpha': 0.5,
        'cursorAlpha': 0
      },
      'categoryField': 'date',
      'categoryAxis': {
        'parseDates': true,
        'axisAlpha': 0,
        'gridAlpha': 0.1,
        'minorGridAlpha': 0.1,
        'minorGridEnabled': true
      }
    });
  }

}


