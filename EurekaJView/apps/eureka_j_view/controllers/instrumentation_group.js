// ==========================================================================
// Project:   EurekaJView.instrumentationGroupController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals EurekaJView */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
EurekaJView.instrumentationGroupController = SC.ObjectController.create(
/** @scope EurekaJView.instrumentationGroupController.prototype */ {

  	pane: null,

    showPanelPane: function() {
        var pane = SC.PanelPane.create({
            layout: {
                centerX: 0,
				width: 870,
				top: 75,
				bottom: 75,
            },
            contentView: SC.View.extend({
                layout: {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                },
                childViews: 'groupToolbarView mainContentView'.w(),
				
				groupToolbarView: SC.ToolbarView.extend({
					childViews: 'labelView'.w(),
					layout: {top: 0, left: 0, right: 0, height: 40 },
					anchorLocation: SC.ANCHOR_TOP,
					
					labelView: SC.LabelView.extend({
	                    layout: {centerY: 0, centerX:0, height: 40, top: 10, width: 250 },
						controlSize: SC.LARGE_CONTROL_SIZE,
						fontWeight: SC.BOLD_WEIGHT,
	                    value: 'Instrumentation Groups'
	                }).classNames('whitelabel'),
				}),
				
				mainContentView: SC.View.extend({
					childViews: ['instrumentationGroupLeft','instrumentationGroupLeftScrollView','hideInstrumentationGroupButtonView','groupNameLabelView','groupNameTextFieldView',
						'sourceGroupLabelView', 'sourceGroupSelectFieldView', 'selectChartsLabelView', 'selectedChartsScrollView'],
					layout: {top: 40, bottom: 0, right: 0, left: 0},
					
					instrumentationGroupLeft: SC.View.design({
						childViews: 'newInstrumentationView'.w(),
						layout: {top: 0, bottom: 43, left: 0, width: 306 },
						anchorLocation: SC.ANCHOR_TOP,
						backgroundColor: "#000000",
						
						newInstrumentationView : SC.View.design({
							childViews: 'newGroupNameTextFieldView newGroupButtonView'.w(),
							layout: {top: 3, height: 28, left: 3, width: 300 },
							backgroundColor: "#F0F8FF",
							
							newGroupNameTextFieldView : SC.TextFieldView.design({
								layout: {top: 2, height: 24, centerY:0, right: 82, left: 2 },
							}),
							
							newGroupButtonView: SC.ButtonView.extend({
								layout: {left: 220, right: 2, height: 24, centerY: 0, top: 2, centerY: 0},
								title: "Add",
							}),
						}),
						
					}),
					
					instrumentationGroupLeftScrollView: SC.ScrollView.design({
						layout: {top: 30, bottom: 45, left: 2, width: 300 },
						hasHorizontalScroller: YES,
						hasVerticalScroller: YES,
						
						contentView: SC.ListView.extend({
							backgroundColor: '#F0F8FF'
						}),
					}),
					
					groupNameLabelView: SC.LabelView.extend({
	                    layout: {left: 320, width: 180, height: 25, top: 20},
						controlSize: SC.NORMAL_CONTROL_SIZE,
	                    value: 'Instrumentation Group Name:'
	                }),
	
					groupNameTextFieldView: SC.TextFieldView.design({
						layout: {top: 15, height: 25, left: 515, width: 350},
					}),
					
					sourceGroupLabelView: SC.LabelView.extend({
	                    layout: {left: 320, width: 180, height: 25, top: 55},
						controlSize: SC.NORMAL_CONTROL_SIZE,
	                    value: 'Instrumentation Group Source:'
	                }),
	
					sourceGroupSelectFieldView: SC.SelectFieldView.design({
						layout: {top: 55, height: 25, left: 515, width: 350},

					  objects: [
					    {name:'For 3 Seconds', value:'3seconds'},
					    {name:'Until the browser is closed', value:'closeBrowser'},
					    {name:'For 1 year', value:'1year'}
					    ],
					  nameKey: 'name',
					  valueKey: 'value',

					  acceptsFirstResponder: function() {
					    return this.get('isEnabled');
					  }.property('isEnabled'),

					  //valueBinding: 'LoginLogoutSample.loginPageController.rememberMe'
					}),
					
					selectChartsLabelView: SC.LabelView.extend({
	                    layout: {left: 320, width: 180, height: 25, top: 85},
						controlSize: SC.NORMAL_CONTROL_SIZE,
	                    value: 'Select Charts:'
	                }),
	
					selectedChartsScrollView: SC.ScrollView.design({
						layout: {top: 85, bottom: 45, left: 515, width: 350},
						hasHorizontalScroller: YES,
						hasVerticalScroller: YES,

						contentView: SC.ListView.design({
							backgroundColor: '#F0F8FF',
							contentValueKey: "name",
							//contentBinding: 'EurekaJView.instrumentationChartController.arrangedObjects',
							//selectionBinding: 'EurekaJView.instrumentationChartController.selection'

						}),
					}),
					
					
					hideInstrumentationGroupButtonView: SC.ButtonView.extend({
	                    layout: {
	                        width: 80,
	                        bottom: 20,
	                        height: 24,
	                        centerX: 0
	                    },
	                    title: "Close",
	                    action: "remove",
	                    target: "EurekaJView.instrumentationGroupController.pane"
	                }),
				}),
                
            })
        });
        pane.append();
        this.set('pane', pane);
    }

}) ;
