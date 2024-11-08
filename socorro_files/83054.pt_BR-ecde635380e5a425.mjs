"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[83054],{618702:(e,i,t)=>{t.r(i),t.d(i,{default:()=>r});let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"BoardCard_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"blockedByMe",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isVerifiedMerchant",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,concreteType:"VerifiedIdentity",kind:"LinkedField",name:"verifiedIdentity",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verified",storageKey:null}],storageKey:null}],type:"User",abstractKey:null};l.hash="0628142b7a59444fec6969159289921a";let r=l},903225:(e,i,t)=>{var l;t.r(i),t.d(i,{default:()=>a});let r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetCoverPhoto_board",selections:[{alias:"coverImageSpec_222x",args:[{kind:"Literal",name:"spec",value:"222x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"coverImages",plural:!1,selections:l=[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:'coverImages(spec:"222x")'},{alias:"coverImageSpec_400x300",args:[{kind:"Literal",name:"spec",value:"400x300"}],concreteType:"ImageDetails",kind:"LinkedField",name:"coverImages",plural:!1,selections:l,storageKey:'coverImages(spec:"400x300")'},{alias:"coverImageSpec_216x146",args:[{kind:"Literal",name:"spec",value:"216x146"}],concreteType:"ImageDetails",kind:"LinkedField",name:"coverImages",plural:!1,selections:l,storageKey:'coverImages(spec:"216x146")'},{alias:null,args:null,concreteType:"CoverPin",kind:"LinkedField",name:"coverPin",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"imageUrl",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageCoverHdUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageCoverUrl",storageKey:null},{alias:"image_170x",args:[{kind:"Literal",name:"spec",value:"170x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!0,selections:l,storageKey:'images(spec:"170x")'}],type:"Board",abstractKey:null};r.hash="25fa66fe4860f02b2ce5d43d2db22ddd";let a=r},297134:(e,i,t)=>{t.d(i,{Z:()=>a});var l=t(883119),r=t(785893);let a=({text:e})=>(0,r.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},"data-test-id":"line-clamp-wrapper",fit:!0,overflow:"hidden",children:e})},316667:(e,i,t)=>{t.d(i,{U:()=>a,Z:()=>n});var l=t(883119),r=t(785893);let a=", ";function n(){return(0,r.jsx)(l.xu,{display:"visuallyHidden",children:a})}},274262:(e,i,t)=>{t.d(i,{Z:()=>a});var l=t(883119),r=t(785893);function a({ariaHidden:e=!1,color:i="darkGray",size:t}){return(0,r.jsx)("span",{"aria-hidden":e,style:{padding:"0 4px"},children:(0,r.jsx)(l.xv,{color:i,inline:!0,size:t??"200",children:"·"})})}},583130:(e,i,t)=>{t.d(i,{Z:()=>Z});var l,r=t(667294);t(167912);var a=t(616550),n=t(883119),s=t(587703),o=t(205841),d=t(711147),c=t(757017),u=t(140017),h=t(72461),x=t(339001),g=t(340523),_=t(5859),m=t(217058),p=t(316667),f=t(274262),b=t(554786),v=t(149722),y=t(464593),j=t(724009),w=t(168477),z=t(304431),C=t(572345),P=t(213503),k=t(939809),A=t(785893);let I=void 0!==l?l:l=t(618702),S=({children:e,isBoardsActualizationRepsExp:i})=>(0,b.HG)()?(0,A.jsx)(n.X6,{accessibilityLevel:2,lineClamp:i?2:1,size:i?"300":"400",children:e}):(0,A.jsx)(n.xv,{lineClamp:i?2:1,size:i?"200":void 0,weight:"bold",children:e});function Z({archivedDate:e,boardId:i,boardUrl:t,canEdit:l,numberOfCollaborators:Z,containerBackgroundColor:F,coverPhoto:B,display:E,followedByMe:U,fullSizeDrawer:L,sensitivityScreen:T,handleInviteResponse:K,hideMeta:H,hideSecretBoardIcon:D=!1,id:G,invite:M,imagesLego:W=[],isBoardInviteAccepted:N,isBoardsActualizationReps:R=!1,isActive:O,isAttributionHeightUnfixed:V,isAuthenticated:X,isCollaborative:q,isCollaborator:$,isCollaboratorsAttributionVisible:Y=!1,isNoBoardTitleStyle:J=!1,isOwner:Q,isProtected:ee,isSecret:ei,isTemporarilyDisabled:et,lastModifiedDate:el,layout:er,locale:ea,metaMarginTop:en=0,metaPaddingY:es=2,name:eo,numCols:ed,onEditClick:ec,onFollow:eu,onUnfollow:eh,pinCount:ex=0,sectionCount:eg,showFollowButton:e_,showBoardCollaborators:em=!0,userKey:ep,viewParameter:ef,viewType:eb,slotIndex:ev}){let ey=(0,u.ZP)(),ej=(0,c.Z)(),ew=(0,h.Z)(),ez=(0,s.Z)(),eC=(0,b.HG)(),{isRTL:eP}=(0,_.B)(),{username:ek}=(0,v.Z)(),{checkExperiment:eA}=(0,g.F)(),{username:eI}=(0,a.UO)(),eS=(0,d.Z)(I,ep),eZ=eC&&X,eF="square"===er?w.M0:w.z9,eB="responsive"!==E&&eZ?eF:"100%",eE=ek&&ek===eI,eU=!R&&X&&!eE&&(eC?eA("dweb_presence_boards_reps_actualization").anyEnabled:eA("mweb_presence_boards_reps_actualization").anyEnabled),eL=!R&&!X&&(eC?eA("dweb_presence_boards_reps_actualization_unauth").anyEnabled:eA("mweb_presence_boards_reps_actualization_unauth").anyEnabled),eT=R||eU||eL,eK=eI&&w.sN.includes(eI.toLowerCase()),eH=e=>{X||(0,m.NC)("press_follow_board"),eu&&eu(e)},eD=e=>{X||(0,m.NC)("press_unfollow_board"),eh&&eh(e)},eG=W.map(e=>({url:e.url,name:eo})),eM=!!eS&&!l&&e_,eW=eS?.isVerifiedMerchant,eN=eS?.verifiedIdentity?.verified,eR=eW||eN,eO=eT?eI&&!eK&&q:q,eV=!eT&&em,eX=!Q&&!$&&!!T?.show_warning,eq={board_id:G,reason:T?.reason},e$=eT&&(!eI||Y||eK),eY=eZ?void 0:w.s0;return eT&&(eY=eC?void 0:e$?w.AC:w.Y_),(0,r.useEffect)(()=>{eX&&ez({event_type:13,component:13861,view_type:215,aux_data:eq})},[]),(0,A.jsx)(k.fS,{auxData:{board_id:G,board_pin_count:ex??0,board_section_count:eg??0},impressionData:{imageURL:B?.url},loggingId:G,slotIndex:ev||0,viewParameter:ef,viewType:eb,children:({impressionTrackerRef:a})=>(0,A.jsxs)(n.xu,{ref:a,"data-test-id":`boardCard-${eo}`,height:eM?`max(calc(25vh + 10px), calc(210px + ${eT?5:0}vh))`:"100%",position:"relative",width:eZ?eB:"100%",children:[(0,A.jsx)(z.Z,{canEdit:l,containerBackgroundColor:F,coverPhoto:B,fullSize:L,hideSecretBoardIcon:D,images:eG,isActive:O,isProtected:ee,isSecret:ei,isTemporarilyDisabled:et,layout:er,onEditClick:ec,renderAsImage:!0,showSensitivityScreen:eX}),!H&&(0,A.jsx)(r.Fragment,{children:M&&!et?(0,A.jsxs)(r.Fragment,{children:[(0,A.jsxs)(n.xu,{alignItems:"start","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",padding:2,children:[(0,A.jsxs)(n.xu,{width:"100%",children:[(0,A.jsx)(n.rU,{href:t??"",children:(0,A.jsx)(n.xu,{marginBottom:1,marginTop:0,children:(0,A.jsx)(S,{isBoardsActualizationRepsExp:eT,children:eo})})}),N?(0,A.jsx)(n.xv,{lineClamp:1,size:"200",children:ey.bt("Você aceitou o convite", "You’ve joined", "boardRep.invite.invitationAcceptedText", undefined, true)}):(0,A.jsx)(n.xv,{size:"200",children:function(e,i){let{full_name:t,username:l}=e,r=(0,A.jsx)(n.rU,{display:"inlineBlock",href:`/${l}`,underline:"hover",children:t},"linkToUser");return(0,x.nk)(i.bt("{{ linkToUser }} convidou você para participar dessa pasta", "{{ linkToUser }} invited you to join this board", "boardRep.invite.invitationText", undefined, true),{linkToUser:r})}(M.invited_by_user,ey)})]}),eV&&(0,A.jsx)(j.Z,{boardId:i})]}),N?(0,A.jsx)(n.xu,{direction:"row",display:"flex",paddingX:2,children:(0,A.jsx)(n.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,A.jsx)(n.ZP,{fullWidth:!0,href:t??"",size:"lg",text:ey.bt("Ver pasta", "See board", "boardRep.invite.seeBoardButton", undefined, true)})})}):(0,A.jsxs)(n.kC,{direction:"row",flex:"grow",justifyContent:"start",wrap:!0,children:[(0,A.jsx)(n.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,A.jsx)(n.zx,{fullWidth:!0,onClick:()=>{K?.(!1)},size:"lg",text:ey.bt("Recusar", "Decline", "boardRep.invite.declineButton", undefined, true)})}),(0,A.jsx)(n.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,A.jsx)(n.zx,{color:"red",fullWidth:!0,onClick:()=>{K?.(!0)},size:"lg",text:ey.bt("Aceitar", "Accept", "boardRep.invite.acceptButton", undefined, true)})})]})]}):(0,A.jsxs)(n.xu,{height:V?void 0:eY,marginTop:eZ?en:1,paddingX:2,paddingY:eZ?es:0,children:[J&&(0,A.jsxs)(n.xu,{alignContent:"center",alignItems:"center",display:"flex",justifyContent:"start",marginEnd:2,paddingY:1,children:[(0,A.jsx)(n.xu,{marginEnd:2,marginStart:1,children:(0,A.jsx)(o.qE,{accessibilityLabel:ey.bt("Avatar", "Avatar", "User`s Avatar", undefined, true),name:eS?.fullName??"",size:"xs",src:eS?.imageMediumUrl??""})}),(0,A.jsxs)(n.kC,{direction:"column",children:[(0,A.jsxs)(n.xu,{alignItems:"center","data-test-id":"board-card-title",display:"flex",children:[(0,A.jsxs)(n.xv,{inline:!0,lineClamp:1,size:"100",children:[(0,A.jsx)(n.xv,{inline:!0,size:"100",children:ey.bt("Por", "By", "boardRep.boardCard.userAttribution", undefined, true)})," ",(0,A.jsx)(n.xv,{inline:!0,size:"100",weight:"bold",children:eS?.fullName})]}),eR&&(0,A.jsx)(n.xu,{marginStart:1,children:(0,A.jsx)(C.Z,{isVerifiedIdentity:!!eN,isVerifiedMerchant:!!eW,size:"xs"})})]}),(0,A.jsxs)(n.xu,{alignItems:eC?"center":"start",direction:"row",display:"flex",marginTop:1,children:[(0,A.jsxs)(n.xv,{color:"subtle",lineClamp:1,size:"100",children:[(0,A.jsx)(p.Z,{}),(0,x.nk)(ey.nbt(["{{ count }} Pin", "{{ count }} Pins"], ex, "profile.ProfilePage.board.BoardCard.pinsCount", true),{count:ew(ea,ex,{shortform:!0,shortform_maximum_fraction_digits:1})})]}),(0,A.jsx)(n.xv,{color:"subtle",size:"100",children:(0,A.jsx)(f.Z,{ariaHidden:!0,size:"100"})}),!e&&(0,A.jsx)(n.xu,{display:"inlineBlock",marginEnd:eP?2:0,children:(0,A.jsxs)(n.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,A.jsx)(p.Z,{}),ej(el,!0)]})})]})]})]}),!J&&(0,A.jsxs)(r.Fragment,{children:[(0,A.jsxs)(n.xu,{alignItems:eT?"start":"center","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,A.jsx)(S,{isBoardsActualizationRepsExp:eT,children:eo}),eO&&!et&&eV&&(0,A.jsx)(j.Z,{boardId:i})]}),e$&&(0,A.jsx)(n.xu,{marginTop:1,children:(0,A.jsx)(y.Z,{numberOfCollaborators:Z,ownerFullName:eS?.fullName??"",ownerIsVerifiedIdentity:!!eN,ownerIsVerifiedMerchant:!!eW,showBoardCollaborators:eV})}),(0,A.jsxs)(n.xu,{alignItems:eC?"center":"start",direction:"row",display:"flex",marginTop:1,children:[(0,A.jsxs)(n.xv,{color:eT?"subtle":void 0,lineClamp:1,size:"100",children:[(0,A.jsx)(p.Z,{}),(0,x.nk)(ey.nbt(["{{ count }} Pin", "{{ count }} Pins"], ex, "profile.ProfilePage.board.BoardCard.pinsCount", true),{count:ew(ea,ex,{shortform:!0,shortform_maximum_fraction_digits:1})})]}),!!eg&&(0,A.jsxs)(n.xv,{color:eT?"subtle":void 0,lineClamp:1,size:"100",children:[(0,A.jsx)(f.Z,{ariaHidden:!0,size:"100"}),(0,A.jsx)(p.Z,{}),(0,x.nk)(ey.nbt(["{{ count }} subpasta", "{{ count }} subpastas"], eg, "profile.ProfilePage.board.BoardCard.sectionsCount", true),{count:eg})]}),eT&&(0,A.jsx)(n.xv,{color:"subtle",size:"100",children:(0,A.jsx)(f.Z,{ariaHidden:!0,size:"100"})}),(0,A.jsx)(n.xu,{display:eZ?"flex":"inlineBlock",marginEnd:eP?2:0,marginStart:eT?void 0:2,children:(0,A.jsxs)(n.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,A.jsx)(p.Z,{}),ej(el,!0)]})})]}),e&&!eC&&(0,A.jsxs)(n.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,A.jsx)(p.Z,{}),ey.bt("Arquivada", "Archived", "profile.ProfilePage.BoardCard.ArchivedText", undefined, true)]}),eM&&(0,A.jsx)(n.xu,{column:2===ed?12:void 0,flex:"none",marginTop:2===ed?3:void 0,children:(0,A.jsx)(P.Z,{disabled:!!eS?.blockedByMe,followEventType:26,id:G,isFollowed:U,onFollow:eH,onUnfollow:eD,pinKey:null,shouldUseLegoColors:!0,size:"md",unfollowEventType:27,viewParameter:ef,viewType:eb})})]})]})})]})})}},464593:(e,i,t)=>{t.d(i,{Z:()=>c});var l=t(883119),r=t(297134),a=t(140017),n=t(72461),s=t(5859),o=t(785893);let d={xs:{icon:12,text:"100",height:15},sm:{icon:16,text:"200",height:17},md:{icon:20,text:"300",height:18},lg:{icon:24,text:"400",height:23}};function c({ownerFullName:e,ownerIsVerifiedMerchant:i,ownerIsVerifiedIdentity:t,numberOfCollaborators:c,size:u="xs",showBoardCollaborators:h=!0}){let x=(0,a.ZP)(),{locale:g}=(0,s.B)(),_=(0,n.Z)();return(0,o.jsxs)(l.kC,{alignItems:"center",justifyContent:"start",maxHeight:d[u].height,children:[(0,o.jsx)(l.xv,{lineClamp:1,size:d[u].text,children:(0,o.jsx)(r.Z,{text:e})}),(i||t)&&(0,o.jsx)(l.xu,{flex:"none",marginStart:1,children:i?(0,o.jsx)(l.JO,{accessibilityLabel:x.bt("Ícone do selo de verificação do comerciante", "Merchant verification badge icon", "merchantVerification.badge.icon", undefined, true),color:"shopping",icon:"workflow-status-ok",size:d[u].icon}):(0,o.jsx)(l.JO,{accessibilityLabel:x.bt("Ícone do selo de verificação de identidade", "Identity verification badge icon", "identityVerification.badge.icon", undefined, true),color:"error",icon:"check-circle",size:d[u].icon})}),h&&c>0&&(0,o.jsx)(l.xu,{flex:"none",marginStart:1,children:(0,o.jsx)(l.xv,{size:d[u].text,children:"+ "+_(g,c,{shortform:!0,shortform_maximum_fraction_digits:0})})})]})}},724009:(e,i,t)=>{t.d(i,{Z:()=>u});var l=t(883119),r=t(140017),a=t(316667),n=t(554786),s=t(667294),o=t(149722),d=t(761203),c=t(785893);function u({boardId:e}){let i=(0,r.ZP)(),t=(0,o.Z)(),u=(0,n.HG)(),h=(0,d.gC)()(e),x=function(e){let i=(0,o.Z)(),t=(0,n.HG)()&&i&&i.isAuth,l=(0,d.gC)()(e);return(0,s.useMemo)(()=>{if(!l)return[];let{owner:e,collaborating_users:r}=l,[a,n,s]=[new Set,new Set,new Set];for(let t of[...e?[e]:[],...r||[]])t.id===e?.id?a.add(t):t.id===i.id?n.add(t):s.add(t);return[...a,...n,...s].map(e=>({name:(t?e.full_name:e.username)??"",src:"https://s.pinimg.com/images/user/default_75.png"===e.image_medium_url?"":e.image_medium_url??""}))},[t,l,i])}(e);if(!h)return null;let{collaborator_count:g=0}=h,_=u&&t&&t.isAuth?23:16,m=_/3*((x.length>2?3:x.length)*2+1),p=g>=x.length?g-x.length:0,f=[...x,...Array(p=p>99?100:p).fill({name:"",src:""})];return(0,c.jsx)(l.xu,{height:_,marginStart:2,minWidth:m,width:m,children:(0,c.jsx)(l.HE,{accessibilityLabel:a.U+(i.bt("A pasta tem colaboradores", "Board has collaborators", "boardCard.avatarGroup.collaborators", undefined, true)),collaborators:f})})}},668649:(e,i,t)=>{t.d(i,{Z:()=>c});var l=t(667294),r=t(883119),a=t(785893);function n(e){return`${Math.min(100*e,100)}%`}function s({customCover:e,imgPos:i,imgUrl:t}){let[r,a]=(0,l.useState)({height:0,width:0});if((0,l.useEffect)(()=>{let e=new Image;e.onload=()=>a({height:e.naturalHeight,width:e.naturalWidth}),e.src=t},[t]),!e||!i||!r.height||!r.width)return"center center";let s=r.width-i.width,o=r.height-i.height,d=s?n(i.x/s):"center",c=o?n(i.y/o):"center";return`${d} ${c}`}function o(e){let i=s(e),{imgUrl:t}=e,l={backgroundImage:`url(${t})`,backgroundPosition:i,backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100%",backgroundColor:"#EFEFEF",position:"relative"};return(0,a.jsx)(r.xu,{"data-test-id":"cover-image-box",height:"100%",width:"100%",children:(0,a.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:l},"data-test-id":"cover-image",children:(0,a.jsx)("div",{className:"imageWash",style:{position:"absolute"}})})})}function d(e){let i=s(e),{alt:t,color:l,imgUrl:n}=e;return(0,a.jsx)(r.zd,{height:"100%",width:"100%",children:(0,a.jsx)("img",{alt:t||"",src:n,style:{backgroundColor:l||"#EFEFEF",fetchPriority:"cover",height:"100%",loading:"auto",objectFit:"cover",objectPosition:i,width:"100%"}})})}function c(e){let{renderAsImage:i}=e;return i?(0,a.jsx)(d,{...e}):(0,a.jsx)(o,{...e})}},304431:(e,i,t)=>{t.d(i,{Z:()=>x});var l=t(667294),r=t(883119),a=t(140017),n=t(5859),s=t(554786),o=t(168477),d=t(668649),c=t(910777),u=t(785893);let h="100%";function x(e){let i=(0,a.ZP)(),{canEdit:t,containerBackgroundColor:x="white",coverPhoto:g,fullSize:_,hideSecretBoardIcon:m,images:p,isActive:f,isProtected:b,isSecret:v,isTemporarilyDisabled:y,layout:j,onEditClick:w,renderAsImage:z,showSensitivityScreen:C}=e,P=(0,s.HG)(),{isRTL:k,isAuthenticated:A}=(0,n.B)(),I=(0,l.useRef)(null),S=p[0],Z=!g&&p[0]?.name||i.bt("Imagem da capa", "Cover image", "DrawerImageGroup", undefined, true),F=[,,].fill(),B=new r.Ry(1),E="square"===j?o.M0:o.z9,U="square"===j?o.FP:o.FC,L=S?.url?(0,u.jsx)(r.Ee,{alt:Z,color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:S.url}):(0,u.jsx)(r.xu,{color:"secondary",height:"100%",width:"100%"}),T=y||C?{filter:"blur(20px)"}:{};return(0,u.jsx)(r.zd,{height:_?"100%":void 0,rounding:4,wash:f,width:"100%",children:(0,u.jsxs)(r.kC,{alignItems:"stretch",direction:"row",height:"100%",justifyContent:"start",children:[(0,u.jsx)(r.sg,{span:8,children:(0,u.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:T},height:_?"100%":void 0,position:"relative",children:(0,u.jsx)(r.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:h}},overflow:"hidden",width:"100%",children:(0,u.jsxs)(r.xu,{ref:I,bottom:!0,dangerouslySetInlineStyle:{__style:{borderColor:x,borderStyle:"solid",borderWidth:"1px 0 1px 1px"}},"data-test-id":"drawer-image-group-first-image-container",left:!0,overflow:"hidden",position:"absolute",right:!0,top:!0,children:[(b||v)&&!m&&(0,u.jsx)(r.xu,{left:!k,margin:2,position:"absolute",right:k,top:!0,zIndex:B,children:(0,u.jsx)(c.Z,{backgroundColor:"default",iconColor:"default",privacy:v?"secret":"protected",size:P&&A?32:24})}),g?.url?(0,u.jsx)(d.Z,{customCover:g.isCustom,height:U,imgPos:g.position||{width:0,height:0,x:0,y:0},imgUrl:g.url??"",renderAsImage:z,width:Math.floor(E/3*2)}):L]})})})}),(0,u.jsx)(r.sg,{span:4,children:(0,u.jsxs)(r.xu,{dangerouslySetInlineStyle:{__style:T},height:"100%",children:[t&&f&&(0,u.jsx)(r.xu,{bottom:!0,left:k,margin:2,position:"absolute",right:!k,zIndex:B,children:(0,u.jsx)(r.hU,{accessibilityLabel:i.bt("Editar", "Edit", "DrawerImageGroup.edit", undefined, true),bgColor:"white",icon:"edit",iconColor:"darkGray",onClick:({event:e})=>w?.(e),size:"sm"})}),F.map((e,i)=>{let t=g?p[i]:p[i+1];return(0,u.jsx)(r.xu,{height:_?"50%":void 0,position:"relative",children:(0,u.jsx)(r.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:h}},overflow:"hidden",width:"100%",children:(0,u.jsx)(r.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{borderColor:x,borderStyle:"solid",borderWidth:0===i?1:"0 1px 1px 1px"}},left:!0,overflow:"hidden",position:"absolute",right:!0,top:!0,children:t?.url?(0,u.jsx)(r.Ee,{alt:"",color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:t.url}):(0,u.jsx)(r.xu,{color:"secondary",height:"100%",width:"100%"})})})},i)})]})}),(y||C)&&(0,u.jsx)(r.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{background:"rgba(0,0,0,0.5)"}},display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:!0,width:"100%",children:y?(0,u.jsx)(r.xu,{maxWidth:188,children:(0,u.jsx)(r.xv,{align:"center",color:"light",size:"200",weight:"bold",children:i.bt("Esta pasta está indisponível no momento", "This board is currently unavailable", "drawerImageGroup.unavailableBoard.heading", undefined, true)})}):(0,u.jsx)(r.X6,{align:"center",color:"light",size:"400",children:i.bt("Esta pasta pode ter conteúdo sensível", "This board may contain sensitive content", "drawerImageGroup.sensitivityScreen.heading", undefined, true)})})]})})}},168477:(e,i,t)=>{t.d(i,{AC:()=>a,FC:()=>d,FP:()=>s,M0:()=>n,Xq:()=>c,Y_:()=>r,s0:()=>l,sN:()=>u,z9:()=>o});let l=44,r=32,a=52,n=236,s=157,o=320,d=213,c=7,u=["pinterest","pinterest_canada","pinterestuk","pinterestfr","pinterestde","pinterestit","pinterestespana","pinterestaustralia","pinterestindia","pinterestindonesia","pinterestjp","pinterestbr","pinterestmx","pinterestar","beauty","fashion","homedecor","food","inspiration","inspiringideas","aesthetics","shop","art","travel","trends","collages","pinterestpredicts"]},910777:(e,i,t)=>{t.d(i,{Z:()=>n});var l=t(883119),r=t(140017),a=t(785893);function n({backgroundColor:e="darkGray",iconColor:i="inverse",iconSize:t,privacy:n,size:s=20}){let o=(0,r.ZP)();return(0,a.jsx)(l.xu,{alignItems:"center",color:e,direction:"column",display:"flex",height:s,justifyContent:"center",rounding:"circle",width:s,children:(0,a.jsx)(l.JO,{accessibilityLabel:o.bt("Ícone de pasta secreta", "Secret board icon", "Icon indicating that a board is secret", undefined, true),color:i,icon:"secret"===n?"lock":"security",size:t??s/2})})}},680902:(e,i,t)=>{t.d(i,{Z:()=>o}),t(167912);var l,r=t(711147),a=t(554786),n=t(149722);let s=void 0!==l?l:l=t(903225),o=e=>{let i=(0,a.HG)(),t=(0,n.Z)(),l=t?.isAuth??!1,o=(0,r.Z)(s,e);return e=>{if(i&&l)return o?.coverPin?.imageUrl??o?.coverImageSpec_222x?.url??(o?.image_170x||[])[0]?.url??"";let t=o?.imageCoverHdUrl||o?.imageCoverUrl;if(t)return t;let r=o?.coverImageSpec_400x300?.url??o?.coverImageSpec_222x?.url??o?.coverImageSpec_216x146?.url??"";return e&&e>2&&r?r:o?.imageCoverUrl||""}}},265326:(e,i,t)=>{t.d(i,{Bw:()=>s,Jx:()=>n,po:()=>l});let l=(e="")=>(e??"").substring((e??"").lastIndexOf("/")+1),r=e=>({dominant_color:"#FFFFFF",height:1,url:e,width:1}),a=e=>{if(!e)return()=>!0;let i=l(e);return e=>"string"==typeof e?l(e)!==i:l(e.url??"")!==i},n=(e,i,t)=>e?e.filter(a(t)):i?i.filter(a(t)).map(r):[],s=e=>(e&&e.crop&&e.size&&{x:e.crop[0],y:e.crop[1],width:e.size[0],height:e.size[1]})??{x:0,y:0,width:0,height:0}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/83054.pt_BR-ecde635380e5a425.mjs.map