(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema7"],{"1a85":function(e,t,s){e.exports=s.p+"img/91.0b2523e1.png"},"20a4":function(e,t,s){"use strict";t["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const e=this.elements.map(e=>e.id),t=e.indexOf(this.selected);if(t<0)return{};const s={};return 0===t?s.next=e[t+1]:(t+1===e.length||(s.next=e[t+1]),s.back=e[t-1]),s}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((e,t)=>{const s=e.data&&e.data.attrs?e.data.attrs:[];return{id:this.mainId+t+1,elm:e.elm,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(e){return this.$refs[e][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(e=>e.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},"52bd":function(e,t,s){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"slyder-f"},[t("div",{staticClass:"slyder-f__btn pe-3",on:{click:e.clickAnterior}},[t("i",{staticClass:"fas fa-chevron-left"})]),t("div",{staticClass:"slyder-f__main",attrs:{id:"slyder-f-"+e.mainId}},[e.elements.length&&e.rendered?t("ScrollHorizontal",{attrs:{selectedId:"sl-"+e.selected,row:""}},e._l(e.elements,(function(s,a){return t("div",{directives:[{name:"child",rawName:"v-child",value:s.elm,expression:"item.elm"}],key:"sl-key-"+s.id,staticClass:"slyder-f__slyde",class:e.columnas,attrs:{id:"sl-"+s.id}})})),0):e._e()],1),t("div",{staticClass:"slyder-f__btn ps-3",on:{click:e.clickSiguiente}},[t("i",{staticClass:"fas fa-chevron-right"})]),t("div",{staticClass:"hidden-slot"},[e._t("default")],2)])},i=[],n=s("20a4"),o={props:{datos:{type:Array,default:()=>[]}},data:()=>({mainId:Math.floor(Math.random()*10**10),selected:"0"}),methods:{getId(e){return e<0?null:"sl-"+this.mainId+e+1}}},l=function(){var e=this,t=e._self._c;return t("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[t("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":e.itemFullWidth},{row:e.row}],style:[{transform:`translate(${e.scrollVal}px,0px)`}]},[e._t("default")],2)])},r=[],c={name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data(){return{scrollVal:0,ids:[]}},watch:{selectedId(e){e.length&&this.scroll()}},mounted(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated(){this.getCords()},beforeDestroy(){window.removeEventListener("resize",this.scroll)},methods:{scroll(){var e;const t=null===(e=this.ids.find(e=>e.id===this.selectedId))||void 0===e?void 0:e.id,s=document.getElementById(t);if(!Object.keys(this.$slots.default).length||!this.selectedId.length||null===s)return;const a=this.$refs.hContainer,i=s.offsetWidth*this.ids.length;let n=s.offsetLeft;const o=a.offsetWidth/s.offsetWidth;o>1&&i-n<a.offsetWidth&&(n=i-a.offsetWidth),this.scrollVal=1===this.ids.length?0:-n},getCords(){this.$slots.default&&(this.ids=this.$slots.default.map(e=>({id:e.elm.id,key:e.key})))}}},d=c,m=(s("fff0"),s("2877")),u=Object(m["a"])(d,l,r,!1,null,"2a7d1721",null),p=u.exports,h={name:"SlyderF",components:{ScrollHorizontal:p},mixins:[n["a"],o],props:{columnas:{type:String,default:""}},methods:{clickAnterior(){const e=this.elements.map(e=>e.id),t=e.indexOf(this.selected);t>0&&(this.selected=e[t-1])},clickSiguiente(){const e=this.elements.map(e=>e.id),t=document.querySelector("#slyder-f-"+this.mainId),s=window.getComputedStyle(t),a=parseFloat(s.width),i=document.querySelector("#sl-"+this.elements[0].id),n=window.getComputedStyle(i),o=parseFloat(n.width),l=Math.round(a/o),r=l>1?e.slice(0,e.length-(l-1)):e,c=r.indexOf(this.selected);c<r.length-1&&(this.selected=r[c+1])}}},f=h,v=Object(m["a"])(f,a,i,!1,null,null,null);t["a"]=v.exports},7676:function(e,t,s){e.exports=s.p+"img/93.3a4ac104.png"},a2b2:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno"),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[e._m(0),e._m(1),t("Separador"),e._m(2),e._m(3),e._m(4),e._m(5)],1)],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"titulo-principal color-acento-contenido"},[t("div",{staticClass:"titulo-principal__numero"},[t("span",[e._v("7")])]),t("h1",[e._v("Conclusiones y perspectivas futuras ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row bg3 align-items-center"},[t("div",{staticClass:"px-lg-5 px-4"},[t("p",[e._v("A lo largo de este componente se ha explorado el vasto y dinámico mundo del "),t("i",[e._v("Big Data")]),e._v(", desde sus conceptos fundamentales hasta las herramientas y técnicas más avanzadas utilizadas en la analítica de datos. Al llegar al final de nuestro viaje, es importante recapitular los puntos clave y reflexionar sobre el futuro de este campo en constante evolución.")]),t("p",{staticClass:"mb-5"},[e._v("La exploración inició con los fundamentos de la programación, sentando las bases para comprender cómo se manipulan y procesan los datos a gran escala. Se abordaron elementos como algoritmos, variables, estructuras de control y otros conceptos esenciales que forman el núcleo de cualquier sistema de procesamiento de datos.")])]),t("div",{staticClass:"row justify-content-center mb-4"},[t("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("1a85"),alt:""}})]),t("div",{staticClass:"col-lg-8 my-lg-0 my-3"},[t("div",{staticClass:"bg4 brad p-3 mb-4"},[t("p",[e._v("Luego, se presentaron lenguajes de programación específicamente diseñados para la analítica de datos, con un enfoque particular en R y Python. Estos lenguajes, con sus robustas bibliotecas y comunidades activas, han revolucionado la forma en que abordamos los desafíos del "),t("i",[e._v("Big Data")]),e._v(".")]),t("p",{staticClass:"mb-0"},[e._v("Posteriormente, se trató la analítica de datos con mayor detalle, desde las técnicas básicas hasta los métodos avanzados de machine learning. Se aprendió cómo transformar datos brutos en insights accionables, un proceso que es tanto un arte como una ciencia.")])]),t("div",{staticClass:"row justify-content-center align-items-center mb-4"},[t("div",{staticClass:"col-lg-auto"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("d4b3"),alt:""}})]),t("div",{staticClass:"col pt-lg-0 pt-md-4"},[t("p",{staticClass:"mb-0"},[e._v("El recorrido continuó con una inmersión en el mundo de las bases de datos, explorando tanto los sistemas relacionales tradicionales como las nuevas soluciones NoSQL diseñadas para manejar la escala y la variedad del "),t("i",[e._v("Big Data")]),e._v(".")])])]),t("p",[e._v("Finalmente, se consideraron herramientas informáticas utilizadas para su análisis, proporcionando una visión completa del ecosistema del "),t("i",[e._v("Big Data")]),e._v(".")])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_7_1"}},[t("h2",[e._v("7.1 Reflexiones finales y perspectivas futuras")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("El campo del "),t("i",[e._v("Big Data")]),e._v(" está en constante evolución, impulsado por avances tecnológicos y nuevas necesidades empresariales. A medida que se avanza, es posible anticipar varias tendencias y desafíos:")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row justify-content-center mb-4"},[t("div",{staticClass:"col-lg-4 my-lg-0 my-3 j1"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("e995"),alt:""}})]),t("div",{staticClass:"col-lg-5 my-lg-0 my-3"},[t("div",{staticClass:"bg4 brad p-3 h-100 j1"},[t("ul",{staticClass:"mb-0 lista-ul fa-ul"},[t("li",[t("i",{staticClass:"fas fa-check v1"}),t("span",[e._v("Inteligencia artificial y aprendizaje automático: estas tecnologías seguirán integrándose más profundamente en los procesos de análisis de datos, permitiendo insights más profundos y predicciones más precisas.")])]),t("li",[t("i",{staticClass:"fas fa-check v1"}),t("span",[e._v("Privacidad y ética de los datos: con el aumento del escrutinio público y la regulación gubernamental, la gestión ética de los datos y la protección de la privacidad se volverán aún más sensibles.")])]),t("li",[t("i",{staticClass:"fas fa-check v1"}),t("span",[e._v("Edge computing: el procesamiento de datos en el borde de la red, más cerca de donde se generan los datos, ganará importancia, especialmente con el crecimiento del Internet de las Cosas (IoT).")])])])])]),t("div",{staticClass:"col-lg-3 my-lg-0 my-3"},[t("div",{staticClass:"bg13 brad p-3 h-100 j1"},[t("ul",{staticClass:"mb-0 lista-ul fa-ul"},[t("li",[t("i",{staticClass:"fas fa-check v1"}),t("span",[e._v("Automatización del análisis de datos: herramientas que automatizan aspectos del proceso de análisis de datos se volverán más sofisticadas, permitiendo a los analistas centrarse en tareas de mayor valor.")])]),t("li",[t("i",{staticClass:"fas fa-check v1"}),t("span",[e._v("Datos en tiempo real: la capacidad de analizar y actuar sobre los datos en tiempo real se volverá cada vez más importante en muchos sectores.")])])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-10"},[t("p",{staticClass:"my-5"},[e._v("El "),t("i",[e._v("Big Data")]),e._v(" ha transformado la forma en que las organizaciones toman decisiones y operan. A medida que avanzamos, la capacidad de manejar, analizar y extraer valor de grandes volúmenes de datos se volverá aún más crítica. Los profesionales que puedan combinar habilidades técnicas con pensamiento estratégico y comprensión del negocio estarán bien posicionados para liderar en esta nueva era.")]),t("div",{staticClass:"row justify-content-center align-items-center bg4 br-d p-4 brad"},[t("div",{staticClass:"col-lg-auto"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("7676"),alt:""}})]),t("div",{staticClass:"col pt-lg-0 pt-md-4"},[t("p",{staticClass:"mb-0"},[e._v("El viaje en el mundo del "),t("i",[e._v("Big Data")]),e._v(" es continuo. Las herramientas y técnicas que se han apreciado en este componente formativo son solo el comienzo. A medida que surgen nuevos desafíos y oportunidades, es necesario mantener la curiosidad, adaptarse y estar siempre dispuestos a aprender. En conclusión, el "),t("i",[e._v("Big Data")]),e._v(" es todo un cambio fundamental en cómo entendemos e interactuamos con el mundo que nos rodea. Al dominar los conceptos, técnicas y herramientas que se han discutido, las personas quedan equipadas para navegar este nuevo paisaje de datos y desbloquear los insights que darán forma al futuro.")])])])])])}],n=s("52bd"),o={name:"Tema7",components:{SlyderF:n["a"]},data:()=>({}),mounted(){this.$nextTick(()=>{this.$aosRefresh()})},updated(){this.$aosRefresh()}},l=o,r=s("2877"),c=Object(r["a"])(l,a,i,!1,null,null,null);t["default"]=c.exports},bec2:function(e,t,s){},d4b3:function(e,t,s){e.exports=s.p+"img/31.77bc4414.png"},e995:function(e,t,s){e.exports=s.p+"img/92.8668cb68.png"},fff0:function(e,t,s){"use strict";s("bec2")}}]);
//# sourceMappingURL=tema7.1a05db9f.js.map