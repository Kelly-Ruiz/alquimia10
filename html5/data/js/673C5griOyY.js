window.globalProvideData('slide', '{"title":"Evaluación | Pregunta 2","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide2","width":1920,"height":1080,"resume":false,"background":{"type":"swf","imagedata":{"assetId":124,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"673C5griOyY","actionGroups":{"ReviewInt_5Wh9lNRbq9q":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"63D1LgbQLi9"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5suftEUIdjN"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6fmelRq97Wm.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Wh9lNRbq9q_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Wh9lNRbq9q_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_5Wh9lNRbq9q":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"63D1LgbQLi9"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5suftEUIdjN"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5Wh9lNRbq9q":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5Wh9lNRbq9q"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns01001000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns01001000001"}]}]},"DisableChoices_5Wh9lNRbq9q":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"63D1LgbQLi9"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5suftEUIdjN"},"enabled":{"type":"boolean","value":false}}]},"5Wh9lNRbq9q_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6NTgI6oCB5Z","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6fmelRq97Wm.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5xTP1dNoyEx.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5Wh9lNRbq9q"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6fmelRq97Wm.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6fmelRq97Wm.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5Wh9lNRbq9q"}]}]}]}]},"SetLayout_pxabnsnfns01001000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns01001000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns01001000001"}]}]},"NavigationRestrictionNextSlide_673C5griOyY":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_673C5griOyY":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"exe_javascript","id":"6AexGzAYGPY"},{"kind":"exe_javascript","id":"6hsFeTq5G05"}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns01001000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns01001000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#TimelineCompleted_673C5griOyY","typea":"var","valueb":false,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5Wh9lNRbq9q","typea":"var","valueb":false,"typeb":"boolean"}]}},"thenActions":[{"kind":"enable_window_control","name":"next","enable":false},{"kind":"enable_window_control","name":"swiperight","enable":false}]},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6d2OQ4RwnMI","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6d2OQ4RwnMI","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6NTgI6oCB5Z","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6NTgI6oCB5Z","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5Wh9lNRbq9q"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6NTgI6oCB5Z","typea":"var","valueb":"5xTP1dNoyEx","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns01001000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5xTP1dNoyEx.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5Wh9lNRbq9q"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5xTP1dNoyEx.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5Wh9lNRbq9q"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"5Wh9lNRbq9q_CheckAnswered"}]}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6NTgI6oCB5Z","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5Wh9lNRbq9q","typea":"var","valueb":"5xTP1dNoyEx","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5xTP1dNoyEx"},"completed_slide_ref":{"type":"string","value":"_player.6QZkLQ9oy4G.6VQAyPwN3Qd"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6NTgI6oCB5Z","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5Wh9lNRbq9q","typea":"var","valueb":"5xTP1dNoyEx","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5xTP1dNoyEx"},"completed_slide_ref":{"type":"string","value":"_player.6QZkLQ9oy4G.6VQAyPwN3Qd"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_673C5griOyY"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_673C5griOyY"}]},{"kind":"ontimelinecomplete","actions":[{"kind":"adjustvar","variable":"_player.TimelineCompleted_673C5griOyY","operator":"set","value":{"type":"boolean","value":true}},{"kind":"enable_window_control","name":"next","enable":true},{"kind":"enable_window_control","name":"swiperight","enable":true}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5hGtdECI7vw"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5v5tdmFnzLE"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69D6vv4rzNS"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qhexZ8VPCI"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"63D1LgbQLi9"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5suftEUIdjN"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"66nY2c18SxV"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5nTHzGmVsqf"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5gyCjeWLihD"}}]},{"kind":"ontimelinetick","time":1000,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"6WMnoYzb9CM"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":4,"id":"01","url":"story_content/5VQmnlMZMCN_90_DX580_DY580.swf","type":"normal","altText":"Logo pequeño.png","width":290,"height":73,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1602,"yPos":44,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":145,"rotateYPos":36.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":290,"bottom":73,"altText":"Logo pequeño.png","pngfb":false,"pr":{"l":"Lib","i":2}},"html5data":{"xPos":0,"yPos":0,"width":290,"height":73,"strokewidth":0}},"width":290,"height":73,"resume":false,"useHandCursor":true,"id":"5gyCjeWLihD"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5hGtdECI7vw_339679028","id":"01","linkId":"txt__default_5hGtdECI7vw","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":1311,"height":56,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Evaluación | Pregunta 2","style":{"fontFamily":"\\"Poppins Charset0_v2mjarC8F1F06F\\",\\"Poppins\\"","fontSize":64,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","spacing":0,"displayCase":"asIs","foregroundColor":"#EA8000","linkColor":"#0000FF","ascent":89.6,"descent":29.867,"leading":8.533,"underlinePosition":-6.4,"underlineThickness":4.267,"xHeight":46.763}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"left","listLevel":0,"lineSpacingRule":"single","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Poppins","fontSize":64,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","spacing":0,"displayCase":"asIs","foregroundColor":"#EA8000","linkColor":"#0000FF"},"tagType":"H2"},"runs":[{"idx":0,"len":23,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":128,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":96,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Poppins","fontSize":64,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#EA8000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":430,"bottom":64,"pngfb":false,"pr":{"l":"Lib","i":548}}}],"shapemaskId":"","xPos":67,"yPos":47,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":665.5,"rotateYPos":33,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1331,"bottom":66,"altText":"Evaluación | Pregunta 2","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":0,"yPos":0,"width":1331,"height":66,"strokewidth":0}},"width":1331,"height":66,"resume":false,"useHandCursor":true,"id":"5hGtdECI7vw"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":277,"id":"01","url":"story_content/6Y3OVvUVAaP_90_DX146_DY146.swf","type":"normal","altText":"Recurso 16.png","width":73,"height":73,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1600,"yPos":396,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":36.5,"rotateYPos":36.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":73,"bottom":73,"altText":"Recurso 16.png","pngfb":false,"pr":{"l":"Lib","i":543}},"html5data":{"xPos":0,"yPos":0,"width":73,"height":73,"strokewidth":0}},"width":73,"height":73,"resume":false,"useHandCursor":true,"id":"5v5tdmFnzLE","events":[{"kind":"onrelease","actions":[{"kind":"playnextdrawslide"}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":278,"id":"01","url":"story_content/6beeNN7MxMB_90_DX146_DY146.swf","type":"normal","altText":"Recurso 17.png","width":73,"height":73,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":248,"yPos":396,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":36.5,"rotateYPos":36.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":73,"bottom":73,"altText":"Recurso 17.png","pngfb":false,"pr":{"l":"Lib","i":543}},"html5data":{"xPos":0,"yPos":0,"width":73,"height":73,"strokewidth":0}},"width":73,"height":73,"resume":false,"useHandCursor":true,"id":"69D6vv4rzNS","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]}]},{"kind":"stategroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":271,"id":"01","url":"story_content/6Yg0GtxMQFC_90_DX2374_DY2374.swf","type":"normal","altText":"Recurso 19.png","width":1187,"height":345,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":593.5,"rotateYPos":172.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1187,"bottom":345,"altText":"Recurso 19.png","pngfb":false,"pr":{"l":"Lib","i":535}},"html5data":{"xPos":0,"yPos":0,"width":1187,"height":345,"strokewidth":0}},"width":1187,"height":345,"resume":false,"useHandCursor":true,"id":"6qhexZ8VPCI"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":272,"id":"01","url":"story_content/6SRl20bx6QX_90_DX1292_DY1292.swf","type":"normal","altText":"Recurso 18.png","width":646,"height":125,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":270,"yPos":-63,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":323,"rotateYPos":62.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":646,"bottom":125,"altText":"Recurso 18.png","pngfb":false,"pr":{"l":"Lib","i":536}},"html5data":{"xPos":0,"yPos":0,"width":646,"height":125,"strokewidth":0}},"width":646,"height":125,"resume":false,"useHandCursor":true,"id":"5hyt68tzPx7"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"6qhexZ8VPCI"}}],"clickdef":[{"kind":"objref","type":"string","value":"6qhexZ8VPCI"},{"kind":"objref","type":"string","value":"5hyt68tzPx7"}]}],"shapemaskId":"","xPos":366,"yPos":260,"tabIndex":13,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":593.5,"rotateYPos":172.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"width":1187,"height":345,"resume":false,"useHandCursor":true,"id":"6qhexZ8VPCI","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_state","typea":"var","valueb":"_default","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"6qhexZ8VPCI.$OnStage","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5hyt68tzPx7"}}],"elseActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5hyt68tzPx7"}}]}]},"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qhexZ8VPCI"}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":273,"id":"01","url":"story_content/5Vj31rLFzu0_90_DX552_DY552.swf","type":"normal","altText":"Recurso 23.png","width":276,"height":275,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":274,"id":"02","url":"story_content/6T4KPhmpA0W_90_DX552_DY552.swf","type":"normal","altText":"Recurso 21.png","width":276,"height":275,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":510,"yPos":574,"tabIndex":10,"tabEnabled":true,"radioGroup":"Escoger uno","xOffset":0,"yOffset":0,"rotateXPos":138,"rotateYPos":137.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":276,"bottom":275,"altText":"Recurso 23.png","pngfb":false,"pr":{"l":"Lib","i":537}},"html5data":{"xPos":0,"yPos":0,"width":276,"height":275,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":276,"bottom":275,"altText":"Recurso 21.png","pngfb":false,"pr":{"l":"Lib","i":538}},"html5data":{"xPos":0,"yPos":0,"width":276,"height":275,"strokewidth":0}}}],"width":276,"height":275,"resume":true,"useHandCursor":true,"id":"63D1LgbQLi9","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5suftEUIdjN.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5suftEUIdjN._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5suftEUIdjN"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onpropchanged","objRef":"_this","propname":"ObjectState","actions":[{"kind":"exe_actiongroup","id":"_parent.5ybXPxRguLs.5ybXPxRguLs_6ZL1FRH9pkt"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":275,"id":"01","url":"story_content/6mFnkSPnwc6_90_DX552_DY552.swf","type":"normal","altText":"Recurso 22.png","width":276,"height":275,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":276,"id":"02","url":"story_content/6oONyntRVPD_90_DX552_DY552.swf","type":"normal","altText":"Recurso 20.png","width":276,"height":275,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1142,"yPos":574,"tabIndex":11,"tabEnabled":true,"radioGroup":"Escoger uno","xOffset":0,"yOffset":0,"rotateXPos":138,"rotateYPos":137.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":276,"bottom":275,"altText":"Recurso 22.png","pngfb":false,"pr":{"l":"Lib","i":537}},"html5data":{"xPos":0,"yPos":0,"width":276,"height":275,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":276,"bottom":275,"altText":"Recurso 20.png","pngfb":false,"pr":{"l":"Lib","i":538}},"html5data":{"xPos":0,"yPos":0,"width":276,"height":275,"strokewidth":0}}}],"width":276,"height":275,"resume":true,"useHandCursor":true,"id":"5suftEUIdjN","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.63D1LgbQLi9.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.63D1LgbQLi9._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.63D1LgbQLi9"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onpropchanged","objRef":"_this","propname":"ObjectState","actions":[{"kind":"exe_actiongroup","id":"_parent.5ybXPxRguLs.5ybXPxRguLs_6ZL1FRH9pkt"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"66nY2c18SxV_-584348242","id":"01","linkId":"txt__default_66nY2c18SxV","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":966,"height":83,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Las bases se forman mezclando cualquier\\n","style":{"fontFamily":"\\"Poppins Charset0_v2mjarC8F1F06F\\",\\"Poppins\\"","fontSize":26.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","spacing":0,"displayCase":"asIs","foregroundColor":"#000000","ascent":37.1,"descent":12.367,"leading":3.533,"underlinePosition":-2.65,"underlineThickness":1.767,"xHeight":19.363}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":0,"lineSpacingRule":"exactly","lineSpacing":31,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Poppins","fontSize":26.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","spacing":0,"displayCase":"asIs","foregroundColor":"#000000"},"tagType":"P"},"runs":[{"idx":0,"len":40,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"elemento con oxígeno.","style":{"fontFamily":"\\"Poppins Charset0_v2mjarC8F1F06F\\",\\"Poppins\\"","fontSize":26.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","spacing":0,"displayCase":"asIs","foregroundColor":"#000000","ascent":37.1,"descent":12.367,"leading":3.533,"underlinePosition":-2.65,"underlineThickness":1.767,"xHeight":19.363}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":0,"lineSpacingRule":"exactly","lineSpacing":31,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Poppins","fontSize":26.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","spacing":0,"displayCase":"asIs","foregroundColor":"#000000"},"tagType":"P"},"runs":[{"idx":0,"len":21,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":128,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":96,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":32,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":-1,"right":867,"bottom":94,"pngfb":false,"pr":{"l":"Lib","i":550}}}],"shapemaskId":"","xPos":467,"yPos":386,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":493,"rotateYPos":46.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":-1,"right":986,"bottom":94,"altText":"Las bases se forman mezclando cualquier\\nelemento con oxígeno.","pngfb":false,"pr":{"l":"Lib","i":549}},"html5data":{"xPos":0,"yPos":0,"width":986,"height":93,"strokewidth":0}},"width":986,"height":93,"resume":false,"useHandCursor":true,"id":"66nY2c18SxV"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5nTHzGmVsqf_344818324","id":"01","linkId":"txt__default_5nTHzGmVsqf","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":310,"height":76,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Pregunta 2","style":{"fontFamily":"\\"Poppins Charset0_v2mjarC8F1F06F\\",\\"Poppins\\"","fontSize":38,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","spacing":0,"displayCase":"asIs","foregroundColor":"#EA8000","linkColor":"#EA8000","ascent":53.2,"descent":17.733,"leading":5.067,"underlinePosition":-3.8,"underlineThickness":2.533,"xHeight":27.765}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Poppins","fontSize":25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","spacing":0,"displayCase":"asIs","foregroundColor":"#003889"},"tagType":"P"},"runs":[{"idx":0,"len":10,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":128,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":96,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":32,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":303,"bottom":87,"pngfb":false,"pr":{"l":"Lib","i":551}}}],"shapemaskId":"","xPos":795,"yPos":213,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":165,"rotateYPos":43,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":330,"bottom":87,"altText":"Pregunta 2","pngfb":false,"pr":{"l":"Lib","i":541}},"html5data":{"xPos":0,"yPos":0,"width":330,"height":86,"strokewidth":0}},"width":330,"height":86,"resume":false,"useHandCursor":true,"id":"5nTHzGmVsqf"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":60,"id":"01","url":"story_content/5dJvZuTE6gn_90_DX240_DY240.swf","type":"normal","altText":"Ant naranja.png","width":121,"height":121,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":50,"yPos":927,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":60,"rotateYPos":60,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":120,"bottom":120,"altText":"Ant naranja.png","pngfb":false,"pr":{"l":"Lib","i":132}},"html5data":{"xPos":0,"yPos":0,"width":120,"height":120,"strokewidth":0}},"animations":[{"kind":"animation","id":"Entrance","duration":750,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":750,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"$RawXPos","y":"$RawYPos","dx":"-175","dy":"158"},"anchorb":{"x":"$RawXPos","y":"$RawYPos","dx":"0","dy":"0"}}],"absolutetextstart":true,"duration":750,"easing":"cubic","easingdir":"easeout"}}]}],"width":120,"height":120,"resume":false,"useHandCursor":true,"id":"6WMnoYzb9CM","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6QZkLQ9oy4G.5iuyUr4mEUy"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":21,"id":"01","url":"story_content/5nUKcftRPlK_90_DX154_DY154.swf","type":"normal","altText":"Cursor.png","width":72,"height":77,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1729,"yPos":520,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":36,"rotateYPos":38.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":72,"bottom":77,"altText":"Cursor.png","pngfb":false,"pr":{"l":"Lib","i":41}},"html5data":{"xPos":0,"yPos":0,"width":72,"height":77,"strokewidth":0}},"animations":[{"kind":"animation","id":"Entrance","duration":750,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":750,"alpha":{"path":[{"kind":"segment","start":"0","dstart":"0","end":"100","dend":"0"}],"duration":750,"easing":"linear","easingdir":"easeinout"},"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":false,"duration":750,"easing":"linear","easingdir":"easein"}}]},{"kind":"animation","id":"62lcQhksNVC","duration":2000,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":2000,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"cubic","anchora":{"x":"1727.5","y":"519.9999","dx":"0","dy":"0"},"controla":{"x":"1723.666","y":"513.1665","dx":"0","dy":"0"},"controlb":{"x":"1710.333","y":"486.6665","dx":"0","dy":"0"},"anchorb":{"x":"1704.5","y":"478.9999","dx":"0","dy":"0"}},{"kind":"segment","type":"cubic","anchora":{"x":"1704.5","y":"478.9999","dx":"0","dy":"0"},"controla":{"x":"1698.666","y":"471.3332","dx":"0","dy":"0"},"controlb":{"x":"1694","y":"473.1665","dx":"0","dy":"0"},"anchorb":{"x":"1692.5","y":"473.9999","dx":"0","dy":"0"}},{"kind":"segment","type":"cubic","anchora":{"x":"1692.5","y":"473.9999","dx":"0","dy":"0"},"controla":{"x":"1691","y":"474.8332","dx":"0","dy":"0"},"controlb":{"x":"1690","y":"476.4999","dx":"0","dy":"0"},"anchorb":{"x":"1695.5","y":"483.9999","dx":"0","dy":"0"}},{"kind":"segment","type":"cubic","anchora":{"x":"1695.5","y":"483.9999","dx":"0","dy":"0"},"controla":{"x":"1701","y":"491.4998","dx":"0","dy":"0"},"controlb":{"x":"1720.5","y":"513.1665","dx":"0","dy":"0"},"anchorb":{"x":"1725.5","y":"518.9999","dx":"0","dy":"0"}}],"duration":2000,"easing":"cubic","easingdir":"easeinout"}}]}],"width":72,"height":77,"resume":false,"useHandCursor":true,"id":"5ybXPxRguLs","actionGroups":{"5ybXPxRguLs_6ZL1FRH9pkt":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.5suftEUIdjN.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.63D1LgbQLi9.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_this.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"_this"}}]},{"kind":"set_enabled","objRef":{"type":"string","value":"_this"},"enabled":{"type":"boolean","value":true}}]}]}},"events":[{"kind":"onanimationcomplete","id":"Entrance","reverse":false,"actions":[{"kind":"exe_animation","id":"62lcQhksNVC","objRef":{"type":"string","value":"_this"},"reverse":{"type":"boolean","value":false}}]},{"kind":"onanimationcomplete","id":"62lcQhksNVC","reverse":false,"actions":[{"kind":"exe_animation","id":"62lcQhksNVC","objRef":{"type":"string","value":"_this"},"reverse":{"type":"boolean","value":false}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":1728,"yPos":512,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":17.5,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":42}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":35,"height":46,"resume":false,"useHandCursor":true,"id":"62lcQhksNVC"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5Wh9lNRbq9q_CorrectReview","id":"01","linkId":"5Wh9lNRbq9q_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":1013,"bottom":41,"pngfb":false,"pr":{"l":"Lib","i":545}}}],"shapemaskId":"","xPos":0,"yPos":1040,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":960,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1920,"bottom":42,"altText":"Correcto","pngfb":false,"pr":{"l":"Lib","i":544}},"html5data":{"xPos":1,"yPos":1,"width":1917,"height":39,"strokewidth":2}},"width":1920,"height":40,"resume":false,"useHandCursor":true,"id":"5Wh9lNRbq9q_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5Wh9lNRbq9q_IncorrectReview","id":"01","linkId":"5Wh9lNRbq9q_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":1022,"bottom":41,"pngfb":false,"pr":{"l":"Lib","i":547}}}],"shapemaskId":"","xPos":0,"yPos":1040,"tabIndex":16,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":960,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":14,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1920,"bottom":42,"altText":"Incorrecto","pngfb":false,"pr":{"l":"Lib","i":546}},"html5data":{"xPos":1,"yPos":1,"width":1917,"height":39,"strokewidth":2}},"width":1920,"height":40,"resume":false,"useHandCursor":true,"id":"5Wh9lNRbq9q_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]}');