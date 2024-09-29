"use strict";(self.webpackChunk_infore_editor=self.webpackChunk_infore_editor||[]).push([[904],{21847:function(a,e,n){n.r(e),n.d(e,{demos:function(){return I}});var i=n(15009),t=n.n(i),s=n(99289),g=n.n(s),m=n(67294),f=n(26111),I={"docs-components-background-readme-demo-0":{component:m.memo(m.lazy(g()(t()().mark(function x(){var c,r,d,u,p;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return c=o.sent,r=c.default,o.next=6,Promise.all([n.e(924),n.e(263),n.e(588),n.e(81),n.e(492)]).then(n.bind(n,31081));case 6:return d=o.sent,u=d.Background,p=d.GraphEditor,o.abrupt("return",{default:function(){return r.createElement(p,null,r.createElement(u,{url:"https://minio.dev.inrobot.cloud/map/1626415200/fb2_03.png",width:2565,height:1839}))}});case 10:case"end":return o.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-components-background-readme-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';

import { Background, GraphEditor } from '@infore/editor';

export default () => (
  <GraphEditor>
    <Background url="https://minio.dev.inrobot.cloud/map/1626415200/fb2_03.png" width={2565} height={1839} />
  </GraphEditor>
);`},react:{type:"NPM",value:"18.3.1"},"@infore/editor":{type:"NPM",value:"3.5.8"}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},97940:function(a,e,n){n.r(e),n.d(e,{demos:function(){return s}});var i=n(67294),t=n(94172),s={"docs-components-base-editor-readme-demo-base-editor":{component:i.memo(i.lazy(function(){return Promise.all([n.e(924),n.e(263),n.e(588),n.e(23),n.e(719),n.e(81),n.e(213),n.e(433)]).then(n.bind(n,52068))})),asset:{type:"BLOCK",id:"docs-components-base-editor-readme-demo-base-editor",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(40682).Z},"@infore/editor":{type:"NPM",value:"3.5.8"},"../form-panel/control-map-service.ts":{type:"FILE",value:n(42364).Z},"./data.ts":{type:"FILE",value:n(85182).Z},"../form-panel/form-schema-service.ts":{type:"FILE",value:n(8650).Z},"./components/node.tsx":{type:"FILE",value:n(6868).Z},"./components/group.tsx":{type:"FILE",value:n(29318).Z},"./components/edge.tsx":{type:"FILE",value:n(15119).Z},"./components/canvas.tsx":{type:"FILE",value:n(69853).Z},react:{type:"NPM",value:"18.3.1"},"./constants.ts":{type:"FILE",value:n(31228).Z},"./fields.ts":{type:"FILE",value:n(42617).Z},"./size.tsx":{type:"FILE",value:n(20976).Z},"./position.tsx":{type:"FILE",value:n(72243).Z},"./input-number.tsx":{type:"FILE",value:n(84288).Z},"./select.tsx":{type:"FILE",value:n(46986).Z},"./color.tsx":{type:"FILE",value:n(24878).Z},"./input.tsx":{type:"FILE",value:n(49303).Z},antd:{type:"NPM",value:"4.24.16"},"react-color":{type:"NPM",value:"2.19.3"},"react-dom":{type:"NPM",value:"18.3.1"},"@antv/xflow-core":{type:"NPM",value:"1.0.50"}},entry:"index.tsx"},context:void 0,renderOpts:void 0},"docs-components-base-editor-readme-demo-ready":{component:i.memo(i.lazy(function(){return Promise.all([n.e(924),n.e(263),n.e(588),n.e(23),n.e(719),n.e(81),n.e(213),n.e(433)]).then(n.bind(n,32043))})),asset:{type:"BLOCK",id:"docs-components-base-editor-readme-demo-ready",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(88738).Z},"@infore/editor":{type:"NPM",value:"3.5.8"}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},42949:function(a,e,n){n.r(e),n.d(e,{demos:function(){return I}});var i=n(15009),t=n.n(i),s=n(99289),g=n.n(s),m=n(67294),f=n(540),I={"docs-components-control-panel-readme-demo-0":{component:m.memo(m.lazy(g()(t()().mark(function x(){var c,r,d,u,p;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return c=o.sent,r=c.default,o.next=6,Promise.all([n.e(924),n.e(263),n.e(588),n.e(81),n.e(492)]).then(n.bind(n,31081));case 6:return d=o.sent,u=d.ControlPanel,p=d.GraphEditor,o.abrupt("return",{default:function(){return r.createElement(p,{position:{top:0,right:280}},r.createElement("div",{style:{height:600}}),r.createElement(u,{onChange:function(y){console.log(y)},onChangeEnd:function(y){console.log(y)},header:"\u6211\u662F\u5934\u90E8",footer:"\u6211\u662F\u5E95\u90E8"}))}});case 10:case"end":return o.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-components-control-panel-readme-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';

import { ControlPanel, GraphEditor } from '@infore/editor';

export default () => (
  <GraphEditor position={{ top: 0, right: 280 }}>
    <div style={{ height: 600 }} />
    <ControlPanel
      onChange={(keys) => {
        console.log(keys);
      }}
      onChangeEnd={(type) => {
        console.log(type);
      }}
      header="\u6211\u662F\u5934\u90E8"
      footer="\u6211\u662F\u5E95\u90E8"
    />
  </GraphEditor>
);`},react:{type:"NPM",value:"18.3.1"},"@infore/editor":{type:"NPM",value:"3.5.8"}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},37640:function(a,e,n){n.r(e),n.d(e,{demos:function(){return I}});var i=n(15009),t=n.n(i),s=n(99289),g=n.n(s),m=n(67294),f=n(425),I={"docs-components-form-panel-readme-demo-0":{component:m.memo(m.lazy(g()(t()().mark(function x(){var c,r,d,u,p,v,o,h,l;return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return c=_.sent,r=c.default,_.next=6,Promise.all([n.e(924),n.e(263),n.e(588),n.e(81),n.e(492)]).then(n.bind(n,31081));case 6:return d=_.sent,u=d.FormPanel,p=d.GraphEditor,_.next=11,Promise.all([n.e(924),n.e(263),n.e(588),n.e(23),n.e(81),n.e(213),n.e(246)]).then(n.bind(n,213));case 11:return v=_.sent,o=v.defaultControlMapService,_.next=15,n.e(753).then(n.bind(n,70753));case 15:return h=_.sent,l=h.defaultFormSchemaService,_.abrupt("return",{default:function(){return r.createElement(p,{position:{right:240}},r.createElement(u,{controlMapService:o,formSchemaService:l}))}});case 18:case"end":return _.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-components-form-panel-readme-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';

import { FormPanel, GraphEditor } from '@infore/editor';

import { defaultControlMapService } from './control-map-service';
import { defaultFormSchemaService } from './form-schema-service';

export default () => (
  <GraphEditor position={{ right: 240 }}>
    <FormPanel controlMapService={defaultControlMapService} formSchemaService={defaultFormSchemaService} />
  </GraphEditor>
);`},react:{type:"NPM",value:"18.3.1"},"@infore/editor":{type:"NPM",value:"3.5.8"},"./form-schema-service.ts":{type:"FILE",value:n(8650).Z},"./control-map-service.ts":{type:"FILE",value:n(42364).Z}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},79784:function(a,e,n){n.r(e),n.d(e,{demos:function(){return I}});var i=n(15009),t=n.n(i),s=n(99289),g=n.n(s),m=n(67294),f=n(32839),I={"docs-components-layout-panel-readme-demo-0":{component:m.memo(m.lazy(g()(t()().mark(function x(){var c,r,d,u,p;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return c=o.sent,r=c.default,o.next=6,Promise.all([n.e(924),n.e(263),n.e(588),n.e(81),n.e(492)]).then(n.bind(n,31081));case 6:return d=o.sent,u=d.GraphEditor,p=d.LayoutPanel,o.abrupt("return",{default:function(){return r.createElement(u,{position:{top:0,right:280}},r.createElement(p,{header:"\u6211\u662F\u5934\u90E8",title:"\u6211\u662F\u6807\u9898",footer:"\u6211\u662F\u5E95\u90E8",children:r.createElement("div",{style:{height:1e3}},"\u6211\u662F\u4E3B\u4F53")}))}});case 10:case"end":return o.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-components-layout-panel-readme-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';

import { GraphEditor, LayoutPanel } from '@infore/editor';

export default () => (
  <GraphEditor position={{ top: 0, right: 280 }}>
    <LayoutPanel
      header="\u6211\u662F\u5934\u90E8"
      title="\u6211\u662F\u6807\u9898"
      footer="\u6211\u662F\u5E95\u90E8"
      children={<div style={{ height: 1000 }}>\u6211\u662F\u4E3B\u4F53</div>}
    />
  </GraphEditor>
);`},react:{type:"NPM",value:"18.3.1"},"@infore/editor":{type:"NPM",value:"3.5.8"}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},1786:function(a,e,n){n.r(e),n.d(e,{demos:function(){return I}});var i=n(15009),t=n.n(i),s=n(99289),g=n.n(s),m=n(67294),f=n(75599),I={"docs-components-node-panel-readme-demo-0":{component:m.memo(m.lazy(g()(t()().mark(function x(){var c,r,d,u,p,v,o;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return c=l.sent,r=c.default,l.next=6,Promise.all([n.e(924),n.e(263),n.e(588),n.e(81),n.e(492)]).then(n.bind(n,31081));case 6:return d=l.sent,u=d.GraphEditor,p=d.NodePanel,l.next=11,Promise.all([n.e(924),n.e(263),n.e(588),n.e(81),n.e(282)]).then(n.bind(n,1362));case 11:return v=l.sent,o=v.default,l.abrupt("return",{default:function(){return r.createElement(u,{position:{left:240}},r.createElement(p,{registerNode:o}))}});case 14:case"end":return l.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-components-node-panel-readme-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';

import { GraphEditor, NodePanel } from '@infore/editor';

import registerNode from './nodes';

export default () => (
  <GraphEditor position={{ left: 240 }}>
    <NodePanel registerNode={registerNode} />
  </GraphEditor>
);`},react:{type:"NPM",value:"18.3.1"},"@infore/editor":{type:"NPM",value:"3.5.8"},"./nodes.ts":{type:"FILE",value:n(94297).Z}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},72015:function(a,e,n){n.r(e),n.d(e,{demos:function(){return I}});var i=n(15009),t=n.n(i),s=n(99289),g=n.n(s),m=n(67294),f=n(47901),I={"docs-components-origin-node-readme-demo-0":{component:m.memo(m.lazy(g()(t()().mark(function x(){var c,r,d,u,p;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return c=o.sent,r=c.default,o.next=6,Promise.all([n.e(924),n.e(263),n.e(588),n.e(81),n.e(492)]).then(n.bind(n,31081));case 6:return d=o.sent,u=d.GraphEditor,p=d.OriginNode,o.abrupt("return",{default:function(){return r.createElement(u,null,r.createElement(p,{id:"1",x:0,y:0,onChange:function(y){console.log(y.data)}}))}});case 10:case"end":return o.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-components-origin-node-readme-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';

import { GraphEditor, OriginNode } from '@infore/editor';

export default () => (
  <GraphEditor>
    <OriginNode
      id="1"
      x={0}
      y={0}
      onChange={(cell) => {
        console.log(cell.data);
      }}
    />
  </GraphEditor>
);`},react:{type:"NPM",value:"18.3.1"},"@infore/editor":{type:"NPM",value:"3.5.8"}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},93031:function(a,e,n){n.r(e),n.d(e,{demos:function(){return I}});var i=n(15009),t=n.n(i),s=n(99289),g=n.n(s),m=n(67294),f=n(8618),I={"docs-components-robot-node-readme-demo-0":{component:m.memo(m.lazy(g()(t()().mark(function x(){var c,r,d,u,p;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return c=o.sent,r=c.default,o.next=6,Promise.all([n.e(924),n.e(263),n.e(588),n.e(81),n.e(492)]).then(n.bind(n,31081));case 6:return d=o.sent,u=d.GraphEditor,p=d.RobotNode,o.abrupt("return",{default:function(){return r.createElement(u,null,r.createElement(p,{id:"1",x:0,y:0,angle:0,range:360,direction:!0,interacting:!0,onChange:function(y){console.log(y.data)},visible:!0}),r.createElement(p,{id:"2",x:200,y:200,angle:0,range:360,direction:!0,interacting:!0,onChange:function(y){console.log(y.data)},visible:!0}))}});case 10:case"end":return o.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-components-robot-node-readme-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';

import { GraphEditor, RobotNode } from '@infore/editor';

export default () => (
  <GraphEditor>
    <RobotNode
      id="1"
      x={0}
      y={0}
      angle={0}
      range={360}
      direction
      interacting
      onChange={(cell) => {
        console.log(cell.data);
      }}
      visible={true}
    />
    <RobotNode
      id="2"
      x={200}
      y={200}
      angle={0}
      range={360}
      direction
      interacting
      onChange={(cell) => {
        console.log(cell.data);
      }}
      visible={true}
    />
  </GraphEditor>
);`},react:{type:"NPM",value:"18.3.1"},"@infore/editor":{type:"NPM",value:"3.5.8"}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},68326:function(a,e,n){n.r(e),n.d(e,{demos:function(){return I}});var i=n(15009),t=n.n(i),s=n(99289),g=n.n(s),m=n(67294),f=n(76239),I={"docs-components-toolbar-readme-demo-0":{component:m.memo(m.lazy(g()(t()().mark(function x(){var c,r,d,u,p;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return c=o.sent,r=c.default,o.next=6,Promise.all([n.e(924),n.e(263),n.e(588),n.e(81),n.e(492)]).then(n.bind(n,31081));case 6:return d=o.sent,u=d.GraphEditor,p=d.Toolbar,o.abrupt("return",{default:function(){return r.createElement(u,{position:{top:40}},r.createElement(p,{saveGraph:function(y,_){console.log(y,_)}}))}});case 10:case"end":return o.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-components-toolbar-readme-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';

import { GraphEditor, Toolbar } from '@infore/editor';

export default () => (
  <GraphEditor position={{ top: 40 }}>
    <Toolbar
      saveGraph={(graphData, meta) => {
        console.log(graphData, meta);
      }}
    />
  </GraphEditor>
);`},react:{type:"NPM",value:"18.3.1"},"@infore/editor":{type:"NPM",value:"3.5.8"}},entry:"index.tsx"},context:void 0,renderOpts:void 0},"docs-components-toolbar-readme-demo-1":{component:m.memo(m.lazy(g()(t()().mark(function x(){var c,r,d,u,p,v,o;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return c=l.sent,r=c.default,l.next=6,Promise.all([n.e(924),n.e(263),n.e(588),n.e(81),n.e(492)]).then(n.bind(n,31081));case 6:return d=l.sent,u=d.GraphEditor,p=d.Toolbar,l.next=11,Promise.all([n.e(263),n.e(291)]).then(n.bind(n,71291));case 11:return v=l.sent,o=v.PlusCircleOutlined,l.abrupt("return",{default:function(){return r.createElement(u,{position:{top:40}},r.createElement(p,{extra:[{id:"id-1",icon:r.createElement(o,null),tooltip:"\u4FDD\u5B58"}]}))}});case 14:case"end":return l.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-components-toolbar-readme-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';

import { GraphEditor, Toolbar } from '@infore/editor';

import { PlusCircleOutlined } from '@ant-design/icons';

export default () => (
  <GraphEditor position={{ top: 40 }}>
    <Toolbar
      extra={[
        {
          id: 'id-1',
          icon: <PlusCircleOutlined />,
          tooltip: '\u4FDD\u5B58',
        },
      ]}
    />
  </GraphEditor>
);`},react:{type:"NPM",value:"18.3.1"},"@infore/editor":{type:"NPM",value:"3.5.8"},"@ant-design/icons":{type:"NPM",value:"5.5.1"}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},60829:function(a,e,n){n.r(e),n.d(e,{demos:function(){return s}});var i=n(67294),t=n(25349),s={"docs-components-tree-node-panel-readme-demo-tree-node-panel":{component:i.memo(i.lazy(function(){return Promise.all([n.e(924),n.e(263),n.e(588),n.e(23),n.e(719),n.e(81),n.e(213),n.e(433)]).then(n.bind(n,90323))})),asset:{type:"BLOCK",id:"docs-components-tree-node-panel-readme-demo-tree-node-panel",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(2002).Z},"@infore/editor":{type:"NPM",value:"3.5.8"},"./meta.ts":{type:"FILE",value:n(77629).Z},"./form-panel/control-map-service.ts":{type:"FILE",value:n(11433).Z},"./form-panel/form-schema-service.ts":{type:"FILE",value:n(93669).Z},"./area.ts":{type:"FILE",value:n(63314).Z},"./point.ts":{type:"FILE",value:n(73202).Z},"./line.tsx":{type:"FILE",value:n(96984).Z},"./components/node.tsx":{type:"FILE",value:n(37666).Z},"./components/canvas.tsx":{type:"FILE",value:n(12939).Z},"./components/edge.tsx":{type:"FILE",value:n(26757).Z},"./components/group.tsx":{type:"FILE",value:n(6423).Z},react:{type:"NPM",value:"18.3.1"},"./constants.ts":{type:"FILE",value:n(63351).Z},"./fields.ts":{type:"FILE",value:n(64625).Z},"./size.tsx":{type:"FILE",value:n(13723).Z},"./color.tsx":{type:"FILE",value:n(92178).Z},"./input.tsx":{type:"FILE",value:n(96450).Z},"./input-number.tsx":{type:"FILE",value:n(95352).Z},"./position.tsx":{type:"FILE",value:n(7969).Z},"./select.tsx":{type:"FILE",value:n(96108).Z},antd:{type:"NPM",value:"4.24.16"},"react-color":{type:"NPM",value:"2.19.3"},"react-dom":{type:"NPM",value:"18.3.1"},"@antv/xflow-core":{type:"NPM",value:"1.0.50"}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},40229:function(a,e,n){n.r(e),n.d(e,{demos:function(){return s}});var i=n(67294),t=n(55685),s={"docs-components-workspace-panel-readme-demo-workspace-panel":{component:i.memo(i.lazy(function(){return Promise.all([n.e(924),n.e(263),n.e(588),n.e(23),n.e(719),n.e(81),n.e(213),n.e(433)]).then(n.bind(n,17638))})),asset:{type:"BLOCK",id:"docs-components-workspace-panel-readme-demo-workspace-panel",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(61870).Z},react:{type:"NPM",value:"18.3.1"},"@infore/editor":{type:"NPM",value:"3.5.8"},"./custom-panel.tsx":{type:"FILE",value:n(20703).Z},antd:{type:"NPM",value:"4.24.16"}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},52036:function(a,e,n){n.r(e),n.d(e,{demos:function(){return s}});var i=n(67294),t=n(63),s={"docs-examples-examplev-1-readme-demo-examplev1":{component:i.memo(i.lazy(function(){return Promise.all([n.e(924),n.e(263),n.e(588),n.e(23),n.e(719),n.e(81),n.e(213),n.e(433)]).then(n.bind(n,92532))})),asset:{type:"BLOCK",id:"docs-examples-examplev-1-readme-demo-examplev1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(21405).Z},"@infore/editor":{type:"NPM",value:"3.5.8"},"./index.less":{type:"FILE",value:n(47054).Z},"./hooks.ts":{type:"FILE",value:n(10773).Z},"./components/DetailPanel.tsx":{type:"FILE",value:n(45875).Z},react:{type:"NPM",value:"18.3.1"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},ahooks:{type:"NPM",value:"3.8.1"},"../utils.ts":{type:"FILE",value:n(63919).Z},"../example.json":{type:"FILE",value:n(13521).Z},antd:{type:"NPM",value:"4.24.16"},lodash:{type:"NPM",value:"4.17.21"},"../fields.ts":{type:"FILE",value:n(2259).Z},"./input.tsx":{type:"FILE",value:n(7331).Z},"./input-number.tsx":{type:"FILE",value:n(99256).Z},"./angle.tsx":{type:"FILE",value:n(92183).Z},"./select.tsx":{type:"FILE",value:n(86974).Z},"./size.tsx":{type:"FILE",value:n(37032).Z},"./position.tsx":{type:"FILE",value:n(97151).Z}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},91955:function(a,e,n){n.r(e),n.d(e,{demos:function(){return s}});var i=n(67294),t=n(48371),s={"docs-examples-examplev-2-readme-demo-examplev2":{component:i.memo(i.lazy(function(){return Promise.all([n.e(924),n.e(263),n.e(588),n.e(23),n.e(719),n.e(81),n.e(213),n.e(433)]).then(n.bind(n,1776))})),asset:{type:"BLOCK",id:"docs-examples-examplev-2-readme-demo-examplev2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(29746).Z},react:{type:"NPM",value:"18.3.1"},"@infore/editor":{type:"NPM",value:"3.5.8"},"@infore/utils":{type:"NPM",value:"1.3.4"},ahooks:{type:"NPM",value:"3.8.1"},"./index.less":{type:"FILE",value:n(74631).Z},"./hooks.ts":{type:"FILE",value:n(38947).Z},"./components/DetailPanel.tsx":{type:"FILE",value:n(4305).Z},"./meta.ts":{type:"FILE",value:n(85808).Z},"./hooks/data4.ts":{type:"FILE",value:n(64476).Z},antd:{type:"NPM",value:"4.24.16"},"./area.ts":{type:"FILE",value:n(60590).Z},"./line.tsx":{type:"FILE",value:n(63939).Z},"./point.ts":{type:"FILE",value:n(2897).Z},lodash:{type:"NPM",value:"4.17.21"},"../../utils.ts":{type:"FILE",value:n(88855).Z},"./NodeView.tsx":{type:"FILE",value:n(39800).Z},"./EdgeView.tsx":{type:"FILE",value:n(73937).Z},"./CanvasView.tsx":{type:"FILE",value:n(72477).Z},"@ant-design/icons":{type:"NPM",value:"5.5.1"},"./OutsideRenderNode.tsx":{type:"FILE",value:n(54280).Z},"../fields.ts":{type:"FILE",value:n(15166).Z},"../fields/split.tsx":{type:"FILE",value:n(29926).Z},"./splitPath.ts":{type:"FILE",value:n(87252).Z},"./math.ts":{type:"FILE",value:n(41138).Z},"./updateCell.ts":{type:"FILE",value:n(22066).Z},"./VirtualList.tsx":{type:"FILE",value:n(79442).Z},"bezier-js":{type:"NPM",value:"6.1.4"},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"rc-virtual-list":{type:"NPM",value:"3.14.8"},angles:{type:"NPM",value:"0.2.4"},"../fields/speed.tsx":{type:"FILE",value:n(39082).Z},"./position.tsx":{type:"FILE",value:n(36515).Z},"./input.tsx":{type:"FILE",value:n(69620).Z},"./angle.tsx":{type:"FILE",value:n(14757).Z},"./input-number.tsx":{type:"FILE",value:n(21563).Z},"./size.tsx":{type:"FILE",value:n(95433).Z},"./select.tsx":{type:"FILE",value:n(82439).Z}},entry:"index.tsx"},context:void 0,renderOpts:void 0}}},11171:function(a,e,n){n.r(e),n.d(e,{demos:function(){return s}});var i=n(67294),t=n(68537),s={}},12396:function(a,e,n){n.r(e),n.d(e,{demos:function(){return s}});var i=n(67294),t=n(58748),s={}},67596:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(26111);const t=[{value:"\u80CC\u666F\u8282\u70B9",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:2},{value:"url",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"\u80CC\u666F\u56FE\u7247\u7684 URL \u5730\u5740",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"true",paraId:1,tocIndex:2},{value:"width",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\u80CC\u666F\u56FE\u7247\u5BBD\u5EA6",paraId:1,tocIndex:2},{value:"500",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"height",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\u80CC\u666F\u56FE\u7247\u9AD8\u5EA6",paraId:1,tocIndex:2},{value:"500",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"x",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\u80CC\u666F\u56FE\u7247\u5DE6\u4E0A\u89D2 x \u8F74\u539F\u70B9",paraId:1,tocIndex:2},{value:"0",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"y",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\u80CC\u666F\u56FE\u7247\u5DE6\u4E0A\u89D2 y \u8F74\u539F\u70B9",paraId:1,tocIndex:2},{value:"0",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2}]},66886:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(94172);const t=[{value:"\u5C5E\u6027\u540D",paraId:0,tocIndex:3},{value:"\u7C7B\u578B",paraId:0,tocIndex:3},{value:"\u63CF\u8FF0",paraId:0,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:0,tocIndex:3},{value:"onLoad",paraId:0,tocIndex:3},{value:"\u521D\u59CB\u5316\u5B8C\u6210\u540E\u4F1A\u56DE\u8C03 ",paraId:0,tocIndex:3},{value:"onLoad",paraId:0,tocIndex:3},{value:"\u65B9\u6CD5",paraId:0,tocIndex:3},{value:"\u521D\u59CB\u5316\u5B8C\u6210\u56DE\u8C03 onLoad",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"false",paraId:0,tocIndex:3},{value:"graphData",paraId:0,tocIndex:3},{value:"GraphData",paraId:0,tocIndex:3},{value:"\u753B\u5E03\u6570\u636E",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"false",paraId:0,tocIndex:3},{value:"meta",paraId:0,tocIndex:3},{value:"Record<string, any>",paraId:0,tocIndex:3},{value:"\u7EC4\u4EF6\u5143\u4FE1\u606F",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"false",paraId:0,tocIndex:3},{value:"menuConfig",paraId:0,tocIndex:3},{value:"ContextMenuConfig",paraId:0,tocIndex:3},{value:"\u53F3\u952E\u83DC\u5355\u914D\u7F6E, \u53C2\u8003 demo",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"false",paraId:0,tocIndex:3},{value:"children",paraId:0,tocIndex:3},{value:"React.NODE | React.Node[]",paraId:0,tocIndex:3},{value:"\u57FA\u4E8E WorkspacePanel \u5F00\u53D1\u81EA\u5B9A\u4E49\u7EC4\u4EF6",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"false",paraId:0,tocIndex:3},{value:"position",paraId:0,tocIndex:3},{value:"IPosition",paraId:0,tocIndex:3},{value:"\u901A\u8FC7 top/bottom/left/right \u6765\u5B9A\u4F4D\u753B\u5E03",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"false",paraId:0,tocIndex:3},{value:"ready",paraId:0,tocIndex:3},{value:"boolean",paraId:0,tocIndex:3},{value:"\u662F\u5426\u5F00\u542F\u67E5\u770B\u6A21\u5F0F",paraId:0,tocIndex:3},{value:"false",paraId:0,tocIndex:3},{value:"false",paraId:0,tocIndex:3},{value:"miniMap",paraId:0,tocIndex:3},{value:"boolean",paraId:0,tocIndex:3},{value:"\u662F\u5426\u663E\u793A\u5C0F\u5730\u56FE",paraId:0,tocIndex:3},{value:"true",paraId:0,tocIndex:3},{value:"false",paraId:0,tocIndex:3},{value:"\u5728 onLoad \u56DE\u8C03\u65B9\u6CD5\u4E2D, \u4F1A\u8FD4\u56DE XFlow \u5B9E\u4F8B, \u6211\u4EEC\u79F0\u4E4B\u4E3A app\u3002\u901A\u8FC7 app \u5B9E\u4F8B, \u53EF\u4EE5\u83B7\u53D6\u753B\u5E03\u5B9E\u4F8B\u3001\u83B7\u53D6\u753B\u5E03\u914D\u7F6E\u9879\u3001\u6267\u884C\u5404\u79CD\u547D\u4EE4\u64CD\u4F5C\u7B49\u3002",paraId:1,tocIndex:4},{value:"\u66F4\u591A\u64CD\u4F5C\u8BF7\u67E5\u770B XFlow / X6 \u5B98\u7F51",paraId:2,tocIndex:4},{value:`/** \u83B7\u53D6\u753B\u5E03\u5B9E\u4F8B */
const graphInstance = await app.getGraphInstance();
/** \u83B7\u53D6\u753B\u5E03\u914D\u7F6E\u9879 */
const graphConfig = await app.getGraphConfig();

/** \u6267\u884CXFlow\u5185\u7F6E\u7684\u5404\u79CD\u547D\u4EE4\u64CD\u4F5C */
app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {
  graphData,
} as NsGraphCmd.GraphRender.IArgs);
`,paraId:3,tocIndex:4},{value:`interface GraphData {
  /** \u8282\u70B9 */
  nodes: INodeConfig[];
  /** \u8FB9 */
  edges: IEdgeConfig[];
}

/** \u8282\u70B9\u4FE1\u606F */
interface INodeConfig {
  /** \u8282\u70B9\u7684\u552F\u4E00\u6807\u8BC6 */
  id: number | string;
    /** \u7C7B\u578B  'way-point'  \u8282\u70B9 | 'stop-point'  \u505C\u9760\u70B9 | 'marked-point' \u6807\u8BB0\u70B9 | 'charging-station' \u5145\u7535\u7AD9 | 'work-station' \u4F5C\u4E1A\u7AD9 | 'square-area' \u65B9\u533A\u57DF | 'circle-area' \u5706\u533A\u57DF | 'virtual-wall' \u865A\u62DF\u5899*/
  type?: 'way-point' | 'stop-point' | 'marked-point' | 'charging-station' | 'work-station' | 'square-area' | 'circle-area' | 'virtual-wall';
  /** \u8282\u70B9React\u7EC4\u4EF6\u7684key */
  renderKey?: string;
  /** \u8282\u70B9\u5728\u753B\u5E03\u7684\u4F4D\u7F6E: x */
  x?: number;
  /** \u8282\u70B9\u5728\u753B\u5E03\u7684\u4F4D\u7F6E: y */
  y?: number;
  /** \u89D2\u5EA6 */
  angle?: number;
  /** \u8282\u70B9\u7684\u6E32\u67D3\u5BBD\u5EA6 */
  width?: number;
  /** \u8282\u70B9\u7684\u6E32\u67D3\u9AD8\u5EA6 */
  height?: number;
  /** \u586B\u5145\u989C\u8272 */
  fill?: string;
  /** \u8FB9\u6846\u989C\u8272 */
  stroke?: string;
  /** \u8282\u70B9\u540D */
  label?: string;
  /** \u5B57\u4F53\u989C\u8272 */
  fontFill?: string;
  /** \u5B57\u4F53\u5927\u5C0F */
  fontSize?: string;
  /** \u989C\u8272 */
  stroke?: string;
  /** \u7528\u6237\u81EA\u5B9A\u4E49\u5B57\u6BB5 */
  [key: string]: any;
}

/** \u8FB9\u4FE1\u606F */
interface IEdgeConfig {
  /** \u8FB9\u7684\u552F\u4E00\u6807\u8BC6 */
  id: number | string;
  /** \u8FB9\u4E0A\u6E32\u67D3React\u7EC4\u4EF6\u7684key \u540C\u8FB9\u7C7B\u578B */
  name?: string;
  /** \u8FB9\u7684\u4E0A\u6E38\u8282\u70B9id \u6216 \u5750\u6807 */
  source: string | { x: number; y: number };
  /** \u8FB9\u7684\u4E0B\u6E38\u8282\u70B9id \u6216 \u5750\u6807*/
  target: string | { x: number; y: number };
  /** \u7C7B\u578B */
  type: 'line' | 'SecondOrderBezierCurve' | 'ThirdOrderBezierCurve' | 'rounded' | "ArcLine";
  /** \u8FB9\u7684\u63A7\u5236\u70B9\u6216\u8005\u8DEF\u5F84\u70B9 */
  vertices?: { x: number; y: number }[];
  /** \u5706\u89D2\u66F2\u7EBF\u7684\u5012\u89D2\u534A\u5F84 */
  radius? number;
  /** \u8FB9\u4E0Alabel */
  label?: string;
  /** \u8FB9\u7684\u65B9\u5411 \u9ED8\u8BA4 both */
  arrow?: 'source' | 'target' | 'both';
  /** \u8FB9\u7684\u7EBF\u5F62 */
  style: 'solid | dash';
  /** \u586B\u5145\u989C\u8272 */
  fill?: string;
  /** \u8FB9\u6846\u989C\u8272 */
  stroke?: string;
  /** \u5B57\u4F53\u989C\u8272 */
  fontFill?: string;
  /** \u5B57\u4F53\u5927\u5C0F */
  fontSize?: string;
  /** \u7528\u6237\u81EA\u5B9A\u4E49\u5B57\u6BB5 */
  [key: string]: any;
}
`,paraId:4,tocIndex:5}]},31858:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(540);const t=[{value:"\u8D1F\u8D23\u63A7\u5236\u4EA7\u54C1\u7684\u673A\u5668\u4EBA\u8FD0\u52A8\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:2},{value:"position",paraId:1,tocIndex:2},{value:"IPosition[]",paraId:1,tocIndex:2},{value:"\u5B9A\u4F4D ControlPanel",paraId:1,tocIndex:2},{value:"{top: 0, bottom: 0, right: 0, width: 280,}",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"keyPress",paraId:1,tocIndex:2},{value:"('action' | 'direction')[]",paraId:1,tocIndex:2},{value:"\u952E\u76D8\u4E8B\u4EF6\u7C7B\u578B, \u52A8\u4F5C\u548C\u65B9\u5411",paraId:1,tocIndex:2},{value:"['action', 'direction']",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:"(keys: string[], app: IApplication) => void | Promise<void>",paraId:1,tocIndex:2},{value:"\u70B9\u51FB\u6216\u8005\u6309\u952E\u6309\u4E0B\u65F6\u56DE\u8C03\u4E8B\u4EF6",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"onChangeEnd",paraId:1,tocIndex:2},{value:"(type: 'action' | 'direction') => void | Promise<void>",paraId:1,tocIndex:2},{value:"\u67D0\u4E2A\u7C7B\u578B\u4E8B\u4EF6\u5B8C\u5168\u677E\u5F00\u6216\u8005\u6309\u952E\u653E\u5F00\u65F6\u56DE\u8C03\u4E8B\u4EF6",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"pollingInterval",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\u8F6E\u8BE2\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2,\u4F1A\u5B9A\u65F6\u89E6\u53D1 ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u6267\u884C",paraId:1,tocIndex:2},{value:"100ms",paraId:1,tocIndex:2},{value:"true",paraId:1,tocIndex:2},{value:"title",paraId:1,tocIndex:2},{value:"ReactNode",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u6807\u9898",paraId:1,tocIndex:2},{value:"\u952E\u76D8\u63A7\u5236",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"header",paraId:1,tocIndex:2},{value:"ReactNode",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u5934\u90E8",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"children",paraId:1,tocIndex:2},{value:"React.ReactChild",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u63A7\u5236\u533A\u57DF\uFF0C\u8BBE\u7F6E\u540E ",paraId:1,tocIndex:2},{value:"keyPress, onChange, pollingInterval, title",paraId:1,tocIndex:2},{value:"\u5931\u6548",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"footer",paraId:1,tocIndex:2},{value:"ReactNode",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u5E95\u90E8",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"disabled",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"\u662F\u5426\u7981\u7528",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"\u53C2\u8003 WorkspacePanel ",paraId:2,tocIndex:3},{value:"\u4F7F\u7528 app",paraId:3,tocIndex:3},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:4},{value:"top",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u4E0A\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:4,tocIndex:4},{value:"bottom",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u4E0B\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:4,tocIndex:4},{value:"right",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u53F3\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:4,tocIndex:4},{value:"left",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u5DE6\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:4,tocIndex:4},{value:"width",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u7EC4\u4EF6\u5BBD\u5EA6",paraId:4,tocIndex:4},{value:"height",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u753B\u5E03\u9AD8\u5EA6",paraId:4,tocIndex:4}]},46276:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(425);const t=[{value:"\u5185\u7F6E\u8868\u5355\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u8282\u70B9\u3001\u8FB9\u3001\u7FA4\u7EC4\u7B49\u6837\u5F0F\u548C\u6570\u636E\u7ED1\u5B9A\uFF0C\u5305\u62EC\u5E38\u7528\u7684\u6807\u7B7E\u3001\u4F4D\u7F6E\u3001\u5C3A\u5BF8\u3001\u5B57\u53F7\u7B49\uFF0C\u53EF\u901A\u8FC7 FormPanel \u5FEB\u901F\u81EA\u5B9A\u4E49\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1},{value:"\u7C7B\u578B",paraId:1},{value:"\u63CF\u8FF0",paraId:1},{value:"\u9ED8\u8BA4\u503C",paraId:1},{value:"\u662F\u5426\u5FC5\u586B",paraId:1},{value:"show",paraId:1},{value:"boolean",paraId:1},{value:"\u662F\u5426\u5C55\u793A\u8282\u70B9\u9762\u677F\u3001\u5E38\u7528\u4E8E\u9605\u8BFB\u6001",paraId:1},{value:"true",paraId:1},{value:"false",paraId:1},{value:"position",paraId:1},{value:"IPosition",paraId:1},{value:"\u8868\u5355\u4F4D\u7F6E\u914D\u7F6E",paraId:1},{value:"{ width: 240, top: 0, bottom: 0, right: 0 }",paraId:1},{value:"false",paraId:1},{value:"controlMapService",paraId:1},{value:"ControlMapService",paraId:1},{value:"\u6CE8\u518C\u81EA\u5B9A\u4E49 ",paraId:1},{value:"Form",paraId:1},{value:"\u7EC4\u4EF6\uFF0C\u53C2\u8003 \u4EE3\u7801\u6F14\u793A",paraId:1},{value:"-",paraId:1},{value:"false",paraId:1},{value:"formSchemaService",paraId:1},{value:"FormSchemaService",paraId:1},{value:"\u63A7\u5236\u9762\u677F\u5207\u6362\u903B\u8F91\uFF0C\u53C2\u8003 \u4EE3\u7801\u6F14\u793A",paraId:1},{value:"-",paraId:1},{value:"false",paraId:1}]},99310:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(32839);const t=[{value:"\u5185\u7F6E\u5E03\u5C40",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:2},{value:"position",paraId:1,tocIndex:2},{value:"IPosition[]",paraId:1,tocIndex:2},{value:"\u5B9A\u4F4D ControlPanel",paraId:1,tocIndex:2},{value:"{top: 0, bottom: 0, right: 0, width: 280,}",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"title",paraId:1,tocIndex:2},{value:"ReactNode",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u6807\u9898",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"header",paraId:1,tocIndex:2},{value:"ReactNode",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u5934\u90E8",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"children",paraId:1,tocIndex:2},{value:"React.ReactChild",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u4E3B\u4F53",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"footer",paraId:1,tocIndex:2},{value:"ReactNode",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u5E95\u90E8",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"\u53C2\u8003 WorkspacePanel ",paraId:2,tocIndex:3},{value:"\u4F7F\u7528 app",paraId:3,tocIndex:3},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:4},{value:"top",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u4E0A\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:4,tocIndex:4},{value:"bottom",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u4E0B\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:4,tocIndex:4},{value:"right",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u53F3\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:4,tocIndex:4},{value:"left",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u5DE6\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:4,tocIndex:4},{value:"width",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u7EC4\u4EF6\u5BBD\u5EA6",paraId:4,tocIndex:4},{value:"height",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u753B\u5E03\u9AD8\u5EA6",paraId:4,tocIndex:4}]},63881:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(75599);const t=[{value:"NodePanel \u9664\u4E86\u5185\u7F6E\u7684\u5E38\u7528\u8282\u70B9\u5916\uFF0C\u63D0\u4F9B\u4E86\u4FBF\u6377\u7684\u81EA\u5B9A\u4E49\u80FD\u529B\uFF0C\u53EF\u5FEB\u901F\u5B9A\u5236\u4E1A\u52A1\u8282\u70B9\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:2},{value:"show",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u8282\u70B9\u9762\u677F\u3001\u5E38\u7528\u4E8E\u9605\u8BFB\u6001",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"true",paraId:1,tocIndex:2},{value:"showHeader",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A header",paraId:1,tocIndex:2},{value:"true",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"showOfficial",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A \u901A\u7528\u9762\u677F",paraId:1,tocIndex:2},{value:"true",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"defaultActiveKey",paraId:1,tocIndex:2},{value:"string[]",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u5C55\u5F00\u7684\u9762\u677F\uFF0Ccustom: \u81EA\u5B9A\u4E49\u8282\u70B9\uFF1Bofficial: \u5185\u7F6E\u8282\u70B9",paraId:1,tocIndex:2},{value:"['official']",paraId:1,tocIndex:2},{value:"['custom']",paraId:1,tocIndex:2},{value:"registerNode",paraId:1,tocIndex:2},{value:"RegisterNode | RegisterNode[]",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u8282\u70B9",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"position",paraId:1,tocIndex:2},{value:"IPosition[]",paraId:1,tocIndex:2},{value:"\u5B9A\u4F4D NodePanel",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"title",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u8282\u5206\u7EC4\u6807\u9898",paraId:2,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u8282\u70B9",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"key",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u8282\u5206\u7EC4 KEY",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"true",paraId:2,tocIndex:3},{value:"hidden",paraId:2,tocIndex:3},{value:"boolean",paraId:2,tocIndex:3},{value:"\u9690\u85CF\u8282\u70B9\u5206\u7EC4\uFF08\u65B9\u4FBF\u7528\u4E8E\u6CE8\u518C\u8282\u70B9\uFF09",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"nodes",paraId:2,tocIndex:3},{value:"CustomNode[]",paraId:2,tocIndex:3},{value:"\u8282\u70B9\u6570\u7EC4",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"true",paraId:2,tocIndex:3},{value:"\u5C5E\u6027\u540D",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"\u63CF\u8FF0",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:4},{value:"\u662F\u5426\u5FC5\u586B",paraId:3,tocIndex:4},{value:"name",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"\u8282\u70B9\u540D\u79F0\uFF0C\u552F\u4E00",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"component",paraId:3,tocIndex:4},{value:"React.Component",paraId:3,tocIndex:4},{value:"\u8282\u70B9 React \u7EC4\u4EF6",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"popover",paraId:3,tocIndex:4},{value:"React.Component",paraId:3,tocIndex:4},{value:"popover \u7EC4\u4EF6",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"label",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u6807\u7B7E",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"width",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u5BBD\u5EA6",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"height",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u9AD8\u5EA6",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"ports",paraId:3,tocIndex:4},{value:"NsGraph.INodeConfig['ports']",paraId:3,tocIndex:4},{value:"\u8FDE\u63A5\u951A\u70B9\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u4E0A\u4E0B\u5DE6\u53F3\u56DB\u4E2A",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"resizing",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"\u7F29\u653E\u8282\u70B9\uFF0C\u9ED8\u8BA4\u542F\u7528",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"rotating",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"\u65CB\u8F6C\u8282\u70B9\uFF0C\u9ED8\u8BA4\u542F\u7528",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"interacting",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"\u79FB\u52A8\u8282\u70B9, \u9ED8\u8BA4\u542F\u7528",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"preserveAspectRatio",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"\u7F29\u653E\u8282\u70B9\u65F6\u662F\u5426\u7B49\u6BD4\u4F8B",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:5},{value:"\u7C7B\u578B",paraId:4,tocIndex:5},{value:"\u63CF\u8FF0",paraId:4,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:5},{value:"range",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"\u663E\u793A\u8303\u56F4\uFF0C \u4E3A 0 \u65F6\u4E0D\u663E\u793A",paraId:4,tocIndex:5},{value:"360",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"direction",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"\u662F\u5426\u663E\u793A\u65B9\u5411",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"\u5C5E\u6027\u540D",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u662F\u5426\u5FC5\u586B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"top",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u4E0A\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:5,tocIndex:6},{value:"bottom",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u4E0B\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:5,tocIndex:6},{value:"right",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u53F3\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:5,tocIndex:6},{value:"left",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u5DE6\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:5,tocIndex:6},{value:"width",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u7EC4\u4EF6\u5BBD\u5EA6",paraId:5,tocIndex:6},{value:"height",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u7EC4\u4EF6\u9AD8\u5EA6",paraId:5,tocIndex:6}]},58212:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(47901);const t=[{value:"\u5730\u56FE\u539F\u70B9",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:2},{value:"id",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"\u552F\u4E00\u6807\u8BC6,\u5355\u4E2A\u65F6\u81EA\u52A8\u751F\u6210\uFF0C\u591A\u4E2A\u65F6\u5FC5\u586B",paraId:1,tocIndex:2},{value:"uuid",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"x",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"x \u5750\u6807",paraId:1,tocIndex:2},{value:"0",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"y",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"y \u5750\u6807",paraId:1,tocIndex:2},{value:"0",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"width",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\u539F\u70B9\u5BBD\u5EA6",paraId:1,tocIndex:2},{value:"40",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"height",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\u539F\u70B9\u9AD8\u5EA6",paraId:1,tocIndex:2},{value:"40",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:"(cell) => void",paraId:1,tocIndex:2},{value:"\u8282\u70B9\u4FEE\u6539\u540E\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2}]},98050:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(8618);const t=[{value:"\u5C5E\u6027\u540D",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u63CF\u8FF0",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B",paraId:0,tocIndex:2},{value:"id",paraId:0,tocIndex:2},{value:"string",paraId:0,tocIndex:2},{value:"\u552F\u4E00\u6807\u8BC6,\u5355\u4E2A\u65F6\u81EA\u52A8\u751F\u6210\uFF0C\u591A\u4E2A\u65F6\u5FC5\u586B",paraId:0,tocIndex:2},{value:"uuid",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"x",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"x \u5750\u6807",paraId:0,tocIndex:2},{value:"0",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"y",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"y \u5750\u6807",paraId:0,tocIndex:2},{value:"0",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"angle",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"\u673A\u5668\u4EBA\u89D2\u5EA6",paraId:0,tocIndex:2},{value:"0",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"width",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"\u673A\u5668\u4EBA\u5BBD\u5EA6",paraId:0,tocIndex:2},{value:"40",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"height",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"\u673A\u5668\u4EBA\u9AD8\u5EA6",paraId:0,tocIndex:2},{value:"40",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"range",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"\u663E\u793A\u8303\u56F4\uFF0C \u4E3A 0 \u65F6\u4E0D\u663E\u793A",paraId:0,tocIndex:2},{value:"360",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"direction",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"\u662F\u5426\u663E\u793A\u65B9\u5411",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"resizing",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"\u7F29\u653E\u8282\u70B9\uFF0C\u9ED8\u8BA4\u542F\u7528",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"rotating",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"\u65CB\u8F6C\u8282\u70B9\uFF0C\u9ED8\u8BA4\u542F\u7528",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"interacting",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"\u79FB\u52A8\u8282\u70B9, \u9ED8\u8BA4\u542F\u7528",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"preserveAspectRatio",paraId:0,tocIndex:2},{value:"boolean",paraId:0,tocIndex:2},{value:"\u7F29\u653E\u8282\u70B9\u65F6\u662F\u5426\u7B49\u6BD4\u4F8B",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2},{value:"onChange",paraId:0,tocIndex:2},{value:"(cell) => void",paraId:0,tocIndex:2},{value:"\u8282\u70B9\u4FEE\u6539\u540E\u56DE\u8C03\u51FD\u6570",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"false",paraId:0,tocIndex:2}]},30203:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(76239);const t=[{value:"\u5DE5\u5177\u680F\u7EC4\u4EF6\u8D1F\u8D23\u6E32\u67D3\u6309\u94AE\u63D0\u4F9B\u64CD\u4F5C\u5165\u53E3\uFF0C\u5728\u5DE5\u5177\u680F\u4E2D\u53EF\u4EE5\u6267\u884C\u547D\u4EE4/\u64CD\u4F5C UI \u7EC4\u4EF6/\u6253\u5F00\u94FE\u63A5\u7684\u65B9\u5F0F\u5B9E\u73B0\u5404\u79CD\u4EA7\u54C1\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:2},{value:"position",paraId:1,tocIndex:2},{value:"IPosition[]",paraId:1,tocIndex:2},{value:"\u5B9A\u4F4D Toolbar",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"saveGraph",paraId:1,tocIndex:2},{value:"(graphData: GraphData, meta: Record<string, any>) => void",paraId:1,tocIndex:2},{value:"\u4FDD\u5B58\u4E8B\u4EF6 ",paraId:1,tocIndex:2},{value:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u6269\u5C55\u540E\u5931\u6548",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"extra",paraId:1,tocIndex:2},{value:"IToolbarItemOptions[]",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u6269\u5C55",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"ready",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"\u662F\u5426\u5F00\u542F\u67E5\u770B\u6A21\u5F0F \u81EA\u52A8\u4ECE\u5168\u5C40\u83B7\u53D6",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"\u4FDD\u5B58\u65B9\u6CD5\u53EF\u901A\u8FC7\u4EE5\u4E0B\u6307\u4EE4\u6267\u884C",paraId:2,tocIndex:2},{value:`commandService.executeCommand('SAVE_GRAPH_DATA', {
  saveGraphDataService: saveGraph,
});
`,paraId:3,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"top",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u4E0A\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:4,tocIndex:3},{value:"bottom",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u4E0B\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:4,tocIndex:3},{value:"right",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u53F3\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:4,tocIndex:3},{value:"left",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u5DE6\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:4,tocIndex:3},{value:"width",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u7EC4\u4EF6\u5BBD\u5EA6",paraId:4,tocIndex:3},{value:"height",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u753B\u5E03\u9AD8\u5EA6",paraId:4,tocIndex:3},{value:"\u5C5E\u6027\u540D",paraId:5,tocIndex:4},{value:"\u7C7B\u578B",paraId:5,tocIndex:4},{value:"\u63CF\u8FF0",paraId:5,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:4},{value:"\u662F\u5426\u5FC5\u586B",paraId:5,tocIndex:4},{value:"id",paraId:5,tocIndex:4},{value:"string",paraId:5,tocIndex:4},{value:"\u552F\u4E00\u6807\u8BC6",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"true",paraId:5,tocIndex:4},{value:"isVisible",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"\u662F\u5426\u53EF\u89C1",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"isEnabled",paraId:5,tocIndex:4},{value:"boolean[]",paraId:5,tocIndex:4},{value:"\u662F\u5426\u53EF\u7528",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"text",paraId:5,tocIndex:4},{value:"string",paraId:5,tocIndex:4},{value:"\u5C55\u793A\u6587\u5B57",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"tooltip",paraId:5,tocIndex:4},{value:"string",paraId:5,tocIndex:4},{value:"\u60AC\u6D6E\u63D0\u793A\u6587\u5B57",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"icon",paraId:5,tocIndex:4},{value:"ReactElement",paraId:5,tocIndex:4},{value:"\u5C55\u793A\u56FE\u6807",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"onClick",paraId:5,tocIndex:4},{value:"(args: IClickArgs) => void",paraId:5,tocIndex:4},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:6,tocIndex:5},{value:"\u7C7B\u578B",paraId:6,tocIndex:5},{value:"\u63CF\u8FF0",paraId:6,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B",paraId:6,tocIndex:5},{value:"toolbarItem",paraId:6,tocIndex:5},{value:"IToolbarItemOptions",paraId:6,tocIndex:5},{value:"\u63CF\u8FF0 toolbar \u7684\u4E00\u4E2A\u6309\u94AE",paraId:6,tocIndex:5},{value:"-",paraId:6,tocIndex:5},{value:"-",paraId:6,tocIndex:5},{value:"commandService",paraId:6,tocIndex:5},{value:"IGraphCommandService",paraId:6,tocIndex:5},{value:"\u53EF\u4EE5\u6267\u884C ICommnadService \u6240\u6709\u547D\u4EE4",paraId:6,tocIndex:5},{value:"-",paraId:6,tocIndex:5},{value:"-",paraId:6,tocIndex:5},{value:"modelService",paraId:6,tocIndex:5},{value:"IModelService",paraId:6,tocIndex:5},{value:"\u53EF\u4EE5\u83B7\u53D6\u5E94\u7528\u7684\u72B6\u6001",paraId:6,tocIndex:5},{value:"-",paraId:6,tocIndex:5},{value:"-",paraId:6,tocIndex:5},{value:"",paraId:7,tocIndex:5}]},95928:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(25349);const t=[{value:"TreeNodePanel \u9664\u4E86\u5185\u7F6E\u7684\u5E38\u7528\u8282\u70B9\u5916\uFF0C\u63D0\u4F9B\u4E86\u4FBF\u6377\u7684\u81EA\u5B9A\u4E49\u80FD\u529B\uFF0C\u53EF\u5FEB\u901F\u5B9A\u5236\u4E1A\u52A1\u8282\u70B9\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:2},{value:"meta",paraId:1,tocIndex:2},{value:"{ shapeConfig }",paraId:1,tocIndex:2},{value:"\u8282\u70B9\u663E\u793A\u914D\u7F6E\uFF0C\u67E5\u770B demo \u4E2D\u7684\u914D\u7F6E,\u5DF2\u5185\u7F6E",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"top",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u4E0A\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:2,tocIndex:3},{value:"bottom",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u4E0B\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:2,tocIndex:3},{value:"right",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u53F3\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:2,tocIndex:3},{value:"left",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u753B\u5E03\u8DDD\u79BB\u5DE5\u4F5C\u53F0\u5DE6\u8FB9\u7F18\u7684\u8DDD\u79BB",paraId:2,tocIndex:3},{value:"width",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u5BBD\u5EA6",paraId:2,tocIndex:3},{value:"height",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u9AD8\u5EA6",paraId:2,tocIndex:3}]},75775:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(55685);const t=[{value:"app \u7684 ",paraId:0,tocIndex:1},{value:"\u7C7B\u578B\u5B9A\u4E49",paraId:0,tocIndex:1},{value:`/** \u5982\u4F55\u5F15\u7528\uFF1F */
/** \u7C7B\u578B\u8BF4\u660E\uFF1A\u56FE\u7F16\u8F91\u5E94\u7528 */
export declare class IApplication {
  /** IGraphCommandService\uFF1A\u6267\u884C\u547D\u4EE4\u4FEE\u6539\u5E94\u7528\u72B6\u6001 */
  readonly commandService: IGraphCommandService
  /** IModelService\uFF1A\u83B7\u53D6\u5E94\u7528\u72B6\u6001 */
  readonly modelService: IModelService
  /** \u83B7\u53D6\u753B\u5E03\u5B9E\u4F8B */
  public getGraphInstance(): Promise<X6Graph>
  /** \u83B7\u53D6\u753B\u5E03\u914D\u7F6E\u9879 */
  public getGraphConfig(): Promise<IGraphConfig>
  /** \u66B4\u9732\u547D\u4EE4\u7684\u6267\u884C\u63A5\u53E3 */
  public executeCommand<Args, Result>(
    command: string,
    args: Args,
    hooks?: IRuntimeHook<Args, Result>,
  ): Promise<ICommandHandler<Args, Result> | undefined>
  /** \u66B4\u9732\u547D\u4EE4\u7684\u6279\u91CF\u6267\u884C\u63A5\u53E3 */
  public executeCommandPipeline(cmdOptions: IGraphPipelineCommand[]): Promise<ICommandHandler>
  >
}
`,paraId:1,tocIndex:1},{value:"\u64CD\u4F5C\u753B\u5E03\u7684 UI \u7EC4\u4EF6",paraId:2,tocIndex:2},{value:"\u663E\u793A\u753B\u5E03\u72B6\u6001\u7684 UI \u7EC4\u4EF6",paraId:2,tocIndex:2},{value:"\u4EE5\u4E0A\u4E24\u79CD\u80FD\u529B\u7684\u7EC4\u5408",paraId:2,tocIndex:2},{value:"\u53EF\u4EE5\u83B7\u53D6\u5E94\u7528\u7684\u72B6\u6001",paraId:3,tocIndex:3},{value:"\u4F7F\u7528 modelService \u6CE8\u518C modelService",paraId:4,tocIndex:3},{value:"\u53EF\u4EE5\u65B9\u4FBF\u7684\u6267\u884C xflow \u7684\u547D\u4EE4, onClick \u4E2D\u53EF\u4EE5\u4F7F\u7528",paraId:5,tocIndex:4},{value:"ICommnadService",paraId:5,tocIndex:4},{value:" \u6267\u884C",paraId:5,tocIndex:4},{value:"\u6240\u6709\u547D\u4EE4",paraId:5,tocIndex:4},{value:"\u76F4\u63A5\u7ED1\u5B9A\u4E8B\u4EF6",paraId:6,tocIndex:5},{value:"\u76F4\u63A5\u4F7F\u7528 X6Graph \u7684 api \u67E5\u8BE2\u753B\u5E03\u7684\u72B6\u6001",paraId:6,tocIndex:5}]},49544:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(63);const t=[]},2153:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(48371);const t=[]},51446:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(68537);const t=[]},27228:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});var i=n(58748);const t=[{value:"yarn add @infore/editor",paraId:0,tocIndex:0},{value:"\u5DE6\u4FA7\u4E3A\u8282\u70B9\u62D6\u62FD\u9762\u677F",paraId:1,tocIndex:1},{value:"\u53F3\u4FA7\u4E3A\u8282\u70B9/\u8FB9\u7684\u8BE6\u60C5\u9762\u677F",paraId:1,tocIndex:1},{value:"\u5934\u90E8\u4E3A\u5DE5\u5177\u680F",paraId:1,tocIndex:1},{value:"\u9009\u4E2D\u8FDE\u7EBF\u540E\u70B9\u51FB\u7EBF\u4E0A\u7684\u4EFB\u610F\u70B9\u5373\u53EF\u6DFB\u52A0",paraId:2,tocIndex:2},{value:"\u53CC\u51FB\u63A7\u5236\u70B9",paraId:3,tocIndex:3},{value:"\u5FEB\u6377\u952E",paraId:4,tocIndex:4},{value:"\u63CF\u8FF0",paraId:4,tocIndex:4},{value:"\u6309\u952E",paraId:4,tocIndex:4},{value:"\u653E\u5927",paraId:4,tocIndex:4},{value:"\u653E\u5927\u753B\u5E03",paraId:4,tocIndex:4},{value:"\u2318 / Ctrl + +",paraId:4,tocIndex:4},{value:"\u7F29\u5C0F",paraId:4,tocIndex:4},{value:"\u7F29\u5C0F\u753B\u5E03",paraId:4,tocIndex:4},{value:"\u2318 / Ctrl + -",paraId:4,tocIndex:4},{value:"\u7F29\u653E\u5230 1:1",paraId:4,tocIndex:4},{value:"\u7F29\u653E\u753B\u5E03",paraId:4,tocIndex:4},{value:"\u2318 / Ctrl + 1",paraId:4,tocIndex:4},{value:"\u9002\u5E94\u5C4F\u5E55",paraId:4,tocIndex:4},{value:"\u7F29\u653E\u753B\u5E03\u5230\u9002\u5E94\u5C4F\u5E55",paraId:4,tocIndex:4},{value:"\u2318 / Ctrl + 2",paraId:4,tocIndex:4},{value:"\u5168\u5C4F",paraId:4,tocIndex:4},{value:"\u7F16\u8F91\u5668\u5168\u5C4F",paraId:4,tocIndex:4},{value:"\u2318 / Ctrl + F11",paraId:4,tocIndex:4},{value:"\u9000\u51FA\u5168\u5C4F",paraId:4,tocIndex:4},{value:"\u7F16\u8F91\u5668\u9000\u51FA\u5168\u5C4F",paraId:4,tocIndex:4},{value:"ESC",paraId:4,tocIndex:4},{value:"\u64A4\u9500",paraId:4,tocIndex:4},{value:"\u64A4\u9500\u6DFB\u52A0\u5220\u9664",paraId:4,tocIndex:4},{value:"\u2318 / Ctrl + Z",paraId:4,tocIndex:4},{value:"\u91CD\u505A",paraId:4,tocIndex:4},{value:"\u91CD\u505A\u64A4\u9500",paraId:4,tocIndex:4},{value:"\u2318 / Ctrl + Shift + Z",paraId:4,tocIndex:4},{value:"\u590D\u5236",paraId:4,tocIndex:4},{value:"\u590D\u5236\u8282\u70B9",paraId:4,tocIndex:4},{value:"\u2318 / Ctrl + C",paraId:4,tocIndex:4},{value:"\u7C98\u8D34",paraId:4,tocIndex:4},{value:"\u7C98\u8D34\u8282\u70B9",paraId:4,tocIndex:4},{value:"\u2318 / Ctrl + V",paraId:4,tocIndex:4}]},85182:function(a,e){e.Z=`export const graphData = {
  nodes: [
    { id: '1', type: 'way-point', vertices: [], x: 2040, y: 250, index: '1' },
    { id: '2', type: 'marked-point', vertices: [], x: 2040, y: 740, index: '1' },
    { id: '3', type: 'charging-station', vertices: [], x: 2330, y: 300, index: '1' },
    { id: '4', type: 'way-point', vertices: [], x: 2230, y: 250, index: '2' },
    { id: '5', type: 'way-point', vertices: [], x: 2040, y: 480, index: '3' },
    { id: '6', type: 'work-station', vertices: [], x: 2240, y: 720, index: '1' },
    { id: '7', type: 'stop-point', vertices: [], x: 2250, y: 440, index: '1' },
    { id: '13', type: 'square-area', vertices: [], x: 1780, y: 665, index: '1' },
    { id: '14', type: 'circle-area', vertices: [], x: 2225, y: 895, index: '1' },
    { id: '15', type: 'virtual-wall', vertices: [], x: 2030, y: 615, index: '1' },
    { id: '100', type: 'way-point', vertices: [], x: -10, y: 90, index: '1' },
    { id: '101', type: 'marked-point', vertices: [], x: 90, y: -10, index: '1' },
  ],
  edges: [
    { id: '8', label: '\u8DEF\u5F84-1', type: 'line', source: '1', target: '4', arrow: 'both', index: 1 },
    {
      id: '9',
      label: '\u8DEF\u5F84-2',
      type: 'SecondOrderBezierCurve',
      source: '4',
      target: '5',
      vertices: [{ x: 2190, y: 490 }],
      arrow: 'both',
      index: 2,
    },
    {
      id: '10',
      label: '\u8DEF\u5F84-3',
      type: 'ThirdOrderBezierCurve',
      source: '5',
      target: '6',
      vertices: [
        { x: 2050, y: 580 },
        { x: 2250, y: 530 },
      ],
      arrow: 'both',
      index: 3,
    },
    { id: '11', label: '\u8DEF\u5F84-4', type: 'line', source: '6', target: '7', arrow: 'both', index: 4 },
    {
      id: '12',
      label: '\u8DEF\u5F84-5',
      type: 'SecondOrderBezierCurve',
      source: '7',
      target: '3',
      vertices: [{ x: 2260, y: 310 }],
      arrow: 'both',
      index: 5,
    },
    {
      id: '16',
      label: '\u81EA\u5B9A\u4E49\u865A\u62DF\u5899-1',
      type: 'custom-wall',
      source: { x: 2145, y: 795 },
      target: { x: 2330, y: 900 },
      vertices: [{ x: 2280, y: 795 }],
      arrow: 'none',
      index: 1,
    },
    {
      id: '17',
      label: '\u81EA\u5B9A\u4E49\u533A\u57DF-1',
      type: 'custom-area',
      source: { x: 2105, y: 665 },
      target: { x: 2105, y: 665 },
      vertices: [
        { x: 2210, y: 760 },
        { x: 2105, y: 760 },
      ],
      arrow: 'none',
      index: 1,
    },
    {
      id: '102',
      label: '\u8DEF\u5F84-5',
      type: 'rounded',
      source: '100',
      target: '101',
      vertices: [{ x: 0, y: 0 }],
      arrow: 'both',
      index: 5,
    },
  ],
};
export const meta = {
  auto_increment_id: 17,
  'way-point_max_id': 3,
  'marked-point_max_id': 1,
  'charging-station_max_id': 1,
  'work-station_max_id': 1,
  'stop-point_max_id': 1,
  edge_max_id: 5,
  'square-area_max_id': 1,
  'circle-area_max_id': 1,
  'virtual-wall_max_id': 1,
  'custom-wall_max_id': 1,
  'custom-area_max_id': 1,
};
`},40682:function(a,e){e.Z=`import { Background, FormPanel, GraphEditor, NodePanel, Toolbar } from '@infore/editor';

import { defaultControlMapService } from '../form-panel/control-map-service';
import { defaultFormSchemaService } from '../form-panel/form-schema-service';
import { graphData as data, meta as graphMeta } from './data';

export default () => {
  return (
    <div style={{ height: 800 }}>
      <GraphEditor meta={graphMeta} position={{ top: 40, left: 240, right: 240 }}>
        <Background
          url="https://minio.dev.inrobot.cloud/map/1626415200/fb2_03.png"
          width={2565}
          height={1839}
        />
        <Toolbar
          saveGraph={(graphData, meta) => {
            console.log(JSON.stringify(graphData));
            console.log(JSON.stringify(meta));
          }}
        />
        <NodePanel position={{ top: 40 }} />
        <FormPanel
          position={{ top: 40 }}
          controlMapService={defaultControlMapService}
          formSchemaService={defaultFormSchemaService}
        />
      </GraphEditor>
    </div>
  );
};
`},88738:function(a,e){e.Z=`import { GraphEditor, Toolbar } from '@infore/editor';

export default () => {
  return (
    <div style={{ height: 800 }}>
      <GraphEditor
        background={{
          image: 'https://minio.sit.inrobot.cloud/platform-map/fb2_001.png',
          position: {
            x: 0,
            y: -1839,
          },
          size: {
            width: 2565,
            height: 1839,
          },
        }}
        ready
      >
        <Toolbar
          saveGraph={(graphData, meta) => {
            console.log(graphData, meta);
          }}
        />
      </GraphEditor>
    </div>
  );
};
`},69853:function(a,e){e.Z=`import React from 'react';

import { PREFIX } from './constants';

export const CanvasService: React.FC = () => {
  return (
    <div className={\`\${PREFIX}-canvas-panel\`}>
      <span>\u672A\u9009\u4E2D</span>
    </div>
  );
};
`},31228:function(a,e){e.Z=`export const PREFIX = 'flowchart-editor';
export const FormItemHeight = 24;

/** \u8282\u70B9\u9ED8\u8BA4\u914D\u7F6E */
export const DefaultNodeConfig = {
  id: '',
  fontFill: '#000',
  fontSize: 12,
  label: '',
  vertices: [],
  angle: 0,
  zIndex: 10,
  ports: {
    items: [
      { group: 'top', id: '039df63e-fe68-48d5-a770-6a5e4915c268' },
      { group: 'right', id: '0fdb5771-d38d-42d8-a64f-bd4feea7a52f' },
      { group: 'bottom', id: 'b4f349e9-d77e-4035-835c-2db25ec90a24' },
      { group: 'left', id: '9003e475-f1c5-4ae3-a25a-4cf89a4f2b73' },
    ],
    groups: {
      top: {
        position: { name: 'top' },
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
            style: { visibility: 'hidden' },
          },
        },
        zIndex: 10,
      },
      right: {
        position: { name: 'right' },
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
            style: { visibility: 'hidden' },
          },
        },
        zIndex: 10,
      },
      bottom: {
        position: { name: 'bottom' },
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
            style: { visibility: 'hidden' },
          },
        },
        zIndex: 10,
      },
      left: {
        position: { name: 'left' },
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
            style: { visibility: 'hidden' },
          },
        },
        zIndex: 10,
      },
    },
  },
};

export const ArrowConfig = {
  width: 12,
  height: 8,
  name: 'classic',
  offset: 0,
};

export const DisableArrowConfig = {
  width: 0,
  height: 0,
  name: '',
};

export const ArrowMaps = {
  target: {
    sourceMarker: DisableArrowConfig,
    targetMarker: ArrowConfig,
  },
  source: {
    sourceMarker: ArrowConfig,
    targetMarker: DisableArrowConfig,
  },
  both: {
    sourceMarker: ArrowConfig,
    targetMarker: ArrowConfig,
  },
  none: {
    sourceMarker: DisableArrowConfig,
    targetMarker: DisableArrowConfig,
  },
};

export const ArrowStrokeMaps = {
  solid: '0 0',
  dash: '5 5',
};

export const ConnectorMaps = {
  line: 'line',
  SecondOrderBezierCurve: 'SecondOrderBezierCurve',
  ThirdOrderBezierCurve: 'ThirdOrderBezierCurve',
  rounded: 'rounded',
  arcline: 'arcline',
};

/** \u8FB9\u9ED8\u8BA4\u914D\u7F6E */
export const DefaultEdgeConfig = {
  id: '',
  source: '',
  target: '',
  arrow: 'both',
  type: 'line',
  style: 'solid',
  stroke: '#A2B1C3',
  strokeWidth: 1,
  fontFill: '#000',
  connector: {
    name: 'line',
    args: {
      radius: 20,
    },
  },
  attrs: {
    line: {
      stroke: '#A2B1C3',
      strokeWidth: 1,
      ...ArrowMaps.both,
      strokeDasharray: ArrowStrokeMaps.solid,
    },
    text: {
      fill: '#000',
      fontSize: 12,
      textAnchor: 'middle',
      textVerticalAnchor: 'middle',
    },
  },
  zIndex: 1,
};
`},15119:function(a,e){e.Z=`import React, { useEffect, useState } from 'react';

import type { NsGraph, NsJsonSchemaForm } from '@infore/editor';
import { FlowchartFormWrapper } from '@infore/editor';

import { DefaultEdgeConfig, PREFIX } from './constants';
import { ColorPicker, InputFiled, InputNumberFiled, Position, SelectField } from './fields';

const EdgeComponent = (props: { config: object; plugin: { updateEdge: (value: NsGraph.IEdgeConfig) => void } }) => {
  const { config, plugin } = props;
  const { updateEdge } = plugin;
  const [edgeConfig, setEdgeConfig] = useState<NsGraph.IEdgeConfig>({
    ...DefaultEdgeConfig,
    ...config,
  });
  useEffect(() => {
    setEdgeConfig({
      ...DefaultEdgeConfig,
      ...config,
    });
  }, [config]);

  const onEdgeConfigChange = (key: string, value: number | string | object) => {
    /** \u5168\u91CF\u66F4\u65B0\uFF0C\u7B80\u5316\u903B\u8F91 */
    if (key === 'vertice') {
      // @ts-ignore
      const vertices = edgeConfig.vertices.map((item, index) => {
        // @ts-ignore
        if (index === value.index) {
          return {
            // @ts-ignore
            ...value.value,
            update: true,
          };
        }
        return item;
      });
      setEdgeConfig({
        ...edgeConfig,
        vertices,
      });
      updateEdge(
        // @ts-ignore
        { vertices },
      );
    } else {
      setEdgeConfig({
        ...edgeConfig,
        [key]: value,
      });
      updateEdge(
        // @ts-ignore
        {
          [key]: value,
        },
      );
    }
  };
  return (
    <div className={\`\${PREFIX}-panel-body\`}>
      <div className={\`\${PREFIX}-panel-group\`}>
        <h5>\u5185\u5BB9</h5>
        <InputFiled
          label="\u6807\u7B7E"
          value={edgeConfig.label}
          onChange={(value) => {
            onEdgeConfigChange('label', value);
          }}
        />
      </div>
      <h5 style={{ marginBottom: 12 }}>\u6837\u5F0F</h5>
      <div className={\`\${PREFIX}-panel-group\`} style={{ marginBottom: 0 }}>
        <h5>\u7EBF</h5>
        <SelectField
          label="\u7BAD\u5934"
          value={edgeConfig.arrow}
          width="100%"
          options={[
            {
              label: '\u6B63\u5411',
              value: 'target',
            },
            {
              label: '\u9006\u5411',
              value: 'source',
            },
            {
              label: '\u53CC\u5411',
              value: 'both',
            },
          ]}
          onChange={(value) => {
            onEdgeConfigChange('arrow', value);
          }}
        />
        <div className={\`\${PREFIX}-edge-stroke-style\`}>
          <SelectField
            label="\u7EBF\u5F62"
            width={68}
            value={edgeConfig.style}
            options={[
              {
                label: '\u5B9E\u7EBF',
                value: 'solid',
              },
              {
                label: '\u865A\u7EBF',
                value: 'dash',
              },
            ]}
            onChange={(value) => {
              onEdgeConfigChange('style', value);
            }}
          />
        </div>
        <SelectField
          label="\u7C7B\u578B"
          value={edgeConfig.type}
          width="100%"
          options={[
            {
              label: '\u76F4\u7EBF',
              value: 'line',
            },
            {
              label: '\u4E8C\u9636\u8D1D\u585E\u5C14\u66F2\u7EBF',
              value: 'SecondOrderBezierCurve',
            },
            {
              label: '\u4E09\u9636\u8D1D\u585E\u5C14\u66F2\u7EBF',
              value: 'ThirdOrderBezierCurve',
            },
            {
              label: '\u5706\u89D2\u66F2\u7EBF',
              value: 'rounded',
            },
            {
              label: '\u5F27\u7EBF',
              value: 'ArcLine',
            },
          ]}
          onChange={(value) => {
            onEdgeConfigChange('type', value);
          }}
        />
        {['rounded', 'ArcLine'].includes(edgeConfig.type) && (
          <InputNumberFiled
            label="\u534A\u5F84"
            min={20}
            value={edgeConfig.radius}
            onChange={(value) => {
              onEdgeConfigChange('radius', value);
            }}
          />
        )}
        <div className={\`\${PREFIX}-panel-group\`} style={{ marginBottom: 0 }}>
          <h5>\u63A7\u5236\u70B9</h5>
          {edgeConfig.vertices?.map((item: { x: number; y: number }, index: number) => {
            return (
              <Position
                // eslint-disable-next-line react/no-array-index-key
                key={\`\${index}\`}
                x={item.x}
                y={item.y}
                onChange={(key, value) => {
                  onEdgeConfigChange('vertice', {
                    index,
                    value: {
                      ...item,
                      [key]: value,
                    },
                  });
                }}
              />
            );
          })}
        </div>
        <ColorPicker
          label="\u8FB9\u6846"
          value={edgeConfig.stroke}
          onChange={(value: string) => {
            onEdgeConfigChange('stroke', value);
          }}
        />
      </div>
      <div className={\`\${PREFIX}-panel-group\`}>
        <h5>\u6807\u7B7E</h5>
        <div className={\`\${PREFIX}-edge-text-style\`}>
          <InputNumberFiled
            label="\u5B57\u53F7"
            min={10}
            width={68}
            value={edgeConfig.fontSize || 12}
            onChange={(value) => {
              onEdgeConfigChange('fontSize', value);
            }}
          />
          <ColorPicker
            value={edgeConfig.fontFill || '#000'}
            onChange={(value: string) => {
              onEdgeConfigChange('fontFill', value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export const EdgeService: React.FC<NsJsonSchemaForm.IControlProps> = (props) => {
  return (
    <FlowchartFormWrapper {...props} type="edge">
      {(config: object, plugin: { updateEdge: (value: NsGraph.IEdgeConfig) => void }) => (
        <EdgeComponent {...props} plugin={plugin} config={config} />
      )}
    </FlowchartFormWrapper>
  );
};
`},24878:function(a,e){e.Z=`import React, { ReactNode, memo, useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import { createPortal, render } from 'react-dom';

import type { IGraphConfig } from '@antv/xflow-core';
import { useXFlowApp } from '@antv/xflow-core';
import { Button } from 'antd';

import { PREFIX } from '../constants';

export interface IProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const ColorPicker: React.FC<IProps> = (props) => {
  const { label, value = '', onChange } = props;
  const [show, setShow] = useState(false);
  const colorRef = useRef<string>(value);
  const { graphProvider } = useXFlowApp();
  const graphConfig = useRef<IGraphConfig>();
  graphProvider.getGraphOptions().then((x6GraphConfig) => {
    graphConfig.current = x6GraphConfig;
  });

  const PickContainer = () => {
    return (
      <div className={\`\${PREFIX}-pick-color-container\`}>
        <div className={\`\${PREFIX}-popover\`}>
          <SketchPicker
            onChange={(color) => {
              colorRef.current = color.hex;
            }}
          />
          <div className="foolter">
            <Button
              onClick={() => {
                setShow(false);
              }}
            >
              \u53D6\u6D88
            </Button>
            <Button
              type="primary"
              onClick={() => {
                onChange?.(colorRef.current);
                setShow(false);
              }}
            >
              \u786E\u8BA4
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const createPickColorContainer = (visible: boolean) => {
    const existElements = document.getElementsByClassName(\`\${PREFIX}-pick-color-container\`);
    if (existElements.length) {
      Array.from(existElements).forEach((ele) => {
        ele.parentNode?.removeChild(ele);
      });
    }
    if (!visible) {
      return;
    }
    const div = document.createElement('div');
    render(createPortal(<PickContainer />, document.getElementsByTagName('body')[0]), div);
  };

  return (
    // @ts-ignore
    <div className="group">
      {label && <label>{label}</label>}
      <div
        className={\`\${PREFIX}-color-container\`}
        onClick={() => {
          setShow(true);
        }}
      >
        <div
          className={\`\${PREFIX}-color\`}
          style={{
            backgroundColor: value,
            height: '100%',
          }}
        />
      </div>
      {createPickColorContainer(show) as ReactNode}
    </div>
  );
};

export default memo(ColorPicker, (pre, next) => {
  return pre.label === next.label && pre.value === next.value;
});
`},42617:function(a,e){e.Z=`import ColorPicker from './color';
import InputFiled from './input';
import InputNumberFiled from './input-number';
import Position from './position';
import SelectField from './select';
import Size from './size';

export { InputFiled, ColorPicker, InputNumberFiled, Size, Position, SelectField };
`},84288:function(a,e){e.Z=`import React from 'react';

import { InputNumber } from 'antd';

import { FormItemHeight } from '../constants';

interface IProps {
  label?: string;
  value?: number;
  min?: number;
  width?: number;
  onChange?: (value: number) => void;
}

const InputNumberFiled: React.FC<IProps> = (props) => {
  const { label, value, onChange, min, width } = props;
  return (
    <div className="group">
      {label && <label>{label}</label>}
      <InputNumber
        value={value}
        min={min}
        style={{
          width,
          height: FormItemHeight,
        }}
        onChange={(v) => {
          onChange?.(v!);
        }}
      />
    </div>
  );
};

export default InputNumberFiled;
`},49303:function(a,e){e.Z=`import React from 'react';

import { Input } from 'antd';

import { FormItemHeight } from '../constants';

interface IProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const InputFiled: React.FC<IProps> = (props) => {
  const { label = '\u6807\u7B7E', value, onChange } = props;
  return (
    <div className="group">
      <label>{label}</label>
      <Input
        value={value}
        style={{
          height: FormItemHeight,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange?.(e.target.value);
        }}
      />
    </div>
  );
};

export default InputFiled;
`},72243:function(a,e){e.Z=`import React from 'react';

import { InputNumber } from 'antd';

import { FormItemHeight } from '../constants';

interface IProps {
  x?: number;
  y?: number;
  onChange?: (key: string, value: number) => void;
}

export const Item = ({
  value,
  onChangeItem,
  addonBefore,
}: {
  value?: number;
  onChangeItem: (value: number) => void;
  addonBefore: string;
}) => (
  <div className="addon-before-group">
    <InputNumber
      value={value}
      style={{ height: FormItemHeight, border: 'none' }}
      onChange={(v) => {
        onChangeItem(v!);
      }}
    />
    <span>{addonBefore}</span>
  </div>
);

const Position: React.FC<IProps> = (props) => {
  const { x, y, onChange } = props;

  return (
    <div className="group">
      <label>\u4F4D\u7F6E</label>
      <div className="split">
        <Item
          addonBefore="X"
          value={x}
          onChangeItem={(value: number) => {
            onChange?.('x', value);
          }}
        />
        <Item
          addonBefore="Y"
          value={y}
          onChangeItem={(value: number) => {
            onChange?.('y', value);
          }}
        />
      </div>
    </div>
  );
};

export default Position;
`},46986:function(a,e){e.Z=`import React from 'react';

import { Select } from 'antd';

import { FormItemHeight } from '../constants';

interface IProps {
  label?: string;
  value?: string;
  options?: {
    label: string | number;
    value: string | number;
  }[];
  width?: number | string;
  onChange?: (value: string) => void;
}

const SelectField: React.FC<IProps> = (props) => {
  const { label = '\u7BAD\u5934', value, onChange, options = [], width } = props;
  return (
    <div className="group">
      <label>{label}</label>
      <Select
        size="small"
        value={value}
        style={{
          width,
          height: FormItemHeight,
        }}
        getPopupContainer={(trigger) => trigger.parentNode}
        optionFilterProp="children"
        onChange={(v: string) => {
          onChange?.(v);
        }}
        filterOption={(input, option) => {
          const { label: text = '' } = option as { label: string | number };
          if (typeof text === 'string') {
            return text.toLowerCase().indexOf(input.toLowerCase()) >= 0;
          }
          return text.toString().indexOf(input.toLowerCase()) >= 0;
        }}
        options={options}
      />
    </div>
  );
};

export default SelectField;
`},20976:function(a,e){e.Z=`import React from 'react';

import { Item } from './position';

interface IProps {
  width?: number;
  height?: number;
  onChange?: (key: string, value: number) => void;
}

const Size: React.FC<IProps> = (props) => {
  const { width, height, onChange } = props;

  return (
    <div className="group">
      <label>\u5C3A\u5BF8</label>
      <div className="split">
        <Item
          addonBefore="W"
          value={width}
          onChangeItem={(value: number) => {
            onChange?.('width', value);
          }}
        />
        <Item
          addonBefore="H"
          value={height}
          onChangeItem={(value: number) => {
            onChange?.('height', value);
          }}
        />
      </div>
    </div>
  );
};

export default Size;
`},29318:function(a,e){e.Z=`import React, { useEffect, useState } from 'react';

import type { NsGraph, NsJsonSchemaForm } from '@infore/editor';
import { FlowchartFormWrapper } from '@infore/editor';

import { DefaultNodeConfig, PREFIX } from './constants';
import { ColorPicker, InputFiled, InputNumberFiled, Position, Size } from './fields';

const GroupComponent = (props: { config: object; plugin: { updateGroup: (value: NsGraph.IGroupConfig) => void } }) => {
  const { config, plugin } = props;
  const { updateGroup } = plugin;

  const [groupConfig, setGroupConfig] = useState<NsGraph.IGroupConfig>({
    ...DefaultNodeConfig,
    ...config,
  });

  const onGroupConfigChange = (key: string, value: number | string) => {
    setGroupConfig({
      ...groupConfig,
      [key]: value,
    });
    // @ts-ignore
    updateGroup({
      [key]: value,
    });
  };

  useEffect(() => {
    setGroupConfig({
      ...DefaultNodeConfig,
      ...config,
    });
  }, [config]);

  return (
    <div className={\`\${PREFIX}-panel-body\`}>
      <div className={\`\${PREFIX}-panel-group\`}>
        <h5>\u5185\u5BB9</h5>
        <InputFiled
          label="\u6807\u9898"
          value={groupConfig.label}
          onChange={(value) => {
            onGroupConfigChange('label', value);
          }}
        />
      </div>
      <div className={\`\${PREFIX}-panel-group\`}>
        <h5>\u6837\u5F0F</h5>
        <Position
          x={groupConfig.x}
          y={groupConfig.y}
          onChange={(key, value) => {
            onGroupConfigChange(key, value);
          }}
        />
        <Size
          width={groupConfig.width}
          height={groupConfig.height}
          onChange={(key, value) => {
            onGroupConfigChange(key, value);
          }}
        />
        <ColorPicker
          label="\u586B\u5145"
          value={groupConfig.fill}
          onChange={(value: string) => {
            onGroupConfigChange('fill', value);
          }}
        />
        <ColorPicker
          label="\u8FB9\u6846"
          value={groupConfig.stroke}
          onChange={(value: string) => {
            onGroupConfigChange('stroke', value);
          }}
        />
        <div className={\`\${PREFIX}-node-text-style\`}>
          <InputNumberFiled
            label="\u5B57\u53F7"
            value={groupConfig.fontSize}
            width={68}
            onChange={(value) => {
              onGroupConfigChange('fontSize', value);
            }}
          />
          <ColorPicker
            value={groupConfig.fontFill}
            onChange={(value: string) => {
              onGroupConfigChange('fontFill', value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const GroupService: React.FC<NsJsonSchemaForm.IControlProps> = (props) => {
  return (
    <FlowchartFormWrapper {...props} type="group">
      {(config, plugin) => <GroupComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  );
};
`},6868:function(a,e){e.Z=`import React, { useEffect, useState } from 'react';

import type { NsGraph, NsJsonSchemaForm } from '@infore/editor';
import { FlowchartFormWrapper } from '@infore/editor';

import { DefaultNodeConfig, PREFIX } from './constants';
import { ColorPicker, InputFiled, InputNumberFiled, Position, Size } from './fields';

const NodeComponent = (props: { config: object; plugin: { updateNode: (value: NsGraph.INodeConfig) => void } }) => {
  const { config, plugin } = props;
  const { updateNode } = plugin;
  const [nodeConfig, setNodeConfig] = useState<NsGraph.INodeConfig>({
    ...DefaultNodeConfig,
    ...config,
  });
  const onNodeConfigChange = async (key: string, value: number | string) => {
    setNodeConfig({
      ...nodeConfig,
      [key]: value,
    });
    console.log();
    // @ts-ignore
    updateNode({
      [key]: value,
    });
  };

  useEffect(() => {
    setNodeConfig({
      ...DefaultNodeConfig,
      ...config,
    });
  }, [config]);

  return (
    <div className={\`\${PREFIX}-panel-body\`}>
      <div className={\`\${PREFIX}-panel-group\`}>
        <h5>\u5185\u5BB9</h5>
        <InputFiled
          label="\u6807\u9898"
          value={nodeConfig.label}
          onChange={(value) => {
            onNodeConfigChange('label', value);
          }}
        />
      </div>
      <div className={\`\${PREFIX}-panel-group\`}>
        <h5>\u6837\u5F0F</h5>
        <Position
          x={nodeConfig.x}
          y={nodeConfig.y}
          onChange={(key, value) => {
            onNodeConfigChange(key, value);
          }}
        />
        <Size
          width={nodeConfig.width}
          height={nodeConfig.height}
          onChange={(key, value) => {
            onNodeConfigChange(key, value);
          }}
        />
        <InputNumberFiled
          label="\u89D2\u5EA6"
          value={nodeConfig.angle}
          width={68}
          onChange={(value) => {
            onNodeConfigChange('angle', value);
          }}
        />
        <ColorPicker
          label="\u586B\u5145"
          value={nodeConfig.fill}
          onChange={(value: string) => {
            onNodeConfigChange('fill', value);
          }}
        />
        <ColorPicker
          label="\u8FB9\u6846"
          value={nodeConfig.stroke}
          onChange={(value: string) => {
            onNodeConfigChange('stroke', value);
          }}
        />
        <div className={\`\${PREFIX}-node-text-style\`}>
          <InputNumberFiled
            label="\u5B57\u53F7"
            value={nodeConfig.fontSize}
            width={68}
            onChange={(value) => {
              onNodeConfigChange('fontSize', value);
            }}
          />
          <ColorPicker
            value={nodeConfig.fontFill}
            onChange={(value: string) => {
              onNodeConfigChange('fontFill', value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const NodeService: React.FC<NsJsonSchemaForm.IControlProps> = (props) => {
  return (
    <FlowchartFormWrapper {...props} type="node">
      {(config, plugin) => <NodeComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  );
};
`},42364:function(a,e){e.Z=`import type { IFlowchartFormPanelProps } from '@infore/editor';

import { CanvasService } from './components/canvas';
import { EdgeService } from './components/edge';
import { GroupService } from './components/group';
import { NodeService } from './components/node';

/** \u9ED8\u8BA4\u652F\u6301\u4FEE\u6539\u6807\u7B7E\u548C\u91CD\u547D\u540D\u529F\u80FD */
export const defaultControlMapService: IFlowchartFormPanelProps['controlMapService'] = (controlMap) => {
  controlMap.set('node-service', NodeService);
  controlMap.set('edge-service', EdgeService);
  controlMap.set('group-service', GroupService);
  controlMap.set('canvas-service', CanvasService);
  return controlMap;
};
`},8650:function(a,e){e.Z=`import type { IFlowchartFormPanelProps, NsJsonSchemaForm } from '@infore/editor';

export const defaultFormSchemaService: IFlowchartFormPanelProps['formSchemaService'] = async (args) => {
  const { targetType } = args;
  const isGroup = args.targetData?.isGroup;

  const groupSchema: NsJsonSchemaForm.ISchema = {
    tabs: [
      {
        name: '\u8BBE\u7F6E',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '\u5206\u7EC4\u540D',
                name: 'group-service',
                shape: 'group-service',
                placeholder: '\u5206\u7EC4\u540D\u79F0',
              },
            ],
          },
        ],
      },
    ],
  };

  const nodeSchema: NsJsonSchemaForm.ISchema = {
    tabs: [
      {
        name: '\u8BBE\u7F6E',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '\u8282\u70B9\u540D',
                name: 'node-service',
                shape: 'node-service',
                placeholder: '\u8282\u70B9\u540D\u79F0',
              },
            ],
          },
        ],
      },
    ],
  };

  const edgeSchema: NsJsonSchemaForm.ISchema = {
    tabs: [
      {
        name: '\u8BBE\u7F6E',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '\u8FB9',
                name: 'edge-service',
                shape: 'edge-service',
                placeholder: '\u8FB9\u540D\u79F0',
              },
            ],
          },
        ],
      },
    ],
  };

  if (isGroup) {
    return groupSchema;
  }

  if (targetType === 'node') {
    return nodeSchema;
  }

  if (targetType === 'edge') {
    return edgeSchema;
  }
  return {
    tabs: [
      {
        name: '\u8BBE\u7F6E',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '',
                name: 'canvas-service',
                shape: 'canvas-service',
              },
            ],
          },
        ],
      },
    ],
  } as NsJsonSchemaForm.ISchema;
};
`},94297:function(a,e){e.Z=`// \u5145\u7535\u7AD9
import ChargingStation from './charging-station';
// \u5706\u533A\u57DF
import CircleArea from './circle-area';
// \u6807\u8BB0\u70B9
import MarkedPoint from './marked-point';
import Robot from './robot';
// \u65B9\u533A\u57DF
import SquareArea from './square-area';
// \u505C\u9760\u70B9
import StopPoint from './stop-point';
// \u865A\u62DF\u5899
import VirtualWall from './virtual-wall';
// \u8DEF\u5F84\u70B9
import WayPoint from './way-point';
// \u5DE5\u4F5C\u533A
import WorkStation from './work-station';

export const points = [
  {
    component: WayPoint,
    name: 'way-point',
    label: '\u8282\u70B9',
    resizing: false,
    rotating: false,
  },
  {
    component: StopPoint,
    name: 'stop-point',
    label: '\u505C\u9760\u70B9',
    resizing: false,
    rotating: false,
  },
  {
    component: MarkedPoint,
    name: 'marked-point',
    label: '\u6807\u8BB0\u70B9',
    resizing: false,
    rotating: false,
  },
  {
    component: ChargingStation,
    name: 'charging-station',
    label: '\u5145\u7535\u7AD9',
    resizing: false,
    rotating: false,
  },
  {
    component: WorkStation,
    name: 'work-station',
    label: '\u4F5C\u4E1A\u7AD9',
    resizing: false,
    rotating: false,
  },
];

const areas = [
  {
    component: SquareArea,
    name: 'square-area',
    label: '\u65B9\u533A\u57DF',
    width: 200,
    height: 200,
    ports: [],
  },
  {
    component: CircleArea,
    name: 'circle-area',
    label: '\u5706\u533A\u57DF',
    width: 200,
    height: 200,
    preserveAspectRatio: true,
    ports: [],
  },
];
const walls = [
  {
    component: VirtualWall,
    name: 'virtual-wall',
    label: '\u865A\u62DF\u5899',
    width: 200,
    height: 200,
    ports: [],
  },
];

const robots = [
  {
    component: Robot,
    name: 'robot',
    resizing: false,
    ports: [],
  },
];

export default [
  {
    title: '\u7AD9\u70B9',
    key: 'points',
    nodes: points,
    hidden: false,
  },
  {
    title: '\u533A\u57DF',
    key: 'areas',
    nodes: areas,
    hidden: false,
  },
  {
    title: '\u865A\u62DF\u5899',
    key: 'walls',
    nodes: walls,
    hidden: false,
  },
  {
    title: '\u673A\u5668\u4EBA',
    key: 'robots',
    nodes: robots,
    hidden: false,
  },
];
`},12939:function(a,e){e.Z=`import React from 'react';

import { PREFIX } from './constants';

export const CanvasService: React.FC = () => {
  return (
    <div className={\`\${PREFIX}-canvas-panel\`}>
      <span>\u672A\u9009\u4E2D</span>
    </div>
  );
};
`},63351:function(a,e){e.Z=`export const PREFIX = 'flowchart-editor';
export const FormItemHeight = 24;

/** \u8282\u70B9\u9ED8\u8BA4\u914D\u7F6E */
export const DefaultNodeConfig = {
  id: '',
  fontFill: '#000',
  fontSize: 12,
  label: '',
  vertices: [],
  angle: 0,
  zIndex: 10,
  ports: {
    items: [
      { group: 'top', id: '039df63e-fe68-48d5-a770-6a5e4915c268' },
      { group: 'right', id: '0fdb5771-d38d-42d8-a64f-bd4feea7a52f' },
      { group: 'bottom', id: 'b4f349e9-d77e-4035-835c-2db25ec90a24' },
      { group: 'left', id: '9003e475-f1c5-4ae3-a25a-4cf89a4f2b73' },
    ],
    groups: {
      top: {
        position: { name: 'top' },
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
            style: { visibility: 'hidden' },
          },
        },
        zIndex: 10,
      },
      right: {
        position: { name: 'right' },
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
            style: { visibility: 'hidden' },
          },
        },
        zIndex: 10,
      },
      bottom: {
        position: { name: 'bottom' },
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
            style: { visibility: 'hidden' },
          },
        },
        zIndex: 10,
      },
      left: {
        position: { name: 'left' },
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
            style: { visibility: 'hidden' },
          },
        },
        zIndex: 10,
      },
    },
  },
};

export const ArrowConfig = {
  width: 12,
  height: 8,
  name: 'classic',
  offset: 0,
};

export const DisableArrowConfig = {
  width: 0,
  height: 0,
  name: '',
};

export const ArrowMaps = {
  target: {
    sourceMarker: DisableArrowConfig,
    targetMarker: ArrowConfig,
  },
  source: {
    sourceMarker: ArrowConfig,
    targetMarker: DisableArrowConfig,
  },
  both: {
    sourceMarker: ArrowConfig,
    targetMarker: ArrowConfig,
  },
  none: {
    sourceMarker: DisableArrowConfig,
    targetMarker: DisableArrowConfig,
  },
};

export const ArrowStrokeMaps = {
  solid: '0 0',
  dash: '5 5',
};

export const ConnectorMaps = {
  line: 'line',
  SecondOrderBezierCurve: 'SecondOrderBezierCurve',
  ThirdOrderBezierCurve: 'ThirdOrderBezierCurve',
  rounded: 'rounded',
  arcline: 'arcline',
};

/** \u8FB9\u9ED8\u8BA4\u914D\u7F6E */
export const DefaultEdgeConfig = {
  id: '',
  source: '',
  target: '',
  arrow: 'both',
  type: 'line',
  style: 'solid',
  stroke: '#A2B1C3',
  strokeWidth: 1,
  fontFill: '#000',
  connector: {
    name: 'line',
    args: {
      radius: 20,
    },
  },
  attrs: {
    line: {
      stroke: '#A2B1C3',
      strokeWidth: 1,
      ...ArrowMaps.both,
      strokeDasharray: ArrowStrokeMaps.solid,
    },
    text: {
      fill: '#000',
      fontSize: 12,
      textAnchor: 'middle',
      textVerticalAnchor: 'middle',
    },
  },
  zIndex: 1,
};
`},26757:function(a,e){e.Z=`import React, { useEffect, useState } from 'react';

import type { NsGraph, NsJsonSchemaForm } from '@infore/editor';
import { FlowchartFormWrapper } from '@infore/editor';

import { DefaultEdgeConfig, PREFIX } from './constants';
import { ColorPicker, InputFiled, InputNumberFiled, Position, SelectField } from './fields';

const EdgeComponent = (props: { config: object; plugin: { updateEdge: (value: NsGraph.IEdgeConfig) => void } }) => {
  const { config, plugin } = props;
  const { updateEdge } = plugin;
  const [edgeConfig, setEdgeConfig] = useState<NsGraph.IEdgeConfig>({
    ...DefaultEdgeConfig,
    ...config,
  });
  useEffect(() => {
    setEdgeConfig({
      ...DefaultEdgeConfig,
      ...config,
    });
  }, [config]);

  const onEdgeConfigChange = (key: string, value: number | string | object) => {
    /** \u5168\u91CF\u66F4\u65B0\uFF0C\u7B80\u5316\u903B\u8F91 */
    if (key === 'vertice') {
      // @ts-ignore
      const vertices = edgeConfig.vertices.map((item, index) => {
        // @ts-ignore
        if (index === value.index) {
          return {
            // @ts-ignore
            ...value.value,
            update: true,
          };
        }
        return item;
      });
      setEdgeConfig({
        ...edgeConfig,
        vertices,
      });
      updateEdge(
        // @ts-ignore
        { vertices },
      );
    } else {
      setEdgeConfig({
        ...edgeConfig,
        [key]: value,
      });
      updateEdge(
        // @ts-ignore
        {
          [key]: value,
        },
      );
    }
  };
  return (
    <div className={\`\${PREFIX}-panel-body\`}>
      <div className={\`\${PREFIX}-panel-group\`}>
        <h5>\u5185\u5BB9</h5>
        <InputFiled
          label="\u6807\u7B7E"
          value={edgeConfig.name}
          onChange={(value) => {
            onEdgeConfigChange('name', value);
          }}
        />
      </div>
      <h5 style={{ marginBottom: 12 }}>\u6837\u5F0F</h5>
      <div className={\`\${PREFIX}-panel-group\`} style={{ marginBottom: 0 }}>
        <h5>\u7EBF</h5>
        <SelectField
          label="\u7BAD\u5934"
          value={edgeConfig.arrow}
          width="100%"
          options={[
            {
              label: '\u6B63\u5411',
              value: 'target',
            },
            {
              label: '\u9006\u5411',
              value: 'source',
            },
            {
              label: '\u53CC\u5411',
              value: 'both',
            },
          ]}
          onChange={(value) => {
            onEdgeConfigChange('arrow', value);
          }}
        />
        <div className={\`\${PREFIX}-edge-stroke-style\`}>
          <SelectField
            label="\u7EBF\u5F62"
            width={68}
            value={edgeConfig.style}
            options={[
              {
                label: '\u5B9E\u7EBF',
                value: 'solid',
              },
              {
                label: '\u865A\u7EBF',
                value: 'dash',
              },
            ]}
            onChange={(value) => {
              onEdgeConfigChange('style', value);
            }}
          />
        </div>
        <SelectField
          label="\u7C7B\u578B"
          value={edgeConfig.type}
          width="100%"
          options={[
            {
              label: '\u6298\u7EBF',
              value: 'POLYGONAL_LINE',
            },
            {
              label: '\u4E09\u9636\u8D1D\u585E\u5C14\u66F2\u7EBF',
              value: 'BESSEL_CURVE',
            },
            {
              label: '\u5706\u89D2\u66F2\u7EBF',
              value: 'ROUNDED',
            },
            {
              label: '\u5F27\u7EBF',
              value: 'ARC',
            },
          ]}
          onChange={(value) => {
            onEdgeConfigChange('type', value);
          }}
        />
        {['rounded', 'ArcLine'].includes(edgeConfig.type) && (
          <InputNumberFiled
            label="\u534A\u5F84"
            min={20}
            value={edgeConfig.radius}
            onChange={(value) => {
              onEdgeConfigChange('radius', value);
            }}
          />
        )}
        <div className={\`\${PREFIX}-panel-group\`} style={{ marginBottom: 0 }}>
          <h5>\u63A7\u5236\u70B9</h5>
          {edgeConfig.vertices?.map((item: { x: number; y: number }, index: number) => {
            return (
              <Position
                // eslint-disable-next-line react/no-array-index-key
                key={\`\${index}\`}
                x={item.x}
                y={item.y}
                onChange={(key, value) => {
                  onEdgeConfigChange('vertice', {
                    index,
                    value: {
                      ...item,
                      [key]: value,
                    },
                  });
                }}
              />
            );
          })}
        </div>
        <ColorPicker
          label="\u8FB9\u6846"
          value={edgeConfig.stroke}
          onChange={(value: string) => {
            onEdgeConfigChange('stroke', value);
          }}
        />
      </div>
      <div className={\`\${PREFIX}-panel-group\`}>
        <h5>\u6807\u7B7E</h5>
        <div className={\`\${PREFIX}-edge-text-style\`}>
          <InputNumberFiled
            label="\u5B57\u53F7"
            min={10}
            width={68}
            value={edgeConfig.fontSize || 12}
            onChange={(value) => {
              onEdgeConfigChange('fontSize', value);
            }}
          />
          <ColorPicker
            value={edgeConfig.fontFill || '#000'}
            onChange={(value: string) => {
              onEdgeConfigChange('fontFill', value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export const EdgeService: React.FC<NsJsonSchemaForm.IControlProps> = (props) => {
  return (
    <FlowchartFormWrapper {...props} type="edge">
      {(config: object, plugin: { updateEdge: (value: NsGraph.IEdgeConfig) => void }) => (
        <EdgeComponent {...props} plugin={plugin} config={config} />
      )}
    </FlowchartFormWrapper>
  );
};
`},92178:function(a,e){e.Z=`import React, { ReactNode, memo, useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import { createPortal, render } from 'react-dom';

import type { IGraphConfig } from '@antv/xflow-core';
import { useXFlowApp } from '@antv/xflow-core';
import { Button } from 'antd';

import { PREFIX } from '../constants';

export interface IProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const ColorPicker: React.FC<IProps> = (props) => {
  const { label, value = '', onChange } = props;
  const [show, setShow] = useState(false);
  const colorRef = useRef<string>(value);
  const { graphProvider } = useXFlowApp();
  const graphConfig = useRef<IGraphConfig>();
  graphProvider.getGraphOptions().then((x6GraphConfig) => {
    graphConfig.current = x6GraphConfig;
  });

  const PickContainer = () => {
    return (
      <div className={\`\${PREFIX}-pick-color-container\`}>
        <div className={\`\${PREFIX}-popover\`}>
          <SketchPicker
            onChange={(color) => {
              colorRef.current = color.hex;
            }}
          />
          <div className="foolter">
            <Button
              onClick={() => {
                setShow(false);
              }}
            >
              \u53D6\u6D88
            </Button>
            <Button
              type="primary"
              onClick={() => {
                onChange?.(colorRef.current);
                setShow(false);
              }}
            >
              \u786E\u8BA4
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const createPickColorContainer = (visible: boolean) => {
    const existElements = document.getElementsByClassName(\`\${PREFIX}-pick-color-container\`);
    if (existElements.length) {
      Array.from(existElements).forEach((ele) => {
        ele.parentNode?.removeChild(ele);
      });
    }
    if (!visible) {
      return;
    }
    const div = document.createElement('div');
    render(createPortal(<PickContainer />, document.getElementsByTagName('body')[0]), div);
  };

  return (
    // @ts-ignore
    <div className="group">
      {label && <label>{label}</label>}
      <div
        className={\`\${PREFIX}-color-container\`}
        onClick={() => {
          setShow(true);
        }}
      >
        <div
          className={\`\${PREFIX}-color\`}
          style={{
            backgroundColor: value,
            height: '100%',
          }}
        />
      </div>
      {createPickColorContainer(show) as ReactNode}
    </div>
  );
};

export default memo(ColorPicker, (pre, next) => {
  return pre.label === next.label && pre.value === next.value;
});
`},64625:function(a,e){e.Z=`import ColorPicker from './color';
import InputFiled from './input';
import InputNumberFiled from './input-number';
import Position from './position';
import SelectField from './select';
import Size from './size';

export { InputFiled, ColorPicker, InputNumberFiled, Size, Position, SelectField };
`},95352:function(a,e){e.Z=`import React from 'react';

import { InputNumber } from 'antd';

import { FormItemHeight } from '../constants';

interface IProps {
  label?: string;
  value?: number;
  min?: number;
  width?: number;
  onChange?: (value: number) => void;
}

const InputNumberFiled: React.FC<IProps> = (props) => {
  const { label, value, onChange, min, width } = props;
  return (
    <div className="group">
      {label && <label>{label}</label>}
      <InputNumber
        value={value}
        min={min}
        style={{
          width,
          height: FormItemHeight,
        }}
        onChange={(v) => {
          onChange?.(v!);
        }}
      />
    </div>
  );
};

export default InputNumberFiled;
`},96450:function(a,e){e.Z=`import React from 'react';

import { Input } from 'antd';

import { FormItemHeight } from '../constants';

interface IProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const InputFiled: React.FC<IProps> = (props) => {
  const { label = '\u6807\u7B7E', value, onChange } = props;
  return (
    <div className="group">
      <label>{label}</label>
      <Input
        value={value}
        style={{
          height: FormItemHeight,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange?.(e.target.value);
        }}
      />
    </div>
  );
};

export default InputFiled;
`},7969:function(a,e){e.Z=`import React from 'react';

import { InputNumber } from 'antd';

import { FormItemHeight } from '../constants';

interface IProps {
  x?: number;
  y?: number;
  onChange?: (key: string, value: number) => void;
}

export const Item = ({
  value,
  onChangeItem,
  addonBefore,
}: {
  value?: number;
  onChangeItem: (value: number) => void;
  addonBefore: string;
}) => (
  <div className="addon-before-group">
    <InputNumber
      value={value}
      style={{ height: FormItemHeight, border: 'none' }}
      onChange={(v) => {
        onChangeItem(v!);
      }}
    />
    <span>{addonBefore}</span>
  </div>
);

const Position: React.FC<IProps> = (props) => {
  const { x, y, onChange } = props;

  return (
    <div className="group">
      <label>\u4F4D\u7F6E</label>
      <div className="split">
        <Item
          addonBefore="X"
          value={x}
          onChangeItem={(value: number) => {
            onChange?.('x', value);
          }}
        />
        <Item
          addonBefore="Y"
          value={y}
          onChangeItem={(value: number) => {
            onChange?.('y', value);
          }}
        />
      </div>
    </div>
  );
};

export default Position;
`},96108:function(a,e){e.Z=`import React from 'react';

import { Select } from 'antd';

import { FormItemHeight } from '../constants';

interface IProps {
  label?: string;
  value?: string;
  options?: {
    label: string | number;
    value: string | number;
  }[];
  width?: number | string;
  onChange?: (value: string) => void;
}

const SelectField: React.FC<IProps> = (props) => {
  const { label = '\u7BAD\u5934', value, onChange, options = [], width } = props;
  return (
    <div className="group">
      <label>{label}</label>
      <Select
        size="small"
        value={value}
        style={{
          width,
          height: FormItemHeight,
        }}
        getPopupContainer={(trigger) => trigger.parentNode}
        optionFilterProp="children"
        onChange={(v: string) => {
          onChange?.(v);
        }}
        filterOption={(input, option) => {
          const { label: text = '' } = option as { label: string | number };
          if (typeof text === 'string') {
            return text.toLowerCase().indexOf(input.toLowerCase()) >= 0;
          }
          return text.toString().indexOf(input.toLowerCase()) >= 0;
        }}
        options={options}
      />
    </div>
  );
};

export default SelectField;
`},13723:function(a,e){e.Z=`import React from 'react';

import { Item } from './position';

interface IProps {
  width?: number;
  height?: number;
  onChange?: (key: string, value: number) => void;
}

const Size: React.FC<IProps> = (props) => {
  const { width, height, onChange } = props;

  return (
    <div className="group">
      <label>\u5C3A\u5BF8</label>
      <div className="split">
        <Item
          addonBefore="W"
          value={width}
          onChangeItem={(value: number) => {
            onChange?.('width', value);
          }}
        />
        <Item
          addonBefore="H"
          value={height}
          onChangeItem={(value: number) => {
            onChange?.('height', value);
          }}
        />
      </div>
    </div>
  );
};

export default Size;
`},6423:function(a,e){e.Z=`import React, { useEffect, useState } from 'react';

import type { NsGraph, NsJsonSchemaForm } from '@infore/editor';
import { FlowchartFormWrapper } from '@infore/editor';

import { DefaultNodeConfig, PREFIX } from './constants';
import { ColorPicker, InputFiled, InputNumberFiled, Position, Size } from './fields';

const GroupComponent = (props: { config: object; plugin: { updateGroup: (value: NsGraph.IGroupConfig) => void } }) => {
  const { config, plugin } = props;
  const { updateGroup } = plugin;

  const [groupConfig, setGroupConfig] = useState<NsGraph.IGroupConfig>({
    ...DefaultNodeConfig,
    ...config,
  });

  const onGroupConfigChange = (key: string, value: number | string) => {
    setGroupConfig({
      ...groupConfig,
      [key]: value,
    });
    // @ts-ignore
    updateGroup({
      [key]: value,
    });
  };

  useEffect(() => {
    setGroupConfig({
      ...DefaultNodeConfig,
      ...config,
    });
  }, [config]);

  return (
    <div className={\`\${PREFIX}-panel-body\`}>
      <div className={\`\${PREFIX}-panel-group\`}>
        <h5>\u5185\u5BB9</h5>
        <InputFiled
          label="\u6807\u9898"
          value={groupConfig.label}
          onChange={(value) => {
            onGroupConfigChange('label', value);
          }}
        />
      </div>
      <div className={\`\${PREFIX}-panel-group\`}>
        <h5>\u6837\u5F0F</h5>
        <Position
          x={groupConfig.x}
          y={groupConfig.y}
          onChange={(key, value) => {
            onGroupConfigChange(key, value);
          }}
        />
        <Size
          width={groupConfig.width}
          height={groupConfig.height}
          onChange={(key, value) => {
            onGroupConfigChange(key, value);
          }}
        />
        <ColorPicker
          label="\u586B\u5145"
          value={groupConfig.fill}
          onChange={(value: string) => {
            onGroupConfigChange('fill', value);
          }}
        />
        <ColorPicker
          label="\u8FB9\u6846"
          value={groupConfig.stroke}
          onChange={(value: string) => {
            onGroupConfigChange('stroke', value);
          }}
        />
        <div className={\`\${PREFIX}-node-text-style\`}>
          <InputNumberFiled
            label="\u5B57\u53F7"
            value={groupConfig.fontSize}
            width={68}
            onChange={(value) => {
              onGroupConfigChange('fontSize', value);
            }}
          />
          <ColorPicker
            value={groupConfig.fontFill}
            onChange={(value: string) => {
              onGroupConfigChange('fontFill', value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const GroupService: React.FC<NsJsonSchemaForm.IControlProps> = (props) => {
  return (
    <FlowchartFormWrapper {...props} type="group">
      {(config, plugin) => <GroupComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  );
};
`},37666:function(a,e){e.Z=`import React, { useEffect, useState } from 'react';

import type { NsGraph, NsJsonSchemaForm } from '@infore/editor';
import { FlowchartFormWrapper } from '@infore/editor';

import { DefaultNodeConfig, PREFIX } from './constants';
import { ColorPicker, InputFiled, InputNumberFiled, Position, Size } from './fields';

const NodeComponent = (props: { config: object; plugin: { updateNode: (value: NsGraph.INodeConfig) => void } }) => {
  const { config, plugin } = props;
  const { updateNode } = plugin;
  const [nodeConfig, setNodeConfig] = useState<NsGraph.INodeConfig>({
    ...DefaultNodeConfig,
    ...config,
  });
  const onNodeConfigChange = async (key: string, value: number | string) => {
    setNodeConfig({
      ...nodeConfig,
      [key]: value,
    });
    // @ts-ignore
    updateNode({
      [key]: value,
    });
  };

  useEffect(() => {
    setNodeConfig({
      ...DefaultNodeConfig,
      ...config,
    });
  }, [config]);

  return (
    <div className={\`\${PREFIX}-panel-body\`}>
      <div className={\`\${PREFIX}-panel-group\`}>
        <h5>\u5185\u5BB9</h5>
        <InputFiled
          label="\u6807\u9898"
          value={nodeConfig.name}
          onChange={(value) => {
            onNodeConfigChange('name', value);
          }}
        />
      </div>
      <div className={\`\${PREFIX}-panel-group\`}>
        <h5>\u6837\u5F0F</h5>
        <Position
          x={nodeConfig.x}
          y={nodeConfig.y}
          onChange={(key, value) => {
            onNodeConfigChange(key, value);
          }}
        />
        <Size
          width={nodeConfig.width}
          height={nodeConfig.height}
          onChange={(key, value) => {
            onNodeConfigChange(key, value);
          }}
        />
        <InputNumberFiled
          label="\u89D2\u5EA6"
          value={nodeConfig.angle}
          width={68}
          onChange={(value) => {
            onNodeConfigChange('angle', value);
          }}
        />
        <ColorPicker
          label="\u586B\u5145"
          value={nodeConfig.fill}
          onChange={(value: string) => {
            onNodeConfigChange('fill', value);
          }}
        />
        <ColorPicker
          label="\u8FB9\u6846"
          value={nodeConfig.stroke}
          onChange={(value: string) => {
            onNodeConfigChange('stroke', value);
          }}
        />
        <div className={\`\${PREFIX}-node-text-style\`}>
          <InputNumberFiled
            label="\u5B57\u53F7"
            value={nodeConfig.fontSize}
            width={68}
            onChange={(value) => {
              onNodeConfigChange('fontSize', value);
            }}
          />
          <ColorPicker
            value={nodeConfig.fontFill}
            onChange={(value: string) => {
              onNodeConfigChange('fontFill', value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const NodeService: React.FC<NsJsonSchemaForm.IControlProps> = (props) => {
  return (
    <FlowchartFormWrapper {...props} type="node">
      {(config, plugin) => <NodeComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  );
};
`},11433:function(a,e){e.Z=`import type { IFlowchartFormPanelProps } from '@infore/editor';

import { CanvasService } from './components/canvas';
import { EdgeService } from './components/edge';
import { GroupService } from './components/group';
import { NodeService } from './components/node';

/** \u9ED8\u8BA4\u652F\u6301\u4FEE\u6539\u6807\u7B7E\u548C\u91CD\u547D\u540D\u529F\u80FD */
export const defaultControlMapService: IFlowchartFormPanelProps['controlMapService'] = (controlMap) => {
  controlMap.set('node-service', NodeService);
  controlMap.set('edge-service', EdgeService);
  controlMap.set('group-service', GroupService);
  controlMap.set('canvas-service', CanvasService);
  return controlMap;
};
`},93669:function(a,e){e.Z=`import type { IFlowchartFormPanelProps, NsJsonSchemaForm } from '@infore/editor';

export const defaultFormSchemaService: IFlowchartFormPanelProps['formSchemaService'] = async (args) => {
  const { targetType } = args;
  const isGroup = args.targetData?.isGroup;

  const groupSchema: NsJsonSchemaForm.ISchema = {
    tabs: [
      {
        name: '\u8BBE\u7F6E',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '\u5206\u7EC4\u540D',
                name: 'group-service',
                shape: 'group-service',
                placeholder: '\u5206\u7EC4\u540D\u79F0',
              },
            ],
          },
        ],
      },
    ],
  };

  const nodeSchema: NsJsonSchemaForm.ISchema = {
    tabs: [
      {
        name: '\u8BBE\u7F6E',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '\u8282\u70B9\u540D',
                name: 'node-service',
                shape: 'node-service',
                placeholder: '\u8282\u70B9\u540D\u79F0',
              },
            ],
          },
        ],
      },
    ],
  };

  const edgeSchema: NsJsonSchemaForm.ISchema = {
    tabs: [
      {
        name: '\u8BBE\u7F6E',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '\u8FB9',
                name: 'edge-service',
                shape: 'edge-service',
                placeholder: '\u8FB9\u540D\u79F0',
              },
            ],
          },
        ],
      },
    ],
  };

  if (isGroup) {
    return groupSchema;
  }

  if (targetType === 'node') {
    return nodeSchema;
  }

  if (targetType === 'edge') {
    return edgeSchema;
  }
  return {
    tabs: [
      {
        name: '\u8BBE\u7F6E',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '',
                name: 'canvas-service',
                shape: 'canvas-service',
              },
            ],
          },
        ],
      },
    ],
  } as NsJsonSchemaForm.ISchema;
};
`},2002:function(a,e){e.Z=`import { Background, FormPanel, GraphEditor, Toolbar, TreeNodePanel } from '@infore/editor';

import { defaultControlMapService } from './form-panel/control-map-service';
import { defaultFormSchemaService } from './form-panel/form-schema-service';
import { shapeConfig } from './meta';

export default () => {
  return (
    <div style={{ height: 800 }}>
      <GraphEditor
        meta={{
          shapeConfig,
        }}
        position={{ top: 40, left: 240, right: 240 }}
      >
        <Background
          url="https://minio.dev.inrobot.cloud/map/1626415200/fb2_03.png"
          width={2565}
          height={1839}
        />
        <Toolbar
          saveGraph={(graphData, meta) => {
            console.log(JSON.stringify(graphData));
            console.log(JSON.stringify(meta));
          }}
        />
        <TreeNodePanel position={{ top: 40 }} />
        <FormPanel
          position={{ top: 40 }}
          controlMapService={defaultControlMapService}
          formSchemaService={defaultFormSchemaService}
        />
      </GraphEditor>
    </div>
  );
};
`},63314:function(a,e){e.Z=`export default [
  {
    name: '\u5145\u7535\u7B49\u5F85\u533A',
    area_shape: 'POLYGON',
    area_type: 'CHARGING_WAITING_AREA',
    fill: '#1B8E31',
    stroke: '#1B8E31',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u7535\u68AF\u7B49\u5F85\u533A',
    area_shape: 'POLYGON',
    area_type: 'ELEVATOR_WAITING_AREA',
    fill: '#30686F',
    stroke: '#30686F',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u95F8\u673A\u7B49\u5F85\u533A',
    area_shape: 'POLYGON',
    area_type: 'GATE_WAITING_AREA',
    fill: '#129FAE',
    stroke: '#129FAE',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u81EA\u52A8\u95E8\u7B49\u5F85\u533A',
    area_shape: 'POLYGON',
    area_type: 'AUTO_DOOR_WAITING_AREA',
    fill: '#DAB94C',
    stroke: '#DAB94C',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u7981\u6B62\u65CB\u8F6C\u533A',
    area_shape: 'POLYGON',
    area_type: 'NO_ROTATION_AREA',
    fill: '#D41F8C',
    stroke: '#D41F8C',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u7981\u6B62\u9A76\u5165\u533A',
    area_shape: 'POLYGON',
    area_type: 'FORBIDDEN_AREA',
    fill: '#EF1414',
    stroke: '#EF1414',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u7535\u68AF\u5185\u90E8\u533A',
    area_shape: 'POLYGON',
    area_type: 'ELEVATOR_INSIDE_AREA',
    fill: '#18DBEB',
    stroke: '#18DBEB',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u5145\u7535\u533A',
    area_shape: 'POLYGON',
    area_type: 'CHARGE_AREA',
    fill: '#25E14A',
    stroke: '#25E14A',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u95F8\u673A\u533A',
    area_shape: 'POLYGON',
    area_type: 'GATE_AREA',
    fill: '#129FAE',
    stroke: '#129FAE',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u51CF\u901F\u533A',
    area_shape: 'POLYGON',
    area_type: 'DECELERATION_AREA',
    fill: '#F48313',
    stroke: '#F48313',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u6807\u8BB0\u533A',
    area_shape: 'POLYGON',
    area_type: 'LABEL_AREA',
    fill: '#F0AA20',
    stroke: '#F0AA20',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
];
`},77629:function(a,e){e.Z=`import Area from './area';
// import Blank from './blank';
import Line from './line';
import Point from './point';

export const shapeConfig = [
  {
    id: 'point_type',
    header: '\u7AD9\u70B9',
    children: Point,
  },
  {
    id: 'area_type',
    header: '\u533A\u57DF',
    children: Area,
  },
  {
    id: 'line_type',
    header: '\u7EBF\u578B\u8BBE\u5907',
    children: Line,
  },
  // {
  //   id: 'blank_area_type',
  //   header: '\u64E6\u9664',
  //   children: Blank,
  // },
];
`},96984:function(a,e){e.Z=`export default [
  {
    name: '\u95E8',
    line_shape: 'POLYGONAL_LINE',
    line_type: 'AUTO_DOOR',
    line_node: true,
    upperLimit: 2,
    closure: false,
    resizing: true,
    image: require('./images/\u95E8.svg'),
    isDisabled: true,
    command: 'GRAPH_CREATE_CUSTOM_EDGE',
    style: 'solid',
    stroke: '#2495F1',
    strokeWidth: 1.8,
  },
  {
    name: '\u865A\u62DF\u5899',
    line_shape: 'POLYGONAL_LINE',
    line_type: 'VIRTUAL_WALL',
    line_node: true,
    closure: false,
    resizing: true,
    image: require('./images/\u865A\u62DF\u5899.svg'),
    isDisabled: true,
    command: 'GRAPH_CREATE_CUSTOM_EDGE',
    style: 'dash',
    stroke: '#EF1414',
    strokeWidth: 1.8,
  },
];
`},73202:function(a,e){e.Z=`export default [
  {
    name: '\u8282\u70B9',
    point_type: 'NODE_POINT',
    fill: 'none',
    stroke: '#101E49',
    strokeWidth: '1.65',
    resizing: false,
    rotating: true,
    interacting: true,
    preserveAspectRatio: true,
    width: 20,
    height: 20,
  },
  {
    name: '\u505C\u9760\u70B9',
    point_type: 'STOP_POINT',
    fill: 'none',
    stroke: '#32A0F7',
    strokeWidth: '1.65',
    resizing: false,
    rotating: true,
    interacting: true,
    preserveAspectRatio: true,
    width: 20,
    height: 20,
  },
  {
    name: '\u5145\u7535\u7AD9',
    point_type: 'CHARGE_POINT',
    fill: 'none',
    stroke: '#25E14A',
    strokeWidth: '1.65',
    resizing: false,
    rotating: true,
    interacting: true,
    preserveAspectRatio: true,
    width: 20,
    height: 20,
  },
  {
    name: '\u6807\u8BB0\u70B9',
    point_type: 'MARKER_POINT',
    fill: 'none',
    stroke: '#F0AA20',
    strokeWidth: '1.65',
    resizing: false,
    rotating: true,
    interacting: true,
    preserveAspectRatio: true,
    width: 20,
    height: 20,
  },
  {
    name: '\u4F20\u9001\u70B9',
    point_type: 'TRANSFER_POINT',
    fill: 'none',
    stroke: '#18DBEB',
    strokeWidth: '1.65',
    resizing: false,
    rotating: true,
    interacting: true,
    preserveAspectRatio: true,
    width: 20,
    height: 20,
  },
  {
    name: '\u5DE5\u4F5C\u70B9',
    point_type: 'OPERATE_POINT',
    fill: 'none',
    stroke: '#3944F0',
    strokeWidth: '1.65',
    resizing: false,
    rotating: true,
    interacting: true,
    preserveAspectRatio: true,
    width: 20,
    height: 20,
  },
];
`},20703:function(a,e){e.Z=`import {
  MODELS,
  randomInt,
  useModelAsync,
  usePanelContext,
  useXFlowApp,
  uuidv4,
  WorkspacePanel,
  XFlowNodeCommands,
} from '@infore/editor';
import type { IPosition, NsNodeCmd } from '@infore/editor';

import { Button, Card, Form, Input, message, Space } from 'antd';

export interface IPanelProps {
  position: IPosition;
}

export const ModelServieCard = () => {
  const app = useXFlowApp();
  const [cells] = useModelAsync<MODELS.SELECTED_NODES.IState>({
    getModel: async () => MODELS.SELECTED_NODES.getModel(app.modelService),
    initialState: [],
  });
  return (
    <Card title="Model Service " size="small">
      <div> \u5F53\u524D\u9009\u4E2D\u8282\u70B9\u6570\u91CF: {cells.length} </div>
    </Card>
  );
};

export const CommandServieCard = () => {
  const app = useXFlowApp();
  const onFinish = (values: { label: string }) => {
    if (!values.label) {
      return message.warn(\`\u8BF7\u8F93\u5165\u8282\u70B9\u540D\`);
    }
    return app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {
      nodeConfig: {
        id: uuidv4(),
        label: values.label,
        x: randomInt(50, 100),
        y: randomInt(50, 100),
        width: 160,
        height: 30,
        shape: 'rect',
      },
    });
  };

  return (
    <Card title="Command Service " size="small">
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name="label" label="\u8282\u70B9\u540D" required requiredMark>
          <Input placeholder="node label" />
        </Form.Item>
        <Form.Item name="label">
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            \u6267\u884CAddNode\u547D\u4EE4
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export const X6GraphCard = () => {
  const app = useXFlowApp();
  const callX6Api = async () => {
    const x6 = await app.getGraphInstance();
    const cells = x6.getCells();
    console.log('x6 graph', x6);
    message.info(\`x6 \u753B\u5E03\u5DF2\u6709cell: \${cells.length} \u4E2A\`);
    // \u8BF7\u52FF\u7ED5\u8FC7command \u76F4\u63A5\u4FEE\u6539\u753B\u5E03\u6570\u636E
  };
  return (
    <Card title="use X6 Graph " size="small">
      <Button type="primary" htmlType="submit" onClick={callX6Api} style={{ width: '100%' }}>
        \u83B7\u53D6X6 Cells \u6570\u91CF
      </Button>
    </Card>
  );
};

export const CustomPanel: React.FC = () => {
  const { propsProxy } = usePanelContext();
  const app = useXFlowApp();
  const props = propsProxy.getValue();
  console.log('can use root component props:', props);
  console.log('can use app', app);

  return (
    <Space direction="vertical">
      <ModelServieCard />
      <CommandServieCard />
      <X6GraphCard />
    </Space>
  );
};

export default (props: IPanelProps) => {
  return (
    <WorkspacePanel {...props}>
      <CustomPanel />
    </WorkspacePanel>
  );
};
`},61870:function(a,e){e.Z=`import React from 'react';

import { GraphEditor } from '@infore/editor';

import CustomPanel from './custom-panel';

const XFlowDemo: React.FC = () => {
  return (
    <GraphEditor position={{ top: 0, bottom: 0, left: 162, right: 200 }}>
      <CustomPanel position={{ top: 0, bottom: 0, right: 0, width: 200 }} />
    </GraphEditor>
  );
};

export default XFlowDemo;
`},45875:function(a,e){e.Z=`import { useEffect, useState } from 'react';

import type { Cell, Edge, IApplication, NsEdgeCmd, NsGraph, NsNodeCmd } from '@infore/editor';
import { LayoutPanel, Nodes, useXFlowApp, XFlowEdgeCommands, XFlowNodeCommands } from '@infore/editor';

import { DatabaseOutlined, LeftOutlined, RightOutlined, RiseOutlined } from '@ant-design/icons';
import { useAsyncEffect } from 'ahooks';
import { Button, Card, Col, List, message, Row, Space, Steps, Tabs } from 'antd';
import debounce from 'lodash/debounce';

import { Angle, InputFiled, Position, SelectField, Size } from '../fields';

const types = {
  nodes: ['charging-station', 'marked-point', 'stop-point', 'way-point', 'work-station'],
  edges: ['line', 'SecondOrderBezierCurve', 'ThirdOrderBezierCurve'],
  areas: ['circle-area', 'square-area', 'custom-area'],
  walls: ['virtual-wall', 'custom-wall'],
};

/** \u8282\u70B9\u6E32\u67D3 */
const renderNode = (cell: Cell) => {
  const node = cell.clone();
  if (node.isNode()) {
    node.updateData({
      label: undefined,
      width: 20,
      height: 20,
      fontSize: 12,
    });
    node.size({
      width: 20,
      height: 20,
    });
  }

  let children;
  switch (cell.data?.type) {
    case 'custom-area':
      children = (
        <div
          style={{
            height: 38,
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <DatabaseOutlined style={{ color: '#000', fontSize: 16, marginTop: 8 }} />
          <div
            style={{
              position: 'absolute',
              bottom: -8,
              left: '-50%',
              fontSize: 12,
              color: '#000',
              width: '200%',
            }}
          >
            \u533A\u57DF
          </div>
        </div>
      );
      break;
    case 'custom-wall':
      children = (
        <div
          style={{
            height: 38,
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <RiseOutlined style={{ color: '#000', fontSize: 16, marginTop: 8 }} />
          <div
            style={{
              position: 'absolute',
              bottom: -8,
              left: '-50%',
              fontSize: 12,
              color: '#000',
              width: '200%',
            }}
          >
            \u5899
          </div>
        </div>
      );
      break;
    case 'circle-area':
      // @ts-ignore
      children = <Nodes.CircleArea size={{ width: 20, height: 20 }} data={{}} position={{ x: 0, y: 0 }} />;
      break;
    case 'square-area':
      // @ts-ignore
      children = <Nodes.SquareArea size={{ width: 20, height: 20 }} data={{}} position={{ x: 0, y: 0 }} />;
      break;
    case 'virtual-wall':
      // @ts-ignore
      children = <Nodes.VirtualWall size={{ width: 20, height: 20 }} data={{}} position={{ x: 0, y: 0 }} />;
      break;
    default:
      // @ts-ignore
      if (!children && cell.component) children = cell.component(node);
      break;
  }
  return children && <div style={{ position: 'relative', top: -6, width: 38, textAlign: 'center' }}> {children} </div>;
};

/** \u66F4\u65B0 cell */
const updateCell = (
  app: IApplication,
  cell: Cell,
  config: Record<string, unknown>,
  options: Record<string, unknown> = {},
) => {
  if (cell.isNode()) {
    app.executeCommand<NsNodeCmd.UpdateNode.IArgs>(XFlowNodeCommands.UPDATE_NODE.id, {
      nodeConfig: {
        ...cell.data,
        ...config,
      },
      options,
    });
  }
  if (cell.isEdge()) {
    app.executeCommand<NsEdgeCmd.UpdateEdge.IArgs>(XFlowEdgeCommands.UPDATE_EDGE.id, {
      edgeConfig: {
        ...cell.data,
        ...config,
      },
      options,
    });
  }
};

/** \u5143\u7D20\u5217\u8868 */
const CanvasView = ({ data }: { data: Record<string, Cell[]> }) => {
  const app = useXFlowApp();
  const { nodes, edges, areas, walls } = data;

  return (
    <Tabs centered>
      <Tabs.TabPane tab="\u70B9\u4F4D" key="nodes">
        <List
          dataSource={nodes}
          renderItem={(cell) => (
            <Card bordered={false} size="small">
              <InputFiled
                label={renderNode(cell)}
                value={cell.data.label}
                onBlur={(value) => {
                  updateCell(app, cell, { label: value });
                }}
              />
            </Card>
          )}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="\u8DEF\u5F84" key="edges">
        <List
          dataSource={edges}
          renderItem={(cell) => (
            <Card bordered={false} size="small">
              <Row align="middle" justify="space-around">
                {
                  // @ts-ignore
                  renderNode(cell.getSourceNode())
                }
                {cell.data.arrow !== 'target' && <LeftOutlined />}
                <Col span={10}>
                  <InputFiled
                    label={false}
                    value={cell.data.label}
                    onBlur={(value) => {
                      updateCell(app, cell, { label: value });
                    }}
                  />
                </Col>
                {cell.data.arrow !== 'source' && <RightOutlined />}
                {
                  // @ts-ignore
                  renderNode(cell.getTargetNode())
                }
              </Row>
            </Card>
          )}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="\u533A\u57DF" key="areas">
        <List
          dataSource={areas}
          renderItem={(cell) => (
            <Card bordered={false} size="small">
              <InputFiled
                label={renderNode(cell)}
                value={cell.data.label}
                onBlur={(value) => {
                  updateCell(app, cell, { label: value });
                }}
              />
            </Card>
          )}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="\u865A\u62DF\u5899" key="walls">
        <List
          dataSource={walls}
          renderItem={(cell) => (
            <Card bordered={false} size="small">
              <InputFiled
                label={renderNode(cell)}
                value={cell.data.label}
                onBlur={(value) => {
                  updateCell(app, cell, { label: value });
                }}
              />
            </Card>
          )}
        />
      </Tabs.TabPane>
    </Tabs>
  );
};

/** \u8282\u70B9\u5C5E\u6027 */
const NodeView = ({ cell }: { cell: Cell }) => {
  const app = useXFlowApp();

  useEffect(() => {
    if (types.areas.includes(cell.data.type) && !cell.data.areaType) {
      updateCell(app, cell, { areaType: 'prohibit' });
    }
  }, [cell.data.id]);

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      {types.areas.includes(cell.data.type) && (
        <SelectField
          label={renderNode(cell)}
          options={[
            { label: '\u7981\u6B62\u9A76\u5165\u533A', value: 'prohibit' },
            { label: '\u51CF\u901F\u533A', value: 'slow-down' },
          ]}
          value={cell.data.areaType}
          onChange={(value) => {
            updateCell(app, cell, { areaType: value });
          }}
        />
      )}
      {renderNode(cell) && (
        <InputFiled
          label={types.areas.includes(cell.data.type) ? '\u540D\u79F0' : renderNode(cell)}
          value={cell.data.label}
          onBlur={(value) => {
            updateCell(app, cell, { label: value });
          }}
        />
      )}
      {/* <Position
        label="\u5750\u6807"
        x={cell.data.x}
        y={cell.data.y}
        onBlur={(key, value) => {
          updateCell(app, cell, { [key]: value });
        }}
      /> */}
      <Position
        label="\u4E2D\u5FC3"
        x={cell.data.bbox.center.x}
        y={cell.data.bbox.center.y}
        onBlur={(key, value) => {
          const bbox = cell.data.bbox;
          bbox.center[key] = value;
          updateCell(app, cell, { zIndex: cell.data.zIndex++, bbox }, { bbox: 'center' });
        }}
      />
      {cell.data.resizing !== false && (
        <Size
          label="\u9AD8\u5BBD"
          width={cell.data.bbox.width}
          height={cell.data.bbox.height}
          onBlur={(key, value) => {
            const bbox = cell.data.bbox;
            bbox[key] = value;
            updateCell(app, cell, { zIndex: cell.data.zIndex++, bbox }, { bbox: key });
          }}
        />
      )}
      {cell.data.rotating !== false && (
        <Angle
          angle={cell.data.bbox.angle}
          onBlur={(value) => {
            const bbox = cell.data.bbox;
            bbox.angle = value;
            updateCell(app, cell, { zIndex: cell.data.zIndex++, bbox }, { bbox: 'angle' });
          }}
        />
      )}
    </Space>
  );
};

/** \u8FB9\u5C5E\u6027 */
const EdgeView = ({ cell }: { cell: Edge }) => {
  const app = useXFlowApp();

  useEffect(() => {
    if (types.areas.includes(cell.data.type) && !cell.data.areaType) {
      updateCell(app, cell, { areaType: 'prohibit' });
    }
  }, [cell.data.id]);

  return (
    <Steps progressDot current={3} direction="vertical">
      {types.areas.includes(cell.data.type) && (
        <SelectField
          label={renderNode(cell)}
          options={[
            { label: '\u7981\u6B62\u9A76\u5165\u533A', value: 'prohibit' },
            { label: '\u51CF\u901F\u533A', value: 'slow-down' },
          ]}
          value={cell.data.areaType}
          onChange={(value) => {
            updateCell(app, cell, { areaType: value });
          }}
        />
      )}
      {cell.getSourceNode() && <Steps.Step title="\u8D77\u70B9" description={<NodeView cell={cell.getSourceNode()!} />} />}
      <Steps.Step
        title="\u8DEF\u5F84"
        description={
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <InputFiled
              label="\u540D\u79F0"
              value={cell.data.label}
              onBlur={(value) => {
                updateCell(app, cell, { label: value });
              }}
            />
            {cell.data.arrow !== 'none' && (
              <SelectField
                label="\u65B9\u5411"
                value={cell.data.arrow}
                options={[
                  {
                    label: '\u6B63\u5411',
                    value: 'target',
                  },
                  {
                    label: '\u9006\u5411',
                    value: 'source',
                  },
                  {
                    label: '\u53CC\u5411',
                    value: 'both',
                  },
                ]}
                onChange={(value) => {
                  updateCell(app, cell, { arrow: value });
                }}
              />
            )}
            {['POLYGONAL_LINE', 'BESSEL_CURVE', 'ROUNDED', 'ARC'].includes(cell.data.type) && (
              <SelectField
                label="\u7C7B\u578B"
                value={cell.data.type}
                options={[
                  {
                    label: '\u6298\u7EBF',
                    value: 'POLYGONAL_LINE',
                  },
                  {
                    label: '\u4E09\u9636\u8D1D\u585E\u5C14\u66F2\u7EBF',
                    value: 'BESSEL_CURVE',
                  },
                  {
                    label: '\u5706\u89D2\u66F2\u7EBF',
                    value: 'ROUNDED',
                  },
                  {
                    label: '\u5F27\u7EBF',
                    value: 'ARC',
                  },
                ]}
                onChange={(value) => {
                  updateCell(app, cell, { type: value });
                }}
              />
            )}
            <Space direction="vertical" size="large" style={{ display: 'flex' }}>
              {cell.data.bbox.vertices?.map((item: { x: number; y: number }, index: number) => (
                <Position
                  label={\`\u70B9-\${index + 1}\`}
                  key={\`\${index}\`}
                  x={item.x}
                  y={item.y}
                  onBlur={(key, value) => {
                    const bbox = cell.data.bbox;
                    bbox.vertices[index][key] = value;
                    updateCell(
                      app,
                      cell,
                      { zIndex: cell.data.zIndex ? cell.data.zIndex++ : 2, bbox },
                      { bbox: 'vertices' },
                    );
                  }}
                />
              ))}
            </Space>
          </Space>
        }
      />
      {cell.getTargetNode() && <Steps.Step title="\u7EC8\u70B9" description={<NodeView cell={cell.getTargetNode()!} />} />}
    </Steps>
  );
};

export type ISaveGraph = (graphData: NsGraph.IGraphData, meta: Record<string, unknown>) => void;

export default ({
  saveGraph,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transRosCoordsToMap,
}: {
  saveGraph: ISaveGraph;
  transRosCoordsToMap: (point: { x: number; y: number }) => { x: number; y: number };
}) => {
  const app = useXFlowApp();

  const [type, setType] = useState<string>('list');
  const [cellData, setCellData] = useState<Record<string, Cell[]>>({
    nodes: [],
    edges: [],
    areas: [],
    walls: [],
  });
  const [selectedCell, setSelectedCell] = useState<Cell>();

  const graphDataChange = async () => {
    const graphInstance = await app.getGraphInstance();
    const getCells = debounce(() => {
      try {
        const cells = graphInstance.getCells();
        setCellData({
          nodes: cells.filter((cell) => types.nodes.includes(cell.data?.type)),
          edges: cells.filter((cell) => types.edges.includes(cell.data?.type)),
          areas: cells.filter((cell) => types.areas.includes(cell.data?.type)),
          walls: cells.filter((cell) => types.walls.includes(cell.data?.type)),
        });
      } catch (error) {}
    }, 100);
    graphInstance.on('cell:added', getCells);
    graphInstance.on('cell:removed', getCells);
    graphInstance.on('cell:changed', getCells);
    graphInstance.on('cell:selected', ({ cell }) => {
      if (!cell.data) return;
      if (cell.data.type === 'robot' || cell.shape === 'xflow') return;
      setSelectedCell(cell);
      setType('cell');
    });
    graphInstance.on('cell:unselected', () => {
      setSelectedCell(undefined);
      setType('list');
    });
  };

  useAsyncEffect(async () => {
    if (app) await graphDataChange();
  }, [app]);

  return (
    <LayoutPanel
      position={{ top: 40, right: 0, bottom: 0, width: 280 }}
      title={false}
      footer={
        <Row align="middle" justify="space-around">
          <Button
            onClick={() => {
              message.info('\u53D6\u6D88');
            }}
          >
            \u53D6\u6D88
          </Button>
          <Button
            type="primary"
            onClick={async () => {
              app.executeCommand('SAVE_GRAPH_DATA', {
                saveGraphDataService: saveGraph,
              });
            }}
          >
            \u4FDD\u5B58
          </Button>
        </Row>
      }
    >
      <Tabs centered activeKey={type} onChange={setType}>
        <Tabs.TabPane tab="\u5143\u7D20\u5217\u8868" key="list">
          <CanvasView data={cellData} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="\u5C5E\u6027\u7F16\u8F91" key="cell" disabled={!selectedCell}>
          <Card bordered={false} size="small">
            {selectedCell?.isNode() && <NodeView key={selectedCell.id} cell={selectedCell} />}
            {selectedCell?.isEdge() && <EdgeView key={selectedCell.id} cell={selectedCell} />}
          </Card>
        </Tabs.TabPane>
      </Tabs>
    </LayoutPanel>
  );
};
`},92183:function(a,e){e.Z=`import React from 'react';

import { Item } from './position';

interface IProps {
  angle?: number;
  onBlur?: (value: number) => void;
}

const Angle: React.FC<IProps> = (props) => {
  const { angle, onBlur } = props;

  return (
    <div className="group">
      <label>\u89D2\u5EA6</label>
      <div className="split">
        <Item
          addonBefore="\xB0"
          value={angle}
          onBlurItem={(value: number) => {
            onBlur?.(value);
          }}
        />
      </div>
    </div>
  );
};

export default Angle;
`},47054:function(a,e){e.Z=`.group {
  display: flex;
  flex-direction: row;
  align-items: center;

  input,
  select {
    height: 24px;
    line-height: 1;
  }
}

.group > label {
  margin-right: 8px;
  word-break: keep-all;
}

.split {
  display: flex;
  grid-gap: 8px;
}

.addon-before-group {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  vertical-align: center;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}

.addon-before-group > span {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 20px;
  color: #000000d9;
  line-height: 24px;
  text-align: center;
  background-color: #fafafa;
  cursor: pointer;
}

.addon-before-group:hover > span {
  display: none;
}
`},2259:function(a,e){e.Z=`import Angle from './angle';
import InputFiled from './input';
import InputNumberFiled from './input-number';
import Position from './position';
import SelectField from './select';
import Size from './size';

import './index.less';

export { Angle, InputFiled, InputNumberFiled, Size, Position, SelectField };
`},99256:function(a,e){e.Z=`import React, { useEffect, useState } from 'react';

import { InputNumber } from 'antd';

interface IProps {
  label?: string;
  value?: number;
  min?: number;
  width?: number;
  onBlur?: (value: number) => void;
}

const InputNumberFiled: React.FC<IProps> = (props) => {
  const { label, value, onBlur, min, width } = props;
  const [number, setNumber] = useState<number | null>();
  useEffect(() => {
    setNumber(value);
  }, [value]);
  return (
    <div className="group">
      {label && <label>{label}</label>}
      <InputNumber
        value={number}
        min={min}
        style={{
          width,
          height: 24,
        }}
        onChange={setNumber}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
          onBlur?.(Number(e.target.value));
        }}
      />
    </div>
  );
};

export default InputNumberFiled;
`},7331:function(a,e){e.Z=`import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';

import { Input } from 'antd';

interface IProps {
  label?: string | ReactNode;
  value?: string;
  onBlur?: (value: string) => void;
}

const InputFiled: React.FC<IProps> = (props) => {
  const { label = '\u6807\u7B7E', value, onBlur } = props;
  const [string, setString] = useState<string>();
  useEffect(() => {
    setString(value);
  }, [value]);
  return (
    <div className="group">
      <label>{label}</label>
      <Input
        value={string}
        style={{
          height: 24,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setString(e.target.value);
        }}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
          onBlur?.(e.target.value);
        }}
      />
    </div>
  );
};

export default InputFiled;
`},97151:function(a,e){e.Z=`import React, { useEffect, useState } from 'react';

import { InputNumber } from 'antd';

interface IProps {
  label?: string | React.ReactNode;
  x?: number;
  y?: number;
  onBlur?: (key: string, value: number) => void;
}

export const Item = ({
  value,
  onBlurItem,
  addonBefore,
}: {
  value?: number;
  onBlurItem: (value: number) => void;
  addonBefore: string;
}) => {
  const [number, setNumber] = useState<number | null>();
  useEffect(() => {
    setNumber(value);
  }, [value]);
  return (
    <div className="addon-before-group">
      <InputNumber
        value={number}
        style={{ height: 24, border: 'none' }}
        onChange={setNumber}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
          onBlurItem(Number(e.target.value));
        }}
      />
      <span>{addonBefore}</span>
    </div>
  );
};

const Position: React.FC<IProps> = (props) => {
  const { label = '\u4F4D\u7F6E', x, y, onBlur } = props;

  return (
    <div className="group">
      <label>{label}</label>
      <div className="split">
        <Item
          addonBefore="X"
          value={x}
          onBlurItem={(value: number) => {
            onBlur?.('x', value);
          }}
        />
        <Item
          addonBefore="Y"
          value={y}
          onBlurItem={(value: number) => {
            onBlur?.('y', value);
          }}
        />
      </div>
    </div>
  );
};

export default Position;
`},86974:function(a,e){e.Z=`import type { ReactNode } from 'react';
import React from 'react';

import { Select } from 'antd';

interface IProps {
  label?: string | ReactNode;
  value?: string;
  options?: {
    label: string | number;
    value: string | number;
  }[];
  width?: number | string;
  onChange?: (value: string) => void;
}

const SelectField: React.FC<IProps> = (props) => {
  const { label = '\u7BAD\u5934', value, onChange, options = [], width = '100%' } = props;
  return (
    <div className="group">
      <label>{label}</label>
      <Select
        size="small"
        value={value}
        style={{
          width,
          height: 24,
        }}
        getPopupContainer={(trigger) => trigger.parentNode}
        optionFilterProp="children"
        onChange={(v: string) => {
          onChange?.(v);
        }}
        filterOption={(input, option) => {
          const { label: text = '' } = option as { label: string | number };
          if (typeof text === 'string') {
            return text.toLowerCase().indexOf(input.toLowerCase()) >= 0;
          }
          return text.toString().indexOf(input.toLowerCase()) >= 0;
        }}
        options={options}
      />
    </div>
  );
};

export default SelectField;
`},37032:function(a,e){e.Z=`import React from 'react';

import { Item } from './position';

interface IProps {
  label?: string | React.ReactNode;
  width?: number;
  height?: number;
  onBlur?: (key: string, value: number) => void;
}

const Size: React.FC<IProps> = (props) => {
  const { label = '\u5C3A\u5BF8', width, height, onBlur } = props;

  return (
    <div className="group">
      <label>{label}</label>
      <div className="split">
        <Item
          addonBefore="W"
          value={width}
          onBlurItem={(value: number) => {
            onBlur?.('width', value);
          }}
        />
        <Item
          addonBefore="H"
          value={height}
          onBlurItem={(value: number) => {
            onBlur?.('height', value);
          }}
        />
      </div>
    </div>
  );
};

export default Size;
`},13521:function(a,e){e.Z=`{
  "graphData": {
    "nodes": [
      {
        "id": "1",
        "label": "\u8DEF\u5F84\u70B9-1",
        "type": "way-point",
        "vertices": [],
        "x": 247,
        "y": 86,
        "bbox": {
          "topLeft": { "x": "8.622", "y": "1.907" },
          "topRight": { "x": "9.622", "y": "1.907" },
          "bottomLeft": { "x": "8.622", "y": "0.907" },
          "bottomRight": { "x": "9.622", "y": "0.907" },
          "center": { "x": "9.122", "y": "1.407" },
          "height": "1.000",
          "width": "1.000",
          "angle": 90
        },
        "angle": 0,
        "index": "1"
      },
      {
        "id": "2",
        "label": "\u505C\u9760\u70B9-1",
        "type": "stop-point",
        "vertices": [],
        "x": 24,
        "y": 86,
        "bbox": {
          "topLeft": { "x": "-2.528", "y": "1.907" },
          "topRight": { "x": "-1.528", "y": "1.907" },
          "bottomLeft": { "x": "-2.528", "y": "0.907" },
          "bottomRight": { "x": "-1.528", "y": "0.907" },
          "center": { "x": "-2.028", "y": "1.407" },
          "height": "1.000",
          "width": "1.000",
          "angle": 90
        },
        "angle": 0,
        "index": "1"
      },
      {
        "id": "4",
        "label": "\u8DEF\u5F84\u70B9-2",
        "type": "way-point",
        "vertices": [],
        "x": 247,
        "y": 263,
        "bbox": {
          "topLeft": { "x": "8.622", "y": "-6.943" },
          "topRight": { "x": "9.622", "y": "-6.943" },
          "bottomLeft": { "x": "8.622", "y": "-7.943" },
          "bottomRight": { "x": "9.622", "y": "-7.943" },
          "center": { "x": "9.122", "y": "-7.443" },
          "height": "1.000",
          "width": "1.000",
          "angle": 90
        },
        "angle": 0,
        "index": "2"
      },
      {
        "id": "5",
        "label": "\u8DEF\u5F84\u70B9-3",
        "type": "way-point",
        "vertices": [],
        "x": 247,
        "y": 430,
        "bbox": {
          "topLeft": { "x": "8.622", "y": "-15.293" },
          "topRight": { "x": "9.622", "y": "-15.293" },
          "bottomLeft": { "x": "8.622", "y": "-16.293" },
          "bottomRight": { "x": "9.622", "y": "-16.293" },
          "center": { "x": "9.122", "y": "-15.793" },
          "height": "1.000",
          "width": "1.000",
          "angle": 90
        },
        "angle": 0,
        "index": "3"
      },
      {
        "id": "6",
        "label": "\u5145\u7535\u7AD9-1",
        "type": "charging-station",
        "vertices": [],
        "x": 24,
        "y": 430,
        "bbox": {
          "topLeft": { "x": "-2.528", "y": "-15.293" },
          "topRight": { "x": "-1.528", "y": "-15.293" },
          "bottomLeft": { "x": "-2.528", "y": "-16.293" },
          "bottomRight": { "x": "-1.528", "y": "-16.293" },
          "center": { "x": "-2.028", "y": "-15.793" },
          "height": "1.000",
          "width": "1.000",
          "angle": 90
        },
        "angle": 0,
        "index": "1"
      },
      {
        "id": "7",
        "label": "\u4F5C\u4E1A\u7AD9-1",
        "type": "work-station",
        "vertices": [],
        "x": 115,
        "y": 430,
        "bbox": {
          "topLeft": { "x": "2.022", "y": "-15.293" },
          "topRight": { "x": "3.022", "y": "-15.293" },
          "bottomLeft": { "x": "2.022", "y": "-16.293" },
          "bottomRight": { "x": "3.022", "y": "-16.293" },
          "center": { "x": "2.522", "y": "-15.793" },
          "height": "1.000",
          "width": "1.000",
          "angle": 90
        },
        "angle": 0,
        "index": "1"
      },
      {
        "id": "14",
        "label": "\u65B9\u533A\u57DF-1",
        "type": "square-area",
        "vertices": [],
        "x": 578,
        "y": 101.5,
        "bbox": {
          "topLeft": { "x": "25.172", "y": "1.132" },
          "topRight": { "x": "26.172", "y": "1.132" },
          "bottomLeft": { "x": "25.172", "y": "0.132" },
          "bottomRight": { "x": "26.172", "y": "0.132" },
          "center": { "x": "25.672", "y": "0.632" },
          "height": "1.000",
          "width": "1.000",
          "angle": 90
        },
        "angle": 0,
        "index": "1",
        "width": 20,
        "height": 20
      },
      {
        "id": "15",
        "label": "\u5706\u533A\u57DF-1",
        "type": "circle-area",
        "vertices": [],
        "x": 779,
        "y": 96,
        "bbox": {
          "topLeft": { "x": "35.222", "y": "1.407" },
          "topRight": { "x": "36.222", "y": "1.407" },
          "bottomLeft": { "x": "35.222", "y": "0.407" },
          "bottomRight": { "x": "36.222", "y": "0.407" },
          "center": { "x": "35.722", "y": "0.907" },
          "height": "1.000",
          "width": "1.000",
          "angle": 90
        },
        "angle": 0,
        "index": "1",
        "width": 20,
        "height": 20
      },
      {
        "id": "16",
        "label": "\u865A\u62DF\u5899-1",
        "type": "virtual-wall",
        "vertices": [],
        "x": 578,
        "y": 582,
        "bbox": {
          "topLeft": { "x": "25.172", "y": "-22.893" },
          "topRight": { "x": "26.172", "y": "-22.893" },
          "bottomLeft": { "x": "25.172", "y": "-23.893" },
          "bottomRight": { "x": "26.172", "y": "-23.893" },
          "center": { "x": "25.672", "y": "-23.393" },
          "height": "1.000",
          "width": "1.000",
          "angle": 90
        },
        "angle": 0,
        "index": "1",
        "width": 20,
        "height": 20
      },
      {
        "id": "20",
        "label": "\u65B9\u533A\u57DF-2",
        "type": "square-area",
        "vertices": [],
        "x": 892.5012719999999,
        "y": 314.99291999999997,
        "bbox": {
          "topLeft": { "x": "40.897", "y": "-9.543" },
          "topRight": { "x": "41.897", "y": "-9.543" },
          "bottomLeft": { "x": "40.897", "y": "-10.543" },
          "bottomRight": { "x": "41.897", "y": "-10.543" },
          "center": { "x": "41.397", "y": "-10.043" },
          "height": "1.000",
          "width": "1.000",
          "angle": 90
        },
        "angle": 0,
        "index": "2",
        "width": 20,
        "height": 20
      },
      {
        "id": "23",
        "label": "\u5145\u7535\u7AD9-2",
        "type": "charging-station",
        "vertices": [],
        "x": 345,
        "y": 353,
        "bbox": {
          "topLeft": { "x": "13.522", "y": "-11.443" },
          "topRight": { "x": "14.522", "y": "-11.443" },
          "bottomLeft": { "x": "13.522", "y": "-12.443" },
          "bottomRight": { "x": "14.522", "y": "-12.443" },
          "center": { "x": "14.022", "y": "-11.943" },
          "height": "1.000",
          "width": "1.000",
          "angle": 90
        },
        "angle": 0,
        "index": "2"
      },
      {
        "id": "26",
        "label": "\u5706\u533A\u57DF-3",
        "type": "circle-area",
        "vertices": [],
        "x": 960,
        "y": 71,
        "bbox": {
          "topLeft": { "x": "44.272", "y": "2.657" },
          "topRight": { "x": "46.772", "y": "2.657" },
          "bottomLeft": { "x": "44.272", "y": "0.157" },
          "bottomRight": { "x": "46.772", "y": "0.157" },
          "center": { "x": "45.522", "y": "1.407" },
          "height": "2.500",
          "width": "2.500",
          "angle": 90
        },
        "angle": 0,
        "index": "3",
        "width": 50,
        "height": 50
      }
    ],
    "edges": [
      {
        "id": "3",
        "label": "\u8DEF\u5F84-1",
        "type": "line",
        "source": "2",
        "target": "1",
        "vertices": [],
        "arrow": "both",
        "bbox": { "vertices": [] },
        "index": 1
      },
      {
        "id": "8",
        "label": "\u8DEF\u5F84-2",
        "type": "line",
        "source": "1",
        "target": "4",
        "arrow": "both",
        "bbox": {},
        "index": 2
      },
      {
        "id": "9",
        "label": "\u8DEF\u5F84-3",
        "type": "line",
        "source": "4",
        "target": "5",
        "arrow": "both",
        "bbox": {},
        "index": 3
      },
      {
        "id": "10",
        "label": "\u8DEF\u5F84-4",
        "type": "line",
        "source": "5",
        "target": "7",
        "arrow": "both",
        "bbox": {},
        "index": 4
      },
      {
        "id": "11",
        "label": "\u8DEF\u5F84-5",
        "type": "line",
        "source": "7",
        "target": "6",
        "arrow": "both",
        "bbox": {},
        "index": 5
      },
      {
        "id": "17",
        "label": "\u81EA\u5B9A\u4E49\u533A\u57DF-2",
        "type": "custom-area",
        "source": { "x": 991, "y": 0 },
        "target": { "x": 991, "y": 0 },
        "vertices": [
          { "x": 1138, "y": 0 },
          { "x": 1138, "y": 150 }
        ],
        "arrow": "none",
        "bbox": {
          "vertices": [
            { "x": "53.172", "y": "6.207" },
            { "x": "53.172", "y": "-1.293" }
          ]
        },
        "index": 2
      },
      {
        "id": "19",
        "label": "\u81EA\u5B9A\u4E49\u865A\u62DF\u5899-3",
        "type": "custom-wall",
        "source": { "x": 917.5, "y": 526 },
        "target": { "x": 1137, "y": 526 },
        "vertices": [
          { "x": 946, "y": 653 },
          { "x": 1026, "y": 533 },
          { "x": 1097, "y": 650 }
        ],
        "arrow": "none",
        "bbox": {
          "source": { "x": "42.147", "y": "-20.093" },
          "target": { "x": "53.122", "y": "-20.093" },
          "vertices": [
            { "x": "43.572", "y": "-26.443" },
            { "x": "47.572", "y": "-20.443" },
            { "x": "51.122", "y": "-26.293" }
          ]
        },
        "index": 3
      },
      {
        "id": "21",
        "label": "\u81EA\u5B9A\u4E49\u533A\u57DF-3",
        "type": "custom-area",
        "source": { "x": 686, "y": 483 },
        "target": { "x": 686, "y": 483 },
        "vertices": [
          { "x": 888, "y": 483 },
          { "x": 813, "y": 644 }
        ],
        "arrow": "none",
        "bbox": {
          "source": { "x": "30.572", "y": "-17.943" },
          "target": { "x": "30.572", "y": "-17.943" },
          "vertices": [
            { "x": "40.672", "y": "-17.943" },
            { "x": "36.922", "y": "-25.993" }
          ]
        },
        "index": 3
      }
    ]
  },
  "meta": {
    "auto_increment_id": 26,
    "way-point_max_id": 3,
    "stop-point_max_id": 1,
    "edge_max_id": 5,
    "charging-station_max_id": 2,
    "work-station_max_id": 1,
    "custom-wall_max_id": 3,
    "custom-area_max_id": 3,
    "square-area_max_id": 4,
    "circle-area_max_id": 3,
    "virtual-wall_max_id": 1
  },
  "map_info": {
    "id": "6204ce6ed45117203bc2f9a8",
    "map_id": "map/2022-02-10 16:35:56.png",
    "map_name": "Demo",
    "map_length": 32.75,
    "map_width": 57,
    "radar_height": 2.065000057220459,
    "map_url": "https://minio.dev.inrobot.cloud/map/2022-02-10 16:35:56.png",
    "resolution": 0.05,
    "origin_point": {
      "x": -3.7280636,
      "y": -26.543354,
      "angle": 0
    },
    "last_edit_time": "2022-02-10 16:35:58",
    "parent_id": "",
    "create_time_db": "2022-02-10 16:35:58",
    "update_time_db": "2022-02-10 16:35:58",
    "no": "M2022021015"
  },
  "map_service_data_id": "6204ce6ed45117203bc2f9a8"
}
`},10773:function(a,e){e.Z=`import { useCallback } from 'react';

import { XFlowEdgeCommands, XFlowNodeCommands } from '@infore/editor';
import type { Cell, IApplication, NsEdgeCmd, NsNodeCmd } from '@infore/editor';

// @ts-ignore
import data from '../example.json';
import * as utils from '../utils';

const useEditMap = () => {
  const {
    map_url: url,
    map_length: height = 0,
    map_width: width = 0,
    resolution = 0.05,
    origin_point = { x: 0, y: 0 },
  } = data.map_info || {};

  /** \u4FDD\u5B58\u8DEF\u7F51\u6570\u636E */
  const saveGraph = useCallback((graphData: any, meta: any) => {
    console.log('saveGraph', graphData, meta);
    console.log(
      JSON.stringify({
        graphData,
        meta,
      }),
    );
  }, []);

  /**
   * Ros \u5750\u6807\u8F6C\u6362\u5230 \u5730\u56FE
   * @param point {x: number, y: number}
   * @returns
   */
  const transRosCoordsToMap = useCallback(
    (point: { x: number; y: number }) => utils.transRosCoordsToMap(point, origin_point, height, resolution),
    [height, origin_point, resolution],
  );

  /**
   * \u5730\u56FE \u5750\u6807\u8F6C\u6362\u5230 Ros
   * @param point {x: number, y: number}
   * @returns
   */
  const transMapCoordsToRos = useCallback(
    (point: { x: number; y: number }) => utils.transMapCoordsToRos(point, origin_point, height, resolution),
    [height, origin_point, resolution],
  );

  const onLoad = useCallback(
    async (app: IApplication) => {
      const graphInstance = await app.getGraphInstance();
      const transMapToRos = ({ cell }: { cell: Cell; options: Record<string, string> }) => {
        let bbox = {};
        if (cell.isNode()) {
          bbox = {
            topLeft: transMapCoordsToRos(cell.getBBox().topLeft),
            topRight: transMapCoordsToRos(cell.getBBox().topRight),
            bottomLeft: transMapCoordsToRos(cell.getBBox().bottomLeft),
            bottomRight: transMapCoordsToRos(cell.getBBox().bottomRight),
            center: transMapCoordsToRos(cell.getPosition()),
            height: (cell.getBBox().height * resolution).toFixed(3),
            width: (cell.getBBox().width * resolution).toFixed(3),
            angle: utils.transMapAngleToRos(cell.data?.angle),
          };
        }
        if (cell.isEdge()) {
          if (cell.data?.source?.x && cell.data?.source?.y) {
            bbox = {
              ...bbox,
              source: transMapCoordsToRos(cell.data.source),
            };
          }
          if (cell.data?.target?.x && cell.data?.target?.y) {
            bbox = {
              ...bbox,
              target: transMapCoordsToRos(cell.data.target),
            };
          }
          if (cell.data?.vertices) {
            bbox = {
              ...bbox,
              vertices: cell.data.vertices.map((item: { x: number; y: number }) => {
                return transMapCoordsToRos(item);
              }),
            };
          }
        }
        cell.updateData(
          {
            bbox,
          },
          {
            silent: true,
          },
        );
      };
      graphInstance.on('cell:added', transMapToRos);
      graphInstance.on('cell:changed', transMapToRos);
      graphInstance.on('cell:change:data', ({ cell, current, previous, options }) => {
        if (current.zIndex !== previous.zIndex) {
          switch (options.bbox) {
            case 'center':
              const point = transRosCoordsToMap(previous.bbox.center);
              app.executeCommand<NsNodeCmd.UpdateNode.IArgs>(XFlowNodeCommands.UPDATE_NODE.id, {
                nodeConfig: {
                  ...cell.data,
                  // x: point.x - cell.data.width / 2,
                  // y: point.y - cell.data.height / 2,
                  ...point,
                  zIndex: current.zIndex,
                },
                options,
              });
              break;
            case 'width':
              app.executeCommand<NsNodeCmd.UpdateNode.IArgs>(XFlowNodeCommands.UPDATE_NODE.id, {
                nodeConfig: {
                  ...cell.data,
                  width: previous.bbox.width / resolution,
                  zIndex: current.zIndex,
                },
                options,
              });
              break;
            case 'height':
              app.executeCommand<NsNodeCmd.UpdateNode.IArgs>(XFlowNodeCommands.UPDATE_NODE.id, {
                nodeConfig: {
                  ...cell.data,
                  height: previous.bbox.height / resolution,
                  zIndex: current.zIndex,
                },
                options,
              });
              break;
            case 'angle':
              if (cell.isNode()) {
                const angle = utils.transRosAngleToMap(previous.bbox.angle);
                app.executeCommand<NsNodeCmd.UpdateNode.IArgs>(XFlowNodeCommands.UPDATE_NODE.id, {
                  nodeConfig: {
                    ...cell.data,
                    angle,
                    zIndex: current.zIndex,
                  },
                  options,
                });
              }
              break;
            case 'vertices':
              const vertices = previous.bbox.vertices.map((item: { x: number; y: number }) =>
                transRosCoordsToMap(item),
              );
              app.executeCommand<NsEdgeCmd.UpdateEdge.IArgs>(XFlowEdgeCommands.UPDATE_EDGE.id, {
                edgeConfig: {
                  ...cell.data,
                  vertices,
                },
                options,
              });
              break;
            default:
              break;
          }
        }
      });

      //   const nodes = graphInstance
      //     .getNodes()
      //     .filter((node) => node.data.resizing === false)
      //     .filter((node) => !node.data.isGroup);
      //   const scale = Math.abs(zoomFactor);

      //   nodes.forEach((node) => {
      //     let size = {
      //       width: node.data.width,
      //       height: node.data.height,
      //     };
      //     let prop = {
      //       r: 3,
      //       strokeWidth: 1,
      //     };
      //     let fontSize = 12;
      //     if (zoomFactor > 1) {
      //       size = {
      //         width: (size.width / scale) * 2,
      //         height: (size.height / scale) * 2,
      //       };
      //       prop = {
      //         r: prop.r / scale,
      //         strokeWidth: prop.strokeWidth / scale,
      //       };
      //       fontSize = fontSize / scale;
      //     }
      //     node?.size(size);
      //     node.updateData({
      //       fontSize,
      //     });
      //     node.getPorts().map((port) => {
      //       if (port?.id) {
      //         node.setPortProp(port?.id, ['attrs', 'circle'], prop);
      //       }
      //     });
      //   });

      //   const edges = graphInstance
      //     .getEdges()
      //     .filter((edge) => !['custom-area', 'custom-wall'].includes(edge.data.type));
      //   edges.forEach((edge) => {
      //     let strokeWidth = 1;
      //     let fontSize = 12;
      //     let arrowConfig = {
      //       width: 6,
      //       height: 4,
      //       offset: 3,
      //     };
      //     if (zoomFactor > 1) {
      //       strokeWidth = strokeWidth / scale;
      //       fontSize = fontSize / scale;
      //       arrowConfig = {
      //         width: arrowConfig.width / scale,
      //         height: arrowConfig.height / scale,
      //         offset: arrowConfig.offset / scale,
      //       };
      //     }
      //     const sourceMarker = edge.data.attrs.line.sourceMarker.name
      //       ? {
      //           ...edge.data.attrs.line.sourceMarker,
      //           ...arrowConfig,
      //         }
      //       : edge.data.attrs.line.sourceMarker;
      //     const targetMarker = edge.data.attrs.line.targetMarker.name
      //       ? {
      //           ...edge.data.attrs.line.targetMarker,
      //           ...arrowConfig,
      //         }
      //       : edge.data.attrs.line.targetMarker;

      //     edge.updateAttrs({
      //       line: {
      //         ...edge.data.attrs.line,
      //         strokeWidth,
      //         sourceMarker,
      //         targetMarker,
      //       },
      //       text: {
      //         ...edge.data.attrs.text,
      //         fontSize,
      //       },
      //     });
      //   });
      // });
    },
    [resolution, transMapCoordsToRos, transRosCoordsToMap],
  );

  return {
    url,
    width: utils.toPixel(width, resolution),
    height: utils.toPixel(height, resolution),
    resolution,
    onLoad,
    graphData: data?.graphData,
    meta: data?.meta,
    saveGraph,
    mapInfo: data?.map_info,
    transRosCoordsToMap,
  };
};

export default useEditMap;
`},21405:function(a,e){e.Z=`import { Background, GraphEditor, NodePanel, Toolbar } from '@infore/editor';

import useEditMap from './hooks';
import DetailPanel from './components/DetailPanel';

import './index.less';

const EditMap: React.FC = () => {
  const {  url, width, height, graphData, meta, onLoad, saveGraph, transRosCoordsToMap } = useEditMap();
  return (
      <div className="graph-editor-container">
        <GraphEditor graphData={graphData} meta={meta} onLoad={onLoad} position={{ top: 40, left: 240, right: 280 }}>
          <Toolbar saveGraph={saveGraph} />
          <Background url={url} width={width} height={height} />
          <NodePanel position={{ top: 40 }} />
          <DetailPanel saveGraph={saveGraph} transRosCoordsToMap={transRosCoordsToMap} />
        </GraphEditor>
      </div>
  );
};

export default EditMap;
`},63919:function(a,e){e.Z=`export const toPixel = (origin: number = 0, resolution: number = 0) => Number(origin / resolution);
/**
 * \u50CF\u7D20\u8F6C\u6362\u4E3A\u7269\u7406
 * @param origin \u539F\u59CB\u6570\u636E
 * @param proportion \u7F29\u653E\u6BD4\u4F8B
 * @returns
 */
export const toReal = (origin: number, resolution: number) => Number((origin * resolution).toFixed(3));

/**
 * Ros \u5750\u6807\u8F6C\u6362\u5230 \u5730\u56FE
 * @param point {x: number, y: number} Ros\u5750\u6807
 * @param origin_point {x: number, y: number}  Ros \u5730\u56FE\u5750\u6807\u7CFB\u539F\u70B9
 * @param height number Ros \u5730\u56FE\u9AD8\u5EA6
 * @param resolution number \u5730\u56FE\u5206\u8FA8\u7387
 * @returns
 */
export const transRosCoordsToMap = (
  point: { x: number; y: number },
  origin_point: { x: number; y: number },
  height: number,
  resolution: number,
) => {
  if (!origin_point) throw new Error('Fail to transform origin_point');
  if (!resolution) throw new Error('Fail to transform resolution');
  return {
    x: (point.x - origin_point.x) / resolution,
    y: (height - (point.y - origin_point.y)) / resolution,
  };
};

/**
 * \u5730\u56FE \u5750\u6807\u8F6C\u6362\u5230 Ros
 * @param point {x: number, y: number} \u5730\u56FE\u5750\u6807
 * @param origin_point {x: number, y: number}  Ros\u5730\u56FE\u5750\u6807\u7CFB\u539F\u70B9
 * @param height number Ros \u5730\u56FE\u9AD8\u5EA6
 * @param resolution number \u5730\u56FE\u5206\u8FA8\u7387
 * @returns
 */
export const transMapCoordsToRos = (
  point: { x: number; y: number },
  origin_point: { x: number; y: number },
  height: number,
  resolution: number,
) => {
  if (!origin_point) throw new Error('Fail to transform origin_point');
  if (!resolution) throw new Error('Fail to transform resolution');
  return {
    x: (point.x * resolution + origin_point.x).toFixed(3),
    y: ((height / resolution - point.y) * resolution + origin_point.y).toFixed(3),
  };
};

/**
 * Ros \u89D2\u5EA6\u8F6C\u6362\u5230 \u5730\u56FE
 * @param angle number
 * @returns
 */
export const transRosAngleToMap = (angle: number) => (angle ? 450 - (angle > 0 ? angle : angle + 360) : 90) % 360;

/**
 * \u5730\u56FE \u5750\u6807\u8F6C\u6362\u5230 Ros
 * @param angle number
 * @returns
 */
export const transMapAngleToRos = (angle: number) => {
  if (angle) {
    if (angle >= 0 && angle <= 90) {
      // eslint-disable-next-line no-param-reassign
      angle = 90 - angle;
    } else if (angle >= 90 && angle <= 270) {
      // eslint-disable-next-line no-param-reassign
      angle = (((450 - angle) % 360) - 360) % 360;
    } else if (angle >= 270 && angle <= 360) {
      // eslint-disable-next-line no-param-reassign
      angle = 180 - (angle - 270);
    }
  } else {
    // eslint-disable-next-line no-param-reassign
    angle = 90;
  }
  return angle;
};
`},72477:function(a,e){e.Z=`import { useEffect, useRef, useState, useTransition } from 'react';

import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Card, Checkbox, Col, Input, Row, Space, Tabs, Tooltip } from 'antd';

import type { Cell, Edge, Graph } from '@infore/editor';
import { LineTypeEnum, useXFlowApp } from '@infore/editor';

import { InputFiled } from '../fields';
import OutsideRenderNode from './OutsideRenderNode';
import updateCell from './updateCell';
import VirtualList from './VirtualList';
import { useMount } from 'ahooks';

/** \u5143\u7D20\u5217\u8868 */
const CanvasView = ({
  data,
  checkPoint,
}: {
  data: Record<'points' | 'lines' | 'areas', Cell[]>;
  checkPoint?: (x: number, y: number) => boolean;
}) => {
  const app = useXFlowApp();
  const graphInstanceRef = useRef<Graph>();
  const [selectCell, setSelectCell] = useState<Cell[]>([]);
  const [selectTab, setSelectTab] = useState('nodes');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [query, setSearchQuery] = useState('');
  const [, startTransition] = useTransition();

  const getFilterData = () => {
    const keywords = query.trim();
    if (keywords === '') return data;
    const regex = new RegExp(query.trim(), 'i');

    const dataFilter = (cell: Cell<Cell.Properties>) => {
      if (cell.data.line_type === LineTypeEnum.NAVI_PATH) {
        const source = (cell as Edge).getSourceNode();
        const target = (cell as Edge).getTargetNode();

        return (
          regex.test(cell.data.name) ||
          regex.test(cell.data.id) ||
          regex.test(source?.data?.name) ||
          regex.test(source?.data?.id) ||
          regex.test(target?.data?.name) ||
          regex.test(target?.data?.id)
        );
      }

      return regex.test(cell.data.name) || regex.test(cell.data.id);
    };

    const points = data.points.filter(dataFilter);
    const areas = data.areas.filter(dataFilter);
    const lines = data.lines.filter(dataFilter);

    return { points, lines, areas };
  };

  const { points, lines, areas } = getFilterData();

  useEffect(() => {
    graphInstanceRef.current?.select(selectCell);
  }, [selectCell]);

  useMount(() => {
    app.getGraphInstance().then((res) => {
      graphInstanceRef.current = res;
    });
  });

  return (
    <>
      <div style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 0, paddingBottom: 0 }}>
        <Input
          allowClear
          placeholder="\u8BF7\u8F93\u5165\u7F16\u53F7\u6216\u540D\u79F0\u641C\u7D22"
          value={searchInputValue}
          onChange={(e) => {
            setSearchInputValue(e.target.value);
            startTransition(() => {
              setSearchQuery(e.target.value);
            });
          }}
          suffix={<SearchOutlined />}
        />
      </div>
      <Tabs
        activeKey={selectTab}
        onChange={(v) => setSelectTab(v)}
        centered
        destroyInactiveTabPane
        items={[
          {
            label: '\u70B9\u4F4D',
            key: 'nodes',
            children: (
              <VirtualList data={points}>
                {(cell) => {
                  const checkResult = checkPoint?.(cell.data.x, cell.data.y);
                  return (
                    <Card bordered={false} size="small">
                      <Space align="center">
                        <Checkbox
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectCell((oldV) => {
                                graphInstanceRef.current?.transform.scaleContentToFit({
                                  preserveAspectRatio: true,
                                  useCellGeometry: true,
                                  minScale: 1,
                                });
                                graphInstanceRef.current?.transform.centerCell(cell);
                                return [...oldV, cell];
                              });
                            } else {
                              setSelectCell((oldV) => {
                                graphInstanceRef.current?.unselect(cell);
                                return oldV.filter((its) => its.id !== cell.id);
                              });
                            }
                          }}
                        />
                        <InputFiled
                          label={<OutsideRenderNode showId cell={cell} />}
                          value={cell.data.name}
                          onBlur={(value) => {
                            updateCell(app, cell, { name: value });
                          }}
                        />
                        <Tooltip
                          title={checkResult ? '\u6821\u9A8C\u901A\u8FC7' : '\u70B9\u4F4D\u4E0D\u5728\u89C4\u8303\u533A\u57DF\u5185'}
                          placement="left"
                        >
                          {checkResult ? (
                            <CheckCircleOutlined style={{ fontSize: 18, color: '#25E14A' }} />
                          ) : (
                            <CloseCircleOutlined style={{ fontSize: 18, color: '#EF1414' }} />
                          )}
                        </Tooltip>
                      </Space>
                    </Card>
                  );
                }}
              </VirtualList>
            ),
          },
          {
            label: '\u533A\u57DF',
            key: 'areas',
            children: (
              <VirtualList data={areas}>
                {(cell) => (
                  <Card bordered={false} size="small">
                    <Space align="center">
                      <Checkbox
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectCell((oldV) => {
                              graphInstanceRef.current?.transform.scaleContentToFit({
                                preserveAspectRatio: true,
                                useCellGeometry: true,
                                minScale: 1,
                              });
                              graphInstanceRef.current?.transform.centerCell(cell);
                              return [...oldV, cell];
                            });
                          } else {
                            setSelectCell((oldV) => {
                              graphInstanceRef.current?.unselect(cell);
                              return oldV.filter((its) => its.id !== cell.id);
                            });
                          }
                        }}
                      />
                      <InputFiled
                        label={<OutsideRenderNode showId cell={cell} />}
                        value={cell.data.name}
                        onBlur={(value) => {
                          updateCell(app, cell, { name: value });
                        }}
                      />
                    </Space>
                  </Card>
                )}
              </VirtualList>
            ),
          },
          {
            label: '\u8DEF\u5F84',
            key: 'edges',
            children: (
              <VirtualList
                data={lines.filter((item) => item.data.line_type === LineTypeEnum.NAVI_PATH)}
              >
                {(cell) => (
                  <Card bordered={false} size="small">
                    <Space align="center">
                      <Checkbox
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectCell((oldV) => {
                              graphInstanceRef.current?.transform.scaleContentToFit({
                                preserveAspectRatio: true,
                                useCellGeometry: true,
                                minScale: 1,
                              });
                              graphInstanceRef.current?.transform.centerCell(cell);
                              return [...oldV, cell];
                            });
                          } else {
                            setSelectCell((oldV) => {
                              graphInstanceRef.current?.unselect(cell);
                              return oldV.filter((its) => its.id !== cell.id);
                            });
                          }
                        }}
                      />
                      <Row align="middle" justify="space-around">
                        {/** @ts-ignore hack */}
                        <OutsideRenderNode showId cell={cell.getSourceNode()} />
                        {cell.data.arrow !== 'target' && <LeftOutlined />}
                        <Col span={10}>
                          <InputFiled
                            label={false}
                            value={cell.data.name}
                            onBlur={(value) => {
                              updateCell(app, cell, { name: value });
                            }}
                          />
                        </Col>
                        {cell.data.arrow !== 'source' && <RightOutlined />}
                        {/** @ts-ignore hack */}
                        <OutsideRenderNode showId cell={cell.getTargetNode()} />
                      </Row>
                    </Space>
                  </Card>
                )}
              </VirtualList>
            ),
          },
          {
            label: '\u7EBF\u5F62\u8BBE\u5907',
            key: 'devices',
            children: (
              <VirtualList
                data={lines.filter((item) => item.data.line_type !== LineTypeEnum.NAVI_PATH)}
              >
                {(cell) => (
                  <Card bordered={false} size="small">
                    <Space align="center">
                      <Checkbox
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectCell((oldV) => {
                              graphInstanceRef.current?.transform.scaleContentToFit({
                                preserveAspectRatio: true,
                                useCellGeometry: true,
                                minScale: 1,
                              });
                              graphInstanceRef.current?.transform.centerCell(cell);
                              return [...oldV, cell];
                            });
                          } else {
                            setSelectCell((oldV) => {
                              graphInstanceRef.current?.unselect(cell);
                              return oldV.filter((its) => its.id !== cell.id);
                            });
                          }
                        }}
                      />
                      <InputFiled
                        label={
                          <span
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}
                          >
                            <img width={16} src={cell.data.image} />
                            <span style={{ textAlign: 'center', color: '#000000e0' }}>
                              #{cell.id}
                            </span>
                          </span>
                        }
                        value={cell.data.name}
                        onBlur={(value) => {
                          updateCell(app, cell, { name: value });
                        }}
                      />
                    </Space>
                  </Card>
                )}
              </VirtualList>
            ),
          },
        ]}
      />
    </>
  );
};

export default CanvasView;
`},73937:function(a,e){e.Z=`/* eslint-disable react/no-array-index-key */

/* eslint-disable no-await-in-loop */
import { Space, Steps } from 'antd';

import type { Cell, Edge } from '@infore/editor';
import { useXFlowApp } from '@infore/editor';
import { IRTrans } from '@infore/utils';

import { InputFiled, InputNumberFiled, Position, SelectField } from '../fields';
import Split from '../fields/split';
import { calculateDistance } from './math';
import NodeView from './NodeView';
import splitPath from './splitPath';
import updateCell from './updateCell';

/** \u8FB9\u5C5E\u6027 */
const EdgeView = ({
  cell,
  cellData,
  checkPoint,
}: {
  cell: Edge;
  cellData: Record<string, Cell[]>;
  checkPoint?: (x: number, y: number) => boolean;
}) => {
  const app = useXFlowApp();

  return (
    <Steps progressDot current={3} direction="vertical">
      {cell.getSourceNode() && (
        <Steps.Step
          title="\u8D77\u70B9"
          description={<NodeView cell={cell.getSourceNode()!} checkPoint={checkPoint} />}
        />
      )}
      <Steps.Step
        title="\u8DEF\u5F84"
        description={
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <InputFiled
              label="\u540D\u79F0"
              value={cell.data.name}
              onBlur={(value) => {
                updateCell(app, cell, { name: value });
              }}
            />
            {cell.data.arrow !== 'none' && (
              <SelectField
                label="\u65B9\u5411"
                value={cell.data.arrow}
                options={[
                  {
                    label: '\u6B63\u5411',
                    value: 'target',
                  },
                  {
                    label: '\u9006\u5411',
                    value: 'source',
                  },
                  {
                    label: '\u53CC\u5411',
                    value: 'both',
                  },
                ]}
                onChange={(value) => {
                  updateCell(app, cell, { arrow: value });
                }}
              />
            )}
            {['ONE_WAY_DOOR', 'ELEVATOR_DOOR', 'GATE_DOOR', 'AUTO_DOOR'].includes(
              cell.data.line_type,
            ) && (
              <>
                <SelectField
                  label="\u7C7B\u578B"
                  value={cell.data.line_type}
                  options={[
                    {
                      label: '\u81EA\u52A8\u95E8',
                      value: 'AUTO_DOOR',
                    },
                    {
                      label: '\u95F8\u673A\u95E8',
                      value: 'GATE_DOOR',
                    },
                    {
                      label: '\u5355\u5411\u95E8',
                      value: 'ONE_WAY_DOOR',
                    },
                    {
                      label: '\u7535\u68AF\u95E8',
                      value: 'ELEVATOR_DOOR',
                    },
                  ]}
                  onChange={(value) => {
                    updateCell(app, cell, { line_type: value });
                  }}
                />
              </>
            )}
            {['GLASS_WALL', 'VIRTUAL_WALL'].includes(cell.data.line_type) && (
              <SelectField
                label="\u7C7B\u578B"
                value={cell.data.line_type}
                options={[
                  {
                    label: '\u865A\u62DF\u5899',
                    value: 'VIRTUAL_WALL',
                  },
                  {
                    label: '\u73BB\u7483\u5899',
                    value: 'GLASS_WALL',
                  },
                ]}
                onChange={(value) => {
                  updateCell(app, cell, { line_type: value });
                }}
              />
            )}
            {cell.data.line_shape && cell.data.line_type === 'NAVI_PATH' && (
              <SelectField
                label="\u7C7B\u578B"
                value={cell.data.line_shape}
                options={[
                  {
                    label: '\u76F4\u7EBF',
                    value: 'POLYGONAL_LINE',
                  },
                  {
                    label: '\u4E8C\u9636\u8D1D\u585E\u5C14\u66F2\u7EBF',
                    value: 'SECOND_BEZIER_CURVE',
                  },
                  {
                    label: '\u4E09\u9636\u8D1D\u585E\u5C14\u66F2\u7EBF',
                    value: 'BESSEL_CURVE',
                  },
                  {
                    label: '\u5706\u89D2\u66F2\u7EBF',
                    value: 'ROUNDED',
                  },
                  {
                    label: '\u5706\u5F27',
                    value: 'ARC',
                  },
                  {
                    label: '\u4E09\u6B21B\u6837\u6761\u66F2\u7EBF',
                    value: 'B_SPLINE_CURVE',
                  },
                ]}
                onChange={(value) => {
                  updateCell(app, cell, {
                    line_shape: value,
                    name: cell.data.name || '',
                  });
                }}
              />
            )}
            {['ROUNDED'].includes(cell.data.line_shape) && (
              <InputNumberFiled
                label="\u534A\u5F84"
                value={cell.data.radius}
                onBlur={(value) => {
                  updateCell(app, cell, { radius: value });
                }}
              />
            )}
            {['BESSEL_CURVE', 'ARC'].includes(cell.data.line_shape) && (
              <Split
                onOk={({ pointType, count }) => {
                  splitPath(app, cell, count, pointType);
                }}
              />
            )}
            <Space direction="vertical" size="large" style={{ display: 'flex' }}>
              {cell.data.vertices?.map((item: { x: number; y: number }, index: number) => (
                <Position
                  label={\`\u70B9-\${index + 1}\`}
                  key={\`\${index}\`}
                  {...IRTrans.coordsToRos(item)}
                  onBlur={(key, value) => {
                    const { vertices } = cell.data;
                    vertices[index] = IRTrans.coordsToMap({
                      ...IRTrans.coordsToRos({
                        x: cell.data.x,
                        y: cell.data.y,
                      }),
                      [key]: value,
                    });
                    updateCell(app, cell, { vertices });
                  }}
                />
              ))}
            </Space>
            {cell.getSourceNode()?.data?.coordinate && cell.getTargetNode()?.data?.coordinate && (
              <InputFiled
                label="\u76F4\u7EBF\u8DDD\u79BB"
                addonAfter="m"
                disabled
                value={
                  calculateDistance(
                    cell.getSourceNode()?.data?.coordinate,
                    cell.getTargetNode()?.data?.coordinate,
                  ).toFixed(3) || ''
                }
              />
            )}
          </Space>
        }
      />
      {cell.getTargetNode() && (
        <Steps.Step
          title="\u7EC8\u70B9"
          description={<NodeView cell={cell.getTargetNode()!} checkPoint={checkPoint} />}
        />
      )}
    </Steps>
  );
};

export default EdgeView;
`},39800:function(a,e){e.Z=`/* eslint-disable react/no-array-index-key */
import { useState } from 'react';

import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';

import type { Cell, NsNodeCmd } from '@infore/editor';
import { useXFlowApp, uuidv4, XFlowNodeCommands } from '@infore/editor';
import { IRTrans } from '@infore/utils';

import areaTypes from '../../meta/area';
import lineTypes from '../../meta/line';
import pointTypes, { pointTypeOptions } from '../../meta/point';
import { checkColor } from '../../utils';
import { Angle, InputFiled, Position, SelectField, Size } from '../fields';
import Speed from '../fields/speed';
import OutsideRenderNode from './OutsideRenderNode';
import updateCell from './updateCell';
import { useAsyncEffect } from 'ahooks';

const getEelTypeName = (cell: Cell) => {
  if (cell.data.point_type) {
    const findOne = pointTypes.find((item) => item.point_type === cell.data.point_type);
    return findOne?.name;
  } else if (cell.data.line_type) {
    const findOne = lineTypes.find((item) => item.line_type === cell.data.line_type);
    return findOne?.name;
  } else if (cell.data.area_type) {
    const findOne = [...areaTypes].find((item) => item.area_type === cell.data.area_type);

    return findOne?.name;
  }
  return '';
};

/** \u8282\u70B9\u5C5E\u6027 */
const NodeView = ({
  cell,
  cellData,
  checkPoint,
}: {
  cell: Cell;
  cellData?: Record<string, Cell[]>;
  checkPoint?: (x: number, y: number) => boolean;
}) => {
  const app = useXFlowApp();
  // \u9650\u5236\u7535\u68AF\u95E8\u4E0D\u91CD\u590D
  let elevatorArray = [] as { value: string; label: string }[];
  let deviceIdDeal;
  if (cellData && cell.data.area_type === 'ELEVATOR_INSIDE_AREA') {
    // \u5148\u83B7\u53D6\u6240\u6709\u5F53\u524D\u4F7F\u7528\u7684\u7535\u68AF\u533A
    let getElvId = cellData.areas.map((v) => v.data.device_id).filter((v) => v);
    // \u8FC7\u6EE4\u5F53\u524D\u9009\u4E2D\u7684\u7535\u68AF\u533A
    if (getElvId && cell.data.device_id) {
      getElvId = getElvId.filter((v) => v !== cell.data.device_id);
    }
    // \u83B7\u53D6\u6240\u6709\u7535\u68AF\u7684\u95E8
    const getElevatorArea = cellData.lines
      .filter((v) => v.data.line_type === 'ELEVATOR_DOOR')
      .map((v) => ({ value: v.data.id, label: v.data.name }));

    elevatorArray = JSON.parse(JSON.stringify(getElevatorArea)) as {
      value: string;
      label: string;
    }[];
    getElvId.forEach((eItem) => {
      getElevatorArea.forEach((aItem) => {
        if (eItem.length > 0 && eItem.split(',').includes(aItem.value)) {
          elevatorArray = elevatorArray.filter((nItem) => nItem.value !== aItem.value);
        }
      });
    });

    // \u5904\u7406\u7535\u68AF\u533A\u6570\u636E
    if (typeof cell.data.device_id === 'string' && cell.data.device_id) {
      deviceIdDeal = cell.data.device_id.split(',');
    } else if (cell.data.device_id) {
      deviceIdDeal = cell.data.device_id;
    } else {
      deviceIdDeal = undefined;
    }
  }

  const [checkResult, setCheckResult] = useState<boolean>(false);
  const isCustomLine = cell.id.startsWith('custom-line');

  const renderNodeType = () => {
    if (isCustomLine) return null;

    return pointTypeOptions.includes(cell.data.point_type) ? (
      <SelectField
        label="\u7C7B\u578B"
        options={pointTypes.map((item) => ({ label: item.name, value: item.point_type }))}
        value={cell.data.point_type}
        onChange={async (value) => {
          const graphInstance = await app.getGraphInstance();
          const id = uuidv4();
          const asSourceEdges = graphInstance.getOutgoingEdges(cell) || [];
          const asTargetEdges = graphInstance.getIncomingEdges(cell) || [];

          await app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {
            nodeConfig: {
              id,
              name: pointTypes.find((item) => item.point_type === value)?.name,
              point_type: value,
              x: cell.data.x,
              y: cell.data.y,
              angle: cell.data.angle,
            },
          });

          const newNode = graphInstance.getCellById(id);

          asSourceEdges.forEach((edge) => {
            // @ts-ignore hack
            edge.setSource(newNode);
            edge.setData({
              ...edge.data,
              source: id,
            });
          });

          asTargetEdges.forEach((edge) => {
            // @ts-ignore hack
            edge.setTarget(newNode);
            edge.setData({
              ...edge.data,
              target: id,
            });
          });

          graphInstance.removeCell(cell);
          graphInstance.select(newNode);
        }}
      />
    ) : (
      <Typography.Text>\u7C7B\u578B\uFF1A{getEelTypeName(cell)}</Typography.Text>
    );
  };

  useAsyncEffect(async () => {
    if (checkPoint) {
      setCheckResult(checkPoint(cell.data.x, cell.data.y));
    }
  }, [cell.data.x, cell.data.y]);

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      {cell.data.point_type && (
        <Typography.Text>
          \u72B6\u6001\uFF1A
          {checkResult ? (
            <CheckCircleOutlined style={{ color: '#25E14A' }} />
          ) : (
            <CloseCircleOutlined style={{ color: '#EF1414' }} />
          )}
          &nbsp;&nbsp;
          {checkResult ? '\u6821\u9A8C\u901A\u8FC7' : '\u70B9\u4F4D\u4E0D\u5728\u89C4\u8303\u533A\u57DF\u5185'}
        </Typography.Text>
      )}
      {renderNodeType()}
      {!isCustomLine && (
        <>
          <Typography.Text>\u7F16\u53F7\uFF1A{cell.data.index}</Typography.Text>
          <InputFiled
            label={<OutsideRenderNode cell={cell} />}
            value={cell.data.name}
            onBlur={(value) => {
              updateCell(app, cell, { name: value });
            }}
          />
        </>
      )}
      <Position
        label="\u5750\u6807"
        {...IRTrans.coordsToRos({ x: cell.data.x, y: cell.data.y })}
        onBlur={(key, value) => {
          updateCell(
            app,
            cell,
            IRTrans.coordsToMap({
              ...IRTrans.coordsToRos({ x: cell.data.x, y: cell.data.y }),
              [key]: value,
            }),
          );
        }}
      />
      {cell.data.rotating !== false && (
        <Angle
          angle={IRTrans.angleToRos(cell.data.angle)}
          onBlur={(value) => {
            updateCell(app, cell, { angle: IRTrans.angleToMap(value) });
          }}
        />
      )}
      {cell.data.resizing !== false && (
        <Size
          label="\u9AD8\u5BBD"
          width={IRTrans.toRos(cell.data.width)}
          height={IRTrans.toRos(cell.data.height)}
          onBlur={(key, value) => {
            updateCell(app, cell, { [key]: IRTrans.toMap(value) });
          }}
        />
      )}
      {cell.data.area_type === 'AUTO_DOOR_WAITING_AREA' && (
        <SelectField
          mode="multiple"
          label="\u5173\u8054\u81EA\u52A8\u95E8"
          value={cell.data?.device_id}
          options={
            cellData?.lines
              .filter((item) => item.data.line_type === 'AUTO_DOOR')
              .map((item) => ({ label: item.data.name, value: item.data.id })) || []
          }
          onChange={(value) => {
            updateCell(app, cell, { device_id: value });
            updateCell(app, cell, { device_id: value.split(',').filter((v) => v) });
          }}
        />
      )}
      {cell.data.area_type === 'GATE_WAITING_AREA' && (
        <SelectField
          mode="multiple"
          label="\u5173\u8054\u95F8\u673A\u95E8"
          value={cell.data.device_id}
          options={
            cellData?.lines
              .filter((item) => item.data.line_type === 'GATE_DOOR')
              .map((item) => ({ label: item.data.name, value: item.data.id })) || []
          }
          onChange={(value) => {
            updateCell(app, cell, { device_id: value });
            updateCell(app, cell, { device_id: value.split(',').filter((v) => v) });
          }}
        />
      )}
      {cell.data.area_type === 'ELEVATOR_WAITING_AREA' && (
        <SelectField
          mode="multiple"
          label="\u5173\u8054\u7535\u68AF\u95E8"
          value={cell.data.device_id}
          options={
            cellData?.lines
              .filter((item) => item.data.line_type === 'ELEVATOR_DOOR')
              .map((item) => ({ label: item.data.name, value: item.data.id })) || []
          }
          onChange={(value) => {
            updateCell(app, cell, { device_id: value });
            updateCell(app, cell, { device_id: value.split(',').filter((v) => v) });
          }}
        />
      )}
      {cell.data.area_type === 'ELEVATOR_INSIDE_AREA' && (
        <SelectField
          label="\u7535\u68AF\u95E8"
          mode="multiple"
          value={deviceIdDeal}
          options={elevatorArray}
          onChange={(value) => {
            updateCell(app, cell, { device_id: value || '' });
          }}
        />
      )}
      {cell.data.area_type === 'DECELERATION_AREA' && (
        <Speed
          liner_speed={cell.data.liner_speed}
          angular_speed={cell.data.angular_speed}
          onBlur={(key, value) => {
            updateCell(app, cell, { [key]: value });
          }}
        />
      )}
      {cell.data.area_type && (
        <>
          <label>\u6240\u5728\u4F4D\u7F6E</label>
          {cell.data.coordinates?.map((item: { x: number; y: number }, index: number) => (
            <Position disabled key={index} label={\`\u9876\u70B9\${index + 1}\`} {...item} />
          ))}
        </>
      )}
    </Space>
  );
};

export default NodeView;
`},54280:function(a,e){e.Z=`import { memo } from 'react';

import { Typography } from 'antd';

import { type Cell, type Node, useXFlowApp } from '@infore/editor';

/** \u8282\u70B9\u6E32\u67D3 */
const OutsideRenderNode = ({ cell, showId = false }: { cell: Cell; showId?: boolean }) => {
  const app = useXFlowApp();
  const node = cell.clone() as Node<Node.Properties>;
  node.updateData({
    name: '',
    label: '',
    index: '',
    width: 16,
    height: 16,
    fontSize: 4,
  });
  if (node.size) {
    node.size({
      width: 16,
      height: 16,
    });
  }
  // @ts-ignore hack
  const children = cell?.component?.(node);

  return (
    children && (
      <a
        onClick={async () => {
          const graphInstance = await app.getGraphInstance();
          graphInstance.resetSelection();
          graphInstance.select(cell);
          graphInstance.scaleContentToFit({
            preserveAspectRatio: true,
            useCellGeometry: true,
            minScale: 1,
          });
          graphInstance.centerCell(cell);
        }}
        style={{
          display: 'flex',
          width: 40,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ position: 'relative', height: 16, width: 27, textAlign: 'center' }}>
          {children}
        </div>
        {showId && <Typography.Text className="text-center">#{cell.id}</Typography.Text>}
      </a>
    )
  );
};

export default memo(OutsideRenderNode);
`},79442:function(a,e){e.Z=`import { type ComponentProps } from 'react';

import { Empty } from 'antd';
import List from 'rc-virtual-list';

type VirtualListProps<T> = Omit<
  ComponentProps<typeof List<T>>,
  'height' | 'itemHeight' | 'itemKey'
>;

function VirtualList<T = any>({ children, ...rest }: VirtualListProps<T>) {
  const showEmpty = rest.data.length === 0;

  return (
    <>
      {showEmpty && <Empty />}
      <List {...rest} itemKey="id" itemHeight={48} height={480}>
        {children}
      </List>
    </>
  );
}

export default VirtualList;
`},4305:function(a,e){e.Z=`/* eslint-disable no-await-in-loop */

/* eslint-disable react/no-array-index-key */
import { useRef, useState } from 'react';

import { Card, Tabs } from 'antd';

import type { Cell, NsGraph } from '@infore/editor';
import { LayoutPanel, useXFlowApp } from '@infore/editor';

import { checkColor } from '../../utils';
import CanvasView from './CanvasView';
import EdgeView from './EdgeView';
import NodeView from './NodeView';
import { useAsyncEffect } from 'ahooks';
import debounce from 'lodash/debounce';

export type ISaveGraph = (graphData: NsGraph.IGraphData, meta: Record<string, unknown>) => void;

const DetailPanel = ({
  saveGraph,
  map_url,
  map_id,
}: {
  saveGraph: ISaveGraph;
  map_url?: string;
  map_id?: string;
}) => {
  const app = useXFlowApp();
  const check = useRef<(x: number, y: number) => boolean>();
  const [type, setType] = useState<string>('list');
  const [cellData, setCellData] = useState<Record<string, Cell[]>>({
    points: [],
    lines: [],
    areas: [],
  });
  const [selectedCell, setSelectedCell] = useState<Cell>();

  const graphDataChange = async () => {
    const graphInstance = await app.getGraphInstance();
    const getCells = debounce(() => {
      try {
        const cells = graphInstance.getCells();
        setCellData({
          points: cells.filter((cell) => !!cell.data?.point_type),
          lines: cells.filter((cell) => !!cell.data?.line_type),
          areas: cells.filter((cell) => !!cell.data?.area_type),
        });
      } catch (error) {
        console.error(error);
      }
    }, 100);
    graphInstance.on('cell:added', getCells);
    graphInstance.on('cell:removed', getCells);
    graphInstance.on('cell:changed', getCells);
    graphInstance.on('cell:selected', ({ cell }) => {
      if (!cell.data) return;
      if (cell.data.type === 'robot' || cell.shape === 'xflow') return;
      setSelectedCell(cell);
      setType('cell');
    });
    graphInstance.on('cell:unselected', () => {
      setSelectedCell(undefined);
      setType('list');
    });
  };

  useAsyncEffect(async () => {
    if (app) await graphDataChange();
  }, [app]);

  useAsyncEffect(async () => {
    if (map_url) {
      check.current = await checkColor(map_url);
    }
  }, [map_url]);

  return (
    <LayoutPanel
      style={{ zIndex: 99 }}
      position={{ top: 0, right: 0, bottom: 0, width: 280 }}
      title={false}
      header={<h1>fuck</h1>}
    >
      <Tabs
        centered
        activeKey={type}
        onChange={setType}
        items={[
          {
            label: '\u5143\u7D20\u5217\u8868',
            key: 'list',
            children: <CanvasView checkPoint={check.current} data={cellData} />,
          },
          {
            label: '\u5C5E\u6027\u7F16\u8F91',
            key: 'cell',
            disabled: !selectedCell,
            children: (
              <Card bordered={false} size="small">
                {selectedCell?.isNode() && (
                  <NodeView
                    key={selectedCell.id}
                    cell={selectedCell}
                    cellData={cellData}
                    checkPoint={check.current}
                  />
                )}
                {selectedCell?.isEdge() && (
                  <EdgeView
                    key={selectedCell.id}
                    cell={selectedCell}
                    cellData={cellData}
                    checkPoint={check.current}
                  />
                )}
              </Card>
            ),
          },
        ]}
      />
    </LayoutPanel>
  );
};

export default DetailPanel;
`},41138:function(a,e){e.Z=`import { Bezier } from 'bezier-js';

const angles = require('angles');

export interface Point {
  x: number;
  y: number;
  angle?: number;
}

/**
 * \u5F27\u5EA6\u8F6C\u89D2\u5EA6
 * @param radians
 * @returns
 */
export function radians_to_degrees(radians: number) {
  const pi = Math.PI;
  return radians * (180 / pi);
}

/**
 * \u5206\u5272\u76F4\u7EBF
 * @param start
 * @param end
 * @param n
 * @returns
 */
export function splitLine(start: Point, end: Point, n: number): Point[] {
  const deltaX = (end.x - start.x) / n;
  const deltaY = (end.y - start.y) / n;

  const points: Point[] = [];

  for (let i = 1; i < n; i++) {
    const x = start.x + deltaX * i;
    const y = start.y + deltaY * i;
    points.push({ x, y });
  }

  return points;
}

/**
 * \u4E09\u70B9\u8BA1\u7B97\u5706\u5FC3
 * @param p1
 * @param p2
 * @param p3
 * @returns
 */
export const circleFromThreePoints = (p1: Point, p2: Point, p3: Point) => {
  const x1 = p1.x;
  const y1 = p1.y;
  const x2 = p2.x;
  const y2 = p2.y;
  const x3 = p3.x;
  const y3 = p3.y;

  const a = x1 * (y2 - y3) - y1 * (x2 - x3) + x2 * y3 - x3 * y2;

  const b =
    (x1 * x1 + y1 * y1) * (y3 - y2) +
    (x2 * x2 + y2 * y2) * (y1 - y3) +
    (x3 * x3 + y3 * y3) * (y2 - y1);

  const c =
    (x1 * x1 + y1 * y1) * (x2 - x3) +
    (x2 * x2 + y2 * y2) * (x3 - x1) +
    (x3 * x3 + y3 * y3) * (x1 - x2);

  const x = -b / (2 * a);
  const y = -c / (2 * a);
  if (x === Infinity || y === Infinity) {
    return null;
  }
  return {
    x,
    y,
    r: Math.hypot(x - x1, y - y1),
  };
};

/**
 * \u6C42\u5706\u5F27\u4E0A\u4EFB\u610F\u70B9\u7684\u6B63\u5207\u89D2\u5EA6
 * @param cx
 * @param cy
 * @param px
 * @param py
 * @param clockwise
 * @returns
 */
export function getTangentAngle(
  cx: number,
  cy: number,
  px: number,
  py: number,
  clockwise: boolean,
): number {
  const vx = px - cx;
  const vy = py - cy;
  const radians = Math.atan2(vy, vx);
  const degrees = radians_to_degrees(radians);
  const tempDegrees = clockwise ? degrees - 180 : degrees;
  const normalizedDegrees = (tempDegrees + 360) % 360;

  return normalizedDegrees;
}

/**
 * \u6C42\u5411\u91CF\u89D2\u5EA6
 * @param p1
 * @param p2
 */
export function getVectorAngle(vx: number, vy: number) {
  const degrees = 90 + radians_to_degrees(Math.atan2(vy, vx));

  return (degrees + 360) % 360;
}

const getPoint = (center: Point, radius: number, angle: number) => {
  const x = center.x + radius * Math.cos((angle * Math.PI) / 180);
  const y = center.y + radius * Math.sin((angle * Math.PI) / 180);
  return { x, y };
};

/**
 * \u5206\u5272\u6B63\u5706\u5F27
 * @param p1 \u8D77\u70B9
 * @param p2 \u9014\u5F84\u70B9
 * @param p3 \u7EC8\u70B9
 * @param count \u5206\u5272\u6570\u91CF
 * @returns
 */
export function splitCircle(p1: Point, p2: Point, p3: Point, count: number) {
  // \u8BA1\u7B97\u5706\u5FC3\u548C\u534A\u5F84
  const cicular = circleFromThreePoints(p1, p2, p3);
  if (!cicular) return;
  const center = {
    x: cicular.x,
    y: cicular.y,
  };
  // \u534A\u5F84
  const radius = cicular.r;
  // \u4E09\u70B9\u5F27\u5EA6
  const p1Rad = Math.atan2(p1.y - cicular.y, p1.x - cicular.x);
  const p2Rad = Math.atan2(p2.y - cicular.y, p2.x - cicular.x);
  const p3Rad = Math.atan2(p3.y - cicular.y, p3.x - cicular.x);
  // \u5F27\u5EA6\u8F6C\u89D2\u5EA6
  const [a, n, b] = [p1Rad, p2Rad, p3Rad].map(radians_to_degrees);
  angles.SCALE = 360;
  const a1 = angles.normalize(a);
  const n1 = angles.normalize(n);
  const b1 = angles.normalize(b);

  // \u5224\u65AD\u9014\u5F84\u70B9\u662F\u5426\u7ECF\u8FC7 true \u4E3A\u987A\u65F6\u9488\uFF0C false \u4E3A\u9006\u65F6\u9488
  const sweepFlag = !!angles.between(n1, a1, b1);
  const angle = radians_to_degrees(p3Rad - p1Rad);
  // \u5224\u65AD\u662F\u5927\u5F27\u5EA6\u8FD8\u662F\u5C0F\u5F27 true \u4E3A\u5927\u5F27\u5EA6\uFF0C false \u5C0F\u5F27\u5EA6
  const largeArcFlag =
    (sweepFlag && (angle < 0 ? 360 + angle : angle) > 180) ||
    (!sweepFlag && (angle < 0 ? 360 + angle : angle) < 180);

  const distance = !largeArcFlag ? angles.distance(a, b) : angles.SCALE - angles.distance(a, b);
  // \u9700\u8981\u989D\u5916\u4E00\u4E2A\u63A7\u5236\u70B9
  const stepSize = distance / (count * 2 + 2);

  const points = [...new Array(count * 2 + 1).keys()].map((item) => {
    const nextAngle = sweepFlag ? a + (item + 1) * stepSize : a - (item + 1) * stepSize;
    const point = getPoint(center, radius, nextAngle);
    return point;
  });

  return {
    points,
    sweepFlag,
    largeArcFlag,
  };
}

/**
 * \u8BA1\u7B97\u4E24\u70B9\u95F4\u76F4\u7EBF\u8DDD\u79BB
 * @param pointA
 * @param pointB
 * @returns
 */
export function calculateDistance(
  pointA: { x: number; y: number },
  pointB: { x: number; y: number },
) {
  const distance = Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));
  return distance;
}

/**
 * \u4F30\u7B97\u4E09\u9636\u8D1D\u585E\u5C14\u66F2\u7EBF\u4E0A\u4EFB\u610F\u4E00\u70B9\u7684 t \u503C
 * @param point
 * @param p0
 * @param p1
 * @param p2
 * @param p3
 * @returns
 */
export function calculateBezierT(point: Point, p0: Point, p1: Point, p2: Point, p3: Point): number {
  const epsilon = 1e-6; // \u7CBE\u5EA6\u503C
  const maxIterations = 100; // \u6700\u5927\u8FED\u4EE3\u6B21\u6570
  let t = 0; // \u521D\u59CB\u731C\u6D4B\u7684 t \u503C

  // \u4F7F\u7528\u4E8C\u5206\u6CD5\u8FDB\u884C\u6570\u503C\u903C\u8FD1
  let tMin = 0;
  let tMax = 1;
  let iterations = 0;

  while (tMin <= tMax && iterations < maxIterations) {
    const p = calculateBezierPoint(t, p0, p1, p2, p3);
    const distanceSquared = calculateDistanceSquared(point, p);

    if (distanceSquared < epsilon) {
      return t; // \u627E\u5230\u8DB3\u591F\u63A5\u8FD1\u7684 t \u503C
    } else if (p.x < point.x || p.y < point.y) {
      tMin = t; // \u8C03\u6574\u641C\u7D22\u8303\u56F4
      t = (t + tMax) / 2;
    } else {
      tMax = t; // \u8C03\u6574\u641C\u7D22\u8303\u56F4
      t = (t + tMin) / 2;
    }

    iterations++;
  }

  return t; // \u8FD4\u56DE\u6700\u63A5\u8FD1\u7684 t \u503C
}

function calculateBezierPoint(t: number, p0: Point, p1: Point, p2: Point, p3: Point): Point {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;

  const p: Point = {
    x: uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x,
    y: uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y,
  };

  return p;
}

function calculateDistanceSquared(p1: Point, p2: Point): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return dx * dx + dy * dy;
}

/**
 * \u5C06 0 \u5230 1 \u5206\u5272
 * @param parts
 * @returns
 */
function splitRangeIntoEqualParts(parts: number): number[] {
  if (parts <= 0) {
    throw new Error('The number of parts must be greater than zero.');
  }

  const result: number[] = [];

  const interval = 1 / (parts - 1);

  for (let i = 0; i < parts; i++) {
    const value = i * interval;
    result.push(value);
  }

  return result;
}

/**
 * \u5206\u5272\u4E09\u9636\u8D1D\u585E\u5C14\u66F2\u7EBF
 * @param p1
 * @param p2
 * @param c1
 * @param c2
 * @param n
 */
export function splitBezier(p1: Point, p2: Point, c1: Point, c2: Point, n: number) {
  const b = new Bezier(p1.x, p1.y, c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);

  return splitRangeIntoEqualParts(n + 1).map((t) => {
    const { x, y } = b.derivative(t);
    return {
      ...b.compute(t),
      angle: getVectorAngle(x, y),
    };
  });
}
`},87252:function(a,e){e.Z=`/* eslint-disable no-await-in-loop */
import {
  type Edge,
  type NsEdgeCmd,
  type NsNodeCmd,
  type useXFlowApp,
  uuidv4,
  XFlowEdgeCommands,
  XFlowNodeCommands,
} from '@infore/editor';

import pointTypes from '../../meta/point';
import {
  circleFromThreePoints,
  getTangentAngle,
  getVectorAngle,
  type Point,
  splitBezier,
  splitCircle,
  splitLine,
} from './math';
import updateCell from './updateCell';

export default async function splitPath(
  app: ReturnType<typeof useXFlowApp>,
  path: Edge<Edge.Properties>,
  count: number,
  pointType: string,
) {
  const graphInstance = await app.getGraphInstance();
  const sourcePoint = path.getSourceNode()!.position();
  const targetPoint = path.getTargetNode()!.position();
  const vertices = path.getVertices();
  const pointName = pointTypes.find((item) => item.point_type === pointType)!.name;

  let sourceAngle = 0;
  let targetAngle = 0;
  let points: Point[] = [];

  if (path.data.line_shape === 'BESSEL_CURVE') {
    const [c1, c2] = vertices;
    points = splitBezier(
      { x: sourcePoint.x, y: sourcePoint.y },
      { x: targetPoint.x, y: targetPoint.y },
      c1,
      c2,
      count,
    );

    sourceAngle = points.shift()!.angle!;
    targetAngle = points.pop()!.angle!;
  }

  if (path.data.line_shape === 'POLYGONAL_LINE') {
    const angle = getVectorAngle(targetPoint.x - sourcePoint.x, targetPoint.y - sourcePoint.y);
    points = splitLine(
      { x: sourcePoint.x, y: sourcePoint.y },
      { x: targetPoint.x, y: targetPoint.y },
      count,
    ).map((item) => ({ ...item, angle }));
    sourceAngle = angle;
    targetAngle = angle;
  }

  if (path.data.line_shape === 'ARC') {
    const vertice = vertices[0];
    const { sweepFlag, points: splitPoints } =
      splitCircle(sourcePoint, vertice, targetPoint, count - 1) || {};
    const cicular = circleFromThreePoints(sourcePoint, vertice, targetPoint)!;

    points = (splitPoints?.filter((item, index) => index % 2) || []).map((item) => ({
      ...item,
      angle: getTangentAngle(cicular.x, cicular.y, item.x, item.y, !!sweepFlag),
    }));

    sourceAngle = getTangentAngle(cicular.x, cicular.y, sourcePoint.x, sourcePoint.y, !!sweepFlag);
    targetAngle = getTangentAngle(cicular.x, cicular.y, targetPoint.x, targetPoint.y, !!sweepFlag);
  }

  for (let index = 0; index < points.length; index++) {
    const element = points[index];

    await app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {
      nodeConfig: {
        id: uuidv4(),
        uuid: \`\${index}\`,
        name: pointName,
        point_type: pointType,
        x: element.x,
        y: element.y,
        angle: element.angle,
      },
    });
  }

  const newNodes = [
    ...graphInstance.getNodes().filter((item) => item.data.uuid),
    path.getTargetNode(),
  ];

  // for (let index = 0; index < newNodes.length; index++) {
  //   const source = newNodes[index - 1] || path.getSourceNode();
  //   const target = newNodes[index];
  //   target!.updateData({
  //     uuid: undefined,
  //   });

  //   await app.executeCommand<NsEdgeCmd.AddEdge.IArgs>(XFlowEdgeCommands.ADD_EDGE.id, {
  //     edgeConfig: {
  //       id: uuidv4(),
  //       source: source!.id,
  //       target: target!.id,
  //       line_shape: 'POLYGONAL_LINE',
  //       arrow: 'target',
  //     },
  //   });
  // }

  updateCell(app, path.getSourceNode()!, { angle: sourceAngle });

  updateCell(app, path.getTargetNode()!, { angle: targetAngle });

  // graphInstance.removeCell(path);
}
`},22066:function(a,e){e.Z=`import {
  type Cell,
  type IApplication,
  type NsEdgeCmd,
  type NsNodeCmd,
  XFlowEdgeCommands,
  XFlowNodeCommands,
} from '@infore/editor';

/** \u66F4\u65B0 cell */
const updateCell = (
  app: IApplication,
  cell: Cell,
  config: Record<string, unknown>,
  options: Record<string, unknown> = {},
) => {
  if (cell.isNode()) {
    app.executeCommand<NsNodeCmd.UpdateNode.IArgs>(XFlowNodeCommands.UPDATE_NODE.id, {
      nodeConfig: {
        ...cell.data,
        ...config,
      },
      options,
    });
  }
  if (cell.isEdge()) {
    app.executeCommand<NsEdgeCmd.UpdateEdge.IArgs>(XFlowEdgeCommands.UPDATE_EDGE.id, {
      edgeConfig: {
        ...cell.data,
        ...config,
        name: typeof config.name === 'undefined' ? cell.data.name || '' : config.name,
      },
      options,
    });
  }
};

export default updateCell;
`},14757:function(a,e){e.Z=`import React from 'react';

import { Item } from './position';

interface IProps {
  angle?: number;
  onBlur?: (value: number) => void;
}

const Angle: React.FC<IProps> = (props) => {
  const { angle, onBlur } = props;

  return (
    <div className="group">
      <label>\u89D2\u5EA6</label>
      <div className="split">
        <Item
          addonBefore="\xB0"
          value={angle}
          onBlurItem={(value: number) => {
            onBlur?.(value);
          }}
        />
      </div>
    </div>
  );
};

export default Angle;
`},74631:function(a,e){e.Z=`.group {
  display: flex;
  flex-direction: row;
  align-items: center;

  input,
  select {
    height: 24px;
    line-height: 1;
  }
}

.group > label {
  margin-right: 8px;
  word-break: keep-all;
}

.split {
  display: flex;
  grid-gap: 8px;
}

.addon-before-group {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  vertical-align: center;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}

.addon-before-group > span {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 20px;
  color: #000000d9;
  line-height: 24px;
  text-align: center;
  background-color: #fafafa;
  cursor: pointer;
}

.addon-before-group:hover > span {
  display: none;
}
`},15166:function(a,e){e.Z=`import Angle from './angle';
import InputFiled from './input';
import InputNumberFiled from './input-number';
import Position from './position';
import SelectField from './select';
import Size from './size';

import './index.less';

export { Angle, InputFiled, InputNumberFiled, Size, Position, SelectField };
`},21563:function(a,e){e.Z=`import React, { useEffect, useState } from 'react';

import { InputNumber } from 'antd';

interface IProps {
  label?: string;
  value?: number;
  min?: number;
  width?: number;
  onBlur?: (value: number) => void;
}

const InputNumberFiled: React.FC<IProps> = (props) => {
  const { label, value, onBlur, min, width } = props;
  const [number, setNumber] = useState<number | null>();
  useEffect(() => {
    setNumber(value);
  }, [value]);
  return (
    <div className="group">
      {label && <label>{label}</label>}
      <InputNumber
        value={number}
        min={min}
        style={{
          width,
          height: 24,
        }}
        onChange={setNumber}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
          onBlur?.(Number(e.target.value));
        }}
      />
    </div>
  );
};

export default InputNumberFiled;
`},69620:function(a,e){e.Z=`import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';

import { Input } from 'antd';

interface IProps {
  label?: string | ReactNode;
  value?: string;
  onBlur?: (value: string) => void;
  onClick?: () => void;
  disabled?: boolean;
  addonAfter?: string | ReactNode;
}

const InputFiled: React.FC<IProps> = (props) => {
  const { label = '\u6807\u7B7E', value, onBlur, addonAfter } = props;
  const [string, setString] = useState<string>();
  useEffect(() => {
    setString(value);
  }, [value]);
  return (
    <div className="group">
      <label>{label}</label>
      <Input
        disabled={props.disabled}
        value={string}
        style={{
          height: 24,
        }}
        onClick={props.onClick}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setString(e.target.value);
        }}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
          onBlur?.(e.target.value);
        }}
        addonAfter={addonAfter}
      />
    </div>
  );
};

export default InputFiled;
`},36515:function(a,e){e.Z=`import React, { useEffect, useState } from 'react';

import { InputNumber } from 'antd';

interface IProps {
  label?: string | React.ReactNode;
  x?: number;
  y?: number;
  onBlur?: (key: string, value: number) => void;
  disabled?: boolean;
}

export const Item = ({
  value,
  onBlurItem,
  addonBefore,
  disabled,
}: {
  value?: number;
  onBlurItem: (value: number) => void;
  addonBefore: string;
  disabled?: boolean;
}) => {
  const [number, setNumber] = useState<number | null>();
  useEffect(() => {
    setNumber(value);
  }, [value]);
  return (
    <div className="addon-before-group">
      <InputNumber
        disabled={disabled}
        value={number}
        style={{ height: 24, border: 'none' }}
        onChange={setNumber}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
          onBlurItem(Number(e.target.value));
        }}
      />
      <span
        style={{
          width: 'auto',
          padding: '0 8px',
        }}
      >
        {addonBefore}
      </span>
    </div>
  );
};

const Position: React.FC<IProps> = (props) => {
  const { label = '\u4F4D\u7F6E', x, y, onBlur, disabled } = props;

  return (
    <div className="group">
      <label>{label}</label>
      <div className="split">
        <Item
          disabled={disabled}
          addonBefore="X"
          value={x}
          onBlurItem={(value: number) => {
            onBlur?.('x', value);
          }}
        />
        <Item
          disabled={disabled}
          addonBefore="Y"
          value={y}
          onBlurItem={(value: number) => {
            onBlur?.('y', value);
          }}
        />
      </div>
    </div>
  );
};

export default Position;
`},82439:function(a,e){e.Z=`import type { ReactNode } from 'react';
import React from 'react';

import { Select } from 'antd';

interface IProps {
  label?: string | ReactNode;
  value?: string;
  options?: {
    label: string | number;
    value: string | number;
  }[];
  mode?: 'multiple' | 'tags';
  width?: number | string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const SelectField: React.FC<IProps> = (props) => {
  const {
    label = '\u7BAD\u5934',
    mode,
    value,
    onChange,
    options = [],
    width = '100%',
    placeholder,
  } = props;
  return (
    <div className="group">
      <label>{label}</label>
      <Select
        mode={mode}
        size="small"
        value={value}
        style={{
          width,
          height: 24,
        }}
        placeholder={placeholder}
        // getPopupContainer={(trigger) => trigger.parentNode}
        optionFilterProp="children"
        onChange={(v: string) => {
          onChange?.(Array.isArray(v) ? v.join(',') : v);
        }}
        filterOption={(input, option) => {
          const { label: text = '' } = option as { label: string | number };
          if (typeof text === 'string') {
            return text.toLowerCase().indexOf(input.toLowerCase()) >= 0;
          }
          return text.toString().indexOf(input.toLowerCase()) >= 0;
        }}
        options={options}
      />
    </div>
  );
};

export default SelectField;
`},95433:function(a,e){e.Z=`import React from 'react';

import { Item } from './position';

interface IProps {
  label?: string | React.ReactNode;
  width?: number;
  height?: number;
  onBlur?: (key: string, value: number) => void;
  disabled?: boolean;
}

const Size: React.FC<IProps> = (props) => {
  const { label = '\u5C3A\u5BF8', width, height, onBlur, disabled } = props;

  return (
    <div className="group">
      <label>{label}</label>
      <div className="split">
        <Item
          disabled={disabled}
          addonBefore="W"
          value={width}
          onBlurItem={(value: number) => {
            onBlur?.('width', value);
          }}
        />
        <Item
          disabled={disabled}
          addonBefore="H"
          value={height}
          onBlurItem={(value: number) => {
            onBlur?.('height', value);
          }}
        />
      </div>
    </div>
  );
};

export default Size;
`},39082:function(a,e){e.Z=`import React from 'react';

import { Space } from 'antd';

import { Item } from './position';

interface IProps {
  liner_speed?: number;
  angular_speed?: number;
  onBlur?: (key: string, value: number) => void;
  disabled?: boolean;
}

const Speed: React.FC<IProps> = (props) => {
  const { liner_speed, angular_speed, onBlur, disabled } = props;

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <div className="group">
        <label>\u7EBF\u901F\u5EA6</label>
        <div className="split">
          <Item
            disabled={disabled}
            addonBefore="m/s"
            value={liner_speed}
            onBlurItem={(value: number) => {
              onBlur?.('liner_speed', value);
            }}
          />
        </div>
      </div>

      <div className="group">
        <label>\u89D2\u901F\u5EA6</label>
        <div className="split">
          <Item
            disabled={disabled}
            addonBefore="rad/s"
            value={angular_speed}
            onBlurItem={(value: number) => {
              onBlur?.('angular_speed', value);
            }}
          />
        </div>
      </div>
    </Space>
  );
};

export default Speed;
`},29926:function(a,e){e.Z=`import { ScissorOutlined } from '@ant-design/icons';
import { ModalForm, ProForm, ProFormDigit, ProFormSelect } from '@ant-design/pro-components';
import { Button } from 'antd';

import pointTypes from '../../meta/point';

type SplitParams = {
  pointType: string;
  count: number;
};

type SplitProps = {
  onOk?: (data: SplitParams) => void;
};

function Split({ onOk }: SplitProps) {
  return (
    <ModalForm<Omit<SplitParams, 'pointName'>>
      title="\u8DEF\u5F84\u5206\u5272"
      trigger={<Button icon={<ScissorOutlined />}>\u8DEF\u5F84\u5206\u5272</Button>}
      modalProps={{
        destroyOnClose: true,
      }}
      onFinish={async (values) => {
        onOk?.(values);
        return true;
      }}
      initialValues={{
        pointType: 'OPERATE_POINT',
        count: 2,
      }}
    >
      <ProForm.Group>
        <ProFormSelect
          width="md"
          options={pointTypes.map((item) => ({ label: item.name, value: item.point_type }))}
          name="pointType"
          label="\u5206\u5272\u70B9\u7C7B\u578B"
        />
        <ProFormDigit
          width="md"
          name="count"
          label="\u5206\u5272\u6BB5\u6570"
          min={2}
          rules={[
            {
              required: true,
              message: '\u8BF7\u8F93\u5165\u5206\u5272\u6BB5\u6570',
            },
            {
              pattern: /^[1-9]\\d*$/,
              message: '\u8BF7\u8F93\u5165\u6B63\u6574\u6570',
            },
          ]}
        />
      </ProForm.Group>
    </ModalForm>
  );
}

export default Split;
`},64476:function(a,e){e.Z=`const data = {
  code: 0,
  msg: '',
  map: {
    id: '6614d7ea0866bfb75ac76043',
    map_id: 'M2024000170',
    map_name: '\u897F\u533A-\u5C0F\u623F\u95F4v2.3',
    base_map: {
      resolution: 0.01,
      origin_point: {
        x: -28.795,
        y: -35.274998,
      },
      // map_url:
      //   'https://minio.uat.inrobot.cloud/common/2024/4-11/5IczBSWW24agk9RwgtWxd-gzg_map_1101.webp',
      map_url: 'https://minio.smzx.inrobot.cloud/map/gzg_map_1101.png',
      height: 9622,
      width: 6190,
      lidar_height: 0.25,
      occupied_thresh: 0.65,
      free_zone_thresh: 0.196,
      floor: 0,
      map_data_id: 'map/gzg_map_1101.png',
    },
    route_net: {
      points: [
        {
          id: '2',
          point_type: 'OPERATE_POINT',
          name: '#1CQ03',
          coordinate: {
            x: -5.147,
            y: 7.449,
          },
          robot_angle: -27.06,
          index: '2',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '3',
          point_type: 'OPERATE_POINT',
          name: '#1CQ04',
          coordinate: {
            x: -7.924,
            y: 9.088,
          },
          robot_angle: -34.79,
          index: '3',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '4',
          point_type: 'OPERATE_POINT',
          name: '#1CQ01',
          coordinate: {
            x: -11.431,
            y: 11.968,
          },
          robot_angle: -43.21,
          index: '4',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '5',
          point_type: 'OPERATE_POINT',
          name: '#1CQ02',
          coordinate: {
            x: -13.627,
            y: 14.374,
          },
          robot_angle: -53.8,
          index: '5',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '6',
          point_type: 'OPERATE_POINT',
          name: '1CQ04',
          coordinate: {
            x: -4.229,
            y: -5.389,
          },
          robot_angle: -90.69,
          index: '6',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '7',
          point_type: 'OPERATE_POINT',
          name: '1CQ03',
          coordinate: {
            x: -4.225,
            y: -8.376,
          },
          robot_angle: -91.4,
          index: '7',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '8',
          point_type: 'OPERATE_POINT',
          name: '1CQ01',
          coordinate: {
            x: -11.128,
            y: -5.308,
          },
          robot_angle: 88.87,
          index: '8',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '9',
          point_type: 'OPERATE_POINT',
          name: '1CQ02',
          coordinate: {
            x: -11.107,
            y: -8.314,
          },
          robot_angle: 89.9,
          index: '9',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '10',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-10',
          coordinate: {
            x: -3.505,
            y: -1.155,
          },
          robot_angle: 90,
          index: '10',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '11',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-11',
          coordinate: {
            x: -16.275,
            y: 11.335,
          },
          robot_angle: 90,
          index: '11',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '13',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-13',
          coordinate: {
            x: -12.475,
            y: -8.454,
          },
          robot_angle: 90,
          index: '13',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '15',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-15',
          coordinate: {
            x: -1.359,
            y: -5.118,
          },
          robot_angle: -90,
          index: '15',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '16',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-16',
          coordinate: {
            x: 0.2,
            y: -8.715,
          },
          robot_angle: -90,
          index: '16',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '21',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-21',
          coordinate: {
            x: -13.932,
            y: 9.218,
          },
          robot_angle: 90,
          index: '21',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '23',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-23',
          coordinate: {
            x: -13.795,
            y: -0.695,
          },
          robot_angle: 90,
          index: '23',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '28',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-28',
          coordinate: {
            x: -4.324,
            y: 5.791,
          },
          robot_angle: 90,
          index: '28',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '29',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-29',
          coordinate: {
            x: -9.857,
            y: 6.502,
          },
          robot_angle: 90,
          index: '29',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '30',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-30',
          coordinate: {
            x: 2.175,
            y: -3.665,
          },
          robot_angle: 90,
          index: '30',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '43',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-43',
          coordinate: {
            x: 1.817,
            y: 7.92,
          },
          robot_angle: -95,
          index: '43',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '45',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-45',
          coordinate: {
            x: 3.195,
            y: 7.845,
          },
          robot_angle: -94.557,
          index: '45',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '46',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-46',
          coordinate: {
            x: 2.636,
            y: 2.789,
          },
          robot_angle: -94.69,
          index: '46',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '51',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-51',
          coordinate: {
            x: 7.645,
            y: 12.746,
          },
          robot_angle: -90,
          index: '51',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '53',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-53',
          coordinate: {
            x: 7.565,
            y: 13.875,
          },
          robot_angle: 90,
          index: '53',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '54',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-54',
          coordinate: {
            x: 5.625,
            y: 13.545,
          },
          robot_angle: 90,
          index: '54',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '57',
          point_type: 'OPERATE_POINT',
          name: '602',
          coordinate: {
            x: 3.955,
            y: 13.605,
          },
          robot_angle: 90,
          index: '57',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '62',
          point_type: 'OPERATE_POINT',
          name: '1FW01',
          coordinate: {
            x: -5.166,
            y: -4.988,
          },
          robot_angle: 90.4,
          index: '62',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '77',
          point_type: 'OPERATE_POINT',
          name: '#2KZ04',
          coordinate: {
            x: 10.718,
            y: -9.948,
          },
          robot_angle: -0.61,
          index: '77',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '112',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-112',
          coordinate: {
            x: 6.145,
            y: 12.505,
          },
          robot_angle: -88.477,
          index: '112',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '113',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-113',
          coordinate: {
            x: -12.815,
            y: -7.062,
          },
          robot_angle: -180,
          index: '113',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '114',
          point_type: 'OPERATE_POINT',
          name: '1DP01',
          coordinate: {
            x: -7.792,
            y: -6.781,
          },
          robot_angle: -180,
          index: '114',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '124',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-3',
          coordinate: {
            x: -10.56,
            y: -13.07,
          },
          robot_angle: 88,
          index: '3',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '125',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-4',
          coordinate: {
            x: -10.56,
            y: -11.955,
          },
          robot_angle: 90,
          index: '4',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '126',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-5',
          coordinate: {
            x: -5.863,
            y: -11.389,
          },
          robot_angle: 90,
          index: '5',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '129',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-8',
          coordinate: {
            x: 1.415,
            y: 5.081,
          },
          robot_angle: -109.69,
          index: '8',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '134',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-13',
          coordinate: {
            x: -2.525,
            y: 38.155,
          },
          robot_angle: 90,
          index: '13',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '144',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-23',
          coordinate: {
            x: 9.755,
            y: 14.085,
          },
          robot_angle: 90,
          index: '23',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '165',
          point_type: 'OPERATE_POINT',
          name: '#1DP01',
          coordinate: {
            x: -18.97,
            y: 2.7,
          },
          robot_angle: -90.45,
          index: '44',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '166',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-45',
          coordinate: {
            x: -19,
            y: -4.24,
          },
          robot_angle: -90.57,
          index: '45',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '168',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-47',
          coordinate: {
            x: -17.47,
            y: -4.46,
          },
          robot_angle: -90.6,
          index: '47',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '171',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-50',
          coordinate: {
            x: 2.975,
            y: 13.465,
          },
          robot_angle: 90,
          index: '50',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '184',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-63',
          coordinate: {
            x: -1.665,
            y: -1.025,
          },
          robot_angle: 90,
          index: '63',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '188',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-67',
          coordinate: {
            x: -4.515,
            y: 0.395,
          },
          robot_angle: 90,
          index: '67',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '190',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-69',
          coordinate: {
            x: -11.342,
            y: 3.606,
          },
          robot_angle: 90,
          index: '69',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '191',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-70',
          coordinate: {
            x: -11.535,
            y: 0.535,
          },
          robot_angle: 90,
          index: '70',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '192',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-71',
          coordinate: {
            x: -8.084,
            y: 2.134,
          },
          robot_angle: 90,
          index: '71',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '212',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-91',
          coordinate: {
            x: -12.535,
            y: 0.455,
          },
          robot_angle: 90,
          index: '91',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '215',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-94',
          coordinate: {
            x: -2.945,
            y: -0.135,
          },
          robot_angle: 90,
          index: '94',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '218',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-97',
          coordinate: {
            x: -12.805,
            y: 3.995,
          },
          robot_angle: 90,
          index: '97',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '221',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-100',
          coordinate: {
            x: -16.335,
            y: 5.645,
          },
          robot_angle: 90,
          index: '100',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '247',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-126',
          coordinate: {
            x: 0,
            y: 0,
          },
          robot_angle: 90,
          index: '126',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '248',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-127',
          coordinate: {
            x: 3,
            y: 0,
          },
          robot_angle: 90,
          index: '127',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '249',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-128',
          coordinate: {
            x: -16.195,
            y: -0.725,
          },
          robot_angle: 90,
          index: '128',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '253',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-132',
          coordinate: {
            x: -7.294,
            y: -1.675,
          },
          robot_angle: 90,
          index: '132',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '254',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-133',
          coordinate: {
            x: -6.009,
            y: -6.369,
          },
          robot_angle: 90,
          index: '133',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '255',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-134',
          coordinate: {
            x: -6.045,
            y: -8.066,
          },
          robot_angle: 90,
          index: '134',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '264',
          point_type: 'NODE_POINT',
          name: '\u8282\u70B9-143',
          coordinate: {
            x: -12.955,
            y: -7.062,
          },
          robot_angle: 90,
          index: '143',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '274',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-153',
          coordinate: {
            x: -5.845,
            y: -11.885,
          },
          robot_angle: 90,
          index: '153',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '280',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-159',
          coordinate: {
            x: -15.245,
            y: -8.885,
          },
          robot_angle: 90,
          index: '159',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '299',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-178',
          coordinate: {
            x: -12.995,
            y: -5.148,
          },
          robot_angle: 90,
          index: '178',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '324',
          point_type: 'OPERATE_POINT',
          name: '1ZY02',
          coordinate: {
            x: -8.739,
            y: -6.607,
          },
          robot_angle: 179.7,
          index: '203',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '325',
          point_type: 'OPERATE_POINT',
          name: '1ZY01',
          coordinate: {
            x: -8.716,
            y: -7.653,
          },
          robot_angle: -0.7,
          index: '204',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '326',
          point_type: 'OPERATE_POINT',
          name: '1ZY04',
          coordinate: {
            x: -6.984,
            y: -6.654,
          },
          robot_angle: 177.9,
          index: '205',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '327',
          point_type: 'OPERATE_POINT',
          name: '1ZY03',
          coordinate: {
            x: -6.99,
            y: -7.795,
          },
          robot_angle: -1.5,
          index: '206',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '330',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-209',
          coordinate: {
            x: -3.624,
            y: -6.034,
          },
          robot_angle: 90,
          index: '209',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '331',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-210',
          coordinate: {
            x: -2.246,
            y: -7.972,
          },
          robot_angle: 90,
          index: '210',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '338',
          point_type: 'OPERATE_POINT',
          name: '1ZY04',
          coordinate: {
            x: -6.656,
            y: 11.032,
          },
          robot_angle: -121.3,
          index: '217',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '339',
          point_type: 'OPERATE_POINT',
          name: '1ZY03',
          coordinate: {
            x: -5.315,
            y: 10.305,
          },
          robot_angle: -114,
          index: '218',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '340',
          point_type: 'OPERATE_POINT',
          name: '1ZY02',
          coordinate: {
            x: -3.876,
            y: 9.616,
          },
          robot_angle: -112,
          index: '219',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '341',
          point_type: 'OPERATE_POINT',
          name: '1ZY01',
          coordinate: {
            x: -2.325,
            y: 8.925,
          },
          robot_angle: -107,
          index: '220',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '342',
          point_type: 'OPERATE_POINT',
          name: '1FW01',
          coordinate: {
            x: 0.029,
            y: 8.29,
          },
          robot_angle: 78,
          index: '221',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '348',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-227',
          coordinate: {
            x: -7.255,
            y: -4.988,
          },
          robot_angle: 90,
          index: '227',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '351',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-230',
          coordinate: {
            x: -1.555,
            y: 38.155,
          },
          robot_angle: 90,
          index: '230',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '360',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-239',
          coordinate: {
            x: -0.165,
            y: -2.455,
          },
          robot_angle: 90,
          index: '239',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '368',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-247',
          coordinate: {
            x: 0.635,
            y: -2.535,
          },
          robot_angle: 90,
          index: '247',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '372',
          point_type: 'OPERATE_POINT',
          name: '#2KZ02',
          coordinate: {
            x: 10.686,
            y: -3.799,
          },
          robot_angle: 0.5,
          index: '251',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '373',
          point_type: 'OPERATE_POINT',
          name: '#2CQ02',
          coordinate: {
            x: 8.862,
            y: -5.348,
          },
          robot_angle: -90.26,
          index: '252',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '374',
          point_type: 'OPERATE_POINT',
          name: '#2KZ01',
          coordinate: {
            x: 19.828,
            y: -9.967,
          },
          robot_angle: -179.8,
          index: '253',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '375',
          point_type: 'OPERATE_POINT',
          name: '#2CQ01',
          coordinate: {
            x: 8.898,
            y: -8.362,
          },
          robot_angle: -90.8,
          index: '254',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '380',
          point_type: 'OPERATE_POINT',
          name: '25\u73BB\u7483',
          coordinate: {
            x: 26.38,
            y: -4.439,
          },
          robot_angle: 89,
          index: '259',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '381',
          point_type: 'OPERATE_POINT',
          name: '25\u51FA',
          coordinate: {
            x: 23.445,
            y: -4.505,
          },
          robot_angle: 89,
          index: '260',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '382',
          point_type: 'OPERATE_POINT',
          name: '#2CQ04',
          coordinate: {
            x: 21.63,
            y: -5.422,
          },
          robot_angle: 89.7,
          index: '261',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '383',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-262',
          coordinate: {
            x: 26.386,
            y: 2.727,
          },
          robot_angle: 89,
          index: '262',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '384',
          point_type: 'OPERATE_POINT',
          name: '25\u65CB\u8F6C',
          coordinate: {
            x: 18.945,
            y: -6.955,
          },
          robot_angle: 178.9,
          index: '263',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '385',
          point_type: 'OPERATE_POINT',
          name: '#2CQ03',
          coordinate: {
            x: 21.629,
            y: -8.429,
          },
          robot_angle: 89.8,
          index: '264',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '491',
          point_type: 'OPERATE_POINT',
          name: '2DP01',
          coordinate: {
            x: 15.227,
            y: -7.106,
          },
          robot_angle: 178.9,
          index: '8',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '492',
          point_type: 'OPERATE_POINT',
          name: '2ZY09',
          coordinate: {
            x: 15.34,
            y: -7.443,
          },
          robot_angle: 0.35,
          index: '9',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '493',
          point_type: 'OPERATE_POINT',
          name: '2ZY10',
          coordinate: {
            x: 15.329,
            y: -6.378,
          },
          robot_angle: 179.8,
          index: '10',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '495',
          point_type: 'OPERATE_POINT',
          name: '2ZY08',
          coordinate: {
            x: 13.609,
            y: -6.387,
          },
          robot_angle: -180,
          index: '12',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '496',
          point_type: 'OPERATE_POINT',
          name: '2ZY07',
          coordinate: {
            x: 13.61,
            y: -7.51,
          },
          robot_angle: 0.79,
          index: '13',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '497',
          point_type: 'OPERATE_POINT',
          name: '2ZY05',
          coordinate: {
            x: 12,
            y: -7.485,
          },
          robot_angle: 0.29,
          index: '14',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '498',
          point_type: 'OPERATE_POINT',
          name: '2ZY06',
          coordinate: {
            x: 11.955,
            y: -6.369,
          },
          robot_angle: -179.8,
          index: '15',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '505',
          point_type: 'OPERATE_POINT',
          name: '1ZY01',
          coordinate: {
            x: 17.044,
            y: -6.327,
          },
          robot_angle: 179.93,
          index: '22',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '506',
          point_type: 'OPERATE_POINT',
          name: '1ZY03',
          coordinate: {
            x: 18.678,
            y: -6.45,
          },
          robot_angle: -179.9,
          index: '23',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '507',
          point_type: 'OPERATE_POINT',
          name: '1ZY02',
          coordinate: {
            x: 17.041,
            y: -7.54,
          },
          robot_angle: -0.34,
          index: '24',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '512',
          point_type: 'OPERATE_POINT',
          name: '1ZY04',
          coordinate: {
            x: 18.659,
            y: -7.52,
          },
          robot_angle: -0.34,
          index: '29',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '516',
          point_type: 'OPERATE_POINT',
          name: '#2KZ03',
          coordinate: {
            x: 19.813,
            y: -3.824,
          },
          robot_angle: 179.3,
          index: '33',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '517',
          point_type: 'OPERATE_POINT',
          name: '1FW01',
          coordinate: {
            x: 20.795,
            y: -4.965,
          },
          robot_angle: 90,
          index: '34',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '518',
          point_type: 'OPERATE_POINT',
          name: '#2CQ03',
          coordinate: {
            x: 24.676,
            y: 20.27,
          },
          robot_angle: -108.1,
          index: '35',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '519',
          point_type: 'OPERATE_POINT',
          name: '#2KZ03',
          coordinate: {
            x: 23.33,
            y: 17.102,
          },
          robot_angle: -118.4,
          index: '36',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '520',
          point_type: 'OPERATE_POINT',
          name: '#2KZ01',
          coordinate: {
            x: 21.458,
            y: 14.187,
          },
          robot_angle: 53.6,
          index: '37',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '521',
          point_type: 'OPERATE_POINT',
          name: '#2CQ04',
          coordinate: {
            x: 19.151,
            y: 11.531,
          },
          robot_angle: -136.9,
          index: '38',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '522',
          point_type: 'OPERATE_POINT',
          name: '#2ZY05',
          coordinate: {
            x: -7.667,
            y: 11.902,
          },
          robot_angle: -130.84,
          index: '39',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '523',
          point_type: 'OPERATE_POINT',
          name: '#1ZY03',
          coordinate: {
            x: -8.981,
            y: 12.787,
          },
          robot_angle: -130.84,
          index: '40',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '524',
          point_type: 'OPERATE_POINT',
          name: '#2ZY06',
          coordinate: {
            x: -10.185,
            y: 13.935,
          },
          robot_angle: -134.69,
          index: '41',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '525',
          point_type: 'OPERATE_POINT',
          name: '#2ZY07',
          coordinate: {
            x: -11.319,
            y: 15.242,
          },
          robot_angle: -134.69,
          index: '42',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '526',
          point_type: 'OPERATE_POINT',
          name: '#1ZY01',
          coordinate: {
            x: -12.236,
            y: 16.513,
          },
          robot_angle: -145.79,
          index: '43',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '527',
          point_type: 'OPERATE_POINT',
          name: '#2ZY08',
          coordinate: {
            x: -12.972,
            y: 17.713,
          },
          robot_angle: -145.79,
          index: '44',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '528',
          point_type: 'OPERATE_POINT',
          name: '#1FW01',
          coordinate: {
            x: -13.62,
            y: 18.936,
          },
          robot_angle: -152.42,
          index: '45',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '529',
          point_type: 'OPERATE_POINT',
          name: '#1ZY04',
          coordinate: {
            x: -14.19,
            y: 20.163,
          },
          robot_angle: -157.54,
          index: '46',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '530',
          point_type: 'OPERATE_POINT',
          name: '#2ZY10',
          coordinate: {
            x: -14.721,
            y: 21.494,
          },
          robot_angle: -164.44,
          index: '47',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '531',
          point_type: 'OPERATE_POINT',
          name: '#1ZY02',
          coordinate: {
            x: -15.122,
            y: 22.888,
          },
          robot_angle: -164.44,
          index: '48',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '532',
          point_type: 'OPERATE_POINT',
          name: '#2ZY09',
          coordinate: {
            x: -15.425,
            y: 24.235,
          },
          robot_angle: -170.9,
          index: '49',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '533',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-50',
          coordinate: {
            x: -15.487,
            y: 25.413,
          },
          robot_angle: -173.47,
          index: '50',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '534',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-51',
          coordinate: {
            x: -19.458,
            y: 25.054,
          },
          robot_angle: -174.6,
          index: '51',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '546',
          point_type: 'OPERATE_POINT',
          name: '#2CQ02',
          coordinate: {
            x: -14.755,
            y: 19.105,
          },
          robot_angle: 137.5,
          index: '63',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '547',
          point_type: 'OPERATE_POINT',
          name: '#2KZ04',
          coordinate: {
            x: -15.505,
            y: 20.165,
          },
          robot_angle: 123.78,
          index: '64',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '548',
          point_type: 'OPERATE_POINT',
          name: '#2KZ02',
          coordinate: {
            x: -15.562,
            y: 17.547,
          },
          robot_angle: -62.44,
          index: '65',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '549',
          point_type: 'OPERATE_POINT',
          name: '#2CQ01',
          coordinate: {
            x: -16.931,
            y: 20.741,
          },
          robot_angle: 108.1,
          index: '66',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '553',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-70',
          coordinate: {
            x: 22.979,
            y: -2.775,
          },
          robot_angle: 90,
          index: '70',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '561',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-78',
          coordinate: {
            x: -16.885,
            y: 16.885,
          },
          robot_angle: 90,
          index: '78',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '582',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-99',
          coordinate: {
            x: 24.415,
            y: 16.474,
          },
          robot_angle: 90,
          index: '99',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '583',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-100',
          coordinate: {
            x: 20.358,
            y: 10.145,
          },
          robot_angle: 90,
          index: '100',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '584',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-101',
          coordinate: {
            x: 20.335,
            y: 1.335,
          },
          robot_angle: 90,
          index: '101',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '590',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-107',
          coordinate: {
            x: 20,
            y: 4.825,
          },
          robot_angle: 90,
          index: '107',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '609',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-126',
          coordinate: {
            x: 23.025,
            y: 12.935,
          },
          robot_angle: 90,
          index: '126',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '617',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-134',
          coordinate: {
            x: -17.105,
            y: 18.695,
          },
          robot_angle: 90,
          index: '134',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '619',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-136',
          coordinate: {
            x: -17.063,
            y: 17.475,
          },
          robot_angle: 90,
          index: '136',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '624',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-141',
          coordinate: {
            x: 20.625,
            y: -3.355,
          },
          robot_angle: 90,
          index: '141',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '626',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-143',
          coordinate: {
            x: 24.395,
            y: -5.105,
          },
          robot_angle: 90,
          index: '143',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '628',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-145',
          coordinate: {
            x: 25.225,
            y: -9.175,
          },
          robot_angle: 90,
          index: '145',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '630',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-147',
          coordinate: {
            x: 21,
            y: -11.805,
          },
          robot_angle: 90,
          index: '147',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '632',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-149',
          coordinate: {
            x: 10.145,
            y: -10.235,
          },
          robot_angle: 90,
          index: '149',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '634',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-151',
          coordinate: {
            x: 4.805,
            y: -8.925,
          },
          robot_angle: 90,
          index: '151',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '636',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-153',
          coordinate: {
            x: 4.825,
            y: -5.085,
          },
          robot_angle: 90,
          index: '153',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '641',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-158',
          coordinate: {
            x: -18.055,
            y: 20.322,
          },
          robot_angle: 90,
          index: '158',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '644',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-161',
          coordinate: {
            x: -15.508,
            y: 13.744,
          },
          robot_angle: 90,
          index: '161',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '647',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-164',
          coordinate: {
            x: 25.805,
            y: 20.205,
          },
          robot_angle: 90,
          index: '164',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '651',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-168',
          coordinate: {
            x: 10.545,
            y: -5.995,
          },
          robot_angle: 90,
          index: '168',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '652',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-169',
          coordinate: {
            x: 13.066,
            y: -5.925,
          },
          robot_angle: 90,
          index: '169',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '653',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-170',
          coordinate: {
            x: 15.195,
            y: -5.705,
          },
          robot_angle: 90,
          index: '170',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '654',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-171',
          coordinate: {
            x: 17.905,
            y: -6.28,
          },
          robot_angle: 90,
          index: '171',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '655',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-172',
          coordinate: {
            x: 19.885,
            y: -6.275,
          },
          robot_angle: 90,
          index: '172',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '656',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-173',
          coordinate: {
            x: 10.815,
            y: -7.79,
          },
          robot_angle: 90,
          index: '173',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '657',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-174',
          coordinate: {
            x: 13.115,
            y: -8.105,
          },
          robot_angle: 90,
          index: '174',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '658',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-175',
          coordinate: {
            x: 17.585,
            y: -8.125,
          },
          robot_angle: 90,
          index: '175',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '659',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-176',
          coordinate: {
            x: 19.715,
            y: -7.965,
          },
          robot_angle: 90,
          index: '176',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '684',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-201',
          coordinate: {
            x: 21.218,
            y: -1.535,
          },
          robot_angle: 90,
          index: '201',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '692',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-209',
          coordinate: {
            x: 10.025,
            y: -3.425,
          },
          robot_angle: 90,
          index: '209',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '695',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-212',
          coordinate: {
            x: 22.641,
            y: -6.034,
          },
          robot_angle: 90,
          index: '212',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '696',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-213',
          coordinate: {
            x: 22.755,
            y: -8.026,
          },
          robot_angle: 90,
          index: '213',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '702',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-219',
          coordinate: {
            x: 7.445,
            y: -5.505,
          },
          robot_angle: 90,
          index: '219',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '703',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-220',
          coordinate: {
            x: 7.145,
            y: -7.965,
          },
          robot_angle: 90,
          index: '220',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '710',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-227',
          coordinate: {
            x: 7.205,
            y: -2.915,
          },
          robot_angle: 90,
          index: '227',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '719',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-236',
          coordinate: {
            x: 17.955,
            y: 0.075,
          },
          robot_angle: 90,
          index: '236',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '725',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-242',
          coordinate: {
            x: 26.38,
            y: -0.615,
          },
          robot_angle: 90,
          index: '242',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '732',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-249',
          coordinate: {
            x: 20.243,
            y: -4.579,
          },
          robot_angle: 90,
          index: '249',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '736',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-253',
          coordinate: {
            x: 23.115,
            y: 9.66,
          },
          robot_angle: 90,
          index: '253',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '738',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-255',
          coordinate: {
            x: 24.788,
            y: -0.465,
          },
          robot_angle: 90,
          index: '255',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '755',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-272',
          coordinate: {
            x: 3.855,
            y: -2.255,
          },
          robot_angle: 90,
          index: '272',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '761',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-278',
          coordinate: {
            x: -19.105,
            y: 23.075,
          },
          robot_angle: 90,
          index: '278',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '766',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-283',
          coordinate: {
            x: 20.595,
            y: -10.27,
          },
          robot_angle: 90,
          index: '283',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '771',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-288',
          coordinate: {
            x: 16.885,
            y: 2.035,
          },
          robot_angle: 90,
          index: '288',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '778',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-295',
          coordinate: {
            x: 22.515,
            y: -4.755,
          },
          robot_angle: 90,
          index: '295',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '790',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-307',
          coordinate: {
            x: 16.535,
            y: -11.635,
          },
          robot_angle: 88.96,
          index: '307',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '791',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-308',
          coordinate: {
            x: 16.436,
            y: -13.585,
          },
          robot_angle: 88.96,
          index: '308',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '802',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-319',
          coordinate: {
            x: -13.975,
            y: 4.135,
          },
          robot_angle: 90,
          index: '319',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
        {
          id: '805',
          point_type: 'OPERATE_POINT',
          name: '\u4F5C\u4E1A\u7AD9-322',
          coordinate: {
            x: -3.906,
            y: 1.285,
          },
          robot_angle: 90,
          index: '322',
          relevance_map_id: '',
          relevance_point_id: '',
          desc: '',
          expansion: {},
        },
      ],
      lines: [
        {
          id: '395',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '13',
          target: '9',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '396',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '3',
          target: '29',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '398',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '28',
          target: '30',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '401',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '15',
          target: '6',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '402',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '16',
          target: '7',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '404',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '43',
          target: '45',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '405',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '2',
          target: '28',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '406',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '165',
          target: '166',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '407',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '166',
          target: '168',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '408',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '125',
          target: '124',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '409',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '43',
          target: '129',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '415',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '212',
          target: '191',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '419',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '218',
          target: '190',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '422',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '184',
          target: '129',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '426',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '21',
          target: '4',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '427',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '113',
          target: '264',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '428',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '113',
          target: '114',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '430',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '168',
          target: '264',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '431',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '125',
          target: '274',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '432',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '274',
          target: '126',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '433',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '280',
          target: '249',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '435',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '280',
          target: '9',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '437',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '23',
          target: '299',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '438',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '299',
          target: '8',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '442',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '324',
          target: '254',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '443',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '325',
          target: '255',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '444',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '254',
          target: '330',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '445',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '255',
          target: '331',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '448',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '338',
          target: '339',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '449',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '339',
          target: '340',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '450',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '340',
          target: '341',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '451',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '341',
          target: '342',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '454',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '342',
          target: '43',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '455',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '342',
          target: '45',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '459',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '330',
          target: '184',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '461',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '331',
          target: '360',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '462',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '360',
          target: '46',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '463',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '330',
          target: '129',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '465',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '114',
          target: '192',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '467',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '331',
          target: '46',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '487',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '380',
          target: '381',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '494',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '491',
          target: '384',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '535',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '523',
          target: '524',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '536',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '524',
          target: '525',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '537',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '525',
          target: '526',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '538',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '526',
          target: '527',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '539',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '527',
          target: '528',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '540',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '528',
          target: '529',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '541',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '529',
          target: '530',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '542',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '530',
          target: '531',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '543',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '531',
          target: '532',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '544',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '534',
          target: '533',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '545',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '532',
          target: '533',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '578',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '522',
          target: '523',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '592',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '521',
          target: '583',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '599',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '582',
          target: '590',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '610',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '519',
          target: '582',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '612',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '520',
          target: '609',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '616',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '561',
          target: '548',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '618',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '547',
          target: '617',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '620',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '619',
          target: '546',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '627',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '382',
          target: '626',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '629',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '385',
          target: '628',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '633',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '632',
          target: '77',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '635',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '634',
          target: '375',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '637',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '636',
          target: '373',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '638',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '516',
          target: '624',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '642',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '549',
          target: '641',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '643',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '641',
          target: '561',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '645',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '5',
          target: '644',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '646',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '11',
          target: '644',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '648',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '518',
          target: '647',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '649',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '647',
          target: '582',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '660',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '653',
          target: '493',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '663',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '652',
          target: '495',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '664',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '651',
          target: '498',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '665',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '656',
          target: '497',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '666',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '657',
          target: '496',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '667',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '507',
          target: '658',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '668',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '512',
          target: '659',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '669',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '506',
          target: '655',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '670',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '584',
          target: '609',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '672',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '505',
          target: '654',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '673',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '46',
          target: '45',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '677',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '636',
          target: '634',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '680',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '630',
          target: '584',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '694',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '692',
          target: '372',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '697',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '659',
          target: '696',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '699',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '654',
          target: '695',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '700',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '658',
          target: '696',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '701',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '655',
          target: '695',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '704',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '702',
          target: '651',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '705',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '702',
          target: '652',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '706',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '702',
          target: '653',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '707',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '703',
          target: '656',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '708',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '703',
          target: '657',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '712',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '703',
          target: '710',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '713',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '702',
          target: '710',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '726',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '725',
          target: '380',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '727',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '725',
          target: '383',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '728',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '380',
          target: '383',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '729',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '584',
          target: '590',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '730',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '584',
          target: '624',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '731',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '609',
          target: '582',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '733',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '384',
          target: '732',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '734',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '732',
          target: '381',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '737',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '582',
          target: '736',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '739',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '738',
          target: '736',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '741',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '583',
          target: '590',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '742',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '738',
          target: '628',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '743',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '626',
          target: '590',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '745',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '634',
          target: '632',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '750',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '636',
          target: '492',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '752',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '553',
          target: '695',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '753',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '553',
          target: '696',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '756',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '755',
          target: '710',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '759',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '719',
          target: '684',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '760',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '553',
          target: '684',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '762',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '534',
          target: '761',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '763',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '761',
          target: '641',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '767',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '374',
          target: '766',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '768',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '630',
          target: '766',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '774',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '771',
          target: '719',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '775',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '755',
          target: '684',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '779',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '517',
          target: '778',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '780',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '778',
          target: '553',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '792',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '791',
          target: '790',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '797',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '348',
          target: '253',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '800',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '11',
          target: '221',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '801',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '249',
          target: '221',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '803',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '21',
          target: '802',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '804',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '802',
          target: '23',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '806',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '29',
          target: '805',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '810',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '30',
          target: '16',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '811',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '348',
          target: '62',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '813',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '253',
          target: '10',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '814',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '10',
          target: '129',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '815',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '338',
          target: '340',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '820',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '805',
          target: '15',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '821',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '326',
          target: '254',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
        {
          id: '822',
          name: '',
          line_shape: 'POLYGONAL_LINE',
          coordinates: [],
          source: '327',
          target: '255',
          line_type: 'NAVI_PATH',
          device_id: [],
          radius: 0,
          index: '',
          desc: '',
          expansion: {},
        },
      ],
      areas: [],
    },
    version: '1001',
    area: {
      id: '',
      name: '',
    },
    publish_status: 'NOT_PUBLISH',
    creator: '',
    create_time: '2024-04-09T13:53:46+08:00',
    update_time: '2024-04-09T13:53:46+08:00',
    from: 'rms',
    device_type: 'rms',
    lock_user: 'admin',
    lock_time: '2024-04-11 13:12:09',
    device_id: '',
    floor: 0,
  },
};

export const clouds = [
  {
    y: 9.4143305,
    x: -8.899031,
  },
  {
    x: -8.823202,
    y: 9.362714,
  },
  {
    x: -8.745526,
    y: 9.303045,
  },
  {
    x: -8.67945,
    y: 9.279319,
  },
  {
    x: -8.613069,
    y: 9.253348,
  },
  {
    x: -8.536815,
    y: 9.192511,
  },
  {
    x: -8.464477,
    y: 9.142787,
  },
  {
    x: -8.392621,
    y: 9.092681,
  },
  {
    x: -8.32071,
    y: 9.040273,
  },
  {
    x: -8.250365,
    y: 8.99134,
  },
  {
    x: -8.179969,
    y: 8.94011,
  },
  {
    x: -8.112126,
    y: 8.89624,
  },
  {
    x: -8.043696,
    y: 8.848154,
  },
  {
    x: -7.9762278,
    y: 8.801651,
  },
  {
    x: -7.909205,
    y: 8.754801,
  },
  {
    x: -7.8450494,
    y: 8.717311,
  },
  {
    x: -7.7765083,
    y: 8.660073,
  },
  {
    x: -7.7113047,
    y: 8.614146,
  },
  {
    x: -7.648374,
    y: 8.575673,
  },
  {
    x: -7.5840144,
    y: 8.529096,
  },
  {
    x: -7.518324,
    y: 8.474389,
  },
  {
    x: -7.449664,
    y: 8.4037285,
  },
  {
    x: -7.3884673,
    y: 8.36397,
  },
  {
    x: -7.3247232,
    y: 8.310219,
  },
  {
    x: -7.2647552,
    y: 8.271804,
  },
  {
    x: -7.208369,
    y: 8.24877,
  },
  {
    x: -7.151825,
    y: 8.223509,
  },
  {
    x: -7.098233,
    y: 8.21172,
  },
  {
    y: 8.2252245,

    x: -7.049685,
  },
  {
    x: -6.996637,
    y: 8.214939,
  },
  {
    x: -6.943715,
    y: 8.204416,
  },
  {
    x: -6.8937397,
    y: 8.209407,
  },
  {
    x: -6.853054,
    y: 8.267379,
  },
  {
    x: -6.8058724,
    y: 8.289727,
  },
  {
    x: -6.759851,
    y: 8.31978,
  },
  {
    x: -6.720001,
    y: 8.38914,
  },
  {
    x: -6.6649804,
    y: 8.365519,
  },
  {
    x: -6.4928846,
    y: 7.896173,
  },
  {
    x: -6.435175,
    y: 7.8359156,
  },
  {
    x: -6.38495,
    y: 7.8248906,
  },
  {
    x: -6.330532,
    y: 7.781938,
  },
  {
    y: 7.748644,

    x: -6.2778077,
  },
  {
    x: -6.2238717,
    y: 7.703205,
  },
  {
    y: 7.6694226,

    x: -6.1718106,
  },
  {
    x: -6.1210046,
    y: 7.6433463,
  },
  {
    x: -6.069985,
    y: 7.613068,
  },
  {
    y: 7.5825596,

    x: -6.019242,
  },
  {
    y: 7.559777,

    x: -5.9696236,
  },
  {
    x: -5.9216394,
    y: 7.550702,
  },
  {
    x: -5.873752,
    y: 7.5414214,
  },
  {
    y: 7.5060472,

    x: -5.8235383,
  },
  {
    x: -5.774709,
    y: 7.4824004,
  },
  {
    x: -5.725247,
    y: 7.448575,
  },
  {
    x: -5.677377,
    y: 7.4304786,
  },
  {
    x: -5.628757,
    y: 7.4002075,
  },
  {
    x: -5.581274,
    y: 7.3816915,
  },
  {
    x: -5.53328,
    y: 7.3529954,
  },
  {
    x: -5.485539,
    y: 7.324087,
  },
  {
    x: -5.4379344,
    y: 7.2929764,
  },
  {
    x: -5.3909373,
    y: 7.2676487,
  },
  {
    x: -5.3445745,
    y: 7.250106,
  },
  {
    x: -5.2979913,
    y: 7.2243757,
  },
  {
    x: -5.251461,
    y: 7.1944485,
  },
  {
    x: -5.2052684,
    y: 7.166319,
  },
  {
    x: -5.1597366,
    y: 7.149985,
  },
  {
    x: -5.1142874,
    y: 7.1314583,
  },
  {
    x: -5.068631,
    y: 7.098745,
  },
  {
    x: -5.023432,
    y: 7.073834,
  },
  {
    x: -4.9783745,
    y: 7.0447335,
  },
  {
    x: -4.9336476,
    y: 7.021441,
  },
  {
    y: 7.00396,

    x: -4.8891773,
  },
  {
    y: 6.9742928,

    x: -4.844791,
  },
  {
    x: -4.8006673,
    y: 6.95444,
  },
  {
    x: -4.7567163,
    y: 6.932402,
  },
  {
    x: -4.7130075,
    y: 6.902181,
  },
  {
    x: -4.6695967,
    y: 6.8677783,
  },
  {
    x: -4.6267214,
    y: 6.817198,
  },
  {
    x: -4.5838337,
    y: 6.7884383,
  },
  {
    x: -4.5410886,
    y: 6.7634997,
  },
  {
    x: -4.498156,
    y: 6.752381,
  },
  {
    x: -4.4558287,
    y: 6.7250915,
  },
  {
    x: -4.413579,
    y: 6.701625,
  },
  {
    x: -4.3715196,
    y: 6.677986,
  },
  {
    x: -4.3281274,
    y: 6.6881404,
  },
  {
    x: -4.2865057,
    y: 6.6601567,
  },
  {
    y: 6.64199,

    x: -4.2445784,
  },
  {
    x: -4.2033677,
    y: 6.613669,
  },
  {
    y: 6.5871773,

    x: -4.1622624,
  },
  {
    x: -4.1217628,
    y: 6.554534,
  },
  {
    x: -4.0801272,
    y: 6.5416794,
  },
  {
    y: 6.516687,

    x: -4.0394773,
  },
  {
    x: -3.99918,
    y: 6.4895387,
  },
  {
    x: -3.9584382,
    y: 6.4702015,
  },
  {
    x: -3.9181905,
    y: 6.446716,
  },
  {
    x: -3.8781252,
    y: 6.423068,
  },
  {
    x: -3.834634,
    y: 6.4370894,
  },
  {
    y: 6.460871,

    x: -3.7900176,
  },
  {
    x: -3.7460122,
    y: 6.4764967,
  },
  {
    x: -3.700999,
    y: 6.499884,
  },
  {
    y: 6.5171056,

    x: -3.6564407,
  },
  {
    x: -3.610793,
    y: 6.542076,
  },
  {
    x: -3.569475,
    y: 6.529116,
  },
  {
    x: -3.5312228,
    y: 6.492172,
  },
  {
    x: -3.254836,
    y: 7.920507,
  },
  {
    x: -3.208153,
    y: 7.9040785,
  },
  {
    x: -3.162143,
    y: 7.8835015,
  },
  {
    x: -3.1154096,
    y: 7.868675,
  },
  {
    x: -3.0699625,
    y: 7.8457494,
  },
  {
    x: -3.0237603,
    y: 7.8285713,
  },
  {
    x: -2.9770424,
    y: 7.815158,
  },
  {
    x: -2.9310515,
    y: 7.797605,
  },
  {
    x: -2.8845136,
    y: 7.783811,
  },
  {
    x: -2.8383977,
    y: 7.767855,
  },
  {
    x: -2.7920346,
    y: 7.7536826,
  },
  {
    x: -2.7461123,
    y: 7.737351,
  },
  {
    x: -2.6995637,
    y: 7.724767,
  },
  {
    x: -2.6530838,
    y: 7.711991,
  },
  {
    x: -2.6070554,
    y: 7.6970606,
  },
  {
    x: -2.563448,
    y: 7.6701713,
  },
  {
    x: -2.5160563,
    y: 7.6627154,
  },
  {
    x: -2.4715257,
    y: 7.6413503,
  },
  {
    x: -2.425066,
    y: 7.6295934,
  },
  {
    x: -2.3799295,
    y: 7.6117783,
  },
  {
    x: -2.3331816,
    y: 7.6015944,
  },
  {
    x: -2.2869148,
    y: 7.5892634,
  },
  {
    x: -2.242939,
    y: 7.566993,
  },
  {
    x: -2.1963794,
    y: 7.5562363,
  },
  {
    x: -2.1507907,
    y: 7.541393,
  },
  {
    x: -2.1052814,
    y: 7.526361,
  },
  {
    y: 7.171789,

    x: -2.095808,
  },
  {
    x: -2.0662508,
    y: 7.1003485,
  },
  {
    x: -2.0191326,
    y: 7.098533,
  },
  {
    x: -1.9704472,
    y: 7.102312,
  },
  {
    x: -1.9232408,
    y: 7.100074,
  },
  {
    x: -1.8744209,
    y: 7.103416,
  },
  {
    x: -1.8282005,
    y: 7.0969,
  },
  {
    y: 7.0805607,

    x: -1.7847013,
  },
  {
    x: -1.7440443,
    y: 7.0544314,
  },
  {
    x: -1.7041137,
    y: 7.0262284,
  },
  {
    x: -1.6620953,
    y: 7.0055475,
  },
  {
    x: -1.6213471,
    y: 6.9808702,
  },
  {
    x: -1.5819187,
    y: 6.952211,
  },
  {
    x: -1.5432662,
    y: 6.9214954,
  },
  {
    x: -1.4886218,
    y: 6.9421573,
  },
  {
    x: -1.4392172,
    y: 6.9453955,
  },
  {
    x: -1.3909589,
    y: 6.9445972,
  },
  {
    x: -1.333294,
    y: 6.9720826,
  },
  {
    x: -1.2886026,
    y: 6.9594183,
  },
  {
    x: -1.2522715,
    y: 6.921929,
  },
  {
    x: -1.2110131,
    y: 6.899459,
  },
  {
    x: -1.1718471,
    y: 6.871158,
  },
  {
    x: -1.1341819,
    y: 6.8389397,
  },
  {
    x: -1.083299,
    y: 6.8442683,
  },
  {
    x: -1.0261948,
    y: 6.866284,
  },
  {
    x: -0.972964,
    y: 6.876733,
  },
  {
    x: -0.92513853,
    y: 6.8719144,
  },
  {
    x: -0.8793948,
    y: 6.8612604,
  },
  {
    y: 6.8373203,

    x: -0.83864486,
  },
  {
    x: -0.79300004,
    y: 6.8262863,
  },
  {
    x: -0.7524609,
    y: 6.8020086,
  },
  {
    x: -0.7069167,
    y: 6.7905965,
  },
  {
    x: -0.6628817,
    y: 6.7752695,
  },
  {
    x: -0.6166547,
    y: 6.765318,
  },
  {
    y: 6.7440534,

    x: -0.5749826,
  },
  {
    x: -0.5326503,
    y: 6.724468,
  },
  {
    x: -0.48886213,
    y: 6.7084007,
  },
  {
    x: -0.44591498,
    y: 6.6903033,
  },
  {
    x: -0.40540877,
    y: 6.666511,
  },
  {
    x: -0.34672,
    y: 6.684762,
  },
  {
    x: -0.28539068,
    y: 6.708194,
  },
  {
    y: 6.672791,

    x: -0.24974748,
  },
  {
    x: -0.21677761,
    y: 6.631797,
  },
  {
    y: 6.588885,

    x: -0.18489863,
  },
  {
    x: -0.12160114,
    y: 6.6149592,
  },
  {
    x: -0.05800443,
    y: 6.6406813,
  },
  {
    x: -0.0051524956,
    y: 6.642509,
  },
  {
    x: 0.048653856,
    y: 6.6458783,
  },
  {
    y: 6.652583,

    x: 0.104301706,
  },
  {
    x: 0.15137012,
    y: 6.6410017,
  },
  {
    x: 0.18347462,
    y: 6.5986686,
  },
  {
    x: 0.22329564,
    y: 6.572379,
  },
  {
    x: 0.26477182,
    y: 6.5495105,
  },
  {
    x: 0.30343908,
    y: 6.5211186,
  },
  {
    x: 0.39470896,
    y: 6.595891,
  },
  {
    x: 0.43350923,
    y: 6.5669837,
  },
  {
    x: 0.48047864,
    y: 6.5538926,
  },
  {
    x: 0.53395224,
    y: 6.552973,
  },
  {
    x: 0.5781175,
    y: 6.534124,
  },
  {
    x: 0.6269522,
    y: 6.5238914,
  },
  {
    x: 0.6719789,
    y: 6.5063963,
  },
  {
    x: 0.71791565,
    y: 6.490454,
  },
  {
    x: 0.76865697,
    y: 6.4830513,
  },
  {
    y: 6.466671,

    x: 0.81455326,
  },
  {
    x: 0.8604102,
    y: 6.4500833,
  },
  {
    x: 0.9022632,
    y: 6.4263363,
  },
  {
    x: 2.4907095,
    y: 9.089002,
  },
  {
    x: 2.5616941,
    y: 9.089525,
  },
  {
    x: 2.6317987,
    y: 9.087953,
  },
  {
    x: 2.7030382,
    y: 9.087733,
  },
  {
    x: 2.7754333,
    y: 9.088857,
  },
  {
    x: 2.8417642,
    y: 9.079321,
  },
  {
    x: 2.916477,
    y: 9.083113,
  },
  {
    x: 2.9903061,
    y: 9.084796,
  },
  {
    x: 3.0526755,
    y: 9.067394,
  },
  {
    x: 3.062974,
    y: 8.966664,
  },
  {
    x: 3.1185582,
    y: 8.93874,
  },
  {
    x: 3.1988091,
    y: 8.949335,
  },
  {
    x: 3.2760353,
    y: 8.9544325,
  },
  {
    x: 3.353445,
    y: 8.959104,
  },
  {
    x: 3.4200563,
    y: 8.946626,
  },
  {
    x: 3.4911256,
    y: 8.940478,
  },
  {
    x: 3.5656214,
    y: 8.938941,
  },
  {
    x: 3.6391313,
    y: 8.935341,
  },
  {
    x: 2.3142354,
    y: 6.7839494,
  },
  {
    x: 2.3130376,
    y: 6.6900053,
  },
  {
    x: 2.3662002,
    y: 6.6749225,
  },
  {
    x: 2.4182072,
    y: 6.657939,
  },
  {
    x: 4.175501,
    y: 8.924953,
  },
  {
    x: 4.246469,
    y: 8.913211,
  },
  {
    y: 8.920465,

    x: 4.3316593,
  },
  {
    x: 4.4111342,
    y: 8.919178,
  },
  {
    x: 4.4883695,
    y: 8.914233,
  },
  {
    x: 4.5068974,
    y: 8.830481,
  },
  {
    x: 4.714714,
    y: 8.888875,
  },
  {
    x: 4.727692,
    y: 8.798263,
  },
  {
    y: 8.677754,

    x: 4.7167616,
  },
  {
    x: 4.713626,
    y: 8.568575,
  },
  {
    x: 4.7134643,
    y: 8.464343,
  },
  {
    x: 4.703869,
    y: 8.349381,
  },
  {
    x: 4.7060127,
    y: 8.250298,
  },
  {
    x: 4.7238736,
    y: 8.171597,
  },
  {
    y: 10.043326,

    x: 6.337003,
  },
  {
    x: 6.3467593,
    y: 9.939531,
  },
  {
    x: 3.7778544,
    y: 6.7383366,
  },
  {
    x: 3.784886,
    y: 6.6594734,
  },
  {
    x: 3.8146687,
    y: 6.6082106,
  },
  {
    x: 3.8805344,
    y: 6.5994678,
  },
  {
    y: 9.293031,

    x: 6.3676105,
  },
  {
    x: 6.340949,
    y: 9.154409,
  },
  {
    x: 6.347746,
    y: 9.055215,
  },
  {
    x: 6.3552365,
    y: 8.95768,
  },
  {
    x: 6.366116,
    y: 8.864769,
  },
  {
    y: 8.773469,

    x: 6.3777566,
  },
  {
    x: 6.3861313,
    y: 8.679338,
  },
  {
    x: 6.400688,
    y: 8.592708,
  },
  {
    x: 6.403827,
    y: 8.494449,
  },
  {
    x: 6.411809,
    y: 8.402216,
  },
  {
    x: 6.4535513,
    y: 8.346477,
  },
  {
    x: 7.4303074,
    y: 9.272418,
  },
  {
    x: 7.5448885,
    y: 9.284589,
  },
  {
    y: 6.799371,

    x: 5.2412524,
  },
  {
    x: 5.2649646,
    y: 6.7372413,
  },
  {
    x: 5.274297,
    y: 6.6608477,
  },
  {
    x: 5.3353186,
    y: 6.637057,
  },
  {
    x: 8.3411875,
    y: 9.443384,
  },
  {
    x: 7.883542,
    y: 8.7818775,
  },
  {
    x: 7.886178,
    y: 8.681463,
  },
  {
    x: 7.9142013,
    y: 8.606139,
  },
  {
    x: 7.933114,
    y: 8.522534,
  },
  {
    x: 7.9486375,
    y: 8.436243,
  },
  {
    x: 7.966584,
    y: 8.352763,
  },
  {
    x: 6.7295423,
    y: 7.018795,
  },
  {
    y: 6.943533,

    x: 6.744146,
  },
  {
    x: 6.7523837,
    y: 6.862974,
  },
  {
    y: 6.7825313,

    x: 6.760149,
  },
  {
    x: 6.768939,
    y: 6.7035336,
  },
  {
    x: 6.7772717,
    y: 6.624645,
  },
  {
    x: 6.7851458,
    y: 6.545867,
  },
  {
    x: 6.7910514,
    y: 6.4658937,
  },
  {
    x: 6.7995267,
    y: 6.388653,
  },
  {
    x: 6.9492235,
    y: 6.432044,
  },
  {
    x: 7.055155,
    y: 6.436957,
  },
  {
    x: 7.1367846,
    y: 6.4206243,
  },
  {
    x: 7.2662086,
    y: 6.443362,
  },
  {
    x: 7.380583,
    y: 6.4524865,
  },
  {
    x: 7.4952435,
    y: 6.460827,
  },
  {
    x: 7.6070757,
    y: 6.465867,
  },
  {
    x: 7.765983,
    y: 6.5076675,
  },
  {
    x: 7.97713,
    y: 6.5893717,
  },
  {
    x: 8.165613,
    y: 6.6509156,
  },
  {
    x: 8.258682,
    y: 6.635961,
  },
  {
    x: 8.484687,
    y: 6.7232585,
  },
  {
    x: 8.649778,
    y: 6.761346,
  },
  {
    x: 8.772447,
    y: 6.7655272,
  },
  {
    y: 6.8086066,

    x: 8.94807,
  },
  {
    y: 6.867166,

    x: 9.146716,
  },
  {
    x: 9.252904,
    y: 6.855158,
  },
  {
    x: 8.917219,
    y: 6.341886,
  },
  {
    x: 8.888615,
    y: 6.234342,
  },
  {
    x: 8.895237,
    y: 6.152668,
  },
  {
    x: 9.012171,
    y: 6.0628552,
  },
  {
    x: 9.0951185,
    y: 6.034517,
  },
  {
    x: 10.872665,
    y: 6.973988,
  },
  {
    x: 10.904975,
    y: 6.9005365,
  },
  {
    x: 10.955302,
    y: 6.839118,
  },
  {
    x: 10.985308,
    y: 6.7643247,
  },
  {
    x: 11.025031,
    y: 6.695988,
  },
  {
    x: 11.064461,
    y: 6.627501,
  },
  {
    y: 6.5642314,

    x: 11.11203,
  },
  {
    y: 6.4783416,

    x: 11.123817,
  },
  {
    x: 11.162307,
    y: 6.409485,
  },
  {
    x: 11.195396,
    y: 6.337324,
  },
  {
    x: 14.606069,
    y: 7.8933344,
  },
  {
    y: 14.412876,

    x: 26.544647,
  },
  {
    x: 26.543104,
    y: 14.238018,
  },
  {
    y: 14.061531,

    x: 26.537167,
  },
  {
    x: 26.554762,
    y: 13.899028,
  },
  {
    x: 26.552279,
    y: 13.726065,
  },
  {
    x: 26.54539,
    y: 13.551512,
  },
  {
    x: 26.537588,
    y: 13.37732,
  },
  {
    x: 26.541225,
    y: 13.210103,
  },
  {
    x: 26.54224,
    y: 13.0422125,
  },
  {
    x: 26.530003,
    y: 12.868109,
  },
  {
    x: 26.51331,
    y: 12.692559,
  },
  {
    x: 26.253752,
    y: 12.393144,
  },
  {
    y: 12.354528,

    x: 26.500338,
  },
  {
    y: 12.207149,

    x: 26.53454,
  },
  {
    x: 26.52688,
    y: 12.039257,
  },
  {
    y: 11.864636,

    x: 26.504013,
  },
  {
    x: 26.510796,
    y: 11.705382,
  },
  {
    x: 26.509588,
    y: 11.542864,
  },
  {
    x: 26.509375,
    y: 11.381489,
  },
  {
    x: 26.501122,
    y: 11.216962,
  },
  {
    x: 26.493855,
    y: 11.053614,
  },
  {
    x: 26.50756,
    y: 10.900652,
  },
  {
    y: 10.736196,

    x: 26.495062,
  },
  {
    x: 26.485388,
    y: 10.573748,
  },
  {
    x: 26.215591,
    y: 10.295795,
  },
  {
    y: 10.253079,

    x: 26.470915,
  },
  {
    x: 26.504646,
    y: 10.111617,
  },
  {
    x: 26.493671,
    y: 9.95109,
  },
  {
    y: 9.79796,

    x: 26.498459,
  },
  {
    x: 26.491459,
    y: 9.640365,
  },
  {
    x: 26.489225,
    y: 9.485372,
  },
  {
    x: 26.489939,
    y: 9.3321495,
  },
  {
    x: 26.49733,
    y: 9.18217,
  },
  {
    x: 26.489172,
    y: 9.026384,
  },
  {
    x: 26.496984,
    y: 8.877537,
  },
  {
    x: 26.487343,
    y: 8.722269,
  },
  {
    x: 26.476954,
    y: 8.5673,
  },
  {
    y: 8.41907,

    x: 26.482624,
  },
  {
    x: 26.218212,
    y: 8.169153,
  },
  {
    x: 26.409445,
    y: 8.092332,
  },
  {
    x: 26.48235,
    y: 7.970543,
  },
  {
    x: 26.481478,
    y: 7.821681,
  },
  {
    y: 7.6737056,

    x: 26.481794,
  },
  {
    x: 26.485191,
    y: 7.527263,
  },
  {
    x: 26.48413,
    y: 7.3796687,
  },
  {
    x: 26.482388,
    y: 7.232279,
  },
  {
    x: 26.478065,
    y: 7.0844517,
  },
  {
    x: 26.476845,
    y: 6.9381213,
  },
  {
    x: 26.469252,
    y: 6.790103,
  },
  {
    x: 26.481882,
    y: 6.649158,
  },
  {
    x: 26.474844,
    y: 6.5021644,
  },
  {
    x: 26.47284,
    y: 6.3572226,
  },
  {
    x: 26.456812,
    y: 6.208299,
  },
  {
    x: 26.191591,
    y: 5.983188,
  },
  {
    x: 26.432228,
    y: 5.9142838,
  },
  {
    x: 26.46778,
    y: 5.7822824,
  },
  {
    x: 26.4644,
    y: 5.6388617,
  },
  {
    y: 5.4967456,

    x: 26.464209,
  },
  {
    x: 26.463375,
    y: 5.3547926,
  },
  {
    y: 5.212467,

    x: 26.459978,
  },
  {
    x: 26.455936,
    y: 5.0703254,
  },
  {
    x: 26.451254,
    y: 4.928373,
  },
  {
    x: 26.449797,
    y: 4.7876415,
  },
  {
    x: 26.461246,
    y: 4.6506267,
  },
  {
    x: 26.454672,
    y: 4.509165,
  },
  {
    y: 4.3649507,

    x: 26.43583,
  },
  {
    x: 26.447374,
    y: 4.228774,
  },
  {
    x: 26.413652,
    y: 4.0817065,
  },
  {
    x: 26.167273,
    y: 3.8841267,
  },
  {
    x: 26.404495,
    y: 3.8030622,
  },
  {
    x: 26.435036,
    y: 3.6723409,
  },
  {
    x: 26.429922,
    y: 3.5335226,
  },
  {
    x: 26.43591,
    y: 3.397482,
  },
  {
    y: 3.2602355,

    x: 26.435442,
  },
  {
    x: 26.428507,
    y: 3.1218603,
  },
  {
    x: 26.436619,
    y: 2.9869437,
  },
  {
    x: 26.422598,
    y: 2.8476558,
  },
  {
    x: 26.427565,
    y: 2.7125363,
  },
  {
    x: 26.433914,
    y: 2.5778735,
  },
  {
    x: 26.416113,
    y: 2.4387414,
  },
  {
    x: 26.429146,
    y: 2.305768,
  },
  {
    x: 26.425873,
    y: 2.1699069,
  },
  {
    x: 26.420044,
    y: 2.0338235,
  },
  {
    x: 26.388012,
    y: 1.8934128,
  },
  {
    y: -0.64910483,

    x: 12.698706,
  },
  {
    y: -0.72365534,

    x: 12.702822,
  },
  {
    x: 12.696742,
    y: -0.79974353,
  },
  {
    x: 12.246411,
    y: -1.0167267,
  },
  {
    x: 12.248972,
    y: -1.0892459,
  },
  {
    x: 12.227454,
    y: -1.1650797,
  },
  {
    x: 12.22542,
    y: -1.237991,
  },
  {
    x: 12.225055,
    y: -1.310583,
  },
  {
    x: 12.222399,
    y: -1.3833841,
  },
  {
    x: 12.223399,
    y: -1.455634,
  },
  {
    x: 12.218136,
    y: -1.5285635,
  },
  {
    x: 12.218522,
    y: -1.6007274,
  },
  {
    y: -1.6732986,

    x: 12.214626,
  },
  {
    x: 12.246216,
    y: -1.7419969,
  },
  {
    x: 16.656757,
    y: -1.3637395,
  },
  {
    x: 16.807068,
    y: -1.4397504,
  },
  {
    x: 17.335457,
    y: -1.4815489,
  },
  {
    x: 17.266254,
    y: -1.5811839,
  },
  {
    y: -1.6746008,

    x: 17.262363,
  },
  {
    x: 17.280008,
    y: -1.7661728,
  },
  {
    x: 30.626045,
    y: -0.834471,
  },
  {
    x: 30.62316,
    y: -0.9838489,
  },
  {
    x: 30.633614,
    y: -1.1321988,
  },
  {
    x: 30.625483,
    y: -1.2817457,
  },
  {
    x: 30.616716,
    y: -1.4311816,
  },
  {
    x: 30.619308,
    y: -1.5798355,
  },
  {
    x: 30.61528,
    y: -1.7287809,
  },
  {
    x: 30.628607,
    y: -1.8768091,
  },
  {
    x: 30.621334,
    y: -2.0257785,
  },
  {
    x: 30.611431,
    y: -2.174736,
  },
  {
    x: 30.608902,
    y: -2.3233051,
  },
  {
    x: 30.613745,
    y: -2.4715846,
  },
  {
    x: 30.60997,
    y: -2.6200938,
  },
  {
    x: 30.60157,
    y: -2.7686417,
  },
  {
    x: 30.600552,
    y: -2.9169576,
  },
  {
    x: 30.600906,
    y: -3.0652242,
  },
  {
    y: -3.2134645,

    x: 30.60264,
  },
  {
    x: 30.603754,
    y: -3.3617096,
  },
  {
    y: -3.5099638,

    x: 30.600248,
  },
  {
    x: 30.60212,
    y: -3.6582012,
  },
  {
    x: 30.601372,
    y: -3.80644,
  },
  {
    y: -3.954676,

    x: 30.6,
  },
  {
    x: 30.592012,
    y: -4.102811,
  },
  {
    x: 30.603397,
    y: -4.2512784,
  },
  {
    x: 30.598167,
    y: -4.399471,
  },
  {
    x: 30.590313,
    y: -4.5475745,
  },
  {
    x: 30.583841,
    y: -4.695692,
  },
  {
    y: -4.8441386,

    x: 30.586739,
  },
  {
    x: 30.587019,
    y: -4.992546,
  },
  {
    x: 30.59267,
    y: -5.141248,
  },
  {
    x: 30.587706,
    y: -5.289532,
  },
  {
    x: 30.586115,
    y: -5.438017,
  },
  {
    x: 30.577911,
    y: -5.586174,
  },
  {
    x: 30.581066,
    y: -5.7350326,
  },
  {
    x: 30.589577,
    y: -5.884348,
  },
  {
    x: 30.58549,
    y: -6.0329366,
  },
  {
    x: 30.584766,
    y: -6.181826,
  },
  {
    x: 30.581423,
    y: -6.330597,
  },
  {
    x: 30.579443,
    y: -6.47955,
  },
  {
    x: 30.574846,
    y: -6.628363,
  },
  {
    x: 30.571617,
    y: -6.7773685,
  },
  {
    x: 30.567757,
    y: -6.926403,
  },
  {
    x: 30.56526,
    y: -7.075659,
  },
  {
    x: 30.572079,
    y: -7.225988,
  },
  {
    x: 30.572296,
    y: -7.375789,
  },
  {
    x: 30.571875,
    y: -7.5256567,
  },
  {
    x: 30.566845,
    y: -7.675124,
  },
  {
    x: 30.571112,
    y: -7.8258204,
  },
  {
    x: 30.5668,
    y: -7.9756308,
  },
  {
    x: 29.09128,
    y: -8.079648,
  },
  {
    x: 29.192879,
    y: -8.238182,
  },
  {
    x: 29.192759,
    y: -8.383292,
  },
  {
    x: 29.138588,
    y: -8.520662,
  },
  {
    x: 29.12935,
    y: -8.6645155,
  },
  {
    x: 29.093811,
    y: -8.804398,
  },
  {
    x: 17.215874,
    y: -7.1526093,
  },
  {
    x: 15.331315,
    y: -7.104494,
  },
  {
    x: 14.89903,
    y: -7.1132927,
  },
  {
    x: 13.702157,
    y: -7.137383,
  },
  {
    x: 13.225949,
    y: -7.1234345,
  },
  {
    x: 12.327786,
    y: -7.0947104,
  },
  {
    y: -7.1485944,

    x: 12.22866,
  },
  {
    x: 12.240823,
    y: -7.2257433,
  },
  {
    y: -7.307785,

    x: 12.274122,
  },
  {
    x: 12.281665,
    y: -7.3844757,
  },
  {
    x: 12.277166,
    y: -7.458619,
  },
  {
    x: 12.280135,
    y: -7.5346093,
  },
  {
    x: 12.261365,
    y: -7.605605,
  },
  {
    y: -7.6807494,

    x: 12.259794,
  },
  {
    y: -7.7583447,

    x: 12.267599,
  },
  {
    y: -7.821472,

    x: 12.21686,
  },
  {
    x: 28.91646,
    y: -12.313632,
  },
  {
    x: 28.989683,
    y: -12.483872,
  },
  {
    x: 29.011854,
    y: -12.641379,
  },
  {
    x: 29.102747,
    y: -12.8182125,
  },
  {
    x: 29.123377,
    y: -12.976691,
  },
  {
    x: 29.226042,
    y: -13.158876,
  },
  {
    x: 29.218185,
    y: -13.310643,
  },
  {
    x: 16.7829,
    y: -10.83359,
  },
  {
    x: 16.727615,
    y: -10.915463,
  },
  {
    x: 16.707928,
    y: -11.009454,
  },
  {
    x: 16.697262,
    y: -11.106725,
  },
  {
    x: 16.68239,
    y: -11.202696,
  },
  {
    y: -9.866144,

    x: 12.4721155,
  },
  {
    x: 12.361128,
    y: -9.90712,
  },
  {
    x: 12.369942,
    y: -9.992248,
  },
  {
    x: 12.368994,
    y: -10.074008,
  },
  {
    x: 12.354596,
    y: -10.150844,
  },
  {
    x: 12.347309,
    y: -10.230579,
  },
  {
    y: -10.313305,

    x: 12.347097,
  },
  {
    x: 12.359496,
    y: -10.401339,
  },
  {
    x: 12.354765,
    y: -10.482847,
  },
  {
    x: 12.329291,
    y: -10.5561075,
  },
  {
    x: 12.375574,
    y: -10.659112,
  },
  {
    x: 12.364107,
    y: -10.73867,
  },
  {
    x: 12.575085,
    y: -10.912695,
  },
  {
    x: 12.566165,
    y: -10.994818,
  },
  {
    y: -13.173743,

    x: 17.138678,
  },
  {
    x: 16.970222,
    y: -13.208718,
  },
  {
    x: 16.9971,
    y: -13.3300705,
  },
  {
    x: 16.943209,
    y: -13.415451,
  },
  {
    y: -12.9049835,

    x: 15.591109,
  },
  {
    x: 14.711722,
    y: -12.699975,
  },
  {
    x: 14.644324,
    y: -12.767862,
  },
  {
    x: 14.717375,
    y: -12.902775,
  },
  {
    x: 14.571849,
    y: -12.932947,
  },
  {
    x: 14.562927,
    y: -13.02891,
  },
  {
    y: -13.131172,

    x: 14.566088,
  },
  {
    x: 13.418542,
    y: -12.658422,
  },
  {
    x: 13.241012,
    y: -12.664245,
  },
  {
    y: -12.699663,

    x: 13.124314,
  },
  {
    y: -12.747105,

    x: 13.032526,
  },
  {
    x: 12.7810335,
    y: -12.710739,
  },
  {
    x: 12.685893,
    y: -12.754432,
  },
  {
    x: 12.883809,
    y: -12.953402,
  },
  {
    y: -12.979064,

    x: 12.754428,
  },
  {
    x: 12.458153,
    y: -12.913178,
  },
  {
    x: 12.301292,
    y: -12.920925,
  },
  {
    x: 12.099176,
    y: -12.902337,
  },
  {
    y: -12.890031,

    x: 11.911486,
  },
  {
    x: 11.786894,
    y: -12.9117155,
  },
  {
    x: 11.778822,
    y: -12.998891,
  },
  {
    x: 11.773778,
    y: -13.08816,
  },
  {
    x: 11.764817,
    y: -13.17554,
  },
  {
    x: 11.125841,
    y: -12.893504,
  },
  {
    x: 10.960975,
    y: -12.885653,
  },
  {
    x: 10.8050375,
    y: -12.881719,
  },
  {
    y: -12.883882,

    x: 10.661395,
  },
  {
    y: -12.878757,

    x: 10.507763,
  },
  {
    x: 10.368074,
    y: -12.880898,
  },
  {
    x: 10.233734,
    y: -12.8852,
  },
  {
    x: 10.084375,
    y: -12.878978,
  },
  {
    x: 10.001245,
    y: -12.9133835,
  },
  {
    x: 10.000673,
    y: -13.000011,
  },
  {
    x: 10.001318,
    y: -13.087883,
  },
  {
    y: -13.174833,

    x: 9.999808,
  },
  {
    x: 9.116284,
    y: -12.850734,
  },
  {
    y: -12.850722,

    x: 8.991009,
  },
  {
    x: 8.867632,
    y: -12.850953,
  },
  {
    x: 8.752738,
    y: -12.855974,
  },
  {
    x: 8.624893,
    y: -12.851084,
  },
  {
    y: -12.851017,

    x: 8.505524,
  },
  {
    x: 8.384756,
    y: -12.848961,
  },
  {
    x: 8.264241,
    y: -12.846057,
  },
  {
    x: 8.160228,
    y: -12.853976,
  },
  {
    x: 8.041802,
    y: -12.850625,
  },
  {
    x: 7.9882154,
    y: -12.893661,
  },
  {
    x: 7.9924393,
    y: -12.979147,
  },
  {
    y: -13.060055,

    x: 7.989751,
  },
  {
    x: 7.988209,
    y: -13.142307,
  },
  {
    x: 7.0620832,
    y: -12.841456,
  },
  {
    x: 6.966594,
    y: -12.846359,
  },
  {
    x: 6.8587627,
    y: -12.840649,
  },
  {
    x: 6.762095,
    y: -12.842974,
  },
  {
    x: 6.656295,
    y: -12.837092,
  },
  {
    y: -12.840622,

    x: 6.5631313,
  },
  {
    x: 6.4639688,
    y: -12.838441,
  },
  {
    x: 6.372711,
    y: -12.84199,
  },
  {
    x: 6.2724304,
    y: -12.837225,
  },
  {
    y: -12.8382435,

    x: 6.18002,
  },
  {
    x: 6.0847526,
    y: -12.836054,
  },
  {
    y: -12.837147,

    x: 5.994245,
  },
  {
    x: 5.9613037,
    y: -12.887473,
  },
  {
    x: 5.9627366,
    y: -12.967993,
  },
  {
    x: 5.963682,
    y: -13.048687,
  },
  {
    x: 5.96414,
    y: -13.129554,
  },
  {
    x: 5.1216536,
    y: -12.836134,
  },
  {
    y: -12.834985,

    x: 5.0376134,
  },
  {
    x: 4.9537582,
    y: -12.833296,
  },
  {
    x: 4.8700895,
    y: -12.831068,
  },
  {
    x: 4.7866116,
    y: -12.828302,
  },
  {
    x: 4.7076187,
    y: -12.829194,
  },
  {
    x: 4.6230884,
    y: -12.823973,
  },
  {
    x: 4.5444446,
    y: -12.823846,
  },
  {
    x: 4.4617286,
    y: -12.818976,
  },
  {
    x: 4.390474,
    y: -12.824947,
  },
  {
    x: 4.313729,
    y: -12.824777,
  },
  {
    x: 4.2273808,
    y: -12.8140955,
  },
  {
    x: 4.156563,
    y: -12.818682,
  },
  {
    x: 4.081715,
    y: -12.818503,
  },
  {
    x: 4.009781,
    y: -12.820762,
  },
  {
    x: 3.9845953,
    y: -12.872094,
  },
  {
    x: 3.9809687,
    y: -12.94677,
  },
  {
    y: -13.028914,

    x: 3.983663,
  },
  {
    x: 3.9858232,
    y: -13.111247,
  },
  {
    x: 3.0918903,
    y: -12.815154,
  },
  {
    x: 3.0233662,
    y: -12.812919,
  },
  {
    x: 2.9575646,
    y: -12.81334,
  },
  {
    x: 2.8906214,
    y: -12.811834,
  },
  {
    x: 2.831449,
    y: -12.8192,
  },
  {
    x: 2.7672942,
    y: -12.820031,
  },
  {
    x: 2.6994944,
    y: -12.815823,
  },
  {
    x: 2.6368663,
    y: -12.8174515,
  },
  {
    x: 2.5706246,
    y: -12.814022,
  },
  {
    y: -12.813342,

    x: 2.507017,
  },
  {
    y: -12.8138685,

    x: 2.444775,
  },
  {
    y: -12.818781,

    x: 2.3863313,
  },
  {
    x: 2.3206663,
    y: -12.813848,
  },
  {
    x: 2.2588022,
    y: -12.813301,
  },
  {
    x: 2.1982734,
    y: -12.813998,
  },
  {
    x: 2.1402571,
    y: -12.817553,
  },
  {
    x: 2.0775704,
    y: -12.814358,
  },
  {
    y: -12.812412,

    x: 2.0162158,
  },
  {
    x: 1.9632424,
    y: -12.821432,
  },
  {
    x: 1.9594857,
    y: -12.898274,
  },
  {
    x: 1.9610227,
    y: -12.983378,
  },
  {
    x: 1.9596503,
    y: -13.065396,
  },
  {
    x: 1.9519573,
    y: -13.139387,
  },
  {
    x: 1.144739,
    y: -12.790563,
  },
  {
    x: 1.0974057,
    y: -12.801833,
  },
  {
    x: 1.043682,
    y: -12.802718,
  },
  {
    x: 0.98581547,
    y: -12.79653,
  },
  {
    x: 0.9333663,
    y: -12.798524,
  },
  {
    x: 0.8810018,
    y: -12.8002405,
  },
  {
    x: 0.8266477,
    y: -12.798264,
  },
  {
    x: 0.77344066,
    y: -12.797707,
  },
  {
    y: -12.796867,

    x: 0.72033703,
  },
  {
    x: 0.6683547,
    y: -12.797467,
  },
  {
    x: 0.61545503,
    y: -12.796068,
  },
  {
    y: -12.794388,

    x: 0.5626628,
  },
  {
    y: -12.794164,

    x: 0.5109744,
  },
  {
    y: -12.795407,

    x: 0.46036997,
  },
  {
    x: 0.409848,
    y: -12.796391,
  },
  {
    x: 0.3574647,
    y: -12.793618,
  },
  {
    x: 0.30422938,
    y: -12.788816,
  },
  {
    x: 0.25783396,
    y: -12.796021,
  },
  {
    x: 0.20481044,
    y: -12.790683,
  },
  {
    x: 0.15663841,
    y: -12.79388,
  },
  {
    y: -12.796837,

    x: 0.108528115,
  },
  {
    x: 0.05583583,
    y: -12.790697,
  },
  {
    x: 0.009729433,
    y: -12.796702,
  },
  {
    y: -12.800706,

    x: -0.037255336,
  },
  {
    x: -0.049743697,
    y: -12.872226,
  },
  {
    x: -0.049264714,
    y: -12.970599,
  },
  {
    x: -0.05487638,
    y: -13.058397,
  },
];

export default data;
`},38947:function(a,e){e.Z=`import { useCallback } from 'react';

import { useParams } from 'umi';

import type { Edge, IApplication, Node } from '@infore/editor';
import { IRTrans } from '@infore/utils';

import mockData from './data4';

const useEditMap = () => {
  const { id: map_id = '' } = useParams<{ id: string }>();

  const formatRouteNet = (RouteNet?: API.airSpaceRouteNet) => {
    const result: any = {
      nodes: [],
      edges: [],
    };
    RouteNet?.points.forEach((item) => {
      result.nodes.push({
        ...item,
        ...IRTrans.coordsToMap(item?.coordinate),
        angle: IRTrans.angleToMap(item?.robot_angle),
      });
    });
    RouteNet?.lines.forEach((item) => {
      result.edges.push({
        ...item,
        vertices: item.coordinates
          .filter((vertice, index, array) => !(array.length - 1 === index || index === 0))
          .map((vertice) => IRTrans.coordsToMap(vertice)),
        source: item.source || IRTrans.coordsToMap(item.coordinates[0]),
        target: item.target || IRTrans.coordsToMap(item.coordinates[item.coordinates.length - 1]),
        arrow: item.expansion?.arrow || 'both',
      });
    });
    RouteNet?.areas.forEach((item) => {
      const { x, y, angle, ...meta } = item?.expansion;
      const coordinate = x || y ? { x, y } : item.coordinates[0];
      result.nodes.push({
        ...item,
        ...IRTrans.coordsToMap(coordinate),
        angle: IRTrans.angleToMap(angle),
        width: Number(meta.width),
        height: Number(meta.height),
      });
    });

    return result;
  };

  const formatResult = (res: API.airSpaceGetMapResponse) => {
    IRTrans.setConfig({
      origin_point: res.map.base_map.origin_point,
      height: IRTrans.toRos(res.map.base_map.height, res.map.base_map.resolution),
      resolution: res.map.base_map.resolution,
    });
    return {
      ...res.map,
      route_net: res.map.route_net
        ? formatRouteNet({ ...res.map.route_net })
        : formatRouteNet({ areas: [], lines: [], points: [] }),
    };
  };

  /** \u4FDD\u5B58\u8DEF\u7F51\u6570\u636E */
  const saveGraph = ({ edges, nodes }: any) => {
    const RouteNet: API.airSpaceRouteNet = {
      points: [],
      lines: [],
      areas: [],
    };
    [...edges, ...nodes].forEach((item) => {
      if (item.point_type) {
        RouteNet.points.push({
          id: item.id,
          name: item.name,
          point_type: item.point_type,
          coordinate: item.coordinate,
          robot_angle: IRTrans.angleToRos(item.angle),
          desc: item.desc,
          index: String(item.index),
          relevance_map_id: item.relevance_map_id,
          relevance_point_id: item.relevance_point_id,
          expansion: {
            width: String(item.width),
            height: String(item.height),
            angle: String(IRTrans.angleToRos(item.angle)),
            x: String(item.x),
            y: String(item.y),
          },
        });
      }
      if (item.line_type) {
        RouteNet.lines.push({
          id: item.id,
          name: item.name,
          line_shape: item.line_shape,
          line_type: item.line_type,
          coordinates: item.coordinates,
          source: typeof item.source === 'string' ? item.source : undefined,
          target: typeof item.target === 'string' ? item.target : undefined,
          device_id: Array.isArray(item.device_id)
            ? item.device_id
            : (item.device_id && [item.device_id]) || [],
          radius: Number(item.radius),
          desc: item.desc,
          index: String(item.index),
          expansion: {
            arrow: item.arrow,
          },
        });
      }
      if (item.area_type) {
        const { x, y } = IRTrans.coordsToRos({
          x: item.x,
          y: item.y,
        });
        RouteNet.areas.push({
          id: item.id,
          name: item.name,
          area_shape: item.area_shape,
          area_type: item.area_type,
          coordinates: item.coordinates,
          robot_angle: IRTrans.angleToRos(item.robot_angle),
          device_id: Array.isArray(item.device_id)
            ? item.device_id
            : (item.device_id && item.device_id.split(',')) || [],
          desc: item.desc,
          index: String(item.index),
          liner_speed: item.liner_speed,
          angular_speed: item.angular_speed,
          expansion: {
            width: String(item.width),
            height: String(item.height),
            angle: String(IRTrans.angleToRos(item.angle)),
            x: String(x),
            y: String(y),
          },
        });
      }
    });
  };

  /**
   * \u83B7\u53D6\u65CB\u8F6C\u540E\u7684\u9876\u70B9\u5750\u6807
   */
  const getRotatePoint = (
    point: { x: number; y: number },
    origin: { x: number; y: number },
    angle: number,
  ) => {
    return {
      x: Math.round(
        (point.x - origin.x) * Math.cos(angle) - (point.y - origin.y) * Math.sin(angle) + origin.x,
      ),
      y: Math.round(
        (point.y - origin.y) * Math.cos(angle) + (point.x - origin.x) * Math.sin(angle) + origin.y,
      ),
    };
  };

  const updateLine = (edge: Edge<Edge.Properties>) => {
    if (edge.data?.line_type) {
      const source =
        (edge.getSourceCell() as Node<Node.Properties>)?.position?.() || edge.getSourcePoint();
      const target =
        (edge.getTargetCell() as Node<Node.Properties>)?.position?.() || edge.getTargetPoint();
      const vertices = edge.getVertices();
      const coordinates = [source, ...vertices, target].map((item) => IRTrans.coordsToRos(item));
      edge.updateData(
        {
          coordinates,
        },
        {
          silent: true,
        },
      );
    }
  };

  const updatePoint = (node: Node<Node.Properties>) => {
    if (node.data.point_type) {
      node.updateData(
        {
          coordinate: IRTrans.coordsToRos(node.position()),
        },
        {
          silent: true,
        },
      );
    }
  };

  const updateArea = (node: Node<Node.Properties>) => {
    if (node.data.area_type) {
      const { topLeft, topRight, bottomLeft, bottomRight, center } = node.getBBox();
      const angle = node.angle();
      const coordinates = [
        getRotatePoint(topLeft, center, (angle / 180) * Math.PI),
        getRotatePoint(topRight, center, (angle / 180) * Math.PI),
        getRotatePoint(bottomRight, center, (angle / 180) * Math.PI),
        getRotatePoint(bottomLeft, center, (angle / 180) * Math.PI),
      ].map((item) => IRTrans.coordsToRos(item));
      node.updateData(
        {
          coordinates,
        },
        {
          silent: true,
        },
      );
    }
  };

  const onLoad = useCallback(async (app: IApplication) => {
    const graphInstance = await app.getGraphInstance();
    graphInstance.on('edge:added', ({ edge }) => {
      updateLine(edge);
    });
    graphInstance.on('edge:change:*', ({ edge }) => {
      updateLine(edge);
    });
    graphInstance.on('node:added', ({ node }) => {
      updatePoint(node);
      updateArea(node);
    });
    graphInstance.on('node:change:*', ({ node }) => {
      updatePoint(node);
      updateArea(node);
    });
    graphInstance.on('cell:dblclick', ({ x, y, cell }) => {
      if (cell.data.shape === 'background-node') {
        const coords = IRTrans.coordsToRos({ x, y });
        console.log(coords);
      }
    });
  }, []);

  const data = formatResult(mockData as any);

  const {
    map_data_id,
    map_url,
    width = 0,
    height = 0,
    resolution = 0.05,
    origin_point = {
      x: 0,
      y: 0,
    },
  } = data?.base_map || {};

  const getAutoIncrementId = () => {
    if (!data?.route_net) return 0;

    const validIds = (data.route_net.nodes.concat(data.route_net.edges) as { id: string }[])
      .map((item) => +item.id)
      .filter((item) => !isNaN(item));

    if (validIds.length === 0) return 0;

    if (typeof window.__INFORE_EDITOR_AUTO_INCREMENT_ID__ === 'undefined') {
      window.__INFORE_EDITOR_AUTO_INCREMENT_ID__ = Math.max(...validIds);
    }

    return Math.max(...validIds);
  };

  return {
    map_name: data?.map_name,
    map_id,
    map_url,
    map_data_id,
    width,
    height,
    resolution,
    origin_point,
    graphData: data?.route_net,
    auto_increment_id: getAutoIncrementId(),
    onLoad,
    saveGraph,
  };
};

export default useEditMap;
`},29746:function(a,e){e.Z=`import { useState } from 'react';

import {
  GraphEditor,
  OriginNode,
  type Point,
  RobotNode,
  RosMapNode,
  Toolbar,
  TreeNodePanel,
  Background
} from '@infore/editor';
import { IRTrans } from '@infore/utils';

import DetailPanel from './components/DetailPanel';
import useEditMap from './hooks';
import mockData, { clouds as mockClouds } from './hooks/data4';
import { shapeConfig } from './meta';
import { useInterval, useMount, useUpdate } from 'ahooks';

import './index.less';

function generatePoints(centerX: number, centerY: number, radius: number, count: number): Point[] {
  const points: Point[] = [];

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * radius;
    const x = Math.round(centerX + Math.cos(angle) * distance);
    const y = Math.round(centerY + Math.sin(angle) * distance);
    points.push({ x, y });
  }

  return points;
}

const robotData = {
  x: -0.011508361,
  y: 0.0077599674,
  face_angle: 0.013137305,
  radar_angle: 360,
};

const {
  map: {
    base_map: { resolution, origin_point },
  },
} = mockData;

const EditMap: React.FC = () => {
  const { map_url, width, height, onLoad, graphData, saveGraph } = useEditMap();
  const [robotVisible, setRobotVisible] = useState(true);
  const [robot, setRobot] = useState(robotData);
  const { x, y, face_angle, radar_angle } = robot;

  const clouds = mockClouds.map((item) => IRTrans.coordsToMap({ x: item.x, y: item.y }));

  useInterval(() => {
    setRobot((pre) => ({
      ...pre,
      x: pre.x + 0.1,
      y: pre.y + 0.1,
    }));
  }, 1000);

  const update = useUpdate();

  // hack
  useMount(() => {
    update();
  });

  return (
    <div className="graph-editor-container">
      <GraphEditor
        graphData={graphData}
        onLoad={onLoad}
        position={{ top: 40, left: 240, right: 280 }}
        meta={{ shapeConfig }}
        miniMap={false}
      >
        <Toolbar
          saveGraph={saveGraph}
          extra={[
            {
              id: 'erase',
              render: () => (
                <span
                  onClick={() => {
                    setRobotVisible((pre) => !pre);
                  }}
                  className="x6-toolbar-item xflow-toolbar-item"
                >
                  <span className="x6-toolbar-item-text">\u64E6\u9664</span>
                </span>
              ),
            },
          ]}
        />
        {height && <OriginNode {...IRTrans.coordsToMap({ x: 0, y: 0 })} />}
        <Background
          // pointCloud={clouds}
          url={map_url}
          width={width}
          height={height}
          // pointCloudRadius={3}
        />
        <RobotNode
          id="robot"
          {...IRTrans.coordsToMap(
            { x, y },
            origin_point,
            IRTrans.toRos(height, resolution),
            resolution,
          )}
          angle={IRTrans.angleToMap(face_angle)}
          range={radar_angle}
          direction
          visible={robotVisible}
          color="#ff4d4f"
        />
        <TreeNodePanel position={{ top: 40 }} />
        <DetailPanel saveGraph={saveGraph} map_url={map_url} map_id="" />
      </GraphEditor>
    </div>
  );
};

export default EditMap;
`},60590:function(a,e){e.Z=`import { AreaShapeEnum, AreaTypeEnum } from '@infore/editor';

export default [
  {
    name: '\u5145\u7535\u7B49\u5F85\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.CHARGING_WAITING_AREA,
    fill: '#1B8E31',
    stroke: '#1B8E31',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u7535\u68AF\u7B49\u5F85\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.ELEVATOR_WAITING_AREA,
    fill: '#30686F',
    stroke: '#30686F',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u95F8\u673A\u7B49\u5F85\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.GATE_WAITING_AREA,
    fill: '#129FAE',
    stroke: '#129FAE',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u81EA\u52A8\u95E8\u7B49\u5F85\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.AUTO_DOOR_WAITING_AREA,
    fill: '#DAB94C',
    stroke: '#DAB94C',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u7981\u6B62\u65CB\u8F6C\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.NO_ROTATION_AREA,
    fill: '#D41F8C',
    stroke: '#D41F8C',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u7981\u6B62\u9A76\u5165\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.FORBIDDEN_AREA,
    fill: '#EF1414',
    stroke: '#EF1414',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u7981\u6B62\u8D85\u58F0\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.TURN_OFF_SONAR_AREA,
    fill: '#9C9C9C',
    stroke: '#9C9C9C',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u7535\u68AF\u5185\u90E8\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.ELEVATOR_INSIDE_AREA,
    fill: '#18DBEB',
    stroke: '#18DBEB',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u5145\u7535\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.CHARGE_AREA,
    fill: '#25E14A',
    stroke: '#25E14A',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u95F8\u673A\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.GATE_AREA,
    fill: '#129FAE',
    stroke: '#129FAE',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u51CF\u901F\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.DECELERATION_AREA,
    fill: '#F48313',
    stroke: '#F48313',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u6807\u8BB0\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.LABEL_AREA,
    fill: '#F0AA20',
    stroke: '#F0AA20',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u5BFC\u822A\u52A8\u6001\u7BA1\u63A7\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.NAV_DYNAMIC_CONTROL_AREA,
    fill: '#000000',
    stroke: '#000000',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u8C03\u5EA6\u5B89\u5168\u7BA1\u63A7\u533A',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.DISPATCH_SAFE_CONTROL_AREA,
    fill: '#FF748C',
    stroke: '#FF748C',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
  {
    name: '\u8BBE\u5907\u6A21\u578B',
    area_shape: AreaShapeEnum.POLYGON,
    area_type: AreaTypeEnum.DEVICE_MODEL_AREA,
    fill: '#FF748C',
    stroke: '#FF748C',
    resizing: true,
    rotating: true,
    interacting: true,
    preserveAspectRatio: false,
    ports: [],
    width: 60,
    height: 60,
  },
];
`},85808:function(a,e){e.Z=`import Area from './area';
import Line from './line';
import Point from './point';

export const shapeConfig = [
  {
    id: 'point_type',
    header: '\u7AD9\u70B9',
    children: Point,
  },
  {
    id: 'area_type',
    header: '\u533A\u57DF',
    children: Area,
  },
  {
    id: 'line_type',
    header: '\u7EBF\u578B\u8BBE\u5907',
    children: Line,
  },
];
`},63939:function(a,e){e.Z=`import { LineShapeEnum, LineTypeEnum } from '@infore/editor';

export default [
  {
    name: '\u95E8',
    line_shape: LineShapeEnum.POLYGONAL_LINE,
    line_type: LineTypeEnum.AUTO_DOOR,
    extra_type: [
      LineTypeEnum.GATE_DOOR,
      LineTypeEnum.ONE_WAY_DOOR,
      LineTypeEnum.ELEVATOR_DOOR,
      LineTypeEnum.AUTO_DOOR,
    ],
    line_node: true,
    upperLimit: 2,
    closure: false,
    resizing: true,
    image:
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSI+CiAgPHRpdGxlPuWNleWQkemXqDwvdGl0bGU+CiAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxnIGlkPSLnvJbovpHlnLDlm74iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMTIuMDAwMDAwLCAtNzc0LjAwMDAwMCkiPgogICAgICA8ZyBpZD0i5Y2V5ZCR6ZeoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMTIuMDAwMDAwLCA3NzQuMDAwMDAwKSI+CiAgICAgICAgPGcgaWQ9Iue8lue7hC01Ij4KICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgICAgICA8bGluZSB4MT0iMTIiIHkxPSIxLjUiIHgyPSIxMiIgeTI9IjIyLjUiIGlkPSLnm7Tnur8iIHN0cm9rZT0iIzI0OTVGMSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjwvbGluZT4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==',
    isDisabled: true,
    command: 'GRAPH_CREATE_CUSTOM_EDGE',
    style: 'solid',
    stroke: '#2495F1',
    strokeWidth: 1.8,
  },
  {
    name: '\u865A\u62DF\u5899',
    line_shape: LineShapeEnum.POLYGONAL_LINE,
    line_type: LineTypeEnum.VIRTUAL_WALL,
    extra_type: [LineTypeEnum.VIRTUAL_WALL, LineTypeEnum.GLASS_WALL],
    line_node: true,
    closure: false,
    resizing: true,
    image:
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSI+CiAgPHRpdGxlPuiZmuaLn+WimTwvdGl0bGU+CiAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxnIGlkPSLnvJbovpHlnLDlm74iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MDQuMDAwMDAwLCAtNzc0LjAwMDAwMCkiPgogICAgICA8ZyBpZD0i6Jma5ouf5aKZIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDQuMDAwMDAwLCA3NzQuMDAwMDAwKSI+CiAgICAgICAgPGcgaWQ9Iue8lue7hC01Ij4KICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgICAgICA8bGluZSB4MT0iMTIiIHkxPSIxLjUiIHgyPSIxMiIgeTI9IjIyLjUiIGlkPSLnm7Tnur8iIHN0cm9rZT0iI0VGMTQxNCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1kYXNoYXJyYXk9IjAsMy43NSI+PC9saW5lPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K',
    isDisabled: true,
    command: 'GRAPH_CREATE_CUSTOM_EDGE',
    style: 'dash',
    stroke: '#EF1414',
    strokeWidth: 1.8,
  },
];
`},2897:function(a,e){e.Z=`import { PointTypeEnum } from '@infore/editor';

const pointTypes = [
  {
    name: '\u8282\u70B9',
    point_type: PointTypeEnum.NODE_POINT,
    fill: 'none',
    stroke: '#101E49',
    strokeWidth: '1.65',
    resizing: false,
    rotating: true,
    interacting: true,
    preserveAspectRatio: true,
    width: 20,
    height: 20,
  },
  {
    name: '\u505C\u9760\u70B9',
    point_type: PointTypeEnum.STOP_POINT,
    fill: 'none',
    stroke: '#32A0F7',
    strokeWidth: '1.65',
    resizing: false,
    rotating: true,
    interacting: true,
    preserveAspectRatio: true,
    width: 20,
    height: 20,
  },
  {
    name: '\u5145\u7535\u7AD9',
    point_type: PointTypeEnum.CHARGE_POINT,
    fill: 'none',
    stroke: '#25E14A',
    strokeWidth: '1.65',
    resizing: false,
    rotating: true,
    interacting: true,
    preserveAspectRatio: true,
    width: 20,
    height: 20,
  },
  {
    name: '\u6807\u8BB0\u70B9',
    point_type: PointTypeEnum.MARKER_POINT,
    fill: 'none',
    stroke: '#F0AA20',
    strokeWidth: '1.65',
    resizing: false,
    rotating: true,
    interacting: true,
    preserveAspectRatio: true,
    width: 20,
    height: 20,
  },
  {
    name: '\u4F20\u9001\u70B9',
    point_type: PointTypeEnum.TRANSFER_POINT,
    fill: 'none',
    stroke: '#18DBEB',
    strokeWidth: '1.65',
    resizing: false,
    rotating: true,
    interacting: true,
    preserveAspectRatio: true,
    width: 20,
    height: 20,
  },
  {
    name: '\u5DE5\u4F5C\u70B9',
    point_type: PointTypeEnum.OPERATE_POINT,
    fill: 'none',
    stroke: '#3944F0',
    strokeWidth: '1.65',
    resizing: false,
    rotating: true,
    interacting: true,
    preserveAspectRatio: true,
    width: 20,
    height: 20,
  },
  {
    name: '\u81EA\u52A8\u95E8\u547C\u53EB\u70B9',
    point_type: PointTypeEnum.DOOR_POINT,
    fill: 'none',
    stroke: '#b37feb',
    strokeWidth: '1.65',
    resizing: false,
    rotating: true,
    interacting: true,
    preserveAspectRatio: true,
    width: 20,
    height: 20,
  },
];

export const pointTypeOptions = pointTypes.map((item) => item.point_type);

export default pointTypes;
`},88855:function(a,e){e.Z=`export function checkColor(imgSrc: string): Promise<(x: number, y: number) => boolean> {
  return new Promise((resolve, reject) => {
    // \u52A0\u8F7D\u56FE\u7247
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      // \u521B\u5EFAcanvas\u5E76\u7ED8\u5236\u56FE\u7247
      const canvas = document.createElement('canvas');
      canvas.style.display = 'none';
      document.body.appendChild(canvas);
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);

      // \u6821\u9A8C\u65B9\u6CD5
      function check(x: number, y: number) {
        // \u68C0\u67E5\u5750\u6807\u662F\u5426\u5728\u8303\u56F4\u5185
        if (x >= 0 && x < img.width && y >= 0 && y < img.height) {
          // \u83B7\u53D6\u5750\u6807\u70B9\u50CF\u7D20\u6570\u636E
          const rgb = ctx?.getImageData(x, y, 1, 1).data || [];

          // \u5224\u65AD\u50CF\u7D20\u70B9\u989C\u8272\u662F\u5426\u5339\u914D\u914D\u7F6E
          const rgbLimit: boolean[] = [];
          // \u8FC7\u6EE4\u767D\u5E95\u989C\u8272
          rgbLimit[0] = rgb[0] >= 254 && rgb[1] >= 254 && rgb[2] >= 254;
          // \u8FC7\u6EE4\u9009\u4E2D\u6846\u989C\u8272
          rgbLimit[1] = rgb[0] === 223 && rgb[1] === 234 && rgb[2] === 254;
          // \u8FC7\u6EE4\u8D77\u70B9\u989C\u8272
          rgbLimit[2] =
            ((rgb[0] > 81 && rgb[0] < 92) ||
              (rgb[0] > 100 && rgb[0] < 197) ||
              (rgb[0] > 203 && rgb[0] <= 255)) &&
            rgb[1] > 195 &&
            rgb[1] < 254 &&
            ((rgb[2] > 25 && rgb[2] < 87) ||
              (rgb[2] > 110 && rgb[2] < 189) ||
              (rgb[2] > 208 && rgb[2] < 250));
          // \u8FC7\u6EE4\u7EC8\u70B9\u989C\u8272
          rgbLimit[3] =
            (rgb[0] === 254 || rgb[0] === 255) &&
            ((rgb[1] > 70 && rgb[1] < 93) ||
              (rgb[1] > 108 && rgb[1] < 169) ||
              (rgb[1] > 181 && rgb[1] < 198) ||
              (rgb[1] > 202 && rgb[1] < 251)) &&
            ((rgb[2] > 78 && rgb[2] < 93) ||
              (rgb[2] > 113 && rgb[2] < 167) ||
              (rgb[2] > 187 && rgb[2] < 254));
          // \u8FC7\u6EE4\u5B9E\u9645\u70B9
          rgbLimit[4] =
            rgb[0] === (21 || 188 || 119 || 22 || 141) &&
            rgb[1] === (21 || 188 || 119 || 22 || 141) &&
            rgb[2] === (21 || 188 || 119 || 22 || 141);
          const isMatched = rgbLimit[0] || rgbLimit[1] || rgbLimit[2] || rgbLimit[3] || rgbLimit[4];
          return isMatched;
        } else {
          return false;
        }
      }
      resolve(check);
    };
    img.onerror = () => {
      reject(new Error('\u56FE\u7247\u52A0\u8F7D\u5931\u8D25'));
    };
    img.src = imgSrc;
  });
}
`}}]);
