import{o as n,c as e,b as i,e as a,r as l,l as r,u as t}from"./vendor.1180558b.js";var o="/assets/linkis-computation-gov-01.6035615d.png",s="/assets/linkis-computation-gov-02.43fad13f.png";const u={class:"markdown-body"},g=[i("h2",null,"Background",-1),i("p",null,[i("strong",null,"The architecture of Linkis0.X mainly has the following problems")],-1),i("ol",null,[i("li",null,"The boundary between the core processing flow and the hierarchical module is blurred:")],-1),i("ul",null,[i("li",null,[i("p",null,"Entrance and EngineManager function boundaries are blurred.")]),i("li",null,[i("p",null,"The main process of task submission and execution is not clear enough.")]),i("li",null,[i("p",null,"It is troublesome to extend the new engine, and it needs to implement the code of multiple modules.")]),i("li",null,[i("p",null,"Only support computing request scenarios, storage request scenarios and resident service mode (Cluster) are difficult to support.")])],-1),i("ol",{start:"2"},[i("li",null,"Demands for richer and more powerful computing governance functions:")],-1),i("ul",null,[i("li",null,[i("p",null,"Insufficient support for computing task management strategies.")]),i("li",null,[i("p",null,"The labeling capability is not strong enough, which restricts computing strategies and resource managemen.")])],-1),i("p",null,"The new architecture of Linkis1.0 computing governance service can solve these problems well.",-1),i("h2",null,"Architecture Diagram",-1),i("p",null,[i("img",{src:o,alt:"linkis Computation Gov"}),i("br"),i("strong",null,"Operation process optimization:"),a(" Linkis1.0 will optimize the overall execution process of the job, from submission —> preparation —> Perform three stages to fully upgrade Linkis’s Job execution architecture, as shown in the following figure:"),i("br"),i("img",{src:s,alt:""})],-1),i("h2",null,"Architecture Description",-1),i("h3",null,"1. Entrance",-1),i("p",null,[a("        Entrance, as the submission portal for computing tasks, provides task reception, scheduling and job information forwarding capabilities. It is a native capability split from Linkis0.X’s Entrance."),i("br"),i("a",{href:"./Entrance/Entrance.md"},"Entrance Architecture Design")],-1),i("h3",null,"2. Orchestrator",-1),i("p",null,[a("        Orchestrator, as the entrance to the preparation phase, inherits the capabilities of parsing Jobs, applying for Engines, and submitting execution from Entrance of Linkis0.X; at the same time, Orchestrator will provide powerful orchestration and computing strategy capabilities to meet multiple activities, active backups, transactions, and replays. , Current limiting, heterogeneous and mixed computing and other application scenarios."),i("br"),i("a",{href:"../Orchestrator/README.md"},"Enter Orchestrator Architecture Design")],-1),i("h3",null,"3. LinkisManager",-1),i("p",null,"        As the management brain of Linkis, LinkisManager is mainly composed of AppManager, ResourceManager, LabelManager and EngineConnPlugin.",-1),i("ol",null,[i("li",null,"ResourceManager not only has Linkis0.X’s resource management capabilities for Yarn and Linkis EngineManager, but also provides tag-based multi-level resource allocation and recycling capabilities, allowing ResourceManager to have full resource management capabilities across clusters and across computing resource types;"),i("li",null,"AppManager will coordinate and manage all EngineConnManager and EngineConn. The life cycle of EngineConn application, reuse, creation, switching, and destruction will be handed over to AppManager for management; and LabelManager will provide cross-IDC and cross-cluster based on multi-level combined tags EngineConn and EngineConnManager routing and management capabilities;"),i("li",null,[a("EngineConnPlugin is mainly used to reduce the access cost of new computing storage, so that users can access a new computing storage engine only by implementing one class."),i("br"),i("a",{href:"./LinkisManager/README.md"},"Enter LinkisManager Architecture Design")])],-1),i("h3",null,"4. Engine Manager",-1),i("p",null,[a("        Engine conn Manager (ECM) is a simplified and upgraded version of linkis0. X engine manager. The ECM under linkis1.0 removes the application ability of the engine, and the whole microservice is completely stateless. It will focus on supporting the startup and destruction of all kinds of enginecon."),i("br"),i("a",{href:"./EngineConnManager/README.md"},"Enter EngineConnManager Architecture Design")],-1),i("h3",null,"5. EngineConn",-1),i("p",null,[a("        EngineConn is an optimized and upgraded version of Linkis0.X Engine. It will provide EngineConn and Executor two modules. EngineConn is used to connect the underlying computing storage engine and provide a session session that connects the underlying computing storage engines; Executor is based on this Session session , Provide full-stack computing support for interactive computing, streaming computing, offline computing, and data storage."),i("br"),i("a",{href:"./EngineConn/README.md"},"Enter EngineConn Architecture Design")],-1)],c={setup:(i,{expose:a})=>(a({frontmatter:{}}),(i,a)=>(n(),e("div",u,g)))},p={class:"markdown-body"},m=[i("h2",null,[i("strong",null,"背景")],-1),i("p",null,[i("strong",null,"Linkis0.X的架构主要存在以下问题")],-1),i("p",null,"1.核心处理流程和层级模块边界模糊",-1),i("ul",null,[i("li",null,[i("p",null,"Entrance 和 EngineManager 功能边界模糊")]),i("li",null,[i("p",null,"任务提交执行主流程不够清晰")]),i("li",null,[i("p",null,"扩展新引擎较麻烦，需要实现多个模块的代码")]),i("li",null,[i("p",null,"只支持计算请求场景，存储请求场景和常驻服务模式（Cluster）难以支持")])],-1),i("p",null,"2.更丰富强大计算治理功能需求",-1),i("ul",null,[i("li",null,[i("p",null,"计算任务管理策略支持度不够")]),i("li",null,[i("p",null,"标签能力不够强大，制约计算策略和资源管理")])],-1),i("p",null,"Linkis1.0计算治理服务的新架构可以很好的解决这些问题。",-1),i("h2",null,[i("strong",null,"架构图")],-1),i("p",null,[i("img",{src:o,alt:""})],-1),i("p",null,[i("strong",null,"作业流程优化："),a(" Linkis1.0将优化Job的整体执行流程，从提交 —> 准备 —> 执行三个阶段，来全面升级Linkis的Job执行架构，如下图所示：")],-1),i("p",null,[i("img",{src:s,alt:""})],-1),i("h2",null,[i("strong",null,"架构说明")],-1),i("h3",null,"1、Entrance",-1),i("p",null,"Entrance作为计算类型任务的提交入口，提供任务的接收、调度和Job信息的转发能力，是从Linkis0.X的Entrance拆分出来的原生能力；",-1),i("p",null,[i("a",{href:"./Entrance/Entrance.md"},"进入Entrance架构设计")],-1),i("h3",null,"2、Orchestrator",-1),i("p",null,"Orchestrator 作为准备阶段的入口，从 Linkis0.X 的 Entrance 继承了解析Job、申请Engine和提交执行的能力；同时，Orchestrator将提供强大的编排和计算策略能力，满足多活、主备、事务、重放、限流、异构和混算等多种应用场景的需求。",-1),i("p",null,[i("a",{href:"../Orchestrator/README.md"},"进入Orchestrator架构设计")],-1),i("h3",null,"3、LinkisManager",-1),i("p",null,"LinkisManager作为Linkis的管理大脑，主要由AppManager、ResourceManager、LabelManager和EngineConnPlugin组成。",-1),i("ol",null,[i("li",null,"ResourceManager 不仅具备 Linkis0.X 对 Yarn 和 Linkis EngineManager的资源管理能力，还将提供基于标签的多级资源分配和回收能力，让ResourceManager具备跨集群、跨计算资源类型的全资源管理能力；"),i("li",null,"AppManager 将统筹管理所有的 EngineConnManager 和 EngineConn，EngineConn 的申请、复用、创建、切换、销毁等生命周期全交予 AppManager 进行管理；而 LabelManager 将基于多级组合标签，提供跨IDC、跨集群的 EngineConn 和 EngineConnManager 路由和管控能力；"),i("li",null,"EngineConnPlugin 主要用于降低新计算存储的接入成本，真正做到让用户只需要实现一个类，就能接入一个全新的计算存储引擎。")],-1),i("p",null,[i("a",{href:"./LinkisManager/README.md"},"进入LinkisManager架构设计")],-1),i("h3",null,"4、EngineConnManager",-1),i("p",null,"EngineConnManager (简称ECM)是 Linkis0.X EngineManager 的精简升级版。Linkis1.0下的ECM去除了引擎的申请能力，整个微服务完全无状态，将聚焦于支持各类 EngineConn 的启动和销毁。",-1),i("p",null,[i("a",{href:"./EngineConnManager/README.md"},"进入EngineConnManager架构设计")],-1),i("h3",null,"5、EngineConn",-1),i("p",null,"EngineConn 是 Linkis0.X Engine 的优化升级版本，将提供 EngineConn 和 Executor 两大模块，其中 EngineConn 用于连接底层的计算存储引擎，提供一个打通了底层各计算存储引擎的 Session 会话；Executor 则基于这个 Session 会话，提供交互式计算、流式计算、离线计算、数据存储的全栈计算能力支持。",-1),i("p",null,[i("a",{href:"./EngineConn/README.md"},"进入EngineConn架构设计")],-1)],d={setup:(i,{expose:a})=>(a({frontmatter:{}}),(i,a)=>(n(),e("div",p,m)))},h={setup(e){const i=l(localStorage.getItem("locale")||"en");return(e,a)=>"en"===i.value?(n(),r(t(c),{key:0})):(n(),r(t(d),{key:1}))}};export{h as default};