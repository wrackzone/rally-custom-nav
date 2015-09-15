Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    rally_server : "demo-east",

    launch: function() {

    	var me = this; 

    	var poid = me.getContext().getProject().ObjectID;

    	console.log("poid",poid);

    	var html = "<font face='ProximaNovaSemiBold,Helvetica'> \
 \
<table width=100% border=1 cellspacing=3 cellpadding=10> \
  <tr> \
    <td border=0></td> \
    <td align=center bgcolor='#C0C0C0'>PREP</td> \
    <td align=center bgcolor='#C0C0C0'>PLAN</td> \
    <td align=center bgcolor='#C0C0C0'>TRACK</td> \
    <td align=center bgcolor='#C0C0C0'>IMPROVE</td> \
  </tr> \
  <tr> \
    <td align=center bgcolor='#C0C0C0'>PORTFOLIO</td> \
    <!-- PORTFOLIO.PREP -->  \
    <td align=center><a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/portfolioitems'>Portfolio Items</a></td> \
    <!-- PORTFOLIO.PLAN -->  \
    <td align=center></td> \
    <!-- PORTFOLIO.TRACK -->  \
    <td align=center> \
      <a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/portfoliokanban'>Portfolio Kanban</a><br> \
      <a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/portfoliotimeline'>Portfolio Timeline</a> \
      </td> \
    <!-- PORTFOLIO.IMPROVE-->  \
    <td align=center></td> \
  </tr> \
  <tr> \
    <td align=center bgcolor='#C0C0C0'>PROGRAM</td> \
    <!-- PROGRAM.PREP --> \
    <td align=center> \
      <a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/custom/3461031'>Feature Value-Size-Risk</a><br> \
      <a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/custom/3963488'>WSJF Scoring</a><br> \
      <a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/custom/1056498'>Estimation Board</a> \
    </td> \
    <!-- PROGRAM.PLAN --> \
    <td align=center> \
      <a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/releaseplanning'>Release Planning</a><br> \
      Capacity Planning \
    </td> \
    <!-- PROGRAM.TRACK --> \
    <td align=center><a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/releasetracking'>Release Tracking</a></td> \
    <!-- PROGRAM.IMPROVE --> \
    <td align=center></td> \
  </tr> \
   \
  <tr> \
    <td align=center bgcolor='#C0C0C0'>TEAM</td> \
    <!-- TEAM.PREP --> \
    <td align=center> \
      <a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/backlog'>Story Backlog</a><br> \
      <a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/custom/1056498'>Estimation Board</a> \
    </td> \
    <!-- TEAM.PLAN --> \
    <td align=center> \
      <a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/custom/3659897'>Sprint Planning</a><br> \
      <a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/teamstatus'>Team Status</a> \
    </td> \
    <!-- TEAM.TRACK --> \
    <td align=center> \
      <a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/iterationstatus'>Iteration Status</a><br> \
      <a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/custom/1010006'>Task Board</a> \
      </td> \
    <!-- TEAM.IMPROVE --> \
    <td align=center>Insights</td> \
  </tr> \
   \
  <tr> \
    <td align=center bgcolor='#C0C0C0'>INDIVIDUAL</td> \
    <!-- TEAM.PREP --> \
    <td align=center><a target='_blank' href='https://{rally_server}.rallydev.com/#/{poid}d/teamstatus'>Team Status</a></td> \
    <!-- TEAM.PREP --> \
    <td align=center></td> \
    <!-- TEAM.PREP --> \
    <td align=center></td> \
    <!-- TEAM.PREP --> \
    <td align=center></td> \
  </tr> \
</table> \
</font>";

	var tpl = Ext.create('Ext.Template', html , { compiled : true } );

	me.add({html:  tpl.apply({poid:poid,rally_server:me.rally_server}) });

    }
});
