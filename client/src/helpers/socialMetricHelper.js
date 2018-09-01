// Helper to return a object received by the API to the highcharts object format.
import moment from 'moment'
const seriesColors = {
  "affiliates" :"#00CBFF" ,
  "email": "#1D6FCA",
  "organic": "#FF0087",
  "other": "#FFCB64",
  "paid search": "#FF5100",
  "referral": "#6638A2",
  "retargeting": "#00CBFF",
  "social":"#1D6FCA",
  "social paid":"#6638A2"
}
// function to return the title in html format;
const getGraphicTitle = (title,startDate, endDate) => {
  return `<div>
    <span style="text-transform: uppercase;font-weight: bold;margin-right: 15px;"> ${title}</span>
    <small style="font-size: 12px; color: #1D6FCA;">${startDate} - ${endDate}</small>
  </div>`
}

// function to return an array with the dates of socialObjectSeries object
const getGraphicCategories = (socialObjectSeries) => {
  return socialObjectSeries.map(serie => {
    return moment(serie.name, "YYYY-MM-DD").format('DD');
  })
}

// function to create the object of the graphic series
const getGraphicSeriesObject = (serie, values) => {
  return {
      'name': serie,
      'color': seriesColors[serie],
      'data': values
    }
}

// function to get the series object formatted freom
const getGraphicSeries = (socialObjectSeries) => {
  const graphicSeriesKeys = ["affiliates","email","organic","other","paid search","referral","retargeting","social","social paid"];
  const graphicSeries = [];
  graphicSeriesKeys.forEach(social => {
    const name = social;
    const values = [];
    socialObjectSeries.forEach(serie => {
      const date = moment(serie.name,"YYYY-MM-DD").format("DD/MM/YYYY");
      let serieValue = parseFloat(serie.data[social].replace(',', '.'))
      values.push({ y: serieValue, toolTipTitle : date})
    });
    graphicSeries.push(getGraphicSeriesObject(name,values));
  })

  return graphicSeries;
}

export default {

  // function to create the object of the hightcharts
  formatSocialMetricJSON (socialMetricObject) {
    let chartObject = {};
    if(!socialMetricObject.errors.length) {
      const startDate = moment(socialMetricObject.start_date,"YYYY-MM-DD").format("DD/MM/YYYY");
      const endDate = moment(socialMetricObject.end_date, "YYYY-MM-DD").format("DD/MM/YYYY");
      const categories = getGraphicCategories(socialMetricObject.metrics.revenue_by_medium.data.series);
      const series = getGraphicSeries(socialMetricObject.metrics.revenue_by_medium.data.series);

      const titleHTML = getGraphicTitle(socialMetricObject.metrics.revenue_by_medium.title, startDate, endDate);
      chartObject = {
        title : {
          text: titleHTML,
          align:"left",
          useHTML: true
        },
        subtitle: {
          text: socialMetricObject.metrics.revenue_by_medium.description,
          align:"left",
        },
        xAxis: {
          categories: categories,
          title: {
            text: ''
          }
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false
            }
          }
        },
        series: series,
        tooltip: {
          formatter: function() {
              return `
                <p style="text-transform: capitalize;">${this.series.name}</p><br/>
                <p> ${this.point.options.toolTipTitle}: R$ ${this.y.toLocaleString('pt-BR')}</p>
                `
          }
        },
        legend : {
          verticalAlign : 'top'
        }
      }
    }
    return chartObject;
  }
}
