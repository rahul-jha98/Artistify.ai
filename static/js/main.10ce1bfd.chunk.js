(this["webpackJsonpartistify.ai"]=this["webpackJsonpartistify.ai"]||[]).push([[0],{110:function(e,t,a){e.exports=a(137)},115:function(e,t,a){},120:function(e,t,a){},127:function(e,t){},128:function(e,t){},129:function(e,t){},130:function(e,t){},131:function(e,t){},132:function(e,t){},133:function(e,t,a){},134:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(10),l=a.n(o),i=(a(115),a(56)),s=a(15),c=a(96),m=a(192),u=a(193),d=a(69),h=a(176),g=a(179),p=a(180),f=a(182),v=a(198),E=a(184),b=a(199),y=a(139),w=a(66),S=a.n(w),x=a(91),C=a.n(x),k=a(92),R=a.n(k),N=a(86),O=a.n(N),j=Object(h.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1,textAlign:"left",verticalAlign:"bottom"}}})),M=r.a.forwardRef((function(e,t){return r.a.createElement(g.a,Object.assign({direction:"up",ref:t},e))})),z=function(e){var t=j(),a=r.a.useState(!1),n=Object(d.a)(a,2),o=n[0],l=n[1],i=function(){l(!1)};return r.a.createElement("div",{className:t.root},r.a.createElement(p.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement("div",{className:t.title},r.a.createElement("img",{src:O.a,height:"38px",alt:"logo with text",className:t.title})),r.a.createElement(v.a,{title:"Github Repo Link"},r.a.createElement(E.a,{"aria-label":"github repo","aria-controls":"menu-appbar",color:"inherit"},r.a.createElement("a",{href:"https://github.com/rahul-jha98/Artistify.ai",rel:"noopener noreferrer",target:"_blank",style:{color:"inherit",textDecoration:"none",height:24}},r.a.createElement(S.a,null)))),r.a.createElement(v.a,{title:"About"},r.a.createElement(E.a,{"aria-label":"about","aria-controls":"menu-appbar",color:"inherit",onClick:function(){l(!0)}},r.a.createElement(C.a,null))))),r.a.createElement(b.a,{fullScreen:!0,open:o,onClose:i,TransitionComponent:M},r.a.createElement(f.a,null,r.a.createElement(y.a,{variant:"h5",style:{textAlign:"center"},className:t.title},r.a.createElement("b",null,"About Artistify.ai")),r.a.createElement(E.a,{edge:"end",color:"inherit",onClick:i,"aria-label":"close"},r.a.createElement(R.a,null))),r.a.createElement("div",{className:"container"},r.a.createElement(y.a,{variant:"h5"},"How is this sorcery happening?"),r.a.createElement(y.a,{style:{fontSize:"1rem"},gutterBottom:!0,color:"textSecondary"},"Neural Style Transfer is an algorithm that aims at recreating the given content image drawn in the style of another image known as the style image. Now, with a photograph as content and a painting as style image we can see some wonderful art being generated.",r.a.createElement("br",null),r.a.createElement("br",null),"Yet, the original implementation of Neural Style Transfer was slow taking many iterations over the image which took anywhere around a few minutes to hours. But recently algorithms have been proposed to make this process much faster. We have reached a level where we can apply it in real time between any two images. This arbitrary style transfer algorithm is what is running in the browser to make the magic happens."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{variant:"h5"},"What's going on inside the model?"),r.a.createElement(y.a,{style:{fontSize:"1rem"},gutterBottom:!0,color:"textSecondary"},"The complete model is divided in two parts : Style Extractor and Transformer Model.",r.a.createElement("br",null),r.a.createElement("b",null,"The Style Extractor")," is responsible for extracting the style representation from the given image. Passing the content and style images through this gives us their respective style feature representation. Then their weighted average is taken to incorporate varying degree of stylization strength in the model.",r.a.createElement("br",null),r.a.createElement("b",null,"The Transformer")," is responsible for generating the target image for a given style features. It is trained to generate images that have similar content structure as content image but since it uses the syle image features when the model creates the image it is forced to use the style features giving us the styled image as the output.",r.a.createElement("br",null),"I have tried creating a basic implementation of arbitrary style transfer using AdaIN in a jupyter-notebook for understanding. It gives a rough idea of the working so that you can get a clear idea.",r.a.createElement(y.a,{style:{fontSize:"1rem"},gutterBottom:!0,color:"primary"},r.a.createElement("a",{href:"https://github.com/rahul-jha98/StyleTransfer_using_AdaIN",rel:"noopener noreferrer",target:"_blank",style:{textDecoration:"none",color:"inherit"}},"The repo can be found here."))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{variant:"h5"},"Is my data safe?"),r.a.createElement(y.a,{style:{fontSize:"1rem"},gutterBottom:!0,color:"textSecondary"},"If you have used the application you might have noticed the slight lag in UI when the actual stylization is going on. Well, it happens because the whole model is running right in your browser using your CPU for the task. Thus there is no need to send any image to any server for processing and hence your data never leaves your system."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{variant:"h5"},"What is the difference between lite and normal mode?"),r.a.createElement(y.a,{style:{fontSize:"1rem"},gutterBottom:!0,color:"textSecondary"},"While lite mode requires download of model of size around 10MB, normal mode downloads a model of size 45 MB. The ",r.a.createElement("b",null,"normal mode")," uses the original implementation from paper i.e. Inception-v3 model for style extraction and plain convolution layers based transformer model. The ",r.a.createElement("b",null,"lite mode")," on the other hand uses the light weight MobileNet-v2 for extracting styles and depthwise separable convolution layer for the transformer network."))))},P=a(31),T=a(32),D=a(47),A=a(46),B=a(5),F=a(190),I=a(45),_=a.n(I),U=a(185),L=a(191),H=a(197),G=a(201),W=a(202),V=a(186),J=a(196),q=a(189),K=a(188),Q=a(187),Y=a(200),X=Object(B.a)((function(e){return{root:{height:6,color:e.palette.secondary.light},thumb:{height:18,width:18,marginTop:-6,marginLeft:-9},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{color:"dark"===e.palette.type?"#3f3f3f":"#cfd8dc",height:6,borderRadius:4},rail:{color:"dark"===e.palette.type?"#3f3f3f":"#cfd8dc",height:6,borderRadius:4}}}))(Y.a),Z=function(e){return r.a.createElement(X,Object.assign({onChange:e.sliderChangeHandler},e,{style:{marginTop:2},value:e.value}))},$=r.a.forwardRef((function(e,t){return r.a.createElement(g.a,Object.assign({direction:"down",ref:t},e))})),ee=function(e){Object(D.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(P.a)(this,a),(n=t.call(this,e)).componentWillUnmount=function(){n.onModalCanceled()},n.onFileChange=function(e){var t=e.target.files[0],a=new FileReader;a.onload=function(e){console.log(e.target.result),console.log(t),n.setState({imageSrc:e.target.result,image:"upload"})},a.readAsDataURL(t)},n.handleMenu=function(e){if("webcam"===e.target.value)return n.setState({modalOpen:!0}),void navigator.getUserMedia({video:!0},(function(e){n.cameraFeed=e,n.cameraRef.current.srcObject=e,n.cameraRef.current.play()}),(function(e){console.error(e)}));"upload"!==e.target.value?n.setState({image:e.target.value,imageSrc:"./content/"+e.target.value+".jpg"}):n.uploadRef.current.click()},n.onModalCanceled=function(){n.cameraFeed?(n.cameraFeed.getTracks()[0].stop(),n.setState({modalOpen:!1})):n.setState({modalOpen:!1})},n.onCameraCaptureClicked=function(){if(n.cameraFeed){var e=n.canvasRef.current.getContext("2d");n.canvasRef.current.width=n.cameraRef.current.width,n.canvasRef.current.height=n.cameraRef.current.height,e.drawImage(n.cameraRef.current,0,0,n.canvasRef.current.width,n.canvasRef.current.height);var t=n.canvasRef.current.toDataURL("image/jpg");n.cameraFeed.getTracks()[0].stop(),n.setState({modalOpen:!1,imageSrc:t,image:"webcam"})}else n.setState({modalOpen:!1})},n.onSliderValueChange=function(e,t){n.setState({imgHeight:t})},n.handlePopoverOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handlePopoverClose=function(){n.setState({anchorEl:null})},n.state={image:"stata",imageSrc:"./content/stata.jpg",imgHeight:250,menulist:[{value:"webcam",name:"Take a picture"},{value:"upload",name:"Upload a picture"},{value:"chicago",name:"Chicago"},{value:"diana",name:"Diana"},{value:"golden_gate",name:"Golden Gate"},{value:"stata",name:"Stata"},{value:"statue_of_liberty",name:"Statue of Liberty"}],anchorEl:null,modalOpen:!1},n.uploadRef=r.a.createRef(),n.cameraRef=r.a.createRef(),n.canvasRef=r.a.createRef(),navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,n}return Object(T.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:"selector-container"},r.a.createElement("canvas",{style:{display:"none"},ref:this.canvasRef}),r.a.createElement("input",{ref:this.uploadRef,type:"file",id:"file",onChange:this.onFileChange,style:{display:"none"},accept:"image/x-png,image/jpeg"}),r.a.createElement("img",{ref:this.props.refObject,className:"center",src:this.state.imageSrc,height:this.state.imgHeight,alt:"content_img"}),r.a.createElement("br",null),r.a.createElement("div",{className:e.formControl,style:{marginBottom:".1rem",display:"inline-block",verticalAlign:"middle"}},r.a.createElement(y.a,{style:{display:"inline-block",marginRight:"6px"}},"Content Image size"),r.a.createElement(_.a,{fontSize:"small",color:"action",style:{marginBottom:-4},"aria-owns":this.state.anchorEl?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:this.handlePopoverOpen,onMouseLeave:this.handlePopoverClose}),r.a.createElement(U.a,{id:"mouse-over-popover",className:e.popover,classes:{paper:e.paper},open:this.state.anchorEl,anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},onClose:this.state.handlePopoverClose,disableRestoreFocus:!0},r.a.createElement(y.a,{style:{maxWidth:200,textAlign:"center"}},"A large content image leads to a more detailed output at the cost of increased processing time."))),r.a.createElement(Z,{className:e.formControl,sliderChangeHandler:this.onSliderValueChange,value:this.state.imgHeight,min:250,max:400,step:1,disabled:this.props.isDisabled}),r.a.createElement(V.a,{variant:"outlined",className:e.formControl,disabled:this.props.isDisabled},r.a.createElement(G.a,{id:"content-label",color:"secondary"},"Content Image"),r.a.createElement(J.a,{labelId:"content-label",id:"content-select",value:this.state.image,onChange:this.handleMenu,label:"Content Image",color:"secondary"},this.state.menulist.map((function(e){return r.a.createElement(W.a,{key:e.value,value:e.value},e.name)})))),r.a.createElement(b.a,{open:this.state.modalOpen,TransitionComponent:$,keepMounted:!0,onClose:this.onModalCanceled,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(Q.a,{id:"alert-dialog-slide-title"},"Take a picture"),r.a.createElement(K.a,null,r.a.createElement("video",{ref:this.cameraRef,width:"500",height:"400"})),r.a.createElement(q.a,null,r.a.createElement(F.a,{onClick:this.onModalCanceled,color:"secondary"},"Cancel"),r.a.createElement(F.a,{onClick:this.onCameraCaptureClicked,color:"secondary",variant:"contained"},"Capture"))))}}]),a}(r.a.Component),te=Object(B.a)((function(e){return{formControl:{margin:e.spacing(1),width:"100%",maxWidth:600,textAlign:"left"},popover:{pointerEvents:"none"},paper:{padding:e.spacing(2)}}}))(ee),ae=function(e){Object(D.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(P.a)(this,a),(n=t.call(this,e)).onFileChange=function(e){var t=e.target.files[0],a=new FileReader;a.onload=function(e){console.log(e.target.result),console.log(t),n.setState({imageSrc:e.target.result,image:"upload"})},a.readAsDataURL(t)},n.handleMenu=function(e){"random"!==e.target.value&&("upload"!==e.target.value?n.setState({image:e.target.value,imageSrc:"./style/"+e.target.value+".jpg"}):n.uploadRef.current.click())},n.onSliderValueChange=function(e,t){n.setState({imgHeight:t})},n.handlePopoverOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handlePopoverClose=function(){n.setState({anchorEl:null})},n.state={image:"seaport",imageSrc:"./style/seaport.jpg",imgHeight:250,menulist:[{value:"upload",name:"Upload a picture"},{value:"random",name:"Random image from wikiart.org"},{value:"clouds",name:"Clouds"},{value:"towers",name:"Towers"},{value:"sketch",name:"Sketch"},{value:"udnie",name:"Udnie"},{value:"seaport",name:"Seaport"}],anchorEl:null},n.uploadRef=r.a.createRef(),n}return Object(T.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:"selector-container"},r.a.createElement("input",{ref:this.uploadRef,type:"file",id:"file",onChange:this.onFileChange,style:{display:"none"},accept:"image/x-png,image/jpeg"}),r.a.createElement("img",{ref:this.props.refObject,className:"center",src:this.state.imageSrc,height:this.state.imgHeight,alt:"content_img"}),r.a.createElement("br",null),r.a.createElement("div",{className:e.formControl,style:{marginBottom:".1rem",display:"inline-block",verticalAlign:"middle"}},r.a.createElement(y.a,{style:{display:"inline-block",marginRight:"6px"}},"Style Image size"),r.a.createElement(_.a,{fontSize:"small",color:"action",style:{marginBottom:-4},"aria-owns":this.state.anchorEl?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:this.handlePopoverOpen,onMouseLeave:this.handlePopoverClose}),r.a.createElement(U.a,{id:"mouse-over-popover",className:e.popover,classes:{paper:e.paper},open:this.state.anchorEl,anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},onClose:this.state.handlePopoverClose,disableRestoreFocus:!0},r.a.createElement(y.a,{style:{maxWidth:200,textAlign:"center"}},"Changing the size of style image affects the texture seen by the network thus changing the pattern used in generated image."))),r.a.createElement(Z,{className:e.formControl,sliderChangeHandler:this.onSliderValueChange,value:this.state.imgHeight,min:100,max:400,step:1,disabled:this.props.isDisabled}),r.a.createElement(V.a,{variant:"outlined",className:e.formControl,disabled:this.props.isDisabled},r.a.createElement(G.a,{id:"content-label",color:"secondary"},"Style Image"),r.a.createElement(J.a,{labelId:"content-label",id:"content-select",value:this.state.image,onChange:this.handleMenu,color:"secondary",label:"Style Image"},this.state.menulist.map((function(e){return r.a.createElement(W.a,{key:e.value,value:e.value},e.name)})))))}}]),a}(r.a.Component),ne=Object(B.a)((function(e){return{formControl:{margin:e.spacing(1),width:"100%",maxWidth:600,textAlign:"left"},popover:{pointerEvents:"none"},paper:{padding:e.spacing(2)}}}))(ae),re=(a(120),a(57)),oe=a.n(re),le=a(73),ie=a(17);ie.a.set("WEBGL_PACK",!1);var se=function(){function e(t,a){Object(P.a)(this,e),this.path_style_network=t,this.path_transformer_network=a}return Object(T.a)(e,[{key:"donwloadModel",value:function(e,t){var a=this;Promise.all([this.loadModelFromPath(this.path_style_network),this.loadModelFromPath(this.path_transformer_network)]).then((function(t){var n=Object(d.a)(t,2),r=n[0],o=n[1];a.styleNetwork=r,a.transformerNetwork=o,e()})).catch((function(e){t()}))}},{key:"loadModelFromPath",value:function(){var e=Object(le.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.c(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"setValueAccessors",value:function(e,t,a){this.contentRef=e,this.styleRef=t,this.outputRef=a}},{key:"generateStyledImage",value:function(){var e=Object(le.a)(oe.a.mark((function e(t,a,n){var r,o,l,i,s=this;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.d();case 2:return e.next=4,ie.d();case 4:return e.next=6,ie.d();case 6:return e.prev=6,e.next=9,ie.f((function(){return s.styleNetwork.predict(ie.b.fromPixels(s.styleRef.current).toFloat().div(ie.e(255)).expandDims())}));case 9:if(r=e.sent,1===t){e.next=20;break}return e.next=13,ie.f((function(){return s.styleNetwork.predict(ie.b.fromPixels(s.contentRef.current).toFloat().div(ie.e(255)).expandDims())}));case 13:return o=e.sent,l=r,e.next=17,ie.f((function(){var e=l.mul(ie.e(t)),a=o.mul(ie.e(1-t));return e.addStrict(a)}));case 17:r=e.sent,o.dispose(),l.dispose();case 20:return e.next=22,ie.f((function(){return s.transformerNetwork.predict([ie.b.fromPixels(s.contentRef.current).toFloat().div(ie.e(255)).expandDims(),r]).squeeze()}));case 22:return i=e.sent,e.next=25,ie.d();case 25:return a(this.contentRef.current.src),e.next=28,ie.b.toPixels(i,this.outputRef.current);case 28:r.dispose(),i.dispose(),e.next=35;break;case 32:e.prev=32,e.t0=e.catch(6),n();case 35:case"end":return e.stop()}}),e,this,[[6,32]])})));return function(t,a,n){return e.apply(this,arguments)}}()}]),e}(),ce=function(e){Object(D.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(P.a)(this,a),(n=t.call(this,e)).onSliderValueChange=function(e,t){n.setState({strength:t})},n.handlePopoverOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handlePopoverClose=function(){n.setState({anchorEl:null})},n.onBeginStylization=function(){n.setState({isDisabled:!0}),n.resetAndBegin()},n.refreshPage=function(){window.location.reload()},n.resetAndBegin=function(){n.setState({contentSrc:null,loading:0,stepper:0,height:n.contentRef.current.height,width:n.contentRef.current.width},(function(){n.styleTranferModel.generateStyledImage(n.state.strength,(function(e){n.setState({stepper:-1,contentSrc:e,loading:1,isDisabled:!1})}),(function(){n.setState({snackbarMessage:"Error while generating image",isDisabled:!1})}))}))},n.state={isDisabled:!1,strength:1,anchorEl:null,contentSrc:null,height:300,loading:-2},n.contentRef=r.a.createRef(),n.styleRef=r.a.createRef(),n.outputRef=r.a.createRef(),n.styleTranferModel=new se(n.props.styleNetPath,n.props.transferNetPath),n.styleTranferModel.donwloadModel((function(){n.setState({loading:-1})}),(function(){n.setState({snackbarMessage:"Couldn't Donwload Model"})})),n.styleTranferModel.setValueAccessors(n.contentRef,n.styleRef,n.outputRef),n}return Object(T.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:"container expanded-content"},r.a.createElement("div",{className:"inputs"},r.a.createElement(te,{isDisabled:this.state.isDisabled,refObject:this.contentRef}),r.a.createElement(ne,{isDisabled:this.state.isDisabled,refObject:this.styleRef})),r.a.createElement("br",null),r.a.createElement("div",{className:"outputs"},r.a.createElement("div",{className:"selector-container"},this.state.loading>-1?0!==this.state.loading?r.a.createElement("canvas",{ref:this.outputRef,className:"center margin",height:this.state.height,alt:"content_img"}):r.a.createElement(L.a,{className:"center margin",variant:"rect",width:this.state.width,height:this.state.height}):null,r.a.createElement("div",{className:t.formControl,style:{marginBottom:".1rem",display:"inline-block",verticalAlign:"middle"}},r.a.createElement(y.a,{style:{display:"inline-block",marginRight:"6px",marginLeft:5}},"Stylization Strength"),r.a.createElement(_.a,{fontSize:"small",color:"action",style:{marginBottom:-4},"aria-owns":this.state.anchorEl?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:this.handlePopoverOpen,onMouseLeave:this.handlePopoverClose}),r.a.createElement(U.a,{id:"mouse-over-popover",className:t.popover,classes:{paper:t.paper},open:this.state.anchorEl,anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},onClose:this.state.handlePopoverClose,disableRestoreFocus:!0},r.a.createElement(y.a,{style:{maxWidth:200,textAlign:"center"}},"Stylization strength is the degree of stylization that is applied. Going left inclines the output closer to the content image while going right deviates it more towards the style image.")),r.a.createElement("br",null),r.a.createElement(Z,{className:t.formControl,sliderChangeHandler:this.onSliderValueChange,value:this.state.strength,min:0,max:1,step:.01,disabled:this.state.isDisabled}),r.a.createElement("br",null),r.a.createElement(F.a,{className:t.formControl,variant:"contained",size:"large",color:"secondary",onClick:this.onBeginStylization,disabled:this.state.isDisabled||-2===this.state.loading},-2===this.state.loading?"Downloading Model":"Begin Stylization"),r.a.createElement("br",null)))),r.a.createElement(H.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.snackbarMessage,autoHideDuration:3e3,onClose:function(){return e.setState({snackbarMessage:""})},message:this.state.snackbarMessage,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{color:"secondary",size:"small",onClick:this.refreshPage},"Reload"))}))}}]),a}(r.a.Component),me=Object(B.a)((function(e){return{formControl:{margin:e.spacing(1),marginLeft:0,marginRight:0,width:"100%",maxWidth:600,textAlign:"left"},popover:{pointerEvents:"none"},paper:{padding:e.spacing(2)}}}))(ce),ue=(a(133),a(93)),de=a.n(ue),he=a(94),ge=a.n(he),pe=Object(h.a)((function(e){return{root:{backgroundColor:"dark"===e.palette.type?"#424242":"#eeeeee",padding:"32px 8px"}}})),fe=function(e){var t=pe();return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:"container"},r.a.createElement(y.a,{color:"textSecondary"},"Made with ",r.a.createElement(de.a,{fontSize:"small",style:{color:"#b71c1c",marginBottom:"-3px"}})," by ",r.a.createElement("b",null,"Rahul Jha")),r.a.createElement("a",{href:"https://github.com/rahul-jha98",rel:"noopener noreferrer",target:"_blank",style:{textDecoration:"none"}},r.a.createElement(S.a,{className:"fa",color:"action",fontSize:"small"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/rahul-jha-84a204178/",rel:"noopener noreferrer",target:"_blank",style:{textDecoration:"none"}},r.a.createElement(ge.a,{className:"fa",color:"action",fontSize:"small"}))))},ve=Object(c.a)({palette:{secondary:{main:"#0091ea"}}}),Ee=function(e){return r.a.createElement(m.a,{theme:ve},r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(z,null),r.a.createElement("div",{className:"content-area"},r.a.createElement(me,{styleNetPath:"./models/lite/style/model.json",transferNetPath:"./models/lite/transformer/model.json"}),r.a.createElement(fe,null))))},be=Object(c.a)({palette:{type:"dark",primary:{main:"#5768c9"},secondary:{main:"#0091ea"}}}),ye=function(e){return r.a.createElement(m.a,{theme:be},r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(z,null),r.a.createElement("div",{className:"content-area"},r.a.createElement(me,{styleNetPath:"./models/pro/style/model.json",transferNetPath:"./models/lite/transformer/model.json"}),r.a.createElement(fe,null))))},we=a(194),Se=a(195),xe=a(95),Ce=a.n(xe),ke=(a(134),Object(h.a)((function(e){return{root:{flexGrow:1,padding:"16px 0px",minHeight:"50vh",height:"100%",justifyContent:"middle"},paper:{padding:e.spacing(1),borderRadius:10},button:{margin:"20px 0"}}}))),Re=function(e){var t=ke();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"title"},r.a.createElement("img",{className:"logoimg",src:Ce.a,alt:"logo"})),r.a.createElement("div",{className:t.root},r.a.createElement(we.a,{container:!0,spacing:2},r.a.createElement(we.a,{item:!0,xs:12,md:6},r.a.createElement(i.b,{to:"/lite",style:{textDecoration:"none"}},r.a.createElement(Se.a,{raised:!0,elvation:6,className:t.paper},r.a.createElement(y.a,{variant:"h5",gutterBottom:!0},"Lite Mode"),r.a.createElement(y.a,{variant:"body1",color:"textSecondary"},r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement("li",null,"Use lightweight model (downlaod size 10MB)"),r.a.createElement("li",null,"Slightly less detailed output compared to pro mode"),r.a.createElement("li",null,"Faster output generation time"),r.a.createElement("li",null,"Much less intensive compute heavy"))),r.a.createElement(F.a,{className:t.button,variant:"outlined",color:"primary"},"Go To Lite Mode")))),r.a.createElement(we.a,{item:!0,xs:12,md:6},r.a.createElement(i.b,{to:"/pro",style:{textDecoration:"none"}},r.a.createElement(Se.a,{raised:!0,elvation:6,className:t.paper},r.a.createElement(y.a,{variant:"h5",gutterBottom:!0},"Pro Mode"),r.a.createElement(y.a,{variant:"body1",color:"textSecondary"},r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement("li",null,"Use superior model (download size 40MB)"),r.a.createElement("li",null,"Much more refined output for given style image"),r.a.createElement("li",null,"Slower output generation"),r.a.createElement("li",null,"Quite intensive task for CPU"))),r.a.createElement(F.a,{className:t.button,variant:"outlined",color:"primary"},"Go To Pro Mode")))))),r.a.createElement(fe,null)))};a(136);var Ne=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{basename:"/Artistify.ai"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:Re}),r.a.createElement(s.a,{path:"/lite",component:Ee}),r.a.createElement(s.a,{path:"/pro",component:ye}))))};l.a.render(r.a.createElement(Ne,null),document.getElementById("root"))},86:function(e,t,a){e.exports=a.p+"static/media/logotext.2fee81d4.svg"},95:function(e,t,a){e.exports=a.p+"static/media/Logo.1ba2315b.png"}},[[110,1,2]]]);
//# sourceMappingURL=main.10ce1bfd.chunk.js.map