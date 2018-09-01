import highcharts from 'highcharts'
import socialMetricHelper from './socialMetricHelper'

export default {
 // function to mount and rendering the graphic.
 mountGraphic (highchartObject) {
    const highchartObjectFormated = socialMetricHelper.formatSocialMetricJSON(highchartObject);
    highcharts.chart('social-metric-graphic', highchartObjectFormated);
  }
}
