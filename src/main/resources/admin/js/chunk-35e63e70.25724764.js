(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35e63e70"],{"72a5b":function(t,e,a){"use strict";var r=a("7c17"),o=a.n(r);o.a},"7c17":function(t,e,a){},c405:function(t,e,a){"use strict";a("3a23"),a("612f");var r=a("9efd"),o="/api/admin/categories",s={};function n(t,e){e.forEach(function(e){t.key===e.parentId&&(t.children||(t.children=[]),t.children.push({key:e.id,title:e.name,isLeaf:!1}))}),t.children?t.children.forEach(function(t){return n(t,e)}):t.isLeaf=!0}s.listAll=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(r["a"])({url:"".concat(o),params:{more:t},method:"get"})},s.listTree=function(){return Object(r["a"])({url:"".concat(o,"/tree_view"),method:"get"})},s.create=function(t){return Object(r["a"])({url:o,data:t,method:"post"})},s.delete=function(t){return Object(r["a"])({url:"".concat(o,"/").concat(t),method:"delete"})},s.get=function(t){return Object(r["a"])({url:"".concat(o,"/").concat(t),method:"get"})},s.update=function(t,e){return Object(r["a"])({url:"".concat(o,"/").concat(t),data:e,method:"put"})},s.concreteTree=function(t){var e={key:0,title:"top",children:[]};return n(e,t),e.children},e["a"]=s},caf6:function(t,e,a){"use strict";var r=a("9efd"),o="/api/admin/posts",s={listLatest:function(t){return Object(r["a"])({url:"".concat(o,"/latest"),params:{top:t},method:"get"})},query:function(t){return Object(r["a"])({url:o,params:t,method:"get"})},get:function(t){return Object(r["a"])({url:"".concat(o,"/").concat(t),method:"get"})},create:function(t,e){return Object(r["a"])({url:o,method:"post",data:t,params:{autoSave:e}})},update:function(t,e,a){return Object(r["a"])({url:"".concat(o,"/").concat(t),method:"put",data:e,params:{autoSave:a}})},updateStatus:function(t,e){return Object(r["a"])({url:"".concat(o,"/").concat(t,"/status/").concat(e),method:"put"})},delete:function(t){return Object(r["a"])({url:"".concat(o,"/").concat(t),method:"delete"})},postStatus:{PUBLISHED:{color:"green",status:"success",text:"已发布"},DRAFT:{color:"yellow",status:"warning",text:"草稿"},RECYCLE:{color:"red",status:"error",text:"回收站"}}};e["a"]=s},d28db:function(t,e,a){"use strict";var r=a("9efd"),o="/api/admin/tags",s={listAll:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(r["a"])({url:o,params:{more:t},method:"get"})},createWithName:function(t){return Object(r["a"])({url:o,data:{name:t},method:"post"})},create:function(t){return Object(r["a"])({url:o,data:t,method:"post"})},update:function(t,e){return Object(r["a"])({url:"".concat(o,"/").concat(t),data:e,method:"put"})},delete:function(t){return Object(r["a"])({url:"".concat(o,"/").concat(t),method:"delete"})}};e["a"]=s},db44:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"page-header-index-wide"},[r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:24}},[r("div",{staticStyle:{"margin-bottom":"16px"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入文章标题"}]}],expression:"['title', { rules: [{ required: true, message: '请输入文章标题' }] }]"}],attrs:{size:"large",placeholder:"请输入文章标题"},model:{value:e.postToStage.title,callback:function(t){e.$set(e.postToStage,"title",t)},expression:"postToStage.title"}})],1),r("div",{attrs:{id:"editor"}},[r("mavon-editor",{attrs:{boxShadow:!1,toolbars:e.toolbars,ishljs:!0,autofocus:!1},model:{value:e.postToStage.originalContent,callback:function(t){e.$set(e.postToStage,"originalContent",t)},expression:"postToStage.originalContent"}})],1)])],1),r("a-drawer",{attrs:{title:"文章设置",width:e.isMobile()?"100%":"460",placement:"right",closable:"",visible:e.postSettingVisible},on:{close:function(){return t.postSettingVisible=!1}}},[r("div",{staticClass:"post-setting-drawer-content"},[r("div",{style:{marginBottom:"16px"}},[r("h3",{staticClass:"post-setting-drawer-title"},[e._v("基本设置")]),r("div",{staticClass:"post-setting-drawer-item"},[r("a-form",{attrs:{layout:"vertical"}},[r("a-form-item",{attrs:{label:"文章路径：",help:e.options.blog_url+"/archives/"+(e.postToStage.url?e.postToStage.url:"{auto_generate}")}},[r("a-input",{model:{value:e.postToStage.url,callback:function(t){e.$set(e.postToStage,"url",t)},expression:"postToStage.url"}})],1),r("a-form-item",{attrs:{label:"开启评论："}},[r("a-radio-group",{attrs:{defaultValue:!1},model:{value:e.postToStage.disallowComment,callback:function(t){e.$set(e.postToStage,"disallowComment",t)},expression:"postToStage.disallowComment"}},[r("a-radio",{attrs:{value:!1}},[e._v("开启")]),r("a-radio",{attrs:{value:!0}},[e._v("关闭")])],1)],1)],1)],1)]),r("a-divider"),r("div",{style:{marginBottom:"16px"}},[r("h3",{staticClass:"post-setting-drawer-title"},[e._v("分类目录")]),r("div",{staticClass:"post-setting-drawer-item"},[r("category-tree",{attrs:{categories:e.categories},model:{value:e.selectedCategoryIds,callback:function(t){e.selectedCategoryIds=t},expression:"selectedCategoryIds"}}),r("div",[r("a-form",{attrs:{layout:"vertical"}},[e.categoryForm?r("a-form-item",[r("category-select-tree",{attrs:{categories:e.categories},model:{value:e.categoryToCreate.parentId,callback:function(t){e.$set(e.categoryToCreate,"parentId",t)},expression:"categoryToCreate.parentId"}})],1):e._e(),e.categoryForm?r("a-form-item",[r("a-input",{attrs:{placeholder:"分类名称"},model:{value:e.categoryToCreate.name,callback:function(t){e.$set(e.categoryToCreate,"name",t)},expression:"categoryToCreate.name"}})],1):e._e(),e.categoryForm?r("a-form-item",[r("a-input",{attrs:{placeholder:"分类路径"},model:{value:e.categoryToCreate.slugNames,callback:function(t){e.$set(e.categoryToCreate,"slugNames",t)},expression:"categoryToCreate.slugNames"}})],1):e._e(),r("a-form-item",[e.categoryForm?r("a-button",{staticStyle:{marginRight:"8px"},attrs:{type:"primary"},on:{click:e.handlerCreateCategory}},[e._v("保存")]):e._e(),e.categoryForm?e._e():r("a-button",{staticStyle:{marginRight:"8px"},attrs:{type:"dashed"},on:{click:e.toggleCategoryForm}},[e._v("新增")]),e.categoryForm?r("a-button",{on:{click:e.toggleCategoryForm}},[e._v("取消")]):e._e()],1)],1)],1)],1)]),r("a-divider"),r("div",{style:{marginBottom:"16px"}},[r("h3",{staticClass:"post-setting-drawer-title"},[e._v("标签")]),r("div",{staticClass:"post-setting-drawer-item"},[r("a-form",{attrs:{layout:"vertical"}},[r("a-form-item",[r("TagSelect",{model:{value:e.selectedTagIds,callback:function(t){e.selectedTagIds=t},expression:"selectedTagIds"}})],1)],1)],1)]),r("a-divider"),r("div",{style:{marginBottom:"16px"}},[r("h3",{staticClass:"post-setting-drawer-title"},[e._v("摘要")]),r("div",{staticClass:"post-setting-drawer-item"},[r("a-form",{attrs:{layout:"vertical"}},[r("a-form-item",[r("a-input",{attrs:{type:"textarea",autosize:{minRows:5},placeholder:"不填写则会自动生成"},model:{value:e.postToStage.summary,callback:function(t){e.$set(e.postToStage,"summary",t)},expression:"postToStage.summary"}})],1)],1)],1)]),r("a-divider"),r("div",{style:{marginBottom:"16px"}},[r("h3",{staticClass:"post-setting-drawer-title"},[e._v("缩略图")]),r("div",{staticClass:"post-setting-drawer-item"},[r("div",{staticClass:"post-thum"},[r("img",{staticClass:"img",attrs:{src:e.postToStage.thumbnail||"//i.loli.net/2019/05/05/5ccf007c0a01d.png"},on:{click:function(){return t.thumDrawerVisible=!0}}}),r("a-button",{staticClass:"post-thum-remove",attrs:{type:"dashed"},on:{click:e.handlerRemoveThumb}},[e._v("移除")])],1)])]),r("a-divider",{staticClass:"divider-transparent"})],1),r("AttachmentSelectDrawer",{attrs:{drawerWidth:460},on:{listenToSelect:e.handleSelectPostThumb},model:{value:e.thumDrawerVisible,callback:function(t){e.thumDrawerVisible=t},expression:"thumDrawerVisible"}}),r("div",{staticClass:"bottom-control"},[r("a-button",{staticStyle:{marginRight:"8px"},on:{click:e.handleDraftClick}},[e._v("保存草稿")]),r("a-button",{attrs:{type:"primary"},on:{click:e.handlePublishClick}},[e._v("发布")])],1)],1),r("AttachmentDrawer",{model:{value:e.attachmentDrawerVisible,callback:function(t){e.attachmentDrawerVisible=t},expression:"attachmentDrawerVisible"}}),r("footer-tool-bar",{style:{width:e.isSideMenu()&&e.isDesktop()?"calc(100% - "+(e.sidebarOpened?256:80)+"px)":"100%"}},[r("a-button",{attrs:{type:"primary"},on:{click:function(){return t.postSettingVisible=!0}}},[e._v("发布")]),r("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"dashed"},on:{click:function(){return t.attachmentDrawerVisible=!0}}},[e._v("附件库")])],1)],1)},o=[],s=(a("612f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-tree",{attrs:{checkable:"",treeData:t.categoryTree,defaultExpandAll:!0,checkedKeys:t.categoryIds},on:{check:t.onCheck}},[a("span",{staticStyle:{color:"#1890ff"},attrs:{slot:"title0010"},slot:"title0010"},[t._v("sss")])])}),n=[],i=a("c405"),c={name:"CategoryTree",model:{prop:"categoryIds",event:"check"},props:{categoryIds:{type:Array,required:!1,default:function(){return[]}},categories:{type:Array,required:!1,default:function(){return[]}}},computed:{categoryTree:function(){return i["a"].concreteTree(this.categories)}},methods:{onCheck:function(t,e){this.$log.debug("Chekced keys",t),this.$log.debug("e",e);var a=e.checkedNodes.filter(function(t){return t.data.props.isLeaf}).map(function(t){return t.key});this.$log.debug("Effectively selected category ids",a),this.$emit("check",a)}}},l=c,u=a("17cc"),d=Object(u["a"])(l,s,n,!1,null,null,null),g=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-select",{staticStyle:{width:"100%"},attrs:{allowClear:"",mode:"tags",placeholder:"选择或输入标签"},on:{blur:t.handleBlur},model:{value:t.selectedTagNames,callback:function(e){t.selectedTagNames=e},expression:"selectedTagNames"}},t._l(t.tags,function(e){return a("a-select-option",{key:e.id,attrs:{value:e.name}},[t._v(t._s(e.name))])}),1)],1)},p=[],h=(a("3a23"),a("d28db")),f=a("7f43"),v=a.n(f),b={name:"TagSelect",model:{prop:"tagIds",event:"change"},props:{tagIds:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{tags:[],selectedTagNames:[]}},created:function(){var t=this;this.loadTags(),this.selectedTagNames=this.tagIds.map(function(e){return t.tagIdMap[e].name})},computed:{tagIdMap:function(){var t={};return this.tags.forEach(function(e){t[e.id]=e}),t},tagNameMap:function(){var t={};return this.tags.forEach(function(e){t[e.name]=e}),t}},methods:{loadTags:function(t){var e=this;h["a"].listAll(!0).then(function(a){e.tags=a.data.data,t&&t()})},handleBlur:function(){var t=this;this.$log.debug("Blured");var e=this.selectedTagNames.filter(function(e){return!t.tagNameMap[e]});if(this.$log.debug("Tag names to create",e),e!==[]){var a=e.map(function(t){return h["a"].createWithName(t)});v.a.all(a).then(v.a.spread(function(){t.loadTags(function(){t.$log.debug("Tag name map",t.tagNameMap);var e=t.selectedTagNames.map(function(e){return t.tagNameMap[e].id});t.$emit("change",e)})}))}else{var r=this.selectedTagNames.map(function(e){return t.tagNameMap[e].id});this.$emit("change",r)}}}},y=b,T=Object(u["a"])(y,m,p,!1,null,null,null),S=T.exports,C=a("6657"),w=a("ed4e"),k=a("3993"),I=a("fa25"),x=a("5a70"),_=a("ac0d"),$=a("2749"),D=(a("cc71"),a("caf6")),O=a("482b"),j={components:{TagSelect:S,mavonEditor:C["mavonEditor"],CategoryTree:g,FooterToolBar:x["a"],AttachmentDrawer:w["a"],AttachmentSelectDrawer:k["a"],CategorySelectTree:I["a"]},mixins:[_["a"],_["b"]],data:function(){return{toolbars:$["a"],wrapperCol:{xl:{span:24},sm:{span:24},xs:{span:24}},attachmentDrawerVisible:!1,postSettingVisible:!1,thumDrawerVisible:!1,categoryForm:!1,tags:[],categories:[],selectedCategoryIds:[],selectedTagIds:[],postToStage:{},categoryToCreate:{},timer:null,options:[],keys:["blog_url"]}},created:function(){this.loadTags(),this.loadCategories(),this.loadOptions(),clearInterval(this.timer),this.timer=null,this.autoSaveTimer()},destroyed:function(){clearInterval(this.timer),this.timer=null},beforeRouteLeave:function(t,e,a){null!==this.timer&&clearInterval(this.timer),this.autoSavePost(),a()},beforeRouteEnter:function(t,e,a){var r=t.query.postId;a(function(t){r&&D["a"].get(r).then(function(e){var a=e.data.data;t.postToStage=a,t.selectedTagIds=a.tagIds,t.selectedCategoryIds=a.categoryIds})})},methods:{loadTags:function(){var t=this;h["a"].listAll(!0).then(function(e){t.tags=e.data.data})},loadCategories:function(){var t=this;i["a"].listAll().then(function(e){t.categories=e.data.data})},loadOptions:function(){var t=this;O["a"].listAll(this.keys).then(function(e){t.options=e.data.data})},createOrUpdatePost:function(t,e,a){var r=this;this.postToStage.categoryIds=this.selectedCategoryIds,this.postToStage.tagIds=this.selectedTagIds,this.postToStage.id?D["a"].update(this.postToStage.id,this.postToStage,a).then(function(t){r.$log.debug("Updated post",t.data.data),e&&e()}):D["a"].create(this.postToStage,a).then(function(e){r.$log.debug("Created post",e.data.data),t&&t(),r.postToStage=e.data.data})},savePost:function(){var t=this;this.createOrUpdatePost(function(){return t.$message.success("文章创建成功")},function(){return t.$message.success("文章更新成功")},!1)},autoSavePost:function(){null!=this.postToStage.title&&null!=this.postToStage.originalContent&&this.createOrUpdatePost(null,null,!0)},toggleCategoryForm:function(){this.categoryForm=!this.categoryForm},handlePublishClick:function(){this.postToStage.status="PUBLISHED",this.savePost()},handleDraftClick:function(){this.postToStage.status="DRAFT",this.savePost()},handlerRemoveThumb:function(){this.postToStage.thumbnail=null},handlerCreateCategory:function(){var t=this;i["a"].create(this.categoryToCreate).then(function(e){t.loadCategories(),t.categoryToCreate={}})},handleSelectPostThumb:function(t){this.postToStage.thumbnail=t.path,this.thumDrawerVisible=!1},autoSaveTimer:function(){var t=this;null==this.timer&&(this.timer=setInterval(function(){t.autoSavePost()},15e3))}}},N=j,A=(a("72a5b"),Object(u["a"])(N,r,o,!1,null,"348cd59e",null));e["default"]=A.exports},fa25:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-tree-select",{attrs:{treeData:t.categoryTreeData,placeholder:"请选择上级目录，默认为顶级目录",treeDefaultExpandAll:"",treeDataSimpleMode:!0,allowClear:!0,value:t.categoryIdString},on:{change:t.handleSelectionChange}})},o=[],s=(a("48fb"),a("3a23"),a("b06f"),{name:"CategorySelectTree",model:{prop:"categoryId",event:"change"},props:{categoryId:{type:Number,required:!0,default:0},categories:{type:Array,required:!1,default:function(){return[]}}},computed:{categoryTreeData:function(){return this.categories.map(function(t){return{id:t.id,title:t.name,value:t.id.toString(),pId:t.parentId}})},categoryIdString:function(){return this.categoryId.toString()}},methods:{handleSelectionChange:function(t,e,a){this.$log.debug("value: ",t),this.$log.debug("label: ",e),this.$log.debug("extra: ",a),this.$emit("change",t?parseInt(t):0)}}}),n=s,i=a("17cc"),c=Object(i["a"])(n,r,o,!1,null,null,null);e["a"]=c.exports}}]);