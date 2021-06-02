---
date: 2021-06-01
title:  Flit 实时模板翻译设计
categories:
  - Design
tags:
  - Design
describe: Flit 主要是提供给机票实时翻译接口，机票翻译的主要是政策类数据，机票退改签和备注。机票调用很多都是重复调用，数据重复，且数据变更的都是一些地点，日期，数字以及金额之类的。
---
[[toc]]
# TUMA
## 前言
## 一、需求
## 二、Tuma ER图

```plantuml
@startuml
package "Project base process " #DDDDDD{
entity Project {
  * id
  --
  name
  source
  productLine
  createBy
  createTime
  deadline //creator
  estimateCompletionTime//acceptor 
  comment
  submitTime
  acceptTime
  finishTime
  wfId
  wfStatus
  wfGroup
  wfAssignee
}
entity ProjectRelation{
   * id
   --
   projectId
   originLocale
   targetLocales
   status// relation reject
   refTable
   refTableId
   parentRefTableId
   deadline
}
entity ProjectRelationBagTaskInfo{
    * id
    --
    projectRelationId
    bagTaskInfoId
    resourceKey
    resourceType
}

entity ProjectRelationTask{
    * id
    --
    ProjectRelationId
    bagTaskSetId
    originLocale
    targetLocale
    deadline
    wfId
    wfStatus
    wfGroup
    wfAssignee
    comment
}
entity ProjectRelationTaskUser{
    * id
    --
    ProjectRelationTaskId
    userId
}
}

package "File task" #DDDDDD {
entity FileTask{
    * id
    --
    name
    creator
    comment
}
entity FileTaskTranslation{
    * id
    --
    FileTaskId
    locale
    fileUrl
    creator
    extrasRef
    extrasHash
}
}
package "BAG task" #DDDDDD {
class BagTask {
    * id
    --
    name
    category
    primaryLocale
    secondaryLocale
    creator
    comments
    headerDef
    searchableColumns
    taskType
    certificationId
    imageColumn
    datachangeLasttime
    projectRelationId
}

entity BagTaskInfo {
    * id
    --
    bagTaskId
    resourceKey
    resourceType
    extrasRef
    datachangeLasttime
}

entity BagTaskContents{
    * id
    --
    bagTaskInfoId
    editor
    locale
    value
    source
    valuechangeLasttime
    datachangeLasttime
    extrasRef
    extrasHash
}

entity BagTaskContentsStatus{
    * id
    --
    bagTaskInfoId
    locale
    status
}
entity Certification{
    * id
    --
    name
    token
    valid
    receiveTopic
    version
    datachangeLasttime
}
entity MemoryBagTask {
    * id
    --
    resourceType
    srcLocale
    src
    tgtLocale
    tgt
    editor
    srcHash
    datachangeLasttime
}
}


package "Segment" #DDDDDD {
entity ContentSegmentation{
    * id
    --
    bizId
    bizTable
    segmentedEditor
    segmentedOriginLocale
    datacreateTime
    datachangeLasttime
}

entity ContentSegmentationTranslation{
    * id
    --
    prevId
    nextId
    contentSegmentationId
    origin
    originRef
    originHash
    translation
    translationRef
    translationHash
    delimiter
    datachangeLasttime
}
}
package "Draft" #DDDDDD {
entity ContentDraft{
    * id
    --
    bizId
    bizTable
    editor
    draft
    draftRef
    datachangeLasttime
}
}

package "Wenquxin" #DDDDDD {
entity ContentsInfo{
    * id
    --
    refTable
    refTableId
    certificationId
    taskId
    taskName
    payerCode
    category
    status
    datachangeLasttime
 }

entity ContentsOrigin {
    * id
    --
     contentsInfoId
     resourceId
     resourceType
     locale
     seqNo
     valid
     origin
     originHash
     originRef
     datachangeLasttime
}

entity ContentsTranslation{
    * id
    --
    originId
    locale
    translation
    translationHash
    translationRef
    datachangeLasttime
}


entity MemoryTask{
    * id
    --
     channelName
     resourceType
     srcLocale
     src
     srcRef
     translation
     translationRef
     srcHash
     translationHash
     organizationName
     translationLocale
     editor
     datachangeLasttime
}
entity OutsourcingOrganization {
    * id
    --
    name
    telephone
    address
    comments
    valid
    datachangeLasttime
}

entity OutsourcingPackage{
    * id
    --
     name
     comments
     outsourcingOrganizationId
     wfId
     wfAssignee
     wfStatus
     wfGroup
     datacreateTime
     datachangeLasttime

}

entity OutsourcingPackageTaskRelation{
    * id
    --
    taskSetId
    outSourcingPackageId
    wfId
    wfAssignee
    wfGroup
    wfStatus
    comments
    datachangeLasttime
}

entity TaskSet {
    * id
    --
    taskId
    taskName
    originLocale
    targetLocale
    category
    wfId
    wfAssignee
    wfStatus
    wfGroup
    certificationId
    contentsInfoId
    datachangeLasttime
}

entity TaskSetOrigin{
    * id
    --
    taskSetId
    resourceId
    resourceType
    locale
    origin
    originHash
    originRef
    datacreateLasttime
    datachangeLasttime
}


entity TaskSetTranslation {
    * id
    --
    taskSetOriginId
    locale
    translation
    translationHash
    translationRef
    status
    datachangeLasttime
}
}

entity WorkflowTrace {
    * id
    --
     bizId
     wfId
     wfLastStatus
     wfStatus
     wfGroup
     wfOperation
     wfAssigner
     wfAssignee
     datachangeLasttime

}


entity FileStorage{
    * id
    --
    refTable
    refTableId
    creator
    fileId
    fileUrl
    fileHash
    comments
    datachangeLasttime
}

Project ||--|{ ProjectRelation
ProjectRelation ||--|| BagTask
ProjectRelation ||--|| FileTask
ProjectRelation ||--|{ ProjectRelationTask
ProjectRelation ||--|| ProjectRelationBagTaskInfo
ProjectRelationTask ||--||ProjectRelationTaskUser
FileTask  ||--|{ FileTaskTranslation
BagTask  ||--|{ BagTaskInfo

BagTaskInfo ||--|{ BagTaskContents
BagTaskInfo ||--|{ MemoryBagTask
BagTaskContents ||--||BagTaskContentsStatus
BagTask  ||--|| Certification
BagTaskContents ||--||ContentSegmentation
ContentsInfo  ||--|{ ContentsOrigin
ContentsTranslation  ||--|| ContentsOrigin

ContentSegmentation||--|{ ContentSegmentationTranslation  


OutsourcingOrganization  ||--|{ OutsourcingPackage
OutsourcingPackage  ||--|{ OutsourcingPackageTaskRelation
OutsourcingPackageTaskRelation  ||--|| TaskSet

TaskSet  ||--|{ TaskSetOrigin
TaskSetOrigin  ||--|{ TaskSetTranslation
BagTaskContents ||--||ContentDraft
ContentSegmentationTranslation ||--||ContentDraft
FileTaskTranslation ||--|| FileStorage
TaskSet  ||--|{ WorkflowTrace
OutsourcingPackage  ||--|{ WorkflowTrace
OutsourcingPackageTaskRelation  ||--|{ WorkflowTrace
Project  ||--|{ WorkflowTrace
ProjectRelationTask  ||--|{ WorkflowTrace

@enduml
```

## 三、技术设计
### 1. BAG Task
#### a) BAG task translation(列表页翻译)

![image-20200909164212384](imags/image-20200909164212384.png)

##### i. 搜索

支持不同维度对BAG进行搜索

##### ii.工具

删除，添加，下载，预翻译以及自动记忆翻译支持locales。
##### iii. 展示区
1. 支持按照翻译内容状态过滤。
2. 展示所有对应Key下的所有列表。
##### iv. 提示区
1. Matched 包括记忆库，google，tripAI等提示。
2. History 翻译历史。
3. Summary 针对原文统计信息。
4. Glossary
5. Search
##### v. 翻译区
1. 原文内容展示，可以选择不同locale作为原文。
2. 翻译，包括草稿和内容保存。
#### b) Two column view（双栏翻译）

![image-20200909164713276](imags/image-20200909164713276.png)

##### i. 搜索区域

不同维度搜索支持

##### ii. 查找&替换

1. 查找替换都是基于当前页的数据实现的，实现逻辑集成在前端。
##### iii. 工作区域

1.内容和草稿保存

2.复数支持

##### iv. stack mode
1. 后台支持接口，点击Plural，自动生成对应支持的key 列表。
2. stack 翻译列表
##### v. 提示区

#### c) 数据接收



 1. 编辑翻译+导入

    编辑线上编辑内容或者线下翻译完，导入至TUMA平台。

 2. 接口接收

    业务线下申请token，TUMA创建BAG task，线下发放token和bag taskID ，业务方推送数据。

#### d) 数据推送

![image-20200909165305618](imags/image-20200909165305618.png)

在 BAG 翻译的数据，都需要在数据确认完，自动推送给业务方，主要是通过业务方申请的token，确定接收数据topic.




### 2. Project

tuma 的翻译任务来源主要有以下几种：

```plantuml

rectangle tuma


rectangle bag
rectangle file
rectangle 文曲星

tuma --> bag
tuma --> file
tuma --> 文曲星

```
#### 1.project 工作流
```plantuml
@startuml
[*] --> created : 保存所有信息信息：confirm
created: 保存头信息和relation 信息
created --> sending: 提交ibu_content team
sending--> unarranged : 数据完成拷贝：confirm
unarranged--> rejected : project 接收方发现不合理：reject
rejected--> created : project 接收方发现不合理：confirm
rejected: Condition调整 数据接重新拷贝
unarranged: 数据完成拷贝后
unarranged --> processing :  project 处理的人，认领这个任务： accept
processing : project 处理的人，只是接受这个project。
processing  --> finished:  project 所有的任务都完成了。（类似之前的batch submit 所有任务）
processing --> rejected
created --> cancelled: 提需人取消： cancel
unarranged --> cancelled: 提需人取消： cancel
processing --> cancelled: 提需人取消： cancel
rejected --> cancelled: 提需人取消： cancel
cancelled :  project 取消后不能操作
@enduml 

```
#### 2. Projet relation 对应下Bag的工作流
```plantuml
@startuml
[*] --> unassigned : project sending 
unassigned --> translating : assign user
translating --> finished :   已经点击完成： finish
@enduml
```
#### 3. BAG task translation 数据拷贝
数据拷贝：
 1. 如果relation 清空后，再拷贝，发生在Project reject 重新后再调整。
 2. relation 只需要拷贝。
 3. BAG content 状态需要把unchecked更新为初始化状态；
    之前的状态有：translated,unchecked,empty,draft,myDraft 四个状态，现在增加一种inited,代表从旧的Task拷贝而来，前提是之前存在的值，这个过程只发生在Project 处于assigned分配过程中。

```plantuml
@startuml
start
:Relation;
if (Relation 定义的refTableId >0) then(yes) 
    : 对应清空BagTask,BagTaskInfo,BagContenets;
else (no)
endif 
if(RefTable 为BAG) then (yes)
    : Relation 关联Condition 完整拷贝BagTask,BagTaskInfo,BagContenets，对应更新relation,condition bagTaskSetId;
else (no)    
endif
stop
@enduml
```
#### 4. BAG 初始化状态（Project情况下）
1. 对应需要生成需要指定的Task 负责人的表。
2. 真正意义上Task 工作流

```plantuml
@startuml
start
->project 状态由processing 变为 assigned;
:Relation&condition 更改或者创建Task工作流;
@enduml
```
#### 5. BAG Translation 状态

```plantuml
@startuml
start
if(BAG 是否关联Project) then (yes)
    : 更新BAG 状态表状态;
else(no)
    : 之前的状态（实际上不需要做任何）;
endif
stop
@enduml
```
#### 6. 数据权限

a. 传入的参数
1. user
2. user+project
3. user+project+task

b. 数据过滤
    根据用户和业务数据本身过滤
c.数据操作
    根据用户和数据本身限定
d. User 语言能力
e. Group User语言能力    

#### 7. Project 后端API

 a. query
 b. createOrUpdate
 c. relationCreateOrUpdate
 d. submit
 e. accept
 f. reject

#### 8. Relation 后端API

 a. query
 b. reject
 c.  change
 d. assign
 e. redirect
#### 9. BAG translation 后端API 调整

 a. query
 b. save
